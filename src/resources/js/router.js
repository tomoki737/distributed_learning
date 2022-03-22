import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./Home.vue";
import Login from "./auth/Login.vue";
import About from "./auth/About.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: { guestOnly: true }
    },
    {
        path: "/about",
        name: "about",
        component: About,
        meta: { authOnly: true }
    },
];
const router = new VueRouter({
    mode: "history",
    routes
});

function isLoggedIn() {
    return localStorage.getItem("auth");
}

router.beforeEach((to, from, next) =>{
    if(to.matched.some(record => record.meta.authOnly)) {
        if(!isLoggedIn()) {
            next("/login");
        } else {
            next();
        }
    } else if(to.matched.some(record => record.meta.guestOnly)) {
        if(isLoggedIn()){
            next("/about");
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router;
