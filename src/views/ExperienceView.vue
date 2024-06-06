<script setup lang="ts">
import Timeline from 'primevue/timeline'
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'

const events = reactive([
  {
    date: '2018 -2024',
    title: 'Web Developer BrickSimple, LLC',
    details:
      'Worked on a variety of projects developing web applications for companies in sectors ranging from healthcare to big data analysis, serving as lead, solo, or team developer',
    icon: 'pi pi-code',
    color: '#115883',
    button: true
  },
  {
    date: '2017',
    title: 'Freelance Web Developer & Graphic Designer',
    details: 'Developed websites and branding for various companies and non-profit organizations',
    icon: 'pi pi-code',
    color: '#115883'
  },
  {
    date: '2017',
    title: 'Master of Science Computer Science',
    details: 'Lehigh University, P.C. Rossin College of Engineering & Applied Science',
    icon: 'pi pi-graduation-cap',
    color: '#059669'
  },
  {
    date: '2016',
    title: 'Bachelor of Science Computer Engineering',
    details: 'Lehigh University, P.C. Rossin College of Engineering & Applied Science',
    icon: 'pi pi-graduation-cap',
    color: '#059669'
  },
  {
    date: '2015',
    title: 'Software Development Intern Active Data, Inc.',
    details:
      'Completed several independent projects in C# and .NET including a Twitter API and a custom Gantt chart scheduling calendar',
    icon: 'pi pi-code',
    color: '#115883'
  }
])
</script>

<template>
  <main>
    <div class="timeline-wrapper">
      <Timeline :value="events" class="timeline">
        <template #opposite="slotProps">
          <div class="date-slot">
            <span>{{ slotProps.item.date }}</span>
          </div>
        </template>
        <template #marker="slotProps">
          <span class="icon" :style="{ backgroundColor: slotProps.item.color }">
            <i :class="slotProps.item.icon"></i
          ></span>
        </template>
        <template #content="slotProps">
          <div class="content-slot">
            <span class="title">{{ slotProps.item.title }}</span>
            <div class="details">
              <span>{{ slotProps.item.details }}</span>
              <span v-if="slotProps.item.button"
                >.
                <RouterLink to="/projects" class="link">Read more about these projects.</RouterLink>
              </span>
            </div>
          </div>
        </template>
      </Timeline>
    </div>
  </main>
</template>

<style scoped>
.timeline-wrapper {
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
.timeline {
  padding: 30px 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.date-slot {
  width: 60px;
  font-family: var(--font-mono);
  font-size: 18px;
  margin-top: 5px;
}
.icon {
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}
.content-slot {
  display: flex;
  flex-direction: row;
}
.title {
  width: 200px;
}
.details {
  width: calc(100% - 200px);
  margin-bottom: 35px;
}
.link {
  color: var(--color-green);
  font-style: italic;
}
.link:hover {
  color: var(--color-green-dark);
}
@media (max-width: 1300px) {
  .timeline-wrapper {
    max-height: calc(100vh - 310px);
  }
}
@media (max-width: 650px) {
  .timeline-wrapper {
    max-height: calc(100vh - 140px);
  }
  .title {
    width: unset;
    margin-bottom: 10px;
  }
  .details {
    width: unset;
  }
  .content-slot {
    flex-direction: column;
  }
}
</style>
