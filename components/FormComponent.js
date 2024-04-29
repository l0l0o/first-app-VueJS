export const FormComponent = {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  props: {
    handlesubmit: Function,
  },
  template: `<form @submit.prevent="handlesubmit(title, content)" action="">
  <input v-model="title" type="text" placeholder="title" />
  <input v-model="content" type="text" placeholder="content" />
  <input type="submit" value="submit" />
</form>`,
};
