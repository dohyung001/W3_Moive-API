import { WelcomeText, MainTest, Find, FindText, FindInput, FindInputButton, FindInputWrapper } from './styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function MainPage() {
  return (
    <MainTest>
      <WelcomeText>환영합니다</WelcomeText>
      <Find>
        <FindText>Find your movies !</FindText>
        <FindInputWrapper>
          <FindInput></FindInput>
          <FindInputButton><FontAwesomeIcon icon={faSearch} /></FindInputButton>
        </FindInputWrapper>
      </Find>
    </MainTest>
  )
}