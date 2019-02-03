<template>
<v-app>
    <div id="app">
        <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
        <template>
            <v-toolbar color="#16466B" dark flat>
                <v-toolbar-title >
                        <v-img
                        :src="logo"
                        height="300px"></v-img>
                    </v-toolbar-title>
                <v-toolbar-items>
                <v-btn v-for="i in menu.length" :key="i" flat ripple @click="routeTo(i)">{{menu[i-1]}}</v-btn>
                </v-toolbar-items>
                <v-menu open-on-hover offset-y bottom
                    transition="slide-y-transition">
                    <v-toolbar-title slot="activator">
                        <v-btn flat ripple>FACILITIES</v-btn>
                    </v-toolbar-title>
                    <v-list class="list-color">
                        <v-list-tile
                        v-for="(item, index) in facilitiesItems"
                        :key="index"
                        >
                        <v-list-tile-title>{{ item.src }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>

                <v-menu open-on-hover offset-y bottom
                    transition="slide-y-transition">
                    <v-toolbar-title slot="activator">
                        <v-btn flat ripple>FOR_ASTRONEMERS</v-btn>
                    </v-toolbar-title>
                    <v-list class="list-color">
                        <v-list-tile
                        v-for="(item, index) in astronomItem"
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
            logo: require('@/assets/narit_logo.png'),
            facilitiesItems: [
            {
                src: 'observing-facilities'
            },
            {
                src: 'talk seminar distribute by narit'
            },
            {
                src: 'research'
            },
            {
                src: 'job oppotunities for astronomer'
            },
            {
                src: 'publication'
            }
            ],
            astronomItem: [
            {
                src: 'observing-facilities'
            },
            {
                src: 'talk seminar distribute by narit'
            },
            {
                src: 'research'
            },
            {
                src: 'job oppotunities for astronomer'
            },
            {
                src: 'publication'
            }
            ],
            menu: ['HOME','ABOUT']
            
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
            console.log(i)
            if (i === 1) {
                this.$router.push({ path: '/'}) 
            } else if (i == 2) {
                this.$router.push({ path: '/about'}) 
            }
        }
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Prompt:300,400');



html, body {
  font-family: 'Prompt', sans-serif;
}

body {
  font-family: 'Prompt', sans-serif;
}

#app {
  font-family: 'Prompt', sans-serif;
  text-align: center;
  margin-top: 10px;
}

footer {
  position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #97c763;
    color: white;
    text-align: center;
}

.footer-text {
  margin-left: 10px;
  margin-top: 10px;
}

.call-center {
  margin-top: 15px;
}

.call-center-tel {
  margin-top: 25px;
}
.phone {
  margin-top: 22px;
  padding-right: 10px;
  font-size: 25px;
}
</style>

