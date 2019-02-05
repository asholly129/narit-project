<template>
    <v-app>
        <v-img :src="bg" class="grey lighten-2">
        <br><br>
        <template>
             <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                    <v-card color="indigo" dark>
                        <v-img
                        :src="img"
                        height="300px">
                            <v-layout
                            fill-height
                            row-wrap>
                                <v-card-text>
                                    <br><br><br>
                                    <p class="font-weight-medium" style="font-size:30px">ค่ายเยาวชนดูดาว ครั้งที่ 1</p>
                                    <p class="font-weight-medium" style="font-size:20px">9 - 11 กุมภาพันธ์  2561</p>
                                    <v-btn color="#E64E16"  :href="link" target="_blank">สมัคร</v-btn>
                                </v-card-text>
                            </v-layout>
                        </v-img>
                    </v-card>

                </v-flex>
            </v-layout>

        </v-container>
            <v-container fluid grid-list-md>
            <v-layout row wrap justify-center>
                 <v-flex d-flex xs12 sm6 md4>
                     <v-layout row wrap justify-center>
                         <p class="font-weight-medium" style="font-size:30px; color: #FFFFFF">กิจกรรมที่ล่าสุด</p>
                         <v-flex d-flex>
                              <v-card color="#3886BB" dark>
                                <v-img
                                :src="latestAct.img"
                                aspect-ratio="1.7"
                                ></v-img>
                                <v-card-title primary-title>
                                <div class="text-xs-left">
                                    <div class="text-xs-left font-weight-medium" style="font-size:20px">{{latestAct.title}}</div>
                                    <div class="subheading text-xs-left font-weight-thin">{{latestAct.content}}</div>
                                    <!-- <div class="orange-btn">รายละเอียด</div> -->
                                    <v-btn color="#E64E16" dark @click="routeToDetail(latestAct.id)">รายละเอียด</v-btn>
                                </div>
                                </v-card-title>

                            </v-card>

                         </v-flex>
                   
                    </v-layout>
                </v-flex>
      <v-flex d-flex xs12 sm6 md5>
        <v-layout row wrap justify-center>
            <p class="font-weight-medium" style="font-size:30px; color: #FFFFFF">กิจกรรมที่น่าสนใจ</p>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex
                v-for="(data, index) in interestedAct"
                :key="index"
                d-flex
                xs12
              >
                <v-card
                  color="#3886BB"
                  dark
                  @click="routeToDetail(data.id)"
                >
                  <v-layout row>
                            <v-flex xs5 d-flex><br><br>
                                <v-img
                                :src="data.img"
                                aspect-ratio="1.7"
                                ></v-img>
                            </v-flex>

                            <v-flex xs7>
                                <v-card-title primary-title>
                                <div>
                                    <div class="subheading text-xs-left font-weight-medium" >{{data.title}}</div>
                                    <div class="body-1 text-xs-left font-weight-thin">{{data.content}}</div>
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
        <br><br><br><br><br><br><br><br>
        </template>
           
        
                    <v-layout row wrap>
                            <v-flex xs12 sm12 md12>   
                        <div class="footer">
                            <br>
                            <v-layout row wrap>
                            <v-flex xs12 sm12 md12 style="background-color: rgba(256, 256, 256, 0.3)">
                                <carousel :per-page="4" :navigationEnabled="true"
                                :paginationEnabled="false">
                                    <slide v-for="(data, index) in activities" :key="index">
                                    <!-- <v-btn color="orange">10 กุมภาพันธ์</v-btn> -->
                                    <div class="blue-btn" @click="routeToDetail(data.id)">
                                        <v-layout row wrap>
                                            <v-flex xs2 class="text-xs-center">
                                            <p class="date-text">{{data.day}}</p><p class="month-text">{{data.month}}</p>
                                            </v-flex>
                                            <v-flex xs1><hr></v-flex>
                                            <v-flex xs9 class="text-xs-left">
                                                {{data.title}}
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                    </slide>
                                </carousel>
                            </v-flex>
                        </v-layout>

                        <v-layout row wrap style="background-color: #FFFFFF;">
                            <v-flex md6 class="text-xs-left">
                                <v-btn flat>NARIT Web Mall</v-btn>
                                <v-btn flat>ประกาศจัดซื้อจัดจ้าง</v-btn>
                                <v-btn flat>ประกาศรับสมัครงาน</v-btn>
                            </v-flex>
                            <v-flex md6 class="text-xs-right">
                                <v-layout row wrap> 
                                <!-- <v-flex md2></v-flex> -->
                                    <v-flex md2><br>
                                        <img :src="logo" style="width: 100px">
                                    </v-flex>
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
            </v-img>
    </v-app>
