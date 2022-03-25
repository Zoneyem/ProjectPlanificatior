<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filtered" :key="project.id">
        <singleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
        <!--binder le props et le definir-->
      </div>
    </div>
  </div>
</template>

<script>
import singleProject from "../components/singleProject.vue";
import FilterNav from "../components/FilterNav.vue";

export default {
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  components: { singleProject, FilterNav },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id != id;
      });
    },
    handleComplete(id) {
      let p = this.projects.find((project) => {
        return project.id === id;
      });
      p.complete = !p.complete;
    },
  },
  computed: {
    filtered() {
      if (this.current === "completed") {
        return this.projects.filter((project) => project.complete);
      }
      if (this.current === "ongoing") {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects
    },
  },
};
</script>

<style></style>
