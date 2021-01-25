import React, { useCallback, useState } from 'react'
import CurrencyList from '../CurrencyList';
import { getRequest } from '../../api';
import List from '../List';
import './forex.css';

const headers= [
  'Currency',
  'Rate'
]

const Forex = () => {
  const [tableData, setTableData] = useState([]);
  const [base, setBase] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = useCallback(({target:{value: base}})=>{
    if (base !== 'none') {
      setLoading(true)
      getRequest({url: `/rate/${base}`})
      .then((response)=> {
        const { data= {}} = response;
        const { rates={}, base, date} = data || {};
        const tableData= [];
        Object.keys(rates).forEach((currentCode)=>{
          tableData.push({
            code: currentCode,
            value: rates[currentCode]
          })
          if (currentCode === base) {
            setBase(currentCode)
          }
        });
        setTableData([...tableData]);
        setLoading(false);
      })
    }
  
  }, []);
  
  return (
    <div className="forex-container">
      <div className="forex-title">Foreign Exchange Rate</div>
      <div className="mr-tp-20">
      <div className="currency-container">
        <CurrencyList
          onChange={onChange}
        />
        {base && (<div className="mr-tp-20 base-value">
          <div>{`Currency Rate w.r.t (${base})`}</div>
        </div>)}
        <List
          headers={headers}
          loading={loading}
          tableData={tableData}
          contentAccess={[
            'code',
            'value'
          ]}
        />
      </div>
      </div>
    </div>
  )
}

export default Forex;
