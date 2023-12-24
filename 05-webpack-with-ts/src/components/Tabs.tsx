import React from 'react';

export const TabType = {
  KEYWORD: 'KEYWORD',
  HISTORY: 'HISTORY',
};

const TabLabel = {
  [TabType.KEYWORD]: '추천 검색어',
  [TabType.HISTORY]: '최근 검색어',
};

interface Props {
  selectedTab: string;
  onChange: (selectedTab: string) => void;
}

const Tabs: React.FunctionComponent<Props> = ({ selectedTab, onChange }) => {
  const handleSelectedTab = (selectedTab: string): void => {
    onChange(selectedTab);
  };

  return (
    <ul className="tabs">
      {Object.values(TabType).map(type => (
        <li key={type} className={selectedTab === type ? 'active' : ''}>
          <button type="button" onClick={() => handleSelectedTab(type)}>
            {TabLabel[type]}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
