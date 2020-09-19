<template>
  <div style="background-color:##d3deec">
    <div class="my-container mmstyle py-48">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12">
          <div class="flex flex-wrap items-end justify-around">
            <img class="" src="/images/oneyear.jpeg" alt="one year crash course">
            <h1 class="mt-10 md:mt-16">
              1 Year Integrated Coaching Program for NEET / JEE (Main and Advance) 
            </h1>
          </div>
          <div class="w-full mt-12">
            <p>The 1 year integrated coaching program for NEET / JEE main and advance is for students moving from Class XI to XII. This one year course will ensure the students get advance level guidance to appear the entrance examinations. The course is designed with a wholesome structure to prepares students for NBSE & CBSE boards examinations along with NEET & JEE main and advanced courses. The curriculum is prepared keeping in mind the All India course structure to give the children a competitive edge over others. Our team of experienced faculties ensures every student receives the required training and guidance to attempt and excel in the exams. Regular doubt clearance sessions are conducted to help them be confident before appearing the exams. </p>
            <h2>1 year integrated coaching program for NEET/ JEE courses benefits:</h2>
            <ul>
              <li>From Class XI to XII there will be regular mentor classes.</li>
              <li>Advance level guidance for NEET JEE Main+ Advanced courses </li>
              <li>Inclusive of NBSE and CBSE School Curriculum for boards</li>
              <li>Guidance by guest faculties from IITs and NITS</li>
              <li>Regular problem and doubt resolving sessions</li>
              <li>Exclusive study material and test papers for advanced level preparation.  </li>
              <li>Individual attention to every student for holistic growth of each candidate </li>
              <li>A unique teaching methodology from some of the best faculties of the industry</li>
              <li>A track record of producing the best results in the entrance exams in Nagaland and Dimapur. </li>
              <li>Scientifically designed test papers to enhance the preparation. </li>
              <li>Track record of best results every year. </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-2/6">
          <div class="other-courses py-16 px-10">
            <p class="text-center">Other Courses</p>
            <ul>
              <li><a href="/crashcourse">NEET/ JEE Main and Advanced Crash course</a></li>
              <li><a href="/twoyear">2 Year Integrated Coaching Program for JEE Main + Advance and NEET Exam</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
     <CustomFooter /> 
  </div> 
</template>

<script>

import CustomFooter from "@/components/footer-custom.vue";

export default {

  components: {
    CustomFooter
  },

  head() {
    return{
       title: 'Intergrated program courses | 1yr coaching program for Jee &Neet in Nagaland',
    meta: [
      {    
      hid: 'description',
      name: 'description',
      content:'Imperial institute provides 1 year coaching program for JEE and NEET in Nagaland with advance level guidance and advanced courses for the students.'
      },
      {    
      hid: 'keywords',
      name: 'keywords',
      content:'1yr coaching program for Jee &Neet, Intergrated program courses'
      }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: Gilroy-Bold;
  color:#16246a;
  font-size: 25px;
}

h2 {
  font-size: 20px;
  font-family: Gilroy-Bold;
}

.mmstyle {


        p {
          @apply text-black;
          line-height: 1.9;
        }

        img {
          border-radius: 8px;
        }
}

.other-courses {
  background-color: #ff8a5b;
  border-radius: 8px;

  p {
    color:white;
    font-size: 25px;
  }

  a {
    @apply text-white;
  }

  li {
    margin: 20px 0;
  }


li:before {
  content: "•"; /* Insert content that looks like bullets */
  padding-right: 8px;
  color: white; /* Or a color you prefer */
  }
}

li {
  margin: 10px 0;
}

li:before {
  content: "•"; /* Insert content that looks like bullets */
  padding-right: 20px;
  color: black; /* Or a color you prefer */
  }

</style>
