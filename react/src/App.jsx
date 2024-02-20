
import React from 'react' 
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AccountView from './pages/AccountView'
import CardsView from './pages/CardsView'
import Home from './pages/Home'
import LoansView from './pages/LoansView'
import NewLoan from './pages/NewLoan'
import NewAccount from './pages/NewAccount'
import NewCard from './pages/NewCard'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    
    <BrowserRouter>
      <MainLayout>
      <Header/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/accounts' element={<AccountView/>}/>
          <Route path='/cards' element={<CardsView/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/loans' element={<LoansView/>}/>
          <Route path='/loans/new' element={<NewLoan/>}/>
          <Route path='/accounts/new' element={<NewAccount/>}/>
          <Route path='/cards/new' element={<NewCard/>}/>
        </Routes>
      <Footer/>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
