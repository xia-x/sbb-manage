import {createRouter, createMemoryHistory,RouteParamsRaw} from "vue-router"

// export const Layout = () => import('@/router/index')


// // 静态路由
// export const constantRoutes: RouteRecordRaw[] = [
//   {
//     path: '/redirect',
//     component: Layout,
//     meta: { hidden: true },
//     children: [
//       {
//         path: '/redirect/:path(.*)',
//         component: () => import('@/views/redirect/index.vue')
//       }
//     ]
//   },

// export const constantRoutes:RouteParamsRaw[] = [
//     {
        
//     }
// ]

//   {
//     path: '/login',
//     component: () => import('@/views/login/index.vue'),
//     meta: { hidden: true }
//   },

//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     children: [
//       {
//         path: 'dashboard',
//         component: () => import('@/views/dashboard/index.vue'),
//         name: 'Dashboard',
//         meta: { title: 'dashboard', icon: 'homepage', affix: true }
//       }
//     ]
//   }
// ];

// /**
//  * 创建路由
//  */
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: constantRoutes as RouteRecordRaw[],
//   // 刷新时，滚动条位置还原
//   scrollBehavior: () => ({ left: 0, top: 0 })
// });

// /**
//  * 重置路由
//  */
// export function resetRouter() {
//   router.replace({ path: '/login' });
//   location.reload();
// }

// export default router;
