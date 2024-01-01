<script client>
document.getElementById('arrow').addEventListener('click', () => {
  console.log('clicked')
  document.getElementById('s1').scrollIntoView({ behavior: 'smooth' })
})

let isFullscreen = false

document.getElementById("full").addEventListener('click', () => {
  var elem = document.documentElement;

  if (!isFullscreen) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
    isFullscreen = true
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    isFullscreen = false
  }


})

</script>

<template lang="pug">
.slides
  #full.rounded.p-2.opacity-50.text-2xl.fixed.bottom-0.right-0.z-10.cursor-pointer.transition-all.duration-200.ease.hover-opacity-100
    .i-la-expand
  .slide
    img(src="/logo/contour-low_animated.svg")
    .flex.flex-col.text-4xl.items-center
      .flex
        a.link(href="https://github.com/davay42/axioma.center" target="_blank")
          .i-la-github
        a.link(href="https://ko-fi.com/B0B44CM90" target="_blank")
          .i-simple-icons-kofi
      .i-la-angle-down.mt-32.animate-bounce.cursor-pointer#arrow
  .slide#s1(ref="first")
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
    platonic-tetrahedron
    .text Tetrahedron
  .slide#s13
    platonic-cube
    .text Cube
  .slide#s14
    platonic-octahedron
    .text Octahedron
  .slide#s15
    platonic-icosahedron
    .text Icosahedron
  .slide#s16
    platonic-dodecahedron
    .text Dodecahedron
  .slide#s17
    img(src="/logo/contour-low_animated.svg")
    .flex.text-7xl
      a.link(href="https://github.com/davay42/axioma.center" target="_blank")
        .i-la-github
      a.link(href="https://ko-fi.com/B0B44CM90" target="_blank")
        .i-simple-icons-kofi
    .flex.gap-2
      .i-la-creative-commons-pd-alt.pr-2
      .px-2 &nbsp;2016-present&nbsp;
      .font-bold Public Domain

</template>



<style scoped lang="postcss">
.slide {
  @apply flex flex-col items-center justify-center h-100vh p-4 relative;

  &:nth-child(2n) {
    @apply bg-dark-100;
  }

  & img {
    @apply max-w-full max-h-100vh;
  }
}

.link {
  @apply text-white opacity-10 p-4 hover-opacity-100 transition-all duration-300 ease-in-out;
}

.text {
  @apply absolute top-4 left-4 text-sm opacity-50;
}
</style>
