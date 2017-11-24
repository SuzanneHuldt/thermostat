
  $(document).ready(function() {

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

    $().click(function() {

    })

  });
