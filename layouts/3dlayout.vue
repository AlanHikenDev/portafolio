<template>
	<div>
		
<nav>
	<div class="me">
		<div>
			<p> menu floante</p>

		</div>
	</div>
  <ul>
    <li @click="goTo('/')">
      <div class="home-icon">
        <div class="roof">
          <div class="roof-edge"></div>
        </div>
        <div class="front"></div>
      </div>
    </li>
    <li @click="goTo('about')">
      <div class="about-icon">
        <div class="head">
          <div class="eyes"></div>
          <div class="beard"></div>
        </div>
      </div>
    </li>
    <li  @click="goTo('work')">
      <div class="work-icon">
        <div class="paper"></div>
        <div class="lines"></div>
        <div class="lines"></div>
        <div class="lines"></div>
      </div>
    </li>
    <li  @click="goTo('contact')">
      <div class="mail-icon">
        <div class="mail-base">
          <div class="mail-top"></div>
        </div>
      </div>
    </li>
  </ul>
</nav>

<section>
  <slot />
</section>

</div>
</template>
<script setup lang="ts">

function goTo(page : string) {
	console.log('to '+ page);
	
	navigateTo(page)
}
</script>
<style scoped>

.menu-flotante {
    position: fixed; /* Fija el elemento en la pantalla */
    left: 20px; /* Lo posiciona a la izquierda */
    top: 50%; /* Centra verticalmente */
    transform: translateY(-50%); /* Ajuste fino para centrarlo exactamente */
    background-color: #333; /* Color de fondo */
    color: white; /* Color del texto */
    padding: 15px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

:after {
	content: "";
}

section {
  position: relative;
  left: 100px;
}

h1 { 
  margin:80px 0 10px 0;
  font-size: 52px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-shadow: 1px 1px 0px #DC143C,
	2px 2px 0px #DC143C,
	3px 3px 0px #DC143C,
	4px 4px 0px #DC143C;
}

h2 {
  font-size: 24px;
}

body {
  padding: 100px 0;
  background: lightblue;
  color: white;
  /* max-width:640px; */
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height:1.4;
  /* font-smoothing: anti-aliased; */
}

nav {
    float: left;
	position: relative;
	top: 0;
    left: 0;
	background: transparent;
}

nav ul {
	text-align: center;
}

nav ul li {
	position: relative;
  width: 70px;
  cursor: pointer;
	background: rgb(1, 29, 53);
	text-transform: uppercase;
	transition:all .4s ease-out;
}

nav ul li:after {
	position: absolute;
	background: white;
	color: crimson;
	top:0;
	left: 70px;
	width: 70px; height: 100%;
  opacity:.5;
  transform: perspective(400px) rotateY(90deg);
	transform-origin: 0 100%;
	transition:all .4s ease-out;
}

nav ul li:nth-child(1):after { 
	content: "Home";
	line-height: 88px;
}
nav ul li:nth-child(2):after { 
	content: "About";
	line-height: 88px;
}
nav ul li:nth-child(3):after { 
	content: "Work";
	line-height: 85px;
}
nav ul li:nth-child(4):after { 
	content: "Say hi";
	line-height: 70px;
}

nav ul li:hover {
	transform: translateX(-70px);
}

nav ul li:hover:after {
  opacity: 1;
	transform: perspective(400px) rotateY(0deg) scale(1) ;
}


nav ul li > div {
	display: inline-block;
	padding: 25px 0;
	background: transparent;
}

nav ul li div { position: relative; }

.roof {
	width: 0;
	height: 0;
	top:2px;
	border-style: solid;
	border-width: 0 21px 15px 21px;
	border-color: transparent transparent #ffffff transparent;
}

.roof-edge {
	position: absolute;
	z-index: 20;
	left: -17px;
	top: 3px;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 17px 12px 17px;
	border-color: transparent transparent crimson transparent;
}
/*white triangle over red triangle*/
.roof-edge:after {
	position: absolute;
	left: -14.5px;
	top: 3px;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 14.5px 10px 14.5px;
	border-color: transparent transparent white transparent;
}

.front {
	position: relative;
	top: 3px;
	width: 28.5px;
	height: 20px;
	margin: 0 auto;
	background: white;
}
/*door*/
.front:after {
	position: absolute;
	background: crimson;
	width: 11px;
	height: 13px;
	bottom: 0;
	left:9px;
}

/*/// About me ////*/

.head {
	width: 32px;
	height: 35px;
	background: white;
	border-radius:8px;
}
/*mouth*/
.head:after {
	width: 4px;
	height: 10px;
	background: white;
	position: absolute;
	border-radius:4px 0 0 4px;
	top:21px;
	left: 14px;
	transform:rotate(270deg);
}

.eyes {
	width: 8px;
	height: 5px;
	border-radius: 50%;
	position: absolute;
	top: 10px;
	left: 5px;
	background: crimson;
}
/*right eye*/
.eyes:after {
	width: 8px;
	height: 5px;
	border-radius: 50%;
	position: absolute;
	top: 0;
	left: 14px;
	background: crimson;
}

.beard {
	width: 32px;
	height: 17px;
	background: crimson;
	border:2px solid white;
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius:0 0 8px 8px;
}
/*nose*/
.beard:after {
	position: absolute;
	top:-2px;
	left: 11px;
	background: white;
	width:6px;
	height: 4px;
	border-left:1px solid crimson;
	border-right:1px solid crimson;
}

/*//work//*/

.paper {
	position: relative;
	height:32px;
	width: 29px;
	background: white;
	border:2px solid white;
}

/*window*/
.paper:after {
	position: absolute;
	top:1px;
	left: 0;
	width: 25px;
	height: 29px;
	background: white;
	border-top:4px solid crimson;
}

.lines {
	position: absolute;
	top: 36px;
	left: 5px;
	width: 11px;
	box-shadow: 0 0 0 1px crimson;
}

.lines:after {
	position: absolute;
	top: 4px;
	left: 3px;
	width: 14px;
	box-shadow: 0 0 0 1px crimson;
}

.lines:nth-child(2) {
	position: absolute;
	top: 44px;
	left: 8px;
	width: 11px;
}

.lines:nth-child(2):after {
	position: absolute;
	top: 4px;
	left: -3px;
	width: 11px;
}

.lines:nth-child(3) {
	position: absolute;
	top: 52px;
	left: 8px;
	width: 14px;
}

.lines:nth-child(3):after {
	display: none;
}

/*//mail //*/

.mail-base {
	position: relative;
	width: 32px;
	height: 18px;
	background: white;
}

.mail-top {
	position: absolute;
	z-index: 20;
	left: 0;
	top: 0;
	width: 0;
	height: 0;
	transform: rotate(180deg);
	border-style: solid;
	border-width: 0 16px 11px 16px;
	border-color: transparent transparent crimson transparent;
}

.mail-top:after {
	position: absolute;
	z-index: 20;
	left: -16px;
	top: 3px;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 16px 9px 16px;
	border-color: transparent transparent white transparent;
}


</style>