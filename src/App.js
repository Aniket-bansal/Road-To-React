import './components/App.css';

function App() {
  return (
    <>
    
   <div id="container">
     <h2>React</h2>
     <h2>A JavaScript library for building user interfaces</h2>
     <div id="redirect">
       <button>Get started</button>
       <a>Take the tutorial></a>
     </div>
   </div>
   <div id="details">
     <div>
       <h1>Declarative</h1>
       <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
       <br></br>
       <br></br>
      Declarative views make your code more predictable and easier to debug.</p>
     </div>
     <div>
       <h1>Component-Based</h1>
       <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.
<br></br>
<br></br>
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
     </div>
     <div>
       <h1>Learn Once, Write Anywhere</h1>
       <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
    <br></br>
    <br></br>
React can also render on the server using Node and power mobile apps using React Native.</p>
     </div>
   </div>
    
    </>
  );
}

export default App;
