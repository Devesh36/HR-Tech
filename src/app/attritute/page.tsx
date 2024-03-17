import React from 'react'
import styles from '@/app/index.module.css' ;
import SingleFile from './SingleFile';
import { Footer, Navbar } from '@/components';
function page() {
  return (
    <div>
       
        <div id='wholepage'>
      <SingleFile />
      <Footer/>
      
    </div>
  
    </div>
  )
   
}

export default page
