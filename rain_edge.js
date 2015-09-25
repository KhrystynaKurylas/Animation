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
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'rain3',
                            type: 'image',
                            rect: ['332px', '533px', '460px', '313px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rain3.png",'0px','0px'],
                            transform: [[],['-7']]
                        },
                        {
                            id: 'rain3Copy4',
                            type: 'image',
                            rect: ['73px', '175px', '444px', '303px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rain3.png",'0px','0px'],
                            transform: [[],['16']]
                        },
                        {
                            id: 'rain3Copy5',
                            type: 'image',
                            rect: ['auto', '285px', '444px', '327px', '252px', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rain3.png",'0px','0px'],
                            transform: [[],['-8']]
                        },
                        {
                            id: 'sun',
                            type: 'image',
                            rect: ['409px', '34px', '306px', '303px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sun.png",'0px','0px']
                        },
                        {
                            id: 'cloudmax2',
                            type: 'image',
                            rect: ['346px', '0px', '682px', '690px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloudmax2.png",'0px','0px']
                        },
                        {
                            id: 'cloudmax',
                            type: 'image',
                            rect: ['-598px', '-10px', '598px', '690px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloudmax.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '100%', '100%'],
                            sizeRange: ['7.8%','100%','',''],
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
                            "eid333",
                            "rotateZ",
                            4000,
                            0,
                            "linear",
                            "${rain3}",
                            '-7deg',
                            '-7deg'
                        ],
                        [
                            "eid214",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${cloudmax2}",
                            '1280px',
                            '346px'
                        ],
                        [
                            "eid326",
                            "right",
                            4000,
                            0,
                            "linear",
                            "${rain3Copy5}",
                            '282px',
                            '252px'
                        ],
                        [
                            "eid330",
                            "rotateZ",
                            4000,
                            0,
                            "linear",
                            "${rain3Copy5}",
                            '-8deg',
                            '-8deg'
                        ],
                        [
                            "eid238",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${cloudmax}",
                            '-598px',
                            '167px'
                        ],
                        [
                            "eid245",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${cloudmax}",
                            '167px',
                            '117px'
                        ],
                        [
                            "eid251",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${cloudmax2}",
                            '-8px',
                            '0px'
                        ],
                        [
                            "eid324",
                            "left",
                            4948,
                            1913,
                            "linear",
                            "${rain3}",
                            '332px',
                            '304px'
                        ],
                        [
                            "eid301",
                            "top",
                            4000,
                            948,
                            "linear",
                            "${rain3}",
                            '-10px',
                            '114px'
                        ],
                        [
                            "eid318",
                            "top",
                            4948,
                            1913,
                            "linear",
                            "${rain3}",
                            '114px',
                            '533px'
                        ],
                        [
                            "eid143",
                            "opacity",
                            4948,
                            433,
                            "linear",
                            "${rain3Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            5381,
                            1480,
                            "linear",
                            "${rain3Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid285",
                            "top",
                            4000,
                            948,
                            "linear",
                            "${rain3Copy5}",
                            '0px',
                            '181px'
                        ],
                        [
                            "eid320",
                            "top",
                            4948,
                            1913,
                            "linear",
                            "${rain3Copy5}",
                            '181px',
                            '285px'
                        ],
                        [
                            "eid173",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid316",
                            "top",
                            4948,
                            17,
                            "linear",
                            "${rain3Copy4}",
                            '175px',
                            '143px'
                        ],
                        [
                            "eid164",
                            "top",
                            4965,
                            1896,
                            "linear",
                            "${rain3Copy4}",
                            '143px',
                            '356px'
                        ],
                        [
                            "eid282",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${rain3Copy5}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid85",
                            "opacity",
                            4948,
                            274,
                            "linear",
                            "${rain3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "opacity",
                            5222,
                            1639,
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
                            "eid332",
                            "rotateZ",
                            4000,
                            0,
                            "linear",
                            "${rain3Copy4}",
                            '16deg',
                            '16deg'
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
                            "eid172",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid140",
                            "opacity",
                            5000,
                            381,
                            "linear",
                            "${rain3Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            5381,
                            1480,
                            "linear",
                            "${rain3Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid327",
                            "left",
                            4000,
                            948,
                            "linear",
                            "${rain3Copy4}",
                            '73px',
                            '101px'
                        ],
                        [
                            "eid317",
                            "left",
                            4948,
                            1913,
                            "linear",
                            "${rain3Copy4}",
                            '101px',
                            '97px'
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
