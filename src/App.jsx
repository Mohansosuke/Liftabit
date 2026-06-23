import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ overflowX: 'clip' }}>
      {/* Navbar sits outside the main wrapper */}
      <Navbar />
      {/* Home page contains the bordered wrapper with all sections */}
      <Home />
    </div>
  );
}

export default App;
