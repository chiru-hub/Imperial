<template>
  <div>
    <div class="my-container py-10">
      <div class="flex flex-wrap lg:py-32">
        <div class="w-full lg:w-1/3 lg:py-5">
          <img src="/images/certificate_icon.png" alt />
        </div>
        <div class="w-full lg:w-1/2 self-center">
          <h2>Courses</h2>
          <p>Small Batch (only 30 stydents). Right mix of classes, problem solving and doubt clearing essions. Most updated & comprehensive study material directed by Boards and other competition Entrance Examination. Periodic tests on the latest JEE pattern as well NEET pattern. Regular feedbacks & test analysis sessions. Assignments for Home. Additional help CEE, MEE etc. Customized Teaching methodology to provide exclusive teaching to each and evry students for better results.</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-between">
        <div class="w-full lg:w-1/3 p-10 lg:pr-4">
          <div class="first-part-cards2">
            <div style="background-color:#ff8a5b" class="cards-content text-center px-5 relative">
              <h4>JEE</h4>
              <h4>(Mains + Advanced)</h4>
              <p
                style="min-height: 6.2rem;"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente dicta, dolorem qui vel ipsum.</p>
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
              <h4>JEE</h4>
              <h4>(Mains + Advanced)</h4>
              <p
                style="min-height: 6.2rem;"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente dicta, dolorem qui vel ipsum.</p>
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
            <h4>JEE</h4>
            <h4>(Mains + Advanced)</h4>
            <p
              style="min-height: 6.2rem;"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente dicta, dolorem qui vel ipsum.</p>
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
