<template>
    <div>
        <div class="row">
            
            
            <div class="col-sm-8">
                <table class="table table-striped" style="width:100%; border-bottom: 1px solid #e6e6e6;">
                    <thead>
                        <tr>
                            <th class="table_date">Date</th>
                            <th class="table_comment" style="text-align:center">Comment</th>
                            <th class="table_rating">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in reviewData">
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
            
            <div class="col-sm-4">
                word frequency
            </div>
        </div>   
    </div>
</template>

<script>
    
    import Highcharts from 'highcharts'
    
    export default {
        data() {
            return {
                reviewData: []
            }
        },
        mounted(){
            this.getReviews()  
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
                }, 1000)
                
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
