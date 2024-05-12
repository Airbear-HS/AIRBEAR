import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import { Home } from './component/Home';
import Test from './component//Test';
import Login from './component/member/Login';
import Signup from './component/member/Signup';
import Login_Success from './component/member/Login_Success';
import Login_Fail from './component/member/Login_Fail';
import Service from './component/nav/Service';
import Process from './component/nav/Process';
import Techniques from './component/nav/Techniques';
import Interview from './component/nav/Interview';
import Recruiting from './component/nav/Recruiting';

function App() {
  return (
    <div>
      <AppLayout>
        <Routes>
          <Route path="/service" element={<Service />} />
          <Route path="/process" element={<Process />} />
          <Route path="/techniques" element={<Techniques />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/recruiting" element={<Recruiting />} />
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login_Success" element={<Login_Success />} />
          <Route path="/Login_Fail " element={<Login_Fail />} />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
