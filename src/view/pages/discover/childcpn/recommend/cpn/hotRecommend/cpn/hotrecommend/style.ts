import styled from 'styled-components';

export const HotRecommendWrapper = styled.div`
  .hotRecommend {
    margin-bottom: 0px;
  }
  .hotRecommend .card {
    margin-bottom: 10px;
  }
  .hotRecommend .card .image {
    width: 100%;
    height: 100%;
  }
  .hotRecommend .card .rescript {
    padding-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .hotRecommend .card .playCount {
    font-size: 12px;
    color: #ccc;
  }
`;
