import React, { useState } from 'react';
import './styles/main.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Tabs, { TabType } from './components/Tabs';
import SearchResult, { SearchResultItem } from './components/SearchResult';
import KeywordList from './components/KeywordList';
import HistoryList from './components/HistoryList';
import store from './data/Store';

const App: React.FunctionComponent = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<string>(TabType.KEYWORD);
  const [searchResult, setSearchResult] = useState<SearchResultItem[] | []>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const search = (searchKeyword: string): void => {
    console.log(searchKeyword);
    setSearchKeyword(searchKeyword);
    const searchResult: Array<SearchResultItem> | [] =
      store.search(searchKeyword);
    setIsSubmitted(true);
    setSearchResult(searchResult);
  };

  const handleReset = (): void => {
    console.log('reset');
    setSearchKeyword('');
    setIsSubmitted(false);
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
      {/* 추천 및 최근 검색어 목록 */}
      {selectedTab === TabType.KEYWORD && (
        <KeywordList onClick={searchKeyword => search(searchKeyword)} />
      )}
      {selectedTab === TabType.HISTORY && (
        <HistoryList onClick={searchKeyword => search(searchKeyword)} />
      )}
      {/* 검색 결과 목록 */}
      {isSubmitted && <SearchResult data={searchResult} />}
    </>
  );
};

export default App;
