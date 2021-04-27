/** @format */
class BDOHelperBotGenerateToLogsSystemClass {
  private BUILDERDIRFILE: string = "./log/";

  BDOHelperBotGenerateFileLog(BDOMgsInformation: any, BDODate?: any, BDOTypeError?: any) {
    const BUILDERFILE = require("fs");
    const BUILDERPATH = require("path");
    const BDONAMETXT = this.BUILDERDIRFILE + "BDO_LOG_" + BDOTypeError + "_.txt";
    const BDOLOGREGISTER = "BDO_Error_" + BDOTypeError + "_" + BDODate;
    const BDODISCRIP = JSON.stringify("" + BDOMgsInformation);
    const BUILDERMKD = BUILDERFILE.stat(this.BUILDERDIRFILE, (err: any, stats: any) => {
      if (err) {
        if (err.code === "ENOENT") {
          BUILDERFILE.mkdir(BUILDERPATH.join(this.BUILDERDIRFILE), (err: any) => {
            if (err) {
              return console.error(err);
            }
          });
        } else {
        }
      }
      const BUILDERFILEA = BUILDERFILE.createWriteStream(BDONAMETXT, { flags: "a" });
      const BDODivider =
        "-------------------------------------------------------------------";
      const BDOSPACE = " ";
      BUILDERFILEA.once("open", (fd: any) => {
        BUILDERFILEA.write(BDODivider);
        BUILDERFILEA.write("\r\n" + BDOSPACE + "Error Type: " + BDOTypeError + " ❌ ");
        BUILDERFILEA.write("\r\n" + BDODivider);
        BUILDERFILEA.write("\r\n" + BDOSPACE + "Description: ▼ ");
        BUILDERFILEA.write("\r\n\r\n" + BDOSPACE + BDOLOGREGISTER);
        BUILDERFILEA.write("\r\n\r\n" + BDOSPACE + BDODISCRIP);
        BUILDERFILEA.write("\r\n" + BDODivider);
        BUILDERFILEA.end();
      });
    });
  }
}
export default BDOHelperBotGenerateToLogsSystemClass;
