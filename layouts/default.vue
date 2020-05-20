<template>
  <div>
    <!-- <Header /> -->
    <Students/>
    <Courses/>
    <Toppers/>
    <nuxt />
  </div>
</template>

<script>

// import Header from "@/components/header.vue";
import Students from "@/components/students.vue";
import Courses from "@/components/courses.vue";
import Toppers from "@/components/toppers.vue";

export default {
  components : {
    // Header
    Students, Courses, Toppers
  }
}
</script>

<style>

@font-face {
  font-family: 'Gilroy';
  src: url('/font/Gilroy-Light.ttf');
  font-weight: 300;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/font/Gilroy-Medium.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/font/Gilroy-Regular.ttf');
  font-weight: 600;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/font/Gilroy-SemiBold.ttf');
  font-weight: 700;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/font/Gilroy-Bold.ttf');
  font-weight: 800;
}
html {
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: 'Gilroy', sans-serif;
  font-size: 1.6rem;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
