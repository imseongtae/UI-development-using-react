class App extends React.Component {
  constructor() {
    super();
    this.state = {searchKeyword: ''};
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
    this.setState({ searchKeyword: '' });
  }
  handleReset() {
    this.setState({searchKeyword: ''});
    console.log('TODO: handleReset');
  }

  render() {     
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
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
        </div>
      </>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('#app'));
console.log(<App />);
