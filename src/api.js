import key from "./config";

export const fetchDefaultData = (searchTerm = "leeds") => {
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${key}&locale=*&page=1&city=${searchTerm}`
  )
    .then(result => {
      return result.json();
    })
    .then(info => {
      return info;
    });
};
