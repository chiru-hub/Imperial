<template>
  <div style="background-color:##d3deec">
    <div class="my-container mmstyle py-48">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12">
          <div class="flex flex-wrap items-end justify-around">
            <img class="" src="/images/crashcourse.jpeg" alt="">
            <h1 class="mt-10 md:mt-16">
              NEET/ JEE Main and Advanced Crash course
            </h1>
          </div>
          <div class="w-full mt-12">
            <p>Our NEET and JEE crash course is designed to aid the students with one last, final touch to their preparation and get exam ready with full confidence. The course gives a quick revision of all the fundamentals and the important topics of Physics, Chemistry, Mathematics, Biology. </p>
            <p class="mt-5">We conduct regular doubt clearing sessions to give them a clear understanding of each topic and acquaint them well with the exam pattern. With the NEET and JEE Main/ Advanced crash course, the students will get access to special tips and tricks to follow while appearing for the entrance. The students also get proper training  in time management skills which is  deemed necessary when appearing such competitive exams. They are made to appear for regular test papers to get accustomed to the pattern for more confidence. </p>
            <h2 class="mt-5">NEET / JEE Main & Advanced Crash Course benefits:</h2>
            <ul>
              <li>A 60 days crash course and classroom program with a small batch of only 30 students. </li>
              <li>Individual attention to each student and their specific issues. The right mix of classes with a  holistic approach, instant problem solving and doubt resolution sessions. </li>
              <li>Access to exclusive All India Test materials and exam pattern questions. </li>
              <li>Quick summaries covering each individual topic</li>
              <li>Well curated study materials and guides covering important topics prepared by experienced Imperial Faculties. </li>
              <li>Faculties and guest faculties from IITs and NITs to guide you. </li>
              <li>Regular monitoring of progress and track record of each child with timely interactions with parents to keep them updated. </li>
              <li>Access to exclusive tips and last minute hacks to attempt JEE Main and Advanced and NEET. </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-2/6">
          <div class="other-courses py-16 px-10">
            <p class="text-center">Other Courses</p>
            <ul>
              <li><a href="/oneyear">1 Year Integrated Coaching Program for NEET / JEE (Main and Advance)</a></li>
              <li><a href="/twoyear">2 Year Integrated Coaching Program for JEE Main + Advance and NEET Exam</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Customfooter />
  </div>  
</template>

<script>

import Customfooter from "@/components/footer-custom.vue"

export default {

  components: {
    Customfooter
  },

  head() {
    return{
       title: 'Imperial-:Jee main crash course | Jee advanced crash course in Nagaland',
    meta: [
      {    
      hid: 'description',
      name: 'description',
      content:'Imperial coaching institute provides a 60 days crash course program with a small batch of students for JEE  main crash course and JEE advanced crash course.'
      },
      {    
      hid: 'keywords',
      name: 'keywords',
      content:'jee main crash course, jee advanced crash course'
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
