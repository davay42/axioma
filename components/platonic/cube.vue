<template lang="pug">
.opacity-95
  .cube
    .cube__face
    .cube__face
    .cube__face
    .cube__face
    .cube__face
    .cube__face
</template>

<style scoped>
div.cube,
.cube div {
  position: absolute;
}

.cube {
  perspective: 9000px;
  top: calc(50% - 5em);
  left: calc(50% - 5em);
  transform-style: preserve-3d;
  transform: translateZ(200px);
  transition: 1s;
  transform-origin: 50% 50%;
  animation: r 20s infinite normal both;
}

@keyframes r {
  25% {
    transform: rotateX(35.3deg) rotateY(45deg) rotateZ(0deg);
  }
  75% {
    transform: rotateX(90deg) rotateY(45deg) rotateZ(0deg);
  }
  50% {
    transform: rotateX(-45deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: none;
  }
}

.cube__face {
  transform-style: preserve-3d;
  width: 20em;
  height: 20em;
  z-index: 10;
  background-color: rgba(255, 255, 0, 0.2);
  border-color: black;
  border-width: 1px;
  transition: 1s;
}
.cube__face:nth-child(1) {
  transform: rotateY(0deg) translateZ(10em);
}
.cube__face:nth-child(2) {
  transform: rotateY(90deg) translateZ(10em);
}
.cube__face:nth-child(3) {
  transform: rotateY(180deg) translateZ(10em);
}
.cube__face:nth-child(4) {
  transform: rotateY(270deg) translateZ(10em);
}
.cube__face:nth-child(5) {
  transform: rotateX(90deg) translateZ(10em);
}
.cube__face:nth-child(6) {
  transform: rotateX(-90deg) translateZ(10em);
}
</style>