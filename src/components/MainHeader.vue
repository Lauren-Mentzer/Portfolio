<script setup lang="ts">
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const menu = ref()
const menuItems = ref([
  { label: 'About', route: '/' },
  { label: 'Experience', route: '/experience' },
  { label: 'Projects', route: '/projects' }
])
const toggleMenu = (event: Event) => {
  menu.value.toggle(event)
}
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
    <h1 class="mobileTitle">{{ route.name }}</h1>
    <Button
      class="mobileButton"
      type="button"
      icon="pi pi-bars"
      @click="toggleMenu"
      aria-haspopup="true"
      aria-controls="mobile_menu"
      raised
      rounded
    />
    <Menu ref="menu" id="mobile_menu" :model="menuItems" :popup="true">
      <template #item="{ item, props }">
        <router-link v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menu>
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
  font-family: var(--font-cursive);
  font-size: 46px;
}
.nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.mobileTitle {
  display: none;
  font-size: 24px;
}
.mobileButton {
  display: none;
  background-color: white;
  border: 1px solid white;
  color: var(--color-green);
}
@media (max-width: 1300px) {
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
@media (max-width: 650px) {
  h1,
  .nav {
    display: none;
  }
  .mobileButton,
  .mobileTitle {
    display: flex;
  }
  img {
    width: 60px;
    margin-right: 0;
  }
}
</style>
