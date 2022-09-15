<template>
  <HeaderBar />
  <div class="maxTitle">預約課程</div>
  <form class="flex flex-col" action="" ref="form">
    <label class="mb-12" for="">姓名:
      <input type="text" class="" placeholder="請輸入姓名" v-model="name">
    </label>
    <label class="mb-10" for="">電話:
      <input type="text" class="" placeholder="請輸入電話" v-model="phone">
    </label>
    <label class="mb-10" for="">E-mail:
      <input type="text" class="" placeholder="請輸入Email" name="email">
      <p class="">{{ emailErrMsg }}</p>
    </label>
    <label class="mb-10" for="">日期:
      <input type="datetime-local" class="" v-model="date">
    </label>
    <label class="mb-10" for="">課程:
      <select name="class" class="" v-model="instrum">
        <option>請選擇課程</option>
        <option value="gt">吉他課</option>
        <option value="rc">錄音/混音課</option>
        <option value="bs">貝斯課</option>
        <option value="kb">電鋼琴課</option>
        <option value="dr">爵士鼓課</option>
      </select>
    </label>
  </form>
  <button type="button" @click="handleBtn()" class="btn flex justify-center">送出</button>
  <FooterBar />
</template>

<script lang="ts">
import HeaderBar from "@/component/Header.vue"
import FooterBar from "@/component/Footer.vue"
import { dateSelectionJoinTransformer, formatIsoTimeString } from "@fullcalendar/common"
import { ref } from "vue"
interface emailType {
  email: string,
  emailError: boolean,
  emailErrMsg: string,
}
interface DateList {
  name: string,
  phone: number,
  Email: string,
  date: dateSelectionJoinTransformer,
  classLesson: string,
}
export default{ 
  name: "DateLesson",
  components: {
    HeaderBar,
    FooterBar
  },
  data() {
    return {
      email: '',
      emailError: false,
      emailErrMsg: '',
      name: '',
      nameError: false,
      nameErrMsg: '',
      phone: null,
      date: null,
      instrum: null,
    }
  },
  setup() {
    const eamil = ref('')

    return {
    eamil
    }
  },
  watch: {
    email: function(){
      let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if(!emailRule.test(this.email)){
        this.emailError = true;
        this.emailErrMsg = "Email格式錯誤"
      }else{
        this.emailError = false;
      }
    }
    
  },

  methods: {
    handleBtn() {
      const lessonData = {
        "name" : this.name,
        "phone" : this.phone,
        "Email" : this.mail,
        "date" : this.date,
        "classLesson" : this.instrum
      }
      if(this.name == null){
        alert("還沒填入您的大名")
      }
      if(this.phone == null){
        alert("為輸入您的電話")
      }
      if(this.mail == null){
        alert("請輸入您的EMail")
      }
      if(this.date == null){
        alert("請輸入選取的日期")
      }
      if(this.instrum == null){
        alert("請選擇課程")
      }
        const yes = confirm("資料正確嗎?")
        if(yes){
          alert("送出資料")
          console.log(lessonData);
          
        }else{
          
        }
    }
  }
}
</script>
