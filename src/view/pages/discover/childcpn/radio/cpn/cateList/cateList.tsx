import { Category } from '@/types/radio/cateList';
import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Col, Row } from 'tdesign-react';
import { CateListWrapper } from './style';

const CateList = memo(() => {
  const { cateList } = useSelector(
    (state: any) => ({
      cateList: state.getIn(['radio', 'cateList']),
    }),
    shallowEqual,
  );
  return (
    <CateListWrapper>
      <Row gutter={16}>
        {cateList?.map((item: Category) => {
          return (
            <Col span={2}>
              <div className="cateListItem">
                <img src={item.picUWPUrl} alt="" />
              </div>
              <div>{item.name}</div>
            </Col>
          );
        })}
      </Row>
    </CateListWrapper>
  );
});

export default CateList;
