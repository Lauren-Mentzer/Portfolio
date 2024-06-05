<script setup lang="ts">
import Button from 'primevue/button'
import Chip from 'primevue/chip'
import { reactive } from 'vue'

const skills = reactive([
  'React/Redux',
  'Angular',
  'Vue.js/Vuex',
  'HTML/CSS/SCSS',
  'JS/TS/jQuery',
  'Bootstrap',
  'Tailwind CSS',
  'Material UI',
  'WordPress',
  'Adobe Photoshop',
  'Figma'
])
</script>

<template>
  <main>
    <div class="home-content">
      <div class="row">
        <h1><span class="cursive">Front-End</span> Developer</h1>
        <div class="icons-container">
          <a href="https://github.com/Lauren-Mentzer" target="_blank" rel="noopener">
            <Button class="icon" rounded icon="pi pi-github" aria-label="Github" />
          </a>
          <a href="https://www.linkedin.com/in/laurenmentzer/" target="_blank" rel="noopener">
            <Button class="icon" rounded icon="pi pi-linkedin" aria-label="LinkedIn" />
          </a>
        </div>
      </div>
      <p>
        A skilled front end developer with 6+ years of experience in the field, specializing in
        beautiful design and intuitive user experience
      </p>
      <h2>Experienced In:</h2>
      <Chip v-for="skill in skills" :label="skill" :key="skill" class="chip" />
    </div>
  </main>
</template>

<style scoped>
.home-content {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  max-width: 700px;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  row-gap: 10px;
  margin-bottom: 2rem;
}
.icons-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
}
h1 {
  font-weight: normal;
  text-shadow: 5px 5px 10px black;
  margin: 0;
}
.cursive {
  font-family: var(--font-cursive);
  font-size: 46px;
}
.icon {
  border: 1px solid var(--color-blue);
  background-color: var(--color-blue);
}
.icon:hover {
  border: 1px solid var(--color-blue-dark);
  background-color: var(--color-blue-dark);
}
.chip {
  margin: 5px;
  background-color: var(--color-green-dark);
  color: white;
  font-family: var(--font-mono);
}
@media (max-width: 1300px) {
  .home-content {
    margin: auto;
  }
}
@media (max-width: 650px) {
  .home-content {
    padding: 1em;
    text-align: center;
  }
  .row {
    flex-direction: column;
  }
  h1 {
    font-size: 24px;
  }
  .cursive {
    font-size: 34px;
  }
  h2 {
    font-size: 20px;
  }
}
</style>
