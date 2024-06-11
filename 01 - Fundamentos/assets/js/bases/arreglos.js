let arregloCosas = [
    true,
    123,
    'Diego',
    1+2,
    function(){},
    ()=>{},
    {a:1},
    ['X','Megaman','Zero','Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ]]
];
 
console.log(arregloCosas[arregloCosas.length-1][arregloCosas[arregloCosas.length-1].length-1][arregloCosas[arregloCosas[arregloCosas.length-1].length-1].length-1]);
console.log(arregloCosas[arregloCosas.length-1][arregloCosas[arregloCosas.length-1].length-1]);
console.log(arregloCosas[arregloCosas.length-1]);
console.log({arregloCosas});
console.log(arregloCosas[7][4][1]);