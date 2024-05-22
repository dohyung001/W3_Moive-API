import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Main = styled.div`
background-color: rgb(34, 38, 76);
width: 100vw;
height: calc(100vh - 120px);
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
position: sticky;
top:0px;
  height: 60px;
  background-color: rgb(23,25,50);
  display:flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
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
export const Logout = styled(Link)`
  font-size: large;
  font-weight: 400;
  padding-left: 20px;
  padding-right: 20px;
  color:yellow;
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

export const DOWNFooter = styled.footer
  `position: sticky;
  bottom:0px;
  padding-left: 20px;
  height: 60px;
  background-color: rgb(23,25,50);
  display:flex;
  align-items: center;
  z-index: 998;
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
  color:black;
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
flex-direction: column;
justify-content:center;
align-items:center;
position:relative;
`

export const MDPBackgroundImg = styled.img`
width:100vw;
height:100%;
position: absolute;
overflow: hidden;
opacity: 0.1;
z-index: 100;
`
export const MDPContentWrapper = styled.div`
width:80%;
height:600px%;
transform: translateY(-80px);
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
export const MDPContentText = styled.div`
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
`
export const SignupPageBackground = styled(MDPBackground)`
justify-content: center;
align-items: center;
padding-top: 30px;
width:100vw;
`
export const SignupPageMainWrapper = styled.form`
display:flex;
flex-direction: column;
width: 800px;
height: 800px;

align-items: center;
`

export const SignupPageTitle = styled.div`
font-size:22px;
margin-bottom:30px;
`

export const SignupPageInput = styled.input`
width: 600px;
height: 40px;
border-radius:15px;
margin-top: 20px;
padding-left:20px;
color:black;

`
export const SignupPageSubmit = styled.button`
width: 630px;
height: 45px;
border-radius:15px;
margin-top: 20px;
margin-bottom: 40px;
color:black;
font-weight: 700;
font-size:22px;
`

export const SignupPageSubLinks = styled.div`
display: flex;
padding-right:30px;
justify-content: space-evenly;
width: 600px;
font-size:22px;
`
export const SignupPageLink = styled.div`
font-size:20px;
`
export const SignupPageError = styled.div`
margin-right:auto;
margin-left:10px;
margin-top:10px;
color:red;
`
export const MovieSeach = styled.div`
width: 1000px;
height: 700px;
background-color: rgb(23,25,50);
border-radius: 10px;
margin: 20px 40px 20px 40px;
overflow-y: auto;

&::-webkit-scrollbar {
  width: 7px;
}

&::-webkit-scrollbar-thumb {
  background-color: rgb(223,188,62); 
  border-radius: 5px; }

`
export const ProfileImg = styled.img`
width:100px;
height:100px;
border-radius:100px;

`

export const MDPCrewWrapper = styled(MDPBackground)`
width:80%;
height:auto;
margin-left:200px;
padding-right:200px;

flex-direction: row;
flex-wrap: wrap;
white-space:normal;
`

export const Profile = styled.div`
width:150px;
height:150px;
background-color:inherit;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`

export const MDPCreditBackground = styled(MDPBackground)`

height: auto;
`
export const ShiftPage = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color: rgb(34, 38, 76);
`

export const InfiniteyncLoaderPage = styled.div`

display:flex;
align-items:center;
justify-content:center;
width:100%;
height: 60px;
`
