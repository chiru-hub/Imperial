<template>
  <div>
    <div class="my-container py-10">
      <div class="flex flex-wrap lg:py-32">
        <div class="w-full lg:w-1/3 lg:py-5">
          <img src="/images/filled_outline.png" alt />
        </div>
        <div class="w-full lg:w-1/2 self-center">
          <h2>Our Toppers -</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae perspiciatis veritatis nesciunt quibusdam, eligendi voluptates blanditiis incidunt quaerat autem aspernatur ad optio sit odio aliquam, architecto fuga corporis esse dolor!</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-between">
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
                <img src="/images/student1.png" alt />
                <div
                  class="w-4/5 mx-auto student-cards-box absolute py-6"
                  style="background-color:#ff8a5b;"
                >
                  <p>Jane Lau</p>
                  <p>JEE- 95%</p>
                </div>
              </div>
            </slide>
            <slide class="w-full carousel-slide">
              <div class="student-cards relative">
                <img src="/images/student1.png" alt />
                <div
                  class="w-4/5 mx-auto student-cards-box absolute py-6"
                  style="background-color:#ff8a5b;"
                >
                  <p>Jane Lau</p>
                  <p>JEE- 95%</p>
                </div>
              </div>
            </slide>
            <slide class="w-full carousel-slide">
              <div class="student-cards relative">
                <img src="/images/student1.png" alt />
                <div
                  class="w-4/5 mx-auto student-cards-box absolute py-6"
                  style="background-color:#ff8a5b;"
                >
                  <p>Jane Lau</p>
                  <p>JEE- 95%</p>
                </div>
              </div>
            </slide>
            <slide class="w-full carousel-slide">
              <div class="student-cards relative">
                <img src="/images/student1.png" alt />
                <div
                  class="w-4/5 mx-auto student-cards-box absolute py-6"
                  style="background-color:#ff8a5b;"
                >
                  <p>Jane Lau</p>
                  <p>JEE- 95%</p>
                </div>
              </div>
            </slide>
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
    bottom: -40px;
    left: 0px;
    right: 0px;
    box-shadow: -18px 18px 30px 0 rgba(0, 0, 0, 0.16);

    p:first-child {
      color: white;
      font-weight: 500;
      opacity: 0.9;
      text-align: center;
    }

    p {
      font-weight: 700;
      color: white;
      opacity: 1;
      text-align: center;
    }
  }
}
</style>
