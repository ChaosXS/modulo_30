import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Cart from './components/Cart'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