</template>

<script>
// import 'firebase/firestore'
// import firebase from 'firebase'
import { Carousel, Slide } from 'vue-carousel';
import jsondata from '../data/narit-project-export.json'

export default {
    name: 'IndexPage',
    components: {
        Carousel,
        Slide,
        showList: []
    },
    data () {
        return {
            activities: [],
            latestAct: {},
            img: require('@/assets/pr20180820_1_01.jpg'),
            interestedAct: [],
            logo: require('@/assets/narit_logo.png'),
            bg: require('@/assets/bgg.jpg'),
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSe2DLWTogem_h_WN2mAIxBQYbDXXskpzv93nk3cG0GVjcrYvg/viewform?fbclid=IwAR1_JWXkSVVZybUAxUpcq5dwmmyT1g9vuDOO6R7cTjVAzK3csepETqH-7iM'
        }
    },
    created () {
    },
    mounted () {
        const moment = require('moment');
    
        let interestTemp = []
        jsondata["activities"].forEach((e, index) => {
            let actDate = e.date
               let m = moment(actDate)
                let temp = {
                    title: e.title,
                    content: e.content,
                    date: actDate,
                    isInterested: e.isInterested,
                    month: m.format('MMM'),
                    day: m.format('DD'),
                    img: e.img,
                    id: e.key
                }
                if (temp.isInterested) {
                    interestTemp.push(temp)
                }
                this.activities.push(temp)
        })
        this.interestedAct = interestTemp.slice(Math.max(this.interestedAct.length - 3, 1))
        this.latestAct = this.activities[this.activities.length - 1]
        console.log(this.interestedAct)
        // const db = firebase.database().ref('/activities').once('value', (data) => {
        //     console.log(data)
        //     let interestTemp = []
        //     data.forEach(e => {
               
        //        let actDate = e.child('date').val()
        //        let m = moment(actDate)
        //         let temp = {
        //             title: e.child('title').val(),
        //             content: e.child('content').val(),
        //             date: actDate,
        //             isInterested: e.child('isInterested').val(),
        //             month: m.format('MMM'),
        //             day: m.format('DD'),
        //             img: e.child('img').val(),
        //             id: e.key

        //         }
        //         if (temp.isInterested) {
        //             interestTemp.push(temp)
        //         }
        //         this.activities.push(temp)
        //     })
        //     this.interestedAct = interestTemp.slice(Math.max(this.interestedAct.length - 3, 1))
        //     this.latestAct = this.activities[this.activities.length - 1]
        //     console.log(this.interestedAct)
        // })
        
    },
    methods: {
        routeToApplication() {
            // this.$router.push({ path: '/application'}) 
            this.$router.go('https://docs.google.com/forms/d/e/1FAIpQLSe2DLWTogem_h_WN2mAIxBQYbDXXskpzv93nk3cG0GVjcrYvg/viewform?fbclid=IwAR1_JWXkSVVZybUAxUpcq5dwmmyT1g9vuDOO6R7cTjVAzK3csepETqH-7iM')
        },
        routeToDetail(key) {
            console.log(key)
            this.$router.push({ path: `/content/${key}` })
        }
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
    height: 60px;
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
    background-color: transparent;
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
.bg {
    position: fixed;
}

</style>
