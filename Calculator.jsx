function add( x , y ){
    return x + y;
    };
  
    function sub( x , y ){
    return x - y;
    };
    function mul( x , y ){
      return x * y;
      };
      function div( x , y ){
        let div = x / y;
        div = div.toFixed(2);
        return div;
        };

export {add , sub , mul , div}        