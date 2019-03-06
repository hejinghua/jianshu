import React, { Component } from "react";
import {
  RecommendWrapper,
  RecommendItem
} from "../style";
import recommend1 from '../../../statics/recommend1.png'
import recommend2 from '../../../statics/recommend2.png'
import recommend3 from '../../../statics/recommend3.png'
import recommend4 from '../../../statics/recommend4.png'
import recommend5 from '../../../statics/recommend5.png'

class Recommend extends Component {
  render() {
    return (
        <RecommendWrapper>
          <RecommendItem imgUrl={recommend1} href='https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop' />
          <RecommendItem imgUrl={recommend2} href='https://www.jianshu.com/trending/monthly?utm_medium=index-banner-s&utm_source=desktop' />
          <RecommendItem imgUrl={recommend3} href='https://www.jianshu.com/mobile/books?category_id=284'/>
          <RecommendItem imgUrl={recommend4} href='https://www.jianshu.com/publications' />
          <RecommendItem imgUrl={recommend5} href='https://www.jianshu.com/c/e048f1a72e3d?utm_medium=index-banner-s&utm_source=desktop' />
        </RecommendWrapper>
    )
  }
}

export default Recommend;