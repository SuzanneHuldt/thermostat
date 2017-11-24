
  $(document).ready(function() {
    $("#Off").hide();
    $(".usage").hide();
    var thermostat = new Thermostat

    if(thermostat.energyUsage() === 'low-usage') {
      $("#low_usage").show();
    } else if (thermostat.energyUsage() === 'medium-usage'){
      $("#medium_usage").show();
    } else {
      $("#high_usage").show();

    }

    $(".buttonUP").click(function() {
      thermostat.up()
      $(".temp").text(thermostat.temperature)

      alert( "Temperature will be raised by 1 degree" );
      if(thermostat.energyUsage() === 'low-usage') {
        low();
      } else if (thermostat.energyUsage() === 'medium-usage'){
        medium();
      } else {
        high();

      }
    
    });

    $(".buttonDOWN").click(function() {
      thermostat.down()
      $(".temp").text(thermostat.temperature)
      alert("Temperature will be lowered by 1 degree");
      if(thermostat.energyUsage() === 'low-usage') {
        low();
      } else if (thermostat.energyUsage() === 'medium-usage'){
        medium();
      } else {
        high();

      }
    });

    $(".buttonSAVE").click(function() {

      thermostat.powerSaveSwitch()
      if (thermostat.powerSave == true){
        $("#Off").show();
        $("#On").hide();
      console.log(thermostat.powerSave);
      } else {
        $("#On").show();
        $("#Off").hide();
      }

    });


    high = function() {
      $("#high_usage").show();
      $("#medium_usage").hide();
      $("#low_usage").hide();
    }

    medium = function() {
      $("#high_usage").hide();
      $("#medium_usage").show();
      $("#low_usage").hide();
    }

    low = function() {
      $("#high_usage").hide();
      $("#medium_usage").hide();
      $("#low_usage").show();
    }
  });
