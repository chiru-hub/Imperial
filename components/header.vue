<template>
  <div class="header">
    <Navigation />
    <div class="flex flex-wrap relative my-container">
      <div class="w-full md:w-1/2 lg:w-2/3">
        <div class="footer-content">
          <client-only>
            <carousel :per-page="1" :mouse-drag="false" :autoplay="true" :loop="true" :autoplayTimeout="3000">
              <slide><img class="image object-cover" src="/images/taylor.png" alt /></slide>
              <slide><img class="image object-cover" src="/images/taylor.png" alt /></slide>
            </carousel>
          </client-only>
          
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 relative">
        <div class="hero-text absolute">
          <h1>Learn More With Us</h1>
          <p
            class="pt-8"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

          <button class="mt-10">Get Demo</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import {
  Vue,
  Component,
  Inject,
  Prop,
  Provide,
  Emit
} from "nuxt-property-decorator";

@Component({
  components: {
    Navigation: () => import("@/components/navigation.vue")
  }
})
export default class Index extends Vue {}
</script>


<style lang="scss" scoped>
.heading {
  font-size: 40px;
  font-weight: 800;
}

.header {
  @apply my-12;
  background-color: #d3deec;
  padding-top: 80px;
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

.hero-text {
  background-color: white;
  left: -90px;
  top: 0;
  padding: 50px;
  bottom: 0;
  margin: 50px 0;

  h1 {
    line-height: 70px;
    font-size: 56px;
    color: #ff5454;
    font-family: "Gilroy-Bold";
  }

  p {
    font-family: "Gilroy";
    color: #868686;
  }

  button {
    background-color: #6458ff;
    color: white;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 18px;
  }
}

.image {
  width: 100%;
  height: 560px;
}

.footer-text-left {
  h3 {
    font-size: 30px;
    font-weight: 700;
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
  }

  input {
    border-radius: 8px;
  }

  button {
    color: white;
    background-color: #6458ff;
    border-radius: 8px;
  }

  img {
    height: 35px;
  }
}
</style>
