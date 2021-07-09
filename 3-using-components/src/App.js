import React from 'react';
import Header from './components/Header'
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult.jsx';

import store from './js/Store';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
      searchResult: [],
      submitted: false,      
    }
  }

  handleChangeInput(value) {
    // 검색어를 모두 지우면 reset 이벤트 발생
    // if (value.length === 0) this.handleReset();
    this.setState({ searchKeyword: value });
  }

  search(searchKeyword) {
    console.log(searchKeyword);

    const searchResult = store.search(searchKeyword);
    this.setState({
      searchResult,
      submitted: true,
    });    
  }

  handleReset() {
    this.setState({ 
      searchKeyword: '',
      searchResult: [],
      submitted: false, // 검색결과의 출력 여부는 submitted 상태가 관리
    });
  };

  render() {
    const { searchKeyword, searchResult, submitted, selectedTab } = this.state;

    return (
      <>
        <Header title="검색" />
        <SearchForm
          value={searchKeyword}
          onChange={value => this.handleChangeInput(value)}
          onSubmit={() => this.search(searchKeyword)}
          onReset={() => this.handleReset()}
        />        
        {submitted && <SearchResult data={searchResult} />}
      </>
    )
  }
};

export default App;