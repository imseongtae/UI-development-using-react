import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/Header'
import SearchForm from '~/components/SearchForm'
import SearchResultList, { SearchResultItem } from '@/components/SearchResultList'
import Tabs, { TabType } from '@/components/Tabs';
import KeywordList from '@/components/KeywordList';
import HistoryList from '@/components/HistoryList';

import store from '~/data/Store';


export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchResult, setSearchResult] = useState<SearchResultItem[] | []>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>(TabType.KEYWORD);

  const search = (searchKeyword: string) => {
    console.log(searchKeyword);
    setSearchKeyword(searchKeyword);
    const searchResult = store.search(searchKeyword);
    setSearchResult(searchResult);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    console.log('reset');
    setIsSubmitted(false);
    setSearchKeyword('');
  };

  const handleInputChange = (searchKeyword: string) => {
    setSearchKeyword(searchKeyword);
  };

  return (
    <>
      <Header title="검색" />
      <SearchForm
        value={searchKeyword} 
        onSubmit={() => search(searchKeyword)} 
        onReset={handleReset} 
        onChange={(searchKeyword) => handleInputChange(searchKeyword)}
      />
      <Tabs selectedTab={selectedTab} onChange={(selectedTab) => setSelectedTab(selectedTab)} />
      {/* 추천 및 최근 검색어 목록 */}
      {selectedTab === TabType.KEYWORD && <KeywordList onClick={searchKeyword => search(searchKeyword)} />}
      {selectedTab === TabType.HISTORY && <HistoryList onClick={searchKeyword => search(searchKeyword)} />}
      {/* 검색 결과 목록 */}
      {isSubmitted && <SearchResultList data={searchResult} />}
    </>
  );
};
