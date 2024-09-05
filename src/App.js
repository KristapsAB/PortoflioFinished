import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Nav from './components/Navigation';
import Skills from './components/mySkills';  
import Contact from './components/ContactMe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/navigation" element={<Nav />} />  
        <Route path="/myskills" element={<Skills />} />  
        <Route path="/contactme" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
