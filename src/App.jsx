import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import { Home } from './component/Home';
import Test from './component/Test';

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
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
