

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/** 
 * 注意：子菜单仅当路由 children.length >= 1 时出现
 * 详情请见：https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 * hidden：如果设置为 true，则项目将不会显示在侧边栏中（默认为 false）
 * alwaysShow：如果设置为 true，则始终显示根菜单
 * 如果未设置 alwaysShow，当项目有多个子路由时，
 * 将进入嵌套模式，否则不显示根菜单
 * 重定向：noRedirect，如果设置 noRedirect，则面包屑导航中不会重定向
 * name：'router-name'，用于 <keep-alive> 的名称（必须设置！）
*   meta ：{

        roles：['admin','editor'] 控制页面角色（可以设置多个角色）
        title：'title'，显示在侧边栏和面包屑导航中的名称（建议设置）
        icon：'svg-name'/'el-icon-x'，显示在侧边栏的图标
        noCache：true，如果设置为 true，则页面不会被缓存（默认为 false）
        affix：true，如果设置为 true，则标签将粘贴在 tags-view 中
        breadcrumb：false，如果设置为 false，则项目将隐藏在面包屑导航中（默认为 true）
        activeMenu：'/example/list'，如果设置 path，则侧边栏将高亮显示您设置的路径
        
    }

    常量路由
*   一个没有权限要求的基页
*   所有角色均可访问
 * */



export const constantRoutes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
    },
]


const router = new Router({
    routes: constantRoutes
})



export default router