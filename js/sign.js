function getSignByToken(token, timeStamp) {
    var md5Token = $.md5(token);
    var md5Time = $.md5(timeStamp);
    var arr = getMD5Arr(md5Token);
    md5Time = md5Time.substring(3, 22);
    md5Time = getStringReverse(md5Time);
    md5Time = md5Time.slice(0, 7) + arr[0] + md5Time.slice(7);
    md5Time = md5Time.slice(0, 3) + arr[1] + md5Time.slice(3);
    md5Time = md5Time.slice(0, 9) + arr[2] + md5Time.slice(9);
    md5Time = md5Time.slice(0, 12) + arr[3] + md5Time.slice(12);
    return md5Time;
}

function getMD5Arr(str) {
    var arr = new Array();
    arr.push(str.substring(7, 11));
    arr.push(str.substring(11, 15));
    arr.push(str.substring(20, 25));
    arr.push(str.substring(18, 27))
    return arr;
}

function getStringReverse(str) {
    var s = "";
    for (var i = str.length - 1; i >= 0; i--) {
        s += str.charAt(i);
    }
    return s;
}