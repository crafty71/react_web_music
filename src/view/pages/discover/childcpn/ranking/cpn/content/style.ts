import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background: #ffffff;
  margin-left: 10px;
  padding-top: 40px;
  padding-left: 10px;
  border-left: 0.5px solid #ccc;

  .header {
    padding: 0 100px;
    display: flex;
    .image {
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  .table {
    cursor: pointer;
  }
`;
