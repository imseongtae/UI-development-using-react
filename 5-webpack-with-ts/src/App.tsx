import React, { useState } from 'react';
import './styles/main.css';
import Header from './components/Header';
import Tabs, { TabType } from './components/Tabs';

const App: React.FunctionComponent = () => {
  const [selectedTab, setSelectedTab] = useState<string>(TabType.KEYWORD);

  return (
    <>
      <Header title="검색" />
      <Tabs
        selectedTab={selectedTab}
        onChange={selectedTab => setSelectedTab(selectedTab)}
      />
      <div>App with TypeScript</div>
    </>
  );
};

export default App;
