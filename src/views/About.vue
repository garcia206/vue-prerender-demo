<template>
  <div class="about">
    <h1>This page shows a random dog image.</h1>
    <p class="loading" v-if="loading">Loading image...</p>

    <div>
      <img v-bind:src="dogResponse.message">
    </div>

    
  </div>
</template>
<script>
import api from '../api';

export default {
  data() {
    return {
      dogResponse: {},
      loading: true
    }
  },
  created() {
    api.getDog().then(response => {
      console.log(response)
      this.dogResponse = response;
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      // document.dispatchEvent(new Event("x-app-rendered"))
      this.loading = false;
    })
  }
}
</script>

