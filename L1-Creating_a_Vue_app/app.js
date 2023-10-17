// create the app
// the object passed to createApp() represents the root component
// we can set up data or functions that will be used in the app
// we also set up the template that will be injected into the DOM
// we can also set the template directly in the HTML file
// inside the template we can output dynamic data
const app = Vue.createApp({
  // data function
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
  // functions
  methods: {
    changeTitle(title) {
      // this references the component itself
      this.title = title;
    },
  },
  //template: "<h2>I am the template</h2>",
});

// mount the app in the DOM element where id="app"
// (the part of the HTML page that will be managed by Vue)
app.mount("#app");
