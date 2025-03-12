import {type ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import vueSetupExtend from "vite-plugin-vue-setup-extend-plus"
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"
import Icons  from "unplugin-icons/vite"
import UnoCSS from "unocss/vite"
import IconsResolver from 'unplugin-icons/resolver'
import path from "path"
import { fa } from 'element-plus/es/locales.mjs'
const pathSrc = path.resolve(__dirname,"src")



// export default defineConfig(({command,mode}) => {
  export default defineConfig(({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd());
  return{
    plugins:[vue(),
      // vueSetupExtend(),// 如果需要的话，用于在 <script setup> 中使用 SCSS 变量
      AutoImport({
        imports:["vue"],
        resolvers:[
          ElementPlusResolver(),
          IconsResolver(),
        ],
        vueTemplate:true,//
        eslintrc:{
          enabled:false,
          filepath:"./.eslintrc-auto-import.json"
        },
        dts: path.resolve(pathSrc,"types",'auto-imports.d.ts')
      }),
      Components({
        resolvers:[
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections:["ep"]
          }),
        ],
        dts: path.resolve(pathSrc,"types","components.d.ts")
      }),
      Icons({
        autoInstall:true
      }),
      UnoCSS({/* options */})
    ],
    resolve:{
      alias:{
        '@':pathSrc
      }
    },
    server:{
      port:Number(env.VITE_APP_PORT),
      open:false,//运行是否自动打开浏览器
      proxy:{
        [env.VITE_APP_BASE_API]:{
          // target:"http:",
          changeOrigin:false,
          rewrite: path =>{
             path.replace(new RegExp("^"+env.VITE_APP_BASE_API),'')
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        // 定义全局 SCSS 变量
        scss: {
          api: "modern-compiler",
          additionalData: `
            @use "@/styles/variable.scss" as *;
          `,
        },
      },
    },
  }
})
  
