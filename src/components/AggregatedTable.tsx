import React, { useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import { AggregatedData, AgricultureData } from '../types';
import { processData } from '../utils/dataProcessing';

const AggregatedTable: React.FC = () => {
  const [data, setData] = useState<AggregatedData[]>([]);

  useEffect(() => {
    fetch('/dataset.json')
      .then((response) => response.json())
      .then((data: AgricultureData[]) => {
        const { aggregatedData } = processData(data);
        setData(aggregatedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const tableStyles = {
    table: {
      // borderCollapse: 'collapse',
      width: '80%',
      marginBottom: 20
    },
    th: {
      border: '1px solid black',
      padding: '8px',
      backgroundColor: '#f0f0f0',
    },
    td: {
      border: '1px solid black',
      padding: '8px',
    },
    tr: {
      borderBottom: '1px solid black',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column' as const,
      
      // height: '100vh',
    },
  };

  return (
    <div style={tableStyles.container}>
      <Table style={[tableStyles.table,{borderCollapse: "collapse"}]}>
        <Table.Thead>
          <Table.Tr style={tableStyles.tr}>
            <Table.Th style={tableStyles.th}>Year</Table.Th>
            <Table.Th style={tableStyles.th}>Crop with Maximum Production</Table.Th>
            <Table.Th style={tableStyles.th}>Crop with Minimum Production</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row) => (
            <Table.Tr key={row.Year} style={tableStyles.tr}>
              <Table.Td style={tableStyles.td}>{row.Year}</Table.Td>
              <Table.Td style={tableStyles.td}>{row.MaxCrop}</Table.Td>
              <Table.Td style={tableStyles.td}>{row.MinCrop}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default AggregatedTable;
