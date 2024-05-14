import { UPNavbar, UPNavbarListPage, UPNavbarLists, UPNavbarListLogin } from '../styledComponents';
import { useLocation } from 'react-router-dom';




function Navbar() {
  const location = useLocation();

  return (
    <UPNavbar>
      <UPNavbarListPage to="/" active={undefined}>UMC Movie</UPNavbarListPage>
      <UPNavbarLists>
        <UPNavbarListPage to="/signup" active={location.pathname === "/signup" ? "true" : undefined}>회원가입</UPNavbarListPage>
        <UPNavbarListPage to="/now" active={location.pathname === "/now" ? "true" : undefined}>Now Playing</UPNavbarListPage>
        <UPNavbarListPage to="/pop" active={location.pathname === "/pop" ? "true" : undefined}>Popular</UPNavbarListPage>
        <UPNavbarListPage to="/top" active={location.pathname === "/top" ? "true" : undefined}>Top Rated</UPNavbarListPage>
        <UPNavbarListPage to="/up" active={location.pathname === "/up" ? "true" : undefined}>Upcoming</UPNavbarListPage>
      </UPNavbarLists>
    </UPNavbar>
  );
}

export default Navbar;