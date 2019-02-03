<template>
    <v-app>
        <v-container>
            <v-layout row wrap text-xs-left>
                <v-flex xs12 sm12 md12>
                    <h2>{{title}}</h2><br>
                    <p>
                        Narit Youth Camp 12th <br>
                        ค่ายแรก วันที่ 1-4 เมษายน 2562 <br>
                        ณ อุทยานแห่งชาติดอยอินทนนท์ อ.จอมทอง จ.เชียงใหม่ <br><br>
                        .
                        รายละเอียดเพิ่มเติม http://www.narit.or.th/index.php/student/nyc/ <br>
                        สอบถามข้อมูลได้ที่ 053-121268 ต่อ 305(ค่าย NYC) <br>
                        Facebook : https://www.facebook.com/NaritYouthCamp/
                    </p>

                    

                    <v-stepper v-model="e1">
                        <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3">Name of step 3</v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card
                            class="mb-5"
                            >
                                <v-text-field
                                    label="E-mail"
                                    placeholder="E-mail"
                                ></v-text-field>

                                <v-text-field
                                    label="คำนำหน้าชื่อ"
                                    placeholder="คำนำหน้าชื่อ"
                                ></v-text-field>

                                <v-text-field
                                    label="ชื่อ"
                                    placeholder="ชื่อ"
                                ></v-text-field>

                                <v-text-field
                                    label="นามสกุล"
                                    placeholder="นามสกุล"
                                ></v-text-field>

                                <v-text-field
                                    label="ชื่อเล่น"
                                    placeholder="ชื่อเล่น"
                                ></v-text-field>

                                <v-text-field
                                    label="วันเดือนปีเกิด"
                                    placeholder="วันเดือนปีเกิด"
                                ></v-text-field>

                                <v-text-field
                                    label="หมู่เลือด"
                                    placeholder="หมู่เลือด"
                                ></v-text-field>

                                <v-text-field
                                    label="ศาสนา"
                                    placeholder="ศาสนา"
                                ></v-text-field>

                                <v-text-field
                                    label="เลขบัตรประจำตัวประชาชน"
                                    placeholder="เลขบัตรประจำตัวประชาชน"
                                ></v-text-field>

                                <v-text-field
                                    label="ที่อยู่"
                                    placeholder="ที่อยู่"
                                ></v-text-field>

                              <v-text-field
                                    label="เบอร์มือถือ"
                                    placeholder="เบอร์มือถือ"
                                ></v-text-field>

                                <v-text-field
                                    label="Facebook"
                                    placeholder="Facebook"
                                ></v-text-field>

                                <v-text-field
                                    label="โรคประจำตัว/ยาประจำตัว"
                                    placeholder="โรคประจำตัว/ยาประจำตัว"
                                ></v-text-field>

                                <v-text-field
                                    label="สิ่งที่แพ้/ยาที่แพ้"
                                    placeholder="สิ่งที่แพ้/ยาที่แพ้"
                                ></v-text-field>

                                <v-text-field
                                    label="อาหารที่แพ้หรือไม่สามารถรับประทานได้"
                                    placeholder="อาหารที่แพ้หรือไม่สามารถรับประทานได้"
                                ></v-text-field>
                                <br>
                            </v-card>

                            <v-btn
                            color="#16466B"
                            @click="e1 = 2"
                            dark
                            >
                            Continue
                            </v-btn>

                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-card
                            class="mb-5"
                            >
                                <v-text-field
                                    label="ศึกษาอยู่ในระดับชั้น"
                                    placeholder="ศึกษาอยู่ในระดับชั้น"
                                ></v-text-field>

                                <v-text-field
                                    label="แผนการเรียน"
                                    placeholder="แผนการเรียน"
                                ></v-text-field>

                                <v-text-field
                                    label="ชื่อสถานศึกษา"
                                    placeholder="ชื่อสถานศึกษา"
                                ></v-text-field>

                                <v-text-field
                                    label="ที่อยู่(สถานศึกษา)"
                                    placeholder="ที่อยู่(สถานศึกษา)"
                                ></v-text-field>

                                <v-text-field
                                    label="จังหวัด(สถานศึกษา)"
                                    placeholder="จังหวัด(สถานศึกษา)"
                                ></v-text-field>

                                <v-text-field
                                    label="ภาคที่ตั้งสถานศึกษา"
                                    placeholder="ภาคที่ตั้งสถานศึกษา"
                                ></v-text-field>

                                <v-text-field
                                    label="ค่ายที่เคยเข้าร่วม"
                                    placeholder="ค่ายที่เคยเข้าร่วม"
                                ></v-text-field>

                                <v-text-field
                                    label="โครงงานหรือผลงานที่เคยส่งประกวด"
                                    placeholder="โครงงานหรือผลงานที่เคยส่งประกวด"
                                ></v-text-field>

                                <v-text-field
                                    label="กิจกรรมอื่นๆ ของโรงเรียน"
                                    placeholder="กิจกรรมอื่นๆ ของโรงเรียน"
                                ></v-text-field>
                                <br>
                            </v-card>

                            <v-btn
                            color="#16466B"
                            @click="e1 = 3"
                            dark
                            >
                            Continue
                            </v-btn>

                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <v-card
                            class="mb-5"
                            >
                                <v-text-field
                                    label="ชื่อ-สกุล (บิดา)"
                                    placeholder="ชื่อ-สกุล (บิดา)"
                                ></v-text-field>

                                <v-text-field
                                    label="สถานที่ทำงาน (บิดา)"
                                    placeholder="สถานที่ทำงาน (บิดา)"
                                ></v-text-field>

                                <v-text-field
                                    label="โทรศัพท์(บิดา)"
                                    placeholder="โทรศัพท์(บิดา)"
                                ></v-text-field>

                                <v-text-field
                                    label="ชื่อ-สกุล (มารดา)"
                                    placeholder="ชื่อ-สกุล (มารดา)"
                                ></v-text-field>

                                <v-text-field
                                    label="สถานที่ทำงาน (มารดา)"
                                    placeholder="สถานที่ทำงาน (มารดา)"
                                ></v-text-field>

                                <v-text-field
                                    label="โทรศัพท์(มารดา)"
                                    placeholder="โทรศัพท์(มารดา)"
                                ></v-text-field>

                                <v-text-field
                                    label="สถานภาพของ บิดา-มารดา"
                                    placeholder="สถานภาพของ บิดา-มารดา"
                                ></v-text-field>

                                <v-text-field
                                    label="ชื่อ - สกุล (ผู้ปกครอง)"
                                    placeholder="ชื่อ - สกุล (ผู้ปกครอง)"
                                ></v-text-field>

                                <v-text-field
                                    label="อาชีพ (ผู้ปกครอง)"
                                    placeholder="อาชีพ (ผู้ปกครอง)"
                                ></v-text-field>

                                <v-text-field
                                    label="มีความสัมพันธ์เป็น"
                                    placeholder="มีความสัมพันธ์เป็น"
                                ></v-text-field>

                                <v-text-field
                                    label="โทรศัพท์(ผู้ปกครอง)"
                                    placeholder="โทรศัพท์(ผู้ปกครอง)"
                                ></v-text-field>
                                <br>
                            </v-card>

                            <v-btn
                            color="#16466B"
                            @click="e1 = 1"
                            dark
                            >
                            Continue
                            </v-btn>

                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
export default {
    
    data () {
        return {
            title: 'ใบสมัครค่ายเยาวชนคนดูดาวและแลกเปลี่ยนวัฒนธรรม ปีที่ 12 (ค่ายสอง)',
            e1: 0
        }
    }
}
</script>
