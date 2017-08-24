<template>
<div>
    <div class="row">
        <div class="col-sm-12">
            <h3>App Comparison</h3>
        </div>
    </div>
    
    <div style="margin:60px 0;"></div>
        
    <div class="row">
        <div class="col-sm-2">
            <ul class="app_compare">
                <li :class="{ active_comparison: highlightCompetitors }" @click="showCompetitors">Competitor App Ratings</li>
                <li :class="{ active_comparison: highlightBBVA }" @click="showBBVA">BBVA App Ratings</li>
                <li :class="{ active_comparison: highlightNPS }" @click="showNPS">NPS</li>
            </ul>
        </div>
        <div class="col-sm-10">
            <div v-if="showLoading">
                loading data...
            </div>
            <div v-if="!showLoading">
                <comparison-graph :graph_data="graphData" class="graph"></comparison-graph>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
    
    import ComparisonGraph from './components/comparison-graph.vue'
    
    export default {
        mounted(){
            this.activeGraph = 'competitors'
            this.getData()
        },
        data() {
            return {
                showLoading: true,
                highlightCompetitors: false,
                highlightBBVA: false,
                highlightNPS: false,
                activeGraph: 'competitors',
                graphData: []
            }
        },
        methods: {
            showCompetitors(){
                if(this.activeGraph != 'competitors'){
                    this.activeGraph = 'competitors'
                    this.getData()
                }
                
            },
            showBBVA(){
                if(this.activeGraph != 'BBVA'){
                    this.activeGraph = 'BBVA'
                    this.getData()
                } 
            },
            showNPS(){
                if(this.activeGraph != 'NPS'){
                    this.activeGraph = 'NPS'
                    this.getData()
                } 
            },
            getData(){
                let this_vm = this
                let data_name = this.activeGraph
                
                this.showLoading = true
                this.highlightCompetitors = false
                this.highlightBBVA = false
                this.highlightNPS = false
                
                if(data_name == 'competitors'){
                    this.highlightCompetitors = true
                } else if(data_name == 'BBVA'){
                    this.highlightBBVA = true
                } else if(data_name == 'NPS'){
                    this.highlightNPS = true
                }
                
                setTimeout(() => {
                    
                    if(data_name == 'competitors'){
                        this_vm.graphData = [{
                            title: 'Mobile App Rating VS competitors',
                            categories: ['BBVA US', 'BofA', 'WellsFargo', 'Frost', 'Chase', 'Regions'],
                            series: [{
                                name: 'Android',
                                type: 'line',
                                color: "#7cb5ec",
                                zIndex: 10,
                                data: [3.8, 4.0, 2.8, 4.5, 3.8, 4.2]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'Android Review Count',
                                type: 'column',
                                color: "#bcdaf5",
                                data: [28, 30, 18, 35, 28, 32]
                            },{
                                name: 'iOS',
                                type: 'line',
                                zIndex: 10,
                                color: "black",
                                data: [2.8, 3.0, 1.8, 3.5, 2.8, 4.1]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'iOS Review Count',
                                type: 'column',
                                color: "gray",
                                data: [20, 20, 8, 25, 18, 22]
                            }]
                        }]
                    } else if(data_name == 'BBVA'){
                        this_vm.graphData = [{
                            title: 'BBVA Mobile App Comparison',
                            categories: ['Argentina', 'Chile', 'Colombia', 'Mexico', 'Paraguay', 'Peru', 'Spain', 'Turkey', 'US', 'Venezuela'],
                            series: [{
                                name: 'Android',
                                type: 'line',
                                color: "#7cb5ec",
                                zIndex: 10,
                                data: [3.8, 4.0, 2.8, 4.5, 3.8, 4.2, 4.0, 3.2, 3.3, 4.5]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'Android Review Count',
                                type: 'column',
                                color: "#bcdaf5",
                                data: [28, 30, 18, 35, 28, 32, 80, 32, 33, 45]
                            },{
                                name: 'iOS',
                                type: 'line',
                                zIndex: 10,
                                color: "black",
                                data: [2.8, 3.0, 1.8, 3.5, 2.8, 3.2, 3.0, 2.2, 2.3, 3.5]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'iOS Review Count',
                                type: 'column',
                                color: "gray",
                                data: [20, 20, 8, 25, 18, 22, 40, 32, 33, 45]
                            }]
                        },{
                            title: 'BBVA Wallet App Comparison',
                            categories: ['Chile', 'Colombia', 'Mexico', 'Peru', 'Spain', 'Turkey', 'US'],
                            series: [{
                                name: 'Android',
                                type: 'line',
                                color: "#7cb5ec",
                                zIndex: 10,
                                data: [3.8, 4.0, 2.8, 4.5, 3.8, 4.2, 4.0]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'Android Review Count',
                                type: 'column',
                                color: "#bcdaf5",
                                data: [28, 30, 18, 35, 28, 32, 40]
                            },{
                                name: 'iOS',
                                type: 'line',
                                zIndex: 10,
                                color: "black",
                                data: [2.8, 3.0, 1.8, 3.5, 2.8, 3.2, 3.0]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'iOS Review Count',
                                type: 'column',
                                color: "gray",
                                data: [20, 20, 8, 25, 18, 22, 20]
                            }]
                        }]
                    } else if(data_name == 'NPS'){
                        this_vm.graphData = [{
                            title: 'BBVA Mobile NPS Comparison',
                            categories: ['Argentina', 'Chile', 'Colombia', 'Mexico', 'Paraguay', 'Peru', 'Spain', 'Turkey', 'US', 'Venezuela'],
                            series: [{
                                name: 'Android',
                                type: 'line',
                                color: "#7cb5ec",
                                zIndex: 10,
                                data: [3.8, 4.0, 2.8, 4.5, 3.8, 4.2, 4.0, 3.2, 3.3, 4.5]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'Android Review Count',
                                type: 'column',
                                color: "#bcdaf5",
                                data: [28, 30, 18, 35, 28, 32, 80, 32, 33, 45]
                            },{
                                name: 'iOS',
                                type: 'line',
                                zIndex: 10,
                                color: "black",
                                data: [2.8, 3.0, 1.8, 3.5, 2.8, 3.2, 3.0, 2.2, 2.3, 3.5]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'iOS Review Count',
                                type: 'column',
                                color: "gray",
                                data: [20, 20, 8, 25, 18, 22, 40, 32, 33, 45]
                            }]
                        },{
                            title: 'BBVA Wallet NPS Comparison',
                            categories: ['Chile', 'Colombia', 'Mexico', 'Peru', 'Spain', 'Turkey', 'US'],
                            series: [{
                                name: 'Android',
                                type: 'line',
                                color: "#7cb5ec",
                                zIndex: 10,
                                data: [3.8, 4.0, 2.8, 4.5, 3.8, 4.2, 4.0]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'Android Review Count',
                                type: 'column',
                                color: "#bcdaf5",
                                data: [28, 30, 18, 35, 28, 32, 40]
                            },{
                                name: 'iOS',
                                type: 'line',
                                zIndex: 10,
                                color: "black",
                                data: [2.8, 3.0, 1.8, 3.5, 2.8, 3.2, 3.0]
                            },{
                                linkedTo:':previous',
                                yAxis: 1,
                                name: 'iOS Review Count',
                                type: 'column',
                                color: "gray",
                                data: [20, 20, 8, 25, 18, 22, 20]
                            }]
                        }]
                    }
                    
                    this_vm.showLoading = false
                }, 1000)
            }
        },
        components: {
            ComparisonGraph
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
    
    .graph {
        width: 80%;
        margin: auto;
    }
</style>
