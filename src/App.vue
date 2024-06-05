<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useParallax } from '@vueuse/core'
import { computed, reactive, ref } from 'vue'

import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'

const container = ref(null)
const parallax = reactive(useParallax(container))
const layer0 = computed(() =>
  parallaxChecked.value
    ? {
        transform: `translateX(${parallax.tilt * 10}px) translateY(${parallax.roll * 10}px) scale(1.33) `
      }
    : {
        transform: `scale(1.33)`
      }
)
const layer1 = computed(() =>
  parallaxChecked.value
    ? {
        transform: `translateX(${parallax.tilt * 20}px) translateY(${parallax.roll * 20}px)`
      }
    : null
)
const parallaxChecked = ref(true)
</script>

<template>
  <div>
    <div ref="container" class="container">
      <img alt="space" class="layer-base" :style="layer0" src="@/assets/stars.jpg" />
      <div class="top-layers" :style="layer1">
        <div class="content">
          <MainHeader />
          <div class="router-outlet">
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component" :key="$route.path" />
              </transition>
            </router-view>
          </div>
        </div>
      </div>
      <MainFooter
        :parallaxChecked="parallaxChecked"
        @parallaxSwitched="parallaxChecked = !parallaxChecked"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  transition: 0.3 ease-out all;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}
.layer-base {
  position: absolute;
  height: 100vh;
  width: auto;
  min-width: 100vw;
  top: 0;
  left: 0;
  transition: 0.3s ease-out all;
  z-index: 0;
}
.top-layers {
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease-out all;
  height: calc(100vh - 100px);
  width: 100vw;
  z-index: 1;
}
.content {
  height: calc(100vh - 100px);
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 7em;
}
.router-outlet {
  margin-left: 100px;
  width: calc(75% - 50px);
  max-width: 1000px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 1300px) {
  .content {
    flex-direction: column;
    padding: 3em;
    justify-content: unset;
  }
  .router-outlet {
    margin-left: 0;
    margin-top: 60px;
    width: 100%;
  }
}
@media (max-width: 650px) {
  .content {
    padding: 1em;
  }
  .router-outlet {
    margin-top: 1em;
  }
}
</style>
