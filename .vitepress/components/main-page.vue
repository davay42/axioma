<script setup>
</script>

<template lang="pug">
.slides
  .slide
    img(src="/logo/contour-low_animated.svg")
    .flex.flex-col.text-4xl
      a.link(href="https://github.com/davay42/axioma.center" target="_blank")
        la-github
      la-angle-down.mt-32.animate-bounce
  .slide#s1
    img(src="/anim/1-dot.svg")
    .text Dot
  .slide#s2
    img(src="/anim/2-line.svg")
    .text Line
  .slide#s3
    img(src="/anim/3-circle.svg")
    .text Circle
  .slide#s4
    img(src="/anim/4-perpendicular.svg")
    .text Perpendicular lines
  .slide#s5
    img(src="/anim/5-parallel.svg")
    .text Parallel lines
  .slide#s6
    img(src="/anim/6-vesica-piscis.svg")
    .text Vesica Piscis
  .slide#s7
    img(src="/anim/7-triangle.svg")
    .text Triangle
  .slide#s8
    img(src="/anim/8-square.svg")
    .text Square
  .slide#s9
    img(src="/anim/9-pentagon.svg")
    .text Pentagon
  .slide#s10
    img(src="/anim/10-hexagon.svg")
    .text Hexagon
  .slide#s11
    img(src="/anim/11-metatron.svg")
    .text Metatron's cube
  .slide#s12
    tetrahedron
    .text Tetrahedron
  .slide#s13
    cube
    .text Cube
  .slide#s14
    octahedron
    .text Octahedron
  .slide#s15
    icosahedron
    .text Icosahedron
  .slide#s16
    dodecahedron
    .text Dodecahedron
  .slide#s17
    img(src="/logo/contour-low_animated.svg")
    .flex.text-8xl
      a.link(href="https://github.com/davay42/axioma.center" target="_blank")
        la-github
</template>



<style scoped>
.slide {
  @apply snap-start flex flex-col items-center justify-center h-100vh p-4 relative;
  &:nth-child(2n) {
    @apply bg-dark-100;
  }
}
.link {
  @apply text-white opacity-10 hover:opacity-100 transition-all duration-300 ease-in-out;
}
.text {
  @apply absolute top-4 left-4 text-sm opacity-50;
}
</style>
