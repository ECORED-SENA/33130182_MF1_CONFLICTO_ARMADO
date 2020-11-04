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
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px']
                        },
                        {
                            id: 'logos',
                            type: 'image',
                            rect: ['1052px', '1px', '190px', '161px', 'auto', 'auto'],
                            opacity: '0.017094017094017',
                            fill: ["rgba(0,0,0,0)",im+"logos.svg",'0px','0px']
                        },
                        {
                            id: 'btn_unidades',
                            type: 'image',
                            rect: ['1288px', '-1px', '89px', '153px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"btn_unidades.svg",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            display: 'block',
                            type: 'image',
                            rect: ['194px', '-157px', '718px', '148px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo.svg",'0px','0px']
                        },
                        {
                            id: 'personaje',
                            display: 'block',
                            type: 'image',
                            rect: ['71px', '600px', '357px', '432px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"personaje.svg",'0px','0px']
                        },
                        {
                            id: 'menu_unid1',
                            display: 'block',
                            type: 'image',
                            rect: ['1289px', '215px', '193px', '238px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"menu_unid1.svg",'0px','0px']
                        },
                        {
                            id: 'menu_unid2',
                            display: 'block',
                            type: 'image',
                            rect: ['1292px', '219px', '233px', '246px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"menu_unid2.svg",'0px','0px']
                        },
                        {
                            id: 'menu_unid3',
                            display: 'block',
                            type: 'image',
                            rect: ['1287px', '219px', '193px', '238px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"menu_unid3.svg",'0px','0px']
                        },
                        {
                            id: 'manito4',
                            display: 'none',
                            type: 'image',
                            rect: ['517px', '384px', '46px', '44px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manito.svg",'0px','0px']
                        },
                        {
                            id: 'uni1_titulo',
                            display: 'none',
                            type: 'image',
                            rect: ['22px', '15px', '476px', '147px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni1_titulo.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 25, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'sym_uni1',
                            symbolName: 'sym_uni1',
                            display: 'none',
                            type: 'rect',
                            rect: ['57', '187', '1043', '333', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_titulo',
                            type: 'image',
                            rect: ['22px', '15px', '325px', '147px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni2_titulo.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_orig_titu',
                            display: 'none',
                            type: 'image',
                            rect: ['446px', '30px', '458px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni2_orig_titu.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'sym_uni2_1',
                            symbolName: 'sym_uni2_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['41', '187', '991', '354', 'auto', 'auto']
                        },
                        {
                            id: 'nota_inicio',
                            display: 'none',
                            type: 'image',
                            rect: ['257px', '452px', '369px', '142px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"nota_inicio.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_menu',
                            display: 'none',
                            type: 'image',
                            rect: ['1288px', '245px', '188px', '192px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni2_menu.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_soluc_titu',
                            type: 'image',
                            rect: ['446px', '33px', '476px', '95px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni2_soluc_titu.svg",'0px','0px']
                        },
                        {
                            id: 'sym_solucion',
                            symbolName: 'sym_solucion',
                            display: 'none',
                            type: 'rect',
                            rect: ['303', '250', '619', '299', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_derec_titu',
                            type: 'image',
                            rect: ['460px', '38px', '448px', '101px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni2_derec_titu.svg",'0px','0px']
                        },
                        {
                            id: 'sym_dere',
                            symbolName: 'sym_dere',
                            display: 'none',
                            type: 'rect',
                            rect: ['66px', '182', '924', '370', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_acti_oblig',
                            display: 'none',
                            type: 'image',
                            rect: ['1131px', '231px', '149px', '48px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni2_acti_oblig.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_acti_soluci',
                            display: 'none',
                            type: 'image',
                            rect: ['1108px', '289px', '172px', '48px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni2_acti_soluci.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_acti_derec',
                            display: 'none',
                            type: 'image',
                            rect: ['1092px', '342px', '188px', '81px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni2_acti_derec.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_titulo',
                            type: 'image',
                            rect: ['23px', '15px', '435px', '147px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni3_titulo.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_menu',
                            display: 'none',
                            type: 'image',
                            rect: ['1292px', '261px', '173px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni3_menu.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_act_oblig',
                            display: 'none',
                            type: 'image',
                            rect: ['1109px', '289px', '172px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni3_act_oblig.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_act_repara',
                            display: 'none',
                            type: 'image',
                            rect: ['1108px', '329px', '172px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni3_act_repara.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_act_derec',
                            display: 'none',
                            type: 'image',
                            rect: ['1108px', '371px', '173px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni3_act_derec.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_tex1',
                            symbolName: 'uni3_tex1',
                            display: 'none',
                            type: 'rect',
                            rect: ['85', '265', '910', '177', 'auto', 'auto'],
                            clip: 'rect(0px 0px 177px 0px)'
                        },
                        {
                            id: 'uni3_oblig_titu',
                            display: 'none',
                            type: 'image',
                            rect: ['523px', '26px', '375px', '110px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni3_oblig_titu.svg",'0px','0px'],
                            transform: [[],[],[],['0']]
                        },
                        {
                            id: 'sym_oblig',
                            symbolName: 'sym_oblig',
                            display: 'none',
                            type: 'rect',
                            rect: ['168', '188', '810', '671', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_rep_titu',
                            type: 'image',
                            rect: ['521px', '26px', '381px', '124px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni3_rep_titu.svg",'0px','0px']
                        },
                        {
                            id: 'sym_rep_uni3',
                            symbolName: 'sym_rep_uni3',
                            display: 'none',
                            type: 'rect',
                            rect: ['58', '192', '908', '406', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_derec_titu',
                            type: 'image',
                            rect: ['519px', '37px', '393px', '115px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni3_derec_titu.svg",'0px','0px']
                        },
                        {
                            id: 'sym_dere2_uni3',
                            symbolName: 'sym_dere2_uni3',
                            display: 'none',
                            type: 'rect',
                            rect: ['107', '187', '906', '382', 'auto', 'auto']
                        },
                        {
                            id: 'manito2',
                            display: 'none',
                            type: 'image',
                            rect: ['320px', '420px', '46px', '44px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manito2.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle23',
                            display: 'none',
                            type: 'rect',
                            rect: ['441px', '265px', '132px', '171px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle23Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['584px', '278px', '147px', '171px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle23Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['737px', '278px', '147px', '171px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle24',
                            display: 'none',
                            type: 'rect',
                            rect: ['965px', '10px', '89px', '147px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25',
                            display: 'none',
                            type: 'rect',
                            rect: ['1131px', '231px', '149px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['1108px', '289px', '172px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1100px', '338px', '172px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle26',
                            display: 'none',
                            type: 'rect',
                            rect: ['85px', '378px', '292px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle26Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['400px', '378px', '292px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle26Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['715px', '378px', '292px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle27',
                            display: 'none',
                            type: 'rect',
                            rect: ['1108px', '245px', '172px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle27Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['1114px', '289px', '172px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle27Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1108px', '332px', '172px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle27Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['1108px', '370px', '172px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'rep_mapa_uni3',
                            symbolName: 'rep_mapa_uni3',
                            display: 'none',
                            type: 'rect',
                            rect: ['-1', '-1', '1281', '601', 'auto', 'auto']
                        },
                        {
                            id: 'tabla',
                            symbolName: 'tabla',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'opciones',
                            symbolName: 'opciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['1052', '532', '207', '49', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'menu_opciones',
                            symbolName: 'menu_opciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['1063', '205', '193', '331', 'auto', 'auto']
                        },
                        {
                            id: 'mapa',
                            symbolName: 'mapa',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'creditos',
                            symbolName: 'creditos',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'cc',
                            symbolName: 'cc',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'actividad',
                            symbolName: 'actividad',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '600', 'auto', 'auto']
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
                    duration: 53639,
                    autoPlay: true,
                    labels: {
                        "menu": 3750,
                        "uni1": 4281,
                        "uni2": 5500,
                        "origenes": 6500,
                        "uni2_1": 7858,
                        "Uni2_2": 9441,
                        "Uni3": 11181,
                        "uni3_1": 12647,
                        "obli": 13250,
                        "rep": 14014,
                        "dere": 15541
                    },
                    data: [
                        [
                            "eid678",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cc}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${sym_uni1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            5219,
                            0,
                            "linear",
                            "${sym_uni1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1268",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${manito4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1269",
                            "display",
                            4281,
                            0,
                            "linear",
                            "${manito4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "top",
                            5969,
                            531,
                            "linear",
                            "${uni2_menu}",
                            '245px',
                            '231px'
                        ],
                        [
                            "eid954",
                            "display",
                            11910,
                            0,
                            "linear",
                            "${manito2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid955",
                            "display",
                            12647,
                            0,
                            "linear",
                            "${manito2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid637",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${Rectangle26Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid640",
                            "display",
                            12560,
                            0,
                            "linear",
                            "${Rectangle26Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid679",
                            "display",
                            0,
                            0,
                            "linear",
                            "${actividad}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "top",
                            4750,
                            293,
                            "linear",
                            "${btn_unidades}",
                            '-1px',
                            '4px'
                        ],
                        [
                            "eid143",
                            "scaleX",
                            7858,
                            500,
                            "linear",
                            "${uni2_soluc_titu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid292",
                            "display",
                            11650,
                            0,
                            "linear",
                            "${uni3_tex1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid295",
                            "display",
                            12471,
                            0,
                            "easeOutBack",
                            "${uni3_tex1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid298",
                            "left",
                            12647,
                            603,
                            "linear",
                            "${uni3_menu}",
                            '1292px',
                            '1108px'
                        ],
                        [
                            "eid388",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rep_mapa_uni3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "opacity",
                            1500,
                            750,
                            "linear",
                            "${personaje}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1266",
                            "display",
                            3124,
                            0,
                            "linear",
                            "${nota_inicio}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1267",
                            "display",
                            4281,
                            0,
                            "linear",
                            "${nota_inicio}",
                            'block',
                            'none'
                        ],
                        [
                            "eid676",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mapa}",
                            'none',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            7858,
                            0,
                            "linear",
                            "${uni2_soluc_titu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid147",
                            "display",
                            9207,
                            0,
                            "linear",
                            "${uni2_soluc_titu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid677",
                            "display",
                            0,
                            0,
                            "linear",
                            "${creditos}",
                            'none',
                            'none'
                        ],
                        [
                            "eid337",
                            "display",
                            14014,
                            0,
                            "linear",
                            "${uni3_act_repara}",
                            'none',
                            'block'
                        ],
                        [
                            "eid433",
                            "display",
                            15345,
                            0,
                            "linear",
                            "${uni3_act_repara}",
                            'block',
                            'none'
                        ],
                        [
                            "eid296",
                            "display",
                            12647,
                            0,
                            "easeOutBack",
                            "${uni3_menu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid649",
                            "display",
                            0,
                            0,
                            "linear",
                            "${menu_opciones}",
                            'none',
                            'none'
                        ],
                        [
                            "eid338",
                            "display",
                            14617,
                            0,
                            "linear",
                            "${sym_rep_uni3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid339",
                            "display",
                            15363,
                            0,
                            "linear",
                            "${sym_rep_uni3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            6000,
                            500,
                            "linear",
                            "${uni2_orig_titu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid148",
                            "display",
                            8358,
                            0,
                            "linear",
                            "${sym_solucion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            9207,
                            0,
                            "linear",
                            "${sym_solucion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6",
                            "left",
                            1500,
                            750,
                            "linear",
                            "${personaje}",
                            '71px',
                            '68px'
                        ],
                        [
                            "eid71",
                            "scaleX",
                            6000,
                            500,
                            "linear",
                            "${uni2_orig_titu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid648",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${opciones}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4",
                            "top",
                            1500,
                            750,
                            "linear",
                            "${personaje}",
                            '600px',
                            '162px'
                        ],
                        [
                            "eid430",
                            "scaleX",
                            15541,
                            603,
                            "linear",
                            "${uni3_derec_titu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "display",
                            9441,
                            0,
                            "linear",
                            "${uni2_acti_derec}",
                            'none',
                            'block'
                        ],
                        [
                            "eid161",
                            "display",
                            10848,
                            0,
                            "linear",
                            "${uni2_acti_derec}",
                            'block',
                            'none'
                        ],
                        [
                            "eid153",
                            "display",
                            9941,
                            0,
                            "linear",
                            "${sym_dere}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "display",
                            10848,
                            0,
                            "linear",
                            "${sym_dere}",
                            'block',
                            'none'
                        ],
                        [
                            "eid24",
                            "left",
                            3250,
                            500,
                            "easeOutBack",
                            "${menu_unid3}",
                            '1287px',
                            '731px'
                        ],
                        [
                            "eid63",
                            "left",
                            4750,
                            293,
                            "linear",
                            "${btn_unidades}",
                            '1288px',
                            '963px'
                        ],
                        [
                            "eid74",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${sym_uni2_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            7525,
                            0,
                            "linear",
                            "${sym_uni2_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            4085,
                            0,
                            "easeOutBack",
                            "${menu_unid1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            9441,
                            0,
                            "linear",
                            "${uni2_derec_titu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid154",
                            "display",
                            10848,
                            0,
                            "linear",
                            "${uni2_derec_titu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid294",
                            "clip",
                            11650,
                            662,
                            "easeOutBack",
                            "${uni3_tex1}",
                            [0,0,177,0],
                            [0,910,177,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid156",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${uni2_acti_oblig}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            7447,
                            0,
                            "linear",
                            "${uni2_acti_oblig}",
                            'block',
                            'none'
                        ],
                        [
                            "eid333",
                            "scaleX",
                            14014,
                            603,
                            "linear",
                            "${uni3_rep_titu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "display",
                            4085,
                            0,
                            "easeOutBack",
                            "${personaje}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1354",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tabla}",
                            'none',
                            'none'
                        ],
                        [
                            "eid623",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Rectangle23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid626",
                            "display",
                            4105,
                            0,
                            "linear",
                            "${Rectangle23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            5969,
                            0,
                            "linear",
                            "${uni2_menu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            10848,
                            0,
                            "linear",
                            "${uni2_menu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${logos}",
                            '0.017094017094017',
                            '1'
                        ],
                        [
                            "eid10",
                            "top",
                            1000,
                            500,
                            "easeOutBack",
                            "${titulo}",
                            '-157px',
                            '25px'
                        ],
                        [
                            "eid29",
                            "display",
                            4085,
                            0,
                            "easeOutBack",
                            "${menu_unid2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid632",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${Rectangle25Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid635",
                            "display",
                            10907,
                            0,
                            "linear",
                            "${Rectangle25Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid631",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${Rectangle25Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid634",
                            "display",
                            10907,
                            0,
                            "linear",
                            "${Rectangle25Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid638",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${Rectangle26Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid641",
                            "display",
                            12560,
                            0,
                            "linear",
                            "${Rectangle26Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "top",
                            2750,
                            500,
                            "easeOutBack",
                            "${menu_unid2}",
                            '219px',
                            '236px'
                        ],
                        [
                            "eid144",
                            "scaleY",
                            7858,
                            500,
                            "linear",
                            "${uni2_soluc_titu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid645",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${Rectangle27Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid643",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${Rectangle27Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            7858,
                            0,
                            "linear",
                            "${uni2_acti_soluci}",
                            'none',
                            'block'
                        ],
                        [
                            "eid159",
                            "display",
                            9089,
                            0,
                            "linear",
                            "${uni2_acti_soluci}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "left",
                            2750,
                            500,
                            "easeOutBack",
                            "${menu_unid2}",
                            '1292px',
                            '540px'
                        ],
                        [
                            "eid290",
                            "display",
                            11181,
                            0,
                            "linear",
                            "${uni3_titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            4085,
                            0,
                            "easeOutBack",
                            "${titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid150",
                            "scaleX",
                            9441,
                            500,
                            "linear",
                            "${uni2_derec_titu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid432",
                            "display",
                            16144,
                            0,
                            "linear",
                            "${sym_dere2_uni3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16",
                            "left",
                            2250,
                            500,
                            "easeOutBack",
                            "${menu_unid1}",
                            '1289px',
                            '385px'
                        ],
                        [
                            "eid644",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${Rectangle27Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid630",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${Rectangle25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid633",
                            "display",
                            10907,
                            0,
                            "linear",
                            "${Rectangle25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid301",
                            "display",
                            12647,
                            0,
                            "linear",
                            "${uni3_oblig_titu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid332",
                            "display",
                            13858,
                            0,
                            "linear",
                            "${uni3_oblig_titu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid335",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${uni3_act_oblig}",
                            'none',
                            'block'
                        ],
                        [
                            "eid336",
                            "display",
                            13780,
                            0,
                            "linear",
                            "${uni3_act_oblig}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${uni2_orig_titu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid140",
                            "display",
                            7643,
                            0,
                            "linear",
                            "${uni2_orig_titu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid151",
                            "scaleY",
                            9441,
                            500,
                            "linear",
                            "${uni2_derec_titu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid629",
                            "display",
                            4281,
                            0,
                            "linear",
                            "${Rectangle24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid625",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Rectangle23Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid628",
                            "display",
                            4105,
                            0,
                            "linear",
                            "${Rectangle23Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid624",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Rectangle23Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid627",
                            "display",
                            4105,
                            0,
                            "linear",
                            "${Rectangle23Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid304",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${sym_oblig}",
                            'none',
                            'block'
                        ],
                        [
                            "eid305",
                            "display",
                            13839,
                            0,
                            "linear",
                            "${sym_oblig}",
                            'block',
                            'none'
                        ],
                        [
                            "eid136",
                            "left",
                            5969,
                            531,
                            "linear",
                            "${uni2_menu}",
                            '1288px',
                            '1092px'
                        ],
                        [
                            "eid431",
                            "display",
                            15541,
                            0,
                            "linear",
                            "${uni3_derec_titu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid334",
                            "display",
                            14014,
                            0,
                            "linear",
                            "${uni3_rep_titu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid429",
                            "display",
                            15363,
                            0,
                            "linear",
                            "${uni3_rep_titu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "filter.blur",
                            4281,
                            469,
                            "linear",
                            "${uni1_titulo}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid32",
                            "display",
                            4281,
                            0,
                            "linear",
                            "${uni1_titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid60",
                            "display",
                            5219,
                            0,
                            "linear",
                            "${uni1_titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "left",
                            1000,
                            500,
                            "easeOutBack",
                            "${titulo}",
                            '194px',
                            '206px'
                        ],
                        [
                            "eid303",
                            "scaleX",
                            12647,
                            603,
                            "linear",
                            "${uni3_oblig_titu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid291",
                            "filter.blur",
                            11181,
                            469,
                            "linear",
                            "${uni3_titulo}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid300",
                            "top",
                            12647,
                            603,
                            "linear",
                            "${uni3_menu}",
                            '261px',
                            '245px'
                        ],
                        [
                            "eid68",
                            "filter.blur",
                            5500,
                            469,
                            "linear",
                            "${uni2_titulo}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid30",
                            "display",
                            4085,
                            0,
                            "easeOutBack",
                            "${menu_unid3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid636",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${Rectangle26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid639",
                            "display",
                            12560,
                            0,
                            "linear",
                            "${Rectangle26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid647",
                            "opacity",
                            2750,
                            750,
                            "linear",
                            "${opciones}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "top",
                            2250,
                            500,
                            "easeOutBack",
                            "${menu_unid1}",
                            '215px',
                            '238px'
                        ],
                        [
                            "eid642",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${Rectangle27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid434",
                            "display",
                            15541,
                            0,
                            "linear",
                            "${uni3_act_derec}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${uni2_titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "display",
                            10848,
                            0,
                            "linear",
                            "${uni2_titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "top",
                            3250,
                            500,
                            "easeOutBack",
                            "${menu_unid3}",
                            '219px',
                            '240px'
                        ],
                            [ "eid91", "trigger", 4750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_uni1}', [0] ] ],
                            [ "eid92", "trigger", 6500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_uni2_1}', [0] ] ],
                            [ "eid212", "trigger", 8358, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_solucion}', [0] ] ],
                            [ "eid213", "trigger", 9941, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_dere}', [0] ] ],
                            [ "eid331", "trigger", 13250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_oblig}', [0] ] ],
                            [ "eid341", "trigger", 14617, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_rep_uni3}', [0] ] ],
                            [ "eid435", "trigger", 16144, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_dere2_uni3}', [0] ] ]
                    ]
                }
            },
            "uni1_text1": {
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
                            id: 'uni1_text1',
                            rect: ['0px', '0px', '1043px', '333px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni1_text1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(60, 60, 59);\">Para entender de una manera adecuada el panorama del conflicto armado en Colombia es necesario comprender algunos conceptos básicos relacionados con el marco normativo internacional aplicable al caso colombiano.&nbsp;\n&nbsp;\n</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(60, 60, 59);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(60, 60, 59);\">Si bien tanto los Derechos Humanos como el Derecho Internacional Humanitario buscan proteger a la persona en sí, cada uno tiene sus ámbitos de aplicación, puntos de encuentro y diferencias. Veamos:</span></p>',
                            type: 'text',
                            rect: ['0px', '61px', '263px', '272px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1043px', '333px']
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
            "uni1_tab_prop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '760px', '333px', 'auto', 'auto'],
                            id: 'uni1_tab_prop',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni1_tab_prop.svg', '0px', '0px']
                        },
                        {
                            rect: ['213px', '151px', '207px', '42px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​Garantizar el ejercicio de derechos y libertades fundamentales.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['510px', '126px', '213px', '88px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Protección de las víctimas de conflictos armados.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Reglamentar métodos y medios de combate.\n</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '760px', '333px']
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
            "uni1_tab_histo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni1_tab_histo',
                            type: 'image',
                            rect: ['0px', '0px', '760px', '333px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni1_tab_histo.svg', '0px', '0px']
                        },
                        {
                            rect: ['497px', '73px', '233px', '188px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Convenio de Ginebra de 1864:&nbsp;</span></p><p style=\"margin: 0px;\">Instrumento internacional creado con la intensión de proteger sin distinción a militares heridos y enfermos y a garantizar el respeto e identificación del personal y equipos sanitarios en medio de un conflicto armado.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['191px', '45px', '253px', '263px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​Nace al interior de los Estados, cuando éstos comienzan a reconocer derechos individuales sobre las personas. Esto sucede con ocasión de luchas ideológicas y de movimientos revolucionarios que provocaron el reconocimiento de dichos derechos.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Primeros instrumentos en el mundo con contenido de Derechos humanos: carta magna de 1215, Declaración de Derechos del Hombre y del Ciudadano de 1789.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '760px', '333px']
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
            "uni1_tab_aplic": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni1_tab_aplic',
                            type: 'image',
                            rect: ['0px', '0px', '760px', '333px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni1_tab_aplic.svg', '0px', '0px']
                        },
                        {
                            rect: ['213px', '128px', '207px', '133px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text6',
                            text: '<p style=\"margin: 0px;\">​Están vigentes durante todas las etapas de la vida de la persona humana.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Aplica en tiempos de guerra y en tiempos de paz.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['494px', '146px', '243px', '86px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text7',
                            text: '<p style=\"margin: 0px;\">​Se aplican durante el desarrollo y por el término de duración de un conflicto armado, sea de índole internacional o no internacional.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '760px', '333px']
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
            "uni1_tab_obliga": {
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
                            id: 'uni1_tab_obliga',
                            rect: ['0px', '0px', '760px', '333px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni1_tab_obliga.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['207px', '121px', '207px', '129px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​- Estado.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Individuos.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Grupos organizados que puedan ejercer funciones cuasiestatales.</p>',
                            id: 'Text8',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['501px', '121px', '243px', '151px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​- Estado.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Grupos armados sin carácter estatal.</p><p style=\"margin: 0px;\">\n\n​​</p><p style=\"margin: 0px;\">- Organizaciones internacionales.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Individuos.</p>',
                            id: 'Text9',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '760px', '333px']
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
            "uni1_tab_quien": {
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
                            id: 'uni1_tab_quien',
                            rect: ['0px', '0px', '760px', '333px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni1_tab_quien.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['211px', '128px', '220px', '81px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​- Toda persona sin distinción.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Protección especial a grupos vulnerables (refugiados, desplazados internos, mujeres y niños).</p>',
                            id: 'Text10',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['499px', '61px', '220px', '214px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​- “Personas protegidas”: víctimas del conflicto armado (heridos, enfermos, náufragos, población civil, prisioneros de guerra, etc.).\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Grupos especiales: niños, mujeres, refugiados, desplazados internos, periodistas y personal de organizaciones humanitarias.</p>',
                            id: 'Text11',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '760px', '333px']
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
            "uni1_tab_princi": {
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
                            id: 'uni1_tab_princi',
                            rect: ['0px', '0px', '760px', '333px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni1_tab_princi.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['261px', '137px', '119px', '65px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​- Igualdad.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- No discriminación.</p>',
                            id: 'Text13',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['539px', '95px', '190px', '189px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​- Humanidad.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Distinción.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Necesidad.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px; line-height: 15px;\">- Proporcionalidad.\n</p><p style=\"margin: 0px; line-height: 15px;\">\n</p><p style=\"margin: 0px; line-height: 15px;\">​</p><p style=\"margin: 0px; line-height: 15px;\">- Prohibición daños superfluos o innecesarios e indiscriminados.\n\n</p><p style=\"margin: 0px; line-height: 15px;\">​</p><p style=\"margin: 0px; line-height: 15px;\">- Objetivo legítimo.</p>',
                            id: 'Text14',
                            textStyle: ['', '', '16px', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '760px', '333px']
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
            "uni1_tab_norma": {
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
                            id: 'uni1_tab_norma',
                            rect: ['0px', '0px', '760px', '333px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni1_tab_norma.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['516px', '151px', '219px', '71px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Convenios de Ginebra de 12 de agosto de 1949 y sus Protocolos adicionales de 8 de junio de 1977.</p>',
                            id: 'Text16',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['182px', '39px', '279px', '287px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​-&nbsp;<span style=\"font-weight: 700;\">Derecho Interno:</span> constitución, leyes, decretos, reglamentos, etc., de los Estados.​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">- Derecho Internacional:</span> carta Internacional de los Derechos Humanos.​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">- Instrumentos específicos de las Naciones Unidas</span>: derecho a la libre determinación, prevención de la discriminación, derechos de la mujer y del niño, esclavitud, servidumbre, trabajo forzoso, etc.​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">- Normas de carácter regional:</span> convenio Europeo para la Protección de los Derechos Humanos y las Libertades Fundamentales, la Convención Americana sobre Derechos Humanos y la Carta Africana de Derechos Humanos y de los Pueblos.</p>',
                            id: 'Text15',
                            textStyle: ['0px', '0px', '14px', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '760px', '333px']
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
            "uni2_orig_text1": {
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
                            id: 'uni2_orig_text1',
                            rect: ['0px', '0px', '986px', '337px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_orig_text1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '986px', '337px']
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
            "uni2_orig_rojo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '498px', '141px', 'auto', 'auto'],
                            id: 'uni2_orig_rojo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_orig_rojo.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text18',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​Marca la transición de la violencia bipartidista a la subversiva, caracterizada por la proliferación de las guerrillas que contrasta con el auge de la movilización social y la marginalidad del conflicto armado.</p>',
                            rect: ['32px', '43px', '444px', '81px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '498px', '141px']
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
            "uni2_orig_verde": {
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
                            id: 'uni2_orig_verde',
                            rect: ['0px', '0px', '498px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_orig_verde.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text19',
                            text: '<p style=\"margin: 0px; text-align: center;\">​Se distingue por la proyección política, expansión territorial y crecimiento militar de las guerrillas, el surgimiento de los paramilitares, la crisis y el colapso parcial del Estado, la irrupción y propagación del narcotráfico, la Guerra Fría, la Constitución Política de 1991 y los procesos de paz.</p>',
                            align: 'left',
                            rect: ['15px', '39px', '469px', '91px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '498px', '141px']
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
            "uni2_orig_viole": {
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
                            id: 'uni2_orig_viole',
                            rect: ['0px', '0px', '498px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_orig_viole.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text20',
                            text: '<p style=\"margin: 0px; text-align: center;\">​Marca el umbral del recrudecimiento del conflicto armado. Expansión simultánea de las guerrillas y los paramilitares, radicalización política de la opinión pública hacia una solución militar del conflicto armado. Expansión del narcotráfico.</p>',
                            align: 'left',
                            rect: ['25px', '46px', '458px', '81px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '498px', '141px']
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
            "uni2_orig_rosa": {
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
                            id: 'uni2_orig_rosa',
                            rect: ['0px', '0px', '498px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_orig_rosa.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text22',
                            text: '<p style=\"margin: 0px; text-align: center;\">​Ofensiva militar del Estado que alcanzó su máximo grado de eficiencia en la acción contrainsurgente, debilitando pero no doblegando la guerrilla. Negociación política con los grupos paramilitares.</p>',
                            align: 'left',
                            rect: ['64px', '43px', '382px', '91px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '498px', '141px']
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
            "uni2_orig_text2": {
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
                            id: 'uni2_orig_text2',
                            rect: ['0px', '1px', '469px', '334px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_orig_text2.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['30px', '-25px', '596px', '126px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<a href=\"http://www.centrodememoriahistorica.gov.co/descargas/informes2013/bastaYa/resumen-ejecutivo-basta-ya.pdf\" target=\"_blank\">http://www.centrodememoriahistorica.gov.co/descargas/informes2013/bastaYa/resumen-ejecutivo-basta-ya.pdf</a><br><br> lolo Las guerrillas, el Estado y los paramilitares han desempeñado diferentes papeles a lo largo de esta historia. De igual forma, algunos elementos han surgido de manera constante, siendo aspectos clave para entender el conflicto:&nbsp;</p>',
                            id: 'Text23',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['89px', '118px', '311px', '120px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​El problema agrario.\n</p><p style=\"margin: 0px;\">El miedo de las élites y de otros grupos poblacionales a la democracia.\n</p><p style=\"margin: 0px;\">El narcotráfico.\n</p><p style=\"margin: 0px;\">Los actores internacionales.\n</p><p style=\"margin: 0px;\">La fragmentación del Estado.&nbsp;</p>',
                            id: 'Text24',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '469px', '335px']
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
            "uni2_orig_tex3": {
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
                            id: 'uni2_orig_tex3',
                            rect: ['0px', '0px', '955px', '294px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_orig_tex3.svg', '0px', '0px']
                        },
                        {
                            rect: ['1px', '69px', '435px', '91px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text25',
                            text: '<p style=\"margin: 0px;\">​Vea el siguiente video en el que se profundiza sobre el origen del conflicto armado en Colombia y su evolución.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Después de ver el video, le proponemos que reflexione sobre las siguientes preguntas:</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '955px', '294px']
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
            "uni2_orig_preg1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '1px', '469px', '171px', 'auto', 'auto'],
                            id: 'uni2_orig_preg1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_orig_preg1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text26',
                            text: '<p style=\"margin: 0px;\">​¿Qué significa la siguiente frase de Pastora Mira, concejal de San Carlos, Antioquia?</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['100px', '0px', '325px', '42px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '469px', '172px']
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
            "uni2_orig_preg2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '435px', '171px', 'auto', 'auto'],
                            id: 'uni2_orig_preg2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_orig_preg2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text28',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​¿Qué implicaciones emocionales tiene esta afirmación de Antún Ramos, sacerdote de Bojayá?</p>',
                            rect: ['74px', '1px', '376px', '33px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '450px', '171px']
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
            "uni2_soluc_tex1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '531px', '140px', 'auto', 'auto'],
                            id: 'uni2_soluc_tex1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text29',
                            text: '<p style=\"margin: 0px;\">​Colombia tiene una larga historia de tratados, amnistías, indultos o treguas como respuesta al conflicto armado. Dentro de esta historia es importante recordar los siguientes hechos:</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['1px', '1px', '404px', '81px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '531px', '140px']
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
            "uni2_soluc_tex1_1": {
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
                            id: 'uni2_soluc_tex1_1',
                            rect: ['0px', '0px', '318px', '137px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex1_1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text30',
                            text: '<p style=\"margin: 0px; text-align: center;\">​La firma de tratados de paz entre el Gobierno del Presidente Virgilio Barco con el M-19, el Quintín Lame y una fracción del EPL.&nbsp;</p>',
                            align: 'left',
                            rect: ['1px', '78px', '319px', '62px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '320px', '140px']
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
            "uni2_soluc_tex1_2": {
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
                            id: 'uni2_soluc_tex1_2',
                            rect: ['0px', '0px', '368px', '156px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex1_2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text31',
                            text: '<p style=\"margin: 0px; text-align: center;\">​La expedición de la Ley 975 de 2005 en el gobierno del Presidente Álvaro Uribe, en la que se estableció un marco jurídico para la desmovilización de grupos paramilitares en Colombia.&nbsp;</p>',
                            align: 'left',
                            rect: ['1px', '79px', '368px', '81px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '369px', '160px']
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
            "uni2_soluc_tex1_3": {
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
                            id: 'uni2_soluc_tex1_3',
                            rect: ['1px', '0px', '319px', '195px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex1_3.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text32',
                            text: '<p style=\"margin: 0px; text-align: center;\">​La firma del Acuerdo Final para la Terminación del Conflicto y la Construcción de una Paz Estable y Duradera entre el gobierno del Presidente Juan Manuel Santos y las Fuerzas Armadas Revolucionarias de Colombia (FARC-EP).</p>',
                            align: 'left',
                            rect: ['0px', '81px', '325px', '122px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '325px', '203px']
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
            "uni2_soluc_tex2": {
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
                            id: 'uni2_soluc_tex2',
                            rect: ['0px', '2px', '555px', '204px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text33',
                            text: '<p style=\"margin: 0px;\">​El Alto Comisionado de las Naciones Unidas para los Derechos Humanos, en su informe anual de 2017 sobre la situación de los Derechos Humanos en Colombia, destaca que el Acuerdo de Paz entre el Gobierno de Colombia y las Fuerzas Armadas Revolucionarias de Colombia (FARC-EP) permitirá el fin de las hostilidades entre las partes y señala como desafíos para la implementación del Acuerdo de Paz los siguientes:</p>',
                            align: 'left',
                            rect: ['89px', '0px', '469px', '147px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '558px', '206px']
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
            "uni2_soluc_tex2_1": {
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
                            id: 'uni2_soluc_tex2_1',
                            rect: ['0px', '0px', '313px', '100px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex2_1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text34',
                            text: '<p style=\"margin: 0px; text-align: center;\">​Ataques contra defensores de derechos humanos.</p>',
                            align: 'left',
                            rect: ['90px', '67px', '223px', '41px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '313px', '108px']
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
            "uni2_soluc_tex2_2": {
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
                            id: 'uni2_soluc_tex2_2',
                            rect: ['0px', '0px', '271px', '103px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex2_2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text35',
                            text: '<p style=\"margin: 0px;\">​Reintegración de excombatientes y desvinculación de niños y niñas.</p>',
                            align: 'center',
                            rect: ['19px', '66px', '258px', '41px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '277px', '107px']
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
            "uni2_soluc_tex2_3": {
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
                            id: 'uni2_soluc_tex2_3',
                            rect: ['6px', '0px', '246px', '122px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex2_3.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text36',
                            text: '<p style=\"margin: 0px;\">​Los problemas que enfrentan las comunidades rurales y la falta de presencia estatal en zonas rurales.</p>',
                            align: 'center',
                            rect: ['0px', '66px', '258px', '71px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '258px', '137px']
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
            "uni2_soluc_tex2_4": {
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
                            id: 'uni2_soluc_tex2_4',
                            rect: ['6px', '0px', '240px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex2_4.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text37',
                            text: '<p style=\"margin: 0px;\">​Acceso equitativo a los derechos económicos, sociales y culturales.</p>',
                            align: 'center',
                            rect: ['0px', '66px', '254px', '49px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '254px', '115px']
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
            "uni2_soluc_tex2_5": {
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
                            id: 'uni2_soluc_tex2_5',
                            rect: ['0px', '0px', '240px', '99px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex2_5.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text38',
                            text: '<p style=\"margin: 0px;\">​La corrupción que priva a muchas comunidades de inversión social.</p>',
                            align: 'center',
                            rect: ['0px', '67px', '240px', '41px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '240px', '108px']
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
            "uni2_soluc_tex2_6": {
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
                            id: 'uni2_soluc_tex2_6',
                            rect: ['0px', '0px', '235px', '99px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex2_6.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text39',
                            text: '<p style=\"margin: 0px;\">​Obstáculos al proceso de restitución de tierras.</p>',
                            align: 'center',
                            rect: ['1px', '67px', '178px', '41px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '235px', '108px']
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
            "uni2_soluc_tex2_7": {
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
                            id: 'uni2_soluc_tex2_7',
                            rect: ['5px', '0px', '380px', '122px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_soluc_tex2_7.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text40',
                            text: '<p style=\"margin: 0px;\">​Presencia de otros grupos armados organizados al margen de la Ley, así como de organizaciones criminales en diferentes zonas del país.</p>',
                            align: 'center',
                            rect: ['0px', '69px', '357px', '58px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '385px', '127px']
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
            "uni2_derec_text1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text41',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Por tratarse de un conflicto armado interno las normas aplicables del DIH al caso colombiano son:</p>',
                            rect: ['0px', '19px', '403px', '48px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text42',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Legislación nacional.\n</p><p style=\"margin: 0px;\">Núcleo inderogable de los derechos humanos.\n</p><p style=\"margin: 0px;\">​Artículo 3 común de los cuatro convenios de Ginebra de 1949. </p><p style=\"margin: 0px;\">​Protocolo adicional a los Convenios de Ginebra de 1977.</p>',
                            rect: ['29px', '80px', '340px', '108px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text43',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Los mecanismos y órganos de protección del Derecho Internacional Humanitario se concentran principalmente en la prevención y el control. Ahora, si bien no existe una corte internacional que pueda juzgar al Estado por el incumplimiento al DIH, desde la década de los 90 se han conformado cortes internacionales para sancionar a individuos por infracciones al DIH.</p>',
                            rect: ['1px', '216px', '403px', '127px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '924px', '349px']
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
            "uni2_derec_inter_prev": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni2_derec_inter_prev',
                            rect: ['0px', '0px', '458px', '271px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_inter_prev.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text45',
                            text: '<p style=\"margin: 0px;\">​El Estado juega un papel fundamental al incorporar las normas del DIH en su legislación nacional, difundir y contratar a personal cualificado.</p>',
                            align: 'left',
                            rect: ['176px', '114px', '227px', '61px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '458px', '271px']
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
            "uni2_derec_inter_control": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni2_derec_inter_control',
                            rect: ['0px', '0px', '458px', '271px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_inter_control.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text44',
                            text: '<p style=\"margin: 0px;\">​Participan organizaciones internacionales de carácter neutral, que buscan comunicar entre las partes del conflicto, auxiliar a las víctimas, recibir las denuncias, prestar asistencia, protección y ser guardianes del DIH.</p>',
                            align: 'left',
                            rect: ['160px', '100px', '254px', '61px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '458px', '271px']
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
            "uni2_derec_inter_repre": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni2_derec_inter_repre',
                            rect: ['0px', '0px', '458px', '271px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_inter_repre.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '14px', '', 'none'],
                            id: 'Text46',
                            text: '<p style=\"margin: 0px;\">​El Estado debe garantizar el cese del incumplimiento al DIH y debe reparar e indemnizar a las víctimas. En cuanto a las personas naturales, existen seis mecanismos de sanción:\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Tribunales internos del Estado.\n</p><p style=\"margin: 0px;\">Tribunales internacionales específicos.\n</p><p style=\"margin: 0px;\">Tribunales con participación mixta (nacional e internacional).\n</p><p style=\"margin: 0px;\">Asistencia jurídica internacional.\n</p><p style=\"margin: 0px;\">​Salas especiales de tribunales internos.</p><p style=\"margin: 0px;\">Corte Penal Internacional.</p>',
                            align: 'left',
                            rect: ['176px', '45px', '242px', '181px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '458px', '271px']
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
            "uni2_derec_hum_prev": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni2_derec_hum_prev',
                            rect: ['0px', '0px', '458px', '271px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_hum_prev.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text47',
                            text: '<p style=\"margin: 0px;\">​La prevención está dada por la incorporación de los derechos humanos en las normas internas de cada Estado, con ocasión de la firma de tratados internacionales sobre esta materia, suscritos por cada Nación.</p>',
                            align: 'left',
                            rect: ['175px', '101px', '212px', '81px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '458px', '271px']
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
            "uni2_derec_hum_cont1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni2_derec_hum_cont1',
                            rect: ['0px', '0px', '458px', '271px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_hum_cont1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text48',
                            text: '<p style=\"margin: 0px;\">​Se realiza a través de la normatividad interna de cada país que prevé mecanismos para la protección de los derechos humanos, e igualmente a través de mecanismos internacionales de protección. Tal es el caso del Sistema Interamericano de Protección Derechos Humanos que tiene competencia sobre el caso Colombiano.&nbsp;\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La Comisión Interamericana de Derechos Humanos hace parte del Sistema Interamericano de Protección de los Derechos Humanos. Es un órgano autónomo de la Organización de Estados Americanos, que se encarga de la promoción y protección de los derechos humanos en el continente americano.</p>',
                            align: 'left',
                            rect: ['133px', '23px', '313px', '192px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '458px', '271px']
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
            "uni2_derec_hum_cont2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni2_derec_hum_cont2',
                            rect: ['0px', '0px', '458px', '271px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_hum_cont2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text49',
                            text: '<p style=\"margin: 0px;\">​La Corte Interamericana de Derechos Humanos también hace parte del Sistema Interamericano de Protección de los Derechos Humanos. La CIDH trabaja bajo los siguientes pilares:</p>',
                            align: 'left',
                            rect: ['143px', '22px', '296px', '61px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text50',
                            text: '<p style=\"margin: 0px;\">​Peticiones individuales.\n</p><p style=\"margin: 0px;\">Monitoreo de la situación de los derechos humanos en los Estados miembros.\nAtención a líneas temáticas prioritarias.</p>',
                            align: 'left',
                            rect: ['187px', '109px', '233px', '61px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text51',
                            text: '<p style=\"margin: 0px;\">​Colombia es en la actualidad un Estado miembro</p>',
                            align: 'left',
                            rect: ['162px', '195px', '277px', '23px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '458px', '271px']
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
            "uni2_derec_hum_repr1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni2_derec_hum_repr1',
                            rect: ['0px', '0px', '458px', '271px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_hum_repr1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text52',
                            text: '<p style=\"margin: 0px;\">​Se encuentran los tribunales judiciales de cada país, y para el caso de la región, la <span style=\"font-weight: 700;\">Corte Interamericana de Derechos Humanos</span> que hace parte del Sistema Interamericano de Protección de los Derechos Humanos.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La <span style=\"font-weight: 700;\">CIDH</span> es un estamento judicial que se encarga de aplicar e interpretar la Convención Americana sobre Derechos Humanos y otros tratados del Sistema Interamericano de Protección de Derechos Humanos. Tiene carácter de tribunal internacional y sus procesos terminan en una sentencia inapelable y de obligatorio cumplimiento para los Estados.</p>',
                            align: 'left',
                            rect: ['133px', '53px', '304px', '172px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '458px', '271px']
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
            "uni2_derec_hum_repr2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni2_derec_hum_repr2',
                            type: 'image',
                            rect: ['0px', '0px', '458px', '271px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_hum_repr2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text53',
                            text: '<p style=\"margin: 0px;\">​Finalmente, se encuentra la <span style=\"font-weight: 700;\">Corte Penal Internacional</span> como una institución permanente, facultada para ejercer su jurisdicción sobre personas naturales respecto de los crímenes más graves de trascendencia internacional establecidos en el Estatuto de Roma y es complementaria de las jurisdicciones penales nacionales. Está vinculada con las Naciones Unidas y tiene sede en La Haya.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['133px', '82px', '313px', '95px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '458px', '271px']
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
            "uni2_derec_tex2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '912px', '363px', 'auto', 'auto'],
                            id: 'uni2_derec_tex2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_tex2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text54',
                            text: '<p style=\"margin: 0px;\">​La Corte Penal Internacional se encarga de la responsabilidad penal individual por violaciones graves a los derechos humanos y al derecho internacional humanitario, es decir, tiene competencia respecto de los siguientes crímenes:</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['120px', '1px', '670px', '57px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '912px', '363px']
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
            "uni2_derec_tex2_rojo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '828px', '254px', 'auto', 'auto'],
                            id: 'uni2_derec_tex2_rojo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_tex2_rojo.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text55',
                            text: '<p style=\"margin: 0px;\">​Cualquier acto perpetrado con la intención de destruir total o parcialmente a un grupo nacional, étnico, racional o religioso. Estos actos incluyen:</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['75px', '34px', '682px', '39px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text56',
                            text: '<p style=\"margin: 0px;\">​Matanza de miembros del grupo.\n</p><p style=\"margin: 0px;\">Lesión grave a la integridad física o mental de los miembros del grupo.\n</p><p style=\"margin: 0px;\">Sometimiento intencional del grupo a condiciones de existencia que hayan de acarrear su destrucción física, total o parcial.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['58px', '99px', '325px', '107px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text57',
                            text: '<p style=\"margin: 0px;\">​Medidas destinadas a impedir nacimientos en el seno del grupo.\n</p><p style=\"margin: 0px;\">Traslado por la fuerza de niños del grupo a otro grupo.\n</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['456px', '99px', '307px', '81px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '828px', '254px']
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
            "uni2_derec_tex2_verde": {
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
                            id: 'uni2_derec_tex2_verde',
                            rect: ['0px', '0px', '828px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_tex2_verde.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text58',
                            text: '<p style=\"margin: 0px;\">​Cualquier acto que se cometa como parte de un ataque generalizado o sistemático contra una población civil y con conocimiento de dicho ataque. Estos actos pueden ser:</p>',
                            align: 'left',
                            rect: ['23px', '12px', '761px', '49px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '18px', '', 'none'],
                            id: 'Text59',
                            text: '<p style=\"margin: 0px;\">​Asesinato.&nbsp;\n</p><p style=\"margin: 0px;\">Exterminio.\n</p><p style=\"margin: 0px;\">Esclavitud.\n</p><p style=\"margin: 0px;\">Deportación o traslado forzoso de población.\n</p><p style=\"margin: 0px;\">Encarcelación u otra privación grave de la libertad física en violación de normas fundamentales de derecho internacional.\n</p><p style=\"margin: 0px;\">Tortura.</p>',
                            align: 'left',
                            rect: ['46px', '73px', '312px', '147px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text60',
                            text: '<p style=\"margin: 0px;\">​Violación, esclavitud sexual, prostitución forzada, embarazo forzado, esterilización forzada o cualquier otra forma de violencia sexual de gravedad comparable.\n</p><p style=\"margin: 0px;\">Persecución de un grupo o colectividad con identidad propia fundada en motivos políticos, raciales, nacionales, étnicos, culturales, religiosos, de género.\n</p><p style=\"margin: 0px;\">​Desaparición forzada de personas. </p><p style=\"margin: 0px;\">El crimen de apartheid.</p>',
                            align: 'left',
                            rect: ['395px', '73px', '403px', '137px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '828px', '254px']
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
            "uni2_derec_tex2_viole": {
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
                            id: 'uni2_derec_tex2_viole',
                            rect: ['0px', '0px', '828px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_tex2_viole.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text62',
                            text: '<p style=\"margin: 0px;\">​Homicidio intencional.</p><p style=\"margin: 0px;\">Tortura o los tratos inhumanos, incluidos los experimentos biológicos.\n</p><p style=\"margin: 0px;\">El hecho de causar deliberadamente grandes sufrimientos o atentar gravemente contra la integridad física o la salud.\n</p><p style=\"margin: 0px;\">La destrucción y la apropiación de bienes no justificadas por necesidades militares, y efectuadas a gran escala, ilícita y arbitrariamente.</p>',
                            align: 'left',
                            rect: ['47px', '72px', '345px', '161px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text63',
                            text: '<p style=\"margin: 0px;\">​El hecho de forzar a un prisionero de guerra o a otra persona protegida a servir en las fuerzas de una potencia enemiga.\n</p><p style=\"margin: 0px;\">El hecho de privar deliberadamente a un prisionero de guerra o a otra persona protegida de su derecho a ser juzgado legítima e imparcialmente. </p><p style=\"margin: 0px;\">La deportación o el traslado ilegal, la detención ilegal.\n</p><p style=\"margin: 0px;\">La toma de rehenes.\n</p>',
                            align: 'left',
                            rect: ['417px', '71px', '394px', '147px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text61',
                            text: '<p style=\"margin: 0px;\">​Infracciones graves de los Convenios de Ginebra de 1949 u otras violaciones graves de las leyes y usos aplicables en los conflictos armados internacionales dentro del marco del derecho internacional:</p>',
                            align: 'left',
                            rect: ['47px', '20px', '737px', '39px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '828px', '254px']
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
            "uni2_derec_tex2_rosa": {
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
                            id: 'uni2_derec_tex2_rosa',
                            rect: ['0px', '0px', '828px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_tex2_rosa.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text64',
                            text: '<p style=\"margin: 0px;\">​Planificación, preparación, inicio o ejecución de un acto de agresión por parte de una persona en posición de liderazgo.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El acto de agresión se define como el uso de las fuerzas armadas por parte de un Estado contra otro, sin justificación de defensa propia o autorización por parte del Consejo de Seguridad.</p>',
                            align: 'left',
                            rect: ['202px', '62px', '431px', '127px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '828px', '254px']
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
            "uni3_tex1": {
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
                            id: 'uni3_tex1',
                            rect: ['0px', '0px', '910px', '177px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_tex1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text65',
                            text: '<p style=\"margin: 0px;\">​Colombia es un estado miembro de la Organización de Naciones Unidas y de la Organización de los Estados Americanos; adicionalmente hace parte de los principales tratados internacionales de protección a los derechos humanos y al derecho internacional humanitario. Por lo anterior está obligado a la protección de los mismos por hacer parte integrante de la Constitución Política de Colombia.</p>',
                            align: 'center',
                            rect: ['76px', '1px', '760px', '81px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '910px', '177px']
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
            "uni3_oblig_dh": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '796px', '337px', 'auto', 'auto'],
                            id: 'uni3_oblig_dh',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_oblig_dh.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text66',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Las siguientes son las obligaciones específicas frente a los Derechos Humanos planteadas en la Constitución Política de Colombia y expresadas en los Derechos Humanos:</p>',
                            rect: ['307px', '14px', '423px', '63px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '796px', '337px']
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
            "uni3_oblig_dh_resp": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '789px', '233px', 'auto', 'auto'],
                            id: 'uni3_oblig_dh_resp',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_oblig_dh_resp.svg', '0px', '0px']
                        },
                        {
                            rect: ['291px', '87px', '172px', '81px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text67',
                            text: '<p style=\"margin: 0px;\">​Respeto por la dignidad humana, la vida, la libertad, la intimidad personal y familiar y libre desarrollo de la personalidad entre otros.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['563px', '78px', '193px', '107px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text68',
                            text: '<p style=\"margin: 0px;\">​Deber de respeto de los Estados frente a los individuos que viven en su territorio. Estos derechos son superiores al poder del Estado, por lo tanto, éste debe responder por la violación (así sea por omisión), a ellos.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '789px', '233px']
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
            "uni3_oblig_dh_garan": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '789px', '231px', 'auto', 'auto'],
                            id: 'uni3_oblig_dh_garan',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_oblig_dh_garan.svg', '0px', '0px']
                        },
                        {
                            rect: ['286px', '111px', '188px', '32px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text69',
                            text: '<p style=\"margin: 0px;\">​Derecho a la verdad, la justicia y la reparación.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['540px', '61px', '222px', '137px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text70',
                            text: '<p style=\"margin: 0px;\">​Garantizar, sin ningún tipo de discriminación, el libre y pleno ejercicio de los derechos y libertades.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Investigar las violaciones.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Sancionar a los infractores.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Reparar a las víctimas.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '789px', '231px']
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
            "uni3_oblig_dh_adop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '789px', '231px', 'auto', 'auto'],
                            id: 'uni3_oblig_dh_adop',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_oblig_dh_adop.svg', '0px', '0px']
                        },
                        {
                            rect: ['269px', '62px', '222px', '137px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text71',
                            text: '<p style=\"margin: 0px;\">​Art. 89. “La Ley establecerá los demás recursos, las acciones, y los procedimientos necesarios para que puedan propugnar por la integridad del orden jurídico, y por la protección de sus derechos individuales, de grupo o colectivos, frente a la acción u omisión de las autoridades públicas”.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['563px', '88px', '190px', '81px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text72',
                            text: '<p style=\"margin: 0px;\">​Adoptar las medidas legislativas para garantizar los derechos y libertades no contenidas en la legislación interna del Estado.&nbsp;</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '789px', '231px']
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
            "uni3_oblig_dh_oblig": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '789px', '231px', 'auto', 'auto'],
                            id: 'uni3_oblig_dh_oblig',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_oblig_dh_oblig.svg', '0px', '0px']
                        },
                        {
                            rect: ['264px', '65px', '233px', '137px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text73',
                            text: '<p style=\"margin: 0px;\">​Art. 13. Todas las personas nacen libres e iguales ante la Ley, recibirán la misma protección y trato de las autoridades y gozarán de los mismos derechos, libertades y oportunidades sin ninguna discriminación por razones de sexo, raza, origen nacional o familiar, lengua, religión, opinión política o filosófica.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['579px', '116px', '172px', '63px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text74',
                            text: '<p style=\"margin: 0px;\">​El derecho a la igualdad en todos los ámbitos.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '789px', '231px']
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
            "uni3_oblig_di": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '805px', '335px', 'auto', 'auto'],
                            id: 'uni3_oblig_di',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_oblig_di.svg', '0px', '0px']
                        },
                        {
                            rect: ['552px', '142px', '258px', '192px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​Estas obligaciones no son exclusivamente para el Estado, sino también para los miembros de los grupos armados. Puntualmente en lo que concierne al Estado, es necesario decir que éste tiene obligaciones de implementar políticas de respeto al DIH, infracciones penales por violaciones al DIH, entre otras.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['136px', '15px', '277px', '63px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Las obligaciones específicas frente al Derecho Internacional Humanitario son las siguientes:</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['18px', '170px', '235px', '137px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text75',
                            text: '<p style=\"margin: 0px;\">​Trato humanitario para personas que no participan del conflicto o han dejado de participar en él.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">No discriminación en el trato humanitario.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">No atentar contra la vida humana y la integridad personal.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['308px', '171px', '222px', '127px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text76',
                            text: '<p style=\"margin: 0px;\">​Protección y asistencia a poblaciones especiales:&nbsp;\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Enfermos, heridos, misión médica.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">No atentar contra la dignidad.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">No tomar rehenes.\n</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '810px', '671px']
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
            "uni3_rep_victi1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '699px', '208px', 'auto', 'auto'],
                            id: 'uni3_rep_victi1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_victi1.svg', '0px', '0px']
                        },
                        {
                            rect: ['48px', '1px', '589px', '206px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​“Se consideran víctimas, aquellas personas que individual o colectivamente hayan sufrido un daño por hechos ocurridos a partir del 1 de enero de 1985, como consecuencia de infracciones al Derecho Internacional Humanitario, o de violaciones graves y manifiestas a las normas internacionales de Derechos Humanos, ocurridas con ocasión del conflicto armado interno.&nbsp;\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">También son víctimas el cónyuge, compañero o compañera permanente, parejas del mismo sexo y familiar en primer grado de consanguinidad, primero civil de la víctima directa, cuando a esta (sic) se le hubiere dado muerte o estuviere desaparecida. A falta de estas (sic) lo serán los que se encuentren en el segundo grado de consanguinidad ascendente.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '699px', '208px']
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
            "uni3_rep_victi2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '699px', '208px', 'auto', 'auto'],
                            id: 'uni3_rep_victi2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_victi2.svg', '0px', '0px']
                        },
                        {
                            rect: ['48px', '1px', '602px', '115px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​De la misma forma, se consideran víctimas las personas que hayan sufrido un daño al intervenir para asistir a la víctima en peligro o para prevenir la victimización.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La condición de víctima se adquiere con independencia de que se individualice, aprehenda, procese o condene al autor de la conducta punible y de la relación familiar que pueda existir entre el autor y la víctima.” <span style=\"font-weight: 700;\">Artículo 3, Ley 1448 de 2011.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '699px', '208px']
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
            "uni3_rep_dano1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '699px', '209px', 'auto', 'auto'],
                            id: 'uni3_rep_dano1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano1.svg', '0px', '0px']
                        },
                        {
                            rect: ['48px', '48px', '602px', '153px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text6',
                            text: '<p style=\"margin: 0px;\">​Se genera por las infracciones al Derecho Internacional Humanitario o por las graves violaciones a los Derechos Humanos:\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">“La aminoración patrimonial sufrida por la víctima, es decir, la alteración negativa de un estado de cosas existente (…) Todo detrimento, menoscabo o perjuicio que a consecuencia de un determinado acontecimiento experimenta una persona en sus bienes espirituales o patrimoniales. El conocimiento o perjuicio, es decir, la aminoración o alteración”<span style=\"font-weight: 700;\"> (González, D. (2009)</span>.&nbsp;&nbsp;</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '699px', '209px']
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
            "uni3_rep_dano2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '637px', '209px', 'auto', 'auto'],
                            id: 'uni3_rep_dano2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano2.svg', '0px', '0px']
                        },
                        {
                            rect: ['49px', '48px', '602px', '59px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text7',
                            text: '<p style=\"margin: 0px;\">​Apuntes Sobre la Reparación Judicial en el marco de la Ley de Justicia y Paz. En reparación Judicial, Principio de Oportunidad e Infancia en la Ley de Justicia y Paz. GTZ. Bogotá).</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '651px', '209px']
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
            "uni3_rep_dano_impot": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '888px', '406px', 'auto', 'auto'],
                            id: 'uni3_rep_dano_impot',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano_impot.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text8',
                            textStyle: ['', '', '17px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​El Consejo de Estado en Colombia incluye la categoría daño a la salud como “todo perjuicio fisiológico o biológico, derivado de una lesión corporal o psicofísica” y lo divide en daño a la salud física y daño a la salud mental:\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Daño a la salud física: son las lesiones que los hechos de violencia generan en los componentes funcionales o biológicas de la víctima.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Daño a la salud mental: alteraciones al nivel del comportamiento y desempeño de la persona dentro de su entorno social y cultural que agraven la condición de la víctima.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El Ministerio de Salud y Protección Social introduce la categoría daño psicosocial como uno de los ejes centrales a tener en cuenta en los procesos de atención psicosocial como medida de rehabilitación a las víctimas del conflicto armado. Esta categoría se profundizará en el capítulo sobre el Programa de Atención Psicosocial y Salud Integral a Víctimas – PAPSIVI -&nbsp;\n</p>',
                            rect: ['60px', '73px', '602px', '231px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '888px', '406px']
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
            "uni3_derec_tex1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '1px', '863px', '280px', 'auto', 'auto'],
                            id: 'uni3_derec_tex1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex1.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['187px', '0px', '448px', '44px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text10',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Las siguientes son las características de los derechos de las víctimas a la verdad, justicia y reparación integral.</p>',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '863px', '281px']
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
            "uni3_derec_tex1_verd": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '822px', '233px', 'auto', 'auto'],
                            id: 'uni3_derec_tex1_verd',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex1_verd.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['40px', '71px', '344px', '127px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text11',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Derecho inalienable e imprescriptible a conocer la verdad acerca de las circunstancias en que se cometieron las violaciones.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Derecho a recordar. </p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Derecho a saber.</p>',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['443px', '68px', '344px', '97px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text12',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Derecho a contar con el funcionamiento independiente e imparcial del poder judicial.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Derecho a conocer el paradero de las víctimas de secuestro y desaparición forzada.</p>',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '822px', '233px']
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
            "uni3_derec_tex1_justi": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '822px', '233px', 'auto', 'auto'],
                            id: 'uni3_derec_tex1_justi',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex1_justi.svg', '0px', '0px']
                        },
                        {
                            rect: ['43px', '70px', '313px', '147px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text13',
                            text: '<p style=\"margin: 0px;\">​Derecho a disponer de un recurso judicial.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Derecho a una investigación seria.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Derecho a contar con jueces imparciales.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Derecho a la persecución, procesamiento y juzgamiento de los responsables.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['443px', '69px', '333px', '147px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text14',
                            text: '<p style=\"margin: 0px;\">​Derecho a garantías dentro del proceso.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Derecho a la participación en todas las etapas.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Derecho a la asistencia profesional y gratuidad.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Derecho a un plazo razonable en la duración del proceso.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '822px', '233px']
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
            "uni3_derec_tex1_rep": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '822px', '233px', 'auto', 'auto'],
                            id: 'uni3_derec_tex1_rep',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex1_rep.svg', '0px', '0px']
                        },
                        {
                            rect: ['44px', '70px', '325px', '137px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text15',
                            text: '<p style=\"margin: 0px;\">​Derecho a un recurso apropiado.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Derecho a contar y a participar en programas de reparación.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Derecho a la publicidad de los programas de reparación.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['443px', '67px', '369px', '97px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text16',
                            text: '<p style=\"margin: 0px;\">​Derecho a tratamiento adecuado.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Dimensiones de la reparación: restitución, indemnización, rehabilitación, satisfacción, garantías de no repetición.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '822px', '233px']
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
            "uni3_derec_tex2": {
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
                            id: 'uni3_derec_tex2',
                            rect: ['0px', '1px', '906px', '280px', 'auto', 'auto'],
                            clip: 'rect(0px 871px 280px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex2.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['282px', '0px', '344px', '33px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text23',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Las dimensiones para una reparación integral, son las siguientes:</p>',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '906px', '281px']
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
            "uni3_derec_tex2_restit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '562px', '184px', 'auto', 'auto'],
                            id: 'uni3_derec_tex2_restit',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex2_restit.svg', '0px', '0px']
                        },
                        {
                            rect: ['291px', '60px', '235px', '74px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text18',
                            text: '<p style=\"margin: 0px;\">​Hace referencia a restablecer la situación que existía antes del acto de violación a los DDHH o al DIH.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '562px', '184px']
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
            "uni3_derec_tex2_indem": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '562px', '184px', 'auto', 'auto'],
                            id: 'uni3_derec_tex2_indem',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex2_indem.svg', '0px', '0px']
                        },
                        {
                            rect: ['290px', '63px', '235px', '55px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text19',
                            text: '<p style=\"margin: 0px;\">​Se refiere a un monto de dinero por los daños sufridos por la violación a los DDHH o al DIH.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '562px', '184px']
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
            "uni3_derec_tex2_rehab": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '562px', '184px', 'auto', 'auto'],
                            id: 'uni3_derec_tex2_rehab',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex2_rehab.svg', '0px', '0px']
                        },
                        {
                            rect: ['289px', '54px', '214px', '74px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text20',
                            text: '<p style=\"margin: 0px;\">​Contar con asistencia para restablecer su integridad física (psicosocial, mental y física), moral y legal.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '562px', '184px']
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
            "uni3_derec_tex2_satis": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '562px', '184px', 'auto', 'auto'],
                            id: 'uni3_derec_tex2_satis',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex2_satis.svg', '0px', '0px']
                        },
                        {
                            rect: ['289px', '61px', '254px', '55px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text21',
                            text: '<p style=\"margin: 0px;\">​Medidas de naturaleza simbólica que permita la reparación de la víctima, la comunidad y su entorno.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '562px', '184px']
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
            "uni3_derec_tex2_no": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '562px', '184px', 'auto', 'auto'],
                            id: 'uni3_derec_tex2_no',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex2_no.svg', '0px', '0px']
                        },
                        {
                            rect: ['290px', '45px', '240px', '91px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text22',
                            text: '<p style=\"margin: 0px;\">​Medidas que aseguren que las víctimas y la sociedad no serán objeto, nuevamente de las mismas u otras violaciones a los DDHH o al DIH.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '562px', '184px']
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
            "uni3_derec_tex3": {
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
                            id: 'uni3_derec_tex3',
                            rect: ['0px', '0px', '906px', '300px', 'auto', 'auto'],
                            clip: 'rect(0px 876px 300px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex3.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['256px', '0px', '527px', '33px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text24',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​El principal marco normativo nacional que trata sobre la reparación integral a las víctimas del conflicto armado, se encuentra a continuación:</p>',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '906px', '300px']
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
            "uni3_derec_tex3_2004": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '635px', '193px', 'auto', 'auto'],
                            id: 'uni3_derec_tex3_2004',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex3_2004.svg', '0px', '0px']
                        },
                        {
                            rect: ['61px', '15px', '548px', '157px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text25',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Sentencia T-025 de 2004 Corte Constitucional de Colombia y sus autos de seguimiento</span>\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Declara la existencia de un estado de cosas inconstitucional en el campo del desplazamiento forzado, e imparte varias órdenes encaminadas a la garantía del goce efectivo de los derechos fundamentales de las víctimas.&nbsp;\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">A partir de la Sentencia, la Corte Constitucional ha emitido entre otros los siguientes autos: Auto 092 de 2008 (mujeres), Auto 251 de 2008 (niños, niñas y adolescentes), Auto 004 de 2009 (pueblos indígenas), Auto 005 de 2009 (población afrocolombiana), Auto 006 de 2009 (población con discapacidad).&nbsp;</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '635px', '193px']
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
            "uni3_derec_tex3_2008": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '635px', '193px', 'auto', 'auto'],
                            id: 'uni3_derec_tex3_2008',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex3_2008.svg', '0px', '0px']
                        },
                        {
                            rect: ['141px', '58px', '391px', '66px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text26',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Decreto 1290 de 2008</span>\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Programa de reparación individual por vía administrativa para las víctimas de los grupos armados organizados al margen de la Ley.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '635px', '193px']
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
            "uni3_derec_tex3_2012": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '635px', '193px', 'auto', 'auto'],
                            id: 'uni3_derec_tex3_2012',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex3_2012.svg', '0px', '0px']
                        },
                        {
                            rect: ['125px', '47px', '435px', '97px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text27',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Ley 975 de 2005 modificada por la Ley 1592 de 2012</span>\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Disposiciones para la reincorporación de miembros de grupos armados organizados al margen de la Ley, que contribuyan de manera efectiva a la consecución de la paz nacional y otras disposiciones para acuerdos humanitarios.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '635px', '193px']
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
            "uni3_derec_tex3_2010": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '635px', '193px', 'auto', 'auto'],
                            id: 'uni3_derec_tex3_2010',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex3_2010.svg', '0px', '0px']
                        },
                        {
                            rect: ['178px', '34px', '325px', '115px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text28',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Sentencia T-045 de 2010</span>\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Las entidades públicas encargadas de garantizar la prestación de los servicios de salud, deben contemplar las circunstancias particulares que se desprenden del hecho de ser víctimas del conflicto armado y del desplazamiento forzado.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '635px', '193px']
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
            "uni3_derec_tex3_2011": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '635px', '193px', 'auto', 'auto'],
                            id: 'uni3_derec_tex3_2011',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex3_2011.svg', '0px', '0px']
                        },
                        {
                            rect: ['206px', '55px', '264px', '82px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text29',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Ley 1448 de 2011</span>\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Ley de Víctimas y Restitución de Tierras, sus Decretos Reglamentarios y Decretos con Fuerza de Ley.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '635px', '193px']
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
            "uni3_derec_tex4": {
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
                            id: 'uni3_derec_tex4',
                            rect: ['0px', '0px', '906px', '300px', 'auto', 'auto'],
                            clip: 'rect(0px 863.4072265625px 300px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex4.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['196px', '1px', '651px', '44px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text30',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Dentro de este marco normativo, hay sentencias internacionales y nacionales que obligan de manera específica al Estado Colombiano a reparar a las víctimas del conflicto armado:</p>',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '906px', '300px']
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
            "uni3_derec_tex4_1descrip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '721px', '251px', 'auto', 'auto'],
                            id: 'uni3_derec_tex4_1descrip',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex4_1descrip.svg', '0px', '0px']
                        },
                        {
                            rect: ['176px', '109px', '548px', '147px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text31',
                            text: '<p style=\"margin: 0px;\">​En estas sentencias, la Corte IDH ha declarado que el Estado colombiano ha vulnerado derechos humanos, por la violación de alguna de las normas contenidas en la Convención Americana de Derechos Humanos de 1969 y, por tanto, debe reparar adecuadamente el daño causado.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">En esa medida, la Corte IDH ha considerado la necesidad de otorgar diversas medidas de reparación como indemnización, satisfacción, rehabilitación, restitución y garantías de no repetición.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Dentro de las medidas de reparación ordenadas por la Corte IDH está la obligación de las autoridades colombianas de brindar atención médica y psicológica a los beneficiarios señalados en las sentencias, con el fin de reducir sus padecimientos físicos y psicológicos.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '724px', '256px']
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
            "uni3_derec_tex4_2descr": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '711px', '201px', 'auto', 'auto'],
                            id: 'uni3_derec_tex4_2descr',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex4_2descr.svg', '0px', '0px']
                        },
                        {
                            rect: ['254px', '118px', '369px', '91px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text32',
                            text: '<p style=\"margin: 0px;\">​En febrero de 2010 la Honorable Corte Constitucional en Sentencia T-045 de 2010 se pronuncia en razón a la existencia de víctimas del conflicto armado que presentaron graves afectaciones en la salud física y mental a nivel individual, familiar y comunitario por las masacres ocurridas en el Corregimiento El Salado (Carmen de Bolívar – Dpto. de Bolívar) en los años 1997 y 2000.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '711px', '209px']
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
            "uni3_derec_tex4_3descr": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '721px', '213px', 'auto', 'auto'],
                            id: 'uni3_derec_tex4_3descr',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex4_3descr.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['239px', '127px', '422px', '86px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text33',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​En el marco del desarrollo de Justicia Transicional en Colombia, los Tribunales de Justicia y Paz han adelantado procesos judiciales con el objeto de permitir la desmovilización individual o colectiva de los miembros de los grupos armados ilegales responsables de los delitos, para propiciar su reincorporación a la vida civil y la reparación integral de las víctimas bajo los principios universales de verdad, justicia y reparación.</p>',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '721px', '213px']
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
            "uni3_derec_tex5": {
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
                            id: 'uni3_derec_tex5',
                            rect: ['0px', '0px', '714px', '382px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['363px', '26px', '357px', '74px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text34',
                            text: '<p style=\"margin: 0px;\">​Haga clic en las distintas regiones para conocer algunas sentencias que obligan al Estado Colombiano a reconocer los derechos de las víctimas a la verdad, justicia y reparación integral.</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '720px', '382px']
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
            "sym_uni1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'uni1_text1',
                            symbolName: 'uni1_text1',
                            clip: 'rect(0px 0px 333px 0px)',
                            rect: ['0px', '0px', '1043', '333', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            symbolName: 'uni1_tab_prop',
                            display: 'none',
                            opacity: '0.034188415759649',
                            rect: ['283px', '0px', '760', '333', 'auto', 'auto'],
                            id: 'uni1_tab_prop'
                        },
                        {
                            type: 'rect',
                            id: 'uni1_tab_histo',
                            symbolName: 'uni1_tab_histo',
                            rect: ['283px', '0px', '760', '333', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'uni1_tab_aplic',
                            symbolName: 'uni1_tab_aplic',
                            rect: ['283px', '0px', '760', '333', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'uni1_tab_obliga',
                            symbolName: 'uni1_tab_obliga',
                            rect: ['283px', '0px', '760', '333', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'uni1_tab_quien',
                            symbolName: 'uni1_tab_quien',
                            rect: ['283px', '0px', '760', '333', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'uni1_tab_princi',
                            symbolName: 'uni1_tab_princi',
                            rect: ['283px', '0px', '760', '333', 'auto', 'auto']
                        },
                        {
                            rect: ['283px', '0px', '760', '333', 'auto', 'auto'],
                            id: 'uni1_tab_norma',
                            symbolName: 'uni1_tab_norma',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['426px', '89px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['426px', '138px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito3Copy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['426px', '181px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito3Copy2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['426px', '225px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito3Copy3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['426px', '270px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito3Copy4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['426px', '308px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito3Copy5',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['43'], [0, 0, 0], [1, 1, 1]],
                            type: 'rect',
                            display: 'none',
                            symbolName: 'manitaSimb',
                            rect: ['927px', '-67px', null, null, 'auto', 'auto'],
                            id: 'manitaSimb2'
                        },
                        {
                            rect: ['283px', '39px', '166px', '28px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['283px', '83px', '166px', '28px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['283px', '127px', '166px', '28px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['283px', '171px', '166px', '28px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['283px', '213px', '166px', '28px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['283px', '257px', '166px', '28px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['283px', '301px', '166px', '28px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['710px', '271px', '295px', '142px', 'auto', 'auto'],
                            id: 'mensaje_unid12',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mensaje_unid1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1043px', '333px']
                        }
                    }
                },
                timeline: {
                    duration: 9750,
                    autoPlay: false,
                    labels: {
                        "1": 750,
                        "2": 1740,
                        "3": 2730,
                        "4": 3720,
                        "5": 4710,
                        "6": 5700,
                        "7": 6690
                    },
                    data: [
                        [
                            "eid794",
                            "display",
                            6690,
                            0,
                            "linear",
                            "${manitaSimb2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1237",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${mensaje_unid12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "clip",
                            0,
                            750,
                            "linear",
                            "${uni1_text1}",
                            [0,0,333,0],
                            [0,1043,333,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid691",
                            "display",
                            1159,
                            0,
                            "linear",
                            "${manito3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid692",
                            "display",
                            1623,
                            0,
                            "linear",
                            "${manito3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            5700,
                            0,
                            "linear",
                            "${uni1_tab_princi}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "display",
                            6572,
                            0,
                            "linear",
                            "${uni1_tab_princi}",
                            'block',
                            'none'
                        ],
                        [
                            "eid50",
                            "opacity",
                            3720,
                            500,
                            "linear",
                            "${uni1_tab_obliga}",
                            '0.034188415759649',
                            '1'
                        ],
                        [
                            "eid735",
                            "display",
                            2240,
                            0,
                            "linear",
                            "${manito3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid736",
                            "display",
                            2704,
                            0,
                            "linear",
                            "${manito3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "opacity",
                            6690,
                            500,
                            "linear",
                            "${uni1_tab_norma}",
                            '0.034188415759649',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            5700,
                            500,
                            "linear",
                            "${uni1_tab_princi}",
                            '0.034188415759649',
                            '1'
                        ],
                        [
                            "eid48",
                            "display",
                            3720,
                            0,
                            "linear",
                            "${uni1_tab_obliga}",
                            'none',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            4592,
                            0,
                            "linear",
                            "${uni1_tab_obliga}",
                            'block',
                            'none'
                        ],
                        [
                            "eid749",
                            "display",
                            5210,
                            0,
                            "linear",
                            "${manito3Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid750",
                            "display",
                            5674,
                            0,
                            "linear",
                            "${manito3Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            750,
                            0,
                            "linear",
                            "${uni1_tab_prop}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            1622,
                            0,
                            "linear",
                            "${uni1_tab_prop}",
                            'block',
                            'none'
                        ],
                        [
                            "eid44",
                            "opacity",
                            1740,
                            500,
                            "linear",
                            "${uni1_tab_histo}",
                            '0.034188415759649',
                            '1'
                        ],
                        [
                            "eid1238",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni1_tab_norma}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1239",
                            "display",
                            6690,
                            0,
                            "linear",
                            "${uni1_tab_norma}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            4710,
                            0,
                            "linear",
                            "${uni1_tab_quien}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            5582,
                            0,
                            "linear",
                            "${uni1_tab_quien}",
                            'block',
                            'none'
                        ],
                        [
                            "eid746",
                            "display",
                            4220,
                            0,
                            "linear",
                            "${manito3Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid747",
                            "display",
                            4684,
                            0,
                            "linear",
                            "${manito3Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid752",
                            "display",
                            6200,
                            0,
                            "linear",
                            "${manito3Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid753",
                            "display",
                            6664,
                            0,
                            "linear",
                            "${manito3Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid53",
                            "opacity",
                            4710,
                            500,
                            "linear",
                            "${uni1_tab_quien}",
                            '0.034188415759649',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            2730,
                            500,
                            "linear",
                            "${uni1_tab_aplic}",
                            '0.034188415759649',
                            '1'
                        ],
                        [
                            "eid42",
                            "display",
                            1740,
                            0,
                            "linear",
                            "${uni1_tab_histo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid43",
                            "display",
                            2612,
                            0,
                            "linear",
                            "${uni1_tab_histo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid742",
                            "display",
                            3138,
                            0,
                            "linear",
                            "${manito3Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid743",
                            "display",
                            3602,
                            0,
                            "linear",
                            "${manito3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${uni1_tab_prop}",
                            '0.034188415759649',
                            '1'
                        ],
                        [
                            "eid45",
                            "display",
                            2730,
                            0,
                            "linear",
                            "${uni1_tab_aplic}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            3602,
                            0,
                            "linear",
                            "${uni1_tab_aplic}",
                            'block',
                            'none'
                        ],
                            [ "eid795", "trigger", 7190, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${manitaSimb2}', [] ] ]
                    ]
                }
            },
            "sym_uni2_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '9', '986', '337', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'Symbol_1',
                            id: 'Symbol_1',
                            type: 'rect'
                        },
                        {
                            type: 'text',
                            id: 'Text17',
                            text: '<p style=\"margin: 0px;\">​La Comisión Histórica del Conflicto y sus Víctimas encargada de “producir un informe sobre los orígenes y las múltiples causas del conflicto, los principales factores y condiciones que ha facilitado o contribuido a su persistencia, y los efectos e impactos más notorios del mismo sobre la población”, identificó varios factores determinantes para el surgimiento de la guerra tales como la tierra, la exclusión, la desigualdad, y el narcotráfico como principal factor de prolongación y degradación.\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Según el informe general del Grupo de Memoria Histórica <span style=\"font-style: italic;\">¡Basta Ya! Colombia: memorias de guerra y dignidad</span>, podemos afirmar que la historia y evolución del conflicto armado en el país ha tenido cuatro grandes períodos:</p>',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            display: 'none',
                            rect: ['28px', '10px', '403px', '294px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0']]
                        },
                        {
                            rect: ['76px', '19px', '469', '335', 'auto', 'auto'],
                            id: 'uni2_orig_text2',
                            symbolName: 'uni2_orig_text2',
                            type: 'rect'
                        },
                        {
                            rect: ['17px', '0px', '955', '294', 'auto', 'auto'],
                            id: 'uni2_orig_tex3',
                            symbolName: 'uni2_orig_tex3',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'uni2_orig_preg1',
                            display: 'none',
                            opacity: '0.0085470085470085',
                            rect: ['0px', '174px', '469', '172', 'auto', 'auto'],
                            symbolName: 'uni2_orig_preg1'
                        },
                        {
                            rect: ['0px', '175px', '450', '171', 'auto', 'auto'],
                            id: 'uni2_orig_preg2',
                            symbolName: 'uni2_orig_preg2',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['965', '310px', '30px', '31px', 'auto', 'auto'],
                            id: 'flecha_unid2',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_unid2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['960px', '321px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito3Copy6',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1016px', '283px', '40px', '40px', 'auto', 'auto'],
                            id: 'btn_siguiente',
                            fill: ['rgba(0,0,0,0)', 'images/btn_siguiente.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['106'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'manito4',
                            display: 'none',
                            rect: ['1022px', '116px', '46px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['71'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'manito4Copy',
                            display: 'none',
                            rect: ['1000px', '302px', '46px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['1023px', '287px', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'btn_siguienteCopy',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_siguiente.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1008px', '273px', '56px', '57px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '269px', '56px', '57px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['952px', '296px', '56px', '57px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '297px', '56px', '57px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['-11px', '297px', '56px', '57px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['media/No_Hubo_Tiempo_Para_la_Tisteza_subtitulado_2.mp4'],
                            id: 'No_Hubo_Tiempo_Para_la_Tisteza_subtitulado_2',
                            opacity: '0.025641025641026',
                            preload: 'auto',
                            rect: ['495px', '-15px', '470px', '315px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            transform: [[], ['-88'], [0, 0, 0], [1, 1, 1]],
                            id: 'manitaSimb_1',
                            display: 'none',
                            symbolName: 'manitaSimb_1',
                            rect: ['523px', '228px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '991px', '354px']
                        }
                    }
                },
                timeline: {
                    duration: 10270.328854231,
                    autoPlay: false,
                    labels: {
                        "1": 750,
                        "2": 1720,
                        "22": 2287,
                        "3": 2690,
                        "32": 6750,
                        "4": 7513
                    },
                    data: [
                        [
                            "eid118",
                            "display",
                            2220,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid119",
                            "display",
                            2534,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid720",
                            "opacity",
                            3190,
                            500,
                            "linear",
                            "${No_Hubo_Tiempo_Para_la_Tisteza_subtitulado_2}",
                            '0.025641025641026',
                            '1'
                        ],
                        [
                            "eid106",
                            "opacity",
                            3190,
                            560,
                            "linear",
                            "${uni2_orig_preg1}",
                            '0.0085470085470085',
                            '1'
                        ],
                        [
                            "eid856",
                            "display",
                            7513,
                            0,
                            "linear",
                            "${manito4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            1720,
                            0,
                            "linear",
                            "${uni2_orig_text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            2534,
                            0,
                            "linear",
                            "${uni2_orig_text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${btn_siguiente}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "display",
                            1564,
                            0,
                            "linear",
                            "${btn_siguiente}",
                            'block',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            2220,
                            0,
                            "linear",
                            "${btn_siguienteCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid142",
                            "display",
                            2534,
                            0,
                            "linear",
                            "${btn_siguienteCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid97",
                            "scaleX",
                            1720,
                            500,
                            "linear",
                            "${uni2_orig_text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Text17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            1564,
                            0,
                            "linear",
                            "${Text17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1264",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${flecha_unid2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1265",
                            "display",
                            7513,
                            0,
                            "linear",
                            "${flecha_unid2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1240",
                            "left",
                            2220,
                            0,
                            "linear",
                            "${uni2_orig_text2}",
                            '76px',
                            '76px'
                        ],
                        [
                            "eid1248",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${manito4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1249",
                            "display",
                            2690,
                            0,
                            "linear",
                            "${manito4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid802",
                            "display",
                            6869,
                            0,
                            "linear",
                            "${manito3Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid803",
                            "display",
                            7513,
                            0,
                            "linear",
                            "${manito3Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid115",
                            "opacity",
                            7513,
                            560,
                            "linear",
                            "${uni2_orig_preg2}",
                            '0.0085470085470085',
                            '1'
                        ],
                        [
                            "eid103",
                            "display",
                            1720,
                            0,
                            "linear",
                            "${Symbol_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid116",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid117",
                            "display",
                            1564,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "scaleX",
                            2690,
                            500,
                            "linear",
                            "${uni2_orig_tex3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "display",
                            3190,
                            0,
                            "linear",
                            "${uni2_orig_preg1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${uni2_orig_preg1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid129",
                            "display",
                            8564,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid94",
                            "scaleX",
                            750,
                            500,
                            "linear",
                            "${Text17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid101",
                            "display",
                            2690,
                            0,
                            "linear",
                            "${uni2_orig_tex3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${Rectangle3Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            7064,
                            0,
                            "linear",
                            "${Rectangle3Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid827",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${manitaSimb_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid828",
                            "display",
                            7119,
                            0,
                            "linear",
                            "${manitaSimb_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            7513,
                            0,
                            "linear",
                            "${uni2_orig_preg2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid114",
                            "display",
                            8573,
                            0,
                            "linear",
                            "${uni2_orig_preg2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "display",
                            7064,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid718",
                            "display",
                            3190,
                            0,
                            "linear",
                            "${No_Hubo_Tiempo_Para_la_Tisteza_subtitulado_2}",
                            'none',
                            'block'
                        ],
                            [ "eid104", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_1}', [0] ] ],
                            [ "eid834", "trigger", 3750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${manitaSimb_1}', [0] ] ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'uni2_orig_text1',
                            symbolName: 'uni2_orig_text1',
                            clip: 'rect(0px 986px 0px 0px)',
                            rect: ['0px', '0px', '986', '337', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['1', '0']],
                            id: 'uni2_orig_rojo',
                            display: 'none',
                            symbolName: 'uni2_orig_rojo',
                            rect: ['493px', '144px', '498', '141', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['493px', '144px', '498', '141', 'auto', 'auto'],
                            id: 'uni2_orig_verde',
                            symbolName: 'uni2_orig_verde',
                            type: 'rect'
                        },
                        {
                            rect: ['493px', '144px', '498', '141', 'auto', 'auto'],
                            id: 'uni2_orig_viole',
                            symbolName: 'uni2_orig_viole',
                            type: 'rect'
                        },
                        {
                            rect: ['493px', '144px', '498', '141', 'auto', 'auto'],
                            id: 'uni2_orig_rosa',
                            symbolName: 'uni2_orig_rosa',
                            type: 'rect'
                        },
                        {
                            rect: ['674px', '121px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['794px', '121px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito4Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['916px', '121px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito4Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['-83'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'manito4Copy4',
                            display: 'none',
                            rect: ['1037px', '263px', '46px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['509px', '57px', '86px', '86px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['631px', '57px', '86px', '86px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['757px', '57px', '86px', '86px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['885px', '57px', '86px', '86px', 'auto', 'auto'],
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '986px', '337px']
                        }
                    }
                },
                timeline: {
                    duration: 4513,
                    autoPlay: false,
                    labels: {
                        "1": 750,
                        "2": 1720,
                        "3": 2690,
                        "4": 4000
                    },
                    data: [
                        [
                            "eid82",
                            "display",
                            1720,
                            0,
                            "linear",
                            "${uni2_orig_verde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            2573,
                            0,
                            "linear",
                            "${uni2_orig_verde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid721",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${manito4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid722",
                            "display",
                            1569,
                            0,
                            "linear",
                            "${manito4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid778",
                            "display",
                            3660,
                            0,
                            "linear",
                            "${manito4Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "scaleY",
                            3660,
                            500,
                            "linear",
                            "${uni2_orig_rosa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "display",
                            3660,
                            0,
                            "linear",
                            "${uni2_orig_rosa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            4513,
                            0,
                            "linear",
                            "${uni2_orig_rosa}",
                            'block',
                            'none'
                        ],
                        [
                            "eid76",
                            "clip",
                            0,
                            750,
                            "linear",
                            "${uni2_orig_text1}",
                            [0,986,0,0],
                            [0,986,337,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid81",
                            "scaleY",
                            1720,
                            500,
                            "linear",
                            "${uni2_orig_verde}",
                            '0',
                            '1'
                        ],
                        [
                            "eid759",
                            "display",
                            3190,
                            0,
                            "linear",
                            "${manito4Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid760",
                            "display",
                            3509,
                            0,
                            "linear",
                            "${manito4Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid79",
                            "scaleY",
                            750,
                            500,
                            "linear",
                            "${uni2_orig_rojo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "display",
                            750,
                            0,
                            "linear",
                            "${uni2_orig_rojo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            1603,
                            0,
                            "linear",
                            "${uni2_orig_rojo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "scaleY",
                            2690,
                            500,
                            "linear",
                            "${uni2_orig_viole}",
                            '0',
                            '1'
                        ],
                        [
                            "eid756",
                            "display",
                            2220,
                            0,
                            "linear",
                            "${manito4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid757",
                            "display",
                            2539,
                            0,
                            "linear",
                            "${manito4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            2690,
                            0,
                            "linear",
                            "${uni2_orig_viole}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            3543,
                            0,
                            "linear",
                            "${uni2_orig_viole}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "sym_solucion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'uni2_soluc_tex1',
                            display: 'block',
                            symbolName: 'uni2_soluc_tex1',
                            rect: ['88px', '2px', '531', '140', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '0']]
                        },
                        {
                            type: 'rect',
                            id: 'uni2_soluc_tex1_1',
                            symbolName: 'uni2_soluc_tex1_1',
                            display: 'none',
                            rect: ['134px', '96px', '320', '140', 'auto', 'auto']
                        },
                        {
                            rect: ['111px', '96px', '369', '160', 'auto', 'auto'],
                            id: 'uni2_soluc_tex1_2',
                            symbolName: 'uni2_soluc_tex1_2',
                            type: 'rect'
                        },
                        {
                            rect: ['134px', '96px', '325', '203', 'auto', 'auto'],
                            id: 'uni2_soluc_tex1_3',
                            symbolName: 'uni2_soluc_tex1_3',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'uni2_soluc_tex2',
                            display: 'none',
                            symbolName: 'uni2_soluc_tex2',
                            rect: ['0px', '0px', '558', '206', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            rect: ['117px', '161px', '313', '108', 'auto', 'auto'],
                            id: 'uni2_soluc_tex2_1',
                            symbolName: 'uni2_soluc_tex2_1',
                            type: 'rect'
                        },
                        {
                            rect: ['177px', '161px', '277', '107', 'auto', 'auto'],
                            id: 'uni2_soluc_tex2_2',
                            symbolName: 'uni2_soluc_tex2_2',
                            type: 'rect'
                        },
                        {
                            rect: ['194px', '161px', '258', '137', 'auto', 'auto'],
                            id: 'uni2_soluc_tex2_3',
                            symbolName: 'uni2_soluc_tex2_3',
                            type: 'rect'
                        },
                        {
                            rect: ['198px', '161px', '254', '115', 'auto', 'auto'],
                            id: 'uni2_soluc_tex2_4',
                            symbolName: 'uni2_soluc_tex2_4',
                            type: 'rect'
                        },
                        {
                            rect: ['204px', '161px', '240', '108', 'auto', 'auto'],
                            id: 'uni2_soluc_tex2_5',
                            symbolName: 'uni2_soluc_tex2_5',
                            type: 'rect'
                        },
                        {
                            rect: ['235px', '161px', '235', '108', 'auto', 'auto'],
                            id: 'uni2_soluc_tex2_6',
                            symbolName: 'uni2_soluc_tex2_6',
                            type: 'rect'
                        },
                        {
                            rect: ['145px', '161px', '385', '127', 'auto', 'auto'],
                            id: 'uni2_soluc_tex2_7',
                            symbolName: 'uni2_soluc_tex2_7',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['587px', '12px', '40px', '40px', 'auto', 'auto'],
                            id: 'btn_siguiente2',
                            fill: ['rgba(0,0,0,0)', 'images/btn_siguiente.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['292px', '122px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['353px', '122px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5Copy',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['596px', '38px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5Copy2',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['198px', '187px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5Copy3',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['259px', '188px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5Copy4',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['319px', '189px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5Copy5',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['382px', '187px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5Copy6',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['441px', '193px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5Copy7',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['505px', '193px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5Copy8',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['102'], [0, 0, 0], [1, 1, 1]],
                            rect: ['747px', '133px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'manito5Copy9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['581px', '14px', '38px', '40px', 'auto', 'auto'],
                            display: 'block',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '14px', '38px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['203px', '94px', '50px', '48px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['267px', '94px', '50px', '48px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['329px', '94px', '50px', '48px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['117px', '162px', '38px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['179px', '162px', '38px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['241px', '162px', '38px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['304px', '162px', '38px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['364px', '162px', '38px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['424px', '162px', '38px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['492px', '162px', '38px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '619px', '299px']
                        }
                    }
                },
                timeline: {
                    duration: 9349,
                    autoPlay: false,
                    labels: {
                        "1": 500,
                        "2": 1349,
                        "3": 2198,
                        "4": 3047,
                        "5": 3500,
                        "6": 4349,
                        "7": 5198,
                        "8": 6047,
                        "9": 6896,
                        "10": 7745,
                        "11": 8594
                    },
                    data: [
                        [
                            "eid209",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Rectangle2Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1188",
                            "display",
                            2198,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'block'
                        ],
                        [
                            "eid191",
                            "display",
                            2871,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid192",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1186",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${btn_siguiente2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1187",
                            "display",
                            3047,
                            0,
                            "linear",
                            "${btn_siguiente2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid211",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "display",
                            489,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid197",
                            "display",
                            2912,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid183",
                            "display",
                            6047,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid184",
                            "display",
                            6720,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid873",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${manito5Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid874",
                            "display",
                            5099,
                            0,
                            "linear",
                            "${manito5Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid879",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${manito5Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid880",
                            "display",
                            6849,
                            0,
                            "linear",
                            "${manito5Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            500,
                            0,
                            "linear",
                            "${uni2_soluc_tex1_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid167",
                            "display",
                            1173,
                            0,
                            "linear",
                            "${uni2_soluc_tex1_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            5198,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            5871,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid179",
                            "display",
                            4349,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid180",
                            "display",
                            5022,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            1349,
                            0,
                            "linear",
                            "${uni2_soluc_tex1_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "display",
                            2022,
                            0,
                            "linear",
                            "${uni2_soluc_tex1_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid210",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid187",
                            "display",
                            7745,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid188",
                            "display",
                            8418,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid205",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid888",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${manito5Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid889",
                            "display",
                            9349,
                            0,
                            "linear",
                            "${manito5Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid208",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid189",
                            "display",
                            8594,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid190",
                            "display",
                            9267,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Rectangle2Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid861",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${manito5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid862",
                            "display",
                            2099,
                            0,
                            "linear",
                            "${manito5Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid885",
                            "display",
                            7901,
                            0,
                            "linear",
                            "${manito5Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid886",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${manito5Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid177",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid178",
                            "display",
                            4173,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid185",
                            "display",
                            6896,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid186",
                            "display",
                            7569,
                            0,
                            "linear",
                            "${uni2_soluc_tex2_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid859",
                            "display",
                            750,
                            0,
                            "linear",
                            "${manito5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid860",
                            "display",
                            1349,
                            0,
                            "linear",
                            "${manito5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid882",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${manito5Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid883",
                            "display",
                            7599,
                            0,
                            "linear",
                            "${manito5Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid206",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid172",
                            "display",
                            2871,
                            0,
                            "linear",
                            "${uni2_soluc_tex1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid876",
                            "display",
                            5401,
                            0,
                            "linear",
                            "${manito5Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid877",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${manito5Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid869",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${manito5Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid870",
                            "display",
                            4349,
                            0,
                            "linear",
                            "${manito5Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            489,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid198",
                            "display",
                            2912,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            2198,
                            0,
                            "linear",
                            "${uni2_soluc_tex1_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid171",
                            "display",
                            2871,
                            0,
                            "linear",
                            "${uni2_soluc_tex1_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid193",
                            "display",
                            489,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid196",
                            "display",
                            2912,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            3047,
                            0,
                            "linear",
                            "${uni2_soluc_tex2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid864",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${manito5Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid865",
                            "display",
                            2849,
                            0,
                            "linear",
                            "${manito5Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid165",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${uni2_soluc_tex1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid175",
                            "opacity",
                            3047,
                            453,
                            "linear",
                            "${uni2_soluc_tex2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "sym_dere": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0']],
                            id: 'uni2_derec_text1',
                            rect: ['0px', '5px', '924', '349', 'auto', 'auto'],
                            display: 'block',
                            opacity: '0.016260162601626',
                            symbolName: 'uni2_derec_text1',
                            type: 'rect'
                        },
                        {
                            rect: ['12px', '0px', '912', '363', 'auto', 'auto'],
                            id: 'uni2_derec_tex2',
                            display: 'none',
                            symbolName: 'uni2_derec_tex2',
                            clip: 'rect(0px 912px 0px 0px)',
                            type: 'rect'
                        },
                        {
                            rect: ['56px', '112px', '828', '254', 'auto', 'auto'],
                            id: 'uni2_derec_tex2_rojo',
                            symbolName: 'uni2_derec_tex2_rojo',
                            type: 'rect'
                        },
                        {
                            rect: ['56px', '112px', '828', '254', 'auto', 'auto'],
                            id: 'uni2_derec_tex2_verde',
                            symbolName: 'uni2_derec_tex2_verde',
                            type: 'rect'
                        },
                        {
                            rect: ['56px', '112px', '828', '254', 'auto', 'auto'],
                            id: 'uni2_derec_tex2_viole',
                            symbolName: 'uni2_derec_tex2_viole',
                            type: 'rect'
                        },
                        {
                            rect: ['56px', '112px', '828', '254', 'auto', 'auto'],
                            id: 'uni2_derec_tex2_rosa',
                            symbolName: 'uni2_derec_tex2_rosa',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['592px', '233px', '223px', '70px', 'auto', 'auto'],
                            id: 'bnt_tabla',
                            fill: ['rgba(0,0,0,0)', 'images/bnt_tabla.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['894px', '328px', '40px', '40px', 'auto', 'auto'],
                            id: 'btn_siguiente4',
                            fill: ['rgba(0,0,0,0)', 'images/btn_siguiente.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['980px', '303px', '40px', '40px', 'auto', 'auto'],
                            id: 'btn_siguiente3',
                            fill: ['rgba(0,0,0,0)', 'images/btn_siguiente.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 10, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 10, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'uni2_derec_tex3',
                            rect: ['9px', '14px', '860px', '356px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_derec_tex3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['430px', '79px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['642px', '85px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2Copy',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['853px', '85px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2Copy2',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['893px', '341px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2Copy3',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['613px', '268px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito6Copy7',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['978px', '289px', '48px', '60px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['588px', '238px', '227px', '60px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['876px', '5px', '48px', '37px', 'auto', 'auto'],
                            display: 'block',
                            id: 'Rectangle3Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '333px', '48px', '37px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['887px', '331px', '48px', '37px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '333px', '48px', '37px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['466px', '48px', '116px', '86px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['466px', '142px', '116px', '86px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle5Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['466px', '233px', '116px', '86px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle5Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['688px', '65px', '194px', '42px', 'auto', 'auto'],
                            id: 'Rectangle29',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['56px', '65px', '194px', '42px', 'auto', 'auto'],
                            id: 'Rectangle29Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['268px', '65px', '194px', '42px', 'auto', 'auto'],
                            id: 'Rectangle29Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['476px', '65px', '194px', '42px', 'auto', 'auto'],
                            id: 'Rectangle29Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            transform: [[], ['36'], [], ['1', '1.0701']],
                            id: 'manitaSimb4',
                            display: 'none',
                            symbolName: 'manitaSimb',
                            rect: ['928px', '-71px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['707px', '270px', '295px', '142px', 'auto', 'auto'],
                            id: 'mensaje_unid2',
                            fill: ['rgba(0,0,0,0)', 'images/mensaje_unid2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '924px', '370px']
                        }
                    }
                },
                timeline: {
                    duration: 11454.328854231,
                    autoPlay: false,
                    labels: {
                        "1": 0,
                        "10": 7000,
                        "11": 7500,
                        "12": 8216,
                        "13": 8932,
                        "14": 9648,
                        "16": 10364
                    },
                    data: [
                        [
                            "eid680",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${Rectangle29}",
                            'none',
                            'block'
                        ],
                        [
                            "eid684",
                            "display",
                            10203,
                            0,
                            "linear",
                            "${Rectangle29}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1202",
                            "display",
                            9648,
                            0,
                            "linear",
                            "${btn_siguiente4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1203",
                            "display",
                            10184,
                            0,
                            "linear",
                            "${btn_siguiente4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1344",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${bnt_tabla}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1345",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${bnt_tabla}",
                            'block',
                            'none'
                        ],
                        [
                            "eid272",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Rectangle5Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid275",
                            "display",
                            2756,
                            0,
                            "linear",
                            "${Rectangle5Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid251",
                            "display",
                            9648,
                            0,
                            "easeOutBack",
                            "${uni2_derec_tex2_rosa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid252",
                            "display",
                            10227,
                            0,
                            "easeOutBack",
                            "${uni2_derec_tex2_rosa}",
                            'block',
                            'none'
                        ],
                        [
                            "eid245",
                            "display",
                            7500,
                            0,
                            "easeOutBack",
                            "${uni2_derec_tex2_rojo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "display",
                            8079,
                            0,
                            "easeOutBack",
                            "${uni2_derec_tex2_rojo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid689",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${manito2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid690",
                            "display",
                            8072,
                            0,
                            "linear",
                            "${manito2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid244",
                            "clip",
                            7000,
                            500,
                            "linear",
                            "${uni2_derec_tex2}",
                            [0,912,0,0],
                            [0,912,363,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid215",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${uni2_derec_text1}",
                            '0.016260162601626',
                            '1'
                        ],
                        [
                            "eid928",
                            "display",
                            8428,
                            0,
                            "linear",
                            "${manito2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid929",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${manito2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid683",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${Rectangle29Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid687",
                            "display",
                            10203,
                            0,
                            "linear",
                            "${Rectangle29Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid242",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${uni2_derec_tex2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid253",
                            "display",
                            10227,
                            0,
                            "linear",
                            "${uni2_derec_tex2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid258",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid260",
                            "display",
                            10184,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1348",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1349",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Rectangle3Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1350",
                            "display",
                            6693,
                            0,
                            "linear",
                            "${Rectangle3Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid247",
                            "display",
                            8216,
                            0,
                            "easeOutBack",
                            "${uni2_derec_tex2_verde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "display",
                            8795,
                            0,
                            "easeOutBack",
                            "${uni2_derec_tex2_verde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1199",
                            "display",
                            4804,
                            0,
                            "linear",
                            "${btn_siguiente3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1200",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${btn_siguiente3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid240",
                            "display",
                            6830,
                            0,
                            "linear",
                            "${uni2_derec_text1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid256",
                            "filter.blur",
                            10364,
                            636,
                            "linear",
                            "${uni2_derec_tex3}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid257",
                            "display",
                            10364,
                            0,
                            "linear",
                            "${Rectangle3Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid270",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid273",
                            "display",
                            2756,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid682",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${Rectangle29Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid686",
                            "display",
                            10203,
                            0,
                            "linear",
                            "${Rectangle29Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid249",
                            "display",
                            8932,
                            0,
                            "easeOutBack",
                            "${uni2_derec_tex2_viole}",
                            'none',
                            'block'
                        ],
                        [
                            "eid250",
                            "display",
                            9511,
                            0,
                            "easeOutBack",
                            "${uni2_derec_tex2_viole}",
                            'block',
                            'none'
                        ],
                        [
                            "eid681",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${Rectangle29Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid685",
                            "display",
                            10203,
                            0,
                            "linear",
                            "${Rectangle29Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1201",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1189",
                            "display",
                            6099,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid262",
                            "display",
                            6693,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid924",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${manito6Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid925",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${manito6Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid266",
                            "display",
                            2761,
                            0,
                            "linear",
                            "${Rectangle3Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid217",
                            "scaleX",
                            0,
                            750,
                            "easeOutBack",
                            "${uni2_derec_text1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid271",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Rectangle5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid274",
                            "display",
                            2756,
                            0,
                            "linear",
                            "${Rectangle5Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid254",
                            "display",
                            10364,
                            0,
                            "linear",
                            "${uni2_derec_tex3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid935",
                            "display",
                            9862,
                            0,
                            "linear",
                            "${manito2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid936",
                            "display",
                            10184,
                            0,
                            "linear",
                            "${manito2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid951",
                            "display",
                            10364,
                            0,
                            "linear",
                            "${manitaSimb4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid932",
                            "display",
                            9189,
                            0,
                            "linear",
                            "${manito2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid933",
                            "display",
                            9511,
                            0,
                            "linear",
                            "${manito2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid259",
                            "display",
                            9511,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid261",
                            "display",
                            10184,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1394",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${mensaje_unid2}",
                            'none',
                            'block'
                        ],
                            [ "eid952", "trigger", 10364, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${manitaSimb4}', [] ] ]
                    ]
                }
            },
            "sym_oblig": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'uni3_oblig_dh',
                            display: 'block',
                            opacity: '0.017094017094017',
                            rect: ['0px', '0px', '796', '337', 'auto', 'auto'],
                            symbolName: 'uni3_oblig_dh'
                        },
                        {
                            rect: ['0px', '104px', '789', '233', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'uni3_oblig_dh_resp',
                            id: 'uni3_oblig_dh_resp',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '104px', '789', '231', 'auto', 'auto'],
                            id: 'uni3_oblig_dh_garan',
                            symbolName: 'uni3_oblig_dh_garan',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '104px', '789', '231', 'auto', 'auto'],
                            id: 'uni3_oblig_dh_adop',
                            symbolName: 'uni3_oblig_dh_adop',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '104px', '789', '231', 'auto', 'auto'],
                            id: 'uni3_oblig_dh_oblig',
                            symbolName: 'uni3_oblig_dh_oblig',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'uni3_oblig_di',
                            display: 'none',
                            opacity: '0.017094017094017',
                            rect: ['0px', '0px', '810', '671', 'auto', 'auto'],
                            symbolName: 'uni3_oblig_di'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['760', '16', '40px', '40px', 'auto', 'auto'],
                            id: 'btn_siguiente',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_unid3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['201px', '190px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['201px', '257px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5Copy10',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['201px', '321px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5Copy11',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['773px', '35px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito5Copy13',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['114'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'manito5Copy14',
                            display: 'none',
                            rect: ['894px', '143px', '46px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '142px', '240px', '27px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '185px', '240px', '27px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle7Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '233px', '240px', '37px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle7Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '293px', '240px', '37px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle7Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['760px', '16px', '36px', '54px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['36px', '16px', '36px', '54px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle8Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '810px', '671px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: false,
                    labels: {
                        "1": 750,
                        "2": 1661,
                        "3": 2572,
                        "4": 3483,
                        "5": 4394
                    },
                    data: [
                        [
                            "eid316",
                            "display",
                            4242,
                            0,
                            "linear",
                            "${uni3_oblig_dh}",
                            'block',
                            'none'
                        ],
                        [
                            "eid322",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid326",
                            "display",
                            4144,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid320",
                            "opacity",
                            4394,
                            606,
                            "linear",
                            "${uni3_oblig_di}",
                            '0.017094017094017',
                            '1'
                        ],
                        [
                            "eid314",
                            "display",
                            3483,
                            0,
                            "linear",
                            "${uni3_oblig_dh_oblig}",
                            'none',
                            'block'
                        ],
                        [
                            "eid315",
                            "display",
                            4160,
                            0,
                            "linear",
                            "${uni3_oblig_dh_oblig}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1212",
                            "display",
                            3483,
                            0,
                            "linear",
                            "${btn_siguiente}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1213",
                            "display",
                            4394,
                            0,
                            "linear",
                            "${btn_siguiente}",
                            'block',
                            'none'
                        ],
                        [
                            "eid308",
                            "display",
                            750,
                            0,
                            "linear",
                            "${uni3_oblig_dh_resp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid309",
                            "display",
                            1427,
                            0,
                            "linear",
                            "${uni3_oblig_dh_resp}",
                            'block',
                            'none'
                        ],
                        [
                            "eid323",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Rectangle7Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid327",
                            "display",
                            4144,
                            0,
                            "linear",
                            "${Rectangle7Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1211",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1210",
                            "display",
                            3483,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid329",
                            "display",
                            4144,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid310",
                            "display",
                            1661,
                            0,
                            "linear",
                            "${uni3_oblig_dh_garan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid311",
                            "display",
                            2338,
                            0,
                            "linear",
                            "${uni3_oblig_dh_garan}",
                            'block',
                            'none'
                        ],
                        [
                            "eid968",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${manito5Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid969",
                            "display",
                            4242,
                            0,
                            "linear",
                            "${manito5Copy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid318",
                            "display",
                            4394,
                            0,
                            "linear",
                            "${uni3_oblig_di}",
                            'none',
                            'block'
                        ],
                        [
                            "eid330",
                            "display",
                            4394,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid961",
                            "display",
                            2889,
                            0,
                            "linear",
                            "${manito5Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid962",
                            "display",
                            3121,
                            0,
                            "linear",
                            "${manito5Copy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid972",
                            "display",
                            4596,
                            0,
                            "linear",
                            "${manito5Copy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid324",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Rectangle7Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid328",
                            "display",
                            4144,
                            0,
                            "linear",
                            "${Rectangle7Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid321",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid325",
                            "display",
                            4144,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid958",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${manito5Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid959",
                            "display",
                            2232,
                            0,
                            "linear",
                            "${manito5Copy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid312",
                            "display",
                            2572,
                            0,
                            "linear",
                            "${uni3_oblig_dh_adop}",
                            'none',
                            'block'
                        ],
                        [
                            "eid313",
                            "display",
                            3249,
                            0,
                            "linear",
                            "${uni3_oblig_dh_adop}",
                            'block',
                            'none'
                        ],
                        [
                            "eid695",
                            "display",
                            1101,
                            0,
                            "linear",
                            "${manito5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid696",
                            "display",
                            1333,
                            0,
                            "linear",
                            "${manito5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid307",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${uni3_oblig_dh}",
                            '0.017094017094017',
                            '1'
                        ]
                    ]
                }
            },
            "sym_rep_uni3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            id: 'uni3_rep_text1',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            display: 'block',
                            rect: ['158px', '22px', '406px', '32px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​¿Quiénes son consideradas personas víctimas dentro del conflicto armado colombiano?</p>',
                            align: 'center'
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'uni3_rep_victi',
                            display: 'none',
                            rect: ['268px', '75px', '188px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_victi.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'uni3_rep_victi1',
                            display: 'none',
                            opacity: '0',
                            rect: ['0px', '132px', '699', '208', 'auto', 'auto'],
                            symbolName: 'uni3_rep_victi1'
                        },
                        {
                            rect: ['0px', '132px', '699', '208', 'auto', 'auto'],
                            id: 'uni3_rep_victi2',
                            symbolName: 'uni3_rep_victi2',
                            type: 'rect'
                        },
                        {
                            rect: ['685', '415px', '223', '303', 'auto', 'auto'],
                            id: 'uni3_rep_personajeSimb',
                            symbolName: 'uni3_rep_personajeSimb',
                            type: 'rect'
                        },
                        {
                            rect: ['173px', '75px', '354px', '44px', 'auto', 'auto'],
                            id: 'uni3_rep_dano',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '132px', '699', '209', 'auto', 'auto'],
                            id: 'uni3_rep_dano1',
                            symbolName: 'uni3_rep_dano1',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '132px', '651', '209', 'auto', 'auto'],
                            id: 'uni3_rep_dano2',
                            symbolName: 'uni3_rep_dano2',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['424', '85px', '24px', '26px', 'auto', 'auto'],
                            id: 'flecha_victi',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_victi.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['661px', '317px', '30px', '31px', 'auto', 'auto'],
                            id: 'flecha_unid3',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_unid3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['669px', '324px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito8',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['433px', '97px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito8Copy',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['676px', '326px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito8Copy2',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['256px', '297px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito8Copy3',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['424px', '75px', '40px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['166px', '75px', '40px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle10Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['658px', '302px', '40px', '44px', 'auto', 'auto'],
                            display: 'block',
                            id: 'Rectangle11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '302px', '40px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['659px', '304px', '40px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '302px', '40px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['678px', '106px', '64px', '60px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['214px', '237px', '240px', '85px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['20', '0', '888', '406', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'sym_dano',
                            id: 'sym_dano',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '908px', '406px']
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: false,
                    labels: {
                        "1": 500,
                        "11": 1000,
                        "2": 2000,
                        "3": 2857,
                        "31": 3357,
                        "4": 4500
                    },
                    data: [
                        [
                            "eid360",
                            "display",
                            3357,
                            0,
                            "linear",
                            "${uni3_rep_dano1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid361",
                            "display",
                            4214,
                            0,
                            "linear",
                            "${uni3_rep_dano1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid377",
                            "display",
                            1857,
                            0,
                            "linear",
                            "${Rectangle11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid346",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${uni3_rep_victi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid991",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${manito8Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid992",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${manito8Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid378",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Rectangle11Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid379",
                            "display",
                            2815,
                            0,
                            "linear",
                            "${Rectangle11Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid376",
                            "display",
                            2857,
                            0,
                            "linear",
                            "${Rectangle10Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1214",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${flecha_victi}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1215",
                            "display",
                            2857,
                            0,
                            "linear",
                            "${flecha_victi}",
                            'block',
                            'none'
                        ],
                        [
                            "eid370",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym_dano}",
                            'none',
                            'none'
                        ],
                        [
                            "eid380",
                            "display",
                            2815,
                            0,
                            "linear",
                            "${Rectangle11Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid381",
                            "display",
                            4214,
                            0,
                            "linear",
                            "${Rectangle11Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1217",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1216",
                            "display",
                            2016,
                            0,
                            "linear",
                            "${Rectangle10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid375",
                            "display",
                            2815,
                            0,
                            "linear",
                            "${Rectangle10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid359",
                            "display",
                            2857,
                            0,
                            "linear",
                            "${uni3_rep_dano}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1404",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${flecha_unid3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1405",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${flecha_unid3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1406",
                            "display",
                            4457,
                            0,
                            "linear",
                            "${flecha_unid3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid382",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${Rectangle11Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid362",
                            "opacity",
                            3357,
                            500,
                            "linear",
                            "${uni3_rep_dano1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid351",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${uni3_rep_victi2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid352",
                            "display",
                            2857,
                            0,
                            "linear",
                            "${uni3_rep_victi2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1015",
                            "top",
                            1000,
                            681,
                            "easeOutCirc",
                            "${uni3_rep_personajeSimb}",
                            '415px',
                            '103px'
                        ],
                        [
                            "eid986",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${manito8Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid987",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${manito8Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid368",
                            "opacity",
                            4500,
                            500,
                            "linear",
                            "${uni3_rep_dano2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid995",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${manito8Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid996",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${manito8Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid358",
                            "scaleY",
                            2857,
                            500,
                            "linear",
                            "${uni3_rep_dano}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1220",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid349",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${uni3_rep_victi1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid342",
                            "display",
                            500,
                            0,
                            "linear",
                            "${uni3_rep_victi}",
                            'none',
                            'block'
                        ],
                        [
                            "eid356",
                            "display",
                            2857,
                            0,
                            "linear",
                            "${uni3_rep_victi}",
                            'block',
                            'none'
                        ],
                        [
                            "eid353",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${uni3_rep_victi2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid984",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${manito8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid985",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${manito8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid344",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${uni3_rep_victi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid340",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni3_rep_text1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid347",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${uni3_rep_victi1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid350",
                            "display",
                            1857,
                            0,
                            "linear",
                            "${uni3_rep_victi1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid366",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${uni3_rep_dano2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid367",
                            "display",
                            5357,
                            0,
                            "linear",
                            "${uni3_rep_dano2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid357",
                            "scaleX",
                            2857,
                            500,
                            "linear",
                            "${uni3_rep_dano}",
                            '0',
                            '1'
                        ],
                        [
                            "eid387",
                            "display",
                            4457,
                            0,
                            "linear",
                            "${Rectangle13}",
                            'none',
                            'block'
                        ],
                            [ "eid1019", "trigger", 250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${uni3_rep_personajeSimb}', [750] ] ]
                    ]
                }
            },
            "sym_dano": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'uni3_rep_dano_impot',
                            symbolName: 'uni3_rep_dano_impot',
                            rect: ['0px', '0px', '888', '406', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            type: 'rect',
                            rect: ['732px', '8px', '66px', '52px', 'auto', 'auto'],
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '888px', '406px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid373",
                            "scaleY",
                            0,
                            500,
                            "easeOutBack",
                            "${uni3_rep_dano_impot}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "rep_mapa_uni3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'uni3_rep_dano_mapa',
                            type: 'image',
                            rect: ['0px', '0px', '1281px', '601px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano_mapa.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['408px', '467px', '456px', '100px', 'auto', 'auto'],
                            id: 'uni3_rep_dano_mapa_material',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano_mapa_material.svg', '0px', '0px']
                        },
                        {
                            rect: ['408px', '465px', '456px', '100px', 'auto', 'auto'],
                            id: 'uni3_rep_dano_mapa_emerg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano_mapa_emerg.svg', '0px', '0px']
                        },
                        {
                            rect: ['408px', '465px', '456px', '100px', 'auto', 'auto'],
                            id: 'uni3_rep_dano_mapa_lucro',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano_mapa_lucro.svg', '0px', '0px']
                        },
                        {
                            rect: ['408px', '463px', '456px', '100px', 'auto', 'auto'],
                            id: 'uni3_rep_dano_mapa_costas',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano_mapa_costas.svg', '0px', '0px']
                        },
                        {
                            rect: ['408px', '462px', '456px', '100px', 'auto', 'auto'],
                            id: 'uni3_rep_dano_mapa_inmater',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano_mapa_inmater.svg', '0px', '0px']
                        },
                        {
                            rect: ['408px', '463px', '456px', '100px', 'auto', 'auto'],
                            id: 'uni3_rep_dano_mapa_moral',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano_mapa_moral.svg', '0px', '0px']
                        },
                        {
                            rect: ['408px', '462px', '456px', '100px', 'auto', 'auto'],
                            id: 'uni3_rep_dano_mapa_vida',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano_mapa_vida.svg', '0px', '0px']
                        },
                        {
                            rect: ['408px', '464px', '456px', '100px', 'auto', 'auto'],
                            id: 'uni3_rep_dano_mapa_proy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_dano_mapa_proy.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['374px', '196px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['172px', '390px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2Copy',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['351px', '384px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['543px', '384px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2Copy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['951px', '202px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2Copy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['765px', '384px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2Copy5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['974px', '384px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2Copy6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['1176px', '368px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito2Copy7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['252px', '158px', '156px', '70px', 'auto', 'auto'],
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['72px', '326px', '156px', '70px', 'auto', 'auto'],
                            id: 'Rectangle14Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['252px', '334px', '156px', '70px', 'auto', 'auto'],
                            id: 'Rectangle14Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['444px', '334px', '156px', '70px', 'auto', 'auto'],
                            id: 'Rectangle14Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['858px', '158px', '156px', '70px', 'auto', 'auto'],
                            id: 'Rectangle14Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['668px', '326px', '156px', '70px', 'auto', 'auto'],
                            id: 'Rectangle14Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['858px', '326px', '156px', '70px', 'auto', 'auto'],
                            id: 'Rectangle14Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['1058px', '320px', '156px', '70px', 'auto', 'auto'],
                            id: 'Rectangle14Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['1192px', '8px', '82px', '100px', 'auto', 'auto'],
                            id: 'Rectangle15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1281px', '601px']
                        }
                    }
                },
                timeline: {
                    duration: 4939,
                    autoPlay: false,
                    labels: {
                        "1": 841,
                        "2": 1368,
                        "3": 1895,
                        "4": 2422,
                        "5": 2949,
                        "6": 3476,
                        "7": 4003,
                        "8": 4530
                    },
                    data: [
                        [
                            "eid425",
                            "display",
                            3476,
                            0,
                            "linear",
                            "${manito2Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid426",
                            "display",
                            3841,
                            0,
                            "linear",
                            "${manito2Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid421",
                            "display",
                            2969,
                            0,
                            "linear",
                            "${manito2Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid422",
                            "display",
                            3334,
                            0,
                            "linear",
                            "${manito2Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid407",
                            "display",
                            4530,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_proy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid408",
                            "display",
                            4939,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_proy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1398",
                            "top",
                            2715,
                            0,
                            "linear",
                            "${uni3_rep_dano_mapa_costas}",
                            '463px',
                            '463px'
                        ],
                        [
                            "eid401",
                            "display",
                            2949,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_inmater}",
                            'none',
                            'block'
                        ],
                        [
                            "eid402",
                            "display",
                            3358,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_inmater}",
                            'block',
                            'none'
                        ],
                        [
                            "eid395",
                            "display",
                            1368,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_emerg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid396",
                            "display",
                            1777,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_emerg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid419",
                            "display",
                            2422,
                            0,
                            "linear",
                            "${manito2Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid420",
                            "display",
                            2787,
                            0,
                            "linear",
                            "${manito2Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid427",
                            "display",
                            4003,
                            0,
                            "linear",
                            "${manito2Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid428",
                            "display",
                            4368,
                            0,
                            "linear",
                            "${manito2Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid397",
                            "display",
                            1895,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_lucro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid398",
                            "display",
                            2304,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_lucro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid405",
                            "display",
                            4003,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_vida}",
                            'none',
                            'block'
                        ],
                        [
                            "eid406",
                            "display",
                            4412,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_vida}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1397",
                            "top",
                            2188,
                            0,
                            "linear",
                            "${uni3_rep_dano_mapa_lucro}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid417",
                            "display",
                            1906,
                            0,
                            "linear",
                            "${manito2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid418",
                            "display",
                            2271,
                            0,
                            "linear",
                            "${manito2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid411",
                            "display",
                            841,
                            0,
                            "linear",
                            "${manito2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid412",
                            "display",
                            1206,
                            0,
                            "linear",
                            "${manito2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid392",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${uni3_rep_dano_mapa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid390",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${uni3_rep_dano_mapa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid393",
                            "display",
                            841,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_material}",
                            'none',
                            'block'
                        ],
                        [
                            "eid394",
                            "display",
                            1250,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_material}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1402",
                            "top",
                            4823,
                            0,
                            "linear",
                            "${uni3_rep_dano_mapa_proy}",
                            '464px',
                            '464px'
                        ],
                        [
                            "eid1396",
                            "top",
                            1661,
                            0,
                            "linear",
                            "${uni3_rep_dano_mapa_emerg}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid399",
                            "display",
                            2422,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_costas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid400",
                            "display",
                            2831,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_costas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid403",
                            "display",
                            3476,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_moral}",
                            'none',
                            'block'
                        ],
                        [
                            "eid404",
                            "display",
                            3885,
                            0,
                            "easeOutBack",
                            "${uni3_rep_dano_mapa_moral}",
                            'block',
                            'none'
                        ],
                        [
                            "eid688",
                            "display",
                            675,
                            0,
                            "linear",
                            "${manito2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1403",
                            "display",
                            841,
                            0,
                            "linear",
                            "${manito2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1395",
                            "top",
                            1126,
                            0,
                            "linear",
                            "${uni3_rep_dano_mapa_material}",
                            '467px',
                            '467px'
                        ],
                        [
                            "eid1399",
                            "top",
                            3242,
                            0,
                            "linear",
                            "${uni3_rep_dano_mapa_inmater}",
                            '462px',
                            '462px'
                        ],
                        [
                            "eid1400",
                            "top",
                            3769,
                            0,
                            "linear",
                            "${uni3_rep_dano_mapa_moral}",
                            '463px',
                            '463px'
                        ],
                        [
                            "eid1401",
                            "top",
                            4296,
                            0,
                            "linear",
                            "${uni3_rep_dano_mapa_vida}",
                            '462px',
                            '462px'
                        ],
                        [
                            "eid415",
                            "display",
                            1368,
                            0,
                            "linear",
                            "${manito2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid416",
                            "display",
                            1733,
                            0,
                            "linear",
                            "${manito2Copy2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "sym_dere2_uni3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['43px', '46px', '863', '281', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'uni3_derec_tex1',
                            id: 'uni3_derec_tex1',
                            type: 'rect'
                        },
                        {
                            rect: ['43px', '113px', '822', '233', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'uni3_derec_tex1_verd',
                            id: 'uni3_derec_tex1_verd',
                            type: 'rect'
                        },
                        {
                            rect: ['43px', '113px', '822', '233', 'auto', 'auto'],
                            id: 'uni3_derec_tex1_justi',
                            symbolName: 'uni3_derec_tex1_justi',
                            type: 'rect'
                        },
                        {
                            rect: ['43px', '113px', '822', '233', 'auto', 'auto'],
                            id: 'uni3_derec_tex1_rep',
                            symbolName: 'uni3_derec_tex1_rep',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '45px', '906', '281', 'auto', 'auto'],
                            id: 'uni3_derec_tex2',
                            symbolName: 'uni3_derec_tex2',
                            type: 'rect'
                        },
                        {
                            rect: ['164px', '112px', '562', '184', 'auto', 'auto'],
                            id: 'uni3_derec_tex2_restit',
                            symbolName: 'uni3_derec_tex2_restit',
                            type: 'rect'
                        },
                        {
                            rect: ['164px', '112px', '562', '184', 'auto', 'auto'],
                            id: 'uni3_derec_tex2_indem',
                            symbolName: 'uni3_derec_tex2_indem',
                            type: 'rect'
                        },
                        {
                            rect: ['164px', '112px', '562', '184', 'auto', 'auto'],
                            id: 'uni3_derec_tex2_rehab',
                            symbolName: 'uni3_derec_tex2_rehab',
                            type: 'rect'
                        },
                        {
                            rect: ['164px', '112px', '562', '184', 'auto', 'auto'],
                            id: 'uni3_derec_tex2_satis',
                            symbolName: 'uni3_derec_tex2_satis',
                            type: 'rect'
                        },
                        {
                            rect: ['164px', '112px', '562', '184', 'auto', 'auto'],
                            id: 'uni3_derec_tex2_no',
                            symbolName: 'uni3_derec_tex2_no',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'uni3_derec_tex3',
                            symbolName: 'uni3_derec_tex3',
                            rect: ['0px', '27px', '906', '300', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['189px', '133px', '635', '193', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'uni3_derec_tex3_2004',
                            id: 'uni3_derec_tex3_2004',
                            type: 'rect'
                        },
                        {
                            rect: ['189px', '133px', '635', '193', 'auto', 'auto'],
                            id: 'uni3_derec_tex3_2008',
                            symbolName: 'uni3_derec_tex3_2008',
                            type: 'rect'
                        },
                        {
                            rect: ['189px', '133px', '635', '193', 'auto', 'auto'],
                            id: 'uni3_derec_tex3_2012',
                            symbolName: 'uni3_derec_tex3_2012',
                            type: 'rect'
                        },
                        {
                            rect: ['189px', '133px', '635', '193', 'auto', 'auto'],
                            id: 'uni3_derec_tex3_2010',
                            symbolName: 'uni3_derec_tex3_2010',
                            type: 'rect'
                        },
                        {
                            rect: ['189px', '133px', '635', '193', 'auto', 'auto'],
                            id: 'uni3_derec_tex3_2011',
                            symbolName: 'uni3_derec_tex3_2011',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'uni3_derec_tex4',
                            symbolName: 'uni3_derec_tex4',
                            rect: ['0px', '27px', '906', '300', 'auto', 'auto'],
                            opacity: '0.042735042735043'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['92px', '92px', '708px', '287px', 'auto', 'auto'],
                            id: 'uni3_derec_tex4_1senten',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex4_1senten.svg', '0px', '0px']
                        },
                        {
                            rect: ['92px', '92px', '724', '256', 'auto', 'auto'],
                            id: 'uni3_derec_tex4_1descrip',
                            symbolName: 'uni3_derec_tex4_1descrip',
                            type: 'rect'
                        },
                        {
                            rect: ['103px', '92px', '548px', '164px', 'auto', 'auto'],
                            id: 'uni3_derec_tex4_2sente',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex4_2sente.svg', '0px', '0px']
                        },
                        {
                            rect: ['103px', '93px', '711', '209', 'auto', 'auto'],
                            id: 'uni3_derec_tex4_2descr',
                            symbolName: 'uni3_derec_tex4_2descr',
                            type: 'rect'
                        },
                        {
                            rect: ['92px', '92px', '721px', '263px', 'auto', 'auto'],
                            id: 'uni3_derec_tex4_3sente2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex4_3sente2.svg', '0px', '0px']
                        },
                        {
                            rect: ['92px', '92px', '721px', '278px', 'auto', 'auto'],
                            id: 'uni3_derec_tex4_3sente1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex4_3sente1.svg', '0px', '0px']
                        },
                        {
                            rect: ['92px', '92px', '721', '213', 'auto', 'auto'],
                            id: 'uni3_derec_tex4_3descr',
                            symbolName: 'uni3_derec_tex4_3descr',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'uni3_derec_tex5',
                            symbolName: 'uni3_derec_tex5',
                            rect: ['0px', '0px', '720', '382', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['75px', '167px', '616px', '102px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_valle',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_valle.svg', '0px', '0px']
                        },
                        {
                            rect: ['163px', '74px', '501px', '173px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_santan',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_santan.svg', '0px', '0px']
                        },
                        {
                            rect: ['143px', '99px', '523px', '149px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_santa',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_santa.svg', '0px', '0px']
                        },
                        {
                            rect: ['111px', '163px', '553px', '48px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_quindi',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_quindi.svg', '0px', '0px']
                        },
                        {
                            rect: ['133px', '168px', '532px', '82px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_meta',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_meta.svg', '0px', '0px']
                        },
                        {
                            rect: ['132px', '26px', '523px', '201px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_mag',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_mag.svg', '0px', '0px']
                        },
                        {
                            rect: ['95px', '167px', '588px', '83px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_huil',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_huil.svg', '0px', '0px']
                        },
                        {
                            rect: ['133px', '155px', '532px', '74px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_cundi',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_cundi.svg', '0px', '0px']
                        },
                        {
                            rect: ['97px', '70px', '587px', '157px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_cord',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_cord.svg', '0px', '0px']
                        },
                        {
                            rect: ['66px', '88px', '602px', '162px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_cho',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_cho.svg', '0px', '0px']
                        },
                        {
                            rect: ['151px', '37px', '527px', '211px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_cesar',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_cesar.svg', '0px', '0px']
                        },
                        {
                            rect: ['61px', '167px', '602px', '97px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_cauc',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_cauc.svg', '0px', '0px']
                        },
                        {
                            rect: ['175px', '142px', '455px', '86px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_casa',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_casa.svg', '0px', '0px']
                        },
                        {
                            rect: ['139px', '125px', '539px', '121px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_boy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_boy.svg', '0px', '0px']
                        },
                        {
                            rect: ['115px', '40px', '577px', '206px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_boliv',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_boliv.svg', '0px', '0px']
                        },
                        {
                            rect: ['133px', '154px', '422px', '55px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_bogt',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_bogt.svg', '0px', '0px']
                        },
                        {
                            rect: ['125px', '32px', '530px', '214px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_atlan',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_atlan.svg', '0px', '0px']
                        },
                        {
                            rect: ['193px', '124px', '476px', '145px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_arau',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_arau.svg', '0px', '0px']
                        },
                        {
                            rect: ['83px', '85px', '576px', '185px', 'auto', 'auto'],
                            id: 'uni3_derec_tex5_antio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_derec_tex5_antio.svg', '0px', '0px']
                        },
                        {
                            rect: ['874px', '308px', '30px', '31px', 'auto', 'auto'],
                            id: 'flecha_unid32',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_unid3.svg', '0px', '0px']
                        },
                        {
                            rect: ['874px', '308px', '30px', '31px', 'auto', 'auto'],
                            id: 'flecha_unid32Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_unid3.svg', '0px', '0px']
                        },
                        {
                            rect: ['874px', '308px', '30px', '31px', 'auto', 'auto'],
                            id: 'flecha_unid32Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_unid3.svg', '0px', '0px']
                        },
                        {
                            rect: ['874px', '308px', '30px', '31px', 'auto', 'auto'],
                            id: 'flecha_unid32Copy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_unid3.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6',
                            rect: ['515px', '127px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy13',
                            rect: ['838px', '127px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy14',
                            rect: ['885px', '305px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['388px', '155px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito13',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['388px', '199px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito13Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['388px', '235px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito13Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['388px', '272px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito13Copy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy2',
                            rect: ['189px', '187px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy18',
                            rect: ['189px', '225px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy19',
                            rect: ['189px', '260px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy20',
                            rect: ['189px', '302px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy4',
                            rect: ['169px', '203px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['888', '308', '46px', '44px', 'auto', 'auto'],
                            id: 'manito11',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['882px', '304px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito12',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['743px', '161px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito12Copy',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['132px', '188px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito12Copy2',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['741px', '166px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito12Copy3',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['73px', '248px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito12Copy4',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['505px', '163px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito12Copy5',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['767px', '153px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito12Copy6',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['885px', '304px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito12Copy7',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['865px', '287px', '40px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['865px', '287px', '40px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'adelante',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '287px', '40px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'atras',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['865px', '287px', '40px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'adelanteCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '287px', '40px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'atrasCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['865px', '287px', '40px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'adelanteCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '287px', '40px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'atrasCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '287px', '40px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'atrasCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['43px', '113px', '256px', '28px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['299px', '113px', '256px', '28px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle17Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['561px', '113px', '292px', '28px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle17Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['163px', '113px', '258px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['163px', '149px', '258px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle18Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['163px', '191px', '258px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle18Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['163px', '229px', '258px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle18Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['163px', '261px', '258px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle18Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['187px', '134px', '24px', '26px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['185px', '173px', '24px', '26px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle19Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['185px', '212px', '24px', '26px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle19Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['185px', '253px', '24px', '26px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle19Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['185px', '290px', '24px', '26px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle19Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['47px', '99px', '66px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['99px', '158px', '66px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle20Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['47px', '217px', '66px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle20Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['269px', '153px', '270px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle21',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['539px', '153px', '270px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle21Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['269px', '153px', '270px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle21Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['539px', '153px', '270px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle21Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['269px', '153px', '270px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle21Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['539px', '153px', '270px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle21Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['269px', '153px', '270px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle21Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['269px', '153px', '270px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle21Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['86px', '196px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['169px', '95px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['161px', '127px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['111px', '178px', '9px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['161px', '196px', '31px', '25px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['133px', '50px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['111px', '215px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['145px', '163px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['103px', '95px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['82px', '158px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['156px', '54px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['82px', '225px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['193px', '153px', '25px', '20px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['164px', '156px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['141px', '95px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['145px', '163px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['125px', '32px', '17px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['205px', '127px', '25px', '13px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['105px', '120px', '32px', '22px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle22Copy18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['636px', '270px', '295px', '142px', 'auto', 'auto'],
                            id: 'mensaje_unid32',
                            fill: ['rgba(0,0,0,0)', 'images/mensaje_unid3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '906px', '382px']
                        }
                    }
                },
                timeline: {
                    duration: 37495,
                    autoPlay: false,
                    labels: {
                        "1": 371,
                        "11": 1310,
                        "12": 2249,
                        "2": 3188,
                        "21": 4500,
                        "22": 5439,
                        "23": 6378,
                        "24": 7317,
                        "3": 8256,
                        "31": 9195,
                        "32": 10134,
                        "33": 11073,
                        "34": 12012,
                        "4": 12951,
                        "41": 13890,
                        "42": 14829,
                        "43": 15768,
                        "44": 16707,
                        "45": 17646,
                        "46": 18585,
                        "5": 19524,
                        "51": 20750,
                        "52": 21689,
                        "53": 22628,
                        "54": 23567,
                        "55": 24506,
                        "56": 25445,
                        "57": 26384,
                        "58": 27323,
                        "59": 28262,
                        "60": 29201,
                        "61": 30140,
                        "62": 31079,
                        "63": 32018,
                        "64": 32957,
                        "65": 33896,
                        "66": 34835,
                        "67": 35774,
                        "68": 36713
                    },
                    data: [
                        [
                            "eid1409",
                            "display",
                            7317,
                            0,
                            "linear",
                            "${flecha_unid32Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1410",
                            "display",
                            8256,
                            0,
                            "linear",
                            "${flecha_unid32Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid621",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid458",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${uni3_derec_tex3_2004}",
                            'none',
                            'block'
                        ],
                        [
                            "eid459",
                            "display",
                            9011,
                            0,
                            "linear",
                            "${uni3_derec_tex3_2004}",
                            'block',
                            'none'
                        ],
                        [
                            "eid553",
                            "display",
                            371,
                            0,
                            "linear",
                            "${Rectangle17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid556",
                            "display",
                            3010,
                            0,
                            "linear",
                            "${Rectangle17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid495",
                            "opacity",
                            12975,
                            275,
                            "linear",
                            "${uni3_derec_tex4}",
                            '0.042735042735043',
                            '1'
                        ],
                        [
                            "eid456",
                            "display",
                            8256,
                            0,
                            "linear",
                            "${uni3_derec_tex3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid470",
                            "display",
                            12794,
                            0,
                            "linear",
                            "${uni3_derec_tex3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid499",
                            "scaleY",
                            8276,
                            224,
                            "linear",
                            "${uni3_derec_tex3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1105",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${manito13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1106",
                            "display",
                            4317,
                            0,
                            "linear",
                            "${manito13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid554",
                            "display",
                            371,
                            0,
                            "linear",
                            "${Rectangle17Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid557",
                            "display",
                            3010,
                            0,
                            "linear",
                            "${Rectangle17Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid607",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1066",
                            "display",
                            12250,
                            0,
                            "easeOutCirc",
                            "${manito12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1067",
                            "display",
                            13012,
                            0,
                            "easeOutCirc",
                            "${manito12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid612",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid591",
                            "display",
                            14829,
                            0,
                            "linear",
                            "${Rectangle21Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid592",
                            "display",
                            16469,
                            0,
                            "linear",
                            "${Rectangle21Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid599",
                            "display",
                            17646,
                            0,
                            "linear",
                            "${Rectangle21Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid600",
                            "display",
                            18385,
                            0,
                            "linear",
                            "${Rectangle21Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid585",
                            "display",
                            13203,
                            0,
                            "linear",
                            "${Rectangle21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid587",
                            "display",
                            14672,
                            0,
                            "linear",
                            "${Rectangle21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1411",
                            "display",
                            12012,
                            0,
                            "linear",
                            "${flecha_unid32Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1412",
                            "display",
                            12951,
                            0,
                            "linear",
                            "${flecha_unid32Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid562",
                            "display",
                            3188,
                            0,
                            "linear",
                            "${Rectangle18Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid567",
                            "display",
                            8131,
                            0,
                            "linear",
                            "${Rectangle18Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1099",
                            "display",
                            18762,
                            0,
                            "easeOutCirc",
                            "${manito12Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1100",
                            "display",
                            19524,
                            0,
                            "easeOutCirc",
                            "${manito12Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid436",
                            "display",
                            371,
                            0,
                            "linear",
                            "${uni3_derec_tex1_verd}",
                            'none',
                            'block'
                        ],
                        [
                            "eid437",
                            "display",
                            1153,
                            0,
                            "linear",
                            "${uni3_derec_tex1_verd}",
                            'block',
                            'none'
                        ],
                        [
                            "eid580",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${Rectangle20Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid583",
                            "display",
                            19379,
                            0,
                            "linear",
                            "${Rectangle20Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid597",
                            "display",
                            18585,
                            0,
                            "linear",
                            "${Rectangle21Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid598",
                            "display",
                            19328,
                            0,
                            "linear",
                            "${Rectangle21Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid714",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${manito6Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid715",
                            "display",
                            20614,
                            0,
                            "linear",
                            "${manito6Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid485",
                            "display",
                            18585,
                            0,
                            "linear",
                            "${uni3_derec_tex4_3descr}",
                            'none',
                            'block'
                        ],
                        [
                            "eid486",
                            "display",
                            19367,
                            0,
                            "linear",
                            "${uni3_derec_tex4_3descr}",
                            'block',
                            'none'
                        ],
                        [
                            "eid508",
                            "display",
                            23567,
                            0,
                            "linear",
                            "${uni3_derec_tex5_meta}",
                            'none',
                            'block'
                        ],
                        [
                            "eid509",
                            "display",
                            24349,
                            0,
                            "linear",
                            "${uni3_derec_tex5_meta}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1039",
                            "display",
                            2878,
                            0,
                            "linear",
                            "${manito6Copy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1040",
                            "display",
                            3124,
                            0,
                            "linear",
                            "${manito6Copy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid593",
                            "display",
                            14829,
                            0,
                            "linear",
                            "${Rectangle21Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid594",
                            "display",
                            16550,
                            0,
                            "linear",
                            "${Rectangle21Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid622",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid440",
                            "display",
                            2249,
                            0,
                            "linear",
                            "${uni3_derec_tex1_rep}",
                            'none',
                            'block'
                        ],
                        [
                            "eid441",
                            "display",
                            3031,
                            0,
                            "linear",
                            "${uni3_derec_tex1_rep}",
                            'block',
                            'none'
                        ],
                        [
                            "eid606",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid618",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid543",
                            "display",
                            8256,
                            0,
                            "linear",
                            "${atrasCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid544",
                            "display",
                            12794,
                            0,
                            "linear",
                            "${atrasCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid610",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid477",
                            "display",
                            15768,
                            0,
                            "linear",
                            "${uni3_derec_tex4_2descr}",
                            'none',
                            'block'
                        ],
                        [
                            "eid478",
                            "display",
                            16550,
                            0,
                            "linear",
                            "${uni3_derec_tex4_2descr}",
                            'block',
                            'none'
                        ],
                        [
                            "eid466",
                            "display",
                            12012,
                            0,
                            "linear",
                            "${uni3_derec_tex3_2011}",
                            'none',
                            'block'
                        ],
                        [
                            "eid467",
                            "display",
                            12794,
                            0,
                            "linear",
                            "${uni3_derec_tex3_2011}",
                            'block',
                            'none'
                        ],
                        [
                            "eid483",
                            "left",
                            15250,
                            0,
                            "linear",
                            "${uni3_derec_tex4_2sente}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid616",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1082",
                            "display",
                            16012,
                            0,
                            "easeOutCirc",
                            "${manito12Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1083",
                            "display",
                            16774,
                            0,
                            "easeOutCirc",
                            "${manito12Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1057",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${manito6Copy18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1058",
                            "display",
                            10070,
                            0,
                            "linear",
                            "${manito6Copy18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid475",
                            "display",
                            14829,
                            0,
                            "linear",
                            "${uni3_derec_tex4_2sente}",
                            'none',
                            'block'
                        ],
                        [
                            "eid476",
                            "display",
                            15611,
                            0,
                            "linear",
                            "${uni3_derec_tex4_2sente}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1407",
                            "display",
                            2249,
                            0,
                            "linear",
                            "${flecha_unid32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1408",
                            "display",
                            3188,
                            0,
                            "linear",
                            "${flecha_unid32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid608",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid449",
                            "display",
                            5439,
                            0,
                            "linear",
                            "${uni3_derec_tex2_rehab}",
                            'none',
                            'block'
                        ],
                        [
                            "eid450",
                            "display",
                            6221,
                            0,
                            "linear",
                            "${uni3_derec_tex2_rehab}",
                            'block',
                            'none'
                        ],
                        [
                            "eid611",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid451",
                            "display",
                            6378,
                            0,
                            "linear",
                            "${uni3_derec_tex2_satis}",
                            'none',
                            'block'
                        ],
                        [
                            "eid452",
                            "display",
                            7160,
                            0,
                            "linear",
                            "${uni3_derec_tex2_satis}",
                            'block',
                            'none'
                        ],
                        [
                            "eid549",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${adelanteCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid550",
                            "display",
                            19328,
                            0,
                            "linear",
                            "${adelanteCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid464",
                            "display",
                            11073,
                            0,
                            "linear",
                            "${uni3_derec_tex3_2010}",
                            'none',
                            'block'
                        ],
                        [
                            "eid465",
                            "display",
                            11855,
                            0,
                            "linear",
                            "${uni3_derec_tex3_2010}",
                            'block',
                            'none'
                        ],
                        [
                            "eid491",
                            "scaleX",
                            19524,
                            0,
                            "linear",
                            "${uni3_derec_tex5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid540",
                            "display",
                            3188,
                            0,
                            "linear",
                            "${atras}",
                            'none',
                            'block'
                        ],
                        [
                            "eid541",
                            "display",
                            8099,
                            0,
                            "linear",
                            "${atras}",
                            'block',
                            'none'
                        ],
                        [
                            "eid572",
                            "display",
                            8522,
                            0,
                            "linear",
                            "${Rectangle19Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid577",
                            "display",
                            12823,
                            0,
                            "linear",
                            "${Rectangle19Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1060",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${manito6Copy19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1061",
                            "display",
                            11070,
                            0,
                            "linear",
                            "${manito6Copy19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid520",
                            "display",
                            29201,
                            0,
                            "linear",
                            "${uni3_derec_tex5_cesar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid521",
                            "display",
                            29983,
                            0,
                            "linear",
                            "${uni3_derec_tex5_cesar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1089",
                            "display",
                            17000,
                            0,
                            "easeOutCirc",
                            "${manito12Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1090",
                            "display",
                            17762,
                            0,
                            "easeOutCirc",
                            "${manito12Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid504",
                            "display",
                            21689,
                            0,
                            "linear",
                            "${uni3_derec_tex5_santa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid505",
                            "display",
                            22471,
                            0,
                            "linear",
                            "${uni3_derec_tex5_santa}",
                            'block',
                            'none'
                        ],
                        [
                            "eid561",
                            "display",
                            3188,
                            0,
                            "linear",
                            "${Rectangle18Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid566",
                            "display",
                            8131,
                            0,
                            "linear",
                            "${Rectangle18Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1074",
                            "display",
                            14250,
                            0,
                            "easeOutCirc",
                            "${manito12Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1075",
                            "display",
                            15012,
                            0,
                            "easeOutCirc",
                            "${manito12Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid510",
                            "display",
                            24506,
                            0,
                            "linear",
                            "${uni3_derec_tex5_mag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid511",
                            "display",
                            25288,
                            0,
                            "linear",
                            "${uni3_derec_tex5_mag}",
                            'block',
                            'none'
                        ],
                        [
                            "eid581",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${Rectangle20Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid584",
                            "display",
                            19379,
                            0,
                            "linear",
                            "${Rectangle20Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid462",
                            "display",
                            10134,
                            0,
                            "linear",
                            "${uni3_derec_tex3_2012}",
                            'none',
                            'block'
                        ],
                        [
                            "eid463",
                            "display",
                            10916,
                            0,
                            "linear",
                            "${uni3_derec_tex3_2012}",
                            'block',
                            'none'
                        ],
                        [
                            "eid514",
                            "display",
                            26384,
                            0,
                            "linear",
                            "${uni3_derec_tex5_cundi}",
                            'none',
                            'block'
                        ],
                        [
                            "eid515",
                            "display",
                            27166,
                            0,
                            "linear",
                            "${uni3_derec_tex5_cundi}",
                            'block',
                            'none'
                        ],
                        [
                            "eid605",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1078",
                            "display",
                            15250,
                            0,
                            "easeOutCirc",
                            "${manito12Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1079",
                            "display",
                            16012,
                            0,
                            "easeOutCirc",
                            "${manito12Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid563",
                            "display",
                            3188,
                            0,
                            "linear",
                            "${Rectangle18Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid568",
                            "display",
                            8131,
                            0,
                            "linear",
                            "${Rectangle18Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid526",
                            "display",
                            32018,
                            0,
                            "linear",
                            "${uni3_derec_tex5_boy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid527",
                            "display",
                            32800,
                            0,
                            "linear",
                            "${uni3_derec_tex5_boy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid560",
                            "display",
                            3188,
                            0,
                            "linear",
                            "${Rectangle18Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid565",
                            "display",
                            8131,
                            0,
                            "linear",
                            "${Rectangle18Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid481",
                            "display",
                            16707,
                            0,
                            "linear",
                            "${uni3_derec_tex4_3sente1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid482",
                            "display",
                            17489,
                            0,
                            "linear",
                            "${uni3_derec_tex4_3sente1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid453",
                            "display",
                            7317,
                            0,
                            "linear",
                            "${uni3_derec_tex2_no}",
                            'none',
                            'block'
                        ],
                        [
                            "eid454",
                            "display",
                            8099,
                            0,
                            "linear",
                            "${uni3_derec_tex2_no}",
                            'block',
                            'none'
                        ],
                        [
                            "eid443",
                            "display",
                            3188,
                            0,
                            "linear",
                            "${uni3_derec_tex2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid455",
                            "display",
                            8131,
                            0,
                            "linear",
                            "${uni3_derec_tex2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid615",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1063",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${manito6Copy20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1064",
                            "display",
                            12070,
                            0,
                            "linear",
                            "${manito6Copy20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid488",
                            "display",
                            19524,
                            0,
                            "linear",
                            "${uni3_derec_tex5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid545",
                            "display",
                            12012,
                            0,
                            "linear",
                            "${adelanteCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid546",
                            "display",
                            12794,
                            0,
                            "linear",
                            "${adelanteCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid497",
                            "scaleX",
                            8276,
                            224,
                            "linear",
                            "${uni3_derec_tex3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid697",
                            "display",
                            884,
                            0,
                            "linear",
                            "${manito6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid698",
                            "display",
                            1130,
                            0,
                            "linear",
                            "${manito6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid534",
                            "display",
                            35774,
                            0,
                            "linear",
                            "${uni3_derec_tex5_arau}",
                            'none',
                            'block'
                        ],
                        [
                            "eid535",
                            "display",
                            36556,
                            0,
                            "linear",
                            "${uni3_derec_tex5_arau}",
                            'block',
                            'none'
                        ],
                        [
                            "eid569",
                            "display",
                            8522,
                            0,
                            "linear",
                            "${Rectangle19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid574",
                            "display",
                            12823,
                            0,
                            "linear",
                            "${Rectangle19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid536",
                            "display",
                            36713,
                            0,
                            "linear",
                            "${uni3_derec_tex5_antio}",
                            'none',
                            'block'
                        ],
                        [
                            "eid537",
                            "display",
                            37495,
                            0,
                            "linear",
                            "${uni3_derec_tex5_antio}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1109",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${manito13Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1110",
                            "display",
                            5317,
                            0,
                            "linear",
                            "${manito13Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid518",
                            "display",
                            28262,
                            0,
                            "linear",
                            "${uni3_derec_tex5_cho}",
                            'none',
                            'block'
                        ],
                        [
                            "eid519",
                            "display",
                            29044,
                            0,
                            "linear",
                            "${uni3_derec_tex5_cho}",
                            'block',
                            'none'
                        ],
                        [
                            "eid573",
                            "display",
                            8522,
                            0,
                            "linear",
                            "${Rectangle19Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid578",
                            "display",
                            12823,
                            0,
                            "linear",
                            "${Rectangle19Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1116",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${manito13Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1117",
                            "display",
                            7317,
                            0,
                            "linear",
                            "${manito13Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid445",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${uni3_derec_tex2_restit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid446",
                            "display",
                            4282,
                            0,
                            "linear",
                            "${uni3_derec_tex2_restit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid506",
                            "display",
                            22628,
                            0,
                            "linear",
                            "${uni3_derec_tex5_quindi}",
                            'none',
                            'block'
                        ],
                        [
                            "eid507",
                            "display",
                            23410,
                            0,
                            "linear",
                            "${uni3_derec_tex5_quindi}",
                            'block',
                            'none'
                        ],
                        [
                            "eid570",
                            "display",
                            8522,
                            0,
                            "linear",
                            "${Rectangle19Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid575",
                            "display",
                            12823,
                            0,
                            "linear",
                            "${Rectangle19Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1036",
                            "display",
                            1846,
                            0,
                            "linear",
                            "${manito6Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1037",
                            "display",
                            2092,
                            0,
                            "linear",
                            "${manito6Copy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid539",
                            "display",
                            7317,
                            0,
                            "linear",
                            "${adelante}",
                            'none',
                            'block'
                        ],
                        [
                            "eid542",
                            "display",
                            8099,
                            0,
                            "linear",
                            "${adelante}",
                            'block',
                            'none'
                        ],
                        [
                            "eid604",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid559",
                            "display",
                            3188,
                            0,
                            "linear",
                            "${Rectangle18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid564",
                            "display",
                            8131,
                            0,
                            "linear",
                            "${Rectangle18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid532",
                            "display",
                            34835,
                            0,
                            "linear",
                            "${uni3_derec_tex5_atlan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid533",
                            "display",
                            35617,
                            0,
                            "linear",
                            "${uni3_derec_tex5_atlan}",
                            'block',
                            'none'
                        ],
                        [
                            "eid512",
                            "display",
                            25445,
                            0,
                            "linear",
                            "${uni3_derec_tex5_huil}",
                            'none',
                            'block'
                        ],
                        [
                            "eid513",
                            "display",
                            26227,
                            0,
                            "linear",
                            "${uni3_derec_tex5_huil}",
                            'block',
                            'none'
                        ],
                        [
                            "eid473",
                            "display",
                            13890,
                            0,
                            "linear",
                            "${uni3_derec_tex4_1descrip}",
                            'none',
                            'block'
                        ],
                        [
                            "eid474",
                            "display",
                            14672,
                            0,
                            "linear",
                            "${uni3_derec_tex4_1descrip}",
                            'block',
                            'none'
                        ],
                        [
                            "eid555",
                            "display",
                            371,
                            0,
                            "linear",
                            "${Rectangle17Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid558",
                            "display",
                            3010,
                            0,
                            "linear",
                            "${Rectangle17Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1112",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${manito13Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1113",
                            "display",
                            6317,
                            0,
                            "linear",
                            "${manito13Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid468",
                            "display",
                            12951,
                            0,
                            "linear",
                            "${uni3_derec_tex4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid487",
                            "display",
                            19328,
                            0,
                            "linear",
                            "${uni3_derec_tex4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid524",
                            "display",
                            31079,
                            0,
                            "linear",
                            "${uni3_derec_tex5_casa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid525",
                            "display",
                            31861,
                            0,
                            "linear",
                            "${uni3_derec_tex5_casa}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1055",
                            "display",
                            7500,
                            0,
                            "easeOutCirc",
                            "${manito11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1056",
                            "display",
                            8099,
                            0,
                            "easeOutCirc",
                            "${manito11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid530",
                            "display",
                            33896,
                            0,
                            "linear",
                            "${uni3_derec_tex5_bogt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid531",
                            "display",
                            34678,
                            0,
                            "linear",
                            "${uni3_derec_tex5_bogt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid502",
                            "display",
                            20750,
                            0,
                            "linear",
                            "${uni3_derec_tex5_santan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid503",
                            "display",
                            21532,
                            0,
                            "linear",
                            "${uni3_derec_tex5_santan}",
                            'block',
                            'none'
                        ],
                        [
                            "eid595",
                            "display",
                            16750,
                            0,
                            "linear",
                            "${Rectangle21Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid596",
                            "display",
                            17489,
                            0,
                            "linear",
                            "${Rectangle21Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid493",
                            "scaleY",
                            19524,
                            0,
                            "linear",
                            "${uni3_derec_tex5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid460",
                            "display",
                            9195,
                            0,
                            "linear",
                            "${uni3_derec_tex3_2008}",
                            'none',
                            'block'
                        ],
                        [
                            "eid461",
                            "display",
                            9977,
                            0,
                            "linear",
                            "${uni3_derec_tex3_2008}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1095",
                            "display",
                            18000,
                            0,
                            "easeOutCirc",
                            "${manito12Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1096",
                            "display",
                            18762,
                            0,
                            "easeOutCirc",
                            "${manito12Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid479",
                            "display",
                            17646,
                            0,
                            "linear",
                            "${uni3_derec_tex4_3sente2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid480",
                            "display",
                            18428,
                            0,
                            "linear",
                            "${uni3_derec_tex4_3sente2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1070",
                            "display",
                            13203,
                            0,
                            "easeOutCirc",
                            "${manito12Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1071",
                            "display",
                            13965,
                            0,
                            "easeOutCirc",
                            "${manito12Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid447",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${uni3_derec_tex2_indem}",
                            'none',
                            'block'
                        ],
                        [
                            "eid448",
                            "display",
                            5282,
                            0,
                            "linear",
                            "${uni3_derec_tex2_indem}",
                            'block',
                            'none'
                        ],
                        [
                            "eid438",
                            "display",
                            1310,
                            0,
                            "linear",
                            "${uni3_derec_tex1_justi}",
                            'none',
                            'block'
                        ],
                        [
                            "eid439",
                            "display",
                            2092,
                            0,
                            "linear",
                            "${uni3_derec_tex1_justi}",
                            'block',
                            'none'
                        ],
                        [
                            "eid613",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid703",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${manito6Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid704",
                            "display",
                            8996,
                            0,
                            "linear",
                            "${manito6Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid522",
                            "display",
                            30140,
                            0,
                            "linear",
                            "${uni3_derec_tex5_cauc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid523",
                            "display",
                            30922,
                            0,
                            "linear",
                            "${uni3_derec_tex5_cauc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid620",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1413",
                            "display",
                            18762,
                            0,
                            "linear",
                            "${flecha_unid32Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1414",
                            "display",
                            19701,
                            0,
                            "linear",
                            "${flecha_unid32Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid551",
                            "display",
                            19524,
                            0,
                            "linear",
                            "${atrasCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid528",
                            "display",
                            32957,
                            0,
                            "linear",
                            "${uni3_derec_tex5_boliv}",
                            'none',
                            'block'
                        ],
                        [
                            "eid529",
                            "display",
                            33739,
                            0,
                            "linear",
                            "${uni3_derec_tex5_boliv}",
                            'block',
                            'none'
                        ],
                        [
                            "eid614",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid617",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid471",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${uni3_derec_tex4_1senten}",
                            'none',
                            'block'
                        ],
                        [
                            "eid472",
                            "display",
                            13761,
                            0,
                            "linear",
                            "${uni3_derec_tex4_1senten}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1222",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1221",
                            "display",
                            2249,
                            0,
                            "linear",
                            "${Rectangle16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid538",
                            "display",
                            3010,
                            0,
                            "linear",
                            "${Rectangle16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid619",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1416",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${mensaje_unid32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid579",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${Rectangle20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid582",
                            "display",
                            19379,
                            0,
                            "linear",
                            "${Rectangle20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid609",
                            "display",
                            20368,
                            0,
                            "linear",
                            "${Rectangle22Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid442",
                            "display",
                            3010,
                            0,
                            "linear",
                            "${uni3_derec_tex1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid516",
                            "display",
                            27323,
                            0,
                            "linear",
                            "${uni3_derec_tex5_cord}",
                            'none',
                            'block'
                        ],
                        [
                            "eid517",
                            "display",
                            28105,
                            0,
                            "linear",
                            "${uni3_derec_tex5_cord}",
                            'block',
                            'none'
                        ],
                        [
                            "eid547",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${atrasCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid548",
                            "display",
                            19328,
                            0,
                            "linear",
                            "${atrasCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid601",
                            "display",
                            16750,
                            0,
                            "linear",
                            "${Rectangle21Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid602",
                            "display",
                            19367,
                            0,
                            "linear",
                            "${Rectangle21Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid500",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${uni3_derec_tex5_valle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid501",
                            "display",
                            20652,
                            0,
                            "linear",
                            "${uni3_derec_tex5_valle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid586",
                            "display",
                            13203,
                            0,
                            "linear",
                            "${Rectangle21Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid588",
                            "display",
                            14672,
                            0,
                            "linear",
                            "${Rectangle21Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid571",
                            "display",
                            8522,
                            0,
                            "linear",
                            "${Rectangle19Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid576",
                            "display",
                            12823,
                            0,
                            "linear",
                            "${Rectangle19Copy2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "opciones": {
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
                            id: 'btn_opciones',
                            rect: ['0px', '0px', '207px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_opciones.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['25'], [1, 1, 1]],
                            type: 'rect',
                            rect: ['0px', '0px', '54px', '50px', 'auto', 'auto'],
                            id: 'btn_home',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            transform: [[], [], ['25'], [1, 1, 1]],
                            type: 'rect',
                            rect: ['49px', '0px', '155px', '49px', 'auto', 'auto'],
                            id: 'btn_desplegar_cintilla',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '207px', '49px']
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
            "menu_opciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '193px', '331px', 'auto', 'auto'],
                            id: 'cintilla',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/cintilla.svg', '0px', '0px']
                        },
                        {
                            rect: ['153px', '0px', '28px', '26px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'btn_ocultar',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(215,20,20,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_cc',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['17px', '190px', '151px', '45px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_actividad',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['29px', '283px', '167px', '45px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_creditos',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['33px', '240px', '161px', '39px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-4'], ['28'], ['0.94047']],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_mapa',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['-31px', '50px', '254px', '45px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-1'], [], ['0.6585']],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['-2px', '0px', '153px', '45px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'btn_descargarpdf',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['26px', '96px', '153px', '45px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'btn_descargar_glosario',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['12px', '143px', '153px', '45px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'btn_descargar_bibliografia',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '193px', '331px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid668",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_descargar_glosario}",
                            'none',
                            'block'
                        ],
                        [
                            "eid651",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_mapa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid656",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cintilla}",
                            'block',
                            'block'
                        ],
                        [
                            "eid650",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_descargarpdf}",
                            'none',
                            'block'
                        ],
                        [
                            "eid652",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_creditos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid654",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_cc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid653",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_actividad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid671",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_descargar_bibliografia}",
                            'none',
                            'block'
                        ],
                        [
                            "eid655",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_ocultar}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "mapa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'cortina_mapa',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cortina_mapa.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['958px', '23px', '87px', '64px', 'auto', 'auto'],
                            id: 'Rectangle28',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
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
            "creditos": {
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
                            id: 'cortina_creditos',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cortina_creditos.svg', '0px', '0px']
                        },
                        {
                            rect: ['958px', '23px', '87px', '64px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle28',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
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
            "cc": {
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
                            id: 'cortina_cc',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cortina_cc.svg', '0px', '0px']
                        },
                        {
                            rect: ['958px', '23px', '87px', '64px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle28Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
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
            "actividad": {
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
                            id: 'cortina_actividad',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cortina_actividad.svg', '0px', '0px']
                        },
                        {
                            rect: ['958px', '23px', '87px', '64px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle28Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['564px', '368px', '152px', '95px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
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
            "manitaSimb": {
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
                            id: 'manito2',
                            rect: ['0px', '6px', '46px', '44px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.16723', '1.16723']],
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '46px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 1090.3288542309,
                    autoPlay: false,
                    data: [
                        [
                            "eid782",
                            "scaleY",
                            0,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid786",
                            "scaleY",
                            545,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid780",
                            "scaleX",
                            0,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid785",
                            "scaleX",
                            545,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid788",
                            "top",
                            0,
                            545,
                            "linear",
                            "${manito2}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid790",
                            "top",
                            545,
                            545,
                            "linear",
                            "${manito2}",
                            '0px',
                            '6px'
                        ]
                    ]
                }
            },
            "manitaSimb_1": {
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
                            id: 'manito2',
                            rect: ['0px', '6px', '46px', '44px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.16723', '1.16723']],
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '46px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 6520.3288542309,
                    autoPlay: false,
                    data: [
                        [
                            "eid782",
                            "scaleY",
                            0,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid786",
                            "scaleY",
                            545,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid816",
                            "scaleY",
                            1090,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid817",
                            "scaleY",
                            1635,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid822",
                            "scaleY",
                            2180,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid823",
                            "scaleY",
                            2725,
                            525,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid841",
                            "scaleY",
                            3250,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid842",
                            "scaleY",
                            3795,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid843",
                            "scaleY",
                            4340,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid844",
                            "scaleY",
                            4885,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid845",
                            "scaleY",
                            5430,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid846",
                            "scaleY",
                            5975,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid780",
                            "scaleX",
                            0,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid785",
                            "scaleX",
                            545,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid814",
                            "scaleX",
                            1090,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid815",
                            "scaleX",
                            1635,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid820",
                            "scaleX",
                            2180,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid821",
                            "scaleX",
                            2725,
                            525,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid835",
                            "scaleX",
                            3250,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid836",
                            "scaleX",
                            3795,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid837",
                            "scaleX",
                            4340,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid838",
                            "scaleX",
                            4885,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid839",
                            "scaleX",
                            5430,
                            545,
                            "linear",
                            "${manito2}",
                            '1.16723',
                            '1'
                        ],
                        [
                            "eid840",
                            "scaleX",
                            5975,
                            545,
                            "linear",
                            "${manito2}",
                            '1',
                            '1.16723'
                        ],
                        [
                            "eid788",
                            "top",
                            0,
                            545,
                            "linear",
                            "${manito2}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid790",
                            "top",
                            545,
                            545,
                            "linear",
                            "${manito2}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid818",
                            "top",
                            1090,
                            545,
                            "linear",
                            "${manito2}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid819",
                            "top",
                            1635,
                            545,
                            "linear",
                            "${manito2}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid824",
                            "top",
                            2180,
                            545,
                            "linear",
                            "${manito2}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid825",
                            "top",
                            2725,
                            525,
                            "linear",
                            "${manito2}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid847",
                            "top",
                            3250,
                            545,
                            "linear",
                            "${manito2}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid848",
                            "top",
                            3795,
                            545,
                            "linear",
                            "${manito2}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid849",
                            "top",
                            4340,
                            545,
                            "linear",
                            "${manito2}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid850",
                            "top",
                            4885,
                            545,
                            "linear",
                            "${manito2}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid851",
                            "top",
                            5430,
                            545,
                            "linear",
                            "${manito2}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid852",
                            "top",
                            5975,
                            545,
                            "linear",
                            "${manito2}",
                            '0px',
                            '6px'
                        ]
                    ]
                }
            },
            "uni3_rep_personajeSimb": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '223px', '303px', 'auto', 'auto'],
                            id: 'uni3_rep_personaje2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_personaje2.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['5'], [0, 0, 0], [1, 1, 1]],
                            id: 'Untitled-1-02',
                            type: 'image',
                            rect: ['14px', '43px', '195px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Untitled-1-02.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'uni3_rep_personajeCopy',
                            opacity: '0.39568345323741',
                            rect: ['0px', '0px', '223px', '303px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rep_personaje.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.33333', '1.33333']],
                            type: 'image',
                            id: 'Untitled-1-01',
                            display: 'none',
                            rect: ['5px', '0', '56px', '70px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Untitled-1-01.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['107'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'manito9',
                            display: 'none',
                            rect: ['-18px', '20px', '46px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '223px', '303px']
                        }
                    }
                },
                timeline: {
                    duration: 1914,
                    autoPlay: false,
                    labels: {
                        "iraDerechos": 1914
                    },
                    data: [
                        [
                            "eid1020",
                            "display",
                            829,
                            0,
                            "easeOutCirc",
                            "${manito9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1016",
                            "scaleY",
                            850,
                            1000,
                            "easeOutCirc",
                            "${Untitled-1-01}",
                            '1',
                            '1.33333'
                        ],
                        [
                            "eid1218",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Untitled-1-01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1219",
                            "display",
                            829,
                            0,
                            "linear",
                            "${Untitled-1-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1024",
                            "left",
                            1876,
                            38,
                            "easeOutCirc",
                            "${manito9}",
                            '-18px',
                            '335px'
                        ],
                        [
                            "eid1005",
                            "top",
                            0,
                            500,
                            "easeOutCirc",
                            "${Untitled-1-02}",
                            '43px',
                            '48px'
                        ],
                        [
                            "eid1025",
                            "top",
                            1876,
                            38,
                            "easeOutCirc",
                            "${manito9}",
                            '20px',
                            '73px'
                        ],
                        [
                            "eid1017",
                            "scaleX",
                            850,
                            1000,
                            "easeOutCirc",
                            "${Untitled-1-01}",
                            '1',
                            '1.33333'
                        ],
                        [
                            "eid1003",
                            "rotateZ",
                            0,
                            500,
                            "easeOutCirc",
                            "${Untitled-1-02}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid1011",
                            "opacity",
                            115,
                            735,
                            "easeOutCirc",
                            "${uni3_rep_personajeCopy}",
                            '0.39568345323741',
                            '1'
                        ]
                    ]
                }
            },
            "textoFinal": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '0px', '337px', '121px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Despues de revisar los datos de todas las regiones, puede continuar con la actividad de afianzamiento que le ayudará a recordar la información vista en este material. Ésta actividad la encuentra en el boton Opciones.</p>',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(7,7,7,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['283px', '70px', null, null, 'auto', 'auto'],
                            id: 'manitaSimb5',
                            symbolName: 'manitaSimb',
                            type: 'rect',
                            transform: [[], ['125'], [0, 0, 0], [1, 1, 1]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '337px', '121px']
                        }
                    }
                },
                timeline: {
                    duration: 1090.3288542309,
                    autoPlay: false,
                    data: [
                            [ "eid1143", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${manitaSimb5}', [0] ] ]
                    ]
                }
            },
            "tabla": {
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
                            id: 'tabla',
                            opacity: '0',
                            rect: ['0px', '0px', '1281px', '601px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tabla.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.17283', '1.18993']],
                            type: 'image',
                            id: 'btn_activado_preve',
                            display: 'none',
                            rect: ['107px', '160px', '150px', '117px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_activado_preve.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['107px', '284px', '150px', '117px', 'auto', 'auto'],
                            id: 'btn_activado_control',
                            fill: ['rgba(0,0,0,0)', 'images/btn_activado_control.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['107', '403px', '150px', '117px', 'auto', 'auto'],
                            id: 'btn_activado_repre',
                            fill: ['rgba(0,0,0,0)', 'images/btn_activado_repre.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            display: 'none',
                            rect: ['299px', '296px', '400px', '150px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">El Estado juega un papel fundamental al incorporar las normas del DIH en su legislación nacional, difundir y contratar a personal cualificado.​</p>',
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'TextCopy',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            display: 'none',
                            rect: ['286px', '266px', '400px', '290px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Participan organizaciones internacionales de carácter neutral, que buscan comunicar entre las partes del conflicto, auxiliar a las víctimas, recibir las denuncias, prestar asistencia, protección y ser guardianes del DIH.</p><p style=\"margin: 0px;\"></p>',
                            align: 'left'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'TextCopy2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​La Corte Interamericana de Derechos Humanos también hace parte del Sistema Interamericano de Protección de los Derechos Humanos. La CIDH trabaja bajo los siguientes pilares:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Peticiones individuales.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Monitoreo de la situación de los derechos humanos en los Estados miembros. Atención a líneas temáticas prioritarias.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Colombia es en la actualidad un Estado miembro</p><p style=\"margin: 0px;\">en el continente americano.</p>',
                            rect: ['748px', '187px', '400px', '290px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'TextCopy5',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Se realiza a través de la normatividad interna de cada país que prevé mecanismos para la protección de los derechos humanos, e igualmente a través de mecanismos internacionales de protección. Tal es el caso del Sistema Interamericano de Protección Derechos Humanos que tiene competencia sobre el caso Colombiano.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La Comisión Interamericana de Derechos Humanos hace parte del Sistema Interamericano de Protección de los Derechos Humanos. Es un órgano autónomo de la Organización de Estados Americanos, que se encarga de la promoción y protección de los derechos humanos en el continente americano.</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            rect: ['756px', '190px', '382px', '290px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'TextCopy3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​El Estado debe garantizar el cese del incumplimiento al DIH y debe reparar e indemnizar a las víctimas. En cuanto a las personas naturales, existen seis mecanismos de sanción:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">1. Tribunales internos del Estado.</p><p style=\"margin: 0px;\">2. Tribunales internacionales específicos.</p><p style=\"margin: 0px;\">3. Tribunales con participación mixta (nacional e &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;internacional).</p><p style=\"margin: 0px;\">4. Asistencia jurídica internacional.</p><p style=\"margin: 0px;\">5. Salas especiales de tribunales internos.</p><p style=\"margin: 0px;\">6. Corte Penal Internacional.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>',
                            rect: ['289px', '193px', '400px', '290px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'TextCopy6',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Se encuentran los tribunales judiciales de cada país, y para el caso de la región, la Corte Interamericana de Derechos Humanos que hace parte del Sistema Interamericano de Protección de los Derechos Humanos.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La CIDH es un estamento judicial que se encarga de aplicar e interpretar la Convención Americana sobre Derechos Humanos y otros tratados del Sistema Interamericano de Protección de Derechos Humanos. Tiene carácter de tribunal internacional y sus procesos terminan en una sentencia inapelable y de obligatorio cumplimiento para los Estados.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>',
                            rect: ['746px', '188px', '400px', '290px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'TextCopy7',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Finalmente, se encuentra la Corte Penal Internacional como una institución permanente, facultada para ejercer su jurisdicción sobre personas naturales respecto de los crímenes más graves de trascendencia internacional establecidos en el Estatuto de Roma y es complementaria de las jurisdicciones penales nacionales. Está vinculada con las Naciones Unidas y tiene sede en La Haya.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>',
                            rect: ['746px', '188px', '400px', '290px', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            display: 'none',
                            rect: ['739px', '277px', '420px', '169px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">La prevención está dada por la incorporación de los derechos humanos en las normas internas de cada Estado, con ocasión de la firma de tratados internacionales sobre esta materia, suscritos por cada Nación.​</p>',
                            align: 'left'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1138px', '480px', '24px', '26px', 'auto', 'auto'],
                            id: 'flacha_sig',
                            fill: ['rgba(0,0,0,0)', 'images/flacha_sig.svg', '0px', '0px']
                        },
                        {
                            rect: ['1136px', '482px', '24px', '26px', 'auto', 'auto'],
                            id: 'flecha_atras',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_atras.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['180', '343', '46px', '44px', 'auto', 'auto'],
                            id: 'manito',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['174px', '458px', '46px', '44px', 'auto', 'auto'],
                            id: 'manitoCopy',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1138px', '480px', '46px', '44px', 'auto', 'auto'],
                            id: 'manitoCopy2',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1138px', '480px', '46px', '44px', 'auto', 'auto'],
                            id: 'manitoCopy3',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1229px', '41px', '46px', '44px', 'auto', 'auto'],
                            id: 'manitoCopy4',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1119px', '461px', '57px', '60px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['1119px', '461px', '57px', '60px', 'auto', 'auto'],
                            display: 'none',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['1119px', '461px', '57px', '60px', 'auto', 'auto'],
                            display: 'none',
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['1191px', '0px', '90px', '101px', 'auto', 'auto'],
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['1119px', '461px', '57px', '60px', 'auto', 'auto'],
                            display: 'none',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['107px', '152px', '150px', '131px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['107px', '277px', '150px', '131px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['105px', '394px', '150px', '131px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1281px', '601px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: false,
                    labels: {
                        "prev": 250,
                        "cont": 1000,
                        "cont2": 2000,
                        "repe": 3000,
                        "repe2": 4000
                    },
                    data: [
                        [
                            "eid1280",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${btn_activado_repre}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1288",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${TextCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1289",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${TextCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1363",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${manitoCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1364",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${manitoCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1329",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1330",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1313",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${TextCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1314",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${TextCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1309",
                            "display",
                            1628,
                            0,
                            "linear",
                            "${flacha_sig}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1310",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${flacha_sig}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1319",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${flacha_sig}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1320",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${flacha_sig}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1325",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1326",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1387",
                            "scaleX",
                            2999,
                            353,
                            "linear",
                            "${btn_activado_repre}",
                            '1.17283',
                            '1'
                        ],
                        [
                            "eid1386",
                            "scaleY",
                            2999,
                            353,
                            "linear",
                            "${btn_activado_repre}",
                            '1.18993',
                            '1'
                        ],
                        [
                            "eid1317",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${TextCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1318",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${TextCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1294",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${TextCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1295",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${TextCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1367",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${manitoCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1368",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${manitoCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1381",
                            "scaleX",
                            250,
                            353,
                            "linear",
                            "${btn_activado_preve}",
                            '1.17283',
                            '1'
                        ],
                        [
                            "eid1323",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1324",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1369",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${manitoCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1370",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${manitoCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1359",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${manitoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1360",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${manitoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1278",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${btn_activado_control}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1279",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${btn_activado_control}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1392",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1393",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1287",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1389",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_activado_preve}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1388",
                            "display",
                            250,
                            0,
                            "linear",
                            "${btn_activado_preve}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1277",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${btn_activado_preve}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1357",
                            "display",
                            500,
                            0,
                            "linear",
                            "${manito}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1358",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${manito}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1283",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${TextCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1284",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${TextCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1311",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${flecha_atras}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1312",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${flecha_atras}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1322",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${flecha_atras}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1374",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${tabla}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1391",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1390",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1282",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1384",
                            "scaleY",
                            1000,
                            353,
                            "linear",
                            "${btn_activado_control}",
                            '1.18993',
                            '1'
                        ],
                        [
                            "eid1285",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1286",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1327",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1328",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1385",
                            "scaleX",
                            1000,
                            353,
                            "linear",
                            "${btn_activado_control}",
                            '1.17283',
                            '1'
                        ],
                        [
                            "eid1383",
                            "scaleY",
                            250,
                            353,
                            "linear",
                            "${btn_activado_preve}",
                            '1.18993',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-28951245");
