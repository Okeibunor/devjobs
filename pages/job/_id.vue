<template>
  <div>
    <div class="container" v-if="job">
      <job-header
        v-bind:logo="this.job.company_logo"
        v-bind:company_site="this.job.company_url"
        v-bind:company="this.job.company"
      />
      <job-body
        v-bind:time_pub="this.job.created_at"
        v-bind:job_description="this.job.description"
        v-bind:job_type="this.job.type"
        v-bind:job_location="this.job.location"
        v-bind:job_title="this.job.title"
        v-bind:how_to_apply="this.job.how_to_apply"
      />
    </div>
  </div>
</template>

<script>
import JobBody from "~/components/JobBody.vue";
import JobHeader from "~/components/JobHeader.vue";
import JobSingleLoading from "~/components/jobSingleLoading.vue";
export default {
  components: { JobHeader, JobBody, JobSingleLoading },
  name: "job",
  computed: {
    job() {
      return this.$store.state.jobs.job;
    },
    request_status() {
      return this.$store.state.jobs.request_status;
    },
  },
  beforeMount() {
    this.$store.dispatch("jobs/fetchJob", this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: #f5f6f8;
}
</style>
