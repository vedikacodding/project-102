Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/v_sl95BzE/model.json',modelLoaded);