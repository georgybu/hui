import styled from 'styled-components';


const style = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    margin: 0 0 16px 0;
    border: 1px solid #ebedf0;
    border-radius: 4px;
    transition: all .2s;
    background-color: #fff;

    .example {
      padding: 42px 24px 50px;
      border-bottom: 1px solid #ebedf0;
    }

    .meta {
      position: relative;
    }

    .title {
      position: absolute;
      top: -16px;
      margin-right: 20px;
      padding: 1px 8px;
      color: #777;
      background: #fff;
      font-size: 1.3rem;
    }

    .info {
      padding: 20px 30px;
    }

    pre {
      margin: 0;
      background-color: #f8f8f8;
      padding: 20px;
    }

    .actions {
      text-align: center;
      padding: 10px 30px;
      border-top: 1px dashed #f1f1f1;

      span[tabIndex] {
        cursor: pointer;
      }
    }

    .code {
      display: none;
    }
`;

export default style;
