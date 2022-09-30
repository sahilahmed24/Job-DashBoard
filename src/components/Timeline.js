import React from "react";

const Timeline = ({ company, status }) => {
  return (
    <>
      <div className="timeline-container">
        <div className="rightbox">
          <div className="rb-container">
            <ul className="rb">
              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                  28th Sep 2022
                  <br /> 7:00 PM
                </div>
                <div className="item-title">You have applied for this job.</div>
              </li>
              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                  29th Sep 2022
                  <br /> 3:00 PM
                </div>
                <div className="item-title">
                  Aayush Kumar from {company} seen your resume.
                </div>
              </li>
              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                  30th Sep 2022
                  <br /> 7:00 PM
                </div>
                <div className="item-title">
                  {status
                    ? `Your application is under review at ${company}.`
                    : `${company} rejected your application.`}
                </div>
              </li>
              <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                  30th Sep 2022
                  <br /> 11:59 PM
                </div>
                <div className="item-title">
                   offered a role 🎉
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
