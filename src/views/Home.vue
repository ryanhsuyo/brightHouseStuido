
<template >
    <HeaderBar />
    <!-- <button @click="jumpRent">Rent</button> -->
    <div class="swiper mySwiper">
        <div class="swiper-wrapper max-w-1 h-4/5">
            <div class="swiper-slide page1 bg-red-400">
                <Router-link to="RentSpace">
                    <img class="banner" :src="imgUrl1" :alt="imgAlt1">
                </Router-link>
            </div>
            <div class="swiper-slide page2 bg-green-400">
                <Router-link to="OnLineStore">
                    <img class="banner" :src="imgUrl2" :alt="imgAlt2">
                </Router-link>
            </div>
            <div class="swiper-slide page3 bg-yellow-400">
                <Router-link to="DateLesson">
                    <img class="banner" :src="imgUrl3" :alt="imgAlt3">
                </Router-link>
            </div>
            <div class="swiper-slide page4 bg-blue-400">
                <Router-link to="RentSpace">
                    <img class="banner" :src="imgUrl4" :alt="imgAlt4">
                </Router-link>
            </div>
            <div class="swiper-slide page5 bg-purple-400">
                <Router-link to="Blog">
                    <img class="banner" :src="imgUrl5" :alt="imgAlt5">
                </Router-link>
            </div>
        </div>
    </div>
    <main class=" items-center max-w-screen-lg">
        <div>
            <div class="max-w-screen-sm">
                <!-- s1 -->
                <div class="homeTitle">師資介紹</div>

                <div class="text-sm">
                    <div class="s1l_block">
                        <div class="homeTitleSecond">吉他</div>
                        <div class="t1">烏克麗麗</div>
                        <div class="t1">木箱鼓</div>
                        <div class="t1_content">跟隨著音樂做出<br>相同的旋律、律動吧</div>
                    </div>
                    <div class="sl1_block2">
                        <a href="./dateclass.html" target="預約課程" title="預約課程">
                            <div class="t1_button tb1">
                                預約課程
                            </div>
                        </a>
                    </div>
                </div>
                <div class="section1_right">
                    <div class="sr1_block">
                        <div class="teacher_bg">
                            <div class="circle circle1">
                                <div class="span span1">許嘉祐Ryan</div>
                            </div>
                            <div class="circle circle2">
                                <div class="span span2">高昱信Jordan</div>
                            </div>
                            <div class="circle circle3">
                                <div class="span span3">許漢元Hank</div>
                            </div>
                            <div class="circle circle4">
                                <div class="span span4">屈任之Jammy</div>
                            </div>
                            <div class="circle circle5">
                                <div class="span span5">葉昱均Grace</div>
                            </div>
                            <div class="circle circle6">
                                <div class="span span6">吳澤宇Blake</div>
                            </div>
                            <div class="circle circle7">
                                <div class="span span7">王政元Yun</div>
                            </div>
                        </div>
                    </div>
                </div>



                <!-- s2 -->
                <div class="section2">
                    <div class="section2_left">
                        <div class="sl2_block">
                            <div class="stairs_bg"></div>
                            <div class="block_banner_block">
                                <div class="block_banner_bg"></div>
                            </div>
                        </div>
                    </div>
                    <div class="section2_right">
                        <div class="sr2_block">
                            <div class="homeTitle">最新影片</div>
                            <div class="t2_content">拉丁節奏講座<br>
                                <pre>          2021.03.20</pre>
                            </div>
                            <div class="sr2_row">
                                <div id="player"></div>
                                <div class="img-wrap">
                                    <!-- <img src="https://i.ytimg.com/vi_webp/SFaFpoCvYF8/default.webp"
                                    data-video-id="SFaFpoCvYF8" />
                                <img src="https://i.ytimg.com/vi_webp/081rD8G6aF0/default.webp"
                                    data-video-id="081rD8G6aF0" />
                                <img src="https://i.ytimg.com/vi_webp/rBJ-E99POYU/default.webp"
                                    data-video-id="rBJ-E99POYU" /> -->
                                </div>
                            </div>
                            <div class="button2_block">
                                <a href="https://www.youtube.com/channel/UCMRVaVoRXaxvlfAoCfGLYtA" target="更多影片"
                                    title="更多影片">
                                    <div class="t1_button tb2">
                                        更多影片
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                <!-- s3 -->
                <div class="section3">
                    <div class="section3_left">
                        <div class="sl3_block">
                            <div class="text-ml mt-10 mb-10">BLOG</div>
                            <div class="blog blog_1">
                                <div class="homeTitle">樂譜分享</div>
                                <div class="hori_line"></div>
                                <div class="blog_ul">
                                    <div class="blog_bg">
                                        <img src="./images/tab/100135/p2.jpg">
                                    </div>
                                    <div class="blog_text_title">渣妮NANI<br>- 半心<span>(木吉他譜)</span>
                                        <div class="blog_content">2021.04.21<br>渣妮樂團半心同名主打</div>
                                    </div>
                                </div>
                                <div class="blog_ul">
                                    <div class="blog_bg">
                                        <img src="./images/tab/100135/p1.jpg">
                                    </div>
                                    <div class="blog_text_title">周興哲<br>- 怎麼了<span>(木吉他譜)</span>
                                        <div class="blog_content">2021.01.30<br>華劇(你有念大學嗎?)片尾曲</div>
                                    </div>
                                </div>
                            </div>
                            <div class="buttom3_block">
                                <a href="./blog.html">
                                    <div class="t1_button tb3">
                                        <span>查看更多文章</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="section3_right">
                        <div class="sr3_block">
                            <!-- <div class="img_block"><img src="./images/S__58220554.jpg"></div> -->
                            <div class="blog blog_2">
                                <div class="title">基礎樂理</div>
                                <div class="hori_line"></div>
                                <div class="blog_ul">
                                    <div class="blog_bg">
                                        <img src="./images/tab/100135/patten1.jpg">
                                    </div>
                                    <div class="blog_text_title">基本和弦(1)<br><span>大調音階和弦</span>
                                        <div class="blog_content">2021.07.24<br>白色代表根音，彈奏前可以試著記下音與根音的關係</div>
                                    </div>
                                </div>
                                <div class="blog_ul">
                                    <div class="blog_bg">
                                        <img src="./images/tab/100135/patten2.jpg">
                                    </div>
                                    <div class="blog_text_title">基本音階(1)<br><span>C大調自然音階</span>
                                        <div class="blog_content">2021.03.11<br>是常用到的音階，嘗試看看邊彈邊唱</div>
                                    </div>
                                </div>
                            </div>
                            <div class="buttom3_block2">
                                <a href="./blog.html">
                                    <div class="t1_button tb3_2">
                                        <span>查看更多文章</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="section4">
                    <div class="s4_block">
                        <div class="homeTitle">商品預覽</div>
                        <div class="block_top">
                            <div class="item">
                                <!-- <div class="item_bg"><img src="images/prodoct/item1.jpg" alt="guitar1"></div>
                                <div class="item_bg"><img src="images/prodoct/item2.jpg" alt="guitar2"></div>
                                <div class="item_bg"><img src="images/prodoct/item3.jpg" alt="guitar3"></div>
                                <div class="item_bg"><img src="images/prodoct/item4.jpg" alt="cajon"></div>
                                <div class="item_bg"><img src="images/prodoct/item5.jpg" alt="uklele"></div>
                                <div class="item_bg"><img src="images/prodoct/item6.jpg" alt="guitar_bag"></div>
                                <div class="item_bg"><img src="images/prodoct/item7.jpg" alt="guitar_stand"></div>
                                <div class="item_bg"><img src="images/prodoct/item8.jpg" alt="guitar_sting"></div>
                                <div class="item_bg"><img src="images/prodoct/item9.jpg" alt="guitar5"></div>
                                <div class="item_bg"><img src="images/prodoct/item10.jpg" alt="guitar6"></div>
                                <div class="item_bg"><img src="images/prodoct/item11.jpg" alt="guitar7"></div>
                                <div class="item_bg"><img src="images/prodoct/item12.jpg" alt="guitar8"></div>
                                <div class="item_bg"><img src="images/prodoct/item13.jpg" alt="guitar9"></div>
                                <div class="item_bg"><img src="images/prodoct/item14.jpg" alt="guitar10"></div>
                                <div class="item_bg"><img src="images/prodoct/item15.jpg" alt="cajon2"></div>
                                <div class="item_bg"><img src="images/prodoct/item16.jpg" alt="uklele2"></div> -->
                            </div>

                        </div>

                        <div class="block4_bottom">
                            <a href="./stone.html">
                                <div class="t1_button tb4">
                                    <span>查看更多商品</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <FooterBar />
