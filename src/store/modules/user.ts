import {loginApi} from '@/api/auth/index'
import {LoginData} from "@/api/auth/type"


/**
 * 登录调用
 *
 * @param {LoginData}
 * @returns
 */

// function login(loginData: LoginData) {
//     return new Promise<void>((resolve, reject) => {
//       loginApi(loginData)
//         .then(response => {
//           const { tokenType, accessToken } = response.data;
//           token.value = tokenType + ' ' + accessToken; 
//           resolve();
//         })
//         .catch(error => {
//           reject(error);
//         });
//     });
//   }
