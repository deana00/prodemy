import timeConversion from "./timeConversion.js"
import { expect, assert} from "chai"

describe("Time Conversion Function Test", () => {
    // Positive Test Cases
    describe("Positive Test Cases", () => {
        it(`TC 001 - Return "19:05:45" for "07:05:45PM" input`, () => {
            const convTime = timeConversion("07:05:45PM");
            expect(convTime).to.equal("19:05:45");
        });

        it(`TC 002 - Return "12:45:54" for "12:45:54PM" input`, () => {
            const convTime = timeConversion("12:45:54PM");
            expect(convTime).to.equal("12:45:54");
        });

        it(`TC 003 - Return "06:40:03" for "06:40:03AM" input`, () => {
            const convTime = timeConversion("06:40:03AM");
            expect(convTime).to.equal("06:40:03");
        });

        it(`TC 004 - Return "00:05:39" for "12:05:39AM" input`, () => {
            const convTime = timeConversion("12:05:39AM");
            expect(convTime).to.equal("00:05:39");
        });

        it(`TC 005 - Return "00:00:00" for "12:00:00AM" input`, () => {
            const convTime = timeConversion("12:00:00AM");
            expect(convTime).to.equal("00:00:00");
        });
        
    }); 

    // Negative Test Cases
    describe("Negative Test Cases", () => {

        // Input the wrong time format
        it(`TC 006 - Return error message when inputting wrong format "070545PM"`, () => {
            const convTime = timeConversion("070545PM");
            expect(convTime).to.equal("Given input should be in hh:mm:ssPM or hh:mm:ssAM format!");
        });

        // Input wrong format
        it(`TC 007 - Return error message when inputting wrong format "10030:30PM"`, () => {
            const convTime = timeConversion("10030:30PM");
            expect(convTime).to.equal("Given input should be in hh:mm:ssPM or hh:mm:ssAM format!");
        });

        // Input wrong format
        it(`TC 008 - Return error message when inputting wrong format "10:30:30-M"`, () => {
            const convTime = timeConversion("10:30:30-M");
            expect(convTime).to.equal("Given input should be in hh:mm:ssPM or hh:mm:ssAM format!");
        });

        // Input hour > 12
        it("TC 009 - Return error message when inputting hour=50", () => {
            const convTime = timeConversion("50:33:44PM");
            expect(convTime).to.equal("Given input should be in hh:mm:ssPM or hh:mm:ssAM format!");
        });

        // Input hour < 1
        it("TC 010 - Return error message when inputting hour=0", () => {
            const convTime = timeConversion("00:33:44PM");
            expect(convTime).to.equal("Given input should be in hh:mm:ssPM or hh:mm:ssAM format!");
        });
        
        // Input minutes > 59
        it("TC 011 - Return error message when inputting minutes=60", () => {
            const convTime = timeConversion("01:60:44PM");
            expect(convTime).to.equal("Given input should be in hh:mm:ssPM or hh:mm:ssAM format!");
        });

        // Input seconds > 59
        it("TC 012 - Return error message for inputting seconds=60", () => {
            const convTime = timeConversion("01:30:60PM");
            expect(convTime).to.equal("Given input should be in hh:mm:ssPM or hh:mm:ssAM format!");
        });
    }); 
})