import React from "react";
import Amoeba from "./Img/amoeba.jpg";
import carrace from "./Img/carrace.png";
import Tambola from "./Img/tambola.jpg";
import TTT from "./Img/ttt.jpg";

const Game = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Browse Some Game</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="my-5">
                <h1 className="text-left">
                  <b>
                    <a className="gameheadline">PC Only</a>
                  </b>
                </h1>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={Amoeba}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Amoeba Jump</h5>
                    <p className="card-text">
                      Play Mario but scratch version it's nice. You have to
                      complete by finding pink Amoeba.
                    </p>
                    <a
                      href="https://bigbeastishank.github.io/js-game/games/Amoeba/"
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Go Play
                    </a>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <h1 className="text-left">
                  <b>
                    <a className="gameheadline">PC, Mobile Both</a>
                  </b>
                </h1>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={Tambola}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Tambola No. Caller</h5>
                    <p className="card-text">
                      If you don't have a member to call number in tambola or
                      housie you can use this game.
                    </p>
                    <a
                      href="https://bigbeastishank.github.io/js-game/games/Tambola/"
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Go Play
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={TTT}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Tic Tac Toe</h5>
                    <p className="card-text">
                      Alone? Play Tic Tac Toe with computer it is kinda nice.
                      And you can always defeat him.
                    </p>
                    <a
                      href="https://bigbeastishank.github.io/js-game/games/Tic Tac Toe/"
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Go Play
                    </a>
                  </div>
                </div>v
              </div>
              <div className="my-5">
                <h1 className="text-left">
                  <b>
                    <a className="gameheadline">Official Game [PC Only]</a>
                  </b>
                </h1>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={carrace}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Beast Racing</h5>
                    <p className="card-text">
                      Game has been updated to version 0.0.3<br/>
                      What's New: Added home and end screen Added 5 colour cars, Added many buttons, Fixed Major Bugs.
                    </p>
                    <a
                      href="https://bigbeastishank.github.io/official-game-rar/Beast Race.rar"
                      className="btn btn-primary"
                      download
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
