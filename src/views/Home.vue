<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  metaInfo: {
    title: "Dog Home Page",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      {
        name: "description",
        content: "Home page for cute dogs"
      }
    ]
  },
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
