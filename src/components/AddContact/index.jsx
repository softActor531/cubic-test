import React, {useState} from "react";
import { useDispatch } from "react-redux";

// import action
import { addEntry } from "../../redux/actions";

// import material ui
import { makeStyles } from "@mui/styles";
import { TextField, Stack, Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  wrapper: {
    marginBottom: '3em',
    display: 'flex'
  }
}))

export default function AddContact() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleAddEntry = () => {
    dispatch(addEntry({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber
    }));
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
  }
  return (
    <Stack spacing={2} direction="row" className={classes.wrapper}>
      <TextField label="First Name" variant="filled" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <TextField label="Last Name" variant="filled" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <TextField label="Phone Number" variant="filled" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
      <Button variant="contained" onClick={handleAddEntry}>Add to entry</Button>
    </Stack>
  )
}