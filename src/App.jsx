
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/SignIn" element={<SignIn />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
