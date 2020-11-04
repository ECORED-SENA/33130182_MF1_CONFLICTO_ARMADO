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
            js+"jquery-2.2.3.min.js",
            js+"jquery-ui.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['2px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 14, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'titulo',
                            display: 'none',
                            type: 'image',
                            rect: ['67px', '39px', '518px', '196px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo.svg",'0px','0px'],
                            transform: [[],[],[],['1.43909','1.72028']]
                        },
                        {
                            id: 'logos',
                            type: 'image',
                            rect: ['1050px', '0px', '190px', '161px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"logos.svg",'0px','0px']
                        },
                        {
                            id: 'contador',
                            type: 'image',
                            rect: ['239px', '604px', '325px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"contador.svg",'0px','0px']
                        },
                        {
                            id: 'pregunta_1',
                            display: 'none',
                            type: 'image',
                            rect: ['-492px', '266px', '480px', '169px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pregunta_1.svg",'0px','0px']
                        },
                        {
                            id: 'pregunta_2',
                            type: 'image',
                            rect: ['80px', '210px', '658px', '281px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pregunta_2.svg",'0px','0px']
                        },
                        {
                            id: 'pregunta_3',
                            type: 'image',
                            rect: ['152px', '235', '500px', '221px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pregunta_3.svg",'0px','0px']
                        },
                        {
                            id: 'pregunta_4',
                            type: 'image',
                            rect: ['58px', '247px', '648px', '221px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pregunta_4.svg",'0px','0px']
                        },
                        {
                            id: 'pregunta_5',
                            type: 'image',
                            rect: ['144px', '266px', '475px', '193px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pregunta_5.svg",'0px','0px']
                        },
                        {
                            id: 'respuesta',
                            type: 'image',
                            rect: ['797px', '214px', '334px', '286px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"respuesta.svg",'0px','0px']
                        },
                        {
                            id: 'resp_crimenes',
                            type: 'image',
                            rect: ['797px', '214px', '333px', '51px', 'auto', 'auto'],
                            cursor: 'move',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"resp_crimenes_sf.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'resp_derecho',
                            type: 'image',
                            rect: ['797', '273px', '333px', '51px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"resp_derecho_sf.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'resp_proyec',
                            type: 'image',
                            rect: ['797', '331', '333px', '51px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"resp_proyec_sf.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'resp_reparacion',
                            type: 'image',
                            rect: ['797', '389px', '333px', '51px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"resp_reparacion_sf.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'resp_reparar',
                            type: 'image',
                            rect: ['797', '447', '333px', '51px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"resp_reparar_sf.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'instrucciones',
                            symbolName: 'instrucciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['849', '389', '388', '165', 'auto', 'auto']
                        },
                        {
                            id: 'btn_intrucciones',
                            display: 'none',
                            type: 'image',
                            rect: ['1231px', '387', '49px', '207px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"btn_intrucciones.svg",'0px','0px'],
                            transform: [[],['360']]
                        },
                        {
                            id: 'flecha_adelante',
                            display: 'none',
                            type: 'image',
                            rect: ['570px', '515px', '30px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"flecha_adelante.svg",'0px','0px']
                        },
                        {
                            id: 'caja1',
                            display: 'none',
                            type: 'rect',
                            rect: ['303px', '382px', '274px', '25px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja2',
                            display: 'none',
                            type: 'rect',
                            rect: ['260px', '267px', '325px', '25px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja3',
                            display: 'none',
                            type: 'rect',
                            rect: ['309px', '293px', '235px', '25px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja4',
                            display: 'none',
                            type: 'rect',
                            rect: ['336px', '306px', '216px', '25px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja5',
                            display: 'none',
                            type: 'rect',
                            rect: ['241px', '295px', '170px', '25px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'bien_1',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['239px', '500px', '57px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien_1.svg",'0px','0px']
                        },
                        {
                            id: 'bien_2',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['307px', '500', '57px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien_2.svg",'0px','0px']
                        },
                        {
                            id: 'bien_3',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['375px', '501px', '57px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien_3.svg",'0px','0px']
                        },
                        {
                            id: 'bien_4',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['442px', '500px', '57px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien_4.svg",'0px','0px']
                        },
                        {
                            id: 'bien_5',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['507px', '500px', '57px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien_5.svg",'0px','0px']
                        },
                        {
                            id: 'resp_reparar_sf',
                            display: 'none',
                            type: 'image',
                            rect: ['300px', '368px', '333px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"resp_reparar_sf.svg",'0px','0px']
                        },
                        {
                            id: 'fail',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"fail.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'success',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"success.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'aplauso_largo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"aplauso_largo.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'abucheo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"abucheo.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'mal',
                            symbolName: 'mal',
                            display: 'none',
                            type: 'rect',
                            rect: ['4', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'bien',
                            symbolName: 'bien',
                            display: 'none',
                            type: 'rect',
                            rect: ['4', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'musicafondo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"musicafondo.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 9897,
                    autoPlay: true,
                    labels: {
                        "preg1": 1250,
                        "preg2": 2540,
                        "preg3": 4080,
                        "preg4": 5620,
                        "preg5": 7160,
                        "fin": 8700
                    },
                    data: [
                        [
                            "eid59",
                            "left",
                            7160,
                            500,
                            "linear",
                            "${pregunta_5}",
                            '-510px',
                            '144px'
                        ],
                        [
                            "eid53",
                            "left",
                            4080,
                            500,
                            "linear",
                            "${pregunta_3}",
                            '-502px',
                            '152px'
                        ],
                        [
                            "eid43",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${caja2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            4095,
                            0,
                            "linear",
                            "${caja2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid66",
                            "rotateZ",
                            945,
                            305,
                            "linear",
                            "${btn_intrucciones}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid26",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            2540,
                            0,
                            "linear",
                            "${bien_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${logos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${titulo}",
                            '1.43909',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1825,
                            155,
                            "linear",
                            "${resp_derecho}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "left",
                            2540,
                            500,
                            "linear",
                            "${pregunta_2}",
                            '-574px',
                            '80px'
                        ],
                        [
                            "eid91",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "left",
                            5620,
                            500,
                            "linear",
                            "${pregunta_4}",
                            '-596px',
                            '58px'
                        ],
                        [
                            "eid57",
                            "display",
                            5620,
                            0,
                            "linear",
                            "${pregunta_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid58",
                            "display",
                            7160,
                            0,
                            "linear",
                            "${pregunta_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            5624,
                            0,
                            "linear",
                            "${bien_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${caja4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid71",
                            "display",
                            7175,
                            0,
                            "linear",
                            "${caja4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "top",
                            500,
                            500,
                            "linear",
                            "${contador}",
                            '604px',
                            '500px'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1670,
                            155,
                            "linear",
                            "${resp_crimenes}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "display",
                            5513,
                            0,
                            "linear",
                            "${caja3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            5608,
                            0,
                            "linear",
                            "${caja3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3",
                            "filter.blur",
                            0,
                            500,
                            "linear",
                            "${fondo}",
                            '14px',
                            '0px'
                        ],
                        [
                            "eid25",
                            "display",
                            0,
                            0,
                            "linear",
                            "${resp_reparar_sf}",
                            'none',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            4080,
                            0,
                            "linear",
                            "${pregunta_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "display",
                            5620,
                            0,
                            "linear",
                            "${pregunta_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${pregunta_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            2540,
                            0,
                            "linear",
                            "${pregunta_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${flecha_adelante}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            4080,
                            0,
                            "linear",
                            "${bien_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid24",
                            "opacity",
                            2290,
                            155,
                            "linear",
                            "${resp_reparar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "display",
                            7153,
                            0,
                            "linear",
                            "${bien_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${caja5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            8675,
                            0,
                            "linear",
                            "${caja5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${titulo}",
                            '1.72028',
                            '1'
                        ],
                        [
                            "eid90",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mal}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${pregunta_1}",
                            '-492px',
                            '162px'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1500,
                            170,
                            "linear",
                            "${respuesta}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "display",
                            2540,
                            0,
                            "linear",
                            "${pregunta_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            4080,
                            0,
                            "linear",
                            "${pregunta_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid27",
                            "display",
                            2445,
                            0,
                            "linear",
                            "${caja1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "display",
                            2540,
                            0,
                            "linear",
                            "${caja1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1980,
                            155,
                            "linear",
                            "${resp_proyec}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instrucciones}",
                            'none',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            7160,
                            0,
                            "linear",
                            "${pregunta_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            8700,
                            0,
                            "linear",
                            "${bien_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            945,
                            0,
                            "linear",
                            "${btn_intrucciones}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9",
                            "display",
                            500,
                            0,
                            "linear",
                            "${titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "opacity",
                            2135,
                            155,
                            "linear",
                            "${resp_reparacion}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "instrucciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'intrucciones',
                            rect: ['0px', '0px', '388px', '165px', 'auto', 'auto'],
                            transform: [[], [], [], ['-1e-005']],
                            fill: ['rgba(0,0,0,0)', 'images/intrucciones.svg', '0px', '0px']
                        },
                        {
                            rect: ['351px', '16px', '37px', '28px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'btnCerrar',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '388px', '165px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid63",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${intrucciones}",
                            '-1e-005',
                            '1'
                        ]
                    ]
                }
            },
            "bien": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'aviso_bien2',
                            rect: ['1px', '-10', '1280px', '601px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/aviso_bien.svg', '0px', '0px']
                        },
                        {
                            rect: ['694px', '398px', '239px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "mal": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'aviso_mal',
                            rect: ['0px', '-601px', '1280px', '601px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/aviso_mal.svg', '0px', '0px']
                        },
                        {
                            rect: ['683px', '417px', '257px', '51px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'bntReiniciar',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid87",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${aviso_mal}",
                            '-601px',
                            '-1px'
                        ],
                        [
                            "eid89",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${aviso_mal}",
                            '0px',
                            '-1px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-183020190");
