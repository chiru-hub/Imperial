<template>
  <div>
    <Header />
    <Students />
    <ContactForm />
    <Courses />
    <Toppers />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";

import ContactForm from "@/components/contactform.vue";
// import Navigation from "@/components/navigation.vue";
import Students from "@/components/students.vue";
import Courses from "@/components/courses.vue";
import Toppers from "@/components/toppers.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Header,
    ContactForm,
    Students,
    Courses,
    Toppers,
    Footer
  }
};
</script>

<style>
@font-face {
  font-family: "Gilroy-Light";
  src: url("/font/Gilroy-Light.ttf");
  font-weight: 300;
}

@font-face {
  font-family: "Gilroy-Medium";
  src: url("/font/Gilroy-Medium.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "Gilroy";
  src: url("/font/Gilroy-Regular.ttf");
  font-weight: 600;
}

@font-face {
  font-family: "Gilroy-SemiBold";
  src: url("/font/Gilroy-SemiBold.ttf");
  font-weight: 700;
}

@font-face {
  font-family: "Gilroy-Bold";
  src: url("/font/Gilroy-Bold.ttf");
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

html, body{
  background-color: #d3deec;
}

body {
  font-family: "Gilroy", sans-serif;
  font-size: 1.6rem;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h2 {
  color: #16246a;
  font-weight: 800;
  font-size: 4.5rem;
}
</style>
