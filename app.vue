<script setup>
import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';

const isLoginComponent = ref(true);
</script>

<template>
  <div class="container">
    <div class="buttons">
      <button @click="isLoginComponent = true">Login</button>
      <button @click="isLoginComponent = false">Register</button>
    </div>
    <component :is="isLoginComponent ? LoginForm : RegisterForm" />
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.buttons button {
  padding: 0.5rem 1.5rem;
  background: #0275ff;
  color: white;
  font-size: 1.25rem;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
}
</style>
