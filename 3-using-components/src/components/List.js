import React from 'react';

const List = ({ data = [], onClick, renderItem }) => {
  return (
    <ul className="list">
      {data.map((item, index) => (        
        <li key={index} onClick={() => onClick(item.keyword)}>
          {/* 함수 중 리액트 앨리먼트를 반환하는 함수를 render props라고 부른다 */}
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  )
}

export default List;
