var your_name = false;
var count_all_div = 0;
function refresh() {
    setTimeout(() => { document.getElementById("all_suggested").style.visibility = "hidden"; }, 0);
    document.getElementById("all_suggested").style.opacity = 0;
    document.getElementById("suggested").style.opacity = 0;
    document.getElementById("inp").focus();
    setTimeout(() => {
        document.getElementById("all_suggested").style.visibility = "visible";
        document.getElementById("all_suggested").style.opacity = 1;
        document.getElementById("suggested").style.opacity = 1;
    }, 1500);
}
function open_image(This) {
    document.getElementById('input_image').src = window.URL.createObjectURL(This.files[0]);
    document.getElementById('input_image').style.display = 'block';
    document.getElementById('Is_open').innerHTML = 'The Image is opend';
    var msg = new SpeechSynthesisUtterance();
    msg.text = "The Image is opend";
    window.speechSynthesis.speak(msg);
}
function choose_suggested(thisdiv) {
    count_all_div++;
    refresh();
    enter(thisdiv.innerHTML);
    setTimeout(() => { thisdiv.style.display = "none"; }, 800);
    if (count_all_div == 21) {
        close_suggested(2);
    }

}
function close_suggested(come) {
    document.getElementById("box").style.height = "79%";
    document.getElementById("suggested").style.display = "none";
    if (come == 1) {
        document.getElementById("open_suggested").style.opacity = "1";
        document.getElementById("open_suggested").style.visibility = "visible";
    }
    else {
        document.getElementById("box").style.height = "84%";
    }
}
function open_suggested() {
    document.getElementById("box").style.height = "72%";
    document.getElementById("suggested").style.display = "block";
    document.getElementById("open_suggested").style.opacity = "0";
    document.getElementById("open_suggested").style.visibility = "hidden";
}
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
// this for speech button
function startDictation() {
    var connect = check_is_connect();
    if (window.hasOwnProperty('webkitSpeechRecognition') && connect) {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";
        recognition.start();
        document.getElementById("audio_5").play()
        recognition.onresult = function (e) {
            var val = e.results[0][0].transcript;
            recognition.stop();
            enter(val)
        };
        recognition.onerror = function (e) {
            recognition.stop();
        }
    }
}

function MakeEnter(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("Sendbutton").click();
    }
}
function enter(word) {
    if (word == 1)
        var val = document.getElementById("inp").value;
    else val = word
    if (val != "") {
        var answer_result = answer_question(val);
        var question = "<div class='question h4'><label >" + val +
            "</label><img src='images//manx.png' width='30' height='25' style='float: right'></div>"
        var answer = "<div class='answer h4'><img src='images//icon.png' width='30' height='30' \
                style='float: left;margin-left:-8px;margin-right:5px'>\
            <label >"+ answer_result + "</label></div>";
        document.getElementById("box").innerHTML += question;
        document.getElementById("box").innerHTML += answer;
        document.getElementById("inp").value = "";
        document.getElementById("box").scrollTo(0, document.getElementById("box").scrollHeight);
        play();
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        // msg.voice = voices[5]; 
        msg.volume = 1; // From 0 to 1
        msg.rate = 1; // From 0.1 to 10
        msg.pitch = 0; // From 0 to 2
        msg.lang = 'en-US';
        msg.text = answer_result;
        if (val == "open")
            msg.text = "Choose an image";
        window.speechSynthesis.speak(msg);

    }
}
function _0x2f81() { var _0x92fc5d = ['good\x20bye', 'substring', 'He\x20is\x20your\x20friend', 'thank\x20you', 'length', 'my\x20name\x20is\x20Salhab\x20Assistant\x0a\x20what\x20about\x20you?', 'The\x20music\x20stoped', '\x20I\x20don\x27t\x20understand\x20you\x20!!\x0abut\x20see\x20this\x20result', 'green', 'You\x20are\x20Child\x20\x20', 'sure\x20,\x20what\x27s\x20up?', 'what\x20are\x20you\x20doing', 'You\x20are\x20Middle\x20Age\x20Adult\x20\x20', 'what\x27s\x20your\x20name', 'That\x27s\x20great\x20✨', '599308vBQHxN', '328902kucjeh', 'I\x20am\x20fine', 'who\x20is\x20the\x20creator\x20of\x20you', 'bye', 'I\x27m\x20fine', 'I\x20am\x20speaking\x20with\x20you\x20', 'how\x20old\x20are\x20you', 'music', 'welcome', 'I\x20am\x20fine\x20,\x20what\x20about\x20you\x20?', 'click', 'You\x20are\x20Toddler\x20', 'The\x20result\x20=\x20', 'thanks', 'what\x27s\x20your\x20favorite\x20color', 'calculate', 'Salhab\x20assistant', 'trim', 'beautiful\x20name', 'search', 'Abdullah', 'pink', '234GkuBDZ', 'The\x20programmer\x20\x20Abdullah\x20Salhab\x20', 'can\x20you\x20help\x20me', 'The\x20search\x20opened\x20!', 'You\x20are\x20welcome\x20', '244990BIhdlR', 'what\x20is\x20my\x20name', '20PuzHfb', '5810448CXpEPq', 'play', 'getElementById', '477988CpfaqE', 'http://google.com/search?q=', 'black', 'beautiful\x20color', 'start\x20music', 'see\x20you\x20later', 'play\x20music', '157563VLMBsb', 'how\x20are\x20you', 'hello', 'I\x20am\x20good', 'pause', 'Green\x20,what\x20about\x20you?\x20', 'I\x20answer\x20the\x20best\x20I\x20can', '4aONSSg', 'open', 'listen\x20to\x20music', 'I\x20don\x27t\x20know\x20,but\x20I\x20sure\x20it\x20is\x20beautiful\x20name', 'blue', 'red', 'image_open', 'I\x20need\x20to\x20ask\x20you', 'where\x20are\x20you', 'what\x20is\x20your\x20favorite\x20color', '3427355YGTKWA']; _0x2f81 = function () { return _0x92fc5d; }; return _0x2f81(); } (function (_0x32a4ec, _0xa77017) { var _0x1b6403 = _0x3bf3, _0x396928 = _0x32a4ec(); while (!![]) { try { var _0x1c6a15 = -parseInt(_0x1b6403(0x14f)) / 0x1 + -parseInt(_0x1b6403(0x16d)) / 0x2 * (-parseInt(_0x1b6403(0x178)) / 0x3) + parseInt(_0x1b6403(0x17f)) / 0x4 * (parseInt(_0x1b6403(0x189)) / 0x5) + parseInt(_0x1b6403(0x150)) / 0x6 + -parseInt(_0x1b6403(0x171)) / 0x7 + -parseInt(_0x1b6403(0x16e)) / 0x8 + -parseInt(_0x1b6403(0x166)) / 0x9 * (-parseInt(_0x1b6403(0x16b)) / 0xa); if (_0x1c6a15 === _0xa77017) break; else _0x396928['push'](_0x396928['shift']()); } catch (_0x21ca1f) { _0x396928['push'](_0x396928['shift']()); } } }(_0x2f81, 0x7c29e)); function _0x3bf3(_0x384c56, _0x393b10) { var _0x2f8157 = _0x2f81(); return _0x3bf3 = function (_0x3bf344, _0xc50b15) { _0x3bf344 = _0x3bf344 - 0x146; var _0x399405 = _0x2f8157[_0x3bf344]; return _0x399405; }, _0x3bf3(_0x384c56, _0x393b10); } function answer_question(_0x33e62a) { var _0x31ea83 = _0x3bf3, _0x4bf307 = _0x33e62a[_0x31ea83(0x161)](); if (_0x4bf307[_0x31ea83(0x18b)](0x0, 0x6) == _0x31ea83(0x163)) { var _0x3caf1c = _0x4bf307['substring'](0x7, _0x4bf307['length']); return window[_0x31ea83(0x180)](_0x31ea83(0x172) + _0x3caf1c), _0x31ea83(0x169); } if (_0x4bf307[_0x31ea83(0x18b)](0x0, 0x9) == _0x31ea83(0x15f)) { var _0x3caf1c = _0x4bf307[_0x31ea83(0x18b)](0xa, _0x4bf307[_0x31ea83(0x18e)]); return _0x31ea83(0x15c) + eval(_0x3caf1c); } if (_0x4bf307['substring'](0x0, 0x4) == 'open') return document['getElementById'](_0x31ea83(0x185))[_0x31ea83(0x15a)](), 'Choose\x20an\x20image\x20<br>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x27input_image\x27\x20alt=\x27your\x20image\x27\x20width=\x27300px\x27\x20/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20id=\x27Is_open\x27></label>'; if (parseInt(_0x4bf307) >= 0x2 && parseInt(_0x4bf307) <= 0x4) return _0x31ea83(0x15b); else { if (parseInt(_0x4bf307) >= 0x5 && parseInt(_0x4bf307) <= 0xc) return _0x31ea83(0x149); else { if (parseInt(_0x4bf307) >= 0xd && parseInt(_0x4bf307) <= 0x13) return 'You\x20are\x20Teen\x20'; else { if (parseInt(_0x4bf307) >= 0x14 && parseInt(_0x4bf307) <= 0x27) return 'You\x20are\x20Adult\x20\x20'; else { if (parseInt(_0x4bf307) >= 0x28 && parseInt(_0x4bf307) <= 0x3b) return _0x31ea83(0x14c); else { if (parseInt(_0x4bf307) >= 0x3c) return 'You\x20are\x20a\x20wise\x20man\x20'; } } } } } switch (_0x4bf307) { case _0x31ea83(0x179): return _0x31ea83(0x159); case _0x31ea83(0x181): case _0x31ea83(0x175): case _0x31ea83(0x177): document[_0x31ea83(0x170)]('music')[_0x31ea83(0x16f)](); return 'The\x20music\x20started'; case 'stop\x20music': document[_0x31ea83(0x170)](_0x31ea83(0x157))[_0x31ea83(0x17c)](); return _0x31ea83(0x146); case _0x31ea83(0x152): return _0x31ea83(0x167); case _0x31ea83(0x156): return 'a\x20lot\x20I\x20don\x27t\x20know\x20\x0a\x20what\x20about\x20your\x20age?'; case 'hi': return 'hi'; case _0x31ea83(0x17a): return _0x31ea83(0x17a); case _0x31ea83(0x158): return _0x31ea83(0x158); case 'what\x20is\x20your\x20name': case _0x31ea83(0x14d): your_name = !![]; return _0x31ea83(0x18f); case _0x31ea83(0x151): case _0x31ea83(0x154): case _0x31ea83(0x17b): case 'I\x27m\x20good': return _0x31ea83(0x14e); case _0x31ea83(0x164): case 'abdullah': return _0x31ea83(0x162); case _0x31ea83(0x148): case _0x31ea83(0x184): case _0x31ea83(0x165): case _0x31ea83(0x183): case _0x31ea83(0x173): return _0x31ea83(0x174); case 'goodbye': case _0x31ea83(0x18a): case _0x31ea83(0x153): case _0x31ea83(0x176): return 'see\x20you\x20later\x20❤'; case _0x31ea83(0x15d): case _0x31ea83(0x18d): return _0x31ea83(0x16a); case _0x31ea83(0x14b): return _0x31ea83(0x155); case _0x31ea83(0x188): case _0x31ea83(0x15e): return _0x31ea83(0x17d); case _0x31ea83(0x187): return 'I\x20am\x20at\x20your\x20device\x20'; case _0x31ea83(0x186): case _0x31ea83(0x168): return _0x31ea83(0x14a); case 'really': return _0x31ea83(0x17e); case _0x31ea83(0x16c): case 'what\x27s\x20my\x20name': return _0x31ea83(0x182); case _0x31ea83(0x160): return _0x31ea83(0x18c); default: return your_name ? (your_name = ![], _0x31ea83(0x162)) : (window[_0x31ea83(0x180)]('http://google.com/search?q=' + _0x4bf307), _0x31ea83(0x147)); } }
// if there is internet
function check_is_connect() {
    var ifConnected = window.navigator.onLine;
    if (ifConnected) {
        return true;
    } else {
        alert("You should connect with the internet");
        return false;
    }
}
var ifConnected = window.navigator.onLine;
if (ifConnected) {
    document.getElementById("checkOnline").innerHTML = "Online <img src='images/online.png' width='30' height='30'> ";
    document.getElementById("checkOnline").style.color = "lightblue";
} else {
    document.getElementById("checkOnline").innerHTML = "Offline <img src='images/offline.png' width='30' height='30'> ";
    document.getElementById("checkOnline").style.color = "red";
}

setInterval(function () {

    var ifConnected = window.navigator.onLine;
    if (ifConnected) {
        document.getElementById("checkOnline").innerHTML = "Online <img src='images/online.png' width='30' height='30'> ";
        document.getElementById("checkOnline").style.color = "lightblue";
    } else {
        document.getElementById("checkOnline").innerHTML = "Offline <img src='images/offline.png' width='30' height='30'> ";
        document.getElementById("checkOnline").style.color = "red";
    }

}, 1000);

// show and hide when the screen small
function showLeft() {
    document.getElementById("LeftSection").style.display = "block";
    document.getElementById("rightSection").style.display = "none";
}
function showRight() {
    document.getElementById("LeftSection").style.display = "none";
    document.getElementById("rightSection").style.display = "block";
}

// prevent right click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);

document.addEventListener("keydown", (e) => {
    // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
    // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
    // THIS WILL ONLY DISABLE CONTROL AND F12
    if (e.ctrlKey || e.keyCode == 123) {
        e.stopPropagation();
        e.preventDefault();
    }
});
