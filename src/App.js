import './App.css';
import Card from './components/Card';
import Header from './components/Header';

import "./scss/app.scss"
import data from "./data"
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Header />
     <Card data={data} />
     <Footer />
    </div>
  );
}

export default App;
