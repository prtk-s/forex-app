import React, { useCallback } from 'react'
import Table from '../../component/Table';

const List = ({loading, headers, tableData, contentAccess}) => {
  return (
        <div className="mr-tp-20">
          <Table
            headers={headers}
            loading={loading}
            tableData={tableData}
            contentAccess={contentAccess}
          />
        </div>
  )
}

export default List;
