import React from 'react';
import { AlarmToolTipWrapper, AlarmNoResult } from './styles';
import AlarmResultList from './AlarmResultList';

const ARROW_MOVEMENT = '85%';

const AlarmToolTip = ({ isVisible, setIsVisible, data, loading, error }) => {
  let content = '';
  let resultList = '';

  const clickClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  if (loading) {
    content = <span>로딩중.</span>;
  }
  if (error) {
    content = <span>에러가 발생했습니다.</span>;
  }
  if (data) {
    const { log } = data;
    if (log.length === 0) {
      content = <span>새로운 알림이 없습니다.</span>;
    } else {
      console.log(data);
      resultList = (
        <AlarmResultList
          alarmResults={log}
          clickClose={clickClose}
          onClick={clickClose}
        />
      );
    }
  }

  const resultNoList = (
    <AlarmNoResult onClick={clickClose}>{content}</AlarmNoResult>
  );

  return (
    <AlarmToolTipWrapper
      arrowStyle={{ left: ARROW_MOVEMENT }}
      onClick={clickClose}
    >
      {resultList || resultNoList}
    </AlarmToolTipWrapper>
  );
};

export default AlarmToolTip;
