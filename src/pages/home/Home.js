import styles from './Home.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Home = (props) => {

    return (

        <div className={styles.pageContainer} >
            <h1>Your weekly music mix</h1>
            <div>
                {props.track.map((track) => {
                    return (
                        <div key={track.id} >
                            <Link to="player" className={styles.route} state={{ from: track }}>
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