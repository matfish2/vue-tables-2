### Installation

Create a folder called `vue-table` in your Laravel root directory. Copy `VueTablesInterface.php` and `EloquentVueTables.php` in `vue-table` folder. Edit `composer.json` and add following lines then run `composer dump-autoload`.

```json
"autoload": {
  "psr-4": {
    "": "vue-table/"
  }
},
```

If you are using L5 you need to replace the `Input` class on line 12 with the `Request` one and add `use App\Services\VueTables\VueTablesInterface;` in `EloquentVueTables.php`.


### Using Vue Table
```php
use App\EloquentVueTables;
use App\User;
...
...
...
$vuetables = new EloquentVueTables;
$users = $vuetables->get(new User, ['id', 'name', 'email']);
return $users

// With Relationships
$vuetables = new EloquentVueTables;
$users = $vuetables->get(new User, ['id', 'name', 'email'],['user_metas']);
return $users
```

#### Displaying Data from Relationships 
```js
options:{
  templates: {
    mobile: function(h, row) {
      var x = '';
      try{
        x = getObjects(row.user_metas, 'meta_name', 'mobile');
        x = x[0].meta_value;
      }catch(err){}
        return x
      }
  }
},
```

You need following JS function form `getObjects`
```js
function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}
```
