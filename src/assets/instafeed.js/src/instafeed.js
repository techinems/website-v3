const axios = require("axios");
const fs = require('fs');

class Instagram {
  constructor() {
    const data = JSON.parse(fs.readFileSync("./config.json"));
    this.accessToken = data.access_token;
    this.expiration_time = data.expiration;
  }

  async refreshToken() {
    axios({
      url: 'https://graph.instagram.com/refresh_access_token',
      params: {
        grant_type: 'ig_refresh_token',
        access_token: this.accessToken
      }
    }).then(resp => {
        this.accessToken = resp.data['access_token'];
        this.expiration_time = Date.now() + resp.data['expires_in'] * 1000;
        this.saveConfig();
      }
    ).catch(error => {
      console.log(error.response)
    });
  }

  saveConfig() {
    const data = JSON.stringify({
      access_token: this.accessToken,
      expiration: this.expiration_time
    });
    fs.writeFile("./config.json", data, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  async getPhotos() {
    return axios({
      url: 'https://graph.instagram.com/me',
      params: {
        fields: 'media',
        access_token: this.accessToken
      }
    }).then(resp => {
      return resp.data;
    })
  }
}

module.exports = Instagram;
