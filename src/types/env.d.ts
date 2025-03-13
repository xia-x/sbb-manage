interface ImportMetaEnv {
    /**
     * 应用标题
     */
    VITE_APP_TLTLE :string;
   /**
    * 应用端口
    */
   VITE_APP_PORT :number;
   /**
    * aip基础路基
    */
   VITE_APP_BASE_API :string
}

interface ImportMeta {
    readonly env:ImportMetaEnv;
}

