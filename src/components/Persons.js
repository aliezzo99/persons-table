import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import { Button } from '@mui/material';
import FormDialog from './FormDialog';

const columns = [
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'birthday', headerName: 'Birthday', type: 'Date', width: 300, },
];

function Persons(props) {
    const [data, setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    function getData() {
        axios.get('https://aracom.de/api/persons.php')
            .then(response => {
                console.log(response?.data);
                if (response?.data) {
                    // const sortedData = response.data
                    //     .filter(person => person)
                    //     .map(person => ({ ...person, birthday: moment(person.birthday).format('DD.MM.yyyy') }))
                    //     .sort((a, b) => {
                    //         let fa = a.firstName.toLowerCase(),
                    //             fb = b.firstName.toLowerCase();

                    //         if (fa < fb) {
                    //             return -1;
                    //         }
                    //         if (fa > fb) {
                    //             return 1;
                    //         }
                    //         return 0;
                    //     });
                    const sortedData = [];
                    for (let i = 0; i < response.data.length; i++) {
                        const person = response.data[i];
                        if (person) {
                            person.birthday = moment(person.birthday).format('DD.MM.yyyy');
                            addPersonInOrder(sortedData, person)
                        }
                    }// This method combines filter,map,sort in one loop 
                    setData(sortedData);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
    useEffect(() => {
        getData();
    }, [])
    function getRowId(row) {
        return row.firstName + row.lastName;
    }
    function handleOpenDialog() {
        setOpenDialog(true);
    }
    function handleAddPerson(person) {
        setData(addPersonInOrder([...data], { ...person, birthday: moment(person.birthday).format('DD.MM.yyyy') }));// we should then send a query to save data in the database of course
        setOpenDialog(false);
    }
    function addPersonInOrder(dataArr, person) {
        let index = dataArr.findIndex(obj => obj.firstName.toLowerCase() > person.firstName.toLowerCase());
        if (index === -1) {
            dataArr.push(person);
        } else {
            dataArr.splice(index, 0, person);
        }
        return dataArr;
    }
    return (
        <div className='h-full flex flex-col bg-slate-200 p-8 gap-8'>
            <Button className='w-max self-end' variant="contained" onClick={handleOpenDialog}>Add Person</Button>
            <DataGrid
                className='bg-white w-10/12 self-center'
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowId={getRowId}
            />
            <FormDialog
                open={openDialog}
                onClose={() => { setOpenDialog(false) }}
                onSubmit={person => handleAddPerson(person)}
            />
        </div>
    );
}

export default Persons;