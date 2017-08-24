import Vue from 'vue'
import Router from 'vue-router'
import CustomerFeedback from '@/main_pages/Customer-Feedback'
import AppComparison from '@/main_pages/App-Comparison'
import MobileDownload from '@/main_pages/Mobile-Download'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/app-comparison'
        },
        {
            path: '/customer_feedback',
            name: 'Customer-Feedback',
            component: CustomerFeedback
        },
        {
            path: '/app_comparison',
            name: 'App-Comparison',
            component: AppComparison
        },
        {
            path: '/mobile_download',
            name: 'Mobile-Download',
            component: MobileDownload
        }
    ]
})
