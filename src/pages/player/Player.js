import styles from './Player.module.css'
import { useLocation } from 'react-router-dom'

const Player = () => {
    const location = useLocation()
    const { from } = location.state
    return (<div className={styles.playerWrapper}>
        <img className={styles.img} src={from.img} />
        <h3 className={styles.title}>{from.title}</h3>
        <div className={styles.artist}>{from.artist}</div>
        <audio controls className={styles.player}>
            <source src={from.mp3Path} type="audio/mp3"/>
                  
        </audio>
            </div>)
}

            export default Player