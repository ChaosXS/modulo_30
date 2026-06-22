import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import Produtos from './containers/Produtos'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
