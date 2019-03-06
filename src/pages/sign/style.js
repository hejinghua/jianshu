import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: #f1f1f1;
  width: 100%;
  height: 100%;
  font-size: 14px;
  text-align: center;
  z-index: 999;
`
export const Img = styled.img`
  position: absolute;
  top: 56px;
  margin-left: 50px;
  width: 100px;
  height: 46px;
  background-size: contain;
  z-index: 1000;
`
export const LoginContent = styled.div `
  width: 400px;
  margin: 100px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  box-sizing: border-box;
`
export const LoginTitle = styled.div`
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
  a{
    text-decoration: none;
    padding: 10px;
    color: #969696;
    font-size: 18px;
  }
  a:hover {
    border-bottom: 2px solid #ea6f5a;
  }
  .active {
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
  b {
    padding: 10px;
  }
`
export const InputContent = styled.div`
  margin-bottom: 0;
  position: relative;
  width: 100%;
  .password {
    border-bottom: 1px solid #c8c8c8;
  }
  .account {
    border-radius: 4px 4px 0 0;
    border-bottom: none;
  }
  .iphone {
    border-radius: 0;
    border-bottom: none;
  }
  i{
    position: absolute;
    top: 14px;
    left: 10px;
    font-size: 18px;
    color: #969696;
    vertical-align: middle;
  }
  .accountIcon {
    font-size: 25px;
    left: 8px;
  }
`
export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border: 1px solid #c8c8c8;
  padding: 4px 12px 4px 35px;
  background-color: hsla(0,0%,71%,.1);
  border-radius: 0 0 4px 4px;
  box-sizing: border-box;
  &::placeholder {
    color: #999;
  }
`
export const Button = styled.button `
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3db922;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
  box-sizing: border-box;
`
export const MoreSign = styled.div`
  margin-top: 50px;
`
export const MoreSignTitle = styled.div`
  position: relative;
  margin: 0 0 10px;
  font-size: 12px;
  color: #b5b5b5;
  &:before , &:after{
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 60px;
    top: 5px;
  }
  &:before {
    left: 30px;
  }
  &:after {
    right: 30px;
  }
`
export const MoreSignUl = styled.ul`
  /* margin-bottom: 10px; */
  list-style: none;
  margin: 0 auto 10px;
  padding: 0px;
`

export const MoreSignItem = styled.li`
  margin: 0 5px;
  display: inline-block;
  line-height: 20px;
  vertical-align: top;
  .iconfont {
    width: 50px;
    height: 50px;
    line-height: 50px;
    display: block;
    font-size: 28px;
    cursor: pointer;
  }
  .greenIcon {
    color: #00BB29;
    font-size: 38px;
  }
  .blueIcon {
    color: #498AD5;
    font-size: 25px;
  }
`