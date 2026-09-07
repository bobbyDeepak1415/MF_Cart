// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

function createCounter() {
  let obj = {
    value: 0
  };
  return {
    increment() {
      obj.value++;
    },
    getValue() {
      return obj.value;
    }
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());