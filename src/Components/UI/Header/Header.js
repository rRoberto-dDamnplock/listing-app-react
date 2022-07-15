import React, {useState} from 'react'
import styles from './Header.module.scss'


const Header = (props) => {



      return ( 
            <>
      
       
             <div className={styles.header}>

<div className={styles.content} >

      <div className={styles.logo}>
      <h1>Our Brand</h1>
      </div>
      <div className={styles.list}>
          <li onClick={props.onAddModal}style={{cursor: 'pointer'}}>+List</li>
          <li>About</li>
          <li>Contact</li>
          </div>
</div>
            </div>
            </>
      )
}

export default Header;