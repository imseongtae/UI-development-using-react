/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { formatRelativeDate } from '../data/helpers.js';

interface ListItem {
  id: number;
  keyword: string;
  date?: Date;
}

interface Props {
  data: Array<ListItem>;
  hasIndex?: boolean;
  hasDate?: boolean;
  onClick: (keyword: string) => void;
  onRemove?: (keyword: string) => void;
}

// props 어떻게 설정하느냐에 따라 조금씩 다른 모양과 행위를 하는 컴포넌트 생성
const List: React.FunctionComponent<Props> = ({
  data = [],
  hasIndex,
  hasDate,
  onClick,
  onRemove,
}) => {
  const handleClickRemove = (
    event: React.MouseEvent<HTMLButtonElement>,
    keyword: string,
  ): void => {
    event.stopPropagation();
    if (onRemove) onRemove(keyword);
  };

  /**
   * Encountered two children with the same key, `-Infinity`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
   * 해당 에러를 해결하기 위해 key 값으로 id 대신 index 사용
   */
  return (
    <ul className="list">
      {data.map(({ keyword, date }, index) => (
        <li key={index} onClick={() => onClick(keyword)}>
          {/*  추천 검색어를 위한 옵션 */}
          {hasIndex && <span className="number">{index + 1}</span>}
          <span>{keyword}</span>

          {/*  최근 검색어를 위한 옵션 */}
          {hasDate && <span className="date">{formatRelativeDate(date)}</span>}
          {!!onRemove && (
            <button
              className="btn-remove"
              onClick={event => handleClickRemove(event, keyword)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
