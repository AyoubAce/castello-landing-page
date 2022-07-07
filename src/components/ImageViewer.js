import React from "react";
import {MdArrowForwardIos,MdArrowBackIosNew , MdClose} from "react-icons/md"

function ImageViewer({ clickedImage, setClickedImage, showNextImage, showPreviousImage}) {

const handleKeyDown=(e)=>{
switch (e.keyCode) {
  case 37:
    showPreviousImage();
    break;
  case 39:
    showNextImage();
    break;
  default: console.log(e.keyCode);
    break;
}
}
const closeOverlay= (e)=>{
    if (e.target.classList.contains("close-overlay")){
        setClickedImage(null)
    }
}


  return (
      <>
    <div className="image-viewer close-overlay" onClick={closeOverlay} onKeyDown={handleKeyDown} >
      
        <img src={clickedImage.selectedFile} alt='dldl' />
      <MdClose size={40}  className="close-overlay exit " onClick={closeOverlay} />
      <MdArrowForwardIos size={40} className="next icon" onClick={showNextImage} />
      <MdArrowBackIosNew  size={40} className="last icon" onClick={showPreviousImage}  />
    </div>
    </>
  );
}

export default ImageViewer;
