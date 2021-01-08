import './App.css'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListItemScreen from './screens/ListItemScreen'
import CardsScreen from './screens/CardsScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/cards' component={CardsScreen} exact />
        <Route path='/cards/:id' component={ListItemScreen} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
