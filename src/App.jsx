import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import { connect } from 'react-redux'


import './app.css'

import Main from "./Pages/Main"
import Home from "./Pages/Home"

import Music from "./Pages/_Music/Music"
import AboutArtist from "./Pages/_Music/AboutArtist"
import Album from "./Pages/_Music/Album"

import Podcast from "./Pages/_Podcast/Podcast"
import Episodes from "./Pages/_Podcast/Episodes"

import Comedy from "./Pages/_Comedy/Comedy"
import Spritual from "./Pages/_Spritual/Spritual"

import { _getToken } from './Pages/scripts/getToken'
import { app_token } from './redux/actions/actions'






function App({ app_token }) {
  useEffect(() => {
    async function loadToken() {
      const token = await _getToken();
      app_token(token);
    }
    loadToken();
  }, [app_token])
  return (
    <>

      <BrowserRouter>
        <Routes>


          <Route path='/CadenceWave/' element={<Main />}>
            <Route index element={<Home />} />


            <Route path="Music" element={<Music />} />
            <Route path="Music/:type" element={<Music />} />
            <Route path="about/artist/:id" element={<AboutArtist />} />
            <Route path="album/:name/:id" element={<Album />} />


            <Route path="Podcast" element={<Podcast />} />
            <Route path="Podcast/:type" element={<Podcast />} />
            <Route path="Podcast/:name/:id" element={<Episodes />} />


            <Route path="Comedy" element={<Comedy />} />
            <Route path="Comedy/:type" element={<Comedy />} />


            <Route path="Spritual" element={<Spritual />} />
            <Route path="Spritual/:type" element={<Spritual />} />
          </Route>
        </Routes>
      </BrowserRouter >

    </>
  )
}
const mapStateToProps = (state) => {
  return { data: state.reducers };

}
const mapDispatchToProps = (dispatch) => ({
  app_token: (token) => (dispatch(app_token(token)))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
