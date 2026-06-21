import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import TravelerReview from './pages/TravelerReview.jsx';
import Users from './pages/Users.jsx';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travelers" element={<Users />} />
          <Route path="/travelers/:id" element={<TravelerReview />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
