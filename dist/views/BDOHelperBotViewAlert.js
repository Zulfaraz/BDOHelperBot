"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
class BDOHelperBotViewAlert {
    BDOHelperBotBuilderViewAlert(BDODataJSON, BDODataNameAlert) {
        const DATA = [
            {
                DATATYPE: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Type.BDOMgsEmbed_Name_Type,
                DATADISCFIRTPART: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Discription.BDOMgsEmbed_DiscFirtPart,
                DATADISCLASTPART: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Discription.BDOMgsEmbed_DiscLastPart,
            },
        ];
        let BDOHBTitle = null;
        let BDOHBIcon = null;
        if (DATA[0].DATATYPE === "AlertComprobation") {
            BDOHBIcon =
                BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Type.BDOMgsEmbed_Icon_Type
                    .BDOMgsEmbed_Icon;
            BDOHBTitle =
                BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Title.BDOMgsEmbed_FirtsPartTitle +
                    " " +
                    BDODataNameAlert +
                    " " +
                    BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Title.BDOMgsEmbed_LastPartTitle;
        }
        else if (DATA[0].DATATYPE === "AlertError") {
            BDOHBIcon =
                BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Type.BDOMgsEmbed_Icon_Type
                    .BDOMgsEmbed_Icon;
            BDOHBTitle =
                BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Title.BDOMgsEmbed_FirtsPartTitle +
                    " " +
                    " Alert Error" +
                    " " +
                    BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Title.BDOMgsEmbed_LastPartTitle;
        }
        let BDODIVIDERS = "------------------------------------------------------------------";
        return (console.log(BDODIVIDERS),
            console.log(" "),
            console.log(BDOHBTitle),
            console.log(" "),
            console.log(BDODIVIDERS),
            console.log(" "),
            console.log(DATA[0].DATADISCFIRTPART +
                BDODataNameAlert +
                " " +
                DATA[0].DATADISCLASTPART +
                " " +
                BDOHBIcon),
            console.log(" "),
            console.log(BDODIVIDERS));
    }
}
exports.default = BDOHelperBotViewAlert;
