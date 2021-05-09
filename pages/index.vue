<template>
  <div
    name="top"
    class="container"
    v-bind:class="[isDark ? 'dark_theme' : 'light_theme']"
  >
    <headers />
    <div class="main">
      <div style="height: 150px"></div>

      <div
        v-if="
          !request_status || (request_status == 'loading' && jobs.length < 1)
        "
        class="job_list"
      >
        <jobLoading v-for="index in 12" :key="index" />
      </div>

      <div v-else class="job_list">
        <job
          v-bind:title="job.title"
          v-bind:id="job.id"
          v-bind:company="job.company"
          v-bind:location="job.location"
          v-bind:nature="job.type"
          v-bind:logo="job.company_logo"
          v-bind:time_pub="job.created_at"
          v-for="job in jobs"
          :key="job.id"
        />
      </div>

      <div style="height: 40px"></div>
      <div class="load">
        <button class="btn" v-on:click="loadMore">Load More</button>
      </div>
      <div style="height: 100px"></div>
    </div>
    <a href="#top"><to-top class="toTop" /></a>
  </div>
</template>

<script>
import job_loading from "../components/jobLoading.vue";
import ToTop from "../components/toTop.vue";
export default {
  components: { job_loading },
  name: "index",
  data() {
    return {};
  },
  methods: {
    loadMore: function () {
      this.$store.dispatch("jobs/fetchMoreJobs");
    },
  },
  computed: {
    jobs() {
      return this.$store.state.jobs.jobs;
    },
    request_status() {
      return this.$store.state.jobs.request_status;
    },
    isDark() {
      return this.$store.state.jobs.isDarkMode;
    },
  },
  mounted() {
    this.$store.dispatch("jobs/fetchJobs");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Lato:wght@300;400&display=swap");
$grey_background: #f5f6f8;
$dark_background: #131722;
body {
  background: $grey_background;
}
.container {
  transition: background-color 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  &.dark_theme {
    background-color: $dark_background;
  }
  &.light_theme {
    background-color: $grey_background;
  }
  position: relative;
}
.main {
  padding: 0px 11vw;
  font-family: "Lato", sans-serif;
  @media only screen and (max-width: 1120px) {
    padding: 0px 5vw;
  }
}
.job_list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.9rem 2rem;
}
@media only screen and (max-width: 600px) {
  .job_list {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (min-width: 600px) {
  .job_list {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (min-width: 768px) {
  .job_list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 992px) {
  .job_list {
    grid-template-columns: repeat(3, 1fr);
  }
}

.btn {
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  background-color: #5964e0;
  font-family: "Lato", sans-serif;
  outline: none;
  margin: auto;
}
.load {
  display: flex;
  justify-content: center;
}
.toTop {
  position: fixed;
  right: 1em;
  bottom: 1em;
}
</style>
