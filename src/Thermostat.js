DEFAULT_TEMP = 20;
DEFAULT_MIN = 10;
PSON_MAX = 25;
PSOFF_MAX = 32;

function Thermostat(){
  this.temperature = DEFAULT_TEMP
  this.powerSave
  this.maximum = PSON_MAX
}

Thermostat.prototype.up = function(){
  if (this.temperature < this.maximum) {
    this.temperature += 1
  }
}

Thermostat.prototype.down = function(){
  if (this.temperature > DEFAULT_MIN) {
    this.temperature -= 1
  }
}

Thermostat.prototype.powerSaveSwitch = function(){
  if (this.maximum == PSOFF_MAX) {
    this.maximum = PSON_MAX
  } else {
    this.maximum = PSOFF_MAX
  }
}

Thermostat.prototype.reset = function(){
  this.temperature = DEFAULT_TEMP
}

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < 18) {
    return 'low-usage'
  } else if (this.temperature < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
}
