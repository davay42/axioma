<template lang="pug">
.opacity-95
  .tetra
    svg.face1(viewBox="0 0 1000 866")
      use(href="#trigon")
    svg.face2(viewBox="0 0 1000 866")
      use(href="#trigon")
    svg.face3(viewBox="0 0 1000 866")
      use(href="#trigon")
    svg.face4(viewBox="0 0 1000 866")
      use(href="#trigon")
  svg#tri(data-name="Layer 1", xmlns="http://www.w3.org/2000/svg", viewBox="0 0 1000 866")
    defs
      title Polygon
      polygon#trigon.trigon(points="500 0 0 866 1000 866 500 0")
</template>

<style scoped>
.trigon {
  fill: red;
  fill-opacity: 0.2;
  stroke: #000;
  stroke-linecap: round;
  stroke-width: 3px;
}

.tetra {
  perspective: 9000px;
  position: absolute;
  top: 5%;
  left: 30%;
  width: 40%;
  max-height: 80vh;
  padding-bottom: 34.64%;
  margin: 0 auto;
  transform-style: preserve-3d;
  transform: translateY(150px);
  animation: rotate 20s ease-in-out infinite both;
}

.tetra svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  backface-visibility: visible;
  background: rgba(255, 0, 0, 0);
}

.tetra .face2 {
  transform-origin: 0% 100%;
  transform: rotate(-60deg) rotateX(-109.5deg);
}
.tetra .face3 {
  transform-origin: 100% 100%;
  transform: rotate(60deg) rotateX(-109.5deg);
}
.tetra .face4 {
  transform-origin: 50% 100%;
  transform: rotate(180deg) rotateX(-109.5deg);
}

@keyframes rotate {
  25% {
    transform: rotateX(35.2deg) rotateY(0deg) rotateZ(0deg) translateY(150px);
  }
  50% {
    transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translateY(150px);
  }
  75% {
    transform: rotateX(-20.5deg) rotateY(180deg) rotateZ(0deg) translateY(150px);
  }
  100% {
    transform: rotateX(0deg) rotateY(360deg) rotateZ(0deg) translateY(150px);
  }
}
</style>