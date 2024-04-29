export const CardItem = {
  template: `
      <li :key="id">
          <h2>{{title}}</h2>
          <img :src="image_url" alt="" />
          <p>{{content}}</p>
          <button @:click="increase(id)">
              {{like}} Like{{like > 1 ? 's' : ''}}
          </button>
      </li>
      `,
  props: {
    image_url: String,
    title: String,
    content: String,
    id: Number,
    like: Number,
    increase: Function,
  },
};
