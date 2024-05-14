import React from 'react';
import './Interview.css'; // CSS 파일을 가져옴
import { Link } from 'react-router-dom';

const Card = ({ hashtags }) => {
  return (
    <div className="card">
      {hashtags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

const Interview = () => {
  const data = [
    {
      hashtags: [
        <p>Personal Background</p>,
        <Link to="/Interview_Real" style={{ textDecoration: 'none' }}>
          #성격 및 개인적인 경험
        </Link>,
        '#가족과 친구',
        '#집과 동네',
      ],
    },
    {
      hashtags: [
        <p>School</p>,
        '#학교 , 캠퍼스',
        '#전공, 부전공',
        '#과목, 교수, 동문',
        '#동아리와 과외 활동',
      ],
    },
    {
      hashtags: [
        <p>Free Time</p>,
        '#여가 활동, 취미 및 관심사',
        '#스포츠 페이지 공부한 날',
        '#선호하는 것들',
        '#여행',
      ],
    },
    {
      hashtags: [
        <p>Opinions</p>,
        '#현황에 관한 의견',
        '#제시하는 방향',
        '#장단점, 비교',
      ],
    },
    {
      hashtags: [
        <p>Suitability</p>,
        '#조직과의 적합성',
        '#지원 동기',
        '#업무 경험',
      ],
    },
    {
      hashtags: [
        <p>Qualifications</p>,
        '#성취',
        '#교훈',
        '#문제 해결 능력',
        '#장단점',
        '#리더십',
        '#관점',
        '#계획과 포부',
      ],
    },
    {
      hashtags: [
        <p>Explaining & Asking Questions</p>,
        '#개념,사물 묘사하기',
        '#What 설명하기',
        '#Why 설명하기',
        '#가상의 질문',
        '#질문 확인하기',
      ],
    },
    { hashtags: [<p>Extra</p>, '#면접관에게 질문하기'] },
  ];

  return (
    <div className="container">
      {data.map((card, index) => (
        <Card key={index} hashtags={card.hashtags} />
      ))}
    </div>
  );
};

export default Interview;
