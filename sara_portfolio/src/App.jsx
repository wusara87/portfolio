import Nav from "./Nav"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/skills":
      component = <Skills />
      break
    case "/projects":
      component = <Projects />
      break
  }
  return (
    <>
      <Nav />
      <div className="container">{component}</div>
    </>
  )
}

export default App
