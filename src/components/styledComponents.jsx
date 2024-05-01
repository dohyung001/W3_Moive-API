import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Main = styled.div`
background-color: rgb(34, 38, 76);
width: 100vw;
height: 100vh;
overflow-y: scroll;
`;
export const MainTest = styled(Main)`
overflow-y: hidden;

`

export const GlobalStyles = styled.div`
  * {
    padding: 0;
    margin: 0;
    font-weight: 400;
    color: white;
    font-size: 14px;
  }
`;

export const MovieContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 200px;
  border-radius: 6px;
  margin: 10px;
  position: relative;
`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  height: 60px;
  padding: 10px;
`;

export const MovieInfoVote = styled.div`
  margin-top: 8px;
  margin-left: 5px;
  display:flex;
`;

export const MovieListContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieCoverSt = styled.div`
  padding: 20px 25px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 150px;
  height: 343px;
  border-radius: 6px;
`;

export const MovieCoverTitle = styled.div`
  margin-bottom: 20px;
`;

export const MovieCoverText = styled.div`
  height: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UPNavbar = styled.nav`
  height: 60px;
  background-color: rgb(23,25,50);
  display:flex;
  justify-content: space-between;
  align-items: center;

`;

export const UPNavbarLists = styled.div`

  display:flex;
`;

export const UPNavbarList = styled(Link)`
  font-size: large;
  font-weight: 400;
  padding-left: 20px;
  padding-right: 20px;
  &:hover {
    font-weight: bold;
  }
  text-decoration: none;
`;

export const UPNavbarListLogin = styled(UPNavbarList)`
color:yellow;
font-weight: 600;
font-family: "Roboto", sans-serif;
`
export const UPNavbarListPage = styled(UPNavbarList)`
  color: ${props => props.active === "true" ? "yellow" : "white"};
  font-weight: ${props => props.active === "true" ? "bold" : "400"};
`;

export const DOWNFooter = styled.footer`
  padding-left: 20px;
  height: 60px;
  background-color: rgb(23,25,50);
  display:flex;
  align-items: center;
`;

export const DOWNFooterText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const WelcomeText = styled.div`
  width:100vw;
  height:250px;
  background-color:rgb(5,18,32);
  display:flex;
  justify-content:center;
  align-items: center;
  font-size:30px;
  font-weight: 700;
`;
export const Find = styled.div`
  padding-top:50px;
  background-color:rgba(0,0,0,0);
  display:flex;
  justify-content:start;
  align-items: center;
  font-weight: 700;
  flex-direction: column;
`;
export const FindText = styled.div`
  padding-bottom:50px;
  background-color:rgba(0,0,0,0);
  display:flex;
  justify-content:center;
  font-weight: 700;
  font-size: 40px;
`;
export const FindInputWrapper = styled.div`
display: flex;
justify-content:center;
align-items:center;
`;
export const FindInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 25px;
  padding-left:20px;
  margin-right:20px;
`;
export const FindInputButton = styled.div`
  width:30px;
  height:30px;
  border-radius:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:rgb(223,188,62);

`;
export const CustomSyncLoaderPage = styled.div`
  width:100vw;
  height:100vh;
  background-color:rgb(34, 38, 76);
  display:flex;
  justify-content:center;
  align-items:center;

`;

export const MDPBackground = styled.div`
width:100vw;
height:100vh;
background-color:rgb(34, 38, 76);
display:flex;
justify-content:center;
align-items:center;
position:relative;
`

export const MDPBackgroundImg = styled.img`
width:100vw;
height:100vh;
position: absolute;
opacity: 0.1;
z-index: 100;
`
export const MDPContentWrapper = styled.div`
width:80%;
height:600px%;

display:flex;
align-items: center;
justify-content: center;
`

export const MDPContent = styled.div`
width:600px;
height:600px;

display:flex;
flex-direction: column;

padding-top: 100px;
margin-left:100px;
`
export const MDPContentText = styled.p`
font-size:25px;
margin-top:35px;
font-weight: 700;
`
export const MDPContentTextTitle = styled(MDPContentText)`
font-size:35px;
font-weight: 500;
margin-bottom:10px;
`

export const MDPContentTextOverview = styled(MDPContentText)`
font-size:20px;
line-height: 1.5;
font-weight: 400;
`

export const Notfoundbackground = styled(MDPBackground)`
padding-top:400px;
 flex-direction:column;
 justify-content: start;
`

export const MDPContentTextVote = styled(MDPContentText)`
display:Flex;
font-size:20px;
line-height: 1.5;
font-weight: 400;
`

export const MDPContentTextStars = styled.div`
margin-left:10px;
display:flex;
justifiy-content:center;
align-items:center;
color:yellow;
`