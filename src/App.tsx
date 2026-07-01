import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import ListaRestaurantes from './containers/ListaRestaurantes'
import { GlobalStyle } from './styles'

function App() {
  return (
    <Provider store={store}>
      {/* Mude de <EstiloGlobal /> para: */}
      <GlobalStyle />
      <div className="container">
        <Header />
        <ListaRestaurantes />
      </div>
    </Provider>
  )
}

export default App
