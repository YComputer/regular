// var str = `Is this This`;
// var regex = /is/gi;

// var str = `Cat sat on the hat.`;
// var regex = /\./g;

var str = `foo
foobar
foobaz
fooboo`;
var regex = /foo/g


var output = (str, regex, target) => {
    target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
}
output(str, regex, document.querySelector('pre'));


function foo(n) {
    　　　　return function (i) {
        　　　　　　return n += i
    }
}