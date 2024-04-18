import { UPNavbar, UPNavbarList, UPNavbarLists } from './styledComponents';
import { useLocation } from 'react-router-dom';

function Navbar() {
  // 현재 경로 가져오기
  const location = useLocation();

  return (
    <UPNavbar>
      <UPNavbarList to="/" active={false}>UMC Movie</UPNavbarList>
      <UPNavbarLists>
        <UPNavbarList>회원가입</UPNavbarList>

        {/* warning */}
        <UPNavbarList to="/now" active={(location.pathname === "/now").toString()}>Now Playing</UPNavbarList>
        <UPNavbarList to="/pop" active={(location.pathname === "/pop").toString()}>Popular</UPNavbarList>
        <UPNavbarList to="/top" active={(location.pathname === "/top").toString()}>Top Rated</UPNavbarList>
        <UPNavbarList to="/up" active={(location.pathname === "/up").toString()}>Upcoming</UPNavbarList>
      </UPNavbarLists>
    </UPNavbar>
  );
}

export default Navbar;