<template>
<v-app>
    <div id="app">
        <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
        <template>
            <v-toolbar color="#16466B" dark flat>
                <v-toolbar-title class="body-2 grey--text">NARIT</v-toolbar-title>
                <v-toolbar-items>
                <v-btn v-for="i in menu.length" :key="i" flat ripple @click="routeTo(i)">{{menu[i-1]}}</v-btn>
                </v-toolbar-items>
                <v-menu open-on-hover offset-y bottom
                    transition="slide-y-transition">
                    <v-toolbar-title slot="activator">
                        <v-btn flat ripple>TOUCH</v-btn>
                    </v-toolbar-title>

                    <v-list class="list-color">
                        <v-list-tile
                        v-for="(item, index) in items"
                        :key="index"
                        >
                        <v-list-tile-title>{{ item.src }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>

                <v-spacer></v-spacer>
                <v-btn icon flat><v-icon>search</v-icon></v-btn> <hr>
                    <v-btn flat @click="routeToLoginPage()">LOGIN</v-btn>
                    <v-btn color="#E64E16" @click="routeToRegisterPage()">REGISTER</v-btn>
            </v-toolbar>
        </template>
    <router-view/>
    
  </div>
</v-app>
</template>

<script>
import IndexPage from '@/components/IndexPage'
export default {
    components : {
        IndexPage
    },
    data () {
        return {
            count: 3,
            items: [
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
            },
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
            },
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
            },
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
            }
            ],
            menu: ['HOME', 'LINK1', 'LINK2', 'LINK3', 'LINK4']
            
        }
    },
    methods: {
        pointThis (i) {
            console.log(i)
        },
        routeToRegisterPage() {
            this.$router.push({ name: 'RegisterPage' })
        },
        routeToLoginPage() {
            this.$router.push({ path: '/login'})
        },
        routeTo(i) {
            if (i === 1) {
                this.$router.push({ path: '/' })
            }
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  text-align: center;
  margin-top: 10px;
}

</style>
