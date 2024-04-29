export const CardItem = {
  template: `
      <li :key="id25">
          <h2>{{title}}</h2>
          <img v-bind:src="image_url" alt="" />
          <p>{{content}}</p>
          <button @:click="increase()">
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
