import React, { useState, useEffect } from 'react';
import List from './List';
import store from '../data/Store';

interface HistoryListItem {
  id: number;
  keyword: string;
  date: Date;
}

interface Props {
  onClick: (keyword: string) => void;
}

const HistoryList: React.FunctionComponent<Props> = ({ onClick }) => {
  const [historyList, setHistoryList] = useState<HistoryListItem[] | []>([]);

  useEffect(() => {
    const historyList = store.getHistoryList();
    setHistoryList(historyList);
    // useEffect 안에서 사용하는 상태나 props 가 있다면, useEffect 의 deps 에 넣는게 규칙
  }, [historyList]);

  const handleRemove = (keyword: string): void => {
    console.log(keyword);
    store.removeHistory(keyword);
    const historyList = store.getHistoryList();
    setHistoryList(historyList);
  };

  return (
    <List
      data={historyList}
      hasDate={true}
      onClick={onClick}
      onRemove={keyword => handleRemove(keyword)}
    />
  );
};

export default HistoryList;
