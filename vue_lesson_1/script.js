// create a Vue instance
let app = new Vue({
    // bind this Vue variable the #root div in the DOM
    el: "#root",
    // provide data for bindings
    //Data binding in Vue allows you to assign a property to an element in the DOM.
    //This is a two-way binding. Whenever the value of the property changes, the DOM is updated.
    //Whenever the user changes the DOM (e.g., by entering data in an input element), the property changes.
    data: { //Vue stores data in an object called data.
      message: 'Hello World',
    }
  });