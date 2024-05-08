
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../src/components/compo/Navbar';
import Footer from '../src/components/compo/Footer';

import MainPage from './components/page/Mainpage';
import SignupPage from './components/page/SignupPage1';
import LoginPage from './components/page/LoginPage';


import NowPlayingPage from '../src/components/page/NowPlayingPage';
import PopularPage from '../src/components/page/PopularPage';
import TopRatedPage from '../src/components/page/TopRatedPage';
import UpComingpage from './components/page/UpComingPage';
import NotFoundPage from './components/page/NotFoundPage';

import MoviedetailPage from './components/page/MoviedetailPage';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>

          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/now" element={<NowPlayingPage />} />
          <Route path="/pop" element={<PopularPage />} />
          <Route path="/top" element={<TopRatedPage />} />
          <Route path="/up" element={<UpComingpage />} />

          <Route path="/movie/:moviename" element={<MoviedetailPage />} />{/*동적 라우팅*/}
          <Route path="*" element={<NotFoundPage />} />{/*잘못된 경로*/}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;