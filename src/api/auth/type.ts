/**
 * 登录请求参数
 */
export interface LoginData {
    /**
     * 用户名
     */
    usernam: string;
    /**
     * 密码
     */
    password: string;
}

  /**
   * 登录响应
   */
  export interface LoginResult {
    /**
     * 访问token
     */
    accessToken?: string;
    /**
     * 过期时间（毫秒）
     */
    expires?: number;
    /**
     * 刷新token
     */
    refreshToken?: string;
    /**
     * token 类型
     */
    tokenType?: string

  }
