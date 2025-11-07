import ProcessorStartCard from './components/ProcessorStartCard'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/salamander.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <ProcessorStartCard />
        <p>Placeholder</p>
      </main>
      <Footer />
    </div>
  )
}

export default App

