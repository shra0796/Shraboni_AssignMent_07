export interface AgricultureData {
    Country: string;
    Year: string;
    "Crop Name": string;
    "Crop Production (UOM:t(Tonnes))": number;
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": number;
    "Area Under Cultivation (UOM:Ha(Hectares))": number;
  }
  
  export interface AggregatedData {
    Year: string;
    MaxCrop: string;
    MinCrop: string;
  }
  
  export interface CropData {
    Crop: string;
    AverageYield: number;
    AverageArea: number;
  }
  