//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/navigation';
import Homepage from './pages/homepage/homepage';
import Projects from './pages/projects';
import Topics from './pages/topics';
import About from './pages/about';

function App() {
  return (
    <Router>
			<Navigation/>
      <Routes>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/topics' element={<Topics/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
