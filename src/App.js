import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import FavList from './components/FavList';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getMovie" element={<FavList />} />
      </Routes>
    </div>
  );
}

export default App;
