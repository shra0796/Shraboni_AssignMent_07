import { AgricultureData, AggregatedData, CropData } from '../types';

export const processData = (data: AgricultureData[]): { aggregatedData: AggregatedData[], cropData: CropData[] } => {
  const yearCropMap: { [year: string]: { max: AgricultureData; min: AgricultureData } } = {};
  const cropMap: { [crop: string]: { totalYield: number; totalArea: number; count: number } } = {};

  data.forEach((item) => {
    const year = item.Year.split(', ')[1]; // Extracting the year
    
    // Year-wise max and min crop production
    if (!yearCropMap[year]) {
      yearCropMap[year] = { max: item, min: item };
    } else {
      if (item['Crop Production (UOM:t(Tonnes))'] > yearCropMap[year].max['Crop Production (UOM:t(Tonnes))']) {
        yearCropMap[year].max = item;
      }
      if (item['Crop Production (UOM:t(Tonnes))'] < yearCropMap[year].min['Crop Production (UOM:t(Tonnes))']) {
        yearCropMap[year].min = item;
      }
    }

    // Crop-wise total yield and area
    const crop = item["Crop Name"];
    if (!cropMap[crop]) {
      cropMap[crop] = { totalYield: 0, totalArea: 0, count: 0 };
    }
    cropMap[crop].totalYield += item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];
    cropMap[crop].totalArea += item["Area Under Cultivation (UOM:Ha(Hectares))"];
    cropMap[crop].count++;
  });

  const aggregatedData: AggregatedData[] = Object.entries(yearCropMap).map(([year, { max, min }]) => ({
    Year: year,
    MaxCrop: max['Crop Name'],
    MinCrop: min['Crop Name'],
  }));

  const cropData: CropData[] = Object.entries(cropMap).map(([crop, { totalYield, totalArea, count }]) => ({
    Crop: crop,
    AverageYield: parseFloat((totalYield / count).toFixed(3)),
    AverageArea: parseFloat((totalArea / count).toFixed(3)),
  }));

  return { aggregatedData, cropData };
}
