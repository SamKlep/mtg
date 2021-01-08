import './App.css'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListItemScreen from './screens/ListItemScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/cards/:id' component={ListItemScreen} />
        <Footer />
      </Switch>
    </Router>
  )
}

export default App
