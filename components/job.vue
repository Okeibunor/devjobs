<template>
  <nuxt-link
    v-bind:id="id"
    class="job_body"
    :to="{ name: 'job-id', params: { id } }"
    v-bind:class="[isDark ? 'dark_theme' : 'light_theme']"
    tag="div"
  >
    <div class="logo_container">
      <img
        v-if="logo"
        v-bind:src="logo"
        alt="company logo"
        class="company_logo"
      />
      <img class="logo_all" v-else src="~/assets/images/logo_all.svg" alt="" />
    </div>
    <div class="spacer"></div>
    <div class="pre_title">
      <span>{{ timeAgo }}</span>
      <span>{{ nature }}</span>
    </div>
    <div class="spacer"></div>

    <div
      class="job_title"
      v-bind:class="[isDark ? 'dark_theme' : 'light_theme']"
    >
      {{ title }}
    </div>
    <div class="spacer"></div>

    <div class="job_company">{{ company }}</div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="job_location">{{ location }}</div>
  </nuxt-link>
</template>

<script>
import moment from "moment";
export default {
  name: "job",
  props: ["id", "logo", "time_pub", "nature", "title", "company", "location"],
  methods: {},
  computed: {
    timeAgo() {
      return moment(this.time_pub).fromNow();
    },
    isDark() {
      return this.$store.state.jobs.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
$text_purple: #7172c4;
$text_grey: rgb(179, 179, 179);
.job_body {
  padding: 2.8rem 1.8rem;
  position: relative;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &.dark_theme {
    background-color: #18202d;
  }
  &.light_theme {
    background-color: #fff;
  }
}
.job_body:hover {
  box-shadow: 0px 2px 10px#7172c4;
}
.logo_container {
  opacity: 1;
  position: absolute;
  top: -20px;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.2px solid #7173c42c;
  background-color: #fff;
}

.company_logo {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  border-radius: 10px;
}
.pre_title {
  color: $text_grey;
  :first-child::after {
    content: " \00b7";
  }
}
.job_title {
  font-weight: bold;
  font-family: "Lato", sans-serif;
  font-size: 1.2rem;
  &.dark_theme {
    color: rgb(214, 214, 214);
  }
  &.light_theme {
    color: #000;
  }
}
.job_location {
  color: $text_purple;
  font-weight: bold;
}
.job_company {
  color: $text_grey;
}
.spacer {
  height: 0.8rem;
  font-size: 2rem;
}
</style>
