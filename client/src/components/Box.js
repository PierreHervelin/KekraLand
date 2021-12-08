import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { User } from "../data/data";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Box = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [albums, setAlbums] = useState(null);
  const [vetements, setVetements] = useState(null);
  const [tracklists, setTracklists] = useState([[null]]);
  const [indiceBox, setIndiceBox] = useState(0);
  const ref = useRef({});

  const prix = albums&&vetements?(albums[indiceBox].prix + vetements[indiceBox].prix)/2:0

  useEffect(() => {
    const getbox = async () => {
      const response = await axios.get(`http://localhost:3001/api/box/getbox`);
      console.log(response.data);
      const result = response.data;
      setAlbums(result.albums);
      setVetements(result.vetements);

      const temp = [[], []];

      for (let tracklist of result.tracklists) {
        if (tracklist.ProduitId === result.albums[0].ProduitId) {
          temp[0].push(tracklist);
        } else {
          temp[1].push(tracklist);
        }
      }
      console.log(temp);
      setTracklists(temp);
    };
    getbox();
  }, []);

  useEffect(() => {
    console.log(albums, vetements, tracklists);
  }, [albums, vetements, tracklists]);

  // observer :
  useEffect(() => {
    const inViewport = (entries, observer) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      });
    };

    const Obs = new IntersectionObserver(inViewport);

    const els = document.querySelectorAll(".observe");
    els.forEach((item) => {
      Obs.observe(item);
    });
  });
  return (
    <div className="product-box">
      <Navbar />
      <div className="wrapper">
        <div className="sideContainer">
          <div className="leftSide">
            <div className="albumImg">
              <div>
                <img src={albums?albums[indiceBox].image:""} alt="" />
              </div>
            </div>
            <div className="albumTracklist">
              <h2>Tracklist</h2>
              {tracklists[indiceBox].map((item, i) => (
                <div key={i}>
                  <span>{item?.numero}</span>
                  <span>{item?.titre}</span>
                  <span>{item?.temps}</span>
                </div>
              ))}
            </div>

            <div className="Vetement-content">
              <div>
                <img src={vetements ? vetements[indiceBox].image : ""} alt="" />
              </div>
            </div>
          </div>

          <div className={`rightSide ${isFixed ? "fixed" : ""}`}>
            <div className="albumContainer">
              <h2> {albums ? albums[indiceBox].nom : ""} </h2>
              <div className="boxChoice-container">
                <div
                  className="box1"
                  onClick={() => {
                    setIndiceBox(0);
                  }}
                />
                <div
                  className="box2"
                  onClick={() => {
                    setIndiceBox(1);
                  }}
                />
              </div>
              <div className="albumHr">
                <hr />
              </div>
              <div className="containerButton">
                <div>
                  <p ref={(el) => (ref.current.p = el)}>Ajouté au panier</p>
                  <button
                    onClick={() => {
                      //  console.log(User.panier);
                      /* User.panier.addProduit({
                                                id:props.album.album.ProduitId,
                                                nom:props.album.album.nom,
                                                prix:props.album.album.prix,
                                                image:props.album.album.image,
                                                quantite:1
                                            })*/
                      ref.current.p.classList.add("active");
                      setTimeout(() => {
                        ref.current.p.classList.remove("active");
                      }, 2000);
                    }}
                  >
                    Ajouter au panier
                  </button>
                </div>
                <p>{prix} €</p>
              </div>

              <div className="albumDesc">
                <h2>Description</h2>
                <br />
                <p>{albums ? albums[indiceBox].description : ""}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Box;
