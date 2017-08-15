<template>
<div>
    <div>
        <div id="comparison_graph"></div>    
    </div>
    <div v-if="second_graph">
        <div id="comparison_graph_2"></div>    
    </div>
    
</div>
    
</template>

<script>
    
    import Highcharts from 'highcharts'
    
    export default {
        data() {
            return {
                second_graph: false
            }
        },
        props: ['graph_data'],
        mounted(){
            this.showGraph()  
        },
        methods: {
            showGraph(){
                let this_vm = this
                
                
                setTimeout(function(){
                    Highcharts.chart('comparison_graph', {
                        title: {
                            text: this_vm.graph_data[0].title 
                        },
                        subtitle: {
                            text: '(all time)'  
                        },
                        tooltip: {
                            enabled: false
                        },
                        xAxis: {
                          categories: this_vm.graph_data[0].categories

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
                        series: this_vm.graph_data[0].series
                    });
                    
                    if(this_vm.graph_data.length > 1){
                        this_vm.second_graph = true
                        
                        setTimeout(() => {
                            Highcharts.chart('comparison_graph_2', {
                                title: {
                                    text: this_vm.graph_data[1].title 
                                },
                                subtitle: {
                                    text: '(all time)'  
                                },
                                tooltip: {
                                    enabled: false
                                },
                                xAxis: {
                                  categories: this_vm.graph_data[1].categories

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
                                series: this_vm.graph_data[1].series
                            });
                        }, 500)
                        
                    }
                    
                },500)
                
                

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .row {
        margin: 10px 0 20px 0;
    }
    
    .app_compare {
        list-style: none;
        text-align: left;
        margin: 0;
        padding: 0;
        color: #072146;
    }

    .app_compare li {

        padding: 10px;
        margin: 10px 0;
    }

    .app_compare li:hover {
        cursor: pointer;
    }

    .active_comparison {
        background-color: #072146;
        color: white;
    }
</style>
