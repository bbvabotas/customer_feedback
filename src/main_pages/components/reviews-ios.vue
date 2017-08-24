<template>
    <div>
       
<!--
        <div class="row">
            <div class="col-sm-6">
                <div id="ios_breakdown_graph" style="height:200px;"></div>
            </div>
        </div>
-->
        <div class="row">
            <div class="col-sm-6">
<!--
                <div class="row">
                    <div class="col-sm-6">
                        <div style="height:200px;">
                            <div style="padding:30px 0">
                                <div class="percent_wrapper">
                                    <div class="percent_circle percent_red">
                                        39%
                                    </div>
                                    <div class="percent_subtitle">
                                        <div>unhappy</div>
                                        <div>rating 1 - 2</div>
                                    </div>

                                </div>
                                <div class="percent_wrapper">
                                    <div class="percent_circle percent_orange">
                                        1%
                                    </div>
                                    <div class="percent_subtitle">
                                        <div>neutral</div>
                                        <div>rating 3</div>
                                    </div>
                                </div>
                                <div class="percent_wrapper">
                                    <div class="percent_circle percent_green">
                                        60%
                                    </div>
                                    <div class="percent_subtitle">
                                        <div>happy</div>
                                        <div>rating 4 - 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
-->
                <div class="row">
                    <div class="col-sm-6">
                        <div class="comments_search">Search Comments: <input style="width:200px;" type="text" name="query" v-model="query"></div>
                    </div>
                    <div class="col-sm-6">
                        <div style="text-align:right"><i class="fa fa-download fa-2x export_button" title="Download to CSV" @click="exportDataToCSV()"></i></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div>
                            <table class="table table-striped" style="width:100%; border-bottom: 1px solid #e6e6e6;">
                                <thead>
                                    <tr>
                                        <th class="table_date">Date</th>
                                        <th class="table_comment" style="text-align:center">Comment ( {{ tableFilter.length }} showing)</th>
                                        <th class="table_rating">Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in tableFilter" :key="item.id">
                                        <td class="table_date">{{ item.date }}</td>
                                        <td class="table_comment">
                                            <div><strong>English Comment</strong></div>
                                            <div>
                                                {{ item.english }}
                                            </div><br>
                                            <div><strong>Spanish Comment</strong></div>
                                            <div>
                                                {{ item.spanish }}
                                            </div>
                                        </td>
                                        <td class="table_rating">
                                            {{ item.rating }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-sm-6">
                <div>
                    <div id="ios_breakdown_graph" style="height:250px;"></div>
                </div>
                <div>
                    <div>
                        
                        <div class="word_frequency_graph">
                            <div id="ios_word_frequency" style="height:250px"></div>    
                        </div>

                    </div>
                    <div>
                        <div class="edit_word_wrapper">
                            <div class="highlight_words">
                                <div>
                                    <input type="checkbox"> Highlight word frequency in reviews    
                                </div>
                            </div> 
                            <button class="btn btn-default">Edit Words</button>
                        </div>
                        <div class="custom_word_wrapper">
                            <div>Add custom word to search for:</div>
                            <div>
                                <input type="text">
                                <button class="btn btn-default">Add</button>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>    
    </div>
</template>

<script>
    
    import Highcharts from 'highcharts'
    import papaparse from 'papaparse'
    
    export default {
        data() {
            return {
                query: '',
                reviewData: []
            }
        },
        mounted(){
            this.getReviews()  
        },
        computed: {
            tableFilter: function () {
                //this.commentCount++;
                return this.findBy(this.query)
            }
        },
        methods:{
            getReviews(){
                
                setTimeout( () => {
                    this.reviewData.push({
                        isDisabled: false,
                        date: '2017-06-03',
                        english_subject: "It's ok",
                        english: "Lately I can not have installed the application on the mobile, it detects me with virus, and advises me to uninstall, I thought it happened to my mobile, but a friend told me that it happens to her too, what can I do?",
                        spanish_subject: "Es bueno",
                        spanish: "Últimamente no puedo tener instala la aplicación en el móvil, me detecta con virus, y me aconseja desinstalar, pensaba que le pasaba a mi móvil, pero una amiga me dijo que a ella le pasa también, que puedo hacer?",
                        rating: 3
                    },{
                        isDisabled: false,
                        date: '2017-06-03',
                        english_subject: "good",
                        english: "' very good. .",
                        spanish_subject: "buena",
                        spanish: "' muy buena. .",
                        rating: 4
                    },{
                        isDisabled: false,
                        date: '2017-06-03',
                        english_subject: "access problem",
                        english: "I have a problem I do not know how to create the access key and I ask for my number and the password key to enter i entered i is told to create but it does not let me i in the end me a since it blocked the user i have to do?",
                        spanish_subject: "acceso problema",
                        spanish: "Tengo un problema nose como crear la clave de acceso y me la pide mi número targeta y la clave para poder entrar i entró i me dice crear pero no me deja i al final me a puesto que se me a bloqueado el a usuario que tengo que hacer?",
                        rating: 4
                    },{
                        isDisabled: false,
                        date: '2017-06-03',
                        english_subject: "BAD!",
                        english: "Can't connect to the app",
                        spanish_subject: "MALA!",
                        spanish: "No se puede conectar a la aplicación",
                        rating: 1
                    },{
                        isDisabled: false,
                        date: '2017-06-02',
                        english: "Excellent",
                        spanish: "Excelente",
                        rating: 5
                    },{
                        isDisabled: false,
                        date: '2017-06-02',
                        english: "Why does my app not let me login?",
                        spanish: "Por qué mi aplicación no me deja ingresar?",
                        rating: 1
                    },{
                        isDisabled: false,
                        date: '2017-06-01',
                        english: "Multiple login errors",
                        spanish: "Varios errores de inicio de sesión",
                        rating: 1
                    },{
                        isDisabled: false,
                        date: '2017-06-01',
                        english: "Until two months ago it was my most useful application. Then, I do not know why, the application is not opened sometimes and the operations I do are not going so fast. I would like to go back to the previous version.",
                        spanish: "Hasta hace dos meses era mi aplicación más útil. Luego, no se por qué, no se abre la aplicación a veces y no van tan rápidas las operaciones que hago. Me gustaría volver a la versión anterior.",
                        rating: 2
                    },{
                        isDisabled: false,
                        date: '2017-06-01',
                        english: "It saves you time and is very reliable",
                        spanish: "Te ahorra tiempo y es muy confiable",
                        rating: 5
                    },{
                        isDisabled: false,
                        date: '2017-06-01',
                        english: "Technical errors",
                        spanish: "Errores técnicos",
                        rating: 1
                    },{
                        isDisabled: false,
                        date: '2017-06-01',
                        english: "The only thing missing from this application is a little hole to make money for everything else is great.",
                        spanish: "Lo único que le falta a esta aplicación es un agujerito para sacar dinero para todo lo demás es estupenda.",
                        rating: 5
                    },{
                        isDisabled: false,
                        date: '2017-06-03',
                        english: "Lately I can not have installed the application on the mobile, it detects me with virus, and advises me to uninstall, I thought it happened to my mobile, but a friend told me that it happens to her too, what can I do?",
                        spanish: "Últimamente no puedo tener instala la aplicación en el móvil, me detecta con virus, y me aconseja desinstalar, pensaba que le pasaba a mi móvil, pero una amiga me dijo que a ella le pasa también, que puedo hacer?",
                        rating: 3
                    },{
                        isDisabled: false,
                        date: '2017-06-03',
                        english: "' very good. .",
                        spanish: "' muy buena. .",
                        rating: 4
                    },{
                        isDisabled: false,
                        date: '2017-06-03',
                        english: "I have a problem I do not know how to create the access key and I ask for my number and the password key to enter i entered i is told to create but it does not let me i in the end me a since it blocked the user i have to do?",
                        spanish: "Tengo un problema nose como crear la clave de acceso y me la pide mi número targeta y la clave para poder entrar i entró i me dice crear pero no me deja i al final me a puesto que se me a bloqueado el a usuario que tengo que hacer?",
                        rating: 4
                    },{
                        isDisabled: false,
                        date: '2017-06-03',
                        english: "The app won't send me notifications",
                        spanish: "La aplicación no me enviará notificaciones",
                        rating: 1
                    },{
                        isDisabled: false,
                        date: '2017-06-02',
                        english: "Excellent",
                        spanish: "Excelente",
                        rating: 5
                    },{
                        isDisabled: false,
                        date: '2017-06-02',
                        english_subject: "fail",
                        english: "Constant crashes",
                        spanish_subject: "falla",
                        spanish: "Choques constantes",
                        rating: 1
                    },{
                        isDisabled: false,
                        date: '2017-06-01',
                        english: "For a couple of days it has stopped working, connection error",
                        spanish: "Desde hace un par de días ha dejado de funcionar, error de conexión",
                        rating: 1
                    },{
                        isDisabled: false,
                        date: '2017-06-01',
                        english: "Until two months ago it was my most useful application. Then, I do not know why, the application is not opened sometimes and the operations I do are not going so fast. I would like to go back to the previous version.",
                        spanish: "Hasta hace dos meses era mi aplicación más útil. Luego, no se por qué, no se abre la aplicación a veces y no van tan rápidas las operaciones que hago. Me gustaría volver a la versión anterior.",
                        rating: 2
                    },{
                        isDisabled: false,
                        date: '2017-06-01',
                        english: "It saves you time and is very reliable",
                        spanish: "Te ahorra tiempo y es muy confiable",
                        rating: 5
                    },{
                        isDisabled: false,
                        date: '2017-06-01',
                        english: "He asks me if I give it to him and he tells me that I have gone from trying",
                        spanish: "Me pide clavé se la doy y me dice que me he pasado de intentos",
                        rating: 1
                    },{
                        isDisabled: false,
                        date: '2017-06-01',
                        english: "The only thing missing from this application is a little hole to make money for everything else is great.",
                        spanish: "Lo único que le falta a esta aplicación es un agujerito para sacar dinero para todo lo demás es estupenda.",
                        rating: 5
                    }); 
                    
                    this.showReviews = true;
                    
                    this.breakdownChart();
                    this.wordFrequency();
                }, 1000)
                
            },
            breakdownChart(){
                let bar_colors = {
                        star_1: '#ff8b5a', star_2: '#ffb234', star_3: '#ffd834', star_4: '#add633', star_5: '#9fc05a'
                    };
                
                Highcharts.chart('ios_breakdown_graph', {
                    title: {
                        text: 'iOS Ratings'
                    },
                    subtitle: {
                        text: 'ios rating within date range'
                    },
                    xAxis: {
                        categories: ['Total Ratings', 'Rating with Reviews'],
                        plotLines: [{
                            color: 'gray',
                            width: 3,
                            value: 0.5,
                            zIndex: 10
                        }]
                    },
                    yAxis: [{
                        title: {
                                text: 'Rating Average'
                        },
                        min: 0,
                        max: 6
                    },{
                            title: {
                                text: 'Rating Count'
                        },
                        opposite: true
                    }],
                    tooltip: {
                       enabled: false
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        column: {
                            dataLabels: {
                                    enabled: true
                            },
                            groupPadding: 0.1,
                            pointPadding: 0.2
                        },
                        line: {
                                dataLabels: {
                                    enabled: true
                            }
                        }
                    },
                    series: [{
                        name: '1 Star Rating',
                        yAxis: 1,
                        color: bar_colors.star_1,
                        type: 'column',
                        data: [10, 10]
                    },{
                        name: '2 Star Rating',
                        yAxis: 1,
                        color: bar_colors.star_2,
                        type: 'column',
                        data: [12, 0]
                    },{
                        name: '3 Star Rating',
                        yAxis: 1,
                        color: bar_colors.star_3,
                        type: 'column',
                        data: [3, 0]
                    },{
                        name: '4 Star Rating',
                        yAxis: 1,
                        color: bar_colors.star_4,
                        type: 'column',
                        data: [23, 2]
                    },{
                        name: '5 Star Rating',
                        yAxis: 1,
                        color: bar_colors.star_5,
                        type: 'column',
                        data: [63, 10]
                    },{
                        name: 'Rating Average',
                        yAxis: 0,
                        color: 'black',
                        type: 'line',
                        data: [4.6, 3.2]
                    }]
                });
            },
            wordFrequency(){
                Highcharts.chart('ios_word_frequency', {
                    title: {
                        text: 'Word Frequency' 
                    },
                    subtitle: {
                        text: 'word frequency for ratings 1 - 2 with review count'  
                    },
                    colors: ['black', 'orange', 'orange', 'orange', 'orange', 'orange'],
                    tooltip: {
                        enabled: false
                    },
                    xAxis: {
                        categories: ['Total', 'install', 'key', 'blocked', 'connect', 'login']
                    },
                    yAxis: {
                        visible: false
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
                        enabled: false
                    },
                    credits: {enabled:false},
                    series: [{
                        colorByPoint: true,
                        name: 'word frequency',
                        type: 'column',
                        data: [10, 8, 6, 3, 2, 2]
                    }]
                });
            },
            findBy(value){
                let search_regex = new RegExp(value, "i"),
                    list = this.reviewData;

                return list.filter(function (item) {
                    return item.english.match(search_regex);                                                
                });
            },
            exportDataToCSV(){
                console.log("Exporting table...");
                let new_csv = papaparse.unparse(this.tableFilter);
                //console.log(new_csv);
                this.downloadCSV(new_csv);
            },
            downloadCSV(csv) {
                
                //let object_test = [{"test": "things"}];
                //let json_test = JSON.stringify(object_test);
                
                let blob = new Blob([csv]),
                    a = window.document.createElement("a");
                
                a.href = window.URL.createObjectURL(blob, {type: "text/plain"});
                a.download = "iOS_Comments.csv";
                
                document.body.appendChild(a);
                
                a.click();
                
                document.body.removeChild(a);
                
                
            },
            sortColumn(column, direction){
                let list = this.metrics;
                
                if(column == 'name'){
                    if(direction == 'up'){
                        return list.sort(function(a,b){
                            if(a.name < b.name) return -1;
                            if(a.name > b.name) return 1;
                            return 0;
                        }); 
                    } else if(direction == 'down'){
                        return list.sort(function(a,b){
                            if(a.name > b.name) return -1;
                            if(a.name < b.name) return 1;
                            return 0;
                        }); 
                    }                                        
                } else {
                    if(direction == 'up'){
                        return list.sort(function(a,b){
                            return a[column] - b[column];
                        }); 
                    } else if(direction == 'down'){
                        return list.sort(function(a,b){
                            return b[column] - a[column];
                        }); 
                    }
                      
                }                               
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .row {
        margin: 10px 0;
    }
    th {
        text-align: center;
    }
    thead {
        display: block;
    }
    tbody {
        height: 500px;
        overflow-y: scroll;
        display: block;
    }
    .table_date {
        min-width: 100px;
    }
    .table_rating {
        min-width: 60px;
    }
    .table_comment {
        width: 100%;
        text-align: left;
    }
    
    .percent_wrapper {
        display: inline-block;
        width: 30%;
        margin: 1%;
        text-align: center;
    }
    .percent_subtitle {
        font-size: 0.8em;
        font-style: italic;
    }
    .percent_circle {
        border: 2px solid;
        width: 80px;
        height: 80px;
        border-radius: 100%;
        padding: 28px 10px;
        margin: auto;
        font-size: 1.3em;
        font-weight: bold;
    }
    .percent_red {
        border-color: red;
    }
    .percent_orange {
        border-color: orange;
    }
    .percent_green {
        border-color: green;
    }
    
    .highlight_words {
        text-align: left;
        margin: 10px 0;
    }
    
    .word_frequency_graph {
        margin: 10px 0;
/*        height: 200px;*/
    }
    .edit_word_wrapper {
        float: left;
        text-align: left;
        margin: 10px 0;
    }
    .custom_word_wrapper {
        float: right;
        margin: 0 20px;
    }
    .custom_word_wrapper input {
/*        width: 100px;*/
        width: 50%;
        float: left;
    }
    .custom_word_wrapper button {
        float: right;
    }
    
    .comments_search {
        width: 100%;
        text-align: left;
        font-size: 0.9em;
        margin: 10px 0;
    }
    
    .comments_search input {
        border: 1px solid gray;
    }
    
    .export_button {
        text-align: right;
        padding: 0 10px;
    }
    
    .export_button:hover {
        cursor: pointer;
    }
</style>
