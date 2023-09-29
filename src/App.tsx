import Header from './components/Header'
import Budget from './components/Budget'
import VendorList from './components/VendorList'
import Footer from './components/Footer'
import AddVendor from './components/AddVendor'
import RemainingBudget from './components/RemainingBudget'
import AmountPaid from './components/AmountPaid'
import AmountLeft from './components/AmountLeft'
import './App.css'

function App() {
  return (
    <>
    <Header />
    <Budget />
    <RemainingBudget />
    <VendorList />
    <AmountPaid />
    <AmountLeft />
    <AddVendor />
    <Footer />
    </>
  )
}

export default App
