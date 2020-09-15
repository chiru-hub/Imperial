<template>
  <div style="background-color:##d3deec">
    <div class="my-container mmstyle py-48">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12">
          <div class="flex flex-wrap items-end justify-around">
            <img class="" src="/images/twoyear.jpeg" alt="">
            <h1 class="mt-10 md:mt-16">
              2 Year Integrated Coaching Program for JEE Main + Advance and NEET Exam
            </h1>
          </div>
          <div class="w-full mt-12">
            <p>The 2 year integrated program for JEE main + advance and NEET is designed for students moving from Class X to XI to prepare students throughout their higher secondary years.</p>
            <p>The 2 years is an integrated one which includes additional help for XII Board exams, for both NBSE and CBSE students. This intensive course structure prepares you for NEET/IIT-JEE (Advanced) & JEE (Main) in a pattern proof mode.</p>
            <p>Students are prepared to give their best and optimum performance even if the pattern of the exam is changed at the last minute. We are the only institute whose Students do well not only in NEET JEE (Advanced) but also in JEE (Main), XII Boards & Other Engineering Entrance Exams. Students who qualified for NEET/JEE mains/JEE (Advanced) also scored well in their XII Board Exams thus figuring in the Top 20 percentile of their respective Boards.We encourage Students / Parents to choose a 2 years integrated program courses over the regular programs to prepare for NEET/JEE without additional stress.</p>
            <h2>2 year Integrated Coaching Program Focus & Objectives:</h2>
            <ul>
              <li>Helps students excel in NEET/ JEE/CBSE Board, besides enhancing their IQ at every stage.</li>
              <li>Regular solving of mock board test papers.</li>
              <li>Regular feedbacks & test analysis sessions. </li>
              <li>To develop examination temperament All India Test Series (AITS) is provided.</li>
              <li>Rank Improvement Program (RIP).</li>
              <li>IIT-JEE Archive: Question Bank with Answers.</li>
              <li>Online Home Support.</li>
              <li>Grand Masters Package (GMP) provided to improve the ability of the students.</li>
              <li>Access to Rankers Test Paper File (RTPF)</li>
              <li>Open test for NEET, JEE (Main & Advanced)</li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-2/6">
          <div class="other-courses py-16 px-10">
            <p class="text-center">Other Courses</p>
            <ul>
              <li><a href="/crashcourse">NEET/ JEE Main and Advanced Crash course</a></li>
              <li><a href="/oneyear">1 Year Integrated Coaching Program for NEET / JEE (Main and Advance)</a></li>
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
       title: 'Intergrated program courses | 2yr coaching program for Jee &Neet in Nagaland',
    meta: [
      {    
      hid: 'description',
      name: 'description',
      content:'Imperial coaching institute offers 2 year integrated coaching program for JEE main crash course, JEE advanced crash course and NEET.'
      },
      {    
      hid: 'keywords',
      name: 'keywords',
      content:'Intergrated program courses, 2yr coaching program for Jee &Neet'
      }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>

.mmstyle {

h1 {
  font-family: Gilroy-Bold;
  color:#16246a;
  font-size: 25px;
}

h2 {
  font-size: 20px;
  font-family: Gilroy-Bold;
}

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
