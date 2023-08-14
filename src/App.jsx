import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Pages/Main"
import './app.css'
import Home from "./Pages/Home"
import Music from "./Pages/Music"
import Podcast from "./Pages/Podcast"
import Comedy from "./Pages/Comedy"
import Spritual from "./Pages/Spritual"
import AboutArtist from "./Pages/aboutArtist"
import Album from "./Pages/Album"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index path="Home" element={<Home />} />
            <Route path="Music" element={<Music />} />

            <Route path="Music/:type" element={<Music />} />
            <Route path="Podcast" element={<Podcast />} />
            <Route path="Podcast/:type" element={<Podcast />} />
            <Route path="Comedy" element={<Comedy />} />
            <Route path="Spritual" element={<Spritual />} />
            <Route path="about/artist/:id" element={<AboutArtist />} />
            <Route path="album/:name/:id" element={<Album />} />
          </Route>
        </Routes>


      </BrowserRouter >
    </>
  )
}

export default App
