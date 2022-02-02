import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const CustomTable = ({ headers, rows, cols }) => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, idx) => (
              <TableCell key={idx}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              {cols.map((col, idx) =>
                Array.isArray(col) ? (
                  col.map((icon, idx) => icon)
                ) : (
                  <TableCell key={idx}>{col}</TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};
