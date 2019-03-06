import React, { PureComponent, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LoginWrapper, LoginContent, LoginTitle, InputContent, Input, RememberBtn, SpanText, Button, MoreSign, MoreSignTitle, MoreSignUl, MpreSignItem, Img } from "./style";
import { actionCreators } from './store'

import Logo from '../../statics/login.png'

class Login extends PureComponent {
  render() {
    const { loginState } = this.props;
    if (!loginState) {
      return (
        <Fragment>
          <LoginWrapper>
            <LoginContent>
              <LoginTitle>
                <Link to='/login' className='active' >登录</Link>
                <b>·</b>
                <Link to='/sign' >注册</Link>
              </LoginTitle>
              <InputContent>
                <Input placeholder='手机号或邮箱' className='account' ref={(input) => {this.account = input}} />
                <i className='iconfont accountIcon'>&#xe629;</i>
              </InputContent>
              <InputContent>
                <Input placeholder='密码' type='password' className='password' ref={(input) => {this.password = input}} />
                <i className='iconfont'>&#xe7b7;</i>
              </InputContent>
              <RememberBtn>
                <Input type='checkBox' defaultChecked />
                <span>记住我</span>
              </RememberBtn>
              <SpanText>登录遇到问题?</SpanText>
              <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
              <MoreSign>
                <MoreSignTitle>社交帐号登录</MoreSignTitle>
                <MoreSignUl>
                  <MpreSignItem>
                    <i className='iconfont redIcon'>&#xe600;</i>
                  </MpreSignItem>
                  <MpreSignItem>
                    <i className='iconfont greenIcon'>&#xe632;</i>
                  </MpreSignItem>
                  <MpreSignItem>
                    <i className='iconfont blueIcon'>&#xe65d;</i>
                  </MpreSignItem>
                </MoreSignUl>
              </MoreSign>
            </LoginContent>
          </LoginWrapper>
          <Link to='/'><Img src={Logo} alt=''/></Link>
        </Fragment>
      )
    }else {
      return <Redirect to='/' />
    }
  }

}
const mapState = (state) => ({
  loginState: state.getIn(['login', 'login']),
})
const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    if ((!accountElem.value && !passwordElem.value) || !accountElem.value) {
      alert('请输入手机号或邮箱')
    } else if (!passwordElem.value) {
      alert('请输入密码')
    }else {
      dispatch(actionCreators.loginCheck(accountElem.value, passwordElem.value))
      // console.log(accountElem.value, passwordElem.value);
    }
  }
})
export default connect(mapState, mapDispatch)(Login);