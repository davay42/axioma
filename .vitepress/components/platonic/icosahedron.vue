<template lang="pug">
.flex.flex-col.opacity-95
  .d20
    .cap-top
      svg.side.one(viewBox="0 0 1000 866")
        use(href="#trico")
      svg.side.two(viewBox="0 0 1000 866")
        use(href="#trico")
      svg.side.three(viewBox="0 0 1000 866")
        use(href="#trico")
      svg.side.four(viewBox="0 0 1000 866")
        use(href="#trico")
      svg.side.five(viewBox="0 0 1000 866")
        use(href="#trico")
    svg.side.six(viewBox="0 0 1000 866")
      use(href="#trico")
    svg.side.seven(viewBox="0 0 1000 866")
      use(href="#trico")
    svg.side.eight(viewBox="0 0 1000 866")
      use(href="#trico")
    svg.side.nine(viewBox="0 0 1000 866")
      use(href="#trico")
    svg.side.ten(viewBox="0 0 1000 866")
      use(href="#trico")
    svg.side.eleven(viewBox="0 0 1000 866")
      use(href="#trico")
    svg.side.twelve(viewBox="0 0 1000 866")
      use(href="#trico")
    svg.side.thirteen(viewBox="0 0 1000 866")
      use(href="#trico")
    svg.side.fourteen(viewBox="0 0 1000 866")
      use(href="#trico")
    svg.side.fifteen(viewBox="0 0 1000 866")
      use(href="#trico")
    .cap-bottom
      svg.side.sixteen(viewBox="0 0 1000 866")
        use(href="#trico")
      svg.side.seventeen(viewBox="0 0 1000 866")
        use(href="#trico")
      svg.side.eighteen(viewBox="0 0 1000 866")
        use(href="#trico")
      svg.side.nineteen(viewBox="0 0 1000 866")
        use(href="#trico")
      svg.side.twenty(viewBox="0 0 1000 866")
        use(href="#trico")
  svg#Layer_1(data-name="Layer 1", xmlns="http://www.w3.org/2000/svg", viewBox="0 0 1000 866")
    defs
      polygon#trico.cls-1(points="500 0 0 866 1000 866 500 0")
</template>


<style scoped>
@keyframes spin {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  16% {
    transform: translateY(3em) rotateX(90deg) rotateY(0deg) rotateZ(0deg);
  }
  33% {
    transform: rotateX(0deg) rotateY(180deg) rotateZ(0deg);
  }
  50% {
    transform: translateY(3em) translatex(1em) rotateX(90deg) rotateY(180deg)
      rotateZ(0deg);
  }
  66% {
    transform: translateY(3em) translatex(3em) rotateX(180deg) rotateY(180deg)
      rotateZ(-90deg);
  }
  83% {
    transform: translateY(3em) translatex(1em) rotateX(180deg) rotateY(90deg)
      rotateZ(-90deg);
  }
  100% {
    transform: rotateX(180deg) rotateY(270deg) rotateZ(-180deg);
  }
}

.cls-1 {
  fill: #0060ff;
  fill-opacity: 0.2;
  stroke: #000;
  stroke-linecap: round;
  stroke-width: 4px;
}

.d20 {
  font-size: 42px;
  position: relative;
  margin: 0 40%;
  top: 5em;
  width: 5em;
  transform-style: preserve-3d;
  animation: spin 30s infinite ease-in-out alternate;
}

.d20 .side {
  transform: scale(1.4);
  height: 4.35em;
  position: absolute;
  width: 5em;
}
.side {
  transform: scale(1.02);
}
.d20 .cap-top {
  transform-style: preserve-3d;
  transform: translateY(-1.1em);
}
.d20 .cap-bottom {
  transform-style: preserve-3d;
  transform: translateY(1.1em) rotateY(36deg);
}
.d20 .one {
  transform: rotateY(0deg) rotateX(53deg) translateZ(2.938em);
}
.d20 .two {
  transform: rotateY(72deg) rotateX(53deg) translateZ(2.938em);
}
.d20 .three {
  transform: rotateY(144deg) rotateX(53deg) translateZ(2.938em);
}
.d20 .four {
  transform: rotateY(216deg) rotateX(53deg) translateZ(2.938em);
}
.d20 .five {
  transform: rotateY(288deg) rotateX(53deg) translateZ(2.938em);
}
.d20 .six {
  transform: rotateY(0deg) rotateX(11deg) rotateZ(180deg) translateZ(3.875em)
    translateY(-0.75em);
}
.d20 .seven {
  transform: rotateY(72deg) rotateX(11deg) rotateZ(180deg) translateZ(3.875em)
    translateY(-0.75em);
}
.d20 .eight {
  transform: rotateY(144deg) rotateX(11deg) rotateZ(180deg) translateZ(3.875em)
    translateY(-0.75em);
}
.d20 .nine {
  transform: rotateY(216deg) rotateX(11deg) rotateZ(180deg) translateZ(3.875em)
    translateY(-0.75em);
}
.d20 .ten {
  transform: rotateY(288deg) rotateX(11deg) rotateZ(180deg) translateZ(3.875em)
    translateY(-0.75em);
}
.d20 .eleven {
  transform: rotateY(36deg) rotateX(-11deg) translateZ(3.875em)
    translateY(-0.75em);
}
.d20 .twelve {
  transform: rotateY(108deg) rotateX(-11deg) translateZ(3.875em)
    translateY(-0.75em);
}
.d20 .thirteen {
  transform: rotateY(180deg) rotateX(-11deg) translateZ(3.875em)
    translateY(-0.75em);
}
.d20 .fourteen {
  transform: rotateY(252deg) rotateX(-11deg) translateZ(3.875em)
    translateY(-0.75em);
}
.d20 .fifteen {
  transform: rotateY(324deg) rotateX(-11deg) translateZ(3.875em)
    translateY(-0.75em);
}
.d20 .sixteen {
  transform: rotateY(0deg) rotateX(-53deg) rotateZ(180deg) translateZ(2.938em);
}
.d20 .seventeen {
  transform: rotateY(72deg) rotateX(-53deg) rotateZ(180deg) translateZ(2.938em);
}
.d20 .eighteen {
  transform: rotateY(144deg) rotateX(-53deg) rotateZ(180deg) translateZ(2.938em);
}
.d20 .nineteen {
  transform: rotateY(216deg) rotateX(-53deg) rotateZ(180deg) translateZ(2.938em);
}
.d20 .twenty {
  transform: rotateY(288deg) rotateX(-53deg) rotateZ(180deg) translateZ(2.938em);
}
</style>