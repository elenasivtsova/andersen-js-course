/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export class Musician {
  constructor(url) {
    this.url = url;
  }

  async getAlbums() {
    return new Promise(async (resolve, reject) => {
      if (this.url) {
        try {
          const data = await fetch(this.url);
          const jsonData = await data.json();
          resolve(jsonData);
        } catch (err) {
          reject(err);
        }
      } else {
        reject(new Error('Url not found'));
      }
    });
  }
}
