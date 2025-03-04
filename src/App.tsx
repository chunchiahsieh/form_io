import { MyForm } from "./components/MyForm";
import './App.css';

function App() {
  return (
    <div>
      <h1>Form.io React 表單</h1>
      <MyForm /> {/* 加入 MyForm 組件 */}
    </div>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
