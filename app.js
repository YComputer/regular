
var output = (str, regex, target) => {
    target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
}

var str = `Is this This`;

var regex = /is/gi;

output(str, regex, document.querySelector('pre'));