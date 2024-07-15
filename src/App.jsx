import { Route, Switch } from 'wouter';
// import Header from './components/Header'
// import Footer from './components/Footer'; 
// import Subscribe from './components/Subscribe';
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <>

      <Switch>
          <Route path="/home">
              <Home />
          </Route>
        
      </Switch>

    </>
  )
}

export default App
