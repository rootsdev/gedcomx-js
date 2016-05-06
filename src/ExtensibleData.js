/**
 * A set of data that supports extension elements.
 */
var ExtensibleData = function(json){
  
  // Prevent errors when creating an object without using `new`
  var instance = Object.create(ExtensibleData.prototype);
  
  if(json){
    if(json.id){
      instance.id = json.id;
    }
  }
  
  return instance;
};

ExtensibleData.prototype.getId = function(){
  return this.id;
};

ExtensibleData.prototype.setId = function(id){
  this.id = id;
  return this;
};

module.exports = ExtensibleData;