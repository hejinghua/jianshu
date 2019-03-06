import styled from 'styled-components'

export const WriteWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: #f1f1f1;
  width: 100%;
  height: 100%;
  font-size: 14px;
  text-align: center;
  z-index: 999;
`
export const WriteContent = styled.div`
  width: 70%;
  height: 80%;
  margin: 100px auto 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  box-sizing: border-box;
  textarea {
    width: 100%;
    height: 100%;
    font-size: 16px;
    word-break: break-word;
    overflow:hidden;
    overflow-y: scroll;
    padding: 10px;
    box-sizing: border-box;
  }
  &::placeholder {
    color: #999;
  }
  .main::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 6px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  .main::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background: #dddee0;
  }

  .main::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 10px;
    background: rgb(244, 247, 254);
  }
`
export const Img = styled.img `
  position: absolute;
  top: 58px;
  margin-left: 50px;
  width: 100px;
  height: 46px;
  background-size: contain;
  z-index: 1000;
`