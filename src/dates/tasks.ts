export default () => {
  const weekDays: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getWeekDay = (date: Date): string => {
    return weekDays[date.getDay()]
  };
  const getLocalDay = (date: Date): string => {
    let day = date.getDay();
    if (day === 0) day = 7;
    return weekDays[day]
  };
  const getDateAgo = (date: Date, dayAgo: number): Date => {
    const timeStampDate = date.getTime() - dayAgo * 24 * 3600 * 1000;
    return new Date(timeStampDate)
  };
  const getDaysInMonth = (year: number, month: number): Array<number> => {
    const date = new Date(year, month);
    const days = [];
    while (date.getMonth() === month) {
      days.push(date.getDate());
      date.setDate(date.getDate() + 1)
    }
    return days
  };
  const getLastDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };
  const getSecondsToday = (): number => {
    const now: Date = new Date();
    const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((now.getTime() - startToday.getTime()) / 1000);
  };
  const getSecondsToTomorrow = (): number => {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((tomorrow.getTime() - now.getTime()) / 1000);
  };
}
