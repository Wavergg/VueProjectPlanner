<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length > 0">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleToggleComplete"/>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'Home',
  data(){
    return {
      projects: [],
      current: '',
    }
  },
  components: {
    SingleProject,
    FilterNav
  },
  mounted(){
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(error=> console.log(error.message))
  },
  methods: {
    handleDelete(id){
      this.projects = this.projects.filter((project) => { return project.id !== id }) 
    },
    handleToggleComplete(id){
      let project = this.projects.find((project) => { return project.id === id})
      project.complete = !project.complete
    }
  },
  computed: {
    filteredProjects(){
      if(this.current === 'Completed'){
        return this.projects.filter((project) => project.complete)
      } else if ( this.current === 'Ongoing'){
        return this.projects.filter((project) => !project.complete)
      }
      return this.projects
    }
  }
}
</script>

<style>
  .filter-nav button{
    background:none;
    border:none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
  }
</style>