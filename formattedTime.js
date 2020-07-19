// BEGIN (write your solution here)
const formattedTime = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    let hours = '';
    let mints = '';
    if (h <= 9) {
      hours = '0' + h;
    } else { hours = h; }
    if (m <= 9) {
      mints = '0' + m;
    } else { mints = m; }
    if (h >= 24) {
      hours = '0' + h % 24;
    }
    return `${hours}:${mints}`;
  };
  export default formattedTime;
  // END
  