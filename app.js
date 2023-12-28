
var ip = "http://192.168.100.130";

readSensors();

function readSensors() {
    var route = "/sensors";
    var url = ip + route;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function() {
        
        var meCadena = xmlhttp.responseText;
        const meJson = JSON.parse(meCadena);
  
        document.getElementById('temp').innerHTML = meJson.Temperature;
        document.getElementById('hum').innerHTML = meJson.Humidity;
        document.getElementById('volt').innerHTML = meJson.Voltage;
        document.getElementById('fuel').innerHTML = meJson.Capacity;
        document.getElementById('statusCh1').innerHTML = meJson.CH1;
        document.getElementById('statusCh2').innerHTML = meJson.CH2;
        document.getElementById('statusCh3').innerHTML = meJson.CH3;
        document.getElementById('statusCh4').innerHTML = meJson.CH4;
        document.getElementById('statusCh5').innerHTML = meJson.CH5;
        document.getElementById('statusCh6').innerHTML = meJson.CH6;
        document.getElementById('statusBAT').innerHTML = meJson.Charge;
    }
    xmlhttp.send(); 
  }

wIP.addEventListener('click', 
    function() {
        ipNum = "192.168.100.130";
        ip = "http://" + ipNum;

        document.getElementById('wIP').style.textDecoration = "underline";
        document.getElementById('hIP').style.textDecoration = "none";
        document.getElementById('exIP').style.textDecoration = "none";
});
hIP.addEventListener('click', 
    function() {
        ipNum = "192.168.4.1";
        ip = "http://" + ipNum;

        document.getElementById('wIP').style.textDecoration = "none";
        document.getElementById('hIP').style.textDecoration = "underline";
        document.getElementById('exIP').style.textDecoration = "none";
});
exIP.addEventListener('click', 
    function() {
        ipNum = "192.168.0.123:10130";
        ip = "http://" + ipNum;

        document.getElementById('wIP').style.textDecoration = "none";
        document.getElementById('hIP').style.textDecoration = "none";
        document.getElementById('exIP').style.textDecoration = "underline";
});

vol.addEventListener('click', 
	function() {
      readSensors();
	}
);
fue.addEventListener('click', 
function() {
      readSensors();
	}
);
tem.addEventListener('click', 
	function() {
      readSensors();
	}
);
hu.addEventListener('click', 
function() {
      readSensors();
	}
);
stat.addEventListener('click', 
function() {
      readSensors();
	}
);

c1.addEventListener('click', 
	function() {
		if(document.getElementById('statusCh1').innerHTML == "ON"){
      offch1();
      document.getElementById('statusCh1').innerHTML = "OFF";
    }
    else if(document.getElementById('statusCh1').innerHTML == "OFF"){
      onch1();
      document.getElementById('statusCh1').innerHTML = "ON";
    }
    else if(document.getElementById('statusCh1').innerHTML == "off"){
      onch1();
      document.getElementById('statusCh1').innerHTML = "ON";
    }
    else {}
    readSensors();
	}
);

function onch1(){
    var xhr = new XMLHttpRequest();
    var route = "/onch1";
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}
function offch1(){
    var xhr = new XMLHttpRequest();
    var route = "/offch1";
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}

c2.addEventListener('click', 
	function() {
		if(document.getElementById('statusCh2').innerHTML == "ON"){
      offch2();
      document.getElementById('statusCh2').innerHTML = "OFF";
    }
    else if(document.getElementById('statusCh2').innerHTML == "OFF"){
      onch2();
      document.getElementById('statusCh2').innerHTML = "ON";
    }
    else if(document.getElementById('statusCh2').innerHTML == "off"){
      onch2();
      document.getElementById('statusCh2').innerHTML = "ON";
    }
    else {}
    readSensors();
	}
);
function onch2(){
    var xhr = new XMLHttpRequest();
    var route = "/onch2"
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}
function offch2(){
    var xhr = new XMLHttpRequest();
    var route = "/offch2"
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}

c3.addEventListener('click', 
	function() {
		if(document.getElementById('statusCh3').innerHTML == "ON"){
      offch3();
      document.getElementById('statusCh3').innerHTML = "OFF";
    }
    else if(document.getElementById('statusCh3').innerHTML == "OFF"){
      onch3();
      document.getElementById('statusCh3').innerHTML = "ON";
    }
    else if(document.getElementById('statusCh3').innerHTML == "off"){
      onch3();
      document.getElementById('statusCh3').innerHTML = "ON";
    }
    else {}
    readSensors();
	}
);
function onch3(){
    var xhr = new XMLHttpRequest();
    var route = "/onch3"
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}
function offch3(){
    var xhr = new XMLHttpRequest();
    var route = "/offch3"
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}

c4.addEventListener('click', 
	function() {
		if(document.getElementById('statusCh4').innerHTML == "ON"){
      offch4();
      document.getElementById('statusCh4').innerHTML = "OFF";
    }
    else if(document.getElementById('statusCh4').innerHTML == "OFF"){
      onch4();
      document.getElementById('statusCh4').innerHTML = "ON";
    }
    else if(document.getElementById('statusCh4').innerHTML == "off"){
      onch4();
      document.getElementById('statusCh4').innerHTML = "ON";
    }
    else {}
    readSensors();
	}
);
function onch4(){
    var xhr = new XMLHttpRequest();
    var route = "/onch4"
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}
function offch4(){
    var xhr = new XMLHttpRequest();
    var route = "/offch4"
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}

c5.addEventListener('click', 
	function() {
		if(document.getElementById('statusCh5').innerHTML == "ON_Manual"){
      offch5();
      document.getElementById('statusCh5').innerHTML == "OFF";
    }
    else if(document.getElementById('statusCh5').innerHTML == "ON_Auto"){
      offch5();
      document.getElementById('statusCh5').innerHTML == "OFF";
    }
    else if(document.getElementById('statusCh5').innerHTML == "OFF"){
      onch5();
      document.getElementById('statusCh5').innerHTML == "ON";
    }
    else if(document.getElementById('statusCh5').innerHTML == "off"){
      onch5();
      document.getElementById('statusCh5').innerHTML == "ON";
    }
    else {}
    readSensors();
	}
);
function onch5(){
    var xhr = new XMLHttpRequest();
    var route = "/onch5"
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}
function offch5(){
    var xhr = new XMLHttpRequest();
    var route = "/offch5"
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}

c6.addEventListener('click', 
	function() {
		if(document.getElementById('statusCh6').innerHTML == "ON"){
      offch6();
      document.getElementById('statusCh6').innerHTML = "OFF";
    }
    else if(document.getElementById('statusCh6').innerHTML == "OFF"){
      onch6();
      document.getElementById('statusCh6').innerHTML = "ON";
    }
    else if(document.getElementById('statusCh6').innerHTML == "off"){
      onch6();
      document.getElementById('statusCh6').innerHTML = "ON";
    }
    else if(document.getElementById('statusCh6').innerHTML == "CUT OFF"){
        onch6();
        document.getElementById('statusCh6').innerHTML = "ON";
      }
    else {}
    readSensors();
	}
);
function onch6(){
    var xhr = new XMLHttpRequest();
    var route = "/onch6"
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}
function offch6(){
    var xhr = new XMLHttpRequest();
    var route = "/offch6"
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();
    
    readSensors();
}

function onAll(){
    var xhr = new XMLHttpRequest();
    var route = "/onAll";
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();

    readSensors();
    
    document.getElementById('statusCh1').innerHTML = "ON";
    document.getElementById('statusCh2').innerHTML = "ON";
    document.getElementById('statusCh3').innerHTML = "ON";
    document.getElementById('statusCh4').innerHTML = "ON";
}
function offAll(){
    var xhr = new XMLHttpRequest();
    var route = "/offAll";
    var url = ip + route;
    xhr.open("GET", url);
    xhr.send();

    readSensors();
    
    document.getElementById('statusCh1').innerHTML = "OFF";
    document.getElementById('statusCh2').innerHTML = "OFF";
    document.getElementById('statusCh3').innerHTML = "OFF";
    document.getElementById('statusCh4').innerHTML = "OFF";
}

var upValues = window.setInterval(function(){
  readSensors();
}, 6000);
