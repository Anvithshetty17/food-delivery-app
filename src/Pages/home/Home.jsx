import React, { useState } from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
const home = () => {
    const [category,setcategory]=useState("All")

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setcategory={setcategory}/>
        <FoodDisplay category={category}/>
        <AppDownload />
    </div>
  )
}

export default home
