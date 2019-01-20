<template>
    <v-app>
        <br><br>
        <template>
            <v-container fluid grid-list-md>
            <v-layout row wrap justify-center>
                 <v-flex d-flex xs12 sm6 md4>
                     <v-layout row wrap justify-center>
                         <p class="display-1">กิจกรรมที่น่าสนใจ</p>
                         <v-flex d-flex>
                              <v-card>
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                aspect-ratio="1.7"
                                ></v-img>
                                <v-card-title primary-title>
                                <div class="text-xs-left">
                                    <div class="title text-xs-left font-weight-medium">Kangaroo Valley Safari</div>
                                    <div class="subheading text-xs-left font-weight-thin">Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                                    <!-- <div class="orange-btn">รายละเอียด</div> -->
                                    <v-btn color="#E64E16" dark>รายละเอียด</v-btn>
                                </div>
                                </v-card-title>

                            </v-card>

                         </v-flex>
                   
                    </v-layout>
                </v-flex>
      <v-flex d-flex xs12 sm6 md5>
        <v-layout row wrap justify-center>
            <p class="display-1">กิจกรรมที่น่าสนใจ</p>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex
                v-for="n in 3"
                :key="n"
                d-flex
                xs12
              >
                <v-card
                  color="red lighten-2"
                  dark
                >
                  <v-layout row>
                            <v-flex xs5 d-flex><br><br>
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                aspect-ratio="1.7"
                                ></v-img>
                            </v-flex>

                            <v-flex xs7>
                                <v-card-title primary-title>
                                <div>
                                    <div class="subheading text-xs-left font-weight-medium">Kangaroo Valley Safari</div>
                                    <div class="body-1 text-xs-left font-weight-thin">Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                                </div>
                                </v-card-title>

                            </v-flex>
                        </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
            </v-layout> 

        </v-container>
        </template>
            <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                    <v-card color="indigo" dark>
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                        height="300px">
                            <v-layout
                            fill-height
                            row-wrap>
                                <v-card-text>
                                    <br><br><br>
                                    <p class="display-1">ค่ายเยาวชนดูดาว ครั้งที่ 1</p>
                                    <p class="title">9 - 11 กุมภาพันธ์  2561</p>
                                    <v-btn color="#E64E16">รายละเอียด</v-btn>
                                </v-card-text>
                            </v-layout>
                        </v-img>
                    </v-card>

                </v-flex>
            </v-layout>

            <br><br><br><br><br><br>
        </v-container>
                    <v-layout row wrap>
                            <v-flex xs12 sm12 md12>   
                                <div class="footer">
                                    <br>
                                    <v-layout row wrap>
                            <v-flex xs12 sm12 md12>
                                <carousel :per-page="4" :navigationEnabled="true"
                                :paginationEnabled="false">
                                    <slide v-for="n in 10" :key="n">
                                    <!-- <v-btn color="orange">10 กุมภาพันธ์</v-btn> -->
                                    <div class="blue-btn">
                                        <v-layout row wrap>
                                            <v-flex xs2 class="text-xs-center">
                                            <p class="date-text">10</p><p class="month-text">JAN</p>
                                            </v-flex>
                                            <v-flex xs1><hr></v-flex>
                                            <v-flex xs9 class="text-xs-left">
                                                กิจกรรมงานวันวิทยาศาสตร์
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                    </slide>
                                </carousel>
                            </v-flex>
                        </v-layout>

                        <v-layout row wrap>
                            <v-flex md6>
                                <v-btn flat>NARIT Web Mall</v-btn>
                                <v-btn flat>ประกาศจัดซื้อจัดจ้าง</v-btn>
                                <v-btn flat>ประกาศรับสมัครงาน</v-btn>
                            </v-flex>
                            <v-flex md6 class="text-xs-right">
                                <v-layout row wrap> 
                                    <v-flex md2></v-flex>
                                    <v-flex md10 class="text-xs-left">
                                        <p class="right-footer-text">สถาบันวิจัยดาราศาสตร์แห่งชาติ (องค์การมหาชน) กระทรวงวิทยาศาสตร์และเทคโนโลยี <br>
                                        260 หมู่ 4 ตำบลดอนแก้ว อำเภอแม่ริม จังหวัดเชียงใหม่ 50180 <br>
                                        โทรศัพท์ 053-121268-9 โทรสาร 053-121250</p>
                                    </v-flex>
                                </v-layout>
                                
                            </v-flex>

                        </v-layout>

                        
                    </div>
                    
                </v-flex>

            </v-layout>
        
        

    </v-app>
</template>

<script>
import 'firebase/firestore'
import firebase from 'firebase'
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'IndexPage',
    components: {
        Carousel,
        Slide,
        showList: []
    },
    data () {
        return {
            
            
        }
    },
    created () {
        const db = firebase.firestore()
        console.log(db)
    },
    methods: {
        
    }
    
}
</script>

<style>
.blue-btn {
    background-color: #317DAF;
    border: none;
    color: white;
    padding: 10px 5px;
    width: 300px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.vl {
    /* border-left: 2px solid black; */
    width: 1px;
    height: 70%;
    border-left: 1px solid white;
    position: absolute;
    margin-left: 70px;
    margin-top: 5px;
}
.month-text {
    font-size:10px;margin-top: 0px; margin-bottom: 0px
}
.date-text {
    font-size:12px;margin-top: 0px; margin-bottom: 0px
}
.footer {
    height: 170px;
    width: 100%;
    background-color: white;
    position: fixed;
    left: 0;
    bottom: 0;
}

hr { 
    border:         none;
    border-left:    1px solid hsla(200, 10%, 50%,100);
    height:         80%;
    margin-top:     5px;
    width:          1px;       
}
.left-footer-text {
    margin-left: 50px;
    margin-top: 20px;
    color: black;
}
.right-footer-text {
    margin-right: 50px;
    margin-top: 20px;
    color: black;
}
.list-color {
    background-color: #16466B;
    opacity: 50%;
}

</style>
