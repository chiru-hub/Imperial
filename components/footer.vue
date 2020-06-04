<template>
  <div>
    <div class="footer">
      <div class="flex flex-wrap relative">
        <div class="w-full lg:w-2/5">
          <p class="heading text-center">About Us</p>
          <div class="footer-content mt-32 lg:absolute lg:w-3/5" style="z-index:1">
            <p
              class="px-20 py-16"
            >Imperial Institute is Nagaland's best coaching centre for IIT-JEE, NEET and Boards Preparation ( CBSE + NBSE). Equipped with state -of-the-art infrastructure, smart classroom, laboratory and library , we are the only Institute to provide hand crafted exclusive study materials with copyright. Prepare for your exams with the best brains of the state and let faculties from IITs and NITs help you reach your goals at Imperial.</p>
          </div>
        </div>
        <div class="w-full  lg:w-3/5">
          <client-only>
            <carousel
              :per-page="1"
              :mouse-drag="false"
              :autoplay="true"
              :loop="true"
              class=""
              :autoplayTimeout="3000"
            >
              <slide>
                <img class="image object-contain" src="/images/about-caro1.jpeg" alt />
              </slide>
              <slide>
                <img class="image object-contain" src="/images/about-caro2.jpeg" alt />
              </slide>
              <slide>
                <img class="image object-contain" src="/images/about-caro3.jpeg" alt />
              </slide>
              <slide>
                <img class="image object-contain" src="/images/about-caro4.jpeg" alt />
              </slide>
              <slide>
                <img class="image object-contain" src="/images/about-caro5.jpeg" alt />
              </slide>
              <slide>
                <img class="image object-contain" src="/images/about-caro6.jpeg" alt />
              </slide>
              <slide>
                <img class="image object-contain" src="/images/about-caro7.jpeg" alt />
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
    </div>
    <div style="background-color:#16246a">
      <div class="contact my-container flex flex-wrap py-20">
        <div class="w-full flex flex-wrap md:w-1/2 lg:w1/2 footer-text-left text-center">
        <h3 class="w-full">Imperial Coaching</h3>
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
            <a href="https://facebook.com/imperialcoachingcenter/" target="_blank"><img src="/images/facebook.png" alt /></a>
            <a href="https://www.instagram.com/imperialcoaching2020/" target="_blank" ><img src="/images/instagram.png" alt /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.heading {
  line-height: 70px;
  font-size: 96px;
  color: #ff5454;
  font-family: "Gilroy-Bold";
}

.footer {
  background-image: linear-gradient(#d3deec 60%, #16246a 40%);
}

.footer-content {
  box-shadow: 20px 20px 40px 0 rgba(11, 19, 57, 0.3);
  border-radius: 0 15px 15px 0;
  background-color: white;

  p {
    color: #d2d2d2;
    line-height: 1.8;
    font-family: "Gilroy-Light";
    font-size: 25px;
  }
}

.image {
  width: 100%;
  // height: 740px;
}

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
