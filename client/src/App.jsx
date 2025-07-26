import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import CompanyProfiles from './pages/company_profiles.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/company-profiles' element={<CompanyProfiles />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
