import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './features/header';
import './App.css';
import Home from './features/home';
import Details from './features/details';

const App = () => {
  return(
  <>
    <BrowserRouter>
    <Header>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/details" element={<Details />} />
        </Routes>
      </Header>

    </BrowserRouter>
  </>
  )
};

export default App;