import React from "react";

const Map = () => {

    return (

     <div style={{ margin:"5rem 0"}}>
     <iframe
        width="100%"
        height="250"
        style={{border:"0", textAlign:"center" }}
        zoom={15}
        loading="lazy"
        title="castello"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GMAP_KEY}
      &q=Castello,kamp-linfort`}>
      </iframe>
  
       </div>
    )
  }
  
export default Map;