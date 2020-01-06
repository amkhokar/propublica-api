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
    ALL_VOTES = JSON.parse(response).body.data;
    ALL_VOTES.forEach(element => {
      $("#result").append(`<li>
        <img src=${element.imageUrl}><br>
        <b>Name:</b><br>${element.name}<br>
        <b>Type:</b><br>${element.type}<br>
        </li><hr>`);
    });
  });

  $("button").on("click", function(event) {
    $("#result").empty();

    ALL_VOTES.filter(ele => ele.type === event.target.value).forEach(
      element => {
        $("#result").append(`<li>
        <img src=${element.imageUrl}><br>
        <b>Name:</b><br>${element.name}<br>
        <b>Type:</b><br>${element.type}<br>
        </li><hr>`);
      }
    );
  });
});
