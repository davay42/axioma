<template lang="pug">
.flex.flex-col
  svg#Layer_1(version="1.1", xmlns="http://www.w3.org/2000/svg", xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", height="0", width="0", space="preserve")
    polygon#pentagon.st0(points="12.4,0 0.6,8.5 5.1,22.4 19.6,22.4 24.1,8.5 ")
  #dodecahedron
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
    .face
      svg(viewBox="0,0 24.72,24.72")
        use(href="#pentagon")
</template>


<style scoped>
.st0 {
  fill: #ff00ff;
  fill-opacity: 0.2;
  stroke: #000000;
  stroke-width: 0.1;
  stroke-miterlimit: 10;
}

#dodecahedron {
  perspective: 50000em;
  transform-style: preserve-3d;
  height: 12.36em;
  margin: 10em auto;
  top: -5em;
  position: relative;
  width: 12.36em;
  animation: rot 30s infinite ease;
}

@keyframes rot {
  0% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg) scale3d(1.5, 1.5, 1.5);
  }
  20% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(45deg) scale3d(1.5, 1.5, 1.5);
  }
  40% {
    transform: rotateZ(0deg) rotateX(72deg) rotateY(45deg)
      scale3d(1.5, 1.5, 1.5);
  }
  60% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(60deg) scale3d(1.5, 1.5, 1.5);
  }
  80% {
    transform: rotateZ(0deg) rotateX(-69deg) rotateY(0deg)
      scale3d(1.5, 1.5, 1.5);
  }
  100% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg) scale3d(1.5, 1.5, 1.5);
  }
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
}

.face:nth-child(1) {
  transform: rotateX(31.72deg) translateZ(8.09em);
}

.face:nth-child(2) {
  transform: rotateZ(180deg) rotateX(31.72deg) translateZ(8.09em);
}

.face:nth-child(3) {
  transform: rotateZ(-90deg) rotateX(-58.28deg) translateZ(8.09em);
}

.face:nth-child(4) {
  transform: rotateZ(90deg) rotateX(-58.28deg) translateZ(8.09em);
}

.face:nth-child(5) {
  transform: rotateY(90deg) rotateX(-58.28deg) translateZ(8.09em);
}

.face:nth-child(6) {
  transform: rotateY(-90deg) rotateX(-58.28deg) translateZ(8.09em);
}

.face:nth-child(7) {
  transform: rotateZ(180deg) rotateY(90deg) rotateX(-58.28deg)
    translateZ(8.09em);
}

.face:nth-child(8) {
  transform: rotateZ(180deg) rotateY(-90deg) rotateX(-58.28deg)
    translateZ(8.09em);
}

.face:nth-child(9) {
  transform: rotateY(180deg) rotateX(31.72deg) translateZ(8.09em);
}

.face:nth-child(10) {
  transform: rotateZ(180deg) rotateY(180deg) rotateX(31.72deg)
    translateZ(8.09em);
}

.face:nth-child(11) {
  transform: rotateZ(-90deg) rotateY(180deg) rotateX(-58.28deg)
    translateZ(8.09em);
}

.face:nth-child(12) {
  transform: rotateZ(90deg) rotateY(180deg) rotateX(-58.28deg)
    translateZ(8.09em);
}
</style>

