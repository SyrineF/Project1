import React, { useEffect, useState } from "react";

function Carousel() {
  const imageData = [
    {
      id: 1,
      image: "/images/1.jpg",
    },
    {
      id: 1,
      image: "/images/2.jpg",
    },
    {
      id: 1,
      image: "/images/3.jpg",
    },
  ];
  // initial states > compteur: 0 , current : an empty object {}
  const [compteur, setCompteur] = useState(0);
  const [current, setCurrent] = useState({});
  useEffect(() => {
    setCurrent(imageData[compteur]);
    //each time the counter change we call setCurrent to get imageData[compteur]
  }, [compteur]);
  const NextHandler = () => {
    // imageData.length ===3 > imageData[0,1,2] >
    // if compteur = 2 we dont have next element so we back to zero
    if (compteur === imageData.length - 1) setCompteur(0);
    else {
      setCompteur(compteur + 1);
    }
  };
  const PreviousHandler = () => {
    // if compteur = 0 the previous elem will be the last elemnt in the array > imageData[2]
    // which is imageData.length -1

    if (compteur === 0) {
      setCompteur(imageData.length - 1);
    } else setCompteur(compteur - 1);
  };

  return (
    <div className="container">
      <div className="d-flex  align-items-center justify-content-center ">
        <div className="col-2 ml-4 pl-4 pr-0 ">
          <span>
            <i
              className="fa fa-chevron-circle-left"
              onClick={PreviousHandler}
            />
          </span>
        </div>
        <div className="col-8 ">
          <div className="img-container">
            <img className="img-fluid" src={current.image} />
            <div className="row justify-content-center">
            {imageData.map((d, index) => {
              return (
                <span key={d.id} >
                  <i
                    className={
                      index === compteur
                        ? "fa fa-circle text-danger m-2"
                        : "fa fa-circle m-2"
                    }
                    aria-hidden="true"
                    onClick={() => {
                      setCompteur(index);
                    }}
                  >
                    {/* {index} */}
                  </i>
                </span>
              );
            })}
            </div>
      
          </div>
        </div>
        <div className="col-2 ml-4 pl-4">
          <span>
            <i className="fa fa-chevron-circle-right" onClick={NextHandler} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Carousel;