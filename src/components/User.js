import React, { useState } from "react";
import "./User.css";
import Job from "./Job";
import My from "./My";
import Navbar from "./Navbar";
import Header from "./Header";
import user from "../img/Frame-5.svg";
import setting from "../img/Frame-16.svg";
function User() {
  const [activeTab, setActiveTab] = useState("JOB");
  const [userName, setUserName] = useState("김춘배"); // 로그인한 사용자의 이름

  // Tab에 따라 화면을 렌더링하는 함수
  const renderContent = () => {
    if (activeTab === "JOB") {
      return <Job />;
    } else if (activeTab === "MY") {
      return <My />;
    }
  };

  return (
    <div>
      <Header />
      <div className="user-container">
        {/* 상단 사용자 정보 */}
        <header className="header">
          <div className="user-info">
            <div className="img-area">
              <img src={user} alt="프로필" />
            </div>
            <div className="user-area">
              <h1>{userName}</h1>
              <p>
                인사 30년 경력 | <span>사무보조 구직중</span>
              </p>
            </div>
            <img className="setting" src={setting} alt="설정" />
          </div>
        </header>

        {/* 탭 네비게이션 */}
        <div className="tab-navigation">
          <button
            className={activeTab === "JOB" ? "active" : ""}
            onClick={() => setActiveTab("JOB")}
          >
            JOB
          </button>
          <button
            className={activeTab === "MY" ? "active" : ""}
            onClick={() => setActiveTab("MY")}
          >
            MY
          </button>
        </div>

        {/* 선택한 탭에 따른 화면 표시 */}
        <div className="content-area">{renderContent()}</div>
        <Navbar />
      </div>
    </div>
  );
}

export default User;
