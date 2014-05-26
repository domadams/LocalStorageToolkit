# Local Storage Toolkit

A helper library that enables you to call local and session storage methods through the API. The Local Storage Toolkit
will handle the data type you pass it and convert it to and from a string so that it can be stored.


## Methods

### Local Storage

Local Storage Toolkit Provides the following methods

```
    LS.LocalStorageToolkit.setLocalStorage(key,data,dataType)
```

Sets item in local storage using the key and data type provided. E.G JSON, XML, INTEGER - Defaults to string

```
    LS.LocalStorageToolkit.getLocalStorage(key,dataType)
```

Gets item in local storage using the key and data type provided. No item found then returns null.

```
    LS.LocalStorageToolkit.removeItemLocalStorage(key)
```

Remove and item from local storage for the given key.

```
    LS.LocalStorageToolkit.clearLocalStorage()
```
Clear all items from local storage


### Session Storage

```
    LS.LocalStorageToolkit.setSessionStorage(key,data,dataType)
```

Sets item in session storage using the key and data type provided. E.G JSON, XML, INTEGER - Defaults to string

```
    LS.LocalStorageToolkit.getSessionStorage(key,dataType)
```

Gets item in session storage using the key and data type provided. No item found then returns null.

```
    LS.LocalStorageToolkit.removeItemSessionStorage(key)
```

Remove and item from session storage for the given key.

```
    LS.LocalStorageToolkit.clearSessionStorage()
```
Clear all items from session storage


## How To Use

Include Local Storage Toolkit at bottom of page

```
    <script type="text/javascript" src="<pathTo>LocalStorageToolkit.js"></script>
```

You can then use local storage toolkit to set and get an item in the following ways

```
    <script type="text/javascript">
        LS.LocalStorageToolkit.setLocalStorage('KEY','DATA', 'DATA TYPE');
        console.log(LS.LocalStorageToolkit.getLocalStorage('KEY','DATA TYPE'));
    </script>
```
