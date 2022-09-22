import React from 'react';
import Header from './Header';
import Aside from './Aside';

const Layout = ({children}) => {
  return (
    <div className='Layout'>
      <Header/>
      <Aside/>
      {children}
    </div>
  )
}

export default Layout