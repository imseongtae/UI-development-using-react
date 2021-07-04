import { formatRelativeDate } from "./js/helpers.js";
import store from "./js/Store.js";

// 선택된 탭 식별할 때 변경 가능성이 있는 이름보다 고유한 키를 정의하는 것이 코드 유지보수면에서 더 나음
const TabType = {
  KEYWORD: 'KEYWORD',
  HISTORY: 'HISTORY',
}

const TabLabel = {
  [TabType.KEYWORD]: '추천 검색어',
  [TabType.HISTORY]: '최근 검색어',
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
      keywordList: [],
      historyList: [],
    };
  }

  componentDidMount() {
    // const keywordList = store.getKeywordList();
    const keywordList = store.getKeywordList();
    const historyList = store.getHistoryList();
    console.log('componentDidMount()');
    this.setState({ 
      keywordList,
      historyList,
    })
  };

  handleChangeInput(event) {
    const searchKeyword = event.target.value;
    if (searchKeyword.length === 0) return this.handleReset();
    // 항상 컴포넌트의 상태를 갱신하려면 setState() 메서드를 사용하자!
    this.setState({ searchKeyword });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const text = event.target.value;
    console.log('handleSubmit:', this.state.searchKeyword);
    // this.setState({ searchKeyword: '' });
    this.search(this.state.searchKeyword);
  }
  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    const historyList = store.getHistoryList();
    this.setState({ 
      searchResult,
      submitted: true,
      searchKeyword,
      historyList
     });
  }

  handleReset() {
    this.setState({
      searchKeyword: '',
      searchResult: [],
      submitted: false,
    });
    console.log('TODO: handleReset');
  }

  handleClickRemoveHistory(event, keyword) {
    event.stopPropagation();
    store.removeHistory(keyword);
    const historyList = store.getHistoryList();
    this.setState({ historyList })
  }

  render() {
    const searchForm = (
      <form 
        onSubmit={event => this.handleSubmit(event)}
        onReset={() => this.handleReset()}
      >
        <input 
          type="text"
          placeholder="검색어를 입력하세요."
          autoFocus
          value={this.state.searchKeyword}
          onChange={event => this.handleChangeInput(event)}
        />
        {/* 2번째 방법 */}
        {/* {this.state.searchKeyword.length > 0 ? (
          <button type="reset" className="btn-reset" />
        ) : null} */}

        {/* 3번째 방법 */}
        {/* && 연산자는 왼쪽 피연산자가 참으로 평가되어야만 오른쪽 피연산자를 평가한다. */}
        {!!this.state.searchKeyword.length && (<button type="reset" className="btn-reset" />) }
      </form>
    )

    const searchResult = (
      this.state.searchResult.length
        ? (
          <ul>
            {this.state.searchResult.map(({ id, imageUrl, name }) => (
              <li key={id} >
                <img src={imageUrl} />
                <p>{name}</p>
              </li>
            ))}
          </ul>
        )
        : <div>검색 결과가 없습니다</div>
    );

    const keywordList = (
      <ul className="list">
        {this.state.keywordList.map((item, index) => (
          <li key={item.id} onClick={() => this.search(item.keyword)}>
            <span className="number">{index + 1}</span>
            <span>{item.keyword}</span>
          </li>
        ))}
      </ul>
    );

    const historyList = (
      <ul className="list">
        {this.state.historyList.map(({ id, keyword, date }) => (
          <li key={id} onClick={() => this.search(keyword)}>
            <span>{keyword}</span>
            <span className="date">{formatRelativeDate(date)}</span>
            <button className="btn-remove" onClick={event => this.handleClickRemoveHistory(event, keyword)} />
          </li>
        ))}
      </ul>
    );

    const tabs = (
      <>
        <ul className="tabs">
          {/* 1 */}
          {Object.values(TabType).map(tabType => (
            <li 
              key={tabType}
              className={this.state.selectedTab === tabType ? 'active' : ''}
              onClick={() => this.setState({ selectedTab: tabType })}
            >
              {TabLabel[tabType]}
            </li>          
          ))}        
        </ul>
        {/* {this.state.selectedTab === TabType.KEYWORD && <>{'TODO: 추천 검색어'}</>} */}
        {this.state.selectedTab === TabType.KEYWORD && keywordList}
        {this.state.selectedTab === TabType.HISTORY && historyList}
      </>      
    )        
    

    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          {/* 검색 입력 필드 */}
          {searchForm}          

          {/* 검색 결과 */}
          <div className="content">
            {/* && 연산자로 조건부 렌더링하던 것을 삼항 연산자 사용으로 변경 */}
            {/* {this.state.submitted && searchResult } */}
            {this.state.submitted ? searchResult : tabs} {/* 1 */}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
console.log(<App />);
