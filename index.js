const http = require("k6/http");

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  vus: 1,
  duration: "10s",
};

export default function () {
  const url = "<API_URL>";
  const payload = JSON.stringify({
    key: "value",
  });

  const token = `<token>`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  http.post(url, payload, params);
}
