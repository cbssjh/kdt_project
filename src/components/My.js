import React from "react";
import "./My.css";
function My() {
  return (
    <div className="my-container">
      <h2>포지션 히스토리</h2>
      <div className="history-card">
        <h3>★☆기업</h3>
        <p>인사팀 사무보조</p>
        <p>근무기간: 2024.03.02 ~ 2024.08.31</p>
        <button>업무 후기</button>
      </div>
      <div className="history-card">
        <h3>기업</h3>
        <p>개발보조</p>
        <p>근무기간: 2024.02.20 ~ 2024.02.28</p>
        <button>업무 후기</button>
      </div>
    </div>
  );
}

export default My;
