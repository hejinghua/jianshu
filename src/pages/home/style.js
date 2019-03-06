import styled from 'styled-components'


export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 58px auto 0;
`;
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 6px;
  }
`;
export const HomeRight = styled.div`
  padding-top: 30px;
  width: 280px;
  float: right;
`;
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  margin-left: -18px;
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
`;
export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  .top-pic {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;
export const TopicMore = styled.a.attrs({
  href: 'https://www.jianshu.com/search?q=%E4%B8%93%E9%A2%98&page=1&type=collection'
})`
  color: #969696;
  float: left;
  cursor: pointer;
  display: block;
  font-size: 14px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  text-decoration: none;
`;
export const ListItem = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  word-wrap: break-word;
  .item-pic {
    width: 150px;
    display: block;
    height: 100px;
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    border-radius: 5px;
  }
  .link {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const ListInfo = styled.div`
  padding-right: 165px;
  .title {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: #333;
  }
  .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: #a5a5a5;
  border-radius: 20px;
  margin: 30px auto 60px;
  &:hover {
    background: #9b9b9b;
  }
`;

export const RecommendWrapper = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
`;
export const RecommendItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: block;
  width: 100%;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  overflow: hidden;
  .iconfont {
    font-size: 12px;
    margin-left: 5px;
  }
`;
export const DownloadApp = styled.a.attrs({
  href: 'https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click'
})`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  display: block;
  box-sizing: border-box;
  .downloadPic {
    width: 60px;
    height: 60px;
    opacity: .85;
    background-size: contain;
  }
`
export const DownloadInfo = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  margin-top: 10px;
  .title {
    font-size: 15px;
    color: #333;
    .iconfont {
      color: #000;
    }
  }
  .description {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`
export const WriterTitleWrapper = styled.div`
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
export const WriterItem = styled.div`
  margin-top: 15px;
  height: 47px;
  /* border: 1px solid #dcdcdc; */
  .avatar {
    float: left;
    height: 48px;
    width: 48px;
    margin-right: 10px;
    background-size: contain;
    border: 1px solid #ddd;
    border-radius: 50%;
    vertical-align: middle;
  }
  .follow {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
`
export const WriterName = styled.a`
  padding-top: 5px;
  margin-right: 60px;
  font-size: 14px;
  display: block;
  text-decoration: none;
  color: #333;
`
export const Writerdesc = styled.p`
  margin: 2px 0px 10px;
  font-size: 12px;
  color: #969696;
`
export const LookAll = styled.a`
  display: block;
  margin-top: 20px;
  padding: 7px 7px 7px 12px;
  text-align: center;
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-sizing: border-box;
  text-decoration: none;
`

export const BackTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 50px;
  width: 52px;
  height: 52px;
  line-height: 52px;
  text-align: center;
  border: 1px solid #dcdcdc;
  color: #969696;
  cursor: pointer;
`