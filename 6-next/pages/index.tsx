import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/Header'
import SearchForm from '~/components/SearchForm'


export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState<string>('');   

  const search = () => {
    console.log(searchKeyword);
    setSearchKeyword(searchKeyword);
  };

  const handleReset = () => {
    console.log('reset');
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
    </>
  );
};
