const $ = require("jquery");

export function replaceImages() {
  const $allElements = $("*");
  $allElements.each((index, item) => {
    const date = new Date();
    let $item = $(item);
    if (item.nodeName === "IMG") {
      let imgWidth = item.width;
      let imgHeight = item.height;
      console.log("width:", imgWidth, "height:", imgHeight);
      if (imgHeight !== 0) {
        item.src = `https://picsum.photos/${imgWidth}/${imgHeight}?time=${date.getTime()}`;
      } else {
        item.src = `https://picsum.photos/${imgWidth}?time=${date.getTime()}`;
      }
    } else if ($item.css("background-image").indexOf("url") != -1) {
      item.style.backgroundImage = `url('https://picsum.photos/2000?time=${date.getTime()}')`;
      $item.css("background-size", "cover");
      console.log("yes");
    }
  });
}
