import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {data} from '../Scripts/reviews'



const PlayGame= () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const { id } = useParams();
  const [game, setGame] = useState(null);


  useEffect(() => {
   
    const gameData = data?.find(game => game.id === Number(id));

    setGame(gameData);
  }, [id]);


  return (
 
    <div style={styles.container}>
      <iframe
        src={game?.link}
        style={styles.webview}
        title={game?.address}
        allowFullScreen
        referrerPolicy='no-referrer'
      />
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    marginTop: '150px',
    backgroundColor: 'black',
  },
  title: {
    fontSize: '24px',
    textAlign: 'center',
    margin: '10px',
    color: 'white',
  },
  webview: {
    width: '100%',
    height: '100%',
    border: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    zIndex: 999999,
  },
}

export default PlayGame