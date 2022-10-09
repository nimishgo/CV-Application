import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cv from './components/Cv';
import './cv.css';

function App() {
  return (
    <>
      <Header/>
      <div className="cv">
        <Cv />
      </div>
      <Footer />
    </>
    );
}

export default App;
