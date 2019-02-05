<template>
    <v-app>
        <v-container fluid grid-list-md>
            <v-layout row wrap text-xs-left justify-center>
                <v-flex xs12 sm12 md9>
                    <h1>{{data.title}}</h1><br>
                    <p v-html="data.full"></p>

                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>



<script>
import 'firebase/firestore'
import firebase from 'firebase'
import jsondata from '../data/narit-project-export.json'

export default {
    data () {
        return {
            data: {}
        }
    },
    methods: {
        
    },
    created () {
        console.log(this.$route.params.id)

    },
    mounted () {
        let temp = jsondata["activities"].filter((e,index) => {
            return e.key === this.$route.params.id
        })
        this.data = temp[0]
        console.log(this.data)
        
    }
}
</script>
