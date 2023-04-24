import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';

const defaultForm = { firstName: '', lastName: '', birthday: new Date() }
export default function FormDialog(props) {
    const { open, onClose, onSubmit } = props;
    const [data, setData] = useState(defaultForm);
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add a new Person</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label='First Name'
                    fullWidth
                    variant="standard"
                    value={data.firstName}
                    onChange={(event) => { setData({ ...data, firstName: event?.target?.value }); }}
                />
                <TextField
                    margin="dense"
                    id="lastName"
                    label='Last Name'
                    fullWidth
                    variant="standard"
                    value={data.lastName}
                    onChange={(event) => { setData({ ...data, lastName: event?.target?.value }); }}
                />
                <TextField
                    margin="dense"
                    id="birthday"
                    label='Birthday'
                    fullWidth
                    variant="standard"
                    type="date"
                    format="DD.MM.yyyy"
                    value={data.birthday}
                    onChange={(event) => { setData({ ...data, birthday: event?.target?.value }); }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { onClose(); setData(defaultForm); }}>Cancel</Button>
                <Button onClick={() => { onSubmit(data); setData(defaultForm); }}>Add</Button>
            </DialogActions>
        </Dialog>
    );
}