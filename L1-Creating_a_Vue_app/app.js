// create the Vue app
// {} represents the root component
// we can set up data or functions that will be used in the app
// we can set up the template that will be injected into the DOM
// (we can also set the template directly in the HTML file)
// inside the template we can output dynamic data
const app = Vue.createApp({
  // data function
  data() {
    return {
      showBooks: true,
      books: [
        { title: "Name of the Wind", author: "Patrick Rothfuss" },
        { title: "The Way of Kings", author: "Brandon Sanderson" },
        { title: "The Final Empire", author: "Brandon Sanderson" },
      ],
      age: 45,
      x: 0,
      y: 0,
    };
  },
  // functions
  methods: {
    changeTitle(title) {
      // this references the component itself
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, number) {
      console.log(e);
      if (number) {
        console.log(number);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  //template: "<h2>I am the template</h2>",
});

// mount the app in the DOM element where id="app"
// (the part of the HTML page that will be managed by Vue)
app.mount("#app");
