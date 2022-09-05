// import * as aa from './dist/index.js'
const aa = require('./dist/index.js')
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
var keyboard_data = {
    "name": "Spring",
    "vendorId": "0x4f53",
    "productId": "0x5350",
    "lighting": "qmk_rgblight",
    "matrix": {
      "rows": 5,
      "cols": 15
    },
    "layouts": {
      "keymap": [
        [
          {
            "c": "#777777",
            "y":-0.1
          },
          "0,0",
          {
            "c": "#cccccc",
            "x": 0.25,
            "y":0.1
          },
          "0,1",
          "0,2",
          {
            "y":-0.1
          },
          "0,3",
          {
            "r":12,
            "y":-0.8,
            "x":0.1
          },
          "0,4",
          "0,5",
          "0,6",
          "0,7",
          {
            "x": 0.05,
            "r":-12,
            "y":3.3
          },
          "0,8",
          "0,9",
          "0,10",
          "0,11",
          {
            "r":0,
            "y":-2.6,
            "x":0.45
          },
          "0,12",
          {
            "y":0.1
          },
          "0,13",
          {
            "c": "#aaaaaa",
            "w": 2
          },
          "0,14"
        ],
        [
          {
            "x": -0.25
          },
          "1,0",  
          {
            "x":0.25,
            "w":1.5,
            "y":0.1
              
          },
          "1,1",
          {
            "c": "#cccccc"
          },
          "1,2",
          {
            "r":12,
            "y":-0.9,
            "x":0.3
          },
          "1,3",
          "1,4",
          "1,5",
          "1,6",
          {
            "x": 0.15,
            "r":-12,
            "y":3.3
          },
          "1,7",
          "1,8",
          "1,9",
          "1,10",
          {
            "r":0,
            "x":0.65,
            "y":-2.55
          },
          "1,11",
          "1,12",
          "1,13",
          {
            "w": 1.5
          },
          "1,14"
        ],
        [
          {
            "c": "#aaaaaa",           
            "x":-0.5
              
          },
          "2,0",
          {
            "w": 1.75, 
            "x": 0.3,
            "y":0.1
          },
          "2,1",
          {
            "c": "#cccccc"
          },
          "2,2",
          {
            "r":12,
            "y":-0.9,
            "x":0.55
          },
          "2,3",
          "2,4",
          "2,5",
          "2,6",
          {
            "x": 0.1,
            "r":-12,
            "y":3.3
          },
          "2,7",
          "2,8",
          "2,9",
          "2,10",
          {
            "r":0,
            "x":0.9,
            "y":-2.5
          },
          "2,11",
          "2,12",
          {
            "c": "#777777",
            "w": 2.25
          },
          "2,13"
        ],
        [
          {
            "c": "#aaaaaa",
            "w": 2.25,
            "x": 0.6,
            "y":0.1
          },
          "3,0",
          {
            "c": "#cccccc"
          },
          "3,1",
          {
            "r":12,
            "y":-0.9,
            "x":0.8
          },
          "3,2",
          "3,3",
          "3,4",
          "3,5",
          {
            "r":-12,
            "y":3.3,
            "x":-0.95
          },
          "3,6",
          "3,7",
          "3,8",
          "3,9",
          {
            "r":0,
            "x":1.1,
            "y":-2.5
          },
          "3,10",
          "3,11",
          {
            "c": "#aaaaaa"
          },
          "3,12",
          {
            "w": 1.75
          },
          "3,13"
        ],
        [
          {
            "x": 0.6,
            "y":0.1,
            "w":1.25
          },
          "4,0",
          {
            "w": 1.25
          },
          "4,1",
          {
            "w": 1.25,
            "r":12,
            "x":2.1,
            "y":-0.9
          },
          "4,2",
          {
            "c": "#cccccc",
            "w": 2.25
          },
          "4,4",
          {
            "r":-12,
            "y":3.3,
            "w": 2.75,
            "x": -1
          },
          "4,5",
          {
            "c": "#aaaaaa",
            "w": 1.25
          },
          "4,9",
          {
            "x": 2.1,
            "y":-2.5,
            "r":0
          },
          "4,11",
          "4,12",
          "4,13"
        ]
      ]
    }
  }


// Load ViaMia keyboards
// Convert to VIA format
let via_data = aa.keyboardDefinitionV2ToVIADefinitionV2(keyboard_data);
let keyboard_vidpid = via_data.vendorProductId;

// Append to keyboards & mia_vidpid list (so ViaMia duplicates are also detected)
data.definitions[keyboard_vidpid] = via_data;
data.generatedAt = + new Date();
strdata = JSON.stringify(data)
console.log(strdata)