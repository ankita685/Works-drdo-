export default function createApp() {
    return {
      data() {
        return {
          count: 0,
        };
      },
      methods: {
        increment() {
          this.count++;
        },
      },
    };
  }
  