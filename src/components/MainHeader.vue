<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header">
    <div class="name">
      <img alt="monogram" class="logo" src="@/assets/logo.png" />
      <h1><span class="cursive">Lauren</span> Mentzer</h1>
    </div>
    <nav class="nav">
      <RouterLink to="/">About</RouterLink>
      <RouterLink to="/experience">Experience</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.header {
  width: calc(25% - 50px);
  max-width: 450px;
  min-width: 235px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  max-width: 100%;
  width: 300px;
  height: auto;
}
h1 {
  font-weight: normal;
  text-shadow: 5px 5px 10px black;
}
.cursive {
  font-family: 'Rouge Script', cursive;
  font-size: 46px;
}
.nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media (max-width: 1200px) {
  .header {
    width: 100%;
    max-width: unset;
    flex-direction: row;
    justify-content: space-between;
  }
  .name {
    flex-direction: row;
    align-items: center;
  }
  img {
    width: 100px;
    margin-right: 30px;
  }
  .nav {
    max-width: 275px;
  }
}
</style>
