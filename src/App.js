import "./App.css";
import logo from "./assets/logo.svg";
import logotext from "./assets/logo-text.svg";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logotext} className="logo-text" alt="logo" />
        <ChatBox />
      </header>
    </div>
  );
}

export default App;
