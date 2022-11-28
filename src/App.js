//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/navigation';
import Homepage from './pages/homepage/homepage';
import ProjectDetail from './pages/projectDetail';
import Topics from './pages/topics';
import About from './pages/about';

function App() {
  return (
    <Router>
			<Navigation/>
      <Routes>
        <Route path='/projects/:id' element={<ProjectDetail/>}></Route>
        <Route path='/topics' element={<Topics/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Homepage/>}></Route>
				<Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
