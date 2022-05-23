import './App.css';
import './normalize.css';

import Navigation from './components/navigation/index';
import Billboard from './components/billboard/index';
import Titles from './components/titles/index';
import Footer from './components/footer/index';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Billboard />
     <Titles />
     <Footer />
    </div>
  );
}

export default App;
