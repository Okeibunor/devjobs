<template>
  <div v-on:click="openJob" v-bind:id="id" class="job_body">
    <div class="logo_container">
      <img
        v-if="logo"
        v-bind:src="logo"
        alt="company logo"
        class="company_logo"
      />
    </div>
    <div class="spacer"></div>
    <div class="pre_title">
      <span>{{ time_pub }}</span>
      <span></span>
      <span>{{ nature }}</span>
    </div>
    <div class="spacer"></div>

    <div class="job_title">{{ title }}</div>
    <div class="spacer"></div>

    <div class="job_company">{{ company }}</div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="job_location">{{ location }}</div>
  </div>
</template>

<script>
export default {
  name: "job",
  props: ["id", "logo", "time_pub", "nature", "title", "company", "location"],
  methods: {
    openJob: function () {
      this.$router.push(`/job/${this.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
$text_purple: #7172c4;
$background_purple: #9899ff;
$text_grey: rgb(179, 179, 179);
$background_grey: #e4e4e4;
$background_grey_dark: #c9c9c9;
.job_body {
  background-color: white;
  padding: 2.8rem 1.8rem;
  position: relative;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logo_container {
  position: absolute;
  top: -20px;
  width: 60px;
  height: 60px;
  background-color: $background_grey;
  border-radius: 10px;
  box-shadow: 1px 2px #f7f7f9;
}
.company_logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}
.pre_title {
  display: flex;
  /* background-color: $background_grey; */
  /* width: 70%; */
  height: 20px;
  justify-content: flex-start;
  span {
    background: $background_grey;
    margin-right: 5px;
    border-radius: 5px;
    width: 35%;
  }
  :nth-child(2) {
    background: $background_grey;
    width: 5px;
    align-self: center;
    height: 5px;
    border-radius: 5px;
    margin: auto 0.5rem;
  }
}
.job_title {
  width: 89%;
  background: $background_grey_dark;
  height: 20px;
  margin: 0.5rem 0;
  border-radius: 5px;
}

.job_company {
  background: $background_grey;
  border-radius: 5px;
  width: 60%;
  height: 20px;
  margin: 0.5rem 0;
}

.job_location {
  background: $background_purple;
  border-radius: 5px;
  width: 70%;
  height: 20px;
  margin: 0.5rem 0;
}
.spacer {
  height: 0.8rem;
  font-size: 2rem;
}
</style>
