<template>
  <div>
    <Header />
    <Students />
    <ContactForm />
    <Courses />
    <Toppers />
    <Footer />
  </div>
</template>


<script lang="ts">
import Header from "@/components/header.vue";
import ContactForm from "@/components/contactform.vue";
// import Navigation from "@/components/navigation.vue";
import Students from "@/components/students.vue";
import Courses from "@/components/courses.vue";
import Toppers from "@/components/toppers.vue";
import Footer from "@/components/footer.vue"
import { Vue, Component, Inject, Prop, Provide, Emit } from 'vue-property-decorator'



@Component({
  components:{
    Header,ContactForm, Students, Courses, Toppers,Footer
  },
})
export default class Index extends Vue {
  user = {
    firstName: "sdsd",
    lastName: 111,
  }


  foo:string = ""

  count:number = 0

  message: string = 'This is a message'

  mounted(){
    console.log("sdsd")
    console.log(this.fullName)
  }

  head(){
    return {
      title:'Jee Advanced Crash Courses | Jee Crash Course in Nagaland',
      meta: [
        {
          hid:'keywords',
          name:'keywords',
          content:'Jee Advanced crash courses, Jee crash course'
        },
        {
          hid:'description',
          name: 'description',
          content: 'imperial coaching provides jee advanced crash courses, jee crash courses, and NEET with the best faculties from IITs and NITs.'
        }
      ]
    }
  }

  get fullName (): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }

  // @Emit()
  addToCount() {
    this.count += 1
  }
}
</script>

<style scoped>

</style>
