<template>
  <div class="sort_container" @click="changeSortDirection()">
    <div
      v-if="curSortField != sortedFieldName || sortDir == null || sortDir == 1"
      class="up-triangle"
    ></div>
    <div
      v-if="curSortField != sortedFieldName || sortDir == null || sortDir == 0"
      class="down-triangle"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    sortedFieldName: {
      type: String,
      required: true
    },
    sortDirection: {
      type: Number,
      default: null
    },
    curSortField: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      sortDir: this.sortDirection
    };
  },

  methods: {
    changeSortDirection() {
      if (this.curSortField == null || this.curSortField == this.sortedFieldName) {
        if (this.sortDir == 0) {
          this.sortDir = 1;
        } else if (this.sortDir == 1) {
          this.sortDir = null;
        } else {
          this.sortDir = 0;
        }
      }else{
        this.sortDir = 0;
      }

      this.$emit("changeSortDirection", this.sortDir, this.sortedFieldName);
    }
  }
};
</script>

<style lang="scss">

.sort_container {
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 15px;
  cursor: pointer;
}

.up-triangle {
  border-bottom: 10px solid #5247e7;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin: 1px 0 1px 0;
}

.down-triangle {
  border-top: 10px solid #5247e7;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin: 1px 0 1px 0;
}
</style>