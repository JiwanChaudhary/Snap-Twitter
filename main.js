// CLOCK & DATE TEXT

const textHour = document.getElementById("text-hour"),
  textMinutes = document.getElementById("text-minutes"),
  textAmPm = document.getElementById("text-ampm"),
  dateDay = document.getElementById("date-day"),
  dateMonth = document.getElementById("date-month"),
  dateYear = document.getElementById("date-year");

const clockText = () => {
  let date = new Date();

  let hh = date.getHours(),
    ampm,
    mm = date.getMinutes(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();

  //We change the hours from 24 to 12 hours and establish it is AM or PM
  if (hh >= 12) {
    hh = hh - 12;
    ampm = "pm";
  } else {
    ampm = "am";
  }

  //We detect when it's 0 AM and transform to 12 AM
  if (hh == 0) {
    hh = 12;
  }

  //Show a zero before hours
  if (hh < 10) {
    hh = `0${hh}`;
  }

  //Show Time
  textHour.innerHTML = `${hh}:`;

  //Show a zero before minutes
  if (mm < 10) {
    mm = `0${mm}`;
  }

  // Show minutes
  textMinutes.innerHTML = mm;

  // Show AM or PM
  textAmPm.innerHTML = ampm;

  // We get the months of the year and show it
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // We show the day, the month and the year
  dateDay.innerHTML = day;
  dateMonth.innerHTML = `${months[month]},`;
  dateYear.innerHTML = year;
};
setInterval(clockText, 1000); //1000 = 1s
