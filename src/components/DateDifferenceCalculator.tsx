
import React, { useState, useEffect, useMemo } from 'react';
import { calculateDateDifference, DateDifference } from '../utils/DateMath';

const today = new Date().toISOString().split('T')[0];
const oneYearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().split('T')[0];

const DateDifferenceCalculator: React.FC = () => {
  const [startDate, setStartDate] = useState(oneYearAgo);
  const [endDate, setEndDate] = useState(today);
  const [includeEndDate, setIncludeEndDate] = useState(false);
  const [result, setResult] = useState<DateDifference | null>(null);

  useEffect(() => {
    const diff = calculateDateDifference(startDate, endDate, includeEndDate);
    setResult(diff);
  }, [startDate, endDate, includeEndDate]);

  const resultCards = useMemo(() => {
    if (!result) return null;

    const summary = `${result.years} Years, ${result.months} Months, ${result.days} Days`;

    return (
      <>
        <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-white/90">Total Difference</h3>
          <p className="text-3xl md:text-4xl font-bold text-white mt-2">{summary}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 text-center">
            <h4 className="text-md text-purple-300">Total Days</h4>
            <p className="text-2xl font-semibold mt-1">{result.totalDays.toLocaleString()}</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 text-center">
            <h4 className="text-md text-purple-300">Total Weeks</h4>
            <p className="text-2xl font-semibold mt-1">{result.totalWeeks.toLocaleString()}</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 text-center">
            <h4 className="text-md text-purple-300">Total Hours</h4>
            <p className="text-2xl font-semibold mt-1">{result.totalHours.toLocaleString()}</p>
          </div>
        </div>
      </>
    );
  }, [result]);

  return (
    <section id="calculator-tool" className="max-w-4xl mx-auto">
      <div className="bg-black/30 backdrop-blur-xl border border-purple-500/50 rounded-2xl shadow-2xl shadow-purple-900/40 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <label htmlFor="start-date" className="block text-sm font-medium text-gray-300 mb-2">Start Date</label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="end-date" className="block text-sm font-medium text-gray-300 mb-2">End Date</label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <label htmlFor="include-end-date" className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="include-end-date" className="sr-only" checked={includeEndDate} onChange={() => setIncludeEndDate(!includeEndDate)} />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${includeEndDate ? 'transform translate-x-full bg-purple-400' : ''}`}></div>
            </div>
            <div className="ml-3 text-gray-300 text-sm">
              Include End Date in Calculation
            </div>
          </label>
        </div>
        
        <div className="mt-8">
            {resultCards}
        </div>
      </div>
    </section>
  );
};

export default DateDifferenceCalculator;
