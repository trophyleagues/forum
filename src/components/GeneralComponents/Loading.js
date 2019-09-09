import React from 'react';
import {useSelector} from 'react-redux';
import { ClipLoader } from 'react-spinners';
 
const Loading = () => {
  const loading = useSelector(state => state.front.loading)
  const override = `
  position: absolute;
  right: 0;
  left: 0;
  top: 20%;
  margin: 0 auto;
  z-index: 5;
  `

  return (
  <div className='sweet-loading'>
  <ClipLoader 
    css={override}
    sizeUnit={"px"}
    size={150}
    color={'#65b8f8'}
    loading={true} />
    </div>)
}

export default Loading;