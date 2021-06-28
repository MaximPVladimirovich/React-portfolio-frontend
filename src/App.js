import './App.css';

// Import components
import Footer from "./components/Footer"
import Header from "./components/Header"
// Import pages
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

// Import Router and switch
import { Route, Switch } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects URL={"https://maximbleeker.herokuapp.com/projects"} />
        </Route>
        <Route exact path="/about">
          <About URL={"https://maximbleeker.herokuapp.com/about"} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
