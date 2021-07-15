import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/Header'
import SearchForm from '~/components/SearchForm'
import SearchResultList, { SearchResultItem } from '@/components/SearchResultList'
import Tabs, { TabType } from '~/components/Tabs'


import store from '~/data/Store';


export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchResult, setSearchResult] = useState<SearchResultItem[] | []>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>(TabType.KEYWORD);

  const search = () => {
    console.log(searchKeyword);
    setSearchKeyword(searchKeyword);
    const searchResult = store.search(searchKeyword);
    setIsSubmitted(true);
    setSearchResult(searchResult);
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
        onSubmit={() => search()} 
        onReset={handleReset} 
        onChange={(searchKeyword) => handleInputChange(searchKeyword)}
      />
      <Tabs selectedTab={selectedTab} onChange={(selectedTab) => setSelectedTab(selectedTab)} />
      {isSubmitted && <SearchResultList data={searchResult} />}
      
    </>
  );
};
