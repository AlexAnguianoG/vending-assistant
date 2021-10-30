<template>
  <div class="wrapper">
    <div class="slider">
      <div class="slide-track">
        <div class="slide">¿Qué produtos hay en la maquinita?</div>
        <div class="slide">¿Qué precio tienen los tostitos?</div>
        <div class="slide">¿Qué bebidas tienes?</div>
        <div class="slide">Quiero unos takis</div>
        <div class="slide">¿Cuáles categorias hay?</div>
        <div class="slide">¿De qué galletas hay?</div>
        <div class="slide">Dame unos Skittles</div>
        <div class="slide">¿Cuál es el precio de las Oreo?</div>
        <div class="slide">Selecciona Cheetos</div>
      </div>
    </div>
    <div class="typewriter">
      {{ text }}
    </div>
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String,
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  background: #000428;
  background: -webkit-linear-gradient(to top, #000428, #004e92, #000428);
  background: linear-gradient(to top, #000428, #004e92, #000428);
}

.typewriter {
  width: 20ch;
  animation: typing 3.5s steps(20, end), blink-caret 0.75s 3.8s 6 step-end alternate, typing 1s 8.3s steps(20, end) reverse, typing 3.5s 9.3s steps(20, end), blink-caret 0.75s 13.4s step-end infinite alternate;
  /*
  animation: typing 5s steps(20,end) infinite alternate, blink-caret 0.75s step-end infinite alternate;
  */
  white-space: nowrap;
  overflow: hidden;
  border-right: 5px solid #058cff;
  font-family: monospace;
  font-size: 6em;
  color: rgba(255, 255, 255, 0.9);
  height: 1em;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #058cff;
  }
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

body {
  align-items: center;
  background: #e3e3e3;
  display: flex;
  height: 100vh;
  justify-content: center;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-325px * 10));
  }
}

.slider {
  background: transparent;
  height: 100px;
  margin: 5% 0;
  margin-top: 10%;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slider::before,
.slider::after {
  content: "";
  height: 100px;
  position: absolute;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slider .slide-track {
  animation: scroll 15s linear infinite;
  display: flex;
}

.slider .slide {
  height: 100px;
  width: auto;
  margin: 0 5%;
  white-space: nowrap;
  font-family: monospace;
  font-size: 2em;
  color: rgba(255, 255, 255, 0.6);
}
</style>
