import React, { useState } from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import styled, { css } from "styled-components";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import Modal from "../components/Modal";
import TabComponent from "../components/TabComponent";
import Status from "../components/Status";
import Timeline from "../components/Timeline";

const StatusText = styled.div`
  margin-top: 10px;
  padding: 3px;
  width: 50%;
  text-align: center;
  border-radius: 10px;
  ${(p) =>
    p.status
      ? css`
          background-color: var(--green-light);
          color: var(--green-dark);
          border: 1px solid var(--green-dark);
        `
      : css`
          background-color: var(--red-light);
          color: var(--red-dark);
          border: 1px solid var(--red-dark);
        `}
`;
const Job = ({
  _id = 1,
  position = "Front-End Development Intern (React.js)",
  company = "Aviate",
  jobLocation = "Onsite or remote",
  jobType = "Full-time",
  createdAt = "2 days ago",
  status = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const tabs = [
    {
      name: "Status",
      component: <Status company={company} status={status} />,
    },
    {
      name: "Timeline",
      component: <Timeline company={company} status={status} />,
    },
  ];

  return (
    <Wrapper onClick={openModal}>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={"29-08-2022"} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <StatusText status={status}>
            {status ? "Active" : "Rejected"}
          </StatusText>
        </div>
        <footer>
          <div className="actions">
            {/* <Link to="/add-job" className="btn edit-btn" onClick={() => {}}>
              Edit
            </Link> */}
            {/* <button type="button" className="btn delete-btn" onClick={() => {}}>
              delete
            </button> */}
          </div>
        </footer>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          childern={<TabComponent tabItem={tabs} />}
        />
      </div>
    </Wrapper>
  );
};
export default Job;
