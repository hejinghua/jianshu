import React, { PureComponent, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LoginWrapper, LoginContent, LoginTitle, InputContent, Input, Button, MoreSign, MoreSignTitle, MoreSignUl, MoreSignItem, Img } from "./style";
import { actionCreators } from './store'
import Logo from '../../statics/login.png'

class Sign extends PureComponent {
  render() {
    const { signState } = this.props;
    if (!signState) {
      return (
        <Fragment>
          <LoginWrapper>
            <LoginContent>
              <LoginTitle>
                <Link to='/login' >登录</Link>
                <b>·</b>
                <Link to='/sign' className='active'>注册</Link>
              </LoginTitle>
              <InputContent>
                <Input placeholder='你的昵称' className='account' ref={(input) => {this.account = input}} />
                <i className='iconfont accountIcon'>&#xe629;</i>
              </InputContent>
              <InputContent>
                <Input placeholder='手机号' className='iphone' ref={(input) => {this.iphone = input}} />
                <i className='iconfont'>&#xe674;</i>
              </InputContent>
              <InputContent>
                <Input placeholder='设置密码' type='password' className='password' ref={(input) => {this.password = input}} />
                <i className='iconfont'>&#xe7b7;</i>
              </InputContent>
              <Button onClick={() => this.props.sign(this.account, this.iphone, this.password)}>注册</Button>
              <MoreSign>
                <MoreSignTitle>社交帐号直接注册</MoreSignTitle>
                <MoreSignUl>
                  <MoreSignItem>
                    <i className='iconfont greenIcon'>&#xe632;</i>
                  </MoreSignItem>
                  <MoreSignItem>
                    <i className='iconfont blueIcon'>&#xe65d;</i>
                  </MoreSignItem>
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
  signState: state.getIn(['sign', 'sign']),
})
const mapDispatch = (dispatch) => ({
  sign(accountElem, iphoneElem ,passwordElem) {
    if ((!accountElem.value && !iphoneElem.value && !passwordElem.value) || !accountElem.value) {
      alert('请输入昵称')
    } else if (!iphoneElem.value) {
      alert('请输入手机号')
    } else if (!passwordElem.value) {
      alert('请设置密码')
    } else {
      dispatch(actionCreators.signUp(accountElem.value, iphoneElem.value, passwordElem.value))
      // console.log(accountElem.value, iphoneElem.value, passwordElem.value);
    }
  }
})
export default connect(mapState, mapDispatch)(Sign);
