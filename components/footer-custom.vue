<template>
  <div style="background-color:#16246a">
      <div class="contact my-container flex flex-wrap py-20">
        <div class="w-full flex flex-wrap md:w-1/2 lg:w1/2 footer-text-left text-left">
        <h3 class="w-full text-center md:text-left">Imperial Coaching</h3>
          <div class="w-full md:w1/2 lg:w-1/2">
            <p>DIMAPUR</p>
            <p>2nd FLoor, Jakhalu Complex,<br/> Army Supply Road Dhobinala,<br/> Dimapur-787112 <br/> +91 8787-662255</p>
          </div>
          <div class="w-full md:w1/2 lg:w-1/2 mt-10 md:mt-0 lg:mt-0 xl:mt-0">
            <p>KOHIMA</p>
            <p>1st Floor West Road Mall,<br/> Jail Colony <br/>Kohima-797001 <br/> +91813191553</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 footer-text-right">
          <h3 class="text-center md:text-left lg:text-left">Subscribe to our newsletter</h3>
          <div class="mt-12 flex flex-wrap">
            <input class="p-4 md:w-9/12 lg:9/12" type="email" name id placeholder="Your email here" />
            <button class="ml-5 px-16">Submit</button>
          </div>
          <div class="flex justify-around mt-16 w-full md:w-full lg:w-8/12">
            <a href="https://facebook.com/imperialcoachingcenter/" target="_blank"><img src="/images/facebook.png" alt="facebook" /></a>
            <a href="https://www.instagram.com/imperialcoaching2020/" target="_blank" ><img src="/images/instagram.png" alt="instagram" /></a>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.footer-text-left {
  h3 {
    font-size: 30px;
    font-family: "Gilroy-Bold";
    color: #ff5454;
  }

  p {
    color: white;
    font-weight: 400;
    line-height: 1.6;
  }
}

.footer-text-right {
  h3 {
    font-size: 30px;
    font-weight: 700;
    color: #ff5454;
    font-family: "Gilroy-Bold";
  }

  input {
    border-radius: 8px;
  }

  button {
    background-color: #6458ff;
    color: white;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 18px;
  }

  img {
    height: 35px;
  }
}
</style>
