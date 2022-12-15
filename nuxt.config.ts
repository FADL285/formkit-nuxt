// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  formkit: {
    configFile: './my-configs/formkit.config.ts',
  },
});
