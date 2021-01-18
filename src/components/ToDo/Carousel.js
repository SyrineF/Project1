import React, {useState} from 'react'

function Carousel() {
    const imageData=[
      {
          id : 1,
          image: "images/1.jpg",
      },
      {
        id : 1,
        image: "images/2.jpg",
    },
    {
        id : 1,
        image: "images/3.jpg",
    }
    ]

    const [compteur, setCompteur] = useState(0);
    const [current, setCurrent] = useState(imageData[0]);

    const NextHandler = () => {
        if (compteur === imageData.length - 2) setCompteur(0);
        else {
          setCompteur(compteur + 1);
        }
      };
      const PreviousHandler = () => {
        if (compteur === 0) {
          setCompteur(imageData.length - 2);
        } else setCompteur(compteur - 1);
      };

    return (
        <div>
            <div className="row ">
              <div className="col-2 ">
                <span >
                  <i
                    className="fa fa-chevron-circle-left"
                    onClick={PreviousHandler}
                  />
                </span>
              </div>
              <div className="col-8 ">
                <div className="img-container">
                  <img
                    className="img-fluid"
                    src={current.image}
                    
                  />
                </div>
              </div>
              <div className="col-2">
                <span>
                  <i
                    className="fa fa-chevron-circle-right"
                    onClick={NextHandler}
                  />
                </span>
              </div>
            </div>
        </div>
    )
}

export default Carousel
