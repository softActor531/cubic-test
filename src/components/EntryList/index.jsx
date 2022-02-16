import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import shortid from "shortid";

// import child component
import SearchBar from "./SearchBar";

// import mui components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack } from "@mui/material";


export default function EntryList() {
  const entryList = useSelector(state => state.entries);
  const [selectedEntries, setSelectedEntries] = useState(entryList);

  useEffect(() => {
    setSelectedEntries(entryList);
  }, [entryList]);

  const handleSearch = (keyword) => {
    if (keyword === '') {
      setSelectedEntries(entryList);
    }
    const entries = entryList.filter((entry) => {
      return entry.firstName.includes(keyword) || entry.lastName.includes(keyword) || entry.phoneNumber.includes(keyword);
    });
    setSelectedEntries(entries);
  }
  return (
    <Stack spacing={2} direction="row">
      <TableContainer component={Paper} sx={{width: '75%'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            selectedEntries.length > 0 ?
            selectedEntries.map((entry) => {
              return (
                <TableRow key={shortid.generate()}>
                  <TableCell align="center">{ entry.firstName }</TableCell>
                  <TableCell align="center">{ entry.lastName }</TableCell>
                  <TableCell align="center">{ entry.phoneNumber }</TableCell>
                </TableRow>
              )
            })
            : <TableRow>
                <TableCell colspan={3} align="center">No entries</TableCell>
              </TableRow>            
          }
          </TableBody>
        </Table>
      </TableContainer>
      <SearchBar handleSearch={handleSearch} />
    </Stack>
  )
}