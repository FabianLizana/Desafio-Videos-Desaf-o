// const moduloInsertarVideo = (function () {
//   function showVideo(urlVideo, idIframe) {                //mejorable todo esto con setAttribute
    //idIframe es string

//     const iframeInsertarVideo = document.getElementById(idIframe);
//     const loaderId = document.getElementById(`loader_${idIframe}`);
//     iframeInsertarVideo.src = urlVideo;

//     iframeInsertarVideo.addEventListener("load", function () {
//       loaderId.style.display = "none";
//       iframeInsertarVideo.style.display = "block";
//     });
//   }

//   return function (urlVideo, idIframe) {
//     showVideo(urlVideo, idIframe);
//   };
// })();
// export default moduloInsertarVideo;

const moduloInsertarVideo = (() => {                 // el de arriba era el original que tenia.
  const showVideo = (urlVideo, idIframe) => {
    const iframe = document.getElementById(idIframe);
    iframe.setAttribute("src", urlVideo);

    const loader = document.getElementById(`loader_${idIframe}`);
    loader.style.display = "none"; 
    iframe.style.display = "block";
  };

  return (urlVideo, idIframe) => showVideo(urlVideo, idIframe);
})();

export default moduloInsertarVideo;

