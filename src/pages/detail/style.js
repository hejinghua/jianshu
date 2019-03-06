import styled from 'styled-components'


export const DetailWrapper = styled.div `
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 40px;
  padding-top: 58px;
`;
export const Header = styled.div`
  margin: 20px 0 0;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
  color: #333;
`
export const Content = styled.div `
  color: #2f2f2f;
  word-break: break-word!important;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  p {
    margin: 0 0 25px 0;
  }
  img {
    padding-bottom: 25px;
    width: 700px;
    margin-left: -40px;
    text-align: center;
    max-width: 700px;
    max-height: 389px;
    background-size: contain;
    box-sizing: border-box;
  }
`
export const AuthorWrapper = styled.div`
  margin: 30px 0 40px;
  img{
    width: 48px;
    height: 48px;
    vertical-align: middle;
    display: inline-block;
    background-size: contain;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
`
export const AuthorInfo = styled.div`
  vertical-align: middle;
  display: inline-block;
  margin-left: 8px;
  .name {
    margin-right: 3px;
    font-size: 16px;
    vertical-align: middle;
    a{
      text-decoration: none;
      color: #333;
    }
  }
  .fllow {
    border-color: #42c02e;
    border-radius: 40px;
    color: #fff;
    background-color: #42c02e;
    font-size: 12px;
    padding: 2px 5px;
  }
`
export const AuthorMeta = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: #969696;
  span{
    padding-right: 5px;

  }
`