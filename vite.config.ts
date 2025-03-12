import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"
import Icons  from "unplugin-icons/vite"
// import Icons from 
import IconsResolver from 'unplugin-icons/resolver'
import path from "path"
const pathSrc = path.resolve(__dirname,"src")

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
export default defineConfig(({command,mode}) =>{
  return{
    plugins:[vue(),
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
      })
    ],
    resolve:{
      alias:{
        '@':pathSrc
      }
    },
    server:{
      port:'8080'
    }
  }
})
  
