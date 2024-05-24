import React, { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import { AgricultureData, CropData } from "../types";
import { processData } from "../utils/dataProcessing";

const CropTable: React.FC = () => {
  const [data, setData] = useState<CropData[]>([]);

  useEffect(() => {
    fetch("/dataset.json")
      .then((response) => response.json())
      .then((data: AgricultureData[]) => {
        const { cropData } = processData(data);
        setData(cropData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const tableStyles = {
    table: {
      //   borderCollapse: 'collapse',
      width: "80%",
    },
    th: {
      border: "1px solid black",
      padding: "8px",
      backgroundColor: "#f0f0f0",
    },
    td: {
      border: "1px solid black",
      padding: "8px",
    },
    tr: {
      borderBottom: "1px solid black",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column" as const,
      //   height: '100vh',
    },
  };

  return (
    <Table
      withRowBorders={true}
      withTableBorder
      striped={true}
      withColumnBorders={true}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Crop</Table.Th>
          <Table.Th>Average Yield (Kg/Ha)</Table.Th>
          <Table.Th>Average Cultivation Area (Ha)</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row, index) => (
          <Table.Tr key={index}>
            <Table.Td>{row.Crop}</Table.Td>
            <Table.Td>{row.AverageYield.toFixed(3)}</Table.Td>
            <Table.Td>{row.AverageArea.toFixed(3)}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default CropTable;
