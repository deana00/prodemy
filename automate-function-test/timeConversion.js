function timeConversion(s) {
    // RegEx for hh:mm:ssAM or hh:mm:ssPM format
    // divided into 4 groups, hour:min:sec:period; notated by expressions inside ()
    // 1[012] means 10, 11, or 12
    // [1-9] means 1 until 9
    // | means OR
    // : means followed by a colon
    // [0-5] means 0 until 5
    // [0-9] means 0-9
    // [AM|PM] means AM OR PM
    let regex = new RegExp(/((1[012]|[1-9]):([0-5][0-9]):([0-5][0-9])([AM|PM]))/)

    // Check if given input is in wrong time format
    if (typeof s !== 'string' || regex.test(s) !== true) {
        return "Given input should be in hh:mm:ssPM or hh:mm:ssAM format!";
    }
    else {
        let hh = s.slice(0, 2);
        let mm = s.slice(3, 5);
        let ss = s.slice(6, 8);
        let period = s.slice(-2).toUpperCase();
        let hh_conv = hh;

        if (period === 'PM') {
            if (hh !== '12') {
                hh_conv = Number(hh) + 12;
                hh_conv = hh_conv.toString();
            }
        }
        else if (period === 'AM') {
            if (hh === '12') {
                hh_conv = '00';
            }
        }

        let time_conv = `${hh_conv}:${mm}:${ss}`;

        return time_conv;
    }
}

export default timeConversion