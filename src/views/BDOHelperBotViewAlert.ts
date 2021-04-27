/** @format */

class BDOHelperBotViewAlert {
  BDOHelperBotBuilderViewAlert(BDODataJSON: any, BDODataNameAlert: any) {
    const DATA = [
      {
        DATATYPE: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Type.BDOMgsEmbed_Name_Type,
        DATADISCFIRTPART:
          BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Discription.BDOMgsEmbed_DiscFirtPart,
        DATADISCLASTPART:
          BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Discription.BDOMgsEmbed_DiscLastPart,
      },
    ];
    let BDOHBTitle: any = null;

    let BDOHBIcon: any = null;
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
    } else if (DATA[0].DATATYPE === "AlertError") {
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
    let BDODIVIDERS =
      "------------------------------------------------------------------";
    return (
      console.log(BDODIVIDERS),
      console.log(" "),
      console.log(BDOHBTitle),
      console.log(" "),
      console.log(BDODIVIDERS),
      console.log(" "),
      console.log(
        DATA[0].DATADISCFIRTPART +
          BDODataNameAlert +
          " " +
          DATA[0].DATADISCLASTPART +
          " " +
          BDOHBIcon,
      ),
      console.log(" "),
      console.log(BDODIVIDERS)
    );
  }
}
export default BDOHelperBotViewAlert;
