import React, { useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import { AgricultureData, CropData } from '../types';
import { processData } from '../utils/dataProcessing';

const CropTable: React.FC = () => {
  const [data, setData] = useState<CropData[]>([]);

  useEffect(() => {
    fetch('/dataset.json')
      .then((response) => response.json())
      .then((data: AgricultureData[]) => {
        const { cropData } = processData(data);
        setData(cropData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const tableStyles = {
    table: {
    //   borderCollapse: 'collapse',
      width: '80%',
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
    //   height: '100vh',
    },
  };

  return (
    <div style={tableStyles.container}>
      <Table style={[tableStyles.table, {borderCollapse: "collapse"}]}>
        <Table.Thead>
          <Table.Tr style={tableStyles.tr}>
            <Table.Th style={tableStyles.th}>Crop</Table.Th>
            <Table.Th style={tableStyles.th}>Average Yield (Kg/Ha)</Table.Th>
            <Table.Th style={tableStyles.th}>Average Cultivation Area (Ha)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row, index) => (
            <Table.Tr key={index} style={tableStyles.tr}>
              <Table.Td style={tableStyles.td}>{row.Crop}</Table.Td>
              <Table.Td style={tableStyles.td}>{row.AverageYield.toFixed(3)}</Table.Td>
              <Table.Td style={tableStyles.td}>{row.AverageArea.toFixed(3)}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default CropTable;
