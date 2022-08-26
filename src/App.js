import "./App.css";
import Home from "./pages/home/Home";
import Player from "./pages/player/Player";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
    let tracks = [
        {
            title: "Pink Elephants on Parade",
            artist: "djJack",
            img: require("./assets/img/Pink_Elephants.png"),
            rating: 3,
            mp3Path: require("./assets/tracks/Pink_Elephants.mp3"),
            id: 1,
        },
        {
            title: "Viva la Vida",
            artist: "Coldplay",
            img: require("./assets/img/Viva_la_Vida.png"),
            rating: 5,
            mp3Path: require("./assets/tracks/Viva_la_Vida.mp3"),
            id: 2,
        },
        {
            title: "Dragon Ball Z",
            artist: "Goku",
            img: require("./assets/img/Dragon_Ball_Z.png"),
            rating: 4,
            mp3Path: require("./assets/tracks/Ball_Z.mp3"),
            id: 3,
        },
        {
            title: "Prelude",
            artist: "Nobuo Uematsu",
            img: require("./assets/img/Final_Fantasy.png"),
            rating: 5,
            mp3Path: require("./assets/tracks/Prelude_FF.mp3"),
            id: 4,
        },
    ];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home track={tracks} />}></Route>
                <Route path="player" element={<Player />}>
                    {" "}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
