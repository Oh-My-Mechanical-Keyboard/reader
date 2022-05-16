
const kbtrm = require('./dist/index.js')
const fs = require('fs')
const glob = require('glob')

var data = {
    "generatedAt": 1637136838196,
    "version": "0.1.2",
    "theme": {
        "alpha": { "c": "#363434", "t": "#E8C4B8" },
        "mod": { "c": "#363434", "t": "#E8C4B8" },
        "accent": { "c": "#E8C4B8", "t": "#363434" }
    },
    "definitions": {}
}

let jsons = glob.sync('./keyboards/**/*.json');
let kbnum = 0
for (const keyboard of jsons) {
    console.log(`Processing ${keyboard}`);
    let keyboard_data = JSON.parse(fs.readFileSync(keyboard).toString());
    let via_data = kbtrm.keyboardDefinitionV2ToVIADefinitionV2(keyboard_data);
    let keyboard_vidpid = via_data.vendorProductId;
    data.definitions[keyboard_vidpid] = via_data;
    kbnum++
}


// Set date
data.generatedAt = + new Date();

console.log(`Finished. Added ${kbnum} keyboards.`);

// Write final JSON
fs.writeFileSync('keyboards.v2.json', JSON.stringify(data));
