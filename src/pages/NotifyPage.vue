<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="notify__wrapper">
          
          <!-- title -->
          <div class="notify-title">
            <p>Notify app</p>
          </div>

          <!-- notify -->
          <div class="notify__content">
            <notify 
              :messages="messages"/>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import notify from "@/components/Notify";

export default {
  components: {
    notify
  },
  data() {
    return {
      messages: [
        { title: "message 1" },
        { title: "message 2" },
        { title: "message 3" },
        { title: "message 4" },
        { title: "message 5" },
        { title: "message 6" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center; 
  }

  .notify__wrapper{
    width:400px;
    background-color: #fff;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0, 12px,22px,0 rgba(0, 0, 0, .1)
  }

  .notify__content{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
  }

  .notify-title{
    p{
      font-size: 24px;
    }
  }
</style>

