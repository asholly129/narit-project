<template>
  <v-app>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <IndexPage/>
  </v-app>
</template>

<script>
import IndexPage from '@/components/IndexPage'
import 'vuetify/dist/vuetify.min.css'

export default {
  name: 'app',
  components: {
    IndexPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 10px;
}
</style>
