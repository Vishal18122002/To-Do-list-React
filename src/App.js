import "./index.css"
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
  return(
  <div>
    
    <Header/>
    <Content/>
    <Footer/>
    
  </div>


  )
}




// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';

// function App() {
//   function handleNameChange(){
//     const names=['Earn','Grow','Give'];
//     const int=Math.floor(Math.random()*3);
//     return names[int]
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Let's {handleNameChange()} Money
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
