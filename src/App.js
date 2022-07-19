import HomePage from './containers/HomePage/loadable';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import colors from './utils/colors'

function App() {
  return (
    <div 
      style={{ 
        backgroundColor: colors.darkBlue,
        height: '100vh',
        width: '100vw'
      }}
    >
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;