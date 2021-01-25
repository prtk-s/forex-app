import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loader from '../Loader';

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const Table= ({tableData, headers, loading, contentAccess})=> {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <MaterialTable className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((tableHeader)=><TableCell>{tableHeader}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {loading ? (
            <TableRow>
              <TableCell align="center" colSpan={contentAccess.length || 2}>
                <Loader />
              </TableCell>
            </TableRow>
          ) : (
            tableData.map((currentRow, index) => (
              <TableRow key={index}>
                {contentAccess.map((currentAccessor, index)=>(
                  <TableCell align="left" key={`${index}_${currentAccessor}`}>
                    {currentRow[currentAccessor]}
                  </TableCell>
                ))}
              </TableRow>
            )))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
}

Table.defaultProps = {
  loading: false,
  tableData: [],
  headers: [],
  contentAccess: [],
};

export default Table;