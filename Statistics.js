import React, { useState, useEffect } from 'react';

// Replace with the provided API URL
const API_URL = 'https://run.mocky.io/v3/2ba98125-e510-4867-aea0-797a48306707';

const Statistics = () => {
  const [selectedMonth, setSelectedMonth] = useState('June'); // Default month
  const [statistics, setStatistics] = useState({
    totalSale: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  });

  useEffect(() => {
    // Fetch data from the API when the component mounts or the selected month changes
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        // Assuming the data structure is something like: { "month": "June", "totalSale": 100000, "totalSoldItems": 55, "totalNotSoldItems": 15 }
        const monthData = data.find(item => item.month === selectedMonth);

        if (monthData) {
          setStatistics({
            totalSale: monthData.totalSale,
            totalSoldItems: monthData.totalSoldItems,
            totalNotSoldItems: monthData.totalNotSoldItems,
          });
        } else {
          // Handle case where month data is not found
          setStatistics({
            totalSale: 0,
            totalSoldItems: 0,
            totalNotSoldItems: 0,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedMonth]);

  return (
    <div>
      <h2>Statistics - {selectedMonth}</h2>
      <div style={{ backgroundColor: '#f0e68c', padding: '10px', borderRadius: '5px' }}>
        <p>Total sale: {statistics.totalSale}</p>
        <p>Total sold items: {statistics.totalSoldItems}</p>
        <p>Total not sold items: {statistics.totalNotSoldItems}</p>
      </div>
      <div>
        <label htmlFor="month">Select month: </label>
        <select
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
    </div>
  );
};

export default Statistics;
