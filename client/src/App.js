import './App.css';
import Home from './views/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" index element ={<Home/>}/>
            <Route path="/product/:id" element ={<Detail/>}/>
          </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
