import React, { useState } from "react";
import { FormBuilder } from "@formio/react";
import "@formio/js/dist/formio.full.css"; // 確保有載入 CSS
import styles from './Formio.module.css';

export interface FormioProps {
  prop?: string;
}

export function Formio({prop = 'default value'}: FormioProps) {
   // 用來存儲表單的 JSON 結構
   const [schema, setSchema] = useState<any>({});
  return (
    <div className={styles.formContainer}>
     
      <FormBuilder
        onChange={(newSchema: any) => setSchema(newSchema)}
      />

      {/* 按鈕：點擊後輸出 JSON */}
      <button onClick={() => console.log(schema)}>輸出 JSON</button>
      
      {/* 顯示 JSON 結構 */}
      <pre>{JSON.stringify(schema, null, 2)}</pre>
    </div>
  );
}
