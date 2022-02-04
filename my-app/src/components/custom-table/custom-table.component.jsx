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
                {row.map((ro, idx) => (<TableCell key={idx}>{ro}</TableCell>))}
                    {/* <TableCell key={0}>{row[0]}</TableCell>
                    <TableCell key={1}>{row[1]}</TableCell>
                    <TableCell key={2}>{row[2]}</TableCell>
                    <TableCell key={3}>{row[3]}</TableCell>
                    <TableCell key={4}>{row[4]}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    );
  };
  

// export const CustomTable = ({ headers, rows, cols }) => {
//   return (
//     <Container>
//       <Table>
//         <TableHead>
//           <TableRow>
//             {headers.map((header, idx) => (
//               <TableCell key={idx}>{header}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, idx) => (
//             <TableRow key={idx}>
//               {cols.map((col, idx) =>
//                 Array.isArray(col) ? (
//                   col.map((icon, idx) => icon)
//                 ) : (
//                   <TableCell key={idx}>{col}</TableCell>
//                 )
//               )}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Container>
//   );
// };
