import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Lesson from './Lesson';
import Biologi from './Biologi';
import Biologi1 from './Biologi/Biologi1';
import Biologi2 from './Biologi/Biologi2';
import BiologiSelDanJaringan from "./Biologi/BiologiSelDanJaringan";
import AnatomiDanFisiologi from "./Biologi/AnatomiDanFisiologi";
import Mikrobiologi  from "./Biologi/Mikrobiologi";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson" element={<Lesson />} /> 
        <Route path="/biologi" element={<Biologi />} />
        <Route path='/biologi1' element={<Biologi1 />} />
        <Route path='/biologi2' element={<Biologi2 />} />
        <Route path="/biologiseldanjaringan" element={<BiologiSelDanJaringan />} />
        <Route path="/anatomidanfisiologi" element={<AnatomiDanFisiologi />} />
        <Route path="/mikrobiologi" element={<Mikrobiologi />} />

      </Routes>
    </Router>
  );
};

export default App;
