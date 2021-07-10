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
          /**
           * Two children with the same key in React [duplicate]
           * https://stackoverflow.com/questions/52219852/two-children-with-the-same-key-in-react
           * 에러를 해결하기 위해 key값에 item.id 대신 index 사용
           */
          <li key={index} onClick={() => onClick(item.keyword)}>
            {this.renderItem(item, index)}
          </li>
        ))}
      </ul>
    );
  };
};

export default List;
