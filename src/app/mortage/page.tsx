// pages/index.js
'use client';

import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Home() {
  const [loanAmount, setLoanAmount] = useState(250000); // Default value
  const [interestRate, setInterestRate] = useState(2); // Default value
  const [loanTerm, setLoanTerm] = useState(2); // Default value
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(null);
  const [totalAmountPaid, setTotalAmountPaid] = useState(null);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const calculatedPayments = parseFloat(loanTerm) * 12; // Total number of payments

    // Validate inputs
    if (isNaN(principal) || isNaN(calculatedInterest) || isNaN(calculatedPayments) || principal <= 0 || calculatedInterest < 0 || calculatedPayments <= 0) {
      setMonthlyPayment(null);
      setTotalMonthlyPayment(null);
      setTotalAmountPaid(null);
      return;
    }

    // Monthly payment calculation
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * calculatedInterest * x) / (x - 1); // Monthly payment calculation

    if (!isNaN(monthly) && (monthly !== Infinity) && (monthly > 0)) {
      setMonthlyPayment(monthly.toFixed(2));
      const totalPayment = monthly * calculatedPayments; // Total payment calculation
      setTotalAmountPaid(totalPayment.toFixed(2)); // Total amount paid
      setTotalMonthlyPayment(monthly.toFixed(2)); // Total monthly payment
    } else {
      setMonthlyPayment(null);
      setTotalMonthlyPayment(null);
      setTotalAmountPaid(null);
    }
  };

  const formatCurrency = (value) => {
    return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  };

  const chartData = {
    labels: ['Loan Amount Taken', 'Monthly Payment', 'Total Monthly Payment', 'Total Amount Paid'],
    datasets: [
      {
        label: 'Payment Amount',
        data: [
          loanAmount || 0,                // Loan Amount Taken
          monthlyPayment || 0,            // Monthly Payment
          totalMonthlyPayment || 0,       // Total Monthly Payment
          totalAmountPaid || 0            // Total Amount Paid
        ],
        backgroundColor: [
          'rgba(255, 206, 86, 0.6)', // Loan Amount Taken
          'rgba(75, 192, 192, 0.6)', // Monthly Payment
          'rgba(255, 99, 132, 0.6)', // Total Monthly Payment
          'rgba(54, 162, 235, 0.6)',  // Total Amount Paid
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)', 
          'rgba(75, 192, 192, 1)', 
          'rgba(255, 99, 132, 1)', 
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl p-6 bg-white rounded-lg shadow-md">
        
        {/* Calculator Section */}
        <div className="flex flex-col p-6">
          <h2 className="text-3xl font-bold text-center mb-6">Mortgage Calculator</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Loan Amount ($)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter loan amount"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter interest rate"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter loan term"
            />
          </div>
          
          <button
            onClick={calculateMortgage}
            className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Calculate
          </button>
        </div>

        {/* Calculation Section */}
        <div className="flex flex-col p-6">
          {monthlyPayment && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold">Monthly Payment: {formatCurrency(monthlyPayment)}</h3>
              {totalMonthlyPayment && (
                <h3 className="text-xl font-bold">Total Monthly Payment: {formatCurrency(totalMonthlyPayment)}</h3>
              )}
              {totalAmountPaid && (
                <h3 className="text-xl font-bold">Total Amount Paid: {formatCurrency(totalAmountPaid)}</h3>
              )}
            </div>
          )}
          
          {monthlyPayment && totalMonthlyPayment && totalAmountPaid && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-center mb-4">Payment Breakdown</h3>
              <Bar
                data={chartData}
                options={{
                  maintainAspectRatio: true, // Maintain aspect ratio
                  responsive: true, // Make chart responsive
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: 'Amount ($)',
                      },
                    },
                  },
                }}
                height={300} // Fixed height for the chart
              />
            </div>
          )}
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="mt-12 w-full max-w-6xl p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Mortgage Help & Property Content</h2>
        <p className="mb-2">Looking to buy a home? Understanding your mortgage options is crucial. Check out our helpful resources below:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Understanding different types of mortgages</li>
          <li>How to improve your credit score for better rates</li>
          <li>Tips for first-time homebuyers</li>
          <li>Current mortgage rates and trends</li>
        </ul>
        <p className="mb-2">Explore available properties:</p>
        <ul className="list-disc list-inside">
          <li>Single-family homes</li>
          <li>Condos and townhouses</li>
          <li>Luxury properties</li>
          <li>Investment properties</li>
        </ul>
      </div>
    </div>
  );
}
