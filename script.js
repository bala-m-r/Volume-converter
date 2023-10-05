document.querySelector("form").addEventListener("submit", function (e) {
  var formData = new FormData(this);
  e.preventDefault();
  var value = formData.get("valueInput");
  var valueUnit = formData.get("unit1");
  var resultUnit = formData.get("unit2");
  var resultValue = literTo(resultUnit, toLiter(valueUnit, value));
  document.getElementById("result").value = resultValue;
});
function toLiter(unit, value) {
  var x = 0;
  switch (unit) {
    case "cubic-meter": {
      x = value * 1000;
      break;
    }

    // case "cubic-kilometer": {
    //   x = value * 1000000000000;
    //   break;
    // }

    case "cubic-centimeter": {
      x = value * 0.001;
      break;
    }
    case "cubic-milimeter": {
      x = value * 0.000001;
      break;
    }
    case "cubic-decimeter": {
      x = value;
      break;
    }
    // case "cubic-mile": {
    //   x = value * 4168181825441;
    //   break;
    // }
    case "cubic-yard": {
      x = value * 764.55485798;
      break;
    }
    case "cubic-foot": {
      x = value * 28.316846592;
      break;
    }
    case "cubic-inch": {
      x = value * 0.016387064;
      break;
    }
    case "milli-liter": {
      x = value * 0.001;
      break;
    }
    case "kilo-liter": {
      x = value * 1000;
      break;
    }
    case "liter": {
      x = value;
      break;
    }
    // case "exa-liter": {
    //   x = value * 999999999999999900n;
    //   break;
    // }
    // case "peta-liter": {
    //   x = value * 1000000000000000;
    //   break;
    // }
    // case "tera-liter": {
    //   x = value * 1000000000000;
    //   break;
    // }
    // case "giga-liter": {
    //   x = value * 1000000000;
    //   break;
    // }
    case "mega-liter": {
      x = value * 1000000;
      break;
    }
    case "gallon": {
      x = value * 3.785411784;
      break;
    }
    case "quart": {
      x = value * 0.946352946;
      break;
    }
    case "pint": {
      x = value * 0.473176473;
      break;
    }
    case "tablespoon": {
      x = value * 0.0147867648;
      break;
    }
    case "teaspoon": {
      x = value * 0.0049289216;
      break;
    }
  }

  return x;
}

function literTo(unit, value) {
  var x = 0;
  switch (unit) {
    case "cubic-meter": {
      x = value * 0.001;
      break;
    }

    // case "cubic-kilometer": {
    //   x = value * 1000000000000;
    //   break;
    // }

    case "cubic-centimeter": {
      x = value * 1000;
      break;
    }
    case "cubic-milimeter": {
      x = value * 1000000;
      break;
    }
    case "cubic-decimeter": {
      x = value;
      break;
    }
    // case "cubic-mile": {
    //   x = value * 4168181825441;
    //   break;
    // }
    case "cubic-yard": {
      x = value * 0.0013079506;
      break;
    }
    case "cubic-foot": {
      x = value * 0.0353146667;
      break;
    }
    case "cubic-inch": {
      x = value * 61.023744095;
      break;
    }
    case "milli-liter": {
      x = value * 1000;
      break;
    }
    case "kilo-liter": {
      x = value * 0.001;
      break;
    }
    case "liter": {
      x = value;
      break;
    }
    // case "exa-liter": {
    //   x = value * 999999999999999900n;
    //   break;
    // }
    // case "peta-liter": {
    //   x = value * 1000000000000000;
    //   break;
    // }
    // case "tera-liter": {
    //   x = value * 1000000000000;
    //   break;
    // }
    // case "giga-liter": {
    //   x = value * 1000000000;
    //   break;
    // }
    case "mega-liter": {
      x = value * 0.000001;
      break;
    }
    case "gallon": {
      x = value * 0.2641720524;
      break;
    }
    case "quart": {
      x = value * 1.0566882094;
      break;
    }
    case "pint": {
      x = value * 2.1133764189;
      break;
    }
    case "tablespoon": {
      x = value * 67.628045404;
      break;
    }
    case "teaspoon": {
      x = value * 202.88413621;
      break;
    }
  }

  return x;
}
