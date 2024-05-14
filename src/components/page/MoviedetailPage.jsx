import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MDPBackground, MDPBackgroundImg, MDPContentWrapper, MDPContent, MDPContentText, MDPContentTextTitle, MDPContentTextOverview, MDPContentTextStars, MDPContentTextVote, ProfileImg, CustomSyncLoaderPage, MDPCrewWrapper, Profile, MDPCreditBackground } from '../styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SyncLoader } from 'react-spinners';


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFlMWVhOTgxMTEyYmU0ZjFkNDRjZjRjNjQ0YjQ5MCIsInN1YiI6IjY2MWQxNmRmMWU2NDg5MDE2MmQ0NmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PCFh8WM0vqJVx9y6l_tMwcORv61ElmODiBYPxlQN2d4'
  }
};

function MoviedetailPage() {
  const { id } = useParams(); // 현재 URL 매개변수 추출
  const [movie, setMovie] = useState(null);
  const [credit, setCredit] = useState([]);
  const [overview, setOverview] = useState(null);
  const profiles = [];
  const DETAILS_API = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  const CREDITS_API = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`

  // id로 영화 중 검색
  useEffect(() => {

    fetch(DETAILS_API, options)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });

    //관계자 검색
    fetch(CREDITS_API, options)
      .then((res) => res.json())
      .then((data) => {
        setCredit([...data.cast, ...data.crew]);
      });

  }, []);

  useEffect(() => {
    if (movie) {
      // 줄거리가 없는 경우 처리
      setOverview(movie.overview ? movie.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.")


    }
  }, [movie]);

  if (!movie) {
    return <CustomSyncLoaderPage><SyncLoader /></CustomSyncLoaderPage>;
  }

  // 평점에 해당하는 별 아이콘 생성
  const stars = [];
  const rating = Math.floor(movie.vote_average); // 평점의 소수점을 내림하여 정수로 변환
  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon key={i} />);
  }

  //프로필 사진 객체 생성
  let k = 0;
  //사진이 없으면 다른 이미지로 처리
  credit.forEach((e) => profiles.push(<Profile key={++k}>{e.profile_path ? <ProfileImg key={k} src={`https://image.tmdb.org/t/p/w500${e.profile_path}`} /> : <ProfileImg key={k} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s`} />}
    {e.name}
  </Profile>));

  return (
    <div>
      <MDPBackground>
        <MDPBackgroundImg src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
        <MDPContentWrapper>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            style={{
              height: "600px", width: '400px', objectFit: "cover",
              borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px",
              zIndex: '101'
            }} />
          <MDPContent>
            <MDPContentTextTitle>{movie.title}</MDPContentTextTitle>
            <MDPContentTextVote>
              평점
              <MDPContentTextStars style={{ display: 'grid', gridTemplateColumns: `repeat(${rating}, 1fr)` }}>
                {stars}
              </MDPContentTextStars>
            </MDPContentTextVote>
            <MDPContentText>개봉일 {movie.release_date}</MDPContentText>

            <MDPContentText>줄거리</MDPContentText>
            <MDPContentTextOverview>{overview}</MDPContentTextOverview>
          </MDPContent>
        </MDPContentWrapper>
      </MDPBackground>

      <MDPCreditBackground>
        <MDPContentText>출연진 및 제작진</MDPContentText>
        <MDPCrewWrapper>
          {profiles}
        </MDPCrewWrapper>
      </MDPCreditBackground>
    </div>
  );
}

// 별 아이콘 컴포넌트
function StarIcon() {
  return <FontAwesomeIcon icon={faStar} />;
}

export default MoviedetailPage;
