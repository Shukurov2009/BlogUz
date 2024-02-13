import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Section } from "./components/section"

function App() {

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Section/>
      </main>
      <Footer/>
    </>
  )
}

export default App
