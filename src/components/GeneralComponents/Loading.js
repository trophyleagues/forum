import React from 'react';
import {useSelector} from 'react-redux';
import { MoonLoader } from 'react-spinners';
 
const Loading = () => {
  const loading = useSelector(state => state.front.loading)

  return <MoonLoader 
    sizeUnit={"px"}
    size={150}
    color={'#65b8f8'}
    loading={loading} />

}

export default Loading;