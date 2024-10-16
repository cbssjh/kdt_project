import React, { useState, useEffect, useRef } from "react";
import "./Main.css";
import Navbar from "./Navbar";
import account from "../img/accountant-54.svg";
import coding from "../img/coding-2-31.svg";
import custom from "../img/svg/marketing-4-37.svg";
import design from "../img/svg/designer-2-62.svg";
import Header from "./Header";

const Main = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // 선택된 공고 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창 상태
  const sliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);

  //터치식 슬라이드
  const handleTouchStart = (e) => {
    const firstTouch = e.touches[0].clientX;
    setTouchStart(firstTouch);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const difference = touchStart - currentTouch;

    if (sliderRef.current) {
      sliderRef.current.scrollLeft += difference;
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };
  //

  // 공고 클릭 시 모달 열기 및 해당 공고의 상세 정보 표시
  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true); // 모달 창 열기
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null); // 모달이 닫히면 선택된 공고를 초기화
  };

  useEffect(() => {
    // API 준비 전 임시 데이터 (8개)
    const data = [
      {
        company: "00기업",
        location: "강북구 미아동",
        days: "월/수/금",
        hours: "14:00 ~ 17:00",
        position: "사무보조",
        wage: "시급 1만원",
        img: account, // 이미지 경로가 있으면 여기에 추가
      },
      {
        company: "**기업",
        location: "강북구 미아동",
        days: "월~금",
        hours: "단기 계약직",
        position: "개발보조",
        wage: "협의",
        img: coding,
      },
      {
        company: "XX기업",
        location: "서초구 서초동",
        days: "화/목",
        hours: "10:00 ~ 16:00",
        position: "마케팅",
        wage: "시급 1만2천원",
        img: custom,
      },
      {
        company: "YY회사",
        location: "강남구 역삼동",
        days: "월/화/목",
        hours: "09:00 ~ 12:00",
        position: "디자인 보조",
        wage: "시급 9천원",
        img: design,
      },
      {
        company: "A사",
        location: "성동구 왕십리",
        days: "월~금",
        hours: "08:00 ~ 12:00",
        position: "사무지원",
        wage: "시급 1만5천원",
        img: account,
      },
      {
        company: "B기업",
        location: "용산구 이태원",
        days: "월/화",
        hours: "13:00 ~ 18:00",
        position: "IT 지원",
        wage: "협의",
        img: coding,
      },
      {
        company: "CC컴퍼니",
        location: "종로구 종로",
        days: "주말",
        hours: "10:00 ~ 14:00",
        position: "매장관리",
        wage: "시급 8천원",
        img: account,
      },
      {
        company: "DD기업",
        location: "동대문구 회기동",
        days: "월/목/금",
        hours: "10:00 ~ 17:00",
        position: "행정 보조",
        wage: "시급 1만1천원",
        img: account,
      },
    ];
    setJobs(data.slice(0, 8)); // 최대 8개의 일자리 데이터만 표시
  }, []);

  return (
    <div>
      <Header />
      <div className="main-container">
        <h2 className="head-title">
          <span className="user">춘배</span>님, <br />
          오늘은 이런 일 어떠세요?
        </h2>

        {/* Job Slider */}
        <div
          className="job-slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={sliderRef}
        >
          {jobs.map((job, index) => (
            <div
              key={index}
              className="job-card"
              onClick={() => handleJobClick(job)} // 클릭 시 공고 정보 설정
            >
              <h3>
                {job.company}
                <br />
                {job.location}
              </h3>
              <p>{job.days}</p>
              <p>{job.hours}</p>
              <div className="position">
                <p className="job-name">{job.position}</p>
                <img src={job.img} alt="pic" />
              </div>
              <p className="wage">{job.wage}</p>
            </div>
          ))}
        </div>

        {/* Search & Filter */}
        <div className="search-filter">
          <h3>다른 일자리를 찾아볼까요?</h3>
          <input type="text" placeholder="일자리의 조건을 추가해주세요." />
          <div className="filter-options">
            <button className="filter-button">지역: 도봉구</button>
            <button className="filter-button">이동시간: 30분 이내</button>
          </div>
        </div>

        <Navbar />
      </div>

      {/* 모달 창 */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="btn-apply">지원하기</button>
            {/* 선택된 공고 정보 표시 */}
            {selectedJob && (
              <div className="job-detail">
                <h2>{selectedJob.company}</h2>
                <p>{selectedJob.location}</p>
                <p>
                  {selectedJob.days} {selectedJob.hours}
                </p>
                <p>{selectedJob.position}</p>
                <p className="wage">{selectedJob.wage}</p>
                {selectedJob.img && (
                  <img src={selectedJob.img} alt={selectedJob.company} />
                )}{" "}
                {/* 이미지가 있을 경우 표시 */}
              </div>
            )}
            <div className="close">
              <button className="close-button" onClick={closeModal}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