</template>


<script lang="ts">
import { defineComponent } from "vue"
import HeaderBar from "@/component/Header.vue"
import FooterBar from "@/component/Footer.vue"
//carousel 輪播
import Swiper from "swiper";
import 'swiper/css';
// carousel DOM
import { onMounted } from "vue";


export default defineComponent({ 
    name: "Home", 
    components: {
        HeaderBar,
        FooterBar
    }, 
    data() {
        const banner = "./src/assets/images/banner/"
        return {
            imgUrl1: banner + "1.jpg",
            imgAlt1 : 'RentSpace',
            imgUrl2: banner + "2.jpg",
            imgAlt2 : 'OnLineStore',
            imgUrl3: banner + "3.jpg",
            imgAlt3 : 'DateLesson',
            imgUrl4: banner + "4.jpg",
            imgAlt4 : 'RentSpace',
            imgUrl5: banner + "5.jpg",
            imgAlt5 : 'RentSpace',
            }
    },
    setup() {
        let swiper = null
        onMounted(() => {
            swiper = new Swiper(".mySwiper", {
                // direction: 'vertical',
                loop: true,
                // autoplay: true,
            })
        })
        return {
            
        }
    },
    methods: {
        jumpRent() {
            this.$router.push({ path: "RentRoom"})
        }
    } 
})
</script>
