<template>
  <HeaderBar />
  <div class="maxTitle">課程一覽</div>
  <div>
    <p>錄音/混音課程</p>
    <p>吉他教學</p>
    <p>貝斯教學</p>
    <p>唱歌教學</p>
    <p>電子琴教學</p>
    <p>爵士鼓教學</p>
  </div>
  <FooterBar />
</template>


<script lang="ts">
import HeaderBar from "@/component/Header.vue"
import FooterBar from "@/component/Footer.vue"

export default{ 
    name: "Lesson", 
  components: {
    HeaderBar,
    FooterBar
  },
  setup() {
    return {
    }
  },
  methods: {
  }
}
</script>
