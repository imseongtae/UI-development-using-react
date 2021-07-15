import React, { useEffect, useState } from "react";
import List from '@/components/List';
import store from '@/data/Store';

interface historyItem {
  id: number;
  keyword: string;
};

interface Props {
  onClick: (searchKeyword: string) => void;
};

const HistoryList: React.FunctionComponent<Props> = ({ onClick }) => {
  const [historyList, setHistoryList] = useState<historyItem[] | []>([]);

  useEffect(() => {
    const historyList = store.getHistoryList();
    setHistoryList(historyList);
  }, [historyList]);  

  const handleRemoveItem = (keyword: string): void => {
    store.removeHistory(keyword);
    const historyList = store.getHistoryList();
    setHistoryList(historyList);
  };

  return (
    <List 
      hasDate={true}
      data={historyList}
      onClick={onClick}
      onRemove={keyword => handleRemoveItem(keyword)}
    />
  );
};

export default HistoryList;
