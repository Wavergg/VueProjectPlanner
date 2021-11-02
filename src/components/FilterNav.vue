<template>
  <nav class="filter-nav">
        <button @click="updateFilter()" :class="{active : current === ''}">
            View All
        </button>
        <button @click="updateFilter('Completed')" :class="{active : current === 'Completed'}">
            Completed
        </button>
        <button @click="updateFilter('Ongoing')" :class="{active : current === 'Ongoing'}">
            Ongoing
        </button>
  </nav>
</template>

<script>
export default {
    props: ['current'],
    methods: {
        updateFilter(by = ""){
            this.$emit("filterChange",by)
        }
    }
}
</script>

<style scoped>
    .active {
        color: #555;
    }
</style>