/**
 * React Component. Good practice to use uppercase on the react component
 * You can only return one element, error will be thrown if multiple root
 * html elements are returned
 */

var React = require('react');
var ReactDOM = require('react-dom');

var obj1 = {
    name: "Christian",
    location: "New York"
};

var obj2 = {
    age: 25,
    ...obj1
};

console.log(obj2);

ReactDOM.render(<h1>Boilerplate app!</h1>, document.getElementById('app'));
