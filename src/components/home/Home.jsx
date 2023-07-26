import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'





const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAzNTIzNzUsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiMjgxYmRlN2QtNmNhYy00ZWFiLWE1YzQtY2ExNjQ4Yzc1ZDIxIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMkFEMTEzIn0.jnJR78d0VJ3-IGq3WLO7KYBw5spsI2BNbv5U6YNRUy4'

const Home = () => {

  const [trainData, setTrainData] = useState([]);


  useEffect(()=>{
    async function getData(){
      const config = {
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization' : 'Bearer ' + token,
        }
    }
      const {data} = await axios.get('http://20.244.56.144:80/train/trains', config)
      setTrainData([data])
      
    }
    getData();

    
  },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Train Name</TableCell>
            <TableCell align="right">Train Number</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Seats</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {trainData.map((row) => (
            <TableRow
              key={row.trainName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.trainTime}
              </TableCell>
              <TableCell align="right">{row.SeatsAvailability}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Home
