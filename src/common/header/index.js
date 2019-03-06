import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import { actionCreators as signActionCreators } from "../../pages/sign/store";
import {
  HeaderWrapper,
  WidthLimit,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoCon,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from './style';

class Header extends PureComponent {
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
    const newList = list.toJS(); //immutable对象转化为js对象
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 9; i < page * 9; i++) { // 显示当前页面列表index
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoCon>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch onClick={()=> handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              { pageList }
            </SearchInfoList>
          </SearchInfoCon>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBulr, list, login, logout, sign} = this.props;
    return (
      <HeaderWrapper>
        <WidthLimit>
          <Link to='/'>
            <Logo />
          </Link>
          <Nav>
            <NavItem className='left active'><i className='iconfont'>&#xe81f;</i>首页</NavItem>

            <a href='http://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps'>
              <NavItem className='left downApp'><i className='iconfont'>&#xe690;</i>下载APP</NavItem>
            </a>
            {/* {
              login ?
              <NavItem onClick={logout} className='right'>退出</NavItem> :
              <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
            }
            <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem> */}
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch className={ focused ? 'focused' : ''} onFocus={ () => handleInputFocus(list) } onBlur={ handleInputBulr }></NavSearch>
              </CSSTransition>
              <i className={ focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62b;</i>
              { this.getListArea() }
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to='/write'>
              <Button className='writting'>
                <i className='iconfont'>&#xe81a;</i>写文章
              </Button>
            </Link>
            {
              login || sign ? '' : <Link to='/sign'><NavItem className='right'><Button className='reg'>注册</Button></NavItem></Link>
            }
            {
              login || sign ?
              <Link to='/'><NavItem onClick={logout} className='right'>退出</NavItem></Link> :
              <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
            }
            <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
          </Addition>
        </WidthLimit>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login']),
    sign: state.getIn(['sign', 'sign'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBulr() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      }else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
      dispatch(signActionCreators.signout());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);