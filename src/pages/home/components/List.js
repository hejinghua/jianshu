import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const {list, getMoreList, page} = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return(
              <ListItem key={index}>
                <Link className='link' to={'/detail/' + item.get('id')}>
                  <img className='item-pic' src={item.get('imgUrl')} alt='' />
                </Link>
                <ListInfo>
                  <Link className='link' to={'/detail/' + item.get('id')}>
                    <h3 className='title'>{item.get('title')}</h3>
                  </Link>
                  <p className='abstract'>{item.get('abstract')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage']),
})
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
})
export default connect(mapStateToProps, mapDispatch)(List);