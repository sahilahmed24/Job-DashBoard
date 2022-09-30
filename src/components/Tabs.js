import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${FLEX("", null, "column")};
  background-color: #fff;
  border-radius: 6px;
`;
export const Tabs = styled.div`
  ${FLEX("center", "space-around")};
  padding: 14px 0px;
`;
export const TabItem = styled.div`
  position: relative;
  font-size: 24px;
  font-weight: 500;
  color: var(--primary-800);
  height: 24px;
  line-height: 22px;
  cursor: pointer;

  ${(p) =>
    p.isActive &&
    css`
      color: #878787;

      &::after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 0;
        height: 3px;
        width: 100%;
        border-radius: 4px;
        background-color: #878787;
      }
    `}
`;
export const TabContent = styled.div`
  ${(p) => p.styles || ""}
`;

const Tab = ({ tabs = [], tabContentStyles }) => {
  const [activeTab, setActiveTab] = useState(0);

  const ActiveComponent = tabs[activeTab]?.component;
  return (
    <S.Container>
      <Tabs>
        <>
          {(tabs ?? []).map((tab, index) => {
            return (
              <S.TabItem
                isActive={activeTab === index}
                key={tab.name}
                onClick={() => {
                  setActiveTab(index);
                }}
              >
                {tab.name}
              </S.TabItem>
            );
          })}
        </>
      </Tabs>
      <S.TabContent styles={tabContentStyles}>{ActiveComponent}</S.TabContent>
    </S.Container>
  );
};

export default Tab;
