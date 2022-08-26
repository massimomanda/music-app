import './App.css';
import Home from './pages/home/Home';
import Player from './pages/player/Player';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,

} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="player" element={<Player />}> </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
