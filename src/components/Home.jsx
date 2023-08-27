// Home.jsx

import React, { useState, useEffect } from 'react';
import styles from './estilos/Home.module.css';
import { NavBar } from './NavBar';

const Home = () => {
  const [anime, setAnime] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.jikan.moe/v4/anime?q=jujutsu&sfw&page=1";
      const response = await fetch(url);
      const animeData = await response.json();
      setAnime(animeData.data);
    };
    fetchApi();
  }, []);

  const filterAnimes = (animeList, text) => {
    if (!text) {
      return animeList;
    }
    return animeList.filter(anime => anime.title.toLowerCase().includes(text.toLowerCase()));
  };

  const filteredAnimes = filterAnimes(anime, searchText);

  const renderAnimeList = () => {
    if (filteredAnimes.length === 0) {
      return <p className={styles.message}>Ops! Anime não encontrado...</p>;
    }

    return filteredAnimes.map((animeData) => (
      <div key={animeData.mal_id} className={styles.anime_card}>
        <h2 className={styles.card_title}>{animeData.title}</h2>
        <img
          src={animeData.images.jpg.image_url}
          alt={animeData.title}
          className={styles.card_image}
        />
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <NavBar setSearchText={setSearchText} />
      <div className={styles.anime_container}>
        {renderAnimeList()}
      </div>
    </div>
  );
};

export default Home;
