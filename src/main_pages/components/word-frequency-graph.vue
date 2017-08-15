<template>
    <div>
        <div class="row">
            <div :id="word_frequency_id" style="height:350px;"></div>
        </div>    
    </div>
</template>

<script>
    
    import Highcharts from 'highcharts'
    
    export default {
        data() {
            return {
//                id_test: 'word_frequency'
            }
        },
        props: ['word_frequency_id'],
        mounted(){
            this.calculateChart()  
        },
        methods:{
            calculateChart(){
                let chart_id = this.word_frequency_id
                
                if(chart_id == 'review_rating_comparison'){
                    Highcharts.chart(chart_id, {
                        title: {
                            text: 'Combined Review Rating Count Breakdown for past 5 weeks' 
                        },
                        subtitle: {
                            text: 'Jul 2 - Aug 5'  
                        },
                        tooltip: {
                            enabled: false
                        },
                        xAxis: {
                            categories: ['1 Rating', '2 Rating', '3 Rating', '4 Rating', '5 Rating']
                        },
                        yAxis: {
                            visible: true,
                            title: {
                                text: ''
                            }
                        },
                        plotOptions: {
                            column: {
                                groupPadding: 0.1,
                                dataLabels: {
                                    enabled: true,
                                    formatter: function(){
                                        if(this.y > 0){
                                            return this.y
                                        }
                                    }
                                }
                            }
                        },
                        legend: {
                            enabled: true
                        },
                        credits: {enabled:false},
                        series: [{
                            name: 'Android',
                            type: 'column',
    //                            color: "#bcdaf5",
                            data: [52, 14, 2, 13, 228]
                        },{
                            name: 'iOS',
                            type: 'column',
    //                            color: "gray",
                            data: [90, 12, 8, 22, 118]
                        }]
                    });
                } else {
                    Highcharts.chart(chart_id, {
                        title: {
                            text: 'Technical Issues Trend for past 5 weeks' 
                        },
                        subtitle: {
                            text: 'number of reviews that had technical issues'  
                        },
                        tooltip: {
                            enabled: false
                        },
                        xAxis: {
    //                            categories: ['Jul 30 to Aug 5', 'Jul 30 to Aug 5', 'Jul 16 to Jul 22', 'Jul 9 to Jul 15', 'Jul 2 to Jul 8']
                            categories: ['Last week', 'Last two weeks', 'Last three weeks', 'Last four weeks', 'Last five weeks']
                        },
                        yAxis: {
                            visible: true,
                            title: {
                                text: ''
                            }
                        },
                        plotOptions: {
                            bar: {
                                groupPadding: 0.1,
                                dataLabels: {
                                    enabled: true,
                                    formatter: function(){
                                        if(this.y > 0){
                                            return this.y
                                        }
                                    }
                                }
                            }
                        },
                        legend: {
                            enabled: true
                        },
                        credits: {enabled:false},
                        series: [{
                            name: 'Android',
                            type: 'bar',
    //                            color: "#bcdaf5",
                            data: [8, 14, 20, 32, 28]
                        },{
                            name: 'iOS',
                            type: 'bar',
    //                            color: "gray",
                            data: [5, 12, 28, 22, 18]
                        }]
                    });
                }
                
                
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
