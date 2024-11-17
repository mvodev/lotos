const getTimeAsString = (hours: number, minutes: number, seconds: number) =>
  `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

export default getTimeAsString;
