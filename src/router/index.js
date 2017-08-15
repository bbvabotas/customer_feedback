import Vue from 'vue'
import Router from 'vue-router'
import CustomerFeedback from '@/main_pages/Customer-Feedback'
import AppComparison from '@/main_pages/App-Comparison'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/app-comparison'
        },
        {
            path: '/customer-feedback',
            name: 'Customer-Feedback',
            component: CustomerFeedback
        },
        {
            path: '/app-comparison',
            name: 'App-Comparison',
            component: AppComparison
        }
    ]
})
