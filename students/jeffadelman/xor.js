// Using a ternary operator. Implement an exclusive OR function called `preferredName` that has the following interface:
var preferredName = function(x, y) {
    return (!!x == !!y) ? false : x || y;
};

var FirstName,
    LastName;
 
preferredName(FirstName, LastName);
// -> false
 
FirstName = 'Hank';
 
preferredName(FirstName, LastName);
// -> 'Hank'
 
LastName = 'Yates';
 
preferredName(FirstName, LastName);
// -> false
 
FirstName = '';
 
preferredName(FirstName, LastName);
// -> 'Yates'