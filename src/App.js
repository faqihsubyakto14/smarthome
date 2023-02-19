import "./App.css";
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
