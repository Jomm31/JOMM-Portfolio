import Clouds from './components/Clouds.tsx';
import Landscape from './components/Landscape.tsx';

function App() {
  return (
    <div className="relative w-full h-screen bg-blue-100 overflow-hidden">
            <Clouds />
      <Landscape />

      {/* Your other portfolio content goes here */}
    </div>
  );
}

export default App;
