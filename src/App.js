import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './Home';
import Navbar from './common/components/Navbar/Navbar';
import PageNotFound from './common/components/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element = {<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
