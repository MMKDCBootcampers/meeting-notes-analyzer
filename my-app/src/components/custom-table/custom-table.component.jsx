import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const CustomTable = ({ headers, rows, cols, icons }) => {
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
          {/* {rows.map((row, idx) => (

              <TableRow key={idx}>
                {row.map((ro, idx) => (<TableCell key={idx}>{ro}</TableCell>))}
                    {/* <TableCell key={0}>{row[0]}</TableCell>
                    <TableCell key={1}>{row[1]}</TableCell>
                    <TableCell key={2}>{row[2]}</TableCell>
                    <TableCell key={3}>{row[3]}</TableCell>
                    <TableCell key={4}>{row[4]}</TableCell>
              </TableRow>
            ))} */}
          {'meetings' in rows
            ? rows.meetings.map(meeting => (
                <TableRow key={meeting.id}>
                  <TableCell>{meeting.name}</TableCell>
                  <TableCell>{icons.recording}</TableCell>
                  <TableCell>{icons.transcript}</TableCell>
                  <TableCell>{icons.insights}</TableCell>
                  <TableCell>upload time</TableCell>
                  <TableCell>{icons.delete}</TableCell>
                </TableRow>
              ))
            : 'wordbank' in rows
            ? rows.wordbank.map(word => (
                <TableRow key={word.term}>
                  <TableCell>{word.term}</TableCell>
                  <TableCell>{word.meaning}</TableCell>
                  <TableCell>{word.pronunciation}</TableCell>
                  <TableCell>{word.added}</TableCell>
                  <TableCell>{icons.edit}</TableCell>
                  <TableCell>{icons.delete}</TableCell>
                </TableRow>
              ))
            : null}
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
