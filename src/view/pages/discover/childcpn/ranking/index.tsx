import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Layout, Pagination } from 'tdesign-react';
import Contents from './cpn/content/Content';
import LeftAside from './cpn/leftAside/leftAside';
import { getRankListCommentsAction, getRankListDetailAction } from './store/actionCreators';
const { Content, Aside } = Layout;

const Ranking = memo(() => {
  const { state }: any = useLocation();
  const [offset, setOffset] = useState(1);

  const { rankListComments } = useSelector(
    (state: any) => ({
      rankListComments: state.getIn(['rankList', 'rankListComments']),
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRankListDetailAction(state?.id) as any);
    dispatch(getRankListCommentsAction(state?.id, offset) as any);
  }, [dispatch, offset, state]);

  const onChange = pageInfo => {
    setOffset(pageInfo.current);
  };
  return (
    <div className="wrap-v2 ">
      <Layout>
        <Aside>
          <LeftAside />
        </Aside>
        <Layout>
          <Content style={{ background: '#ffffff' }}>
            <Contents />
            <Pagination
              pageEllipsisMode="mid"
              showFirstAndLastPageBtn={false}
              showJumper={false}
              showPageNumber
              showPageSize={false}
              showPreviousAndNextBtn={false}
              size="medium"
              theme="default"
              total={rankListComments?.total}
              totalContent={false}
              onChange={onChange}
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
});

export default Ranking;
