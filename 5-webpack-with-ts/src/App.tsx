import React, { useState } from 'react';
import './styles/main.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Tabs, { TabType } from './components/Tabs';

const App: React.FunctionComponent = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<string>(TabType.KEYWORD);
  // const [searchResult, setSearchResult] = useState<SearchResultItem[] | []>([]);
  // const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const search = (searchKeyword: string): void => {
    console.log(searchKeyword);
    setSearchKeyword(searchKeyword);
  };

  const handleReset = (): void => {
    console.log('reset');
    setSearchKeyword('');
    // setIsSubmitted(false);
  };

  const handleChangeInput = (searchKeyword: string): void => {
    setSearchKeyword(searchKeyword);
  };

  return (
    <>
      <Header title="검색" />
      <SearchForm
        value={searchKeyword}
        onSubmit={() => search(searchKeyword)}
        onReset={handleReset}
        onChange={searchKeyword => handleChangeInput(searchKeyword)}
      />
      <Tabs
        selectedTab={selectedTab}
        onChange={selectedTab => setSelectedTab(selectedTab)}
      />
      <div>App with TypeScript</div>
    </>
  );
};

export default App;
