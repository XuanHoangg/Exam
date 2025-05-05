import React from "react";
import videoHomePage from "../../assets/video-homepage.mp4";
import "../../style/User/HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage-continer">
      <video autoPlay muted loop className="video-homepage">
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homePage-content">
        <div className="title-slogan">
          Thử sức trí tuệ – Mỗi câu hỏi là một khám phá.
        </div>
        <div className="title-content">
          Khám phá bản thân, rèn luyện trí tuệ, giải trí mỗi ngày – chỉ với vài
          phút cùng những câu hỏi đầy bất ngờ!
        </div>
        <div>
          <button className="btn-start">Bắt đầu ngay</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
