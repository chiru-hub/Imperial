<template>
  <div>
    <div class="my-container py-10">
      <div class="flex flex-wrap lg:py-32">
        <div class="w-full lg:w-1/3 lg:py-5">
          <img src="/images/filled_outline.png" alt />
        </div>
        <div class="w-full lg:w-1/2 self-center">
          <h2>Our Toppers -</h2>
          <p>Imperial have a legacy of being an excellent coaching Institute with a proven track record of producing top rank holders every year for various entrance exams. It's integrated teaching methodologies, qualified and highly trained faculty, a conducive and competitive environment among other factors contribute to it's excellent results each year.</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-between md:pt-10">
        <client-only>
          <carousel
            :perPageCustom="[[0, 1], [ 768, 2], [ 991, 3]]"
            :mouse-drag="false"
            :autoplay="true"
            class="topper-carousel"
            :loop="true"
            :navigationEnabled="true"
            :autoplayTimeout="2000"
          >
            <slide class="w-full carousel-slide">
              <div class="student-cards relative">
                <img src="/images/topper1.jpeg" alt />
                <div
                  class="w-4/5 mx-auto student-cards-box absolute py-6"
                >
                  <p>Raj Paul</p>
                  <p>3rd rank(Science)</p>
                  <p>Roll No-204813231 <br/> Percentage 91.80%</p>
                </div>
              </div>
            </slide>
            <slide class="w-full carousel-slide">
              <div class="student-cards relative">
                <img src="/images/topper2.jpeg" alt />
                <div
                  class="w-4/5 mx-auto student-cards-box absolute py-6"
                >
                  <p>Sangerbenla Txudir</p>
                  <p>4th Rank (Science)</p>
                  <p>Roll no- 204809231 <br/>
                  Percentage - 90.20%</p>
                </div>
              </div>
            </slide>
            <slide class="w-full carousel-slide">
              <div class="student-cards relative">
                <img src="/images/topper3.jpeg" alt />
                <div
                  class="w-4/5 mx-auto student-cards-box absolute py-6"
                >
                  <p>Anushka Bhattacharjee</p>
                  <p>1st rank (Science)</p>
                  <p>Roll no- 204809005 <br/>
                  Percentage - 95.20.20%</p>
                </div>
              </div>
            </slide>
            <!-- <slide class="w-full carousel-slide">
              <div class="student-cards relative">
                <img src="/images/student1.png" alt />
                <div
                  class="w-4/5 mx-auto student-cards-box absolute py-6"
                >
                  <p>Jane Lau</p>
                  <p>JEE- 95%</p>
                </div>
              </div>
            </slide> -->
          </carousel>
        </client-only>

        <!-- <div class="w-full lg:w-1/3 p-10 lg:pr-4">
          <div class="student-cards relative">
            <img src="/images/student1.png" alt />
            <div
              class="w-4/5 mx-auto student-cards-box absolute py-6"
              style="background-color:#5ba8ff;"
            >
              <p>Jane Lau</p>
              <p>JEE- 95%</p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-10 lg:pr-4">
          <div class="student-cards relative">
            <img src="/images/student1.png" alt />
            <div
              class="w-4/5 mx-auto student-cards-box absolute py-6"
              style="background-color:#ff5b5b;"
            >
              <p>Jane Lau</p>
              <p>JEE- 95%</p>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.carousel-slide{
  height: 391px;
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


.student-cards {
  img {
    border-radius: 20px;
  }

  &-box {
    border-radius: 20px;
    bottom: -60px;
    left: 0px;
    right: 0px;
    box-shadow: -18px 18px 30px 0 rgba(0, 0, 0, 0.16);

    p:first-child {
      font-size: 18px;
      color: white;
      font-family: Gilroy;
      opacity: 1;
      text-align: center;
    }

    p {
      font-family: Gilroy-bold;
      color: white;
      opacity: .9;
      text-align: center;
      font-size: 13px;
      line-height: 1.4;
    }
  }
}

.topper-carousel .carousel-slide:nth-child(even)  .student-cards-box{
  background-color:#ff8a5b
}

.topper-carousel .carousel-slide:nth-child(odd)  .student-cards-box{
  background-color:#3f51b5
}
</style>
