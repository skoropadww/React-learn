// import logo from './logo.svg';
import { Header } from "./components/Header/Header.js";
import { Sidebar } from "./components/Sidebar/Sidebar.js";
import { Main } from "./components/Main/Main.js"; 
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
