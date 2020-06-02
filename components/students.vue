<template>
  <div class="bg-color slant">
    <div class="my-container py-32">
      <div class="flex flex-wrap">
        <div class="w=full lg:w-1/3">
          <p class="text-center">600+ Students</p>
          <p
            class="text-center w-11/12 lg:w-3/4 mx-auto"
          >Nurturing the aspirations of students over the years who dream about having a fulfilling career.</p>
        </div>
        <div class="w=full lg:w-1/3 my-10 lg:my-0">
          <p class="text-center">70+ Rank Holders</p>
          <p
            class="text-center w-11/12 lg:w-3/4 mx-auto"
          >Proud to be among the top Coaching Institutes with brilliant academic performance in IIT-JEE, NEET and Boards.</p>
        </div>
        <div class="w=full lg:w-1/3">
          <p class="text-center">16+ Faculties ( In-house and Visiting) </p>
          <p
            class="text-center w-11/12 lg:w-3/4 mx-auto"
          >Experienced  faculties from IITs and NITs to give the right  guidance to every Engineering & Medical aspirant.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>


@media screen and (min-width: $medium) {
  .slant {
    clip-path: polygon(0% 0%, 100% 20%, 100% 85%, 0 100%);
    -webkit-clip-path: polygon(0% 18%, 100% 0%, 100% 80%, 0% 100%);
  }
}


.bg-color {
  background-color: rgb(7, 5, 102);

  p {
    color: white;
    opacity: 0.9;
  }

  p:first-child {
    font-size: 3.5rem;
    font-weight: 700;
  }
}
</style>
