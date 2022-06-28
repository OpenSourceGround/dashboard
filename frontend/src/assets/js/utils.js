class Utils {
  hexToRgb(hex, alpha) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(
      result[2],
      16
    )}, ${parseInt(result[3], 16)}, ${alpha})`;
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
    console.log(data);
    return data;
  }
  fakeColorsArray(length = 25, alpha = 1) {
    let data = [];
    for (let i = 0; i < length; i++) {
      data.push(
        this.hexToRgb(Math.floor(Math.random() * 16777215).toString(16), alpha)
      );
    }
    console.log(data);
    return data;
  }
}

export default new Utils();
