import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Contest from './Pages/Contest';
import Resource from './Pages/Resource';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contest' element={<Contest />} />
        <Route exact path='/resource' element={<Resource />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
