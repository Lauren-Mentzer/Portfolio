<script setup lang="ts">
import { reactive } from 'vue'
import ProjectItem from '../components/ProjectItem.vue'

const projects = reactive([
  {
    id: 5,
    image: 'project_5.png',
    title: 'Analytics for School Districts',
    description: "Led front end development on ClassLink's Analytics+ product. Developed over 20 custom data visualizations to help school administrators understand student digital resource usage. Focused on ease of understanding by a non-technical user, as well as maintainability, scalability, and modularity.",
    tags: ['Angular', 'TypeScript', 'Chart.js'],
  },
  {
    id: 6,
    image: 'project_6.png',
    title: 'Record Matching',
    description: 'Created a proof of concept for an entierly new product while at ClassLink in under one month. Working alongside a backend developer and a data engineer, this inter-system student record-matching application was built from the ground up and successfully demoed to clients.',
    tags: ['Angular', 'TypeScript'],
  },
  {
    id: 1,
    image: 'project_1.jpg',
    title: 'Hardware Integration',
    description:
      'Worked with a medical device company while at BrickSimple to create a HIPAA-compliant system integrating their wearable medical devices and proprietary algorithms. In preparation for their clinical trial, focussed on meeting the needs of the nurses who would be using it.',
    tags: ['React', 'Redux', 'Material UI']
  },
  {
    id: 2,
    image: 'project_2.jpg',
    title: 'Big Data Platform',
    description:
      'Created an interface for a global organizational consulting firm while at BrickSimple to analyze large and complicated datasets through a variety of metrics. Developed custom charts with advanced filtering mechanisms, focussing on ease of use and visual clarity.',
    tags: ['Angular', 'TypeScript', 'Highcharts']
  },
  {
    id: 3,
    image: 'project_3.png',
    title: 'Site Redesign',
    description:
      "Redesigned an elementary school band director's website and created a custom WordPress theme and plugins so that he would be able to easily update the site on his own.",
    links: [
      { url: 'https://github.com/Lauren-Mentzer/Milford-Band-Theme', text: 'View theme on GitHub' },
      {
        url: 'https://github.com/Lauren-Mentzer/Milford-Band-Plugins',
        text: 'View plugins on GitHub'
      }
    ],
    tags: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    image: 'project_4.jpg',
    title: 'Inventory Solution',
    description:
      'Led development while at BrickSimple for a national fitness equipment company developing an inventory solution for use in their warehouses. Implemented a complex branching workflow for their warehouse employees including robust error handling for use on their barcode scanning devices.',
    tags: ['Vue', 'Vuex', 'Ionic']
  }
])
</script>

<template>
  <main>
    <div class="projects-container">
      <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </main>
</template>

<style scoped>
.projects-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1em;
  margin-top: 100px;
  max-height: calc(100vh - 180px);
  overflow-y: auto;
}
@media (max-width: 1300px) {
  .projects-container {
    margin-top: 0;
    justify-content: space-around;
    height: calc(100vh - 190px - 6em);
  }
}
@media (max-width: 650px) {
  .projects-container {
    margin-top: 0;
    height: calc(100vh - 146px - 4em);
  }
}
</style>
