<template>
  <div class="bg-color slant">
    <div class="my-container py-32">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/3 pb-32">
          <h2 class="text-center">600+ <br> students</h2>
          <p
            class="text-center w-11/12 lg:w-3/4 mx-auto"
          >Nurturing the aspirations of students over the years who dream about having a fulfilling career.</p>
        </div>
        <div class="w-full lg:w-1/3 my-10 lg:my-0  pb-32">
          <h2 class="text-center">70+ <br> rank holders</h2>
          <p
            class="text-center w-11/12 lg:w-3/4 mx-auto"
          >Proud to be among the top Coaching Institutes with brilliant academic performance in IIT-JEE, NEET and Boards.</p>
        </div>
        <div class="w-full lg:w-1/3 ">
          <h2 class="text-center">16+ <br> Faculties</h2>
          <p
            class="text-center w-11/12 lg:w-3/4 mx-auto"
          >Experienced  faculties from IITs and NITs to give the right  guidance to every Engineering & Medical aspirant.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>


@media screen and (min-width: $large) {
  .slant {
    clip-path: polygon(0% 0%, 100% 20%, 100% 85%, 0 100%);
     padding: 150px 0;
    -webkit-clip-path: polygon(0% 18%, 100% 0%, 100% 80%, 0% 100%);
  }
}


.bg-color {
  background-color: rgb(7, 5, 102);


  h2{
    font-family: 'Gilroy-bold';
    color: white;
    line-height: 46px;
    margin-bottom: 15px;
  }

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
