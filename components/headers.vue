<template>
  <div class="headers">
    <div class="nav">
      <NuxtLink to="/" class="icon">devjobs</NuxtLink>
      <div class="nav-right">
        <theme-switch />
      </div>
    </div>
    <div class="searchbox">
      <div>
        <img src="@/assets/images/search.svg" alt="" />

        <input
          type="text"
          placeholder="Filter by title, companies, expertise..."
        />
      </div>
      <div class="location">
        <img src="@/assets/images/location.svg" alt="" />
        <input type="text" placeholder="Filter by location..." />
      </div>
      <div>
        <input type="checkbox" id="fulltime" name="fulltime" />
        <label class="fulltime" for="fulltime"></label>
      </div>
      <div class="submit">
        <input type="submit" value="Search" class="btn" />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "./ThemeSwitch.vue";
export default {
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
  }
}
.searchbox {
  position: absolute;
  display: grid;
  grid-template-columns: 4fr 3.5fr 2fr 1fr;
  background-color: #ffffff;
  border-radius: 0.4rem;
  bottom: -3rem;
  width: 77vw;
  @media only screen and (max-width: 1120px) {
    width: 90vw;
  }
  @media only screen and (max-width: 768px) {
    .location,
    .fulltime,
    .submit {
      display: none;
    }
  }

  div {
    vertical-align: middle;
    padding: 1rem;
    &:nth-of-type(2) {
      border-right: 2px solid #e4e4e4;
    }
    &:nth-of-type(1) {
      border-right: 2px solid #e4e4e4;
    }
    img {
      vertical-align: middle;
    }
    label {
      display: inline-block;
      vertical-align: middle;
      font-weight: bold;
    }
  }
  input {
    height: 100%;
    border: none;
    outline: none;
    font-family: "Lato", sans-serif;
    font-size: 1rem;
    vertical-align: middle;
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
.fulltime::after {
  @media only screen and (max-width: 1120px) {
    content: "Full time";
  }
  @media only screen and (min-width: 1120px) {
    content: "Full time Only";
  }
}
</style>
