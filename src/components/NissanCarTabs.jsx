import React, { useState } from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TabButton = styled.button`
  background-color: ${(props) => (props.active ? '#0072c6' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  border: none;
  border-bottom: 2px solid ${(props) => (props.active ? '#0072c6' : '#ccc')};
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0072c6;
    color: #fff;
  }
`;

const TabContent = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

const Tab = ({ title, children, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(title);
  };

  return (
    <>
      <TabButton onClick={handleClick} active={activeTab === title}>
        {title}
      </TabButton>
      <TabContent active={activeTab === title}>{children}</TabContent>
    </>
  );
};

const TabGroup = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  return (
    <>
      <TabContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.title}
            title={tab.title}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            {tab.content}
          </Tab>
        ))}
      </TabContainer>
    </>
  );
};

const NissanCarTabs = () => {
  const tabs = [
    {
      title: 'Altima',
      content: 'Nissan Altima is a mid-size car that offers excellent fuel economy and advanced safety features.',
    },
    {
      title: 'Rogue',
      content: 'Nissan Rogue is a compact SUV that is both practical and fun to drive with its advanced technology and spacious interior.',
    },
    {
      title: 'Maxima',
      content: 'Nissan Maxima is a luxury sedan that combines style, performance, and comfort to provide a superior driving experience.',
    },
    {
      title: 'Leaf',
      content: 'Nissan Leaf is an electric car that offers eco-friendliness and low operating costs with a long range and smooth ride.',
    },
  ];

  return <TabGroup tabs={tabs} />;
};

export default NissanCarTabs;
