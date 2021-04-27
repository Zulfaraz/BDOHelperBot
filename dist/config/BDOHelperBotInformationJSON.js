"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
class BDOHelperBotInformationJSONClass {
    constructor() {
        this.BDOHelperBotData = null;
        this.BDOHelperBotDataQuery = null;
    }
    BDOHelperBotBuilderMessegeAlertLog(BDMHelperBotQuerry) {
        const BDOHBDivederR = "┇-------------------------";
        const BDOHBDivederL = "-------------------------┇";
        this.BDOHelperBotDataQuery = BDMHelperBotQuerry;
        this.BDOHelperBotData = [
            {
                "BDOMsgName": "StatusAlert",
                "BDOMsgpropiertier": {
                    "BDOMgsEmbed_Title": {
                        "BDOMgsEmbed_FirtsPartTitle": BDOHBDivederR,
                        "BDOMgsEmbed_LastPartTitle": BDOHBDivederL,
                    },
                    "BDOMgsEmbed_Type": {
                        "BDOMgsEmbed_Name_Type": "AlertComprobation",
                        "BDOMgsEmbed_Icon_Type": {
                            "BDOMgsEmbed_Icon": "✅",
                        },
                    },
                    "BDOMgsEmbed_Discription": {
                        "BDOMgsEmbed_DiscFirtPart": "The services to : ",
                        "BDOMgsEmbed_DiscLastPart": " On! ",
                    },
                },
            },
            {
                "BDOMsgName": "StatusError",
                "BDOMsgpropiertier": {
                    "BDOMgsEmbed_Title": {
                        "BDOMgsEmbed_FirtsPartTitle": BDOHBDivederR,
                        "BDOMgsEmbed_LastPartTitle": BDOHBDivederL,
                    },
                    "BDOMgsEmbed_Type": {
                        "BDOMgsEmbed_Name_Type": "AlertError",
                        "BDOMgsEmbed_Icon_Type": {
                            "BDOMgsEmbed_Icon": "❌",
                        },
                    },
                    "BDOMgsEmbed_Discription": {
                        "BDOMgsEmbed_DiscFirtPart": "The Error information ▼ \r\n\r\n",
                        "BDOMgsEmbed_DiscLastPart": "\r\n\r\nAlert Error! ",
                    },
                },
            },
        ];
        const DATAQUERY = this.BDOHelperBotDataQuery;
        const DATAFILTER = this.BDOHelperBotData.filter((DATAKEY) => DATAKEY.BDOMsgName === DATAQUERY, Boolean);
        return DATAFILTER;
    }
    BDOHelperBotBuilderMessegeEmbed(BDMHelperBotQuerry) {
        this.BDOHelperBotDataQuery = BDMHelperBotQuerry;
        this.BDOHelperBotData = [
            {
                "BDOMsgName": "MgsEmbed1",
                "BDOMsgpropiertier": {
                    "BDOMgsEmbed_Title": "╠═══╝:notes:┇Hola Mundo MgsEmbed1┇:notes:╚════╣",
                    "BDOMgsEmbed_Color": "#D50000",
                    "BDOMgsEmbed_Discription": "Hola Mundo desde classJSON info",
                    "BDOMgsEmbed_Footer": "Hola Mundo desde classJSON info",
                    "BDOMgsEmbed_URLIMG": "https://i.imgur.com/AZb2IQX.jpg",
                    "BDOMgsEmbed_URLTHM": "https://i.imgur.com/AZb2IQX.jpg",
                    "BDOMgsEmbed_URL": "https://i.imgur.com/AZb2IQX.jpg",
                    "BDOMgsEmbed_FIELDS": [{}],
                },
            },
            {
                "BDOMsgName": "MgsEmbed2",
                "BDOMsgpropiertier": {
                    "BDOMgsEmbed_Title": "╠═══╝:notes:┇Hola Mundo MgsEmbed2┇:notes:╚════╣",
                    "BDOMgsEmbed_Color": "#64DD17",
                    "BDOMgsEmbed_Discription": "Hola Mundo desde classJSON info",
                    "BDOMgsEmbed_Footer": "Hola Mundo desde classJSON info",
                    "BDOMgsEmbed_URLIMG": "https://i.imgur.com/AZb2IQX.jpg",
                    "BDOMgsEmbed_URLTHM": "",
                    "BDOMgsEmbed_URL": "",
                    "BDOMgsEmbed_FIELDS": [{}],
                },
            },
            {
                "BDOMsgName": "MgsEmbed3",
                "BDOMsgpropiertier": {
                    "BDOMgsEmbed_Title": "╠═══╝:notes:┇Hola Mundo MgsEmbed3┇:notes:╚════╣",
                    "BDOMgsEmbed_Color": "#880E4F",
                    "BDOMgsEmbed_Discription": "Hola Mundo desde classJSON info",
                    "BDOMgsEmbed_Footer": "Hola Mundo desde classJSON info",
                    "BDOMgsEmbed_URLIMG": "https://i.imgur.com/AZb2IQX.jpg",
                    "BDOMgsEmbed_URLTHM": "",
                    "BDOMgsEmbed_URL": "",
                    "BDOMgsEmbed_FIELDS": [
                        {
                            "name": "Field 1",
                            "value": "Disc Field 1",
                            "inline": true,
                        },
                        {
                            "name": "Field 2",
                            "value": "Disc Field 2",
                            "inline": true,
                        },
                        {
                            "name": "Field 3",
                            "value": "Disc Field 3",
                            "inline": true,
                        },
                        {
                            "name": "Field 4",
                            "value": "Disc Field 4",
                            "inline": false,
                        },
                        {
                            "name": "Field 5",
                            "value": "Disc Field 5",
                            "inline": false,
                        },
                        {
                            "name": "Field 6",
                            "value": "Disc Field 6",
                            "inline": false,
                        },
                    ],
                },
            },
            {
                "BDOMsgName": "ErrorComand",
                "BDOMsgpropiertier": {
                    "BDOMgsEmbed_Title": "No existe comando",
                    "BDOMgsEmbed_Color": "#D50000",
                    "BDOMgsEmbed_Discription": "",
                    "BDOMgsEmbed_Footer": "",
                    "BDOMgsEmbed_URLIMG": "",
                    "BDOMgsEmbed_URLTHM": "",
                    "BDOMgsEmbed_URL": "",
                    "BDOMgsEmbed_FIELDS": [{}],
                },
            },
        ];
        const DATAQUERY = this.BDOHelperBotDataQuery;
        const DATAFILTER = this.BDOHelperBotData.filter((DATAKEY) => DATAKEY.BDOMsgName === DATAQUERY, Boolean);
        return DATAFILTER;
    }
}
exports.default = BDOHelperBotInformationJSONClass;
