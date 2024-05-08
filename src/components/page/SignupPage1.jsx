import { SignupPageBackground, SignupPageMainWrapper, SignupPageTitle, SignupPageInput, SignupPageSubmit, SignupPageSubLinks, SignupPageLink, SignupPageError } from '../styledComponents';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SignupPage() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const inputArr = ["username", "email", "age", "password", "passwordConfirm"];




  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    // 각 입력 값에 대한 유효성 검사
    switch (name) {
      case "username":
        if (value.trim() === '') {
          errorMessage = '이름을 입력해주세요!';
        }
        break;
      case "email":
        if (typeof value !== 'string') errorMessage = '이메일을 입력해주세요!';
        else if (!value.includes('@')) errorMessage = '이메일 형식에 맞게 다시 입력해주세요!';
        break;
      case "age":
        if (value.trim() === '') {
          errorMessage = '나이를 입력해주세요!';
          break;
        }
        const age = Number(value);
        if (isNaN(age)) {
          errorMessage = '나이를 숫자로 입력해주세요!';
        } else if (age < 0) {
          errorMessage = '나이는 양수여야 합니다.';
        } else if (!Number.isInteger(age)) {
          errorMessage = '나이를 정수로 입력해주세요.';
        } else if (age < 19) {
          errorMessage = '19세 이상만 사용 가능합니다!';
        }
        break;
      case "password":
        if (value.trim() === '') {
          errorMessage = '비밀번호를 입력해주세요!';
        } else if (value.length < 4) {
          errorMessage = '최소 4자리 이상 입력해주세요.';
        } else if (value.length > 12) {
          errorMessage = '최대 12자리까지 가능합니다.';
        } else if (!/[a-zA-Z]/.test(value) || !/\d/.test(value) || !/[!@#$%^&*]/.test(value)) {
          errorMessage = '비밀번호는 영어, 숫자, 특수문자를 포함해 주세요.';
        }
        break;
      case "passwordConfirm":
        if (value.trim() === '' || value !== formData.password) {
          errorMessage = '비밀번호를 다시 입력해주세요!';
        }
        break;
      default:
        break;
    }

    // 현재 입력 값을 상태에 반영
    setFormData({
      ...formData,
      [name]: value
    });

    // 유효성 검사 결과를 상태에 반영
    setErrors({
      ...errors,
      [name]: errorMessage
    });

  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // 에러가 있는 입력 필드를 저장할 변수
    const newErrors = {};

    inputArr.forEach((key) => {
      if (!formData[key]) {
        switch (key) {
          case "username": newErrors[key] = '이름을 입력해주세요!'; break;
          case "email": newErrors[key] = '이메일을 입력해주세요!'; break;
          case "age": newErrors[key] = '나이를 입력해주세요!'; break;
          case "password": newErrors[key] = '비밀번호를 입력해주세요!'; break;
          case "passwordConfirm": newErrors[key] = '비밀번호를 다시 입력해주세요!'; break;
          default: break;
        }
      }
    });

    // 에러가 하나라도 있는 경우
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // 에러가 없는 경우

    console.log('폼 데이터 제출:', formData);
    alert('폼 데이터 제출:', formData);
    navigate('/login');
  };


  return (
    <SignupPageBackground>
      <SignupPageMainWrapper>
        <SignupPageTitle>회원가입 페이지</SignupPageTitle>

        <div>
          <SignupPageInput type="text" name="username" placeholder="이름을 입력해주세요" onChange={handleChange} />
          {errors.username && <SignupPageError>{errors.username}</SignupPageError>}
        </div>
        <div>
          <SignupPageInput type="text" name="email" placeholder="이메일을 입력해주세요" onChange={handleChange} />
          {errors.email && <SignupPageError>{errors.email}</SignupPageError>}
        </div>
        <div>
          <SignupPageInput type="text" name="age" placeholder="나이를 입력해주세요" onChange={handleChange} />
          {errors.age && <SignupPageError>{errors.age}</SignupPageError>}
        </div>
        <div>
          <SignupPageInput type="password" name="password" placeholder="비밀번호를 입력해주세요" onChange={handleChange} />
          {errors.password && <SignupPageError>{errors.password}</SignupPageError>}
        </div>
        <div>
          <SignupPageInput type="password" name="passwordConfirm" placeholder="비밀번호 확인" onChange={handleChange} />
          {errors.passwordConfirm &&
            <SignupPageError>{errors.passwordConfirm}</SignupPageError>}
        </div>
        <SignupPageSubmit
          type="submit"
          onClick={handleSubmit}
          disabled={Object.values(errors).some(error => !!error)}
          style={{ backgroundColor: Object.values(errors).some(error => !!error) || Object.keys(formData).length < 5 ? 'white' : 'yellow' }}
        >
          제출하기
        </SignupPageSubmit>

        <SignupPageSubLinks>
          <SignupPageLink>이미 아이디가 있으신가요?</SignupPageLink>
          <SignupPageLink>로그인 페이지로 이동하기</SignupPageLink>
        </SignupPageSubLinks>

      </SignupPageMainWrapper>
    </SignupPageBackground >
  );
}

export default SignupPage;
