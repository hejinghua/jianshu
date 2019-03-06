import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Carousel  } from "antd";
import 'antd/dist/antd.css';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import {actionCreators} from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from "./style";
class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomeWrapper >
        <HomeLeft>
          <Carousel autoplay='1500'>
            <div>
              <img className='banner-img' alt='' src= '//upload.jianshu.io/admin_banners/web_images/4581/9302a36a8c35d01a9744721749761abebcfab133.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
            </div>
            <div>
              <img className='banner-img' alt='' src= '//upload.jianshu.io/admin_banners/web_images/4587/37a0abd67a60ad056442c351f94bc781eb36c704.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
            </div>
            <div>
              <img className='banner-img' alt='' src= '//upload.jianshu.io/admin_banners/web_images/4583/40bca38a47b32bdc04a1997a6ac9e76951217c18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
            </div>
          </Carousel>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>/\</BackTop> : null
        }

      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.props.changeRecommendData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch)=> ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeRecommendData() {
    const action = actionCreators.getRecommendInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 300) {
      dispatch(actionCreators.toggleTopShow(true));
    }else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})
export default connect(mapState, mapDispatch)(Home);