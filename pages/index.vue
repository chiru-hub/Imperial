<template>
  <div>
    <!-- <button @click="addToCount">count {{count}}</button> -->
  </div>
</template>


<script lang="ts">
import { Vue, Component, Inject, Prop, Provide, Emit } from 'vue-property-decorator'

@Component
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
