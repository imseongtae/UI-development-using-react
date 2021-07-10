import React from 'react';
import List from './List';
import store from '../js/Store';
import { formatRelativeDate } from '../js/helpers';

class HistoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      historyList: [],
    };
  };

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const historyList = store.getHistoryList();
    this.setState({ historyList });
  }

  handleClickRemoveHistory(event, keyword) {
    event.stopPropagation();
    store.removeHistory(keyword);
    this.fetch();
  }

  render() {
    const { historyList } = this.state;
    const { onClick } = this.props;

    return (
      <List 
        data={historyList}
        onClick={onClick}
        renderItem={(item, index) => (
          <>
            <span>{item.keyword}</span>
            <span className="date">{formatRelativeDate(item.date)}</span>
            <button className="btn-remove" onClick={event => this.handleClickRemoveHistory(event, item.keyword)} />
          </>
        )}
      />      
    )
  }
};

export default HistoryList;
