// Most costly operation in webpage is when dom need to be manipulated on any events
// Every new framework or library is trying to optimize this
// React philosophy :  Manipulate everything on the dom with js
// React provides helper functions to do it

// const heading = React.createElement("h1", {
//     id:'heading',
//     xyz:"abcd",
// }, "Hello world from react ");
// console.log("heading",heading)
// // heading is a react element which is just an object and all the attributes we pass goes inside
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// how to create a nested element like below also defining parent and child
/**
 *
 * <div id="parent">
 *         <div id="child">
 *              <h1></h1>
 *         </div>
 * </div>
 *
 */

// const heading = React.createElement("h1", {
//     id:'heading',
// }, "Creating a nested Element ");

// const parent = React.createElement('div',{id:'parent'}, React.createElement('div',{id:'child'},heading)
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// ReactElement(Object) => HTML (Browser Understand)

// how to create a nested element like below also defining parent and array of child
/**
 *
 * <div id="parent">
 *         <div id="child">
 *              <h1> I am child one </h1>
 *  *           <h1> I am child two </h1>
 *         </div>
 * </div>
 *
 */

// const heading = React.createElement("h1", {
//     id:'heading',
// }, "Creating a nested Element ");

// const parent = React.createElement('div',{id:'parent'}, React.createElement('div',{id:'child'},[ React.createElement('h1',{id:'child'} ,"I am child one"), React.createElement('h1',{id:'child'},'I am child Two')])
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// how to create a nested element like below also defining parent and array of child
/**
 *
 * <div id="parent">
 *         <div id="child">
 *             <h1> I am child one </h1>
 *             <h1> I am child two </h1>
 *         </div>
 *   <div id="child">
 *              <h1> I am child one </h1>
 *              <h1> I am child two </h1>
 *         </div>
 * </div>
 *
 */

// approach 1

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Creating a nested Element "
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child" }, "I am child one"),
    React.createElement("h1", { id: "child" }, "I am child Two"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child" }, "I am child three"),
    React.createElement("h1", { id: "child" }, "I am child four"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// This does not look good ,suppose if we have more nested element than it will look very bad
// to make look good we use JSX to solve

// what is cross origin attribute
// be default browser does not allows cross origin request by adding
// cross origin attribute in the  request  allows to  us to access resource
// from different (port , domain , protocols)

// what is cdn , how it works
// CDN is a chain of distributed  network server for accessing web content
// it finds nearest server for you to access the resource faster ,efficient way

// what does react render does
// render methods puts react element (object) in the actual dom

// react can only work in header or footer or any small chunk part of code
// it is small js library not a full pledge framework
// We can make a large and scalable app with react
