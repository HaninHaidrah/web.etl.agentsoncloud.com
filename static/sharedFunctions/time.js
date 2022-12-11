const timeConvert = (time) => {
  // Check correct time format and split into components
  // time = time.replaceAll(" ", "");
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];
  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
};

const addTimeAndDate = (arr) => {
  try {
    const response = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      let formatDat = element.startShowDate.split("-").reverse().join("-");
      let formatTime = timeConvert(element.startShowTime);
      response.push({
        ...element,
        formatDateAndTime: `${formatDat} At ${formatTime}`,
      });
    }
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
const formatCreatedDate = () => {
  try {
    let today = new Date();
    let hour =
      today.getHours() + "".length == 1
        ? "0" + today.getHours()
        : today.getHours() + "";
    let min = today.getMinutes() + "";
    if (hour.length === 1) hour = "0" + hour;
    if (min.length === 1) min = "0" + min;
    let day = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10);
    let time = `${hour}:${min}`;
    return [day, time];
  } catch (error) {
    throw error;
  }
};

const getDateFromAndDateTo = (id) => {
  try {
    let [currentDay, currentTime] = formatCreatedDate();
    let [firstDay, lastDay] = getFirstDayAndLastDayOfWeek();
    let previousDay = getPreviousDay(currentDay);

    if (id == "Today123") return [currentDay, currentDay];
    if (id == "Yesterday123") return [previousDay, previousDay];
    if (id == "thisWeek123") return [firstDay, lastDay];
    return ["", ""]; // once the filterTime isnt given;
  } catch (error) {
    throw error;
  }
};
const getPreviousDay = (currentDay) => {
  try {
    date = new Date(currentDay);
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    console.log(
      new Date(previous).toISOString().substr(0, 10),
      "preeeeeeeeeeeeeeeeeeeeeeeeeeeeeviouss"
    );
    return new Date(previous).toISOString().substr(0, 10);
  } catch (error) {
    throw error;
  }
};
const getFirstDayAndLastDayOfWeek = () => {
  try {
    let todayDate = new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    );

    var first = todayDate.getDate() - todayDate.getDay();
    var last = first + 6;
    var firstday = new Date(todayDate.setDate(first))
      .toISOString()
      .substr(0, 10);
    var lastday = new Date(todayDate.setDate(last)).toISOString().substr(0, 10);
    return [firstday, lastday];
  } catch (error) {
    throw error;
  }
};
// addReminderTime
const getDifferenceBetweenTimes = (startTime, endTime) => {
  //03:20 , 4:00:
  let time1Hours = startTime.split(":")[0];
  let time1Mins = startTime.split(":")[1];
  let time2Hours = endTime.split(":")[0];
  let time2Mins = endTime.split(":")[1];

  if (time2Mins < time1Mins) {
    time2Hours -= 1;
    time2Mins = Number(time2Mins) + 60;
  }
  let diffHours = time2Hours - time1Hours;
  let diffMinutes = time2Mins - time1Mins;

  if (diffHours.toString().length === 1) diffHours = "0" + diffHours;

  if (diffMinutes.toString().length === 1) diffMinutes = "0" + diffMinutes;
  return [diffHours, diffMinutes];
};

module.exports = {
  formatCreatedDate,
  getDateFromAndDateTo,
  getPreviousDay,
  getFirstDayAndLastDayOfWeek,
  timeConvert,
  addTimeAndDate,
  getDifferenceBetweenTimes,
};

// module.exports = {  };
