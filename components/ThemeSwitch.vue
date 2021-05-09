<template>
  <div class="themeswitch">
    <img src="@/assets/images/sun.svg" alt="light icon" />
    <div class="button" @click="toggleClass">
      <div class="toggle" :class="{ dark: !isDark }"></div>
    </div>
    <img src="@/assets/images/moon.svg" alt="light icon" />
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",
  data: function () {
    return {
      isDark: true,
    };
  },
  methods: {
    toggleClass() {
      this.isDark = !this.isDark;
      this.$store.dispatch("jobs/toggleDarkMode");
    },
  },
};
</script>

<style lang="scss" scoped>
.themeswitch {
  display: flex;
  align-items: center;

  img {
    width: 1.5em;
    height: 1.5em;
    vertical-align: text-bottom;
  }
}
.button {
  background: white;
  border-radius: 3em;
  width: 3.3em;
  height: 1.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto 0.7rem;
  .toggle {
    margin: 0.35em;
    width: 1em;
    height: 1em;
    background: #5964e0;
    border-radius: 50%;
    transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    &.dark {
      transform: translateX(1.55em);
    }
  }
}
</style>
