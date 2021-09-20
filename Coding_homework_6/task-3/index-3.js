let styles = [
    {name: 'color', property: 'black'},
    {name: 'font-size', property: '20px'},
    {name: 'text-align', property: 'center'},
    {name: 'text-decoration', property: 'none'},
];

function writeText(text, array) {
    document.write(`<p style='${array[0].name}: ${array[0].property}; ${array[1].name}: ${array[1].property};
    ${array[2].name}: ${array[2].property}; ${array[3].name}: ${array[3].property};'>${text}</p>`);
};

writeText('Hello, world!', styles);
