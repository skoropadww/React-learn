// import logo from './logo.svg';
import { Header } from "./components/Header/Header.js";
import { Sidebar } from "./components/Sidebar/Sidebar.js";
import { MainContainer } from "./components/Main/Main.js"; 
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
