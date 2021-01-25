import React, { useState, useEffect, useCallback } from 'react'
import { getRequest } from '../../api';
import Select from '../../component/Select';
import Loader from '../../component/Loader';

const CurrencyList = ({onChange}) => {
  const [currencyList, setCurrencyList] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(()=>{
    getRequest({url: '/list'}).
    then(({data})=>setCurrencyList([{code: 'none', name: 'Select Currency'}, ...data]))
    .then(()=>setLoader(false))
  }, []);

  return (
    <div>
      <Select
        options={currencyList}
        valueProp="code"
        keyProp="name"
        onChange={onChange}
        labelId="forex-currency"
        />
      {loader && <Loader />}
    </div>
  )
}

export default CurrencyList;
