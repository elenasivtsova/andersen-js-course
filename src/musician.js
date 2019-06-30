/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export class Musician {
  constructor(url) {
    this.url = url;
  }

  async getAlbums() {
    if (this.url) {
      return await await fetch(this.url).json();
    }
  }
}
