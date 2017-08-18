<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css">
    <div>
        <ul class="nav_main">
            <li>
                <div><img :src="images.logoSrc" /></div>
            </li>
            <li>
                <div>
                    <router-link active-class="active-page" to="/app_comparison">
                        <div><i class="fa fa-globe fa-2x"></i><br>App Comparison</div>
                    </router-link>
                </div>
                
            </li>
            <li>
                <div>
                    <router-link active-class="active-page" to="/customer_feedback">
                        <div><i class="fa fa-comments-o fa-2x"></i><br>Customer Feedback</div>
                    </router-link>
                </div>
                
            </li>
            <li>
                <div>
                    <router-link active-class="active-page" to="/mobile_download">
                        <div><i class="fa fa-mobile fa-2x"></i><br>Mobile Download</div>
                    </router-link>
                </div>
                
            </li>
            
        </ul>
        
        

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                images: {
                    logoSrc: require("assets/img/logo.png")
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: white;
    }
    
    img {
        height: 40px;
    }

    .nav_main a {
        text-decoration: none;
    }

    .nav_main a:hover {
/*        color: #b6bec8;*/
        color: white;
    }

    .nav_main {
        list-style-type: none;
        background-color: #072146;
        text-align: left;
    }

    .nav_main li {
        display: inline-block;
        color: white;
        text-align: center;
        vertical-align: middle;
        padding: 10px 15px;
    }

    .active-page {
        color: white;
    }
</style>
