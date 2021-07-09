import React from 'react';

import Header from './components/Header'
import SearchForm from './components/SearchForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
    }
  }

  handleChangeInput(value) {    
    this.setState({ searchKeyword: value });
  }  
  search() {
    // console.log();
    console.log(this.state.searchKeyword);
  }
  handleReset() {
    this.setState({ searchKeyword: '' })
  }

  render() {
    return (
      <>
        <Header title="검색" />
        <SearchForm
          value={this.state.searchKeyword}
          onChange={value => this.handleChangeInput(value)}
          onSubmit={() => this.search()} 
          onReset={() => this.handleReset()}
        />
        TODO: App 컴포넌트
      </>
    )
  }
};

export default App;