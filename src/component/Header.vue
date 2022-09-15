<template>
  <div class="ml-5 mt-2 flex justify-between text-xl">
    <Router-link to="/">
      <div class="flex w- h-10 justify-center bg-white">
        <img class="ml-5 flex justify-center items-center" :src="logoImg" :alt="logoAlt">
        <img :src="logoTextImg" :alt="logoTextAlt">
      </div>
    </Router-link>
    <div class=""></div>
    <ul class="flex justify-between items-center">
      <Router-link to="About">
        <li class="headerBarTitle">環境介紹</li>
      </Router-link>
      <Router-link to="Lesson">
        <li class="headerBarTitle" @click="">課程一覽</li>
      </Router-link>
      <Router-link to="Blog">
        <li class="headerBarTitle" @click="">BLOG</li>
      </Router-link>
      <Router-link to="DateLesson">
        <li class="headerBarTitle" @click="">預約課程</li>
      </Router-link>
      <Router-link to="RentSpace">
        <li class="headerBarTitle" @click="">空間租借</li>
      </Router-link>
      <Router-link to="OnLineStore">
        <li class="hover:text-cyan-400 text-base" @click="">線上商店</li>
      </Router-link>
    </ul>
    <form class="flex items-center justify-end w-50 mr-5">
      <input class="placeholder-opacity-50 w-40 text-sm h-8 placeholder-gray-700 border-2 text-center flex justify-center items-center border-indigo-500/100 " type="search"
        placeholder="請輸入查詢文字">
      <button class="mr-2 w-16 text-base" type="submit">搜尋</button>
    </form>
  </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue'
  export default defineComponent({
    name: "HeadBar",
    components: {},
    data() {
      const images = "./src/assets/images/"
      return {
        logoImg: images + "Brighthouse_only_logo.svg",
        logoAlt: "Logo",
        logoTextImg: images + "Brighthouse_text_CMYK.svg",
        logoTextAlt: "LogoText",
      }
    },
    methods: {
      jumpTo() {
        this.$router.push({ path: ""})
      }
    }
  }
) 
</script>
