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
}

export default new Utils();
