import React, { useState } from 'react';
import './style.css';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';


import store from 'data/Store';

const data = store.getHistoryList();
console.log(data);

function App() {
  const [keyword, setKeword] = useState<string>('');  

  const search = (keyword: string) => {
    console.log(keyword);
  };

  const handleReset = () => {
    console.log('reset');    
  };  

  // const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {    
  //   setKeword(event.target.value);
  // }
  const handleChangeInput = (keyword: string) => {    
    setKeword(keyword);
  }

  return (
    <>
      <Header title="검색" />
      <SearchForm 
        value={keyword}
        onSubmit={() => search(keyword)}
        onReset={handleReset}
        onChange={(keyword: string) => handleChangeInput(keyword)}
      />
      {/* TODO */}
    </>
  );
}

export default App;
