import React, { useEffect, useState } from "react";
import List from '@/components/List';
import store from '@/data/Store';

interface keywordItem {
  id: number;
  keyword: string;
}

interface Props {
  onClick: (searchKeyword: string) => void;
}

const KeywordList: React.FunctionComponent<Props> = ({ onClick }) => {
  const [keywordList, setKeywordList] = useState<keywordItem[] | []>([]);

  useEffect(() => {
    const keywordList = store.getKeywordList();
    setKeywordList(keywordList);
  }, [keywordList]);  

  return (
    <List hasIndex={true} data={keywordList} onClick={onClick} />
  );
};

export default KeywordList;
