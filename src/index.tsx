import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyForm } from "./components/MyForm"; // 直接載入 MyForm
import i18next from "i18next";
import { Formio } from "@formio/js";

// 初始化 i18next
i18next.init({
  lng: "zh", // 預設語言：中文
  fallbackLng: "en",
  resources: {
    zh: {
      translation: {  // 注意這一層必須存在
        "Search field(s)": "搜尋欄位",
        "Text Field": "文字欄位",
        "Number": "數字",
        "Password": "密碼",
        "Checkbox": "核取方塊",
        "Select Boxes": "多選方塊",
        "Select": "選擇",
        "Radio": "單選",
        "Button": "按鈕",
        "Submit": "提交",
        "Save": "儲存",
        "Cancel": "取消",
        "Edit": "編輯",
        "Delete": "刪除"
      }
    }
  },
});
(Formio as any).i18next = i18next;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
