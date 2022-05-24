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
    "name": "z_alice_ble_Y&R",
    "vendorId": "0xAA96",
    "productId": "0xAAC2",
    "lighting": {
        "extends": "none",
        "keycodes": "qmk"
    },
    "matrix": {
        "rows": 5,
        "cols": 16
    },
    "layouts": {
        "keymap": [
            [
                {
                    "y": 0.5,
                    "x": 0.5
                },
                "0,0",
                {
                    "x": 16.25
                },
                "0,15"
            ],
            [
                {
                    "y": -0.75,
                    "x": 1.75,
                    "c": "#777777"
                },
                "0,1",
                {
                    "c": "#cccccc"
                },
                "0,2",
                "0,3",
                {
                    "x": 8.5
                },
                "0,12",
                "0,13",
                {
                    "c": "#aaaaaa",
                    "w": 2
                },
                "0,14"
            ],
            [
                {
                    "y": -0.25,
                    "x": 0.25,
                    "c": "#cccccc"
                },
                "1,0"
            ],
            [
                {
                    "y": -0.75,
                    "x": 1.5,
                    "c": "#aaaaaa",
                    "w": 1.5
                },
                "1,1",
                {
                    "c": "#cccccc"
                },
                "1,2",
                {
                    "x": 9
                },
                "1,11",
                "1,12",
                "1,13",
                {
                    "c": "#aaaaaa",
                    "w": 1.5
                },
                "1,14"
            ],
            [
                {
                    "y": -0.25,
                    "c": "#cccccc"
                },
                "2,0"
            ],
            [
                {
                    "y": -0.75,
                    "x": 1.25,
                    "c": "#aaaaaa",
                    "w": 1.75
                },
                "2,1",
                {
                    "c": "#cccccc"
                },
                "2,2",
                {
                    "x": 9.5
                },
                "2,11",
                "2,12",
                {
                    "c": "#777777",
                    "w": 2.25
                },
                "2,14"
            ],
            [
                {
                    "x": 1,
                    "c": "#aaaaaa",
                    "w": 2.25
                },
                "3,1",
                {
                    "c": "#cccccc"
                },
                "3,2",
                {
                    "x": 9
                },
                "3,11",
                "3,12",
                {
                    "c": "#aaaaaa",
                    "w": 1.25
                },
                "3,13",
                {
                    "c": "#cccccc"
                },
                "3,14"
            ],
            [
                {
                    "x": 1,
                    "c": "#aaaaaa",
                    "w": 1.5
                },
                "4,1",
                {
                    "x": 12
                },
                "4,12",
                {
                    "c": "#cccccc"
                },
                "4,13",
                "4,14",
                "4,15"
            ],
            [
                {
                    "r": 10,
                    "y": -5.75,
                    "x": 5
                },
                "0,4",
                "0,5",
                "0,6",
                "0,7"
            ],
            [
                {
                    "x": 4.5
                },
                "1,3",
                "1,4",
                "1,5",
                "1,6"
            ],
            [
                {
                    "x": 4.75
                },
                "2,3",
                "2,4",
                "2,5",
                "2,6"
            ],
            [
                {
                    "x": 5.25
                },
                "3,3",
                "3,4",
                "3,5",
                "3,6"
            ],
            [
                {
                    "x": 5.25,
                    "c": "#aaaaaa",
                    "w": 1.25
                },
                "4,3",
                {
                    "w": 2
                },
                "4,5",
                "4,6"
            ],
            [
                {
                    "r": -10,
                    "y": -2,
                    "x": 8.75,
                    "c": "#cccccc"
                },
                "0,8",
                "0,9",
                "0,10",
                "0,11"
            ],
            [
                {
                    "x": 8.25
                },
                "1,7",
                "1,8",
                "1,9",
                "1,10"
            ],
            [
                {
                    "x": 8.5
                },
                "2,7",
                "2,8",
                "2,9",
                "2,10"
            ],
            [
                {
                    "x": 8
                },
                "3,7",
                "3,8",
                "3,9",
                "3,10"
            ],
            [
                {
                    "x": 8,
                    "c": "#aaaaaa",
                    "w": 2.5
                },
                "4,8",
                {
                    "w": 1.5
                },
                "4,10"
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
// console.log(strdata)