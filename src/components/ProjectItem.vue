<script setup lang="ts">
import Chip from 'primevue/chip'
import { computed } from 'vue'
interface Project {
  id: number
  image: string
  title: string
  description: string
  links?: any[]
  tags: string[]
}
const props = defineProps<{ project: Project }>()

const src = computed(() => {
  return new URL(`../assets/${props.project.image}`, import.meta.url).toString()
})
</script>

<template>
  <div class="item">
    <h2>{{ props.project.title }}</h2>
    <img :src="src" alt="Project Image" />

    <div class="hover">
      <h2>{{ props.project.title }}</h2>
      <p>{{ props.project.description }}</p>
      <div v-if="props.project.links" class="links-container">
        <a
          v-for="link in props.project.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener"
          >{{ link.text }}</a
        >
      </div>
      <Chip v-for="tag in props.project.tags" :label="tag" :key="tag" class="chip" />
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 380px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1em;
  position: relative;
}
.item:hover img {
  filter: blur(4px);
}
img {
  width: 100%;
  height: auto;
  transition: 0.5s linear all;
}
h2 {
  margin-top: 0;
  font-weight: normal;
}
.hover {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  padding: 1em;
  box-sizing: border-box;
  transition: 0.5s linear all;
  opacity: 0;
  overflow: hidden;
}
.hover:hover {
  opacity: 1;
}
.links-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
a {
  color: var(--color-green);
  font-style: italic;
}
a:hover {
  color: var(--color-green-dark);
}
.chip {
  margin: 2px;
  background-color: var(--color-green-dark);
  color: white;
  font-family: var(--font-mono);
}
@media (max-width: 650px) {
  .item {
    width: 90%;
    text-align: center;
    height: 320px;
    background-color: transparent;
    overflow: hidden;
  }
  img {
    filter: blur(4px);
    height: 100%;
    width: auto;
    margin-left: -1em;
  }
  .hover {
    opacity: 1;
  }
  h2 {
    font-size: 20px;
  }
}
</style>
