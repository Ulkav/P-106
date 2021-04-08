prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lgdHnE6h0/',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
  
function speak(){
  var synth = window.speechSynthesis;
  speak_data_1 = "The first prediction is " + prediction_1;
  speak_data_2 = "And the second prediction is " + prediction_2;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
  synth.speak(utterThis);
}


  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_hand_gesture").innerHTML = results[0].label;
    document.getElementById("result_hand_gesture2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == "Cool")
    {
	    document.getElementById("update_hand_gesture").innerHTML = "&#129304;";
    }
    if(results[0].label == "Amazing")
    {
	    document.getElementById("update_hand_gesture").innerHTML = "&#128076";
    }
    if(results[0].label == "Victory")
    {
	    document.getElementById("update_hand_gesture").innerHTML = "&#9996";
    }

    if(results[0].label == "Stop")
    {
	    document.getElementById("update_hand_gesture").innerHTML = "&#9995;";
    }
    if(results[0].label == "Best")
    {
	    document.getElementById("update_hand_gesture").innerHTML = "&#128077;";
    }
    if(results[0].label == "Unique")
    {
	    document.getElementById("update_hand_gesture").innerHTML = "&#128406;";
    }
    if(results[0].label == "Not Quite Nice")
    {
	    document.getElementById("update_hand_gesture").innerHTML = "&#128078;";
    }

    if(results[0].label == "Hive-Five")
    {
	    document.getElementById("update_hand_gesture").innerHTML = "&#128075;";
    }
    


    if(results[1].label == "Cool")
    {
	    document.getElementById("update_hand_gesture2").innerHTML = "&#129304;";
    }
    if(results[1].label == "Amazing")
    {
	    document.getElementById("update_hand_gesture2").innerHTML = "&#128076";
    }
    if(results[1].label == "Victory")
    {
	    document.getElementById("update_hand_gesture2").innerHTML = "&#9996";
    }

    if(results[1].label == "Stop")
    {
	    document.getElementById("update_hand_gesture2").innerHTML = "&#9995;";
    }
    if(results[1].label == "Best")
    {
	    document.getElementById("update_hand_gesture2").innerHTML = "&#128077;";
    }
    if(results[1].label == "Unique")
    {
	    document.getElementById("update_hand_gesture2").innerHTML = "&#128406;";
    }
    if(results[1].label == "Not Quite Nice")
    {
	    document.getElementById("update_hand_gesture2").innerHTML = "&#128078;";
    }

    if(results[1].label == "Hive-Five")
    {
	    document.getElementById("update_hand_gesture2").innerHTML = "&#128075;";
    }
    
  }
}

