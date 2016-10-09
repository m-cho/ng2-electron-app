const cheerio = require('cheerio');
const fs = require('fs');

const generatedIndexContent = fs.readFileSync('./app/dist/index.html');
$gen = cheerio.load(generatedIndexContent);

let baseIndexContent = fs.readFileSync('./app/src/index.html', 'utf-8');
$base = cheerio.load(baseIndexContent);
let srcs = [];

$gen('body script').each(function(index, script) {
    srcs.push($gen(this).attr('src'));
})

for(let src of srcs) {
    $base('body').append('<script src="src://' + src + '">');
}

fs.writeFileSync('./index.html', $base.html());