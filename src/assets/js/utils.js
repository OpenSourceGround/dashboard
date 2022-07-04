class Utils {
  hexToRgb(hex, alpha) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(
      result[2],
      16
    )}, ${parseInt(result[3], 16)}, ${alpha})`;
  }
  randomString(length = 10) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  appendJs(links) {
    links.forEach((link) => {
      let tag = document.createElement("script");
      tag.setAttribute("src", link);
      document.body.appendChild(tag);
    });
  }
  appendCss(links) {
    links.forEach((link) => {
      let tag = document.createElement("link");
      tag.setAttribute("href", link);
      tag.setAttribute("rel", "stylesheet");
      document.body.appendChild(tag);
    });
  }
  fakeDatasetsArray(length = 25, min, max) {
    let data = [];
    for (let i = 0; i < length; i++) {
      data.push(Math.floor(min + Math.random() * (max - min + 1)));
    }
    return data;
  }
  fakeLabelsArray(length = 25) {
    let data = [];
    for (let i = 0; i < length; i++) {
      data.push(new Date().toLocaleDateString());
    }
    return data;
  }
  fakeColorsArray(length = 25, alpha = 1) {
    let data = [];
    for (let i = 0; i < length; i++) {
      data.push(
        this.hexToRgb(Math.floor(Math.random() * 16777215).toString(16), alpha)
      );
    }
    return data;
  }
  setDefaultTheme() {
    if (localStorage.theme == null) {
      localStorage.theme = "purp";
    }
  }
  getTheme() {
    return localStorage.theme;
  }
  getThemeColors() {
    return {
      purp: "6755ED",
      blue: "4287F5",
      flush: "D14545",
      apple: "4DC44D",
      steel: "1D1B25",
      wattle: "DBC944",
      orchid: "DB44D9",
      sorbus: "FC7B03",
      turquoise: "2CC8D4",
    };
  }
  loadThemeScrollBar() {
    let theme = this.getThemeColors()[this.getTheme()];
    let hex = `#${theme}`;
    let code = `
::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: ${this.hexToRgb(theme, 1)} !important;
  background: linear-gradient(
    90deg,
    ${this.hexToRgb(theme, 1)} 0%,
    ${this.hexToRgb(theme, 1)} 35%
  );
}`;

    let tag = document.createElement("style");
    tag.innerHTML = code;
    document.body.appendChild(tag);
  }
}

export default new Utils();
