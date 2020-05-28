<template>
  <div class="bg-color slant">
    <div class="my-container py-32">
      <div class="flex flex-wrap">
        <div class="w=full lg:w-1/3">
          <p class="text-center">10,000+ students</p>
          <p
            class="text-justify w-11/12 lg:w-3/4 mx-auto"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis temporibus quo voluptas vel?</p>
        </div>
        <div class="w=full lg:w-1/3 my-10 lg:my-0">
          <p class="text-center">10,000+ students</p>
          <p
            class="text-justify w-11/12 lg:w-3/4 mx-auto"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis temporibus quo voluptas vel?</p>
        </div>
        <div class="w=full lg:w-1/3">
          <p class="text-center">10,000+ students</p>
          <p
            class="text-justify w-11/12 lg:w-3/4 mx-auto"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis temporibus quo voluptas vel?</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.slant {
  clip-path: polygon(0% 0%, 100% 20%, 100% 85%, 0 100%);
  -webkit-clip-path: polygon(0% 18%, 100% 0%, 100% 80%, 0% 100%);
}

.bg-color {
    background-color: rgb(7, 5, 102);
    clip-path: polygon(100% 1%, 100% 50%, 0 100%, 0% 50%);

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
