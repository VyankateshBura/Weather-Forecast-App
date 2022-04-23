import React from 'react'

const Header = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <img src="/favicon.ico" alt="" className="logo"/>
                    <a className="navbar-brand">Weather Forecast</a>
                </div>
        </nav> 
    </div>
  )
}

export default Header