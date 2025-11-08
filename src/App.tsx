import Clouds from './components/Clouds.tsx';
import Header from './components/Header.tsx';
import Home from './Home.tsx';
import Landscape from './components/Landscape.tsx';
function App() {
  return (
    <div className="relative w-full min-h-screen bg-blue-100">
      <Header/>
      <Clouds />
      <Home />
      {/* Your other portfolio content goes here */}
    </div>
  );
}

export default App;
