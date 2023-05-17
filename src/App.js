import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SearchPage from './components/SearchPage/SearchPage';
import SelectedPage from './components/SelectedPage/SelectedPage';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<SelectedPage />} />
        <Route path="/selected" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
