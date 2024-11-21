(function(window, undefined) {
  var dictionary = {
    "1ea5719f-159c-49f2-adc6-60115672bc4e": "Lights",
    "1321bb34-548a-4d9e-a1d5-f84c112da37b": "Door Lock",
    "1796777d-508d-430b-bfa1-029907bccb03": "Glass Door",
    "7b7d0567-02a5-4e0e-ae27-761a1d8b4c28": "TV",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "cb2c5fb0-d432-4013-b50a-f39c3992f295": "Ac",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);