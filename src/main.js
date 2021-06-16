/*
 * @Author: songhc
 * @Date: 2021-06-04 18:22:55
 * @LastEditTime: 2021-06-07 15:24:09
 * @LastEditors: songhc
 * @FilePath: /vite-project/src/main.js
 */
import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import AileUI from "./components/aile-ui";

createApp(App)
  .use(ElementPlus)
  .use(AileUI, {
    form: {
      config: {
        emptyText: "默认文字",
      },
      form: {
        labelWidth: '100px'
      }
    },
    tooltip: {
      attrs: {
        placement: "bottom",
        showAfter: 1000,
        effect: "kitty",
      },

      themes: [
        {
          name: "kitty",
          style: {
            padding: "5px",
            background: "red",
            color: "#fff",
            fontSize: "14px",
          },
        },
      ],
    },
    select: {
      attrs: {
        clearable: true,
        filterable: true
      },
      config: {
        showTooltip: true
      }
    },
    dialog: {
      config: {
        cancelText: '取消',
        cancelType: 'danger',
        showConfirm: true,
        confirmType: 'success'
      },
      attrs: {
        width: '90%'
      }
    },
    card: {
      config: {
        headerClass: 'ooooo',
        headerStyle: {
          backgroundColor: 'red'
        }
      }
    },
    avatar: {
      attrs: {
        fit: 'cover',
      },
      config: {
        labelPlaceholder: '未知姓名',
        labelStyle: {
          fontSize: '20px',
          backgroundColor: 'red'
        },
        labelFormatter: name => name.slice(0, 1).toUpperCase()
      }
    }
  })
  .mount("#app");
