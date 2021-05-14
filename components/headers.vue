<template>
  <div class="headers">
    <div class="nav">
      <NuxtLink to="/" class="icon">devgigs</NuxtLink>
      <div class="nav-right">
        <theme-switch />
      </div>
    </div>
    <div
      class="searchbox"
      v-bind:class="[isDark ? 'dark_theme' : 'light_theme']"
    >
      <div class="description">
        <img src="@/assets/images/search.svg" alt="" />

        <input
          type="textborder"
          v-bind:class="[isDark ? 'dark_theme' : 'light_theme']"
          v-model="description"
          placeholder="Filter by title, companies, expertise..."
        />
      </div>
      <div class="location">
        <img src="@/assets/images/location.svg" alt="" />
        <input
          type="text"
          placeholder="Filter by location..."
          v-bind:class="[isDark ? 'dark_theme' : 'light_theme']"
          v-model="location"
        />
        <ul class="places_suggestion">
          <li
            v-on:click="selectPlace(result)"
            v-for="(result, i) in searchResults"
            :key="i"
          >
            {{ result }}
          </li>
        </ul>
      </div>
      <div class="checkbox">
        <input
          type="checkbox"
          id="fulltime"
          name="fulltime"
          v-bind:class="[isDark ? 'dark_theme' : 'light_theme']"
        />
        <label class="fulltime" for="fulltime"></label>
      </div>
      <div class="submit">
        <input
          v-on:click="searchJobs"
          type="submit"
          value="Search"
          class="btn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "./ThemeSwitch.vue";
export default {
  data: () => {
    return {
      description: "",
      location: "",
      searchResults: [],
      service: null,
    };
  },
  metaInfo() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key={key}&libraries=places`,
          async: true,
          defer: true,
        },
      ],
    };
  },
  computed: {
    isDark() {
      return this.$store.state.jobs.isDarkMode;
    },
  },
  methods: {
    // MapsInit() {
    //   this.service = new window.google.maps.places.AutocompleteService();
    // },
    // displaySuggestions(predictions, status) {
    //   if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
    //     this.searchResults = [];
    //     return;
    //   }
    //   this.searchResults = predictions.map(
    //     (prediction) => prediction.description
    //   );
    // },
    // selectPlace(data) {
    //   this.location = data;
    //   this.searchResults = null;
    // },
    searchJobs: function () {
      this.$store.dispatch("jobs/searchJobs", this.description, this.location);
    },
  },
  mounted: function () {
    // this.MapsInit();
  },
  watch: {
    location(newValue) {
      if (newValue) {
        this.service.getPlacePredictions(
          {
            input: this.location,
            types: ["(cities)"],
          },
          this.displaySuggestions
        );
      } else {
        this.searchResults = null;
      }
    },
  },
  components: { ThemeSwitch },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
.headers {
  background-image: url("~@/assets/images/header_bg.png");
  background-repeat: repeat;
  background-size: cover;
  padding: 3rem 11vw;
  border-radius: 0 0 0 4rem;
  position: relative;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  @media only screen and (max-width: 1120px) {
    padding: 3rem 5vw;
    border-radius: unset;
  }
}
.searchbox {
  position: absolute;
  display: grid;
  grid-template-columns: 4fr 3.5fr 2fr 1fr;
  border-radius: 0.4rem;
  bottom: -3rem;
  width: 77vw;
  &.dark_theme {
    background-color: #18202d;
  }
  &.light_theme {
    background-color: #fff;
  }
  @media only screen and (max-width: 1120px) {
    width: 90vw;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 6fr 1fr;
    .location,
    .fulltime,
    .checkbox {
      display: none;
    }
  }

  div {
    display: flex;
    align-items: center;
    vertical-align: middle;
    padding: 1rem;
    &:nth-of-type(2) {
      border-right: 2px solid #e4e4e4;
    }
    &:nth-of-type(1) {
      border-right: 2px solid #e4e4e4;
    }
    img {
      width: 5%;
      vertical-align: middle;
      margin-right: 0.5rem;
    }
    #fulltime {
      width: 10%;
      margin-right: 0.5rem;
    }
    label {
      display: inline-block;
      vertical-align: middle;
      font-weight: bold;
    }
  }
  input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Lato", sans-serif;
    font-size: 1rem;
    vertical-align: middle;
    &.dark_theme {
      background-color: #18202d;
    }
    &.light_theme {
      background-color: #fff;
    }
    &[type="submit"] {
      background: #5964e0;
      color: white;
      padding: 10px 25px;
      border-radius: 5px;
    }
    &[type="checkbox"] {
      background-color: #e8e8ea;
      border-radius: 1px;
      border: 1px solid #e8e8ea;
      outline: none;
    }
  }
  .location {
    position: relative;
    .places_suggestion {
      position: absolute;
      top: 4.5rem;
      left: 0;
      width: 100%;
      /* overflow-y: scroll; */
      background: #fff;
      z-index: 10;
      list-style-type: none;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
      li {
        padding: 1rem;
        &:hover {
          background: rgb(212, 212, 212);
        }
        cursor: pointer;
      }
    }
  }
}
.icon {
  font-size: 1.6em;
  font-weight: bold;
  text-decoration: none;
  color: white;
  font-family: "Poppins", sans-serif;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.nav-right {
  display: flex;
  justify-content: flex-end;
}
.btn {
  -webkit-appearance: none;
}
.fulltime::after {
  @media only screen and (max-width: 1120px) {
    content: "Full time";
  }
  @media only screen and (min-width: 1120px) {
    content: "Full time Only";
  }
}
</style>
