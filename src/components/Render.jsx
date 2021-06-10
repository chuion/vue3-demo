/*
 * @Author: songhc
 * @Date: 2021-06-04 18:59:21
 * @LastEditTime: 2021-06-04 18:59:34
 * @LastEditors: songhc
 * @FilePath: /vite-project/src/components/Render.jsx
 */
import { h } from 'vue'

const CustomRender = (props) => {
  if (props.render) {
    return props.render() || <span>Empty</span>
  } else {
    return <span>Empty</span>
  }
}

export default CustomRender;