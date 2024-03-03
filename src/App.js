import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import CreateProject from './projects/CreateProjects';
import ProjectDetail from './projects/ProjectDetail';
import SignIn from './auth/SignIn';
import Signup from './auth/Signup';
import { thunk } from 'redux-thunk';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project_detail" element={<ProjectDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createproject" element={<CreateProject/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

