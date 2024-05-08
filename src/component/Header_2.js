import React from 'react';

import './Header_2.css'; // 스타일 시트 임포트

function Header_2() {
  return (
    <header>
      <div className="logout-section">
        <div className="minibear">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
          >
            {/* SVG 내용 */}
          </svg>
          <p
            style={{
              fontSize: 22,
              fontWeight: 600,
              textAlign: 'left',
              color: '#000',
            }}
          >
            엄새연 님
          </p>
        </div>

        <button className="logout-button">로그아웃</button>
      </div>

      <div className="header-content">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
          >
            {/* SVG 내용 */}
          </svg>
        </div>
        <div className="bear">
          <p
            style={{
              fontSize: 40,
              fontWeight: 700,
              textAlign: 'left',
              color: '#00d8ff',
            }}
          >
            AIRBEAR
          </p>
        </div>

        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <a href="/service">서비스 소개</a>
            </li>
            <li>
              <a href="/process">프로세스</a>
            </li>
            <li>
              <a href="/techniques">핵심기술</a>
            </li>
            <li>
              <a href="/interview">인터뷰 연습</a>
            </li>
            <li>
              <a href="/recruiting">채용 일정</a>
            </li>
            <li>
              <a href="/test">시험 일정</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header_2;
