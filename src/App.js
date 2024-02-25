  import { Routes, Route } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './App.css';
  import Home from './components/Home';

  function App() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="" element={< />} /> */}
        </Routes>
      </div>
    );
  }

  export default App;
