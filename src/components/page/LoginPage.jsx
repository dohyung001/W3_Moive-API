import { SignupPageBackground, SignupPageMainWrapper, SignupPageTitle, SignupPageInput, SignupPageSubmit, SignupPageError } from '../styledComponents';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





function LoginPage() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const inputArr = ["id", "password"];
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    // 각 입력 값에 대한 유효성 검사
    switch (name) {
      case "id":
        if (value.trim() === '') errorMessage = '아이디를 입력해주세요!';
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
    //에러 확인
    const newErrors = {};// 에러가 있는 입력 필드를 저장할 변수
    inputArr.forEach((key) => {
      if (!formData[key]) {
        switch (key) {
          case "id": newErrors[key] = '아이디를 입력해주세요!'; break;
          case "password": newErrors[key] = '비밀번호를 입력해주세요!'; break;

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
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.id,
        password: formData.password
      })
    })
      .then(async (response) => {
        if (response.status === 200) {
          return response.json(); // 성공적으로 로그인
        } else {
          return response.json().then(data => {
            throw new Error(data.message || "로그인에 실패했습니다.");
          });
        }
      })
      .then(data => {
        localStorage.setItem(data.username, data.token);
        alert('로그인 성공!');
        navigate('/'); // 로그인 성공 후 리다이렉트
      })
      .catch(error => {
        console.error('로그인 에러:', error);
        alert(error.message);
      });



  };
  return (
    <SignupPageBackground>
      <SignupPageMainWrapper>
        <SignupPageTitle>회원가입 페이지</SignupPageTitle>
        <div>
          <SignupPageInput type="text" name="id" placeholder="아이디" onChange={handleChange} />
          {errors.id && <SignupPageError>{errors.id}</SignupPageError>}
        </div>
        <div>
          <SignupPageInput type="password" name="password" placeholder="비밀번호" onChange={handleChange} />
          {errors.password && <SignupPageError>{errors.password}</SignupPageError>}
        </div>

        <SignupPageSubmit
          type="submit"
          onClick={handleSubmit}
          disabled={Object.values(errors).some(error => !!error)}
          style={{ backgroundColor: Object.values(errors).some(error => !!error) || Object.keys(formData).length < 2 ? 'white' : 'yellow' }}
        >
          제출하기
        </SignupPageSubmit>

      </SignupPageMainWrapper>
    </SignupPageBackground>


  )
}
export default LoginPage