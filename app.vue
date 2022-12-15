<template>
  <div>
    <h1>New Character</h1>

    <FormKit type="form">
      <FormKit
        type="text"
        name="username"
        id="username"
        validation="required|not:admin|matches:/^@[A-Za-z]+$/|length:5"
        label="Username"
        help="Enter your username"
        placeholder="@fadl285"
        prefix-icon="avatarMan"
      >
        <template #label="context">
          {{ context.label }} ? <small> {{ context.help }} </small>
        </template>
        <template #help></template>
      </FormKit>

      <FormKit
        type="select"
        label="Class"
        name="class"
        id="class"
        placeholder="Select a class"
        :options="['Warrior', 'Mage', 'Assassin']"
      />

      <FormKit
        type="range"
        name="strength"
        id="strength"
        label="Strength"
        value="5"
        validation="min:2|max:9"
        validation-visibility="live"
        min="1"
        max="10"
        step="1"
        help="How many strength points should this character have?"
      />
    </FormKit>
  </div>
</template>
