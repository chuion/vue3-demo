/*
 * @Author: songhc
 * @Date: 2021-06-04 18:22:55
 * @LastEditTime: 2021-06-04 18:45:33
 * @LastEditors: songhc
 * @FilePath: /vite-project/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()]
})
