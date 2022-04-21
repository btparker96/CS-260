<template>
  <div id="app">
    <div id = "menu">
      <div class="head-head">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!-- <a class="navbar-brand" href="organ_logo.png"></a> -->
            <img src="../public/images/laughing.jpeg" height='50px' width='50px'/>
            <h3>Facts and Jokes</h3>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav-head">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="/">Home</router-link><!-- <a class="nav-link" href="../index.html">Home <span class="sr-only">(current)</span></a> -->
                </li>
                <li class="nav-item">
                  <router-link to="/about">About</router-link><!-- <a class="nav-link" href="#">Cart</a> -->
                </li>
                <li class="nav-item">
                  <router-link to="/setup">Setup</router-link><!-- <a class="nav-link" href="#">Cart</a> -->
                </li>
                <!-- <li class="nav-item">
                  <a class="nav-link" href="reviews.html">Reviews</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="about.html">About</a>
                </li> -->
              </ul>
            </div>
          </nav>
    </div>
    </div>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
    <div class="footer-spacer"></div>
    <footer id="footer">
      <!-- <div class="content has-text-centered"> -->
          <p>Thanks for visiting! Check out my github repository <a style="text-decoration:underline;" href="https://github.com/btparker96/cp3.btpinnovations.com">here</a>!</p>
      <!-- </div> -->
    </footer>
    <!-- <Footer></Footer> -->
  </div>
</template>

<style>
li {
  padding: 5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body {
    background-color: #d3d3d3;
}

.secondary {
    padding: 0px 20px !important;
}

.bg-light {
    background-color: #00dee6 !important;
}

.navbar {
    height: 75px;
}

#navbarNav {
    justify-content: center !important;
    margin-left: 20px;
    margin-right: 20px;
}

.nav-link {
    border: 20 px !important;
}


.head-head .bg-light {
    background-color: #ffffff !important;
}

.head-head .navbar {
    height: 50 px !important;
}

#navbarNav {
    justify-content: center !important;
}


#navbarNav-head {
    justify-content: right !important;
}

.nav-link {
    border: 20 px !important;
}

h3 {
    font-family: sans-serif !important;
    /* font-style: italic; */
    padding: 20px;
}


.home_head {
    position: relative;
    text-align: center;
    color: rgb(0, 0, 0);
    background-color: white;
}

.home_head img {
    width: 80%; /* width of container */
    height: 800px; /* height of container */
    padding: 50px;
    object-fit: cover;
    /* border: 5px solid black; */
}

.home_head h2 {
    width: 100%;
    position: absolute;
    top: 0;
    padding: 20px;
    text-align: left;
    font-size: 50px;
    font-style: italic;
}


.profile-pic img {
    float: left;
    width: 30%;
    margin: 20px;
}

.about-me-container {
    width: 60%;
    justify-content: center;
    background-color: rgb(118, 141, 151);
    border-right: solid 1px black;
    border-left: solid 1px black;
    margin: auto;
    height: auto;
}

.about-me {
    padding: 20px;
    font-size: 20px;
}

.center-div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.personal-intro {
    align-self: flex-start; 
    text-align: center;
    padding: 50px 0px;
    font-style: italic;
    line-height: 80px;
}

.shop_now_button {
    width: 40%;
    border: 2px solid #00c8cf;
    background-color: #00dee6;
    text-align: center;
}

.shop_now_button a {
    color: black;
    font-size: 25px;
    font-weight: bold;
}

.spacer {
    height: 500px;
}

.spacer_small {
    height: 50px;
}

.img-grid-horizontal {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* border: 1px solid #111; */
}

.img-container {
    display: flex;
    width: 100%;
    /* border: 1px solid #111; */
    justify-content: center;
}

.img-container img {
    padding: 10px;
    width: 100%;
    /* height: 100px; */
    /* justify-self: center;
    align-items: center;
    justify-content: center; */
    /* border: 2px solid #111; */
}

.h4_div {
    text-align: center;
    /* border: 2px solid black; */
    margin-top: auto;
}

/* h4 {
    justify-content: space-around;
    border: 2px solid black;
} */
@media only screen and (min-width: 961px) {
    .image {
        /* border: 1px solid #111; */
        display: flex;
        flex-direction: column;
        height: 600px;
        width: 33%;
        justify-content: center;
        /* align-items: center; */
        /* border: 2px solid black; */
    }
    .review-container {
        /* border: 1px solid #111; */
        width: 33%;
    }
    .image-text {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        display: flex;
        align-items: top;
        width: 100%;
        /* border: 1px solid #111; */
    }
    .image-t {
        /* border: 1px solid #111; */
        width: 40%;
    }
    .i-text {
        /* border: 1px solid #111; */
        width: 40%;
        /* vertical-align: middle; */
    }
}

.footer-spacer{
    height: 300px;
}


#footer {
    background-color: #e2e2e2;
    border-top: 1px solid #000;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    /* padding: 20px; */
    text-align: center;
    box-sizing: border-box;
    height: 80px;
    /* position: absolute; */
    bottom: 0;
    width: 100%;
}

</style>
