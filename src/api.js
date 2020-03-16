import key from "./config";

export const fetchDefaultData = () => {
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${key}&latlong=53.8007554,-1.5490774&locale=*&page=1&city=leeds`
  )
    .then(result => {
      return result.json();
    })
    .then(info => {
      return info;
    });
};
