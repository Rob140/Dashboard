import React from 'react'
import styles from './header.module.css'

const Header = ({ className }) => {
  const combinedClassName = [styles.header, className].filter(Boolean).join(" ");
  return (
    <header className={combinedClassName}>
      Header
    </header>
  )
}

export default Header