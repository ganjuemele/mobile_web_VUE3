import Index from "../view/Index.vue"
import ShopList from "../view/ShopList.vue"
import ShopDetail from "../view/ShopDetail.vue"
import CloudMusic from "../view/CloudMusic.vue"
import * as VueRouter from "vue-router";

const routes = [
    {
        path: '/', name:'Index', component: Index
    },{
        path: '/shoplist', name:'shoplist', component: ShopList
    },{
        path: '/shopDetail', name:'shopDetail', component: ShopDetail
    },{
        path: '/cloudMusic', name:'cloudMusic', component: CloudMusic
    // },{
    //     path: '/life', name:'Life', component: Life
    // },{
    //     path: '/mine', name:'Mine', component: Mine
    }
];
const index = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default index
