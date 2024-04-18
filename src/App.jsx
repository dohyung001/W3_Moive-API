
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

import MainPage from './components/Mainpage';
import NowPlayingPage from '../src/components/NowPlayingPage';
import PopularPage from '../src/components/PopularPage';
import TopRatedPage from '../src/components/TopRatedPage';
import UpComing from '../src/components/UpComing';


function App() {




  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/now" element={<NowPlayingPage />} />
          <Route path="/pop" element={<PopularPage />} />
          <Route path="/top" element={<TopRatedPage />} />
          <Route path="/up" element={<UpComing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;