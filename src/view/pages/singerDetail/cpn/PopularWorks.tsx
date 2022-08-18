import React, { memo} from 'react';
import { useSelector } from 'react-redux';
import { ISingerSongList } from '@/types/singer/singerSongList';
import { PrimaryTable} from 'tdesign-react';

const PopularWorks = memo(()=>{
  const { singerSongList }:{ singerSongList: ISingerSongList} = useSelector(
    (state:any) => ({
      singerSongList: state.getIn(['singer','singerSongList'])
    })
  )



  const data = singerSongList?.hotSongs?.map((item,index)=>{
    return {
      index: index + 1 ,
      singName: item?.name,
      length: item?.h?.br,
      album: item?.al?.name
    }
  }) ?? []
  return <div>
    <PrimaryTable
      columns={[
        {
          colKey: 'index',
          title: '排名',
          width: '80'
        },
        {
          colKey: 'singName',
          title: '歌名'
        },
        {
          colKey: 'length',
          title: '时长'
        },
        {
          colKey: 'album',
          title: '专辑'
        }
      ]}
      data={data}
      size="medium"
      tableLayout="fixed"
      verticalAlign="middle"
      rowKey={'id'}
    />
  </div>
})

export default PopularWorks
