<template>
  <div class="wrapper__pagging">
    <div>
      <button class="btn btnDefaul" v-if="currentPage != 1" @click="selectPage(currentPage-1)">Prev</button>
      <button class="btn btnDisabled" v-else disabled @click="selectPage(currentPage-1)">Prev</button>
    </div>

    <div>
      <button v-if="hasFirst" class="btnDefaul btn" @click="selectPage(1)">1</button>
      <button v-if="hasFirst" class="btnDefaul btn">...</button>

      <button
        v-for="buttonNumber in pageNumbers"
        :key="buttonNumber"
        :class="[currentPage == buttonNumber ? 'btnPrimary':'btnDefaul', 'btn' ]"
        @click="selectPage(buttonNumber)"
      >{{buttonNumber}}</button>

      <button v-if="hasLast" class="btnDefaul btn">...</button>
      <button v-if="hasLast" class="btnDefaul btn" @click="selectPage(lastButton)">{{lastButton}}</button>
    </div>

    <div>
      <button
        class="btn btnDefaul"
        v-if="currentPage < lastButton"
        @click="selectPage(currentPage+1)"
      >Next</button>
      <button disabled
        class="btn btnDisabled"
        v-else
        @click="selectPage(currentPage+1)"
      >Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number
    },
    count: {
      type: Number,
      required: true
    },
    delta: {
      type: Number,
      default: 2
    }
  },

  data() {
    return {
      currentPage: 1
    };
  },

  methods: {
    selectPage(page) {
      if (page > 0 && page <= this.lastButton) {
        this.currentPage = page;
        this.$emit("changePage", this.currentPage);
      }
    }
  },

  computed: {
    lastButton() {
      return Math.ceil(this.total / this.count);
    },

    hasFirst() {
      return this.startRange != 1;
    },

    hasLast() {
      return this.endRange != this.lastButton;
    },

    pageNumbers() {
      var pages = [];
      for (let i = this.startRange; i <= this.endRange; i++) {
        pages.push(i);
      }
      return pages;
    },

    startRange() {
      return this.currentPage - this.delta > 0
        ? this.currentPage - this.delta
        : 1;
    },

    endRange() {
      return this.currentPage + this.delta < this.lastButton
        ? this.currentPage + this.delta
        : this.lastButton;
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 0.2em 0.5em;
  line-height: 1;
  text-transform: none;
  border-radius: 30px;
  font-size: 14px;
}

.wrapper__pagging{
  display: flex;
  justify-content: space-between;
}

.btnDisabled{
  color: #ffffff;
  border: 1px solid #33333359;
  background-color: #33333359;
}
</style>