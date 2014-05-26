/*****************************************
 Copyright (c) 2014 Dom Adams.
 Licensed under the MIT license.

 Local Storage Toolkit.
 Collection of local storage helper methods.

 guidelines:
 - add to documentation
 - maintain structure. only return data no other functionality.
 - only add toolkit helpers for re-usable functionality. put something in, get out another.
 - use global vars when repeating the same value.

 *****************************************/

if (typeof LS === 'undefined') {
    var LS = {};
}

LS.localStorageHelpers = (function () {

    /*****************************************
     TOOLKIT HELPERS
     small helper methods used only within the
     toolkit to return correct data format.
     *****************************************/

    //Check if browser supports local storage
    function _storageSupport() {
        if (typeof (Storage) !== "undefined") {
            return true;
        } else {
            return false;
        }
    }

    //JSON HELPERS
    function _stringifyJSON(data) {
        return JSON.stringify(data);
    }

    function _parseJSON(data) {
        return JSON.parse(data);
    }

    //XML HELPERS
    function _serializeXMLToString(data) {
        return new XMLSerializer().serializeToString(data);
    }

    function _parseToXML(data) {
        if(window.DOMParser){
            return new DOMParser().parseFromString(data,"text/xml");
        } 
        else // Internet Explorer
        {
            xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async=false;
            return xmlDoc.loadXML(data);  
        }
    }

    //INTEGER HELPERS
    function _parseInteger(data) {
        return parseInt(data);
    }

    //FLOAT HELPERS
    function _parseFloatNumber(data) {
        return parseFloat(data);
    }

    //BOOLEAN HELPERS
    function _parseBooleanValue(data) {
        return data == "true" ? true : false
    }

    /*****************************************
     PUBLIC SCOPE
     all api method names
     *****************************************/
    return {
        storageSupport: _storageSupport,                //check to see if browsers supports local storage.
        stringifyJSON: _stringifyJSON,                  //stringify a json object ready to store it
        parseJSON: _parseJSON,                          //parse string to JSON from storage.
        serializeXMLToString: _serializeXMLToString,    //serialize xml to string for storage
        parseToXML: _parseToXML,                        //sparse string to xml from storage
        parseInteger: _parseInteger,                    //parse stored string to integer
        parseFloatNumber: _parseFloatNumber,            //parse stored string to float
        parseBooleanValue: _parseBooleanValue           //parse stored string to boolean value
    }
}());

LS.browserLocalStorage = (function () {

    var storageSupport = LS.localStorageHelpers.storageSupport();

    function _setLocalStorage(key, value, dataType) {
        if (storageSupport) {
            switch (dataType.toLowerCase()) {
                case "json":
                    window.localStorage.setItem(key, LS.localStorageHelpers.stringifyJSON(value));
                    break;
                case "xml":
                    window.localStorage.setItem(key, LS.localStorageHelpers.serializeXMLToString(value));
                    break;
                default:
                    window.localStorage.setItem(key, value);
            }
        } else {
            return;
        }
    }

    function _getLocalStorage(key, dataType) {
        if (storageSupport) {
            switch (dataType.toLowerCase()) {
                case "json":
                    return LS.localStorageHelpers.parseJSON(window.localStorage.getItem(key));
                    break;
                case "xml":
                    return LS.localStorageHelpers.parseToXML(window.localStorage.getItem(key));
                    break;
                case "int":
                    return LS.localStorageHelpers.parseInteger(window.localStorage.getItem(key));
                    break;
                case "float":
                    return LS.localStorageHelpers.parseFloatNumber(window.localStorage.getItem(key));
                    break;
                case "boolean":
                    return LS.localStorageHelpers.parseBooleanValue(window.localStorage.getItem(key));
                    break;
                default:
                    return window.localStorage.getItem(key);
            }
        } else {
            return null;
        }
    }

    function _removeItemLocalStorage(key) {
        if (storageSupport) {
            window.localStorage.removeItem(key);
        } else {
            return null
        }
    }

    function _clearLocalStorage() {
        if (storageSupport) {
            window.localStorage.clear();
        } else {
            return null
        }
    }

    /*****************************************
     PUBLIC SCOPE
     all api method names
     *****************************************/
    return {
        setLocalStorage: _setLocalStorage,                  //set local storage for given key.
        getLocalStorage: _getLocalStorage,                  //get local storage for given key.
        removeItemLocalStorage: _removeItemLocalStorage,    //remove item from local storage for given key.
        clearLocalStorage: _clearLocalStorage               //clear all local storage
    }

}());

LS.browserSessionStorage = (function () {

    var storageSupport = LS.localStorageHelpers.storageSupport();

    function _setSessionStorage(key, value, dataType) {
        if (storageSupport) {
            switch (dataType.toLowerCase()) {
                case "json":
                    window.sessionStorage.setItem(key, LS.localStorageHelpers.stringifyJSON(value));
                    break;
                case "xml":
                    window.sessionStorage.setItem(key, LS.localStorageHelpers.serializeXMLToString(value));
                    break;
                default:
                    window.sessionStorage.setItem(key, value);
            }
        } else {
            return null;
        }
    }

    function _getSessionStorage(key, dataType) {
        if (storageSupport) {
            switch (dataType.toLowerCase()) {
                case "json":
                    return LS.localStorageHelpers.parseJSON(window.sessionStorage.getItem(key));
                    break;
                case "xml":
                    return LS.localStorageHelpers.parseToXML(window.sessionStorage.getItem(key));
                    break;
                case "int":
                    return LS.localStorageHelpers.parseInteger(window.sessionStorage.getItem(key));
                    break;
                case "float":
                    return LS.localStorageHelpers.parseFloatNumber(window.sessionStorage.getItem(key));
                    break;
                case "boolean":
                    return LS.localStorageHelpers.parseBooleanValue(window.sessionStorage.getItem(key));
                    break;
                default:
                    return window.sessionStorage.getItem(key);
            }
        } else {
            return null;
        }
    }

    function _removeItemSessionStorage(key) {
        if (storageSupport) {
            window.sessionStorage.removeItem(key);
        } else {
            return null
        }
    }

    function _clearSessionStorage() {
        if (storageSupport) {
            window.sessionStorage.clear();
        } else {
            return null
        }
    }

    /*****************************************
     PUBLIC SCOPE
     all api method names
     *****************************************/
    return {
        setSessionStorage: _setSessionStorage,                  //set session storage for given key.
        getSessionStorage: _getSessionStorage,                  //get session storage for given key.
        removeItemSessionStorage: _removeItemSessionStorage,    //remove item from session storage for given key.
        clearSessionStorage: _clearSessionStorage               //clear all session storage
    }

}());
