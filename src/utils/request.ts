import axios,{InternalAxiosRequestConfig,AxiosResponse } from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
import {getAccessToken,setAccessToken} from "./auth"
// import { useUserStoreHook } from '@/store/modules/user';

//创建axios实例
const service = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_API,
    timeout:50000,
    headers:{'Content-Type': 'application/json;charset=utf-8'}
})

// // 请求拦截器
// service.interceptors.request.use(
//     (config: InternalAxiosRequestConfig) => {
//       const userStore = useUserStoreHook();
//       if (userStore.token) {
//         config.headers.Authorization = userStore.token;
//       }
//       return config;
//     },
//     (error: any) => {
//       return Promise.reject(error);
//     }
//   );
service.interceptors.request.use(
    (config:InternalAxiosRequestConfig) =>{
       const  userToken = getAccessToken()   
       if(userToken){
        config.headers.Authorization = userToken
       }
      return config
    },
    (error:any) =>{
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response:AxiosResponse) =>{
        const {code , msg} = response.data
        if(code === "00000"){
            return response.data
        }
        ElMessage.error( msg || '系统出错');
        return Promise.reject(new Error(msg || 'Error'))
    },
    (error:any) =>{
        if(error.response.data){
            const { code, msg} = error.response.data;
            //token 过期，跳转登录页面
            if(code === "A0230"){
                ElMessageBox.confirm('当前页面已经失效，请重新登录','提示',{
                    confirmButtonText:'确定',
                    type:'warning'
                }).then(() =>{
                    localStorage.clear();
                    window.location.href ="/";
                });
            }else{
                ElMessage.error(msg || '系统出错');
            }
        }
        return Promise.reject(error.message)
    }
);

// 导出 axios 实例
export default service;



