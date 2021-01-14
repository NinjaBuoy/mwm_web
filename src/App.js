import React, { Component } from 'react';
import Slider from 'react-custom-slider';
import './App.css';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function FormatNumberLength(num, length) {
  var r = "" + num;
  while (r.length < length) {
      r = "0" + r;
  }
  return r;
}

const App = () => {
  const [ value, setValue ] = React.useState(0);

  var fileURL = "images\\DAC_Phase2_Aerial_";
  var fileFormat = ".png";
  var index = Math.trunc( (value/100)* 98);
  index = FormatNumberLength(index, 4); 
  fileURL = (fileURL + index + fileFormat);
  document.body.style.backgroundImage = "url('fileURL')"
  console.log(fileURL);
 
  return(
    <div>
      <Slider
        value={value}
        markersSize={45}
        trackLength={250}
        markers={8}
        onChange={(value) => setValue(value)}
        valueRenderer={(value) => `${value}%`}
      />
    </div>
  )
};
 
export default App;
