<template>
  <div>
    <div class="footer">
      <div class="flex flex-wrap relative">
        <div class="w-full md:w-1/2 lg:w-1/2">
          <p class="heading text-center">About Us</p>
          <div class="footer-content mt-32 absolute lg:w-8/12">
            <p
              class="px-20 py-16"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2">
          <img class="image object-cover" src="/images/taylor.png" alt />
        </div>
      </div>
    </div>
    <div style="background-color:#16246a">
      <div class="my-container flex flex-wrap py-20">
        <div class="w-full md:w-1/2 lg:w1/2 footer-text-left">
          <h3>IMPERIAL COACHING</h3>
          <p>Postmaster, Post Office</p>
          <p>KOHIMA (HEAD OFFICE),</p>
          <p>KOHIMA, NAGALAND (NL),</p>
          <p>India (IN), Pin Code:- 797001</p>
        </div>
        <div class="w-full md:w-1/2 lg;w-1/2 footer-text-right">
          <h3>Subscribe to our newsletter</h3>
          <div class="mt-12 flex flex-wrap">
            <input class="p-4 w-9/12" type="email" name id placeholder="Your email here" />
            <button class="ml-5 px-16">Submit</button>
          </div>
          <div class="flex justify-around mt-16 w-full md:w-full lg:w-8/12">
            <img src="/images/whatsapp.png" alt />
            <img src="/images/instagram.png" alt />
            <img src="/images/facebook.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.heading {
  font-size: 40px;
  font-weight: 800;
}

.footer {
  background-image: linear-gradient(#d3deec 60%, #16246a 40%);
}

.footer-content {
  box-shadow: 20px 20px 40px 0 rgba(11, 19, 57, 0.3);
  border-radius: 20px;
  background-color: white;

  p {
    color: #d2d2d2;
    line-height: 1.8;
  }
}

.image {
  width: 100%;
  height: 560px;
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
    line-height: 2.2;
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
