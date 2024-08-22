import { createRouter, createWebHistory} from "vue-router";
import MainPage from "./views/MainPage.vue";
import Resume from "./views/Resume.vue";

const routes = [
    {path: "/", component: MainPage},
    {path: "/resume", component: Resume}
];

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: (to) => {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth' // Optional, for smooth scrolling
            };
        }
        return { x: 0, y: 0 };
    },
    routes,
});

export default router;