<template>
  <div>
    <div class="my-container courses py-10">
      <div class="flex flex-wrap lg:py-32">
        <div class="w-full lg:w-1/3 lg:py-5">
          <img src="/images/certificate_icon.png" alt />
        </div>
        <div class="w-full lg:w-1/2 self-center">
          <h2>Courses -</h2>
          <p>At Imperial Institute , we offer our students a very holistic curriculum backed by an advance teaching methodology, result-oriented test preparations, and expert faculty guidance to enhance the conceptual knowledge base.</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-between">
        <div class="w-full lg:w-1/3 p-10 lg:pr-4">
          <div class="first-part-cards2">
            <div style="background-color:#ff8a5b" class="cards-content text-center px-5 relative">
              <h4>Crash course</h4>
              <h4>Board (NBSE+ CBSE) Jee (Main & Advance), NEET.</h4>
              <p
                style="min-height: 13.5rem;"
              >60 days classroom program with small batch (only 30 students). The right mix of classes, problem solving and doubt clearing sessions.</p>
              <div
                style="bottom: -40px;left: 0px;right: 0px;"
                class="mt-8 absolute buttons"
                v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }"
              >Enroll</div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-10 lg:pr-4">
          <div class="first-part-cards2">
            <div
              style="background-color:#5ba8ff"
              class="cards-content text-center w-full px-5 relative"
            >
              <h4>2 Years Integrated Program</h4>
              <h4>Board (NBSE+ CBSE) Jee (Main & Advance), NEET. </h4>
              <p
                style="min-height:13.5rem;"
              >Holistic program for students moving from Class X to XI to prepare students for both JEE /NEET and School Curriculum.Additional help for XII Board Exams.</p>
              <div
                style="bottom: -40px;left: 0px;right: 0px;"
                class="mt-8 absolute buttons"
                v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }"
              >Enroll</div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-10 lg:pr-4">
          <div
            style="background-color:#ff5b5b"
            class="cards-content text-center w-full px-5 relative"
          >
            <h4>1 Year Integrated Program</h4>
            <h4>Board (NBSE+ CBSE) Jee (Main & Advance), NEET. </h4>
            <p
              style="min-height: 13.5rem;"
            >Regular mentor classes for students moving from Class XI to XII. Advance level guidance for JEE / NEET and School Curriculum (Physics, Chemistry ,Mathematics & Biology).</p>
            <div
              style="bottom: -40px;left: 0px;right: 0px;"
              class="mt-8 absolute buttons"
              v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }"
            >Enroll</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.courses {
  
}

h2 {
  color: #16246a;
  font-family: 'Gilroy-Bold';
  font-size: 4.5rem;
}

img {
  width: auto;
  height: 270px;
  margin: auto;
}

p {
  color: #16246a;
  text-align: left;
  font-size: 1.8rem;
  opacity: 0.5;
  font-weight: 300;
}

.cards-content {
  @apply p-10;
  border-radius: 15px;
  min-height: 22.4rem;

  h4 {
    color: white;
    font-size: 2.3rem;
    line-height: 28px;
    font-family: "Gilroy-bold";
  }

  p {
    @apply pt-8;
    color: white;
    font-size: 1.6rem;
    text-align: center;
  }

  .buttons {
    @apply mx-10;
    border-radius: 10px;
    box-shadow: -18px 18px 30px 0 rgba(0, 0, 0, 0.16);
    background-color: #d2dcf1;
    height: 7rem;
    line-height: 7rem;
    font-family: "Gilroy-bold";
    font-size: 26px;
    font-weight: 700;
    color: #16246a;
  }
}
</style>
