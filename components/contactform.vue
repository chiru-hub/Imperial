<template>
  <div class="enroll">
    <div class="my-container">
      <div class="flex flex-wrap py-10">
        <div class="w-full md:w-3/5 lg:w-3/5">
          <img class="mx-auto lg:ml-20" src="/images/call_icon.png" alt />
        </div>
        <div class="w-full md:w-2/5 lg:w-2/5 form-active">
          <form class="px-10 py-12 lg:px-32" action="POST">
            <h2 class="text-center">To Enroll</h2>
            <input class="w-full mt-5" type="text" name="name" id placeholder="Enter your name" />
            <input class="w-full my-5" type="tel" name="phnno" id placeholder="Phone Number" />
            <input class="w-full mb-5" type="email" name="email" id placeholder="Email Address" />
            <div class="flex mb-5">
              <select class="w-1/2" name="classes" id>
                <option value="iit">Class X</option>
                <option value="iit">Class XI</option>
                <option value="iit">Class XII</option>
              </select>
              <select class="w-1/2 ml-5" name="classes" id>
                <option value="iit">NEET</option>
                <option value="iit">JEE</option>
                <option value="iit">NBSE</option>
                <option value="iit">CBSE</option>
              </select>
            </div>

            <input class="w-full mb-5" type="text" name id placeholder="Select your time to call" />
            <textarea name id cols="30" rows="10" placeholder="Your Message"></textarea>
            <button class="mt-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
img {
  width: auto;
  height: 270px;
}

.form-active {
  border-radius: 20px;
  box-shadow: -25px 25px 50px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  h2 {
    color: #ff5454;
    font-size: 3.5rem;
    font-family:Gilroy-bold;
  }

  input,
  textarea,
  select {
    background-color: #f6f6f6;
    border-radius: 8px;
    padding: 10px 8px !important;
  }

  textarea {
    width: 100%;
    height: 100px;
  }

  button {
    background-color: #6458ff;
    color: white;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 18px;
  }
}
</style>
