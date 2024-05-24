import React from 'react';
import AggregatedTable from './components/AggregatedTable';
import CropTable from './components/CropTable';

const App: React.FC = () => {
  return (
    <div style={{textAlign: "center"}}>
       <h1>Indian Agriculture Analytics</h1>
      <AggregatedTable />
      <CropTable />
    </div>
  );
};

export default App;
