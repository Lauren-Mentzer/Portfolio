<script setup lang="ts">
const emit = defineEmits(['parallaxSwitched'])
const props = defineProps<{ parallaxChecked: boolean }>()
import InputSwitch from 'primevue/inputswitch'

const checkboxCallback = () => {
  emit('parallaxSwitched')
}
</script>

<template>
  <div class="footer-bg">
    <div class="footer">
      <span>Copyright 2024 Mentzer</span>
      <div class="switch">
        <InputSwitch id="switch" @change="checkboxCallback" :modelValue="props.parallaxChecked" />
        <label for="switch">Parallax</label>
      </div>
    </div>
  </div>
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
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
.switch {
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 0;
  top: 28px;
}
#switch {
  margin-right: 10px;
}
label {
  font-family: var(--font-mono);
  font-size: 18px;
}
@media (max-width: 650px) {
  .footer-bg {
    height: 40px;
  }
  .switch {
    display: none;
  }
}
</style>
