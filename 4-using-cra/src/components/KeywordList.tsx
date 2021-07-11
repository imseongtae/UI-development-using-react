import React, { useState, useEffect } from "react";
import List from './List';
import store from 'data/Store';

interface KeywordListItem {
  id: number; keyword: string;
};

interface Props {  
  onClick: (keyword: string) => void;  
};

const KeywordList: React.FunctionComponent<Props> = ({ onClick }) => {

  const [keywordList, setKeywordList] = useState<KeywordListItem[] | []>([]);

  useEffect(() => {
    // useEffect 안에서 사용하는 상태나 props 가 있다면, useEffect 의 deps 에 넣는게 규칙
    const keywordList: KeywordListItem[] | [] = store.getKeywordList();    
    setKeywordList(keywordList);
    // return () => {
    //   console.log('keywordList 가 바뀌기 전..');
    //   console.log(keywordList);
    // };
  }, [keywordList])
  
  return (
    <List
      hasIndex={true}      
      data={keywordList}
      onClick={onClick}
    />
  );
};


export default KeywordList;
