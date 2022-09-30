import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 6px;
  width: 100%;
`;
const STabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 14px 0px;
`;
const TabItem = styled.div`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  color: var(--grey-600);
  height: 24px;
  line-height: 22px;
  cursor: pointer;

  ${(p) =>
    p.isActive &&
    css`
      color: var(--primary-600);

      &::after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 0;
        height: 3px;
        width: 100%;
        border-radius: 4px;
        background-color: var(--primary-600);
      }
    `}
`;
export const TabContent = styled.div`
  ${(p) => p.styles || ""}
`;

const TabComponent = ({ tabItem = [], tabContentStyles }) => {
  const [activeTab, setActiveTab] = useState(0);

  const ActiveComponent = tabItem[activeTab]?.component;
  return (
    <Container>
      <STabs>
        <>
          {(tabItem ?? []).map((tab, index) => {
            return (
              <TabItem
                isActive={activeTab === index}
                key={tab.name}
                onClick={() => {
                  setActiveTab(index);
                }}
              >
                {tab.name}
              </TabItem>
            );
          })}
        </>
      </STabs>
      <TabContent>{ActiveComponent}</TabContent>
    </Container>
  );
};

export default TabComponent;
