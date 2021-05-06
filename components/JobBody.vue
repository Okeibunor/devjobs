<template>
  <div class="container">
    <div class="job-body-container">
      <div class="job-header">
        <div>
          <div class="pre_title">
            <span>{{ timeAgo }}</span>
            <span>{{ job_type }}</span>
          </div>
          <div class="spacer"></div>
          <div class="job_title">{{ job_title }}</div>
          <div class="spacer"></div>
          <div class="job_location">{{ job_type }}, {{ job_location }}</div>
        </div>
        <button class="btn">APPLY NOW</button>
      </div>
      <div class="job-body">
        <vue-simple-markdown :source="job_description"></vue-simple-markdown>
      </div>
    </div>
    <div class="job-apply">
      <h3>How to Apply</h3>
      <br />
      <div>
        <vue-simple-markdown :source="how_to_apply"></vue-simple-markdown>
      </div>
    </div>
    <div class="job-bottom">
      <div>
        <div class="spacer"></div>
        <div class="job_title">{{ job_title }}</div>
        <div class="spacer"></div>
        <div class="job_location">{{ job_type }},{{ job_location }}</div>
      </div>
      <button class="btn">APPLY NOW</button>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data: function () {
    return {};
  },
  props: [
    "time_pub",
    "job_description",
    "job_type",
    "job_location",
    "job_title",
    "how_to_apply",
  ],

  computed: {
    refine_job: function () {
      let about_job = this.job_description;
      let val = about_job.replace(/\n|\r\n|\n\r|\r/g, "<br/>");
      let val2 = this.replace_asterisk(val).replace(/\*/g, "");
      let val3 = this.replace_links(val2);
      return val3;
    },
    timeAgo() {
      return moment(this.time_pub).fromNow();
    },
  },
  methods: {
    replace_asterisk: function (word) {
      var nth = 0;
      word = word.replace(/\*\*/g, function (match, i, original) {
        nth++;
        if (nth % 2 == 0) {
          return "</h3>";
        } else if (nth % 2 != 0) {
          return "<h3 class='subheading' style='color:black;font-family:'Inter''>";
        } else return match;
      });
      return word;
    },
    replace_links: function (word) {
      word = word.replace(
        /(\(([^)]+)\))(\[([^)]+)\])/,
        function (match, p1, p2, offset, string) {
          return `<a href=${p2}>${p1}</a>`;
        }
      );
      return word;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Lato:wght@300;400&display=swap");

$text_grey: rgb(160, 160, 160);
$text_purple: #7172c4;

* {
  font-family: "Lato", sans-serif;
  word-wrap: break-word;
}

.job-body {
  font-size: 1.02rem;
  line-height: 1.7rem;
  font-weight: 430;
  font-family: "Inter", sans-serif;
  color: $text_grey;
}

.job-body-container {
  margin: 6rem 24.45vw 2rem;
  padding: 2.5em;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  background: #ffffff !important;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    margin: 6rem 5vw 2rem;
  }
}
.pre_title {
  color: $text_grey;
  :first-child::after {
    content: " \00b7";
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
  outline: none;
}
.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .btn {
      width: 100%;
      margin: 2rem 0;
    }
  }
}
.job_title {
  font-weight: 600;
  font-family: "Lato", sans-serif;
  font-size: 1.6rem;
}
.job_location {
  color: $text_purple;
  font-weight: bold;
}
.job_company {
  color: $text_grey;
}
.spacer {
  height: 0.6rem;
  font-size: 2rem;
}
.job-apply {
  background-image: url("~@/assets/images/header_bg.png");
  padding: 2.5em;
  background-repeat: repeat;
  background-size: cover;
  color: #ffffff;
  border-radius: 7px;
  margin: 0 24.45vw;
  @media screen and (max-width: 768px) {
    margin: 0 5vw;
  }
}
.job-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 23rem;
  background: #ffffff;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    > div {
      display: none;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
