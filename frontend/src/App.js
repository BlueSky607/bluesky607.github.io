import './App.scss';
import Navbar from "./components/navbar/navbar";
import LandingPage from './pages/landingpage';

function App() {
  return (
    <>
      <div className='w-full h-full'>
        <Navbar />
        <div>
          <LandingPage />
        </div>
      </div>
    </>
  );
}

export default App;
