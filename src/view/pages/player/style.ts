import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  .avatar {
    padding: 50px 0 0 0;
    display: flex;
    justify-content: center;
    .avatarItem {
      margin-top: 50px;
    }
    border-right: 1px solid #ccc;
  }
  .content {
    padding: 50px 0 50px 0;
    background: #ffffff;
    display: flex;
    justify-content: center;
    .songInformation {
      margin-right: 200px;
      h2 {
        margin-bottom: 20px;
      }
    }
  }
  .comments {
    h2 {
      padding: 30px;
    }
    padding: 0 20px;
    background: #ffffff;
    margin-bottom: 150px;
  }
  .player {
    width: 78.5%;
    position: fixed;
    bottom: 0;
  }
`;
