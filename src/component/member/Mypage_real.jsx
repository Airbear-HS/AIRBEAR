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
                {/* SVG 내용 */}
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
                  color: '#378006',
                }}
            />
          </div>
        </div>
        <div className="extra-space_api"></div>
      </div>
  );
}

export default Mypage_real;
