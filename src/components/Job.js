import React from "react";
import "./Job.css";
import search from "../img/Frame-10.svg";
import Wheart from "../img/Frame-14.svg";
import heart from "../img/Frame-13.svg";
function Job() {
  return (
    <div className="job-container">
      <div className="input-area">
        <input
          type="text"
          placeholder="궁금한 기업을 검색해보세요."
          className="search-bar"
        />
        <img className="search" src={search} alt="검색" />
      </div>

      <div className="card">
        <h2>00기업</h2>
        <p className="com-explain">
          "근무하기 좋은 회사입니다. 시니어 근로자를 위한 훈련과 교육이
          친절합니다.""
        </p>
        <div className="review-area">
          <div className="review-img">
            <p className="txt-heart">
              근무하트{" "}
              <img className="work-heart" src={Wheart} alt="근무하트" />
            </p>
            <img src={heart} alt="좋아요" />
            <img src={heart} alt="좋아요" />
            <img src={heart} alt="좋아요" />
            <img src={heart} alt="좋아요" />
            <img src={heart} alt="좋아요" />
          </div>
          <p>재입사 희망률: 100%</p>
        </div>
      </div>
    </div>
  );
}

export default Job;
