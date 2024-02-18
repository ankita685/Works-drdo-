



import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { firebaseApp } from '../../firebase-config';
import Stack from "@mui/material/Stack";
import Swal from 'sweetalert2';
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import { remove } from 'firebase/database';
import { generateAndDownloadExcel } from '../ExcelExportUtils';





const database = getDatabase(firebaseApp);

export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [completedStatus, setCompletedStatus] = useState({});

  const handleExportToExcel = () => {
    // Call the utility function to generate and download Excel when clicking the button
    generateAndDownloadExcel(rows);
  };
  const handleChangeStatus = (id) => {
    // Toggle the completion status for the specified id
    setCompletedStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  useEffect(() => {
    const dataRef = ref(database, '/UserData');

    const onDataChange = (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const dataArray = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
        setRows(dataArray);
      } else {
        setRows([]);
      }
    };

    onValue(dataRef, onDataChange);

    return () => {
      onValue(dataRef, onDataChange);
    };
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  }




  const deleteApi = async (id) => {
    const userRef = ref(database, 'UserData/' + id);
  
    try {
      await remove(userRef);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
  
      // Assuming you want to refresh the data after deleting
      const newDataRef = ref(database, '/UserData');
      onValue(newDataRef, (snapshot) => {
        const newData = snapshot.val();
  
        if (newData) {
          const newDataArray = Object.entries(newData).map(([key, value]) => ({ id: key, ...value }));
          setRows(newDataArray);
        } else {
          setRows([]);
        }
      });
    } catch (error) {
      console.error("Error deleting document: ", error);
      Swal.fire("Error", "An error occurred while deleting the document.", "error");
    }
  };
  
 

  const filterData = (selectedCategory) => {
    if (selectedCategory) {
      const filteredRows = rows.filter((row) => row.category === selectedCategory);
      setRows(filteredRows);
    } else {
      getUsers();
    }
  };
  

  const headingStyle = {
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: '30px' }}
      >
        <h2 style={headingStyle}>Complaints List</h2>
      </Typography>
      <Divider/>
      <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            
          <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={rows}
  sx={{ width: 300 }}
  onChange={(e, v) => filterData(v?.category || "")}
  getOptionLabel={(row) => row.category || ""}
  renderInput={(params) => (
    <TextField {...params} size="small" label="Search Complaints" />
  )}
/>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
           
           <Button variant="contained" onClick={handleExportToExcel}>
          Export to Excel
        </Button>
          </Stack>
            <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ minWidth: '100px' }}>
                Building Number
              </TableCell>
              <TableCell align="left" style={{ minWidth: '100px' }}>
                Contact Number
              </TableCell>
              <TableCell align="left" style={{ minWidth: '100px' }}>
                Location
              </TableCell>
              
              <TableCell align="left" style={{ minWidth: '100px' }}>
                Details
              </TableCell>
              <TableCell align="left" style={{ minWidth: '100px' }}>
                Category
              </TableCell>
              <TableCell align="left" style={{ minWidth: '100px' }}>
                Action
              </TableCell>
              <TableCell align="left" style={{ minWidth: '100px' }}>
                Status
              </TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                  <TableCell align="left">{row.Name}</TableCell>
                  {/* <TableCell align="left">{row.Email}</TableCell> */}
                  <TableCell align="left">{row.Number}</TableCell>
                  <TableCell align="left">{row.Address}</TableCell>
                  <TableCell align="left">{row.details}</TableCell>
                  <TableCell align="left">{row.category}</TableCell>

                  <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            {/* <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              onClick={() => editUser(row.id)}
                            /> */}

<input
                  type="checkbox"
                  checked={completedStatus[row.id]}
                  onChange={() => handleChangeStatus(row.id)}
                />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                        <TableCell align="left" style={{ color: completedStatus[row.id] ? 'green' : 'red' }}>
  {completedStatus[row.id] ? 'Complete' : 'Pending!'}
</TableCell>

                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
