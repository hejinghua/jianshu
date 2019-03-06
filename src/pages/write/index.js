import React, { PureComponent, Fragment} from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { WriteWrapper, WriteContent, Img } from "./style";
import Logo from '../../statics/login.png'

class Write extends PureComponent {
  render() {
    const {loginState, sign} = this.props;
    if (loginState || sign) {
      return(
        <Fragment>
          <WriteWrapper>
            <WriteContent>
              <textarea wrap='soft' placeholder='开始写文章吧' className='main'>
              </textarea>
            </WriteContent>
          </WriteWrapper>
          <Link to='./'><Img src={Logo} alt=''/></Link>
        </Fragment>
      )
    }else {
      return <Redirect to='/login' />
    }
  }

}
const mapState = (state) => ({
  loginState: state.getIn(['login', 'login']),
  sign: state.getIn(['sign', 'sign'])
})
export default connect(mapState, null)(Write);