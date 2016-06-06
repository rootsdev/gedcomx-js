module.exports = {
  
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
  }
  
};