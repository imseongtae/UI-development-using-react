import React from 'react';

// SearchForm 컴포넌트는 엔터를 입력하면 폼이 제출된다는 것을 부모 측으로 알려야하는 상황이다. 
// 짐짓 부모-자식 방향으로의 데이터 흐름과 어긋나는 것 같지만
// 이를 역전시킬 수 있는 방법이 바로 콜백 함수이다. 
// props에는 어떠한 값이라도 사용할 수 있는데 함수도 전달할 수 있다. 
// Props에 전달한 함수를 자식 컴포넌트에서 호출하면 부모로 메세지를 전달할 수 있다.
const SearchForm = ({ value, onChange, onSubmit, onReset }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const handleReset = () => {
    onReset();
  };

  const handleChangeInput = (event) => {    
    onChange(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        autoFocus
        value={value}
        onChange={handleChangeInput}
      />
      {value.length > 0 && <button type="reset" className="btn-reset" />}      
    </form>
  );
};

export default SearchForm;

// class SearchForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       searchKeyword: '',
//     }
//   }

//   handleChangeInput(event) {
//     const searchKeyword = event.target.value;    
//     this.props.onChange(this.state.searchKeyword);
//   }
  
//   handleSubmit(event) {
//     event.preventDefault(); // 기본 동작을 막고,
//     // 외부에서 받은 onSubmit 함수 호출을 통해 searchKeyword를 콜백함수로 전달
//     this.props.onSubmit(this.state.searchKeyword); 
//   };  

//   render() {
//     const { onReset } = this.props;
//     return (
//       <form
//         onSubmit={event => this.handleSubmit(event)}
//         onReset={() => onReset()}
//       >
//         <input 
//           type="text"
//           placeholder="검색어를 입력하세요."
//           autoFocus
//           value={this.state.searchKeyword}
//           onChange={event => this.handleChangeInput(event)}
//         />

//       {!!this.state.searchKeyword.length && (<button type="reset" className="btn-reset" />) }
//       </form>
//     )
//   }
// };

