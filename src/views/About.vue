<template>
  <HeaderBar />
  <div class="maxTitle">環境介紹</div>
  <div>
    <div class="aboutComposing">
      <div class="secondTitle">展演空間(觀眾席)
        <img class="h-80" :src="spaceImg1" :alt="spaceAlt1">
        <div>大約可容納30-40人左右,其中包含兩顆外場喇叭,椅子及投影機</div>
      </div>
      <div class="secondTitle">展演空間(表演席)
        <img class="h-80" :src="spaceImg2" :alt="spaceAlt2">

      </div>
    </div>
    <div class="aboutComposing mt-36">

      <div class="secondTitle">教學教室
        <img class="h-80" :src="spaceImg3" :alt="spaceAlt3">
        <p class="">教室擁有譜架及吉他可使用</p>
      </div>

      <div class="secondTitle">教學教室
        <img class="h-80" :src="spaceImg3" :alt="spaceAlt3">
        <p class="">教室擁有譜架及吉他可使用</p>
      </div>
    </div>

  </div>
  <FooterBar />
</template>


<script lang="ts">
import HeaderBar from "@/component/Header.vue"
import FooterBar from "@/component/Footer.vue"

export default{ 
  name: "About", 
  components: {
    HeaderBar,
    FooterBar
  },
  data(){
    const images = "./src/assets/images/about/"
    return{
      spaceImg1: images + "lectureSpace.jpg",
      spaceAlt1: "sapce1",
      spaceImg2: images + "lectureSpace2.jpg",
      spaceAlt2: "sapce2",
      spaceImg3: images + "guitarClassSpace.jpg",
      spaceAlt3: "sapce3",
    }
  },
  setup() {
    return {
    }
  },
  methods: {
  }
}
</script>
