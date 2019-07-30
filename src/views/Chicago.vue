<template>
  <div>
    <h1>This page shows store data</h1>
    <p class="loading" v-if="loading">Loading data...</p>

    <div v-if="!loading">
      {{ storeResponse }}
    </div>
  </div>
</template>
<script>
import api from "../api";

export default {
  metaInfo() {
    return !this.loading
      ? {
          title: `lululemon ${this.storeResponse.data[0].attributes.friendly_from_name} Store in ${this.storeResponse.data[0].attributes.city}`,
          meta: [
            {
              name: 'description',
              content: `Find the latest technical gear for yoga lovers, runners, and everyone in between at our lululemon ${
                this.storeResponse.data[0].attributes.friendly_from_name
              } store. Hemming is always on us!`,
            },
          ],
        }
      : {};
  },
  data() {
    return {
      storeResponse: {},
      loading: true
    };
  },
  created() {
    api
      .getStore({
      city: 'chicago',
      storeName: 'lincoln-park',
    })
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

