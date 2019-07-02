<template>
  <div>
    <h1>This page shows store data</h1>
    <p class="loading" v-if="loading">Loading data...</p>

    <div v-if="!loading">
      {{ storeResponse.data.attributes.address1 }}
      {{ storeResponse.data.attributes.city }}
    </div>
  </div>
</template>
<script>
import api from "../api";

export default {
  metaInfo: {
    title: "Store Page",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      {
        name: "description",
        content: "This is the Chicago Store Data!"
      }
    ]
  },
  data() {
    return {
      storeResponse: {},
      loading: true
    };
  },
  created() {
    api
      .getStore()
      .then(response => {
        this.storeResponse = response;
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>

