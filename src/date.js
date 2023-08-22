const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const monthsOfYear = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function updateClock() {
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const monthOfYear = monthsOfYear[currentDate.getMonth()];
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  //const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthOfYear} <strong>${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}</strong>`;
  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthOfYear} <b>${hours}:${minutes < 10 ? '0' : ''}${minutes}</b>`;

  const timeSpan = document.querySelector('.time');
  timeSpan.innerHTML = formattedDate;
}

updateClock();
setInterval(updateClock, 1000);
