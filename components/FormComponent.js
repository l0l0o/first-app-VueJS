export const FormComponent = {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  props: {
    handleSubmit: Function,
  },
  template: `<form :submit:prevent="handleSubmit(title, content)" action="">
  <input type="text" placeholder="title" />
  <input type="text" placeholder="content" />
  <input type="submit" value="submit" />
</form>`,
};
