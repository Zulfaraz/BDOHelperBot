/** @format */
import BDOHelperBotInformationJSONClass from "../config/BDOHelperBotInformationJSON";
class BDOHelperBotControllerClass {
  //Attribute Data
  private BDODataQuery: any;
  private BDODataUserName: any;
  private BDODataUserUrl: any;
  private BDODataNameAlert: any;
  private BDODataJSON: any;
  private BDODataTimer: any;
  // Contructor
  constructor(
    BDODataQuery?: any,
    BDODataUserName?: any,
    BDODataUserUrl?: any,
    BDODataNameAlert?: any,
    BDODataJSON?: any,
    BDODataTimer?: any,
  ) {
    this.BDODataQuery = BDODataQuery;
    this.BDODataQuery = BDODataUserName;
    this.BDODataQuery = BDODataUserUrl;
    this.BDODataNameAlert = BDODataNameAlert;
    this.BDODataJSON = BDODataJSON;
    this.BDODataTimer = BDODataTimer;
  }
  //Setter Data
  /**
   *
   * @param BDODataQuery
   */
  set_BDODataQuery(BDODataQuery: any) {
    this.BDODataQuery = BDODataQuery;
  }
  /**
   *
   * @param BDODataUserName
   */
  set_BDODataUserName(BDODataUserName?: any) {
    this.BDODataUserName = BDODataUserName;
  }
  /**
   *
   * @param BDODataUserUrl
   */
  set_BDODataUserUrl(BDODataUserUrl?: any) {
    this.BDODataUserUrl = BDODataUserUrl;
  }
  /**
   *
   * @param BDODataNameAlert
   */
  set_BDODataNameAlert(BDODataNameAlert?: any) {
    this.BDODataNameAlert = BDODataNameAlert;
  }
  /**
   *
   * @param BDODataJSON
   */
  set_BDODataJSON(BDODataJSON?: any) {
    this.BDODataJSON = BDODataJSON;
  }
  /**
   *
   * @param BDODataTimer
   */
  set_BDODataTimer(BDODataTimer?: any) {
    this.BDODataTimer = BDODataTimer;
  }
  //Getter Data
  /**
   *
   * @returns BDODataQuery
   */
  get_BDODataQuery() {
    return this.BDODataQuery;
  }
  /**
   *
   * @returns BDODataUserName
   */
  get_BDODataUserName() {
    return this.BDODataUserName;
  }
  /**
   *
   * @returns BDODataUserUrl
   */
  get_BDODataUserUrl() {
    return this.BDODataUserUrl;
  }
  /**
   *
   * @returns BDODataNameAlert
   */
  get_BDODataNameAlert() {
    return this.BDODataNameAlert;
  }
  /**
   *
   * @returns BDODataJSON
   */
  get_BDODataJSON() {
    return this.BDODataJSON;
  }
  /**
   *
   * @returns BDODataTimer
   */
  get_BDODataTimer() {
    return this.BDODataTimer;
  }
  // Processing to app abstract data
  /**
   *
   * @returns
   */
  BDOProcesToJSONDataInformation() {
    const DATAINFORMATION = new BDOHelperBotInformationJSONClass();
    const DATACLEAN: string[] = DATAINFORMATION.BDOHelperBotBuilderMessegeEmbed(
      this.get_BDODataQuery(),
    );
    this.set_BDODataJSON(DATACLEAN.filter(Boolean));

    return this.get_BDODataJSON();
  }
  //
  BDOProcesToJSONAlertInformation() {
    const DATAINFORMATION = new BDOHelperBotInformationJSONClass();
    const DATACLEAN: string[] = DATAINFORMATION.BDOHelperBotBuilderMessegeAlertLog(
      this.get_BDODataQuery(),
    );
    this.set_BDODataJSON(DATACLEAN.filter(Boolean));

    return this.get_BDODataJSON();
  }
}
export default BDOHelperBotControllerClass;
