import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';


const AccessLogsTable = () => {
  const auth = useAuth();
  const [accessLogs, setAccessLogs] = useState([]);


  return (
    <Box sx={{ maxWidth: 800, width: '100%' }}>
      <Typography
        color="text.secondary"
        variant="h4"
        sx={{ mb: 3 }}
      >
        Access Logs
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                User
              </TableCell>
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                IP Address
              </TableCell>
              <TableCell>
                User Agent
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accessLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>
                  {log.user}
                </TableCell>
                <TableCell>
                  {log.date}
                </TableCell>
                <TableCell>
                  {log.ipAddress}
                </TableCell>
                <TableCell>
                  {log.userAgent}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AccessLogsTable;
