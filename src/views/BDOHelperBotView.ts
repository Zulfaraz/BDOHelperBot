/** @format */

import { MessageEmbed } from "discord.js";

class BDOHelperBotView {
  BDOBuilderMessegeEmbedView(
    BDODataJSON: any,
    BDODataUserName?: any,
    BDODataUserUrl?: any,
  ) {
    const DATA = [
      {
        DATATITLE: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Title,
        DATAAUTHOR: BDODataUserName || "",
        DATAAUTHORURL: BDODataUserUrl || "",
        DATACOLOR: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Color,
        DATADESCRIPTION: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Discription,
        DATAFOOTER: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_Footer,
        DATAIMAGE: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_URLIMG,
        DATATHUMBNAIL: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_URLTHM,
        DATAURL: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_URL,
        DATAFIELDS: BDODataJSON.BDOMsgpropiertier.BDOMgsEmbed_FIELDS || null,
      },
    ];
    const BDOBMEV = new MessageEmbed()
      .setTitle(DATA[0].DATATITLE)
      .setAuthor(DATA[0].DATAAUTHOR, DATA[0].DATAAUTHORURL)
      .setColor(DATA[0].DATACOLOR)
      .setDescription(DATA[0].DATADESCRIPTION)
      .setFooter(DATA[0].DATAFOOTER)
      .setImage(DATA[0].DATAIMAGE)
      .setThumbnail(DATA[0].DATATHUMBNAIL)
      .setTimestamp()
      .setURL(DATA[0].DATAURL)
      .addFields(DATA[0].DATAFIELDS);

    return BDOBMEV;
  }
}
export default BDOHelperBotView;
