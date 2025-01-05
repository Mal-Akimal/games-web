import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'; // Adjusted to use react-router-dom

// Importing pages
import Index from './pages/Index';
import ContactUs from './pages/ContactUs';
import Paths from './pages/Paths';
import OurMission from './pages/OurMission';
import JoinUs from './pages/JoinUs';
import CodedObbies from './pages/CodedObbies';
import LessonPage from './pages/LessonPage'; // Adjust the path if necessary
import AuthenticationPage from './pages/AuthenticationPage'; // Import the Authentication page

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation Bar */}
        <nav>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>{' '}
          |{' '}
          <NavLink to="/paths" className="nav-link">
            Paths
          </NavLink>{' '}
          |{' '}
          <NavLink to="/contact-us" className="nav-link">
            Contact Us
          </NavLink>{' '}
          |{' '}
          <NavLink to="/our-mission" className="nav-link">
            Our Mission
          </NavLink>{' '}
          |{' '}
          <NavLink to="/join-us" className="nav-link">
            Join Us
          </NavLink>{' '}
          |{' '}
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>{' '}
          |{' '}
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/path/:slug" element={<CodedObbies />} />
          <Route path="/:path/lesson/:id" element={<LessonPage />} />
          <Route path="/login" element={<AuthenticationPage pageType="login" />} />
          <Route path="/register" element={<AuthenticationPage pageType="register" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
