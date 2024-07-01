# What is JSX 

const jsxExample = <h1>This is JSX   </h1>

- JSX is not html inside JS 
- JSX is smiliar like HTML and It is totally different

# React element is not JSX , JSX is a syntax only 
- using react create element to create react element  
```
const heading = React.createElement("h1", {}, "this is the child element");
```

- to crete nested element in developer friendly way JSX is created by facebook library
// JSX
```
const jsxHeading = <h1> this is jsx not html ,it is not html inside js </h1>;
```

- both are same when we console log it 


# Our browser JS Engine does not understant JSX it only understand ECMA script 
- because it is not a valid js 

# How JSX is functional if JS engine can't run it 
- After Developer finished wrtitng  JSX codes , this code is transpiled before going to js engine 

- parcel uses babel (js package ) to transpiled and then  pass to js engine 


# how this code works 
```
const heading = React.createElement("h1", {}, "this is the child element");``` 

```

- react create elements return an js object , when this object render it renders as html element 
-  when we put jsx elelemnt , behind the scenes it get convereted to react element using babel
- after that it is rendered as HTML element 

# Babel converts JSX to react element which can be render using react DOM 
