# Reactjs Concepts

## Diffing

The performance gain of React is mainly because of the virtual DOM. Before updating the real DOM and repainting what’s on the screen, React updates the virtual DOM. The traditional DOM manipulation is very slow because for a small change on the DOM the whole page or sometimes neighboring DOM elements get re-rendered. 

React is clever enough to know which DOM element has changed because of the concept of Diffing. Here is what happens in react to update an element in the screen

- React has a virtual DOM which is very fast to change and keep track of.
- When an element’s property changes, for instance, the color of a button changes to red, react changes the object of that button in the virtual DOM.
- Then it compares the new virtual DOM with the one just before the re-render.
- This enables React to know exactly which virtual DOM element needs a re-render. This operation of comparing the virtual DOM with its previous state of it is called **Diffing**.
- After figuring out which virtual DOM element needs a re-render React only repaints the real DOM equivalent of the changed button.

## useRef

useRef is a very powerful react hook but it’s usually misunderstood and misused. It is very similar to useState but it doesn’t trigger a re-render of the component. So we can use it to store data that we want to be available through re-renders. 

When creating a useRef variable we import the hook first from react and here is how we initialize a variable in it. The useRef hook returns an object with a property named current. 

```jsx
const vRef = useRef();
vRef.current = 0;
```