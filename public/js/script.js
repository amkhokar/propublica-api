$(document).ready(function() {
  let ALL_VOTES = [];
  function getVotes() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.propublica.org/congress/v1/senate/votes/2017/01.json`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.setRequestHeader(
        "X-API-Key",
        "2X30P6WEp701iC8HEle34T4DRNqNn7wIcsMKZ7FI"
      );
      request.send();
    });
  }
  getVotes().then(function(response) {
    ALL_VOTES = JSON.parse(response);
    console.log(ALL_VOTES);
    $("#result").append(JSON.stringify(ALL_VOTES));
  });
});
