import {createRouter , createWebHistory ,type RouteRecordRaw} from "vue-router"
import Layout from '@/layout/index.vue'


// export const Layout = () => import('@/router/index')
import Login from '@/views/home/index.vue'
import Home from '@/views/home/index.vue'
import Chart from '@/views/chart/index.vue'


//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: RouteRecordRaw[] =[
    {
        path:'/login',
        name:'login',
        component: Login,
    },
    {
        path:'/',
        name:"Layout",
        component: Layout,
        redirect: "/home",
        children:[
            {
                path:"/",
                name:"home",
                component: Home
            },
            {
                path:"/chart",
                name:"chart",
                component: () => import('../views/chart/index.vue')
            },
           {
                path: "/profile",
                name: "Profile",
                component: () => Chart,
                meta: { title: "个人中心", icon: "user"},
            },
           
        ]
    },
    {
        path: "401",
        component: () => import("../views/error/401.vue"),
      },
      {
        path: "404",
        component: () => import("../views/error/404.vue"),
      },
    
]

const router = createRouter({
    history:createWebHistory(),
    routes,

})

export default router

