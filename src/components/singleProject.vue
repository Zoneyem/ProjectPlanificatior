<template>
  <div class="project" :class="{ complete: project.complete }">
    <!--ici on te donne une classe de complete et on te demande d'évaluer project avec une classe de complete-->
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{name:'editProject', params:{id: project.id}}"><span class="material-icons">edit</span></router-link>

        <span @click="deleteItem" class="material-icons">delete</span>
        <span @click="toogleComplete" class="material-icons coché">done</span>
      </div>
    </div>

    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"], // accepter le props venant de project l'element parent Homeview
  data() {
    return {
      showDetails: false,
      url: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    deleteItem() {
      fetch(this.url, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => err.message);
    },
    toogleComplete() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => this.$emit("complete", this.project.id))
        .catch((err) => err.message);
    },
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px, 3px rgba(0, 0, 0, 05);
  border-left: 4px solid #e90074;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  cursor: pointer;
}

.material-icons {
  cursor: pointer;
}
.material-icons:hover {
  color: lightgray;
}

.complete {
  border-left: 4px solid lime;
}

.complete .coché {
  color: lime;
}
</style>
