import React, { Component } from "react";
import { connect } from "react-redux";
import { DetailWrapper, Header, AuthorWrapper, AuthorInfo, AuthorMeta, Content } from "./style";
import { actionCreators } from './store'

class Detail extends Component {
  render() {
    const { title, content} = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <AuthorWrapper>
          <img alt=' ' src='//upload.jianshu.io/users/upload_avatars/7309859/25bef249-606b-41e9-a4da-44b097f51cab.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96' />
          <AuthorInfo>
            <span className='name'><a href='https://www.jianshu.com/u/2a6c692c7ebc'>泽稷CFA菌</a></span>
            <span className='fllow'>＋ 关注</span>
            <AuthorMeta>
              <span>2018.10.24 18:59*</span>
              <span>字数 3350</span>
              <span>阅读 1905</span>
              <span>评论 3</span>
              <span>喜欢 27</span>
            </AuthorMeta>
          </AuthorInfo>
        </AuthorWrapper>
        <Content dangerouslySetInnerHTML={{__html:content}} />
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
  }
}
const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});
const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});
export default connect(mapState, mapDispatch)(Detail);