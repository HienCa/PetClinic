

checkInputTK = function () {
    const TK = document.getElementById('TK').value;

    if (TK.length < 5 || TK.length > 50  ) {
        document.getElementById('TK').style.color = "red";

    }
    else {
        document.getElementById('TK').style.color = "#fff";

    }
    
}

checkInputMK = function () {
    const MK = document.getElementById('MK').value;

    
    if ( MK.length < 8 || MK.length > 50 ) {
        document.getElementById('MK').style.color = "red";

    }
    else {
        document.getElementById('MK').style.color = "#fff";

    }
    
}

checkInputMKC = function () {
    const MK = document.getElementById('MKC').value;

    
    if ( MK.length < 8 || MK.length > 50 ) {
        document.getElementById('MKC').style.color = "red";

    }
    else {
        document.getElementById('MKC').style.color = "#fff";

    }
    
}

checkSubmitForm = function () {
    const TK = document.getElementById('TK').value;
    //const MKC = document.getElementById('MKC').value;
    const MK = document.getElementById('MK').value;

    
    if ( TK.length < 5 || TK.length > 50 ) {
        document.getElementById('LTK').style.color = "red";
        document.getElementById('LTK').style.innerHTML = "Vui lòng nhập từ 5 đến 50  ký tự";
        
    }
    if ( MK.length < 8 || MK.length > 50  ) {
        document.getElementById('MK').style.color = "red";
        document.getElementById('LMK').style.innerHTML = "Vui lòng nhập từ 5 đến 50  ký tự";

        // document.getElementById('MKC').style.color = "red";
        // document.getElementById('LMK').style.innerHTML = "Vui lòng nhập từ 5 đến 50  ký tự";

    }
    else{
        document.getElementById('LMK').submit();
        
    }
    
    
};

checkNumberSDT = function () {
    var sdt = document.getElementById('sdt').value;

    if (isNaN(sdt ) ) {
        document.getElementById('sdt').style.color = "red";
    }
    if ( sdt.length > 50)  {
        document.getElementById('sdt').style.color = "red";
    }
    else {
        document.getElementById('sdt').style.color = "#fff";

    }
    
    
    
};
checkNumberCCCD = function () {

    var cccd = document.getElementById('cccd').value;
    
    if (isNaN(cccd) || cccd.length > 50) {
        document.getElementById('cccd').style.color = "red";
    }
    if ( cccd.length > 50) {
        document.getElementById('cccd').style.color = "red";
    }
    else {
        document.getElementById('cccd').style.color = "#fff";

    }
    
};
