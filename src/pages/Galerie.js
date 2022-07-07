import React, { useEffect, useState,useLayoutEffect } from "react";
import axios from "axios";
import ImageViewer from "../components/ImageViewer";
import Loading from "../components/Loading";
function Galerie() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState();
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const URL = "https://castmernapp.herokuapp.com/api/thumbs";

  useLayoutEffect(() => {
    window.scrollTo(0,0)
    }, [])

  useEffect(() => {
    fetchImages();
  }, []);
  const fetchImages = async () => {
    await axios
      .get(URL)
      .then((res) => {
        setImages(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showNextImage = () => {
    if (currentIndex + 1 >= images.length) {
      setCurrentIndex(0);
      setClickedImage(images[0]);
    } else {
      setClickedImage(() => {
        const newImg = images.filter((item, index) => {
          return index === currentIndex + 1;
        });
        return newImg[0];
      });
      setCurrentIndex(currentIndex + 1);
    }
  };
  const showPreviousImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      setClickedImage(images[images.length - 1]);
    } else {
      setClickedImage(() => {
        const newImg = images.filter((item, index) => {
          return index === currentIndex - 1;
        });
        return newImg[0];
      });
      setCurrentIndex(currentIndex - 1);
    }
  };

  if(isLoading){
    return <Loading/>
  }

  return (
    <section className="galerie">
      <h1>Galerie</h1>
      <div className="galerie-container">
        {images?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setClickedImage(item);
              }}
              className="tile"
            >
              <img src={item.selectedFile} alt="restaurant" />
            </div>
          );
        })}
      </div>

      <div>
        {clickedImage && (
          <ImageViewer
            clickedImage={clickedImage}
            setClickedImage={setClickedImage}
            showPreviousImage={showPreviousImage}
            showNextImage={showNextImage}
          />
        )}
      </div>
    </section>
  );
}

export default Galerie;
