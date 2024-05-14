import { SignupPageBackground, SignupPageMainWrapper, SignupPageTitle, SignupPageInput, SignupPageSubmit } from '../styledComponents';



function LoginPage() {
  return (
    <SignupPageBackground>
      <SignupPageMainWrapper>
        <SignupPageTitle>회원가입 페이지</SignupPageTitle>
        <div>
          <SignupPageInput type="text" name="id" placeholder="아이디" />
        </div>
        <div>
          <SignupPageInput type="text" name="pw" placeholder="비밀번호" />
        </div>

        <SignupPageSubmit type="submit">
          제출하기
        </SignupPageSubmit>

      </SignupPageMainWrapper>
    </SignupPageBackground>


  )
}
export default LoginPage