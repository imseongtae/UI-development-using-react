class App extends React.Component {
  constructor() {
    super();
    this.state = {searchKeyowrd: ''};
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value
    // 항상 컴포넌트의 상태를 갱신하려면 setState() 메서드를 사용하자!
    this.setState({ searchKeyword });
  }

  render() {
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form>
            <input 
              type="text"
              placeholder="검색어를 입력하세요."
              autoFocus
              value={this.state.searchKeyword}
              onChange={event => this.handleChangeInput(event)}
            />
            {/* <input
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
              value={this.state.searchKeyword}
              onChange={(event) => this.handleChangeInput(event)}
            /> */}
          </form>
        </div>
      </>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('#app'));
console.log(<App />);
