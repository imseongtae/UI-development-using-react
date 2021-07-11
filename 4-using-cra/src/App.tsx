import React, { useState } from 'react';
import './style.css';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';
import SearchResult, { SearchResultItem } from 'components/SearchResult';
import Tabs, { TabType } from 'components/Tabs';

import store from 'data/Store';

const data = store.getHistoryList();
console.log(data);

const App:React.FunctionComponent = () => {
  const [searchKeyword, setSearchKeword] = useState<string>('');
  const [searchResult, setSearchResult] = useState<SearchResultItem[] | []>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>(TabType.KEYWORD);
  

  const search = (keyword: string) => {
    console.log(keyword);
    const searchResult: SearchResultItem[] | [] = store.search(keyword);
    setIsSubmitted(true);
    setSearchResult(searchResult);
  };

  const handleReset = () => {
    console.log('reset');
    setSearchKeword('');
    setIsSubmitted(false);
  };

  // const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {    
  //   setKeword(event.target.value);
  // }
  const handleChangeInput = (keyword: string) => {    
    setSearchKeword(keyword);
  };  

  return (
    <>
      <Header title="검색" />
      <SearchForm 
        value={searchKeyword}
        onSubmit={() => search(searchKeyword)}
        onReset={handleReset}
        onChange={(searchKeyword: string) => handleChangeInput(searchKeyword)}
      />
      {/* TODO */}
      <Tabs selectedTab={selectedTab} onChange={selectedTab => setSelectedTab(selectedTab)} />

      {isSubmitted && <SearchResult data={searchResult} />}
    </>
  );
}

export default App;
