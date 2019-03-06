import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  z-index: 30;
  margin-bottom: 20px;
`
export const WidthLimit = styled.div`
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
`
export const Logo = styled.div`
  display: block;
  height: 56px;
  width: 100px;
  float: left;
  padding: 0;
  background: url(${logoPic});
  background-size: 100% 100%;
`
export const Nav = styled.div`
  width: 750px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`
export const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  font-size: 15px;
  color: #333;
  &.left {
    float: left;
    text-decoration: none;
  }
  &.downApp {
    &:hover {
      background-color: #eee;
    }
  }

  &.right {
    float: right;
    color: #969696;
    .iconfont {
      font-size: 20px;
    }
  }
  &.active {
    color: #ea6f5a;
    font-size: 18px;
  }
  .iconfont {
    font-size: 20px;
    vertical-align: middle;
  }
`
export const SearchWrapper = styled.div `
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    top: 12px;
    width: 30px;
    height: 30px !important;
    border-radius: 15px;
    line-height: 30px;
    padding: 0!important;
    color: #969696;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    &.focused {
      background: #969696;
      color: #fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  font-size: 14px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #EEEEEE;
  font-size: 14px;
  color: #5B5B5B;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
  }
  &.slide-enter {
    width: 240px;
    transition: all .2s linear;
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-exit {
    transition: all .2s linear;
  }
  &.slide-exit-active {
    width: 240px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 25px;
  top: 56px;
  width: 250px;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  background: #fff;
`
export const SearchInfoCon = styled.div`
  padding: 20px 20px 10px;
`
export const SearchInfoTitle = styled.div`
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a `
  display: inline-block;
  font-size: 12px;
  padding: 2px 6px;
  line-height: 20px;
  margin: 0px 10px 10px 0;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  width: 98px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  margin: 9px 5px 0 5px;
  border-radius: 20px;
  border: 1px solid #ec6149;
  display: inline-block;
  &.reg {
    float: right;
    color: #ec6149;
    width: 78px;
    height: 36px;
    border: 1px solid #ec6149;
  }
  &.writting {
    float: right;
    background: #ec6149;
    color: #fff;
    .iconfont {
      margin-right: 5px;
    }
  }
`
