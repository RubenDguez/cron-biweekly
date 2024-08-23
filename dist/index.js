"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
function calcBiweekly(referenceDate) {
    const refDate = new Date(referenceDate);
    if (isNaN(refDate.getTime())) {
        throw new Error('Invalid start date format. Use YYYY-MM-DD.');
    }
    const currentDate = new Date();
    const timeDifference = Math.abs(currentDate.getTime() - refDate.getTime());
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const numOfWeeks = Math.floor(dayDifference / 7);
    return (numOfWeeks % 2) === 0;
}
async function run() {
    try {
        const referenceDate = core.getInput('reference-date');
        const isBiweekly = calcBiweekly(referenceDate);
        core.setOutput('is-biweekly', isBiweekly);
        console.log(`Is the current date on a week biweekly schedule from ${referenceDate}? ${isBiweekly}`);
    }
    catch (error) {
        const ERROR = error;
        core.setFailed(`Action failed with error: ${ERROR.message}`);
    }
}
run();
