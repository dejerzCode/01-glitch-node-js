var axios = require("axios");
let promises = [];
var qs = require("qs");
var data = qs.stringify({
  action: "wp_ulike_process",
  id: "2070",
  nonce: "4272287c33",
  type: "post",
  template: "wpulike-animated-heart",
  displayLikers: "",
  likersTemplate: "",
});
var config = {
  method: "post",
  url: "https://misiontaiwan.org/wp-admin/admin-ajax.php",
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "es-ES,es;q=0.9,en;q=0.8,en-US;q=0.7",
    "content-length": "121",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://misiontaiwan.org",
    referer: "https://misiontaiwan.org/finalista/anikaab-com/",
    "sec-ch-ua":
      '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest",
  },
  data: data,
  timeout: 3000,
};

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function waitAndDo(times) {
  if(times < 1) {
    return;
  }

  setTimeout(function() {

    // Do something here
    console.log('----------');
    axiosFunc(config);
    waitAndDo(times-1);
  }, 65000)
}


const axiosFunc = async (_config) => {

  for (var i = 0; i < 10; i++) {
    axios(_config)
      .then(await sleep(500))
      .then(function (response) {
        console.log(JSON.stringify(response.data.data.data.up));
      })
      .catch(function (error) {
        console.log("Error");
      })
  }
  
};
axiosFunc(config);
waitAndDo(5700);
  



