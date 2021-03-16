import { Switch, Route, Link, useLocation } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./App.scss"

function App() {
  const location = useLocation()

  return (
    <main>
      <ul className="nav">
        <li className={location.pathname === "/" && "active"}>
          <Link to="/">/ /</Link>
        </li>
        <li className={location.pathname === "/about" && "active"}>
          <Link to="/about">about</Link>
        </li>
        <li className={location.pathname === "/projects" && "active"}>
          <Link to="/projects">projects</Link>
        </li>
        <li className={location.pathname === "/contact" && "active"}>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  )
}

export default App
