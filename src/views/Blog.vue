<template>
  <HeaderBar />
  <div class="maxTitle">Blog</div>
  <div>
    <div class="flex justify-around mt-32">
      <div class="">
        <p>Scale I</p>
        <img class="blogImg" :src="blogImg1" :alt="blogAlt1">
      </div>
      <div>
        <p>Scale II</p>
        <img class="blogImg" :src="blogImg2" :alt="blogAlt2">
      </div>
    </div>
    <div class="flex justify-around mt-16">
      <div class="">
        <p>Scale I</p>
        <img class="blogImg" :src="blogImg3" :alt="blogAlt3">
      </div>
      <div>
        <p>Scale II</p>
        <img class="blogImg" :src="blogImg4" :alt="blogAlt4">
      </div>
    </div>
  </div>
  <FooterBar />
</template>


<!-- <script lang="ts">
import HeaderBar from "@/component/Header.vue"

export default {
  name: 'Blog',
  Components: {
    HeaderBar
  }
}
</script> -->

<script lang="ts">
import HeaderBar from "@/component/Header.vue"
import FooterBar from "@/component/Footer.vue"

export default{ 
    name: "Blog", 
    data() {
      const images = "./src/assets/images/blog/"
      return {
        blogImg1: images + "p1.jpg",
        blogAlt1: "blogImg1 from data",
        blogImg2: images + "s2.jpg",
        blogAlt2: "blogImg2",
        blogImg3: images + "S3.jpg",
        blogAlt3: "blogImg3 from data",
        blogImg4: images + "s4.png",
        blogAlt5: "blogImg4"
      }
    },
    components: {
        HeaderBar,
        FooterBar
    }, 
    setup() {
        return {

        }
    },
    methods: {
        jumpRent() {
            // this.$router.push({ path: "RentRoom"})
    }
  }
}
</script>
