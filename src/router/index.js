import Vue from 'vue'
import Router from 'vue-router'

import constantService from '../services/constantService'

/* pages */ 
import Login from '../pages/Login.vue'
import AllTable from '../pages/AllTable.vue'
import UwTable from '../pages/uwTable.vue'
import overTable from '../pages/overTable.vue'
import sortTable from '../pages/sortTable.vue'
import mainPage from '../pages/mainPage.vue'
import infoUpdatePage from '../pages/infoUpdatePage.vue'
import attachedFilePage from '../pages/attachedFilePage.vue'
import logRecordPage from '../pages/logRecordPage.vue'
import accountsHistoryPage from '../pages/accountsHistoryPage.vue'

import underwritingConsolePage from '../pages/underwritingConsolePage.vue'
import underwritingDetailsPage from '../pages/underwritingDetailsPage.vue'
import underwritingDetailsFinalPage from '../pages/underwritingDetailsFinalPage.vue'
import authorityPage from '../pages/authorityPage.vue'
Vue.use(Router)

const router = new Router({
	root: '/',
    // 使用 HTML 5 模式
    mode: 'history',
    // base: __dirname,
    routes: [
    	{
            path:'/login',
            name: 'login',
            meta: { autoLogin: true },
            component: Login
        },
        {
            path: '/home',
            component: AllTable,
            // 設定此路由(包括children路由)的meta值
            // 可以在全域 router.beforeEach 中篩選識別所有流過的路由(判斷特殊邏輯)
            meta: { requireAuth: true },
            // children: [{
            //         // 當 /home 匹配成功，預設是不會有任何子路由組件載入 Home 的 <router-view> 中
            //         // 不會有任何資料被渲染在 Home 的 <router-view> 中
            //         // 如果需要有預設的子路由組件顯示，可以依照以下設定將 Welcome 作為預設
            //         // 在此設定 home 目的在於避免直接使用名稱路由而產生的預設失效問題(讓名稱與父路由一致)
            //         path: '',
            //         name: 'home',
            //         component: KTable
            //     }]
        },
        {
            path: '/assignment',
            component: UwTable,
            meta: { requireAuth: true },
        },
        {
            path: '/overProcessDue',
            component: overTable,
            meta: { requireAuth: true },
        },
        {
            path: '/sortbyPersonel',
            component: sortTable,
            meta: { requireAuth: true },
        },
        {
            path: '/mainPage',
            component: mainPage,
            meta: { requireAuth: true },
        },
        {
            path: '/infoUpdate',
            component: infoUpdatePage,
            meta: { requireAuth: true },
        },
        {
            path: '/attachedFile',
            component: attachedFilePage,
            meta: { requireAuth: true },
        },
        {
            path: '/logRecord',
            component: logRecordPage,
            meta: { requireAuth: true },
        },
        {
            path: '/accountsHistory',
            component: accountsHistoryPage,
            meta: { requireAuth: true },
        },
        {
            path: '/underwritingConsole',
            component: underwritingConsolePage,
            meta: { requireAuth: true },
        },
        {
            path: '/underwritingDetails',
            component: underwritingDetailsPage,
            meta: { requireAuth: true },
        },
        {
            path: '/underwritingFinal',
            component: underwritingDetailsFinalPage,
            meta: { requireAuth: true },
        },
        {
            path: '/authority',
            component: authorityPage,
            meta: { requireAuth: true },
        },
        {
            path: '/*', //其他页面，強制跳轉到Home頁面
            redirect: '/login'
        }
    ],
    // 因 bootstrap 預設套用頁簽，正在使用的頁簽超連結 a 的 css 為 active
    // 所以可以透過此設定將 'router-link-active' 改為 'active'
    linkActiveClass: 'active'
})

// Navigation hook
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {

        // this route requires auth (record.meta.requireAuth == true)

        let isLogin = false;
        
        // 兩種方式判斷登入與否:
        // 1. 前端確認登入沒 (但是有可能過期或直接被server side強制踢出，但反正資料一定會再跟server要，到時再驗證token囉)
        // 2. 最保險就是直接ajax透過後端檢查token囉
        let currentToken = localStorage.getItem(constantService.localStorage.employeeID);
        // currentToken = true;
        if (currentToken) {

            // [client side] 判斷有token就算登入可轉頁 
            // 反正後續重要資料一定從server端，會在取資料時進行server端token驗證
            isLogin = true;

            // [server side] 直接透過ajax讓後端檢查token合法性
            // 在此須使用同步的方式，等待處理結果後才能繼續往下走
            // let data = await authService.isTokenAlive();
            // isLogin = data;
        }

        if (isLogin === false && from.path !== '/login') {
        	next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next() //必須向下走
        }

    } else if(to.matched.some(record => record.meta.autoLogin)){
    	let currentToken = localStorage.getItem(constantService.localStorage.employeeID);
    	if (currentToken) {
    		next({
                path: '/home',
                query: { redirect: to.fullPath }
            })
    	}else{
    		next() // 必須向下走
    	}
    } else {
        next() // 必須向下走
    }
})

 
export default router;
