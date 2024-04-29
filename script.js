import { CardItem } from "./components/CardItem.js";

const { createApp, ref } = Vue;

const vm = createApp({
  components: {
    "card-post": CardItem,
  },
  methods: {
    increase(id) {
      console.log("Increase likes for post with id: ", id);
      const post = this.postList.find((post) => post.id === id);
      post.like += 1;
    },
  },
  data() {
    return {
      postList: [
        {
          id: 1,
          image_url:
            "https://images.pexels.com/photos/19987317/pexels-photo-19987317/free-photo-of-art-motif-architecture-luxe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "title 1",
          content: "content 1",
          like: 0,
        },
        {
          id: 2,
          image_url:
            "https://images.pexels.com/photos/19987317/pexels-photo-19987317/free-photo-of-art-motif-architecture-luxe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "title 2",
          content: "content 2",
          like: 0,
        },
        {
          id: 3,
          image_url:
            "https://images.pexels.com/photos/19987317/pexels-photo-19987317/free-photo-of-art-motif-architecture-luxe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "title 3",
          content: "content 3",
          like: 0,
        },
      ],
    };
  },
}).mount("#app");
