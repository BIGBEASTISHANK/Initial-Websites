import React from "react";
import betasite from "./Img/betasite.png";
import Website from "./Img/first-website.jpg";
import DiscordBotBeast from "./Img/discord-bot-beast.jpg";

const Project = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Some of My projects</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-5 col-10 mx-auto">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={betasite}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">My Beta website</h5>
                    <p className="card-text">
                      This is my beta website where I will give updates in my
                      docs and blogs.
                    </p>
                    <a
                      href="https://bigbeastishank.github.io/beta/"
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Check my website
                    </a>
                  </div>
                </div>
                </div>
                <div className="col-md-5 col-10 mx-auto">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={Website}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">My first website</h5>
                    <p className="card-text">
                      It was my first try of making my website. Best work in PC,
                      Mobile contain some issue.
                    </p>
                    <a
                      href="https://bigbeastishank.github.io/Website-first-try/"
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Check my website
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-10 mx-auto">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={DiscordBotBeast}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Discord Bot</h5>
                    <p className="card-text">
                      I have made an discode bot. It is 24/7 . The name of bot is
                      <b> BIG Beast</b>
                    </p>
                    <a
                      href='top.gg/bot/709984874924081174'
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Invite Him in your server
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

export default Project;
