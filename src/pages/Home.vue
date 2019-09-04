<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div v-if="error" class="error-message">{{error}}</div>
        <search :value="search" placeholder="user name" @search="(search = $event)" />
        <!-- serch again button-->
        <button class="btn btnPrimary" @click="getUser">
          <span v-if="!user">Search</span>
          <span v-else>Search again</span>
        </button>

        <!-- user info el -->
        <user v-if="user" :info="user" @showRep="getRepositories" />

        <!-- list of repos -->
        <transition name="reps-list">
          <div v-show="showRep" class="repos__wrapper">
            <div class="sort__wrapper">
              <!-- sorting components-->
              <sort
                :sortDirection="sortDirection"
                @changeSortDirection="onChangeSortDir"
                sorted-field-name="name"
                :curSortField="curentSortField"
              />
              <sort
                :sortDirection="sortDirection"
                @changeSortDirection="onChangeSortDir"
                sorted-field-name="stargazers_count"
                :curSortField="curentSortField"
              />
            </div>

            <!-- list of reps -->
            <div class="repo-item" v-for="repo in chunkReps" :key="repo.id">
              <div class="repo-info">
                <a :href="repo.html_url" class="link" target="_blank">{{repo.name}}</a>
                <span>{{repo.stargazers_count}}⭐</span>
              </div>
            </div>

            <!-- pagination component -->
            <pagination
              :total="total"
              :count="repsOnPageCount"
              :delta="2"
              @changePage="onChangePage"
            />
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import search from "@/components/Search";
import axios from "axios";
import user from "@/components/User";
import pagination from "@/components/UI/Pagination";
import sort from "@/components/UI/Sort";
import sortReps from "@/assets/js/sort";

export default {
  data() {
    return {
      search: "",
      repos: null,
      error: null,
      user: null,
      showRep: false,
      repsOnPageCount: 4,
      startIndex: 0,
      sortDir: null,
      curentSortField: null
    };
  },
  components: {
    search,
    user,
    pagination,
    sort
  },
  methods: {
    getUser() {
      axios
        .get(`https://api.github.com/users/${this.search}`)
        .then(res => {
          this.user = res.data;
          axios
            .get(`https://api.github.com/users/${this.search}/repos`)
            .then(res => {
              this.repos = res.data;
              this.error = null;
            })
            .catch(err => {
              this.error = "there isn't such user";
              this.repos = null;
            })
            .finally(() => {
              this.sortDir = null;
              this.curentSortField = null;
            });
        })
        .catch(err => {
          this.null = null;
        });
    },
    onChangeSortDir(direction, sortFieldName) {
      this.sortDir = direction;
      this.curentSortField = sortFieldName;
    },
    getRepositories(showRep) {
      this.showRep = showRep;
    },
    onChangePage(page) {
      this.startIndex =
        page == 1 ? page - 1 : (page - 1) * this.repsOnPageCount;
    }
  },
  computed: {
    chunkReps() {
      if (this.repos) {
        let endIndex = this.startIndex + this.repsOnPageCount - 1;

        this.repos.sort((a, b) => {
          return sortReps(a, b, this.curentSortField, this.sortDirection);
        });

        return this.repos.filter((rep, index) => {
          return index >= this.startIndex && index <= endIndex;
        });
      }
      return this.repos;
    },

    total() {
      return this.repos ? this.repos.length : 0;
    },

    sortDirection() {
      return this.sortDir;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btnPrimary {
  margin-top: 40px;
}

.repos__wrapper {
  width: 400px;
  margin-top: 40px;
  transform-origin: top;
  transition: transform 0.4s ease-in-out;
}

.reps-list-enter,
.reps-list-leave-to {
  transform: scaleY(0);
}

.repo-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}

.error-message {
  margin: 5px 0;
}

.sort__wrapper {
  width: 400px;
  display: flex;
  justify-content: space-between;
  height: 24px;
}
</style>