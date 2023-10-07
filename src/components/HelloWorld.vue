<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
       <v-btn v-on:click="handleMove('home')">
        MOVE HOME
       </v-btn>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <v-btn v-on:click="handleMove('about')">
          MOVE ABOUT
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  
  function chunckErrorHandler(err: Error) {
    const errName = (err as Error).name ?? "UNDEFINED";
        if(errName == "ChunkLoadError") {
          window.location.reload();
        }
  }
  
  @Component
  export default class HelloWorld extends Vue {
    handleMove(routerName: string){
      this.$router
      .push({name: routerName})
      .catch((err) => {
        chunckErrorHandler(err);
      });
    }
  }
</script>
