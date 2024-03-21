
import React from 'react' 
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import CardsView from './pages/CardsView'
import Home from './pages/Home'
import LoansView from './pages/LoansView'
import NewLoan from './pages/NewLoan'
import NewAccount from './pages/NewAccount'
import NewCard from './pages/NewCard'
import Header from './components/Header'
import Footer from './components/Footer'
import Transactions from './pages/Transactions'
import SignIn from './pages/SignIn'
import { withAuth } from './hocs/withAuth'
import SignUp from './pages/SignUp'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const CardsWithAuth = withAuth(CardsView)
  const HomeWithAuth = withAuth(Home)
  const TransactionsWithAuth = withAuth(Transactions)
  const LoansWithAuth = withAuth(LoansView)
  const NewLoansWithAuth = withAuth(NewLoan)
  const NewAccountWithAuth = withAuth(NewAccount)
  const NewCardWithAuth = withAuth(NewCard)
   

  return (
    
    <BrowserRouter>
      <MainLayout>
        <Header/>
          <Routes>
            <Route path='/transaction' element={<TransactionsWithAuth/>}/>
            <Route path='/cards' element={<CardsWithAuth/>}/>
            <Route path='/home' element={<HomeWithAuth/>}/>
            <Route path='/loans' element={<LoansWithAuth/>}/>
            <Route path='/loans/new' element={<NewLoansWithAuth/>}/>
            <Route path='/accounts/new' element={<NewAccountWithAuth/>}/>
            <Route path='/cards/new' element={<NewCardWithAuth/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/transfer' element={<Transactions/>}/>


          </Routes>
        <Footer/>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
