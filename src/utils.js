var utils = module.exports = {
  
  /**
   * Check whether the given object is an instance of the specified class.
   * The necessity for this is discussed in PR #13: https://github.com/rootsdev/gedcomx-js/pull/13
   * 
   * We put this functionality in a method to be DRY, even though it's short.
   * This could easily change in the future for correction and performance.
   * 
   * It could be handy to expose this on GedcomX somewhere so that users of the
   * library can use it too. But then we would need to add a way for them to
   * easily get the _gedxClass property without being tied to that private
   * property name. In other words, a static method such as Person.getClass()
   * 
   * @param {Object} obj
   * @param {String} className
   * @returns {Boolean}
   */
  isInstance: function(obj, className){
    return obj && Object.getPrototypeOf(obj) !== Object.prototype && obj._gedxClass === className;
  },
  
  /**
   * Returns a copy of the object with undefined attributes removed.
   * 
   * @param {Object} object
   * @return {Object}
   */
  removeEmpty: function(object){
    var dest = {};
    for(var a in object){
      if(object.hasOwnProperty(a) && object[a] !== undefined){
        dest[a] = object[a];
      }
    }
    return dest;
  },
  
  /**
   * Returns an object containing the properties from the source object
   * 
   * @param {Object} obj
   * @param {String[]} properties
   * @return {Object}
   */
  pick: function(object, properties){
    var dest = {},
        attr;
    for(var i = 0; i < properties.length; i++){
      attr = properties[i];
      if(object.hasOwnProperty(attr)){
        dest[attr] = object[attr];
      }
    }
    return dest;
  },
  
  /**
   * Merge multiple objects
   * 
   * Inspired by http://stackoverflow.com/a/16178864
   * 
   * @param {Object} destination
   * @param {Object} source
   * @param {Object=} source
   */
  merge: function(){
    var args = [].splice.call(arguments, 0),
        dest = args.shift(),
        src, attr;
    while(args.length > 0){
      src = args.shift();
      if(typeof src === 'object'){
        for(attr in src){
          if(src.hasOwnProperty(attr)){
            if(typeof src[attr] === 'object' && !Array.isArray(src[attr])){
              dest[attr] = utils.merge(dest[attr] || {}, src[attr]);
            } else {
              dest[attr] = src[attr];
            }
          }
        }
      }
    }
    return dest;
  },
  
  /**
   * Recursively calls .toJSON() on values in an object that have the .toJSON()
   * method defined.
   * 
   * @param {Object} object
   * @return {Object}
   */
  toJSON: function(object){
    
    // Arrays - recursively call utils.toJSON() on the array items
    if(Array.isArray(object)){
      return object.map(function(o){
        return utils.toJSON(o);
      });
    }
    
    // All remaining non-objects - just return them
    if(typeof object !== 'object'){
      return object;
    }
    
    // At this point we only have objects
    var dest = {},
        value;
    for(var a in object){
      if(object.hasOwnProperty(a)){
        value = object[a];
        
        // Skip undefined values
        if(typeof value === 'undefined'){
          continue;
        }
        
        // Dates - get their time. We have to deal with dates down here instead
        // of above because Date has a native toJSON method, meaning it would
        // be cause by the case below and have the method called but we don't
        // want to call the native method because it returns an ISO string while
        // GEDCOMX requires a timestamp.
        else if(typeof value.getTime === 'function'){
          dest[a] = value.getTime();
        }
        
        // Call the object's .toJSON() method if it's available
        else if (typeof value.toJSON === 'function'){
          dest[a] = value.toJSON();
        } 
        
        // Otherwise we recursively call utils.toJSON() on the value
        else {
          dest[a] = utils.toJSON(value);
        }
      }
    }
    return dest;
  }
  
};