<template>
    <div>
        <div class="row">
            <div id="trend_graph" style="height:350px;"></div>
        </div>    
    </div>
</template>

<script>
    
    import Highcharts from 'highcharts'
    
    export default {
        data() {
            return {
                
            }
        },
        mounted(){
            this.calculateChart()  
        },
        methods:{
            calculateChart(){
                
//                let this_app = this,
//                    bar_colors = {
//                        star_1: '#ff8b5a', star_2: '#ffb234', star_3: '#ffd834', star_4: '#add633', star_5: '#9fc05a'
//                    };
                
                
                    setTimeout(() => {
                        Highcharts.chart('trend_graph', {
                            title: {
                                text: 'Rating Trend for past 10 weeks' 
                            },
                            subtitle: {
                                text: 'ratings are with and without reviews'  
                            },
                            tooltip: {
                                enabled: false
                            },
                            xAxis: {
                                plotBands: [{
                                    from: 3.5,
                                    to: 4.5,
                                    color: 'rgba(124, 181, 236, .2)',
                                    label: {
                                        rotation: -90,
                                        align: 'left',
                                        y: 10,
                                        x: 10,
                                        textAlign: 'right',
                                        style: {
                                            fontSize: '10px'
                                        },
                                        text: "Android release <br> Jun 26"
                                    },
                                    zIndex: 10
                                },{
                                    from: 5.5,
                                    to: 6.5,
                                    color: 'rgba(0, 0, 0, .2)',
                                    label: {
                                        rotation: 90,
                                        align: 'right',
                                        y: 10,
                                        x: -10,
                                        textAlign: 'left',
                                        style: {
                                            fontSize: '10px'
                                        },
                                        text: "iOS release <br> Jul 15"
                                    },
                                    zIndex: 10
                                }],
                                categories: ['May 28 to Jun 3', 'Jun 4 to Jun 10', 'Jun 11 to Jun 17', 'Jun 18 to Jun 24', 'Jun 25 to Jul 1', 'Jul 2 to Jul 8', 'Jul 9 to Jul 15', 'Jul 16 to Jul 22', 'Jul 23 to Jul 29', 'Jul 30 to Aug 5']
//                                plotLines: [{
//                                    color: 'black',
//                                    dashStyle: 'Dash',
//                                    width: 2,
//                                    value: 5.25,
//                                    label: {
//                                        text: 'Release'
//                                    }
//                                }]
                            },
                            yAxis: [{
                                visible: true,
                                title: {
                                    text: 'Rating Average'
                                },
                                min: 0,
                                max: 6
                            },{
                                visible: true,
                                title: {
                                    text: 'Rating Count'
                                },
                                opposite: true
                            }],
                            plotOptions: {
                                column: {
                                    groupPadding: 0.1,
                                    dataLabels: {
                                        enabled: true,
                                        formatter: function(){
                                            if(this.y > 0){
                                                return this.y
                                            }
                                        },
                                        inside: true,
                                        align: 'center',
                                        verticalAlign: 'bottom'
                                    },
                                },
                                line: {
                                    dataLabels: {
                                        enabled: true
                                    }
                                }
                            },
                            legend: {
                                enabled: true
                            },
                            credits: {enabled:false},
                            series: [{
                                name: 'Android',
                                type: 'line',
                                color: "#bcdaf5",
                                zIndex: 10,
                                data: [2.8, 2.4, 3.2, 3.3, 3.8, 4.0, 2.8, 4.5, 3.8, 4.2]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'Android Review Count',
                                type: 'column',
                                color: "#7cb5ec",
                                data: [20, 28, 30, 18, 135, 28, 32, 30, 54, 48]
                            },{
                                name: 'iOS',
                                type: 'line',
                                zIndex: 10,
                                color: "gray",
                                data: [3.0, 2.0, 2.5, 1.8, 2.3, 3.2, 2.2, 3.9, 3.1, 3.1]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'iOS Review Count',
                                type: 'column',
                                color: "black",
                                data: [40, 20, 20, 8, 25, 18, 22, 178, 42, 45]
                            }]
                        });
                    }, 500)
                
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .chart {
        height: 200px;
    }
    .star_image_wrapper {
        background-color: lightgray;
        display: inline-block;
        width: 22px;
        height: 22px;
        text-align: center;
    }
    .star_image_background {
        background-color: #7cb5ec;
        width: 22px;
        height: 22px;
    }
    .star_image {
        height: 22px;
    }
</style>
