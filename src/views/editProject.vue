<template>
  <h1>Edit project</h1>
  <form @submit.prevent="handleSubmit">
    <label for="">Title:</label>
    <input type="text" v-model="title" required />
    <label for=""> Details: </label>
    <textarea v-model="details" required></textarea>

    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      url: "http://localhost:3000/projects/" + this.id,
    };
  },
  mounted() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      });
  },
  methods: {
    handleSubmit() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, details: this.details }),
      })
        .then(this.$router.push("/"))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style></style>
