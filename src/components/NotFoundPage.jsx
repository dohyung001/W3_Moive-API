import {
  Notfoundbackground, MDPContentTextTitle, MDPContentTextOverview, MDPContentText
} from './styledComponents';
import { useNavigate } from 'react-router-dom';


function NotFoundPage() {
  const navigate = useNavigate();

  const clickToMain = () => {
    navigate('/');
  }
  return (
    <Notfoundbackground>
      <MDPContentTextTitle>Oops!</MDPContentTextTitle>
      <MDPContentTextOverview>예상치 못한 에러가 발생했습니다. ^^;</MDPContentTextOverview>
      <MDPContentTextOverview>Not Found</MDPContentTextOverview>
      <MDPContentText onClick={clickToMain}>메인으로 이동하기</MDPContentText>
    </Notfoundbackground>
  )
}
export default NotFoundPage;