import React from 'react';

export interface SearchResultItem {
  id: number;
  name: string;
  imageUrl: string;
}

export interface SearchResultItems {
  data: Array<SearchResultItem>;
}

const SearchResult: React.FunctionComponent<SearchResultItems> = ({
  data = [],
}) => {
  if (data.length <= 0)
    return <div className="empty-box">검색 결과가 없습니다.</div>;

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <img src={item.imageUrl} alt={item.name} />
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default SearchResult;
