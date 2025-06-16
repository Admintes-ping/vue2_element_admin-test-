
// 导入Vue和SvgIcon组件
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// 全局注册SvgIcon组件
Vue.component('svg-icon', SvgIcon)

// 动态导入SVG文件
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext =>requireContext.keys().map(requireContext)

requireAll(req)