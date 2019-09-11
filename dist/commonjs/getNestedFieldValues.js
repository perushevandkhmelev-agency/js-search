"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNestedFieldValues;
/**
 * Find and return nested object values.
 *
 * @param object to crawl
 * @param path Property path
 * @returns {any}
 */
function getNestedFieldValues(object, path) {
  path = path || [];
  object = object || {};

  var values = [];
  var value = object;
  // walk down the property path
  for (var i = 0; i < path.length; i++) {
    if (path[i] == "[]") {
      for (var j = 0; j < value.length; j++) {
        values = values.concat(getNestedFieldValues(value[j], path.slice(i + 1, path.length)));
      }
      return values;
    } else {
      value = value[path[i]];
      if (value == null || value == undefined) {
        return [];
      }
    }
  }

  return [value];
}
//# sourceMappingURL=getNestedFieldValues.js.map