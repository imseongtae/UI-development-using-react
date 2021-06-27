import { formatRelativeDate } from "./js/helpers.js";
import store from "./js/Store.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
      searchResult: [],
      submitted: false,
    };
  }

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
    this.setState({ 
      searchResult,
      submitted: true,
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
            {this.state.submitted && searchResult }
          </div>
        </div>
      </>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('#app'));
console.log(<App />);
