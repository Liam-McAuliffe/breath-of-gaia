# MyHomeImpact

MyHomeImpact is a React-based web application that lets users discover their home’s environmental impact. By entering their address and ZIP code, users can receive an estimate of their monthly electricity usage, the associated carbon emissions from that usage, and local air quality data—all presented with engaging visuals and a modern, eco-friendly design.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [APIs and Data Sources](#apis-and-data-sources)
- [Future Improvements](#future-improvements)

## Overview

MyHomeImpact is a user-focused application that:

- **Estimates Home Energy Usage:** Calculates monthly electricity consumption and estimated bill based on user address and ZIP code.
- **Calculates Carbon Emissions:** Converts energy usage data into an estimated amount of carbon emissions.
- **Provides Air Quality Data:** Retrieves real-time air quality levels based on the user’s location.
- **Visualizes Data:** Uses interactive charts to display monthly energy and emission trends.

The app features a clean design supported by CSS variables and a responsive layout to ensure a great experience on both desktop and mobile devices.

## Features

- **Location Input:** Users enter their street address and ZIP code.
- **Electricity Estimation:** Integrates with the WattBuy API to fetch estimated electricity usage, bill range, and average cost.
- **Carbon Emissions Calculation:** Converts energy data into estimated carbon emissions.
- **Air Quality Monitoring:** Uses Open-Meteo’s air quality API to pull current pollutant levels.
- **Data Visualization:** Displays the energy usage and carbon emission trends using a responsive Recharts-based chart.
- **User-Friendly Design:** Uses CSS variables and modular component styling to create an attractive, cohesive look.

## Technologies Used

- **React** for building the UI.
- **Recharts** for data visualization.
- **CSS Modules & Custom CSS:** Individual stylesheets for each component and a global theme using CSS variables.
- **APIs:** Integration with external APIs (WattBuy, Geoapify, Open-Meteo).

## APIs and Data Sources

- **WattBuy API:** Used for electricity consumption estimations.
- **Geoapify Geocoding API:** Retrieves latitude, longitude, and state information based on the provided address and ZIP code.
- **Open-Meteo Air Quality API:** Provides current air quality data, including levels of carbon monoxide, carbon dioxide, nitrogen dioxide, sulphur dioxide, ozone, and methane.

## Future Improvements

- **Improved Error Handling:** Better user feedback when API calls fail.
- **Loading Indicators:** Spinners or skeleton loaders while data is fetching.
- **Additional Metrics:** Including comparisons such as trees required to offset emissions, driving mileage equivalence, etc.
