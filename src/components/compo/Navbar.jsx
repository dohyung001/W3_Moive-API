import { UPNavbar, UPNavbarListPage, UPNavbarLists, UPNavbarListPageSide, Logout, Sidebar, SideFaBar } from '../styledComponents';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';



function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(undefined);
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem(localStorage.key(0));

    setIsLogin(false);
    setIsOpen(undefined);
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);  // 사이드바 토글
  };

  useEffect(() => {
    if (localStorage.key(0)) setIsLogin(true);
  }, [localStorage.key(0)])

  return (
    <div>
      <UPNavbar>
        <UPNavbarListPage to="/" active={undefined}>UMC Movie</UPNavbarListPage>
        <SideFaBar onClick={toggleSidebar} />
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
      <Sidebar isOpen={isOpen}>


        {!(isLogin) ? <UPNavbarListPage to="/signup" active={location.pathname === "/signup" ? "true" : undefined} onClick={() => { setIsOpen(undefined) }}>회원가입</UPNavbarListPage> : ''}

        {(isLogin) ? <Logout onClick={handleLogout} >로그아웃</Logout> : ''}
        <UPNavbarListPageSide to="/now" active={location.pathname === "/now" ? "true" : undefined} onClick={() => { setIsOpen(undefined) }}>Now Playing</UPNavbarListPageSide>
        <UPNavbarListPageSide to="/pop" active={location.pathname === "/pop" ? "true" : undefined} onClick={() => { setIsOpen(undefined) }}>Popular</UPNavbarListPageSide>
        <UPNavbarListPageSide to="/top" active={location.pathname === "/top" ? "true" : undefined} onClick={() => { setIsOpen(undefined) }}>Top Rated</UPNavbarListPageSide>
        <UPNavbarListPageSide to="/up" active={location.pathname === "/up" ? "true" : undefined} onClick={() => { setIsOpen(undefined) }}>Upcoming</UPNavbarListPageSide>
      </Sidebar>
    </div>
  );
}

export default Navbar;