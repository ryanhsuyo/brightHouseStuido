<template>
    <form class="w-48 bg-orange-400 relative" @submit.prevent="sentForm">
        <label class="mb-12" for="">姓名:
            <input type="text" class="" placeholder="請輸入姓名" v-model="name">
        </label>
        <br />
        <label class="mb-10" for="">電話:
            <input type="text" class="" placeholder="請輸入電話" v-model="phone">
        </label>
        <br />
        <label class="mb-10" for="">E-mail:
            <input type="text" class="" placeholder="請輸入Email" name="email" v-model="email">
        </label>
        <br />
        <label class="mb-10" for="">日期:
            <input type="time" class="" placeholder="請輸入Email" name="date" v-model="hr">
            <p class=""></p>
        </label>
        <button type="submit flex">送出</button>
    </form>
        <!-- <div class="">{{sentFormData.name}}</div>
        <div class="">{{sentFormData.phone}}</div>
        <div class="">{{sentFormData.email}}</div>
        <div class="">{{sentFormData.date}}</div> -->

</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import db from "./src/Api/db.json"
import axios from "axios"
import { ViewApi } from '@fullcalendar/common'

export interface dateroom {
    name: string,
    phone: string,
    email: string,
    date: Date,
}
const url = './src/Api/db.json'

export default defineComponent({
    props: {
        name: String,
        phone: String,
        email: String,
        hr: Date,
    },
    components: {
    },
    setup(){
        // onMounted(() => {
        //     console.log('date', dateRoom);
        // })
        // const person = {
        //     user:{
        //         name: "li",
        //         phone: "091234135132",
        //         email: "xxx.gamil.com",
        //         date: "2021-12-11"
        //     }
        // }
        axios.get(url).then((res)=>{
            const SU = res.data.SpaceUser
            console.log(res.data.SpaceUser);
            // console.log(SU[0].name);
            
            for(let i = 0; i < SU.length; i ++){
                console.log(
                SU[i].id
                ,SU[i].name
                ,SU[i].phone
                ,SU[i].email
                ,SU[i].date
                )
            }
        })        

        // const p = new Proxy(person,{
        //     get(person, key){
        //         return person[key]
        //     },
        //     set(person, key, value){
        //         //key是name, value是li
        //         person[key] = value;
        //         return true;
        //     }
        // })

        // p.user.name = "amy"
        // console.log(p.user.name);
        // console.log(p.user);
        
        
        // const sentFormData = ref({
        //     name: "li",
        //     phone: "091234135132",
        //     email: "xxx.gamil.com",
        //     date: "2021-12-11"
        // })
        function sentForm() {
        }

        return {
            // person,
            // p,
            // sentFormData,
            // dateRoom,
            sentForm,
        }
    },
})
</script>
