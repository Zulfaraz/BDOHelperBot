"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BDOHelperBotControllerClass {
    constructor() {
        this.MSG = null;
    }
    setOutMSGResponseString(MSG = '') {
        this.MSG = MSG;
    }
    getOutMSGResponseString() {
        return this.MSG;
    }
}
exports.default = BDOHelperBotControllerClass;
