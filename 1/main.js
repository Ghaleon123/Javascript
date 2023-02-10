function temperatureConverter(valNum) {
    valNum = Number.parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(9/5)*valNum+32;
  }