import Header from './components/Header'
import Hero from './components/Hero'
import ServiceMatrix from './components/ServiceMatrix'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceMatrix />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
