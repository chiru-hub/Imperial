<template>
  <div class="nav-header transparent fixed">
    <div class="container h-100 mx-10 lg:mx-auto">
      <div
        class="nav-icon w-100"
        style="display:flex; justify-content: space-between;align-items:center"
      >
        <nuxt-link to="/" style="display:flex; align-items: center">
          <img src="/icon.png" style="height:100%;width:50px" />
          <h6
            style="margin-bottom: 0; font-family: 'bold'; font-size: 30px; margin-left: 10px"
          >Imperial</h6>
        </nuxt-link>
        <div class="nav-link hide-on-med-and-down">
          <nuxt-link
            class="link"
            v-scroll-to="{
                el: 'html',
                duration: 1000,
            }"
            to="/"
          >Admission</nuxt-link>
          <nuxt-link
            class="link"
            v-scroll-to="{
                el: '.courses',
                duration: 1000,
            }"
            to="/"
          >Courses</nuxt-link>
          <nuxt-link
            class="link"
            v-scroll-to="{
                el: '.events',
                duration: 1000,
            }"
            to="/"
          >About</nuxt-link>
          <nuxt-link
            class="link"
            v-scroll-to="{
                el: '.blog',
                duration: 1000,
            }"
            to="/"
          >Testimonials</nuxt-link>
          <nuxt-link
            v-scroll-to="{
                el: '.contact',
                duration: 1000,
            }"
            class="link"
            to="/"
          >Contact Us</nuxt-link>
        </div>
        <div
          @click="showMenu"
          class="show-on-medium-and-down hide-on-large-only menu"
          style="align-items: center;"
        >
          <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <svg
            class="menu-svg"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;height: 20px"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  fill="white"
                  d="M491.318,235.318H20.682C9.26,235.318,0,244.577,0,256s9.26,20.682,20.682,20.682h470.636
			c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="white"
                  d="M491.318,78.439H20.682C9.26,78.439,0,87.699,0,99.121c0,11.422,9.26,20.682,20.682,20.682h470.636
			c11.423,0,20.682-9.26,20.682-20.682C512,87.699,502.741,78.439,491.318,78.439z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="white"
                  d="M491.318,392.197H20.682C9.26,392.197,0,401.456,0,412.879s9.26,20.682,20.682,20.682h470.636
			c11.423,0,20.682-9.259,20.682-20.682S502.741,392.197,491.318,392.197z"
                />
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </div>
      </div>

      <div class="mobile-nav opacity-hide">
        <div class="nav">
          <div class="link" @click="goTo('html')" to="/">Admission</div>
          <div class="link" @click="goTo('.courses')" to="/services">Courses</div>
          <div class="link" @click="goTo('.events')" to="/ourwork">About</div>
          <div class="link" @click="goTo('.blog')" to="/">Testimonials</div>
          <div class="link" @click="goTo('.contact')" to="/">Contact Us</div>
        </div>
        <div @click="closeMenu" class="show-on-medium-and-down hamburger">
          <img src="~static/close.svg" style="height:20px" />
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.border-b {
  border-color: #ffffff59;
}

.nav-header {
  background-color: white;
  height: 80px;
  display: flex;
  font-family: "Bold";
  align-items: center;
  transition: all 0.5s;
}

.hide-up {
  top: -80px !important;
}

.nav-header.transparent {
  background-color: transparent !important;
}

.nav-header.darkHeader {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #ff5454!important;
}

.nav-header.darkHeader a,
.nav-header.darkHeader svg {
  color: white !important;
}
.nav-header.darkHeader .menu-svg {
  fill: white;
}

.nav-header.white {
  background-color: #fff;
}

.nav-header.white a {
  color: black;
}

.nav-header.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.nav-icon {
  height: 100%;
}

.nav-header a {
  color: #fff;
  text-decoration: none;
}

.nav-header .link {
  padding: 8px 16px;
  font-size: 15px;
}

.mobile-nav .link {
  font-size: 20px;
  color: white !important;
}

.nav-link a {
  position: relative;
  transition: all 0.5s;
}

.nav-link a:hover {
  color: #f8650c;
}
.nav-link a:after {
  content: "";
  border-bottom: 2px solid #f8650c;
  position: absolute;
  width: 10px;
  bottom: 0;
  opacity: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: all 0.3s ease-in-out;
}

.nav-link a:hover:after {
  content: "";
  border-bottom: 2px solid white;
  position: absolute;
  width: 45px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  margin: auto;
}

.nav-link a:hover:after {
  content: "";
  border-bottom: 2px solid #fff;
  position: absolute;
  width: 45px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  margin: auto;
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  background-color: #232323;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.nav {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 40px;
  opacity: 0;
}

.nav .link {
  margin: 15px 0;
}

.menu {
  cursor: pointer;
}

.hamburger {
  position: fixed;
  top: 20px;
  right: 6.1%;
  cursor: pointer;
}

.animation {
  line-height: 19px;
  transition: all 0.4s ease;
  opacity: 1;
}
</style>


<script>
export default {
  data() {
    return {};
  },

  watch: {
    $route() {
      $(".mobile-nav").addClass("opacity-hide");
    }
  },

  mounted() {
    var that = this;
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
      var st = $(this).scrollTop();
      if (st > lastScrollTop && st > 200) {
        $(".nav-header").addClass("hide-up");
      } else {
        // upscroll code
        $(".nav-header").removeClass("hide-up");
      }
      lastScrollTop = st;
    });

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if ($nuxt.$route.name == "index") {
        //>=, not <=
        if (scroll <= 0) {
          //clearHeader, not clearheader - caps H
          $(".nav-header").removeClass("darkHeader");
          $("#moveup").removeClass("show");
        } else if (scroll > 0) {
          $(".nav-header").addClass("darkHeader");
          $("#moveup").addClass("show");
        }
      }else{
          $(".nav-header").addClass("darkHeader");
      }
    }); //missing );
  },

  methods: {
    goTo(a) {
      this.$scrollTo(a, {
        offset: -100
      });
      this.closeMenu();
    },
    showMenu: function() {
      $(".mobile-nav").removeClass("opacity-hide");

      $(".nav").addClass("animation");
    },
    closeMenu: function() {
      $(".mobile-nav").addClass("opacity-hide");

      $(".nav").removeClass("animation");
    }
  }
};
</script>
