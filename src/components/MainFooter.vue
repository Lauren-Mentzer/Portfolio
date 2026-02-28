<script setup lang="ts">
const emit = defineEmits(['parallaxSwitched'])
const props = defineProps<{ reduceMotionChecked: boolean }>()
import InputSwitch from 'primevue/inputswitch'

const checkboxCallback = (key: string) => {
  if (key === 'parallax') emit('parallaxSwitched')
}
</script>

<template>
  <footer class="footer-bg">
    <div class="footer">
      <div>
        <a target="_blank" href="https://www.accessibilityassociation.org/">
          <img src="../assets/iaap.png" alt="IAAP Professional Member" />
        </a>
        <a target="_blank" href="https://www.accessibilityassociation.org/cpacc">
          <img src="../assets/cpacc.png" alt="IAAP Certified CPACC" />
        </a>
      </div>
      <div class="column">
        <p>Crafted by hand</p>
        <p>Copyright 2026 Mentzer</p>
      </div>
      <div class="column">
        <div class="switch">
          <InputSwitch id="parallax" @change="checkboxCallback('parallax')" :modelValue="props.reduceMotionChecked" />
          <label for="parallax">Reduce Motion</label>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
}
.footer {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
}
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
img {
  height: 75px;
  width: 75px;
  margin-right: 8px;
}
p {
  margin: 0;
}
.switch {
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
#switch {
  margin-right: 10px;
}
label {
  font-family: var(--font-mono);
  font-size: 18px;
  margin-left: 8px;
}
@media (max-width: 650px) {
  .switch {
    display: none;
  }
}
</style>
