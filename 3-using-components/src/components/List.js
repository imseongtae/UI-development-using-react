import { data } from 'browserslist';
import React from 'react';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  };

  // 추상 메서드를 호출해서 각 아이템을 그림
  renderItem(item, index) {
    throw 'renderItem() 을 구현하세요.'
  };

  render() {
    const { onClick } = this.props;
    const { data } = this.state;

    return (
      <ul className="list">
        {data.map((item, index) => (
          <li key={item.id} onClick={() => onClick(item.keyword)}>
            {this.renderItem(item, index)}
          </li>
        ))}
      </ul>
    );
  };
};

export default List;