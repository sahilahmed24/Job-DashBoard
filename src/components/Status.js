import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Content = styled.div`
  padding: 5px;
  border-radius: 10px;
  ${(p) =>
    p.status
      ? css`
          background-color: var(--green-light);
          border: 2px solid var(--green-dark);
        `
      : css`
          background-color: var(--red-light);
          border: 2px solid var(--red-dark);
        `}
`;
const StatusPrimaryText = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-left: 15px;
`;
const StatusText = styled.div`
  font-size: 14px;
  margin-left: 15px;
`;

const StatusButton = styled.div`
  margin: 10px;
  cursor: pointer;
  outline: 0;
  border-radius: 10px;
  display: inline-block;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 1rem;
  border-radius: 0.25rem;

  color: #0d6efd;
  border-color: #0d6efd;
  :hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
`;

const Status = ({ company, status }) => {
  return (
    <Container>
      <Content status={status}>
        <StatusPrimaryText>
          {status ? "Your Application is Pending" : "Application not Accepted"}
        </StatusPrimaryText>
        <StatusText>
          {status
            ? `${company} is currently reviewing your application.`
            : `${company} reviewed your application, but didn't accept it.`}
        </StatusText>
        {status ? <StatusButton>Schedule Interview </StatusButton> : null}
      </Content>
    </Container>
  );
};

export default Status;
