
  $(document).ready(function() {
    $("#Off").hide();
    
    var thermostat = new Thermostat

    $(".buttonUP").click(function() {
      thermostat.up()
      $(".temp").text(thermostat.temperature)
      alert( "Temperature will be raised by 1 degree" );
      console.log(thermostat.temperature)
    });

    $(".buttonDOWN").click(function() {
      thermostat.down()
      $(".temp").text(thermostat.temperature)
      alert("Temperature will be lowered by 1 degree");
      console.log(thermostat.temperature)
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

  });
