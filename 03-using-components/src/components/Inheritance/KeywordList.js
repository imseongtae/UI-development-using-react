import React from 'react';
import List from './List';
import store from '../js/Store';

class KeywordList extends List {
  componentDidMount() {
    // state.data에는 빈 배열이 초기값인데, 외부에서 데이터를 가져오기 위해 생명 주기 메소드 componentDidMount()를 사용
    const data = store.getKeywordList();
    this.setState({ data })
  }
  
  // 상위 클래스(List)가 가지고 있는 메서드(renderItem)를 하위 클래스가 재정의해서 사용 - 오버라이딩
  renderItem(item, index) {
    return (
      <>
        <span className="number">{index + 1}</span>
        <span>{item.keyword}</span>
      </>
    );
  };
};

export default KeywordList;
