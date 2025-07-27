import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import CompanyProfiles from './pages/company_profiles.jsx';
import StudentProfiles from './pages/student_profiles.jsx';
import CompanyPage from './pages/company_page.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/company-profiles' element={<CompanyProfiles />}/>
          <Route path='/company-profiles/:id' element={<CompanyPage />}/>
          <Route path='/student-profiles' element={<StudentProfiles />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
