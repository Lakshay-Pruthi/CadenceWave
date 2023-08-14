const clientId = "ba9aff8e7d04457798b7f52fd3552d8c";
const clientSecret = "6783c55f7c1140dab23ac629479f42c3";

export const _getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  const TOKEN = data.access_token;
  return TOKEN;
};
