<style scoped>
.octa {
  fill: #00ff55;
  fill-opacity: 0.2;
  stroke: #000;
  stroke-linecap: round;
  stroke-width: 3px;
}

div.octahedron {
  font-size: 18px;
  transform-style: preserve-3d;
  perspective: 900000px;
  animation: ani 30s ease-in-out infinite;
  position: absolute;
  left: 25%;
  top: 20%;
}

.octahedron span {
  width: 350px;
  height: 86px;
  position: absolute;
}

.octahedron span svg {
  transform: scale(0.712);
}

.octahedron span:nth-child(1) {
  transform: translateY(0) rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 35deg);
}

.octahedron span:nth-child(2) {
  transform: translateY(0) rotate3d(0, 1, 0, 180deg) rotate3d(1, 0, 0, 35deg);
}

.octahedron span:nth-child(3) {
  transform: translateY(0) rotate3d(0, 1, 0, 270deg) rotate3d(1, 0, 0, 35deg);
}

.octahedron span:nth-child(4) {
  transform: translateY(0) rotate3d(0, 1, 0, 360deg) rotate3d(1, 0, 0, 35deg);
}

.octahedron span:nth-child(5) {
  transform: translateY(19.7em) rotate3d(0, 1, 0, 450deg)
    rotate3d(1, 0, 0, 35deg) rotate3d(0, 0, 1, 180deg);
}

.octahedron span:nth-child(6) {
  transform: translateY(19.7em) rotate3d(0, 1, 0, 540deg)
    rotate3d(1, 0, 0, 35deg) rotate3d(0, 0, 1, 180deg);
}

.octahedron span:nth-child(7) {
  transform: translateY(19.7em) rotate3d(0, 1, 0, 630deg)
    rotate3d(1, 0, 0, 35deg) rotate3d(0, 0, 1, 180deg);
}

.octahedron span:nth-child(8) {
  transform: translateY(19.7em) rotate3d(0, 1, 0, 720deg)
    rotate3d(1, 0, 0, 35deg) rotate3d(0, 0, 1, 180deg);
}

@keyframes ani {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotatez(0deg) scale(1.2);
  }
  25% {
    transform: translateY(0) translatex(0em) rotateX(42deg) rotateY(0deg)
      rotatez(0deg) scale(1.2);
  }
  50% {
    transform: translatex(2em) translateY(0em) rotateX(0deg) rotateY(50deg)
      rotatez(0deg) scale(1.2);
  }
  75% {
    transform: translatex(2em) translateY(0em) rotateX(70deg) rotateY(0deg)
      rotatez(0deg) scale(1.2);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg) rotatez(0deg) scale(1.2);
  }
}
</style>

<template lang="pug">
.flex.flex-col.opacity-95
  .octahedron
    span
      svg(viewBox="0 0 1000 866")
        use(href="#octa")
    span
      svg(viewBox="0 0 1000 866")
        use(href="#octa")
    span
      svg(viewBox="0 0 1000 866")
        use(href="#octa")
    span
      svg(viewBox="0 0 1000 866")
        use(href="#octa")
    span
      svg(viewBox="0 0 1000 866")
        use(href="#octa")
    span
      svg(viewBox="0 0 1000 866")
        use(href="#octa")
    span
      svg(viewBox="0 0 1000 866")
        use(href="#octa")
    span
      svg(viewBox="0 0 1000 866")
        use(href="#octa")
  svg#octaico(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 1000 866")
    defs
      title Octa
      polygon#octa.octa(points="500 0 0 866 1000 866 500 0")
</template>