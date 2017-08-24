<template>
<div>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css">
    <div>
        <h2>{{ appName }}</h2>
        <div style="position: relative">
            App Search: <input v-on:focus="toggleSearchAppList" v-on:blur="toggleSearchAppList" type="text" style="width: 200px;" name="query" v-model="query">
            <div v-if="show_app_list" class="search_app">
                <ul v-for="item in searchAppFilter">
                    <li v-on:click="changeAppName(item.app)">{{ item.app }}</li>
                </ul>
            </div>
        </div>
        
    </div>
    <hr>
    
    
    <div v-if="!showUI">
        <i class="fa fa-spinner fa-3x fa-pulse fa-fw"></i>
    </div>
    
    <div v-if="showUI">
        <div class="row">
            <div class="col-sm-12">
                <h3>All Time Ratings</h3>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-6">
                <div class="rating_border">
                    <div style="font-size: 2em">
                        <img class="icon_size" :src="icons.iconAndroid"> Android
                    </div>
                    <div>
                        <all-time-rating :rating_data="androidData"></all-time-rating>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="rating_border">
                    <div style="font-size: 2em">
                        <img class="icon_size" :src="icons.iconIOS"> iOS
                    </div>
                    <div>
                        <all-time-rating :rating_data="iosData"></all-time-rating>
                    </div>
                </div>
                
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-12">
                <all-time-rating-trend></all-time-rating-trend>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-12">
                <hr>
                <h3>Review Analysis</h3>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-3">
                <word-frequency-graph class="word_frequency_graph" word_frequency_id="wf_tech_issues"></word-frequency-graph>
            </div>
            <div class="col-sm-6">
                <word-frequency-graph class="word_frequency_graph" word_frequency_id="review_rating_comparison"></word-frequency-graph>
            </div>
            <div class="col-sm-3">
                <word-frequency-graph class="word_frequency_graph" word_frequency_id="wf_performance_issues"></word-frequency-graph>
            </div>
            
<!--
            <div class="col-sm-3">
                <word-frequency-graph word_frequency_id="wf_tech_issues4"></word-frequency-graph>
            </div>
-->
        </div>
        
        <div class="row">
            <div class="col-sm-12">
                <hr>
                <h3>Reviews</h3>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-12">
                <div><strong>Date Range:</strong></div>
                <div id="date_range" class="date_range_wrapper"></div>

            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-12" style="font-size: 2em">
                <img class="icon_size" :src="icons.iconAndroid"> Android
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <reviews-android class="review_table"></reviews-android>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-12" style="font-size: 2em">
                <img class="icon_size" :src="icons.iconIOS"> iOS
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <reviews-ios class="review_table"></reviews-ios>
            </div>         
        </div>
    </div>

</div>
    
</template>

<script>
    
    import moment from 'moment'
    import jquery from 'jquery'
    import daterangepicker from 'daterangepicker'
    
    import AllTimeRating from './components/all-time-rating.vue'
    import AllTimeRatingTrend from './components/all-time-rating-trend.vue'
    import WordFrequencyGraph from './components/word-frequency-graph.vue'
    import ReviewsAndroid from './components/reviews-android.vue'
    import ReviewsIos from './components/reviews-ios.vue'
    
    export default {
        data() {
            return {
                icons: {
                    iconAndroid: require("assets/img/icon_android.png"),
                    iconIOS: require("assets/img/icon_ios.svg")
                },
                show_app_list: false,
                query: '',
                appList: [
                    {app:'Argentina Mobile'},{app:'Chile Mobile'},{app:'Colombia Mobile'},{app:'Mexico Mobile'},{app:'Paraguay Mobile'},
                    {app:'Peru Mobile'},{app:'Spain Mobile'},{app:'Turkey Mobile'},{app:'US Mobile'},{app:'Venezuela Mobile'},
                    {app:'Chile Wallet'}, {app:'Colombia Wallet'}, {app:'Mexico Wallet'}, {app:'Peru Wallet'}, {app:'Spain Wallet'},
                    {app:'Turkey Wallet'}, {app:'US Wallet'}
                ],
                appName: 'Argentina Mobile',
                showUI: false,
                androidData: {},
                iosData: {}
            }
        },
        mounted(){
            this.getData()  
        },
        computed: {
            searchAppFilter: function () {
                return this.searchApps(this.query)
            }
        },
        methods: {
            toggleSearchAppList(){
                setTimeout(()=>{
                    this.show_app_list = !this.show_app_list  
                }, 200)
            },
            searchApps(value){
                let search_regex = new RegExp(value, "i"),
                    list = this.appList;
                
                return list.filter(function (item) {
                    return item.app.match(search_regex);                                                
                });
            },
            changeAppName(name){
                this.appName = name
                this.query = ''
            },
            dateRange(){
                let start = moment().subtract(1, 'weeks').day(0),
                    end = moment().subtract(1, 'weeks').day(6);
                
                let this_vm = this;

                function displayDate(start, end){    
                    jquery("#date_range").html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY') + ' <span><i class="fa fa-chevron-down" style="float:right"></i></span>');
                }

                jquery("#date_range").daterangepicker({
                    opens: 'center',
                    ranges: {
                       'Today': [moment(), moment()],
                       'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                       'Last Week': [moment().subtract(1, 'weeks').day(0), moment().subtract(1, 'weeks').day(6)],
                       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    },
                    startDate: start,
                    endDate: end,
                    maxDate: moment(),
                    alwaysShowCalendars: true
                }, displayDate);
                
                //When the user clicks on Apply from the date range picker
                jquery('#date_range').on('apply.daterangepicker', function(ev, picker) {
                    //Display the date range in the date range picker
                    displayDate(picker.startDate, picker.endDate)
                    
                });

                displayDate(start, end);
                
                //this.getData()
                
            },
            getData(){
                let this_vm = this
                
                this_vm.showUI = false
                
                setTimeout(() => {
                    this_vm.androidData = {
                        rating: 4.6,
                        star_count_5: 20,
                        star_count_4: 8,
                        star_count_3: 2,
                        star_count_2: 2,
                        star_count_1: 8,
                        total_rating: 156,
                        ratings_with_reviews: 22
                    }
                    this_vm.iosData = {
                        rating: 3.2,
                        star_count_5: 14,
                        star_count_4: 8,
                        star_count_3: 2,
                        star_count_2: 2,
                        star_count_1: 8,
                        total_rating: 156,
                        ratings_with_reviews: 22
                    }
                    
                    this_vm.showUI = true
                    
                    setTimeout(()=>{
                        this_vm.dateRange()    
                    },1000)
                    
                    
                }, 500)
            }
        },
        components: {
            AllTimeRating,
            AllTimeRatingTrend,
            WordFrequencyGraph,
            ReviewsAndroid,
            ReviewsIos
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .row {
        margin: 40px 0;
    }
    .icon_size {
        height: 120px;
        padding: 4px;
        margin: 0 10px;
        vertical-align: middle;
    }
    .date_range_wrapper {
        background: #fff;
        cursor: pointer;
        padding: 5px 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 300px;
        margin: auto;
        
    }
    .rating_border {
        border: 1px solid lightgray;
        border-radius: 5px;
        padding: 20px 0;
    }
    .word_frequency_graph {
        padding: 0 20px;
    }
    .search_app {
        position: absolute;
        width: 200px;
        left: 50%;
        margin-left: -60px;
        background-color: white;
        border: 1px solid gray;
        z-index: 100;
    }
    .search_app ul {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: left;
    }
    .search_app ul li {
        padding: 20px 10px;
    }
    .search_app ul li:nth-child(even) {
        background-color: lightgray;
    }
    .search_app ul li:hover {
        cursor: pointer;
        background-color: #072146;
        color: white;
    }
</style>
