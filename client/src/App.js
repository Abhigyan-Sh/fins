import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import Write from './pages/Write.js'
import Settings from './pages/Settings.js'
import Single from './pages/Single.js'

function App() {
  const user = true
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
        <Route path="/register" element={user ? <Home/> : <Register/>}></Route>
        <Route path="/settings" element={user ? <Settings/> : <Login/>}></Route>
        <Route path="/write" element={user ? <Write/> : <Login/>}></Route>
        <Route path="/post/:postId" element={user ? <Single/> : <Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
