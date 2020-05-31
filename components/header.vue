<template>
  <div class="header">
    <Navigation />
    <div class="flex flex-wrap relative">
      <div class="w-full md:w-1/2 lg:w-1/2">
        <div class="footer-content mt-32 lg:w-8/12">
          <img class="image" src="/images/taylor.png" alt />
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/2">
        <p
          class="px-20 py-16"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
