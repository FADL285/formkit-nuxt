<script setup>
const formData = ref({
  username: '@fadl285',
  password: '',
});

async function handleSubmit(data) {
  await wait(3000);
  console.log(data);
}
</script>

<template>
  <div>
    <FormKit type="form" :value="formData" @submit="handleSubmit">
      <h1>Login</h1>
      <FormKit
        type="text"
        name="username"
        id="username"
        validation="required|not:admin|matches:/^@[A-Za-z0-9]+$/|length:5"
        label="Username"
        placeholder="@fadl285"
      />

      <FormKit
        type="password"
        label="Password"
        name="password"
        id="password"
        validation="required|length:6"
        placeholder="••••••••••••••••"
      />
    </FormKit>
  </div>
</template>
