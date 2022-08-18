import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Button, Dropdown } from 'tdesign-react';
import { getPlaylistClassificationAction } from '../../../recommend/store/actionCreators';

const DrawDown = memo(() => {
  // store
  const { playlistClassification } = useSelector(
    (state: any) => ({
      playlistClassification: state.getIn(['recommend', 'playlistClassification']),
    }),
    shallowEqual,
  );
  const playlist = playlistClassification ?? [];
  const options = playlist.map((item, index) => {
    return {
      content: item.name,
      value: index,
    };
  });

  // hock
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaylistClassificationAction() as any);
  }, [dispatch]);
  // other

  return (
    <div>
      <Dropdown
        direction="right"
        hideAfterItemClick
        maxColumnWidth={100}
        maxHeight={300}
        minColumnWidth={10}
        options={options}
        placement="bottom-left"
        trigger="click"
      >
        <Button
          block={false}
          ghost={false}
          loading={false}
          shape="rectangle"
          type="button"
          variant="text"
        >
          更多分类
        </Button>
      </Dropdown>
    </div>
  );
});

export default DrawDown;
