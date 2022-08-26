import styles from './Home.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Home = () => {

    let tracks = [{
        title: 'Pink Elephants on Parade',
        artist: 'djJack',
        img: require('../../assets/img/Pink_Elephants.png'),
        rating: 3,
        mp3Path: 'src/assets/tracks/Pink_Elephants.mp3',
        id: 1
    },
    {
        title: 'Viva la Vida',
        artist: 'Coldplay',
        img: require('../../assets/img/Viva_la_Vida.png'),
        rating: 5,
        mp3Path: 'src/assets/tracks/Viva_la_Vida.mp3',
        id: 2
    },
    {
        title: 'Dragon Ball Z',
        artist: 'Goku',
        img: require('../../assets/img/Dragon_Ball_Z.png'),
        rating: 4,
        mp3Path: 'src/assets/tracks/Ball_Z.mp3',
        id: 3
    },
    ]

    return (

        <div className={styles.pageContainer}>
            <h1>Your weekly music mix</h1>

            <div>
                {tracks.map((track) => {
                    return (
                        <div key={track.id}>
                            <Link to="player" className={styles.route}>
                                <div className={styles.container}>

                                    <img className={styles.img} src={track.img} />
                                    <div className={styles.wrapper}>
                                        <div className={styles.textWrapper}>
                                            <div className={styles.title}>{track.title}</div>
                                            <div className={styles.artist}>{track.artist}</div>
                                        </div>
                                        <div className={styles.ratingWrapper}>
                                            <div className={styles.rating}>{track.rating}⭐</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <hr></hr>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Home