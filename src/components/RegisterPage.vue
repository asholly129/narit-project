<template>
    <v-app>
        <v-container fluid grid-list-md>
        <div class="display-1"> สมัครสมาชิก</div>
        <br>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm6 md3>
                <v-text-field
                label="ชื่อ"
                placeholder="ชื่อ"
                ></v-text-field>
                <v-text-field
                label="นามสกุล"
                placeholder="นามสกุล"
                ></v-text-field>
                <v-select
                :items="items"
                label="สถานะ"
                placeholder="สถานะ"
                ></v-select>
                <v-text-field
                label="อีเมล"
                placeholder="อีเมล"
                ></v-text-field>
                <v-text-field
                label="เบอร์โทร"
                placeholder="เบอร์โทร"
                ></v-text-field>
                <v-btn color="#E64E16" dark>
                    สมัครสมาชิก
                </v-btn>
            </v-flex>
        </v-layout>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'RegisterPage',
    data () {
        return {
            items:['อาจารย์','นักเรียน']
        }
    },
    created () {
    },
    methods: {
        
    }
    
}
</script>


