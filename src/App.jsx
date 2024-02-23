import styles from './App.module.scss'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

// Hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

// Context
import { AuthProvider } from './context/AuthContext'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import Search from './pages/Search/Search'
import PostPage from './pages/PostPage/PostPage'
import EditPost from './pages/EditPost/EditPost'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className={styles.container}>
            <Routes>
              <Route path="/" element={user ? <Home /> : <Login />} />
              <Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
              <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
              <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
              <Route path="/search" element={user ? <Search /> : <Navigate to="/login" />} />
              <Route path="/search/:uid" element={user ? <PostPage /> : <Navigate to="/login" />} />
              <Route path="/posts/edit/:id" element={user ? <EditPost /> : <Navigate to="/login" />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
