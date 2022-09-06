
module.exports = getDate;

function getDate() {
  var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  let d = new Date();
  // const currentDay = d.getDay();
  let currentDay = d.toLocaleDateString("en-US", options)
  // var day = "";
  return currentDay;
}
