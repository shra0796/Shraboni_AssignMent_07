# Indian Agriculture Data Analytics

This project analyzes and displays Indian agriculture data in table format using React and Mantine. The data is fetched from a JSON file and displayed in two tables:
1. Year-wise crop with maximum and minimum production.
2. Crop-wise average yield and average cultivation area between 1950-2020.

## Project Structure
src/
|-- components/
| |-- AggregatedTable.tsx
| |-- CropTable.tsx
|-- types/
| |-- index.ts
|-- utils/
| |-- dataProcessing.ts
|-- App.tsx
|-- index.tsx


## Prerequisites

Ensure you have the following installed on your machine:
- Node.js (>= 14.0.0)
- Yarn (>= 1.22.0)

## Setup and Installation

Follow these steps to set up and run the project:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/shra0796/Shraboni_AssignMent_07.git
    cd indian-agriculture
    ```

2. **Install dependencies**:
    ```sh
    yarn install
    ```

3. **Add the dataset**:
   Place the dataset JSON file in the `public` directory and name it `dataset.json`.

4. **Run the project**:
    ```sh
    yarn start
    ```

   This command will start the development server and automatically open the application in your default web browser. If it doesn't open automatically, navigate to `http://localhost:3000` in your browser.

## Project Details

### Aggregated Table
Displays the crop with the maximum and minimum production for each year from 1950 to 2020.

### Crop Table
Displays the average yield and average cultivation area for each crop between 1950 and 2020.

## Code Explanation

### Components

- **AggregatedTable.tsx**: Fetches the data, processes it to find the crop with maximum and minimum production for each year, and displays it in a table.
- **CropTable.tsx**: Fetches the data, processes it to calculate the average yield and cultivation area for each crop, and displays it in a table.

### Types

- **index.ts**: Defines TypeScript interfaces for the agriculture data, aggregated data, and crop data.

### Utils

- **dataProcessing.ts**: Contains the logic for processing the fetched data to calculate required values for both tables.

### App.tsx

- Main application component that renders the `AggregatedTable` and `CropTable` components.

## Styling

Tables are styled using inline styles within the components to avoid external CSS files. The table container is centered on the screen using flexbox.

##Screenshots 
1st table========>(Year, Crop with maximum production, Crop with minimum production)
![alt text](<Screenshot 2024-05-23 013616.png>)
![alt text](<Screenshot 2024-05-23 014321-1.png>)
![alt text](<Screenshot 2024-05-23 014346.png>)
![alt text](<Screenshot 2024-05-23 014408.png>)
![alt text](<Screenshot 2024-05-23 014429.png>)

2nd table========>(Crop, Average Yield (Kg/Ha), Average Cultivation Area (Ha))
![alt text](<Screenshot 2024-05-23 014154.png>)

## Notes

- All missing cell values in the dataset are treated as 0.
- Ensure the dataset JSON file is correctly formatted and placed in the `public` directory for the data fetching to work properly.

## Conclusion

This project demonstrates the ability to process and display data using React and Mantine without relying on additional helper libraries. The code is modular, type-safe, and follows clean coding practices.

## Contact

For any questions or suggestions, please contact [shrabonichakraborty67@gmail.com](mailto:shrabonichakraborty67@gmail.com).

##Key Points Covered

Project overview: A brief explanation of what the project does.
Project structure: Visual representation of the folder structure.
Prerequisites: Software requirements for the project.
Setup and installation: Step-by-step instructions to set up the project.
Project details: Explanation of what each table displays.
Code explanation: Breakdown of the components, types, utilities, and main application.
Styling: Information about how the table is styled.
Notes: Important points to consider regarding data handling.
Contact: How to reach out for further questions or suggestions.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
