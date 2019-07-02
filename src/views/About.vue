<template>
  <div class="about">
    <h1>This page shows a cute random dog image:</h1>
    <p class="loading" v-if="loading">Loading image...</p>

    <div>
      <img v-bind:src="dogResponse.message" />
    </div>
  </div>
</template>
<script>
import api from "../api";

export default {
  metaInfo: {
    title: "Dog Abouts",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      {
        name: "description",
        content: "Check these super cute dogs!"
      }
    ]
  },
  data() {
    return {
      dogResponse: {},
      loading: true
    };
  },
  created() {
    api
      .getDog()
      .then(response => {
        console.log(response);
        this.dogResponse = response;
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
        // document.dispatchEvent(new Event("x-app-rendered"));
      });
  }
};
</script>

