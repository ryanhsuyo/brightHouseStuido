import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router"

const routes : Array<RouteRecordRaw> = [
        {
            path: '/',
            name: 'Home',
            component: import('@/views/Home.vue'),
            meta: {
                title: '首頁',
            }
        },
        {
            path : '/RentSpace',
            name: 'RentSpace',
            component : import('@/views/RentSpace.vue'),
            meta: {
                title: '租借場地',
            },
        },
        {
            path : '/About',
            name: 'About',
            component : import('@/views/About.vue'),
            meta: {
                title: '環境介紹',
            }
        },
        {
            path : '/Lesson',
            name: 'Lesson',
            component : import('@/views/Lesson.vue'),
            meta: {
                title: '課程一覽',
            }
        },
        {
            path : '/Blog',
            name: 'Blog',
            component : import('@/views/Blog.vue'),
            meta: {
                title: 'Blog',
            }
        },
        {
            path : '/DateLesson',
            name: 'DateLesson',
            component : import('@/views/DateLesson.vue'),
            meta: {
                title: '預約課程',
            }
        },
        {
            path : '/RentSpace',
            name: 'RentSpace',
            component : import('@/views/RentSpace.vue'),
            meta: {
                title: '租借場地',
            }
        },
        {
            path : '/OnLineStore',
            name: 'OnLineStore',
            component : import('@/views/OnLineStore.vue'),
            meta: {
                title: '租借場地',
            }
        },
    ]


const router : Router  = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
