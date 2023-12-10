import React, { useContext, useEffect } from 'react'
import { Foodsec } from '../components/Foodsec'
import { Fruitscarousel } from '../components/Fruitscarousel'
import { Menu } from '../components/Menu'
import Notecontext from '../context/Notecontext'

export const Home = () => {
  const context=useContext(Notecontext)
  const {getorders}=context
  useEffect(() => {
    // if  login then respective user item will be fetched 
    if ( localStorage.getItem('token')) {
      getorders();
    }
  
    // eslint-disable-next-line
  }, [])
  return (
    
    <>
    <Foodsec/>
    <Fruitscarousel/>
  <Menu/>
  </>
  )
}
