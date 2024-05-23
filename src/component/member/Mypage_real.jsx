import React from 'react';
import './Mypage_real.css';
import Facebear from '../game/Facebear';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

function Mypage_real() {
  return (
    <div className="page_mine">
      <header className="mine_header">
        <h1>MY PAGE</h1>
      </header>
      <div className="cards-container">
        <div className="date-card">
          <div className="logo_mypage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
            >
              <path
                d="M63.3726 67.4276H54.8626C54.8626 67.4276 54.4026 62.5376 58.0851 62.1451C61.7676 61.7526 60.6751 56.4351 60.6751 56.4351H69.8339V67.4276H63.3726Z"
                fill="#D0CFCE"
              />
              <path
                d="M9.13018 36.575C9.13018 36.575 11.1839 37.585 9.99268 39.0062C9.88338 39.1935 9.72661 39.3486 9.5382 39.4559C9.34979 39.5632 9.13641 39.6189 8.91959 39.6174C8.70277 39.6158 8.49019 39.5572 8.3033 39.4472C8.11642 39.3373 7.96184 39.18 7.85518 38.9912C7.85518 38.9912 6.48518 38.5237 9.13018 36.575Z"
                fill="#00D8FF"
              />
              <path
                d="M69.8339 63.2888C69.8339 63.2888 61.5801 63.8388 63.5651 68.57H75.2501C75.2501 68.57 78.3214 68.57 77.7126 61.2713C77.7126 61.2713 79.8501 41.4463 77.0914 40.4113L80.6564 42.6725C80.8418 42.7871 81.0547 42.8494 81.2726 42.8529C81.4905 42.8563 81.7053 42.8008 81.8942 42.6922C82.0832 42.5836 82.2392 42.4259 82.3459 42.2358C82.4526 42.0458 82.5058 41.8304 82.5001 41.6125V40.6463C81.9214 38.4513 70.7314 28.9288 61.4089 28.9288C59.335 28.9232 57.2737 29.249 55.3026 29.8938C55.3026 29.8938 55.2476 29.9075 55.1651 29.9363C54.2676 30.1638 49.4601 31.4275 48.3151 31.5413C47.0439 31.6538 26.3114 30.7938 26.3114 30.7938C23.3776 30.7463 22.8251 29.7913 20.8551 30.3475C15.7501 31.7913 6.58887 37.0975 7.85512 38.99C9.20262 41.005 10.4451 44.7875 21.0476 40.6275H21.1026C21.4764 40.6275 23.8101 40.8838 29.5701 46.505C29.5713 46.5159 29.5761 46.5261 29.5839 46.5338C33.3551 50.2113 44.6301 65.1088 45.6626 65.9288C46.6951 66.7488 52.9764 68.5688 52.1126 62.1663C50.9002 62.0423 49.693 61.8714 48.4939 61.6538L48.3489 57.4938C54.6826 59.2138 63.2701 56.1813 63.2701 56.1813"
                fill="white"
              />
              <path
                d="M29.0524 46.4463C29.2174 47.1138 33.1424 61.5025 29.0387 62.0788C24.9349 62.655 24.3012 63.5263 24.4112 66.4225H35.3512L40.5574 61.6238C40.5574 61.6238 35.8824 49.3863 29.0524 46.4463Z"
                fill="#D0CFCE"
              />
              <path
                d="M48.4939 61.6563C48.4939 61.6563 50.1851 61.975 52.1126 62.1675C52.9751 68.57 46.6939 66.75 45.6626 65.93C44.6314 65.11 33.3551 50.2125 29.5839 46.535C29.5764 46.5272 29.572 46.517 29.5714 46.5063C23.8101 40.885 21.4764 40.6288 21.1039 40.6288H21.0476C10.4451 44.7888 9.20262 41.0063 7.85512 38.9913C6.58887 37.0988 15.7501 31.7925 20.8551 30.35C22.8251 29.7925 23.3789 30.7488 26.3114 30.795C26.3114 30.795 47.0439 31.6563 48.3139 31.5425C49.4601 31.4288 54.2676 30.165 55.1651 29.9375C55.2476 29.9088 55.3026 29.895 55.3026 29.895C57.2737 29.2502 59.335 28.9244 61.4089 28.93C70.7314 28.93 81.9214 38.4525 82.5001 40.6475V41.6138C82.5057 41.8317 82.4523 42.0471 82.3455 42.2372C82.2387 42.4273 82.0825 42.5849 81.8934 42.6934C81.7043 42.8019 81.4894 42.8573 81.2714 42.8536C81.0534 42.8499 80.8404 42.7873 80.6551 42.6725L77.0901 40.41"
                stroke="#00D8FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.5839 46.535C29.7501 47.2025 33.6751 61.5913 29.5714 62.1675C25.4676 62.7438 24.8339 63.615 24.9439 66.5113H35.8826L41.0901 61.7125M63.2701 67.4275H54.7601C54.7601 67.4275 54.2989 63.01 57.9826 62.655C61.6664 62.3 60.5726 57.495 60.5726 57.495C56.5601 58.505 52.3601 58.505 48.3489 57.495M69.8339 63.2888C69.8339 63.2888 60.7889 55.3488 60.0551 49.5813"
                stroke="#00D8FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M69.8337 63.2888C69.8337 63.2888 61.5799 63.8388 63.5649 68.57H75.2499C75.2499 68.57 78.1387 68.4375 76.9999 61.25C76.9999 61.25 81.4074 49.8438 78.7474 41.445M21.4712 32.73C21.4712 32.73 24.3487 32.255 23.1974 36.575"
                stroke="#00D8FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>AIRBEAR</span>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/90b3/5abc/c6fe62cd939afc0d3470f661561d7cc7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgoFWTpqDmwjB58UiH3pgv0H1i~bnvzA~AAP-Im4HrynOC4yIycnuArR2VVk5Z69kQNTrqKoDcbbEHxjpyg1VDL5L~n-Nps1as2vAMs9qhYbMJYXY1fNQ-yXu~kpjBZ1p3Fa78h7xkXa0JVt3tjN3TSHDUS22KYEmHOv7BqSV7J-feMio6kjWz4V7I~Ix7FXZhtDk5JuuuGT~T3MGei1ZLtDw1A2l0ULETamaH35wkJDEwwNa5xFEro2SUQM2cYxnJHsqXO6nVWANajK5dSzxeZmzgXF4EdRVftcIwNgRwiSYvs6XqATYbn5RRV2FRD9xCOkxUltM-H3QLURL1Maeg__"
            alt="프로필 이미지"
            className="profile-image"
          />
          <h2>엄새연 님</h2>
          <p>에어베어와 함께 한지 12 일</p>
        </div>

        <div className="mypage_intro">
          <h2>에어베어와 함께 해주셔서 곰아워요!</h2>
          <p>
            오늘도 열심히 공부하셨나요?
            <br />
            에어베어가 늘 응원하겠습니다!
          </p>
          <div className="facebear">
            <Facebear />
          </div>
        </div>
      </div>
      <div className="hi-card">
        <div className="mypage_api">
          <FullCalendar
            plugins={[dayGridPlugin, googleCalendarPlugin]}
            initialView="dayGridMonth"
            googleCalendarApiKey="YOUR_GOOGLE_CALENDAR_API_KEY"
            events={{
              googleCalendarId: 'YOUR_GOOGLE_CALENDAR_ID',
              className: 'custom-event-class',
              color: '#00d8ff',
            }}
          />
        </div>
      </div>
      <div className="extra-space_api"></div>
    </div>
  );
}

export default Mypage_real;
