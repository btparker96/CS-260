// // create a Vue instance
// let app = new Vue({
//     // bind this Vue variable the #root div in the DOM
//     el: "#root",
//     // provide data for bindings
//     //Data binding in Vue allows you to assign a property to an element in the DOM.
//     //This is a two-way binding. Whenever the value of the property changes, the DOM is updated.
//     //Whenever the user changes the DOM (e.g., by entering data in an input element), the property changes.
//     data: { //Vue stores data in an object called data.
//       message: 'Hello World',
//     }
//   });

// let app = new Vue({
//   // bind it to the #root div in the DOM
//   el: "#root",
//   // provide data for bindings
//   data: {
//     names: ['Emma', 'Brandon', 'Lucy', 'Jorge'],
//     newName: ''
//   },
//     // custom methods
//     methods: {
//       // addName will add the value of the newName property to the list of names
//       addName() {
//         if (this.newName === '')
//           return;
//         this.names.push(this.newName);
//         this.newName = "";
//       }
//     }
// });

let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    title: 'Brought to you by JavaScript',
    className: 'red',
    isLoading: true
  },
  methods: {
    // addName will add the value of the newName property to the list of names
    toggleLoading() {
      this.isLoading = !this.isLoading;
    }
  }
});