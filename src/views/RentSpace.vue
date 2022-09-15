<template>
    <HeaderBar />
    <div id="app" v-cloak>

        <h1 class="maxTitle">租借空間</h1>
        <h1 class="m-0-auto">{{calendar.year}} 年 {{calendar.month + 1 }} 月 {{calendar.date}} 日</h1>
        <div class="w-96 flex m-0-auto justify-between">
            <button @click="adjustYear(-1)">上一年</button>
            <button @click="adjustMonth(-1)">上一月</button>
            <button @click="setToday">今天</button>
            <button @click="adjustMonth(1)">下一月</button>
            <button @click="adjustYear(1)">下一年</button>
        </div>
        <div class="calendar m-10">
            <div class="weekDay flex">
                <div class="weekOneDay">日</div>
                <div class="weekOneDay">一</div>
                <div class="weekOneDay">二</div>
                <div class="weekOneDay">三</div>
                <div class="weekOneDay">四</div>
                <div class="weekOneDay">五</div>
                <div class="weekOneDay">六</div>
            </div>
            <div class="week flex" v-for="i in 6">
                <div class="day" v-for="j in 7"  :data-date="calendarMonth[(i-1)*7 + (j-1)].date" :class="{
                    today: calendarMonth[(i - 1) * 7 + (j - 1)].year === today.year && calendarMonth[(i - 1) * 7 + (j - 1)].month === today.month && calendarMonth[(i - 1) * 7 + (j - 1)].date === today.date , 
                    other: calendarMonth[(i - 1) * 7 + (j - 1)].month !== calendar.month
                    }" 
                    @dbclick="addTodo(calendarMonth[(i - 1) * 7 + (j - 1)])"
                >
                <span class="flex justify-center text-red-600" v-if="calendarMonth[(i-1) * 7 + j - 1].count">
                    {{ calendarMonth[(i-1) * 7 + j - 1].count}}
                </span>
        
                <!-- <div v-for="fake in fakes" class="bg-rose-600 h-5 text-sm">{{fake.name}}</div> -->
                </div>
            </div>
        </div>
        <div class="todos flex justify-center">
            9/19
            <ul>
                <li>
                    <input type="checkbox">
                    {{}}
                    <button>刪除</button>
                </li>
            </ul>
        </div>
    </div>
    <button @click="fakess">測試</button>
    <RentTheRoom v-show="showList" />
    <!-- 5838  -->
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import HeaderBar from "@/component/Header.vue"
import FooterBar from "@/component/Footer.vue"
import RentTheRoom from "@/component/RentComponents/RentTheRoom.vue"

interface fixType {
    fix: number
}

export default defineComponent({
    props: {
    },
    name: 'RentSpace',
    components: {
        HeaderBar,
        RentTheRoom,
        FooterBar,
    },
    data() {
        return {
            today:{
                year: 0,
                month: 0,
                date: 0,
                day: 0
            },
            calendar: {
                year: 0,
                month: 0,
                date: 0,
                day: 0
            },
            showList: true,
            todos : {
                2021: {
                    4: {
                        18: [{
                            id: 2,
                            name: "tom",
                            phone: "091111111",
                            email: "aaa.gamil.com",
                        }]
                    },
                    5: {
                        11: [{
                            "id": 1,
                            "name": "li",
                            "phone": "091234135132",
                            "email": "xxx.gamil.com",
                        }]
                    },
                    8: {
                        18: [{
                            "id": 3,
                            "name": "amy",
                            "phone": "000000",
                            "email": "ahhah.gamil.com",
                        }],
                        28: [{
                            "id": 3,
                            "name": "amy",
                            "phone": "000000",
                            "email": "ahhah.gamil.com",
                        }]
                    },
                },
                2022: {
                    4: {
                        18: [{
                            id: 2,
                            name: "tom",
                            phone: "091111111",
                            email: "aaa.gamil.com",
                        }]
                    },
                    5: {
                        11: [{
                            "id": 1,
                            "name": "li",
                            "phone": "091234135132",
                            "email": "xxx.gamil.com",
                        }]
                    },
                    8: {
                        18: [{
                            "id": 3,
                            "name": "amy",
                            "phone": "000000",
                            "email": "ahhah.gamil.com",
                        }],
                        28: [{
                            "id": 3,
                            "name": "amy",
                            "phone": "000000",
                            "email": "ahhah.gamil.com",
                        }]
                    },
                },
            }
        }
    },
    mounted() {
        this.setToday()
    },
    methods: {
        addTodo({year, month, date}){
            let y = this.todos[year] || {};
            let m = this.todos[year][month] || {};
            let d = this.todos[year][month][date] || {};
            d.push({
                "id": 1,
                "name": "li",
                "phone": "091234135132",
                "email": "xxx.gamil.com", 
            })
            console.log(1)
        },
        getTodos({year, month , date}){
            return (
                year in this.todos &&
                month in this.todos[year] &&
                date in this.todos[year][month] ?
                this.todos[year][month][date] : []
            )
        },
        setToday(){
            console.log("today") 
            const date = new Date()
            this.today.year = this.calendar.year = date.getFullYear()
            this.today.month = this.calendar.month = date.getMonth()
            this.today.date = this.calendar.date = date.getDate()
            this.today.day = this.calendar.day = date.getDay()
        },
        adjustYear(fix: number){
            this.calendar.year += fix
        },
        adjustMonth(fix: number){
            let month = this.calendar.month + fix
            console.log(month)
            if(month > 11){
                this.adjustYear(1)
                this.calendar.month = 0
            }else if(month < 0){
                this.adjustYear(-1)
                this.calendar.month = 11
            }else{
                this.calendar.month = month
            }
        },
        //新增行程
        eventClick(event: Object) {
            console.log(event)
            this.showList = !this.showList
        },
        fakess(){
        }
    },
    computed: {
        calendarFitstDay() {
            const mDate = new Date(this.calendar.year, this.calendar.month, 1)
            const date = new Date(this.calendar.year, this.calendar.month, 1 - mDate.getDay())

            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate(),
                day: date.getDay(),
                mDate: date
            }
        },
        calendarMonth() {
            const data = []
            let date
            for(let i =0; i < 42 ;i ++){
                date = new Date(
                    this.calendarFitstDay.year, 
                    this.calendarFitstDay.month, 
                    this.calendarFitstDay.date + i
                )
                let d = {
                    year: date.getFullYear(),
                    month:date.getMonth(),
                    date: date.getDate(),
                    day: date.getDay()
                }
                d.count = this.getTodos(d).length;
                data.push(d);
            }
            return data
        },

    },
})
</script>


<style>
    [ v-cloak ]{
        display: none;
    }
    .today:before {
        color: #fff;
        background-color: #000;
    }

    .other {
        color: #bbb;
        background-color: #ddd;
    }
</style>
<!-- https://www.youtube.com/watch?v=0NoClrHms-Y -->
<!-- https://www.youtube.com/watch?v=Etn-VUU_YcA -->
<!-- 28:08 -->
