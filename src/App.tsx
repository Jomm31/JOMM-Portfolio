import Clouds from './components/Clouds.tsx';
import Header from './components/Header.tsx';
import Home from './Home.tsx';
import About from './About.tsx';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-blue-100 overflow-x-hidden">
      <Header/>
      <Clouds />
      <Home />
      <About z-999/>
    </div>
  );
}

export default App;
