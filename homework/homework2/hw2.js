
document.getElementById("name").addEventListener("blur", checkName);
document.getElementById("pwd").addEventListener("blur", checkPwd);
document.getElementById("date").addEventListener("blur", checkDate);

function checkName() {
    let theNameObj = document.getElementById("name");
    let theNameObjVal = theNameObj.value;
    let sp = document.getElementById("namesp");
    let re = /^[\u4E00-\u9FFF]{2,}$/;

    if (!theNameObjVal) {
        sp.innerHTML = "<img src='images/error.png'><span class='sper'>請輸入姓名</span>";
    }
    else if (theNameObjVal.length < 2) {
        sp.innerHTML = "<img src='images/error.png'><span class='sper'>請至少輸入2個字</span>";
    }
    else if (re.test(theNameObjVal)) {
        sp.innerHTML = "<img class='img' src='images/correct.png'><span class='spco' >正確</span>";
    }
    else {
        sp.innerHTML = "<img src='images/error.png'><span class='sper'>輸入錯誤</span>";
    }
}

function checkPwd() {
    let thePwdObj = document.getElementById("pwd");
    let thePwdObjVal = thePwdObj.value;
    let sp = document.getElementById("pwdsp");
    let re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/

    if (!thePwdObjVal) {
        sp.innerHTML = "<img src='images/error.png'><span class='sper'>請輸入密碼</span>";
    }
    else if (thePwdObjVal.length < 6) {
        sp.innerHTML = "<img src='images/error.png'><span class='sper'>請至少輸入6個字</span>";
    }
    else if (re.test(thePwdObjVal)) {
        sp.innerHTML = "<img class='img' src='images/correct.png'><span class='spco'>正確</span>";
    } else {
        sp.innerHTML = "<img src='images/error.png'><span class='sper'>輸入格式錯誤</span>";
    }
}

function checkDate() {
    let theDateObj = document.getElementById("date");
    let theDateObjVal = theDateObj.value;
    let sp = document.getElementById("datesp");
    let re = /^\d{4}\/\d{2}\/\d{2}$/;

    let s = theDateObjVal.split("/");
    let checkd = new Date(theDateObjVal);
    let y = checkd.getFullYear();
    let m = checkd.getMonth() + 1;
    let d = checkd.getDate();

    if (!theDateObjVal) {
        sp.innerHTML = "<img src='images/error.png'><span class='sper'>請輸入日期</span>";
    }
    else if (!re.test(theDateObjVal)) {
        sp.innerHTML = "<img src='images/error.png'><span class='sper'>輸入格式錯誤</span>";
    }
    else if (s[0] == y && s[1] == m && s[2] == d) {
        sp.innerHTML = "<img class='img' src='images/correct.png'><span class='spco'>正確</span>";
    }
    else {
        sp.innerHTML = "<img src='images/error.png'><span class='sper'>輸入的日期不存在</span>";
    }
}
