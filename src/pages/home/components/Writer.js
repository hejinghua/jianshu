import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from '../store';
import {
  WriterWrapper,
  DownloadApp,
  DownloadInfo,
  WriterTitleWrapper,
  WriterItem,
  WriterName,
  Writerdesc,
  SearchInfoSwitch,
  LookAll,
} from "../style";
import download from '../../../statics/download.png'

class Writer extends PureComponent {
  recommendListArea() {
    const { list, page} = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 5; i < page * 5; i++) { // 显示当前页面列表index
        pageList.push(newList[i])
      }
      return (
        pageList.map((item) => {
          return (
            <WriterItem key={item.id}>
              <a href={'https://www.jianshu.com/u/' + item.slug + '?utm_source=desktop&utm_medium=index-users'}>
                <img className='avatar' alt="" src={item.avatar_source} />
              </a>
              <div className='follow'>＋关注</div>
              <WriterName href={'https://www.jianshu.com/u/' + item.slug + '?utm_source=desktop&utm_medium=index-users'} target='_blank'>{item.nickname}</WriterName>
              <Writerdesc>写了{(item.total_wordage / 1000).toFixed(1)}k字 · {(item.total_likes_count / 1000).toFixed(1)}k喜欢</Writerdesc>
            </WriterItem>
          )
        })
      )
    }

  }
  render() {
    const { page, totalPage, handleChangePage } = this.props;
    return (
      <WriterWrapper>
        <DownloadApp>
          <img className='downloadPic' alt='' src={download} />
          <DownloadInfo>
            <div className='title'>下载简书手机App<i className='iconfont'>&#xe68b;</i></div>
            <div className='description'>随时随地发现和创作内容</div>
          </DownloadInfo>
        </DownloadApp>
        <WriterTitleWrapper>
          推荐作者
          <SearchInfoSwitch onClick={()=> handleChangePage(page, totalPage, this.spinIcon)}>
            <i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
        </WriterTitleWrapper>
        {
          this.recommendListArea()
        }

        <LookAll href='https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users' target='_blank'>查看全部<i className='iconfont'>&#xe68b;</i></LookAll>
      </WriterWrapper>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList']),
  page: state.getIn(['home', 'writerPage']),
  totalPage: state.getIn(['home', 'writerTotalPage']),
})
const mapDispatch = (dispatch)=> ({
  handleChangePage(page, totalPage, spin) {
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
    if (page < totalPage) {
      dispatch(actionCreators.changePage(page + 1));
    } else {
      dispatch(actionCreators.changePage(1));
    }
  }
})
export default connect(mapState, mapDispatch)(Writer);