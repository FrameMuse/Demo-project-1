import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Warehouse = () => {
    return (
        <div>
            <h2>Адрес склада:</h2>
            <p>
                Автоматизированный учет склада предприятия ОАО "Молочный мир"
            </p>

            <Table color={'white'} size="small" aria-label="a dense table">

                <TableHead>
                    <TableRow>
                        <TableCell color={'secondary'}>Ячейка</TableCell>
                        <TableCell color={'secondary'}>Наименование</TableCell>
                        <TableCell color={'secondary'}>Наполнитель</TableCell>
                        <TableCell color={'secondary'}>Количество</TableCell>
                        <TableCell color={'secondary'}>Дата добавления</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>



        </div>

    )
}

export default Warehouse