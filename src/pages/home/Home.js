import styles from "./Home.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDeferredValue, useState } from "react";

const Home = (props) => {
    const [text, setText] = useState("");
    const [filteredData, setFilteredData] = useState([...props.track]);
    const [searchMode, setSearchMode] = useState(false);

    const deferredText = useDeferredValue(text);

    const inputChangeHandler = (event) => {
        console.log(event.target.value);
        setText(event.target.value);

        // event.target.value.trim() === ""
        //     ? setFilteredData([...props.track]) : ''

        // setFilteredData(props.track.filter( el => {el.title.includes(text)}))

        // let prova = props.track.filter((el) => {
        //     el.artist.includes(event.target.value);
        //     console.log(text, 'text1');

        //     console.log(el.artist.includes(event.target.value));
        // });
        // console.log(text, 'text2');

        let prova = props.track.filter((el) => {
            return (
                el.artist.toLowerCase().includes(text.toLowerCase()) ||
                el.title.toLowerCase().includes(text.toLowerCase())
            );
        });

        event.target.value.trim() === "" ? setFilteredData([...props.track]) : setFilteredData(prova);

        console.log(filteredData);
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.searchBarWrapper}>
                <input type="text" placeholder="🔍 Search tracks/artists..." className={styles.searchBar} onChange={inputChangeHandler} />
            </div>

            <div className={styles.header}>
                <h2>Your weekly music mix</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                        fill="#fac036"
                        d="M98.66 32.68c-4.62-8.6-7.22-13.43-12.79-20.46-5.56-7.03-12.14-14.07-19.5-7.78-3.72 3.17-2.6 8.21.17 13.22-.47-.31.43 2.16-.01 1.83-8.35-6.37-10.13-5.67-13.01-3.39-6.84 5.41 4.96 16.47 8.81 22.4.66 1.02 3.07 1.97 3.64 2.91.39.64.76 1.26 1.11 1.86-.43-.13-.87-.26-1.32-.39-4.04-1.13-13.32-2.35-17.54-.76C22.04 52 23.36 56.31 25.37 61.97c2.01 5.66 9.35 9.84 21.35 2.38 14.81-6.12 27.11 2.08 27.11 10.6 0 11.7-3.83 18.31-13.88 18.31-15.89 0-16.74-12.96-25.23-21.45-2.29-2.29-7.79-2.96-11.04-.61-7.58 5.49-2.68 16.88-.79 20.69 3.96 7.97 8.84 19.53 21.69 29.95 6.76 5.48 23.53 4.64 33.23 2.66 18.44-3.76 22.15-16.01 28.07-36.98 2.23-7.89 2.53-14.24 2.53-23.05s-5.45-23.78-9.75-31.79z"
                    />
                    <path
                        fill="#e48c15"
                        d="M98.3 60.49c-1.18-5.04-10.83-12.92-14.85-15.52-.41-2.2-6.34-15.14-10.18-20.25-2.13-2.84-6.07-6.68-7.46-8.44 0 0 .34 1.39-.65 2.19.38.46 6.15 7.73 8.55 13.13s4.39 11.24 4.39 11.24c-2.61-.87-12.93-4.33-15.78-4.34 0 0 1 .9.98 2.56-.02 1.55-2.17.73-.98 1.08 7.62 2.21 18.26 4.85 24.82 11.13 2.59 2.49 6.42 7.22 8.22 10.33 1.3 2.22 3.26-1.74 2.94-3.11z"
                    />
                </svg>
            </div>

            {text.length > 0 && (
                <div className={styles.searchedText}>
                    Hai cercato: "{deferredText}"
                </div>
            )}

            <div>
                {filteredData.map((track) => {
                    return (
                        <div key={track.id}>
                            <Link
                                to="player"
                                className={styles.route}
                                state={{ from: track }}
                            >
                                <div className={styles.container}>
                                    <img
                                        className={styles.img}
                                        src={track.img}
                                    />
                                    <div className={styles.wrapper}>
                                        <div className={styles.textWrapper}>
                                            <div className={styles.title}>
                                                {track.title}
                                            </div>
                                            <div className={styles.artist}>
                                                {track.artist}
                                            </div>
                                        </div>
                                        <div className={styles.ratingWrapper}>
                                            <div className={styles.rating}>
                                                {track.rating}⭐
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <hr></hr>
                        </div>
                    );
                })}
            </div>
            {/* {searchMode && (
                <div>
                    {filteredData.map((track) => {
                        return (
                            <div key={track.id}>
                                <Link
                                    to="player"
                                    className={styles.route}
                                    state={{ from: track }}
                                >
                                    <div className={styles.container}>
                                        <img
                                            className={styles.img}
                                            src={track.img}
                                        />
                                        <div className={styles.wrapper}>
                                            <div className={styles.textWrapper}>
                                                <div className={styles.title}>
                                                    {track.title}
                                                </div>
                                                <div className={styles.artist}>
                                                    {track.artist}
                                                </div>
                                            </div>
                                            <div
                                                className={styles.ratingWrapper}
                                            >
                                                <div className={styles.rating}>
                                                    {track.rating}⭐
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <hr></hr>
                            </div>
                        );
                    })}
                </div>
            )} */}
        </div>
    );
};

export default Home;
