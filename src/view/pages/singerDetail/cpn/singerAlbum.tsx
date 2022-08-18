import { memo } from 'react';

import { Row, Col, Card, Comment, Divider } from 'tdesign-react';
import { useSelector } from 'react-redux';
import { ISingerAlbum } from '@/types/singer/singerAlbum';
import moment from 'moment';



const SingerAlbum = memo(()=>{
  const { singerAlbum }:{ singerAlbum: ISingerAlbum} = useSelector(
    (state:any) => ({
      singerAlbum: state.getIn(['singer','singerAlbum'])
    })
  )
  console.log(moment(1591891200000).format('YYYY年MM月DD日'));
  return <div>
    <Row gutter={16}>
      {
        singerAlbum?.hotAlbums?.map((item)=>{
          return (
            <Col span={3}>
              <div>
                <Card
                  bordered
                  theme="poster2"
                  cover={item?.blurPicUrl}
                  footer={
                    <Comment author={item?.name} content={moment(item?.publishTime).format('YYYY年MM月DD日')}></Comment>
                  }
                ></Card>
              </div>
              <Divider/>
            </Col>

          )
        })
      }

    </Row>
  </div>
})

export default SingerAlbum;
