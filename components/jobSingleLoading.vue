<template>
  <div class="headers">
    <div class="nav">
      <NuxtLink to="/" class="icon">devjobs</NuxtLink>
      <div class="nav-right">
        <theme-switch />
      </div>
    </div>
    <div class="job-header">
      <div class="company-logo"></div>
      <div class="job-header-body">
        <div>
          <h3>{{ company }}</h3>
          <a class="faint-job-link" v-bind:href="company_site">{{
            company_site
          }}</a>
        </div>
        <a class="job-header-link" v-bind:href="company_site">Company Site</a>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "./ThemeSwitch.vue";
export default {
  components: { ThemeSwitch },
  props: ["logo", "company", "company_site"],
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@300;400;500&display=swap");
$text_grey: rgb(148, 148, 148);
h3 {
  font-family: "Lato", sans-serif;
}
.headers {
  background-image: url("~@/assets/images/header_bg.png");
  background-repeat: repeat;
  background-size: cover;
  padding: 3.5rem 11vw;
  border-radius: 0 0 0 4rem;
  position: relative;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
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
.job-header {
  display: flex;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  position: absolute;
  bottom: -4rem;
  left: 25%;
  width: 50vw;
  background-color: #ffffff;
  min-height: 5rem;
  z-index: 10;
}

.company-logo {
  width: 20%;
  height: 7rem;
  background-color: rgba(128, 128, 128, 0.363);
}
.job-header-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0 1.5em;

  div {
    display: flex;
    flex-direction: column;
  }
}
.job-header-link {
  background: #efeffb;
  color: #595cb9;
  text-decoration: none;
  padding: 0.7em 1em;
  font-weight: bold;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
}
.faint-job-link {
  color: $text_grey;
  text-decoration: none;
}
</style>
