import { UPNavbar, UPNavbarListPage, UPNavbarLists, UPNavbarListLogin } from './styledComponents';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  // 현재 경로 가져오기
  const location = useLocation();
  const [isLogin, setLogin] = useState(true);
  function handleLogin() {
    setLogin(!isLogin);
  }

  return (
    <UPNavbar>
      <UPNavbarListPage to="/" active={false}>UMC Movie</UPNavbarListPage>
      <UPNavbarLists>
        <UPNavbarListLogin onClick={handleLogin}>{isLogin ? '로그인' :
          '로그아웃'}</UPNavbarListLogin>

        {/* 현재 결로가 일치하면 true active props로 전달*/}
        <UPNavbarListPage to="/now" active={(location.pathname === "/now").toString()}>Now Playing
        </UPNavbarListPage>
        <UPNavbarListPage to="/pop" active={(location.pathname === "/pop").toString()}>Popular
        </UPNavbarListPage>
        <UPNavbarListPage to="/top" active={(location.pathname === "/top").toString()}>Top Rated
        </UPNavbarListPage>
        <UPNavbarListPage to="/up" active={(location.pathname === "/up").toString()}>Upcoming
        </UPNavbarListPage>
      </UPNavbarLists>
    </UPNavbar>
  );
}

export default Navbar;