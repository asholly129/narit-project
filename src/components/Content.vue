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
// import 'firebase/firestore'
// import firebase from 'firebase'

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

        // const db = firebase.database().ref('/activities').child(this.$route.params.id).once('value', (data) => {
        //     console.log(data.val())
        //     this.data = data.val()
        // })
    }
}
</script>
