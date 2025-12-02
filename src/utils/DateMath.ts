
export interface DateDifference {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalHours: number;
}

export const calculateDateDifference = (startDateStr: string, endDateStr: string, includeEndDate: boolean): DateDifference | null => {
  if (!startDateStr || !endDateStr) {
    return null;
  }

  let startDate = new Date(startDateStr);
  let endDate = new Date(endDateStr);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return null;
  }

  // Ensure start date is before end date
  if (startDate > endDate) {
    [startDate, endDate] = [endDate, startDate];
  }

  if (includeEndDate) {
    endDate.setDate(endDate.getDate() + 1);
  }

  const diffTime = endDate.getTime() - startDate.getTime();
  if (diffTime < 0) return null;

  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(diffTime / (1000 * 60 * 60));
  const totalWeeks = parseFloat((totalDays / 7).toFixed(2));
  
  let tempStartDate = new Date(startDate);
  
  let years = endDate.getFullYear() - tempStartDate.getFullYear();
  let months = endDate.getMonth() - tempStartDate.getMonth();
  let days = endDate.getDate() - tempStartDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks,
    totalHours,
  };
};
