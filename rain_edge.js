/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'rain3',
                            type: 'image',
                            rect: ['140px', '-16px', '306px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rain3.png",'0px','0px']
                        },
                        {
                            id: 'rain3Copy4',
                            type: 'image',
                            rect: ['147px', '-16px', '306px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rain3.png",'0px','0px']
                        },
                        {
                            id: 'rain3Copy5',
                            type: 'image',
                            rect: ['199px', '-44px', '306px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rain3.png",'0px','0px']
                        },
                        {
                            id: 'sun',
                            type: 'image',
                            rect: ['199px', '9px', '177px', '189px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sun.png",'0px','0px']
                        },
                        {
                            id: 'cloudmax',
                            type: 'image',
                            rect: ['109px', '0px', '348px', '371px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloudmax.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(211,214,219,0.96)"]
                        }
                    }
                },
                timeline: {
                    duration: 6861.2570994095,
                    autoPlay: true,
                    labels: {
                        "playan": 4000
                    },
                    data: [
                        [
                            "eid69",
                            "top",
                            4000,
                            1500,
                            "linear",
                            "${rain3}",
                            '-16px',
                            '206px'
                        ],
                        [
                            "eid161",
                            "top",
                            5500,
                            1361,
                            "linear",
                            "${rain3}",
                            '206px',
                            '252px'
                        ],
                        [
                            "eid143",
                            "opacity",
                            4948,
                            274,
                            "linear",
                            "${rain3Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            5222,
                            1639,
                            "linear",
                            "${rain3Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid142",
                            "top",
                            4000,
                            17,
                            "linear",
                            "${rain3Copy5}",
                            '-44px',
                            '98px'
                        ],
                        [
                            "eid149",
                            "top",
                            4017,
                            17,
                            "linear",
                            "${rain3Copy5}",
                            '98px',
                            '171px'
                        ],
                        [
                            "eid160",
                            "top",
                            4034,
                            1466,
                            "linear",
                            "${rain3Copy5}",
                            '-30px',
                            '85px'
                        ],
                        [
                            "eid166",
                            "top",
                            5500,
                            1361,
                            "linear",
                            "${rain3Copy5}",
                            '85px',
                            '171px'
                        ],
                        [
                            "eid24",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${sun}",
                            '175px',
                            '199px'
                        ],
                        [
                            "eid139",
                            "top",
                            4000,
                            1500,
                            "linear",
                            "${rain3Copy4}",
                            '-16px',
                            '143px'
                        ],
                        [
                            "eid164",
                            "top",
                            5500,
                            1361,
                            "linear",
                            "${rain3Copy4}",
                            '143px',
                            '252px'
                        ],
                        [
                            "eid6",
                            "rotateZ",
                            0,
                            4000,
                            "linear",
                            "${sun}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid85",
                            "opacity",
                            4548,
                            548,
                            "linear",
                            "${rain3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "opacity",
                            5096,
                            1766,
                            "linear",
                            "${rain3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9",
                            "background-color",
                            2250,
                            1750,
                            "linear",
                            "${Stage}",
                            'rgba(211,214,219,0.96)',
                            'rgba(90,136,198,0.96)'
                        ],
                        [
                            "eid23",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${sun}",
                            '9px',
                            '17px'
                        ],
                        [
                            "eid167",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${rain3}",
                            '192px',
                            '140px'
                        ],
                        [
                            "eid13",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${cloudmax}",
                            '-348px',
                            '114px'
                        ],
                        [
                            "eid29",
                            "left",
                            6861,
                            0,
                            "linear",
                            "${cloudmax}",
                            '114px',
                            '109px'
                        ],
                        [
                            "eid165",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${rain3Copy5}",
                            '103px',
                            '156px'
                        ],
                        [
                            "eid140",
                            "opacity",
                            4548,
                            548,
                            "linear",
                            "${rain3Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            5096,
                            1766,
                            "linear",
                            "${rain3Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid168",
                            "left",
                            4250,
                            0,
                            "linear",
                            "${rain3Copy4}",
                            '103px',
                            '135px'
                        ]
                    ]
                }
            },
            "rain": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '11px', '274px', '229px', 'auto', 'auto'],
                            id: 'rain2',
                            opacity: '0.96747967479675',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rain2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '274px', '229px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid64",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${rain2}",
                            '11px',
                            '224px'
                        ],
                        [
                            "eid61",
                            "left",
                            0,
                            0,
                            "linear",
                            "${rain2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid66",
                            "opacity",
                            0,
                            5000,
                            "linear",
                            "${rain2}",
                            '0.96747967479675',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("rain_edgeActions.js");
})("animatedrain");
