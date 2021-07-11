import React, { FunctionComponent } from 'react';

interface Props {
  value: string,
  onSubmit: () => void,
  onReset: () => void,
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onChange: (keyword: string) => void,
};

const SearchForm: FunctionComponent<Props> = ({ value, onSubmit, onReset, onChange }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  const handleReset = () => {
    onReset();
  }

  // event 객체 자체를 넘길 수도 있음, 받는 쪽에서 event.target.value에 접근해야 함
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {        
  //   onChange(event);
  // }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    onChange(newValue);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <input
        type="text"      
        placeholder="검색어를 입력하세요"
        autoFocus
        value={value}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default SearchForm;
