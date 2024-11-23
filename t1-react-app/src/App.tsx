// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App


// import Message from "./Message";
// function App(){
//   return <div><Message /></div>
// }


// import ListGroup from "./components/ListGroup";
// const handleSelectName = (name:string)=>{
//   console.log(name);
// }
// function App(){
//   let names = ["mohammad",'mohmmad', "ahmad","injass"];
//   return <div><ListGroup names = {names} heading="just name" onSelectName={handleSelectName}/></div>
// }
// export default App;



// import Alert from "./components/Alert";

// function App(){
//   return <div><Alert>
//     hello <span>injass</span>
//     </Alert></div>
// }
// export default App;


import Alert from "./components/Alert";
import Button from "./components/Button"; 
import { useState } from "react";

function App() {
  const [alertVisible, setalertVisible] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onclose={()=> setalertVisible(false)}>injass alert</Alert>}
      <Button onClick={() => setalertVisible(true)}>Injass Button</Button>
    </div>);

}
export default App;