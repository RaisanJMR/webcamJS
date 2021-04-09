const videoEl = document.getElementById('webcam-vid');
const startWebcam = () => {
  if (navigator.mediaDevices.getUserMedia) {
    // console.log(navigator.mediaDevices);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoEl.srcObject = stream;
      })
      .catch((err) => {
        console.log('somenthing went wrong', err);
      });
  }
};
const stopWebcam = () => {
  var stream = videoEl.srcObject;
  var tracks = stream.getTracks();

  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    track.stop();
  }
    // console.log(stream);
    // console.log(tracks);
  videoEl.srcObject = null;
};
