<template>
    <v-app>
        <v-container fluid grid-list-md>
        <div class="display-1"> เข้าสู่ระบบ</div>
        <br>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm6 md3>
                <v-text-field
                label="ชื่อผู้ใช้"
                placeholder="ชื่อผู้ใช้"
                ></v-text-field>
                <v-text-field
                label="รหัสผ่าน"
                placeholder="รหัสผ่าน"
                ></v-text-field>
                <v-btn color="#E64E16" dark>
                    เข้าสู่ระบบ
                </v-btn>
            </v-flex>
        </v-layout>
        </v-container>
    </v-app>
</template>

<script>

export default {
    name: 'LoginPage',
    data () {
        return {
        }
    },
    created() {
    }
    
}
</script>

