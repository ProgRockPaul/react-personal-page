import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Gear = () => (
  <div>
    <h2>Heres a list of some of gear I use: </h2>
    <h3>Guitars</h3>
    <p> Schecter-Km7 (low to high): Gb, Db, Ab, Db, Gb, Bb, Eb </p>
    <img src='https://www.guitar.co.uk/media/catalog/product/cache/1/image/800x400/9df78eab33525d08d6e5fb8d27136e95/s/c/schecter-km7-keith-merrow-lambo-orange-guitar.jpg'>
    </img>
    <h3>Axe Fx II Mk-1 Pre-Amp</h3>
    <img src='https://reverb-res.cloudinary.com/image/upload/s--sh6EDVZ3--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1454792339/aklncvcr4hmsxfebeagz.jpg'>
    </img>
    <h3>MFC-101 Floorboard for the Axe Fx </h3>
    <img src='http://www.fractalaudio.com/img/lightbox/mfc/mfc-101-midi-foot-controller-top.jpg'>
    </img>
  </div>
)

module.exports = Gear;
