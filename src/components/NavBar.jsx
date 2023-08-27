// NavBar.jsx

import React from 'react';
import styles from './estilos/NavBar.module.css';
import logo from '../img/logo.png';

export const NavBar = ({ setSearchText }) => {
  const handleSearch = () => {
    const searchText = document.getElementById('searchInput').value;
    setSearchText(searchText);
  };

  return (
    <div className={styles.NavBar_container}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <div className={styles.input_container}>
        <input
          id="searchInput"
          className={styles.procurar_anime}
          type="text"
          placeholder="Procurar animes"
        />
        <button className={styles.botao_anime} onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default NavBar;