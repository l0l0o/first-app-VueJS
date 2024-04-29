import { CardItem } from "./components/cardItem.js";
import { FormComponent } from "./components/FormComponent.js";

const { createApp, ref } = Vue;

const vm = createApp({
  components: {
    "card-post": CardItem,
    "form-component": FormComponent,
  },
  methods: {
    increase(id) {
      console.log("Increase likes for post with id: ", id);
      const post = this.postList.find((post) => post.id === id);
      post.like += 1;
    },

    handleSubmit(title, content) {
      const newPost = {
        id: this.postList.length + 1,
        title: title,
        content: content,
        image_url: "https://picsum.photos/200/300",
        like: 0,
      };
      this.postList.push(newPost);
    },
  },
  data() {
    return {
      postList: [],
    };
  },
  mounted() {
    console.log("App mounted");
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        this.postList = data;
      });
  },
}).mount("#app");
