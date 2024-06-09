import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = ({ transactions }) => {
  // Define the price ranges
  const priceRanges = [
    '0-100', '101-200', '201-300', '301-400', '401-500', 
    '501-600', '601-700', '701-800', '801-900', '901-above'
  ];

  // Initialize counts for each price range
  const counts = Array(priceRanges.length).fill(0);

  // Count the number of transactions in each price range
  transactions.forEach(transaction => {
    const price = transaction.price;
    if (price <= 100) counts[0]++;
    else if (price <= 200) counts[1]++;
    else if (price <= 300) counts[2]++;
    else if (price <= 400) counts[3]++;
    else if (price <= 500) counts[4]++;
    else if (price <= 600) counts[5]++;
    else if (price <= 700) counts[6]++;
    else if (price <= 800) counts[7]++;
    else if (price <= 900) counts[8]++;
    else counts[9]++;
  });

  const data = {
    labels: priceRanges,
    datasets: [
      {
        label: 'Number of Items',
        data: counts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Transactions Bar Chart',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
