<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Page not found</h1>
        <p>
            Go to
            <router-link class="link" to="/"> home page </router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
    .wrapper-content{
        min-height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center
    }
</style>
