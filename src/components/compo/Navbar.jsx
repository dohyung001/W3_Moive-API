import { UPNavbar, UPNavbarListPage, UPNavbarLists, UPNavbarListLogin, Logout } from '../styledComponents';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';



function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem(localStorage.key(0));
    console.log(localStorage.key(0))
    setIsLogin(false);
  }
  useEffect(() => {
    if (localStorage.key(0)) setIsLogin(true);
  }, [localStorage.key(0)])

  return (
    <UPNavbar>
      <UPNavbarListPage to="/" active={undefined}>UMC Movie</UPNavbarListPage>
      <UPNavbarLists>
        {!(isLogin) ? <UPNavbarListPage to="/login" active={location.pathname === "/login" ? "true" : undefined}>로그인</UPNavbarListPage> : ''}

        {!(isLogin) ? <UPNavbarListPage to="/signup" active={location.pathname === "/signup" ? "true" : undefined}>회원가입</UPNavbarListPage> : ''}

        {(isLogin) ? <Logout onClick={handleLogout}>로그아웃</Logout> : ''}
        <UPNavbarListPage to="/now" active={location.pathname === "/now" ? "true" : undefined}>Now Playing</UPNavbarListPage>
        <UPNavbarListPage to="/pop" active={location.pathname === "/pop" ? "true" : undefined}>Popular</UPNavbarListPage>
        <UPNavbarListPage to="/top" active={location.pathname === "/top" ? "true" : undefined}>Top Rated</UPNavbarListPage>
        <UPNavbarListPage to="/up" active={location.pathname === "/up" ? "true" : undefined}>Upcoming</UPNavbarListPage>
      </UPNavbarLists>
    </UPNavbar>
  );
}

export default Navbar;