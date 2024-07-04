function displayCurrentTimeAndDay() {
  var currentTime = new Date();

  // Display current time in UTC
  var currentUTCTime = currentTime.toUTCString();
  document.getElementById("currentTimeUTC").textContent = currentUTCTime;

  // Display current day of the week in UTC
  var currentDay = currentTime.getUTCDay();
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentDayOfWeek = daysOfWeek[currentDay];
  document.getElementById("currentDay").textContent = currentDayOfWeek;
}

// Call the function when the page loads
window.onload = displayCurrentTimeAndDay;
