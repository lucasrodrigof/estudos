import { Box, Table, TableHead, TableRow, TableBody,TableCell, Checkbox, Divider, Button } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import React from "react";

export const Horaextra = () => {
    return (
        <Box>
            <Box sx={{
            display: "flex",
            flexDirection: "row"
            }}>
            <Box sx={{
                width: '20%'
            }}>
            {/* left */}
            <HomeIcon />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                width: '60%'
            }}>
                <h1>HORAS EXTRAS</h1>
            </Box>
            <Box>
                <AccessAlarmIcon />
            </Box>
            </Box>
            <Table sx={{
                marginY: 10
            }}>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Usuario</TableCell>
                        <TableCell>Matricula</TableCell>
                        <TableCell>Entrada</TableCell>
                        <TableCell>Saida</TableCell>
                        <TableCell>Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <Checkbox  />
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    <TableRow>
                        <Checkbox  />
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    <TableRow>
                        <Checkbox  />
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    <TableRow>
                        <Checkbox />
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    <TableRow>
                        <Checkbox  />
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    <TableRow>
                        <Checkbox  />
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Divider />
            <Box sx={{
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: 20,
            }}>
                <Button sx={{marginX: 2}} variant="outlined" color="success">Aprovar</Button>
                <Button sx={{marginX: 2}}variant="outlined" color="error">Negar</Button>
            </Box>
        </Box>
    )
}

export default Horaextra