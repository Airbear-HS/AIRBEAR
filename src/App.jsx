import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import { Home } from './component/Home';
import Test from './component/Test';
import Login from './component/Login'; // Import Login
import Signup from './component/Signup'; // Import Signup

function App() {
  return (
    <div>
      <AppLayout>
        <Routes>
          {/* <Route path="/service" element={<Service />} />
            <Route path="/process" element={<Process />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/recruiting" element={<Recruiting />} />*/}
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> // 로그인 경로 추가
          <Route path="/signup" element={<Signup />} /> // 회원가입 경로 추가
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
