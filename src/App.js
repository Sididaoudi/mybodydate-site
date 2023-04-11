import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { Welcome } from './pages/Welcome';
import { LoveCoach } from './pages/LoveCoach';
import { YourKind } from './pages/YourKind';
import { Registration } from './pages/Registration';
import { LoveSituation } from './pages/LoveSituation';
import { YourOrientation } from './pages/Orientation';
import { Relation } from './pages/Relation';
import { YourGoals } from './pages/YourGoals';
import { YourAffinities } from './pages/YourAffinities';
import { MyAccount } from './pages/MyAccount';
import { Lifestyle } from './pages/Lifestyle';
import { Profil } from './pages/Profil';
import { Discover } from './pages/Discover';
import MyNav from './components/NavBar';
import { Login } from './pages/Login';
import MyFooter from './components/Footer';

import './assets/styles/style.css';
import './i18n/fr.json';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/LoveCoach" element={<LoveCoach />} />
          <Route path="/YourKind" element={<YourKind />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/LoveSituation" element={<LoveSituation />} />
          <Route path="/YourOrientation" element={<YourOrientation />} />
          <Route path="/Relation" element={<Relation />} />
          <Route path="/YourGoals" element={<YourGoals />} />
          <Route path="/YourAffinities" element={<YourAffinities />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/Lifestyle" element={<Lifestyle />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Discover" element={<Discover />} />
          <Route path="/MyFooter" element={<MyFooter />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
