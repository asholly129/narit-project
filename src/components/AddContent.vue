<template>
    <v-app>
        <v-container>
            <div>
                <vue-editor
                :customModules="customModulesForEditor"
                :editorOptions="editorSettings"
                v-model="content"></vue-editor>
            </div>
            



            <p>



5 มกราคม 2562 - สถาบันวิจัยดาราศาสตร์แห่งชาติ (องค์การมหาชน) (สดร.) กระทรวงวิทยาศาสตร์และเทคโนโลยี จัดกิจกรรม “เปิดบ้านหอดูดาวแห่งชาติ” ครั้งที่ 1 ณ หอดูดาวเฉลิมพระเกียรติ 7 รอบ พระชนมพรรษา หรือ หอดูดาวแห่งชาติ ดอยอินทนนท์ จ.เชียงใหม่
            </p>

            <img src="http://www.narit.or.th/images/News/2019/20190107/pr20190107_2_01.jpg" width="500px">
            <img src="http://www.narit.or.th/images/News/2019/20190107/pr20190107_2_02.jpg" width="500px">
            <img src="http://www.narit.or.th/images/News/2019/20190107/pr20190107_2_03.jpg" width="500px">
            <img src="http://www.narit.or.th/images/News/2019/20190107/pr20190107_2_04.jpg" width="500px">

            <p>
                นำประชาชนที่สนใจกว่า 120 ชีวิต สัมผัสเทคโนโลยีกล้องโทรทรรศน์ ขนาดเส้นผ่านศูนย์กลาง 2.4 เมตร ใหญ่และทันสมัยที่สุดในเอเชียตะวันออกเฉียงใต้ ชมห้องควบคุมการทำงานกล้องโทรทรรศน์ซึ่งเป็นห้องทำงานของนักวิจัยดาราศาสตร์ ในค่ำคืนนี้ได้เปิดโอกาสให้ประชาชนดูดาวผ่านช่องมองภาพของกล้องโทรทรรศน์ดังกล่าว พร้อมตั้งกล้องโทรทรรศน์ขนาดเล็กอีกเกือบสิบตัวบริเวณดาดฟ้าให้ชมวัตถุท้องฟ้ากันอย่างจุใจ อาทิ โอไรออนเนบิวลา กาแล็คซีแอนโดรเมดา กระจุกดาวคู่ กระจุกดาวM41 ดาวอังคาร ฯลฯ และยังแนะนำการดูดาวเบื้องต้นอีกด้วย ท่ามกลางอากาศหนาวอุณหภูมิต่ำกว่า 10 องศา ประกอบกับท้องฟ้าที่มืดสนิทไร้แสงรบกวน สามารถมองเห็นดาวได้ชัดเจน ผู้เข้าร่วมจึงสนุกสนานกับกิจกรรมสอนดูดาวด้วยตาเปล่าเป็นอย่างยิ่ง สร้างความประทับใจไม่รู้ลืม
            </p>

            <img src="http://www.narit.or.th/images/News/2019/20190107/pr20190107_2_05.jpg" width="500px">
            <img src="http://www.narit.or.th/images/News/2019/20190107/pr20190107_2_07.jpg" width="500px">
            <img src="http://www.narit.or.th/images/News/2019/20190107/pr20190107_2_07.jpg" width="500px">
            <img src="http://www.narit.or.th/images/News/2019/20190107/pr20190107_2_08.jpg" width="500px">
            <img src="http://www.narit.or.th/images/News/2019/20190107/pr20190107_2_09.jpg" width="500px">
            
            
        </v-container>
    </v-app>
</template>


<script>
import { ImageDrop } from 'quill-image-drop-module'
import  ImageResize from 'quill-image-resize-module'


Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)


export default {    
    
    data () {
        return {
            content: '<p>example content</p>',
            customModulesForEditor: [
				{ alias: 'imageDrop', module: ImageDrop },
				{ alias: 'imageResize', module: ImageResize }
			],
			editorSettings: {
				modules: {
					imageDrop: true,
					imageResize: {}
				}
			},
        }
    },
    components: {
        
    }
}
</script>

