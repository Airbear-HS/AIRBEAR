import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // isLoggedIn 상태 변수와 setIsLoggedIn 상태 설정 함수 정의

  return (
    <header>
      <div className="top-bar">
        {isLoggedIn ? (
          // 로그인 후의 상단 바
          <>
            <Link to="/profile" className="profile-button">
              프로필
            </Link>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="logout-button"
            >
              로그아웃
            </button>
          </>
        ) : (
          // 로그인 전의 상단 바
          <>
            <Link to="/login" className="login-button">
              로그인
            </Link>
            <Link to="/signup" className="signup-button">
              회원가입
            </Link>
          </>
        )}
      </div>
      <div className="header-content">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="130"
              viewBox="0 0 90 90"
              fill="none"
            >
              <path
                d="M63.3725 67.4275H54.8625C54.8625 67.4275 54.4025 62.5375 58.085 62.145C61.7675 61.7525 60.675 56.435 60.675 56.435H69.8337V67.4275H63.3725Z"
                fill="#D0CFCE"
              />
              <path
                d="M9.13 36.575C9.13 36.575 11.1837 37.585 9.9925 39.0062C9.88319 39.1935 9.72643 39.3486 9.53802 39.4559C9.34961 39.5632 9.13622 39.6189 8.9194 39.6174C8.70259 39.6159 8.49 39.5572 8.30312 39.4473C8.11623 39.3373 7.96166 39.18 7.855 38.9912C7.855 38.9912 6.485 38.5237 9.13 36.575Z"
                fill="#00D8FF"
              />
              <path
                d="M69.8337 63.2887C69.8337 63.2887 61.58 63.8387 63.565 68.57H75.25C75.25 68.57 78.3212 68.57 77.7125 61.2712C77.7125 61.2712 79.85 41.4462 77.0912 40.4112L80.6562 42.6725C80.8416 42.7871 81.0546 42.8494 81.2725 42.8528C81.4904 42.8563 81.7052 42.8008 81.8941 42.6922C82.0831 42.5835 82.2391 42.4258 82.3458 42.2358C82.4524 42.0457 82.5057 41.8304 82.5 41.6125V40.6462C81.9212 38.4512 70.7312 28.9288 61.4087 28.9288C59.3349 28.9232 57.2735 29.249 55.3025 29.8938C55.3025 29.8938 55.2475 29.9075 55.165 29.9363C54.2675 30.1638 49.46 31.4275 48.315 31.5413C47.0437 31.6538 26.3112 30.7938 26.3112 30.7938C23.3775 30.7463 22.825 29.7913 20.855 30.3475C15.75 31.7913 6.58875 37.0975 7.855 38.99C9.2025 41.005 10.445 44.7875 21.0475 40.6275H21.1025C21.4762 40.6275 23.81 40.8837 29.57 46.505C29.5711 46.5159 29.576 46.526 29.5837 46.5338C33.355 50.2113 44.63 65.1087 45.6625 65.9287C46.695 66.7487 52.9762 68.5688 52.1125 62.1663C50.9001 62.0423 49.6929 61.8714 48.4937 61.6538L48.3487 57.4937C54.6825 59.2137 63.27 56.1812 63.27 56.1812"
                fill="white"
              />
              <path
                d="M29.0525 46.4463C29.2175 47.1138 33.1425 61.5025 29.0387 62.0788C24.935 62.655 24.3012 63.5263 24.4112 66.4225H35.3512L40.5575 61.6238C40.5575 61.6238 35.8825 49.3863 29.0525 46.4463Z"
                fill="#D0CFCE"
              />
              <path
                d="M48.4937 61.6563C48.4937 61.6563 50.185 61.975 52.1125 62.1675C52.975 68.57 46.6937 66.75 45.6625 65.93C44.6312 65.11 33.355 50.2125 29.5837 46.535C29.5763 46.5272 29.5718 46.517 29.5712 46.5063C23.81 40.885 21.4762 40.6288 21.1037 40.6288H21.0475C10.445 44.7888 9.2025 41.0063 7.855 38.9913C6.58875 37.0988 15.75 31.7925 20.855 30.35C22.825 29.7925 23.3787 30.7488 26.3112 30.795C26.3112 30.795 47.0437 31.6563 48.3137 31.5425C49.46 31.4288 54.2675 30.165 55.165 29.9375C55.2475 29.9088 55.3025 29.895 55.3025 29.895C57.2735 29.2502 59.3349 28.9244 61.4087 28.93C70.7312 28.93 81.9212 38.4525 82.5 40.6475V41.6138C82.5056 41.8317 82.4522 42.0471 82.3454 42.2372C82.2386 42.4273 82.0824 42.5849 81.8933 42.6934C81.7042 42.8019 81.4892 42.8573 81.2712 42.8536C81.0533 42.8499 80.8403 42.7873 80.655 42.6725L77.09 40.41"
                stroke="#00D8FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.5838 46.535C29.75 47.2025 33.675 61.5913 29.5713 62.1675C25.4675 62.7438 24.8338 63.615 24.9438 66.5113H35.8825L41.09 61.7125M63.27 67.4275H54.76C54.76 67.4275 54.2988 63.01 57.9825 62.655C61.6663 62.3 60.5725 57.495 60.5725 57.495C56.56 58.505 52.36 58.505 48.3488 57.495M69.8338 63.2888C69.8338 63.2888 60.7888 55.3488 60.055 49.5813"
                stroke="#00D8FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M69.8338 63.2888C69.8338 63.2888 61.58 63.8388 63.565 68.57H75.25C75.25 68.57 78.1387 68.4375 77 61.25C77 61.25 81.4075 49.8438 78.7475 41.445M21.4713 32.73C21.4713 32.73 24.3488 32.255 23.1975 36.575"
                stroke="#00D8FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="bear">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p
              style={{
                fontSize: 40,
                fontWeight: 800,
                textAlign: 'left',
                color: '#00d8ff',
              }}
            >
              AIRBEAR
            </p>
          </Link>
        </div>

        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <Link to="/service">서비스 소개</Link>
            </li>
            <li>
              <Link to="/process">프로세스</Link>
            </li>
            <li>
              <Link to="/techniques">핵심기술</Link>
            </li>
            <li>
              <Link to="/interview">인터뷰 연습</Link>
            </li>
            <li>
              <Link to="/recruiting">채용 일정</Link>
            </li>
            <li>
              <Link to="/test">시험 일정</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
