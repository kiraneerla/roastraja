// =========================
// Roast Raja v1 Script
// =========================

// Default Roast Mode

let roastMode = "soft";

// Mode Selection

function setMode(mode) {

    roastMode = mode;

    const buttons = document.querySelectorAll(".modeBtn");

    buttons.forEach(btn => {
        btn.classList.remove("selected");
    });

    if (mode === "soft") {
        buttons[0].classList.add("selected");
    }

    if (mode === "funny") {
        buttons[1].classList.add("selected");
    }

    if (mode === "savage") {
        buttons[2].classList.add("selected");
    }
}

// =========================
// Photo Upload Preview
// =========================

const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function () {
            preview.src = reader.result;
        };

        reader.readAsDataURL(file);
    }

});

// =========================
// Roast Generator
// =========================

function roastMe() {

    if (!preview.src || preview.src === window.location.href) {

        document.getElementById("result").innerHTML =
            "😂 Bro, first selfie upload cheyyi!";

        return;
    }

    const result = document.getElementById("result");

    result.innerHTML = "👑 Raja is cooking...";

    setTimeout(() => {
        result.innerHTML = "🔥 Adding masala...";
    }, 500);

    setTimeout(() => {
        result.innerHTML = "😂 Preparing roast...";
    }, 1000);

    setTimeout(() => {
        result.innerHTML = "😈 Making it savage...";
    }, 1500);

    let roasts = [];

    if (roastMode === "soft") {

        roasts = [

"😊 Bro, smile konchem ekkuva chesthe super untundi!",
"😄 Hero look practice chestunnattu undi!",
"🙂 Confidence bagundi boss!",
"😊 Selfie simple ga undhi, classy ga undhi!",
"😄 Bro, camera ki nuvvu favourite anipisthunnav!",
"🙂 Smile ki bonus marks ivvachu!",
"😊 Selfie choosthe positive vibes vastunnayi!",
"😄 Bro, casual ga hero material la unnava!",
"🙂 Camera tho friendship strong ga undhi!",
"😊 Ee pose chala natural ga undhi!",
"😄 Bro, confidence silent ga shine avthundi!",
"🙂 Selfie ki manchi energy undhi!",
"😊 Smile upgrade chesthe next level!",
"😄 Bro, camera ninnu easy ga like chesindhi!",
"🙂 Cool ga, simple ga, neat ga undhi!",
"😊 Selfie choosthe good mood vastundhi!",
"😄 Bro, style subtle ga bagundhi!",
"🙂 Nuvvu try cheyyakunda kuda decent ga unnava!",
"😊 Camera ki stress ivvakunda selfie teesav!",
"😄 Bro, ee look ki appreciation undali!",
"🙂 Smile tho selfie complete ayipothundhi!",
"😊 Natural ga undadam biggest plus!",
"😄 Bro, selfie lo confidence visible ga undhi!",
"🙂 Pose simple ayina impact undhi!",
"😊 Camera kuda happy ga click chesindhi!",
"😄 Bro, effort lekunda decent result vachindhi!",
"🙂 Selfie choosthe calm vibes vastunnayi!",
"😊 Smile add chesthe full marks!",
"😄 Bro, ee angle baaga set ayindhi!",
"🙂 Casual ga teesina selfie bagundhi!",
"😊 Camera tho understanding bagundhi!",
"😄 Bro, ee look ki compliments vastayi!",
"🙂 Selfie simple ga neat ga undhi!",
"😊 Smile tho inka shine avthav!",
"😄 Bro, style comfortable ga undhi!",
"🙂 Positive energy visible ga undhi!",
"😊 Selfie lo confidence clean ga kanipisthundhi!",
"😄 Bro, pose over ga kaadhu, perfect ga undhi!",
"🙂 Camera ki nuvvu easy customer!",
"😊 Ee selfie save cheskovachu boss!",
"😄 Bro, decent ga impress chesav!",
"🙂 Look friendly ga undhi!",
"😊 Selfie choosthe manchi feel vastundhi!",
"😄 Bro, simplicity ni maintain chestunnav!",
"🙂 Camera ninnu approve chesindhi!",
"😊 Smile ki inka scope undhi!",
"😄 Bro, selfie game improve avthundhi!",
"🙂 Natural style always works!",
"😊 Selfie choosthe chill vibes vastunnayi!",
"😄 Bro, overall ga solid attempt!"

];
    }

    if (roastMode === "funny") {

roasts = [

"😂 Bro, selfie kanna confidence ekkuva!",
"🤣 Camera kuda confuse ayipoyindi!",
"😜 Hero entry practice chestunnava bro?",
"😂 Attendance 20%, attitude 100%!",
"🤣 Ee pose choosthe photographer resign chesthadu!",
"😜 Selfie kaadhu bro, public announcement!",
"😂 Nuvvu pose ichhava leka warning ichhava?",
"🤣 Camera focus cheyyadaniki meditation chesindi!",
"😜 Ee look tho movie audition ki vellava?",
"😂 Bro, confidence CEO level!",
"🤣 Selfie choosi phone kuda restart ayindi!",
"😜 Pose ki Oscar ivvali bro!",
"😂 Nuvvu navvava leka challenge visirava?",
"🤣 Camera lens kuda shock ayindi!",
"😜 Ee angle discover chesindi NASA aa?",
"😂 Bro, pose choosthe traffic signal gurthosthundi!",
"🤣 Selfie kaadhu bro, mass entry!",
"😜 Camera battery drain ayipoyindi!",
"😂 Ee look tho principal room direct entry!",
"🤣 Nuvvu hero aa leka villain aa ani phone adigindi!",
"😜 Selfie choosi Google search open ayindi!",
"😂 Bro, pose ki separate Aadhaar undali!",
"🤣 Camera kuda 'nenu enduku' anukundi!",
"😜 Ee confidence Amazon lo dorukuthundha?",
"😂 Selfie choosthe WiFi signal kuda taggindi!",
"🤣 Nuvvu ready ayyaka camera ready kaaledhu!",
"😜 Bro, ee pose ki permit kavali!",
"😂 Selfie kaadhu bro, public service message!",
"🤣 Phone storage kuda bayapadindi!",
"😜 Hero material ani nuvve anukuntunnav kada?",
"😂 Ee look tho lecturer attendance free ga istadu!",
"🤣 Selfie choosthe mirror kuda laugh chesindi!",
"😜 Camera zoom out avvalani try chesindi!",
"😂 Bro, confidence unlimited pack!",
"🤣 Ee pose choosthe neighbours kuda alert ayyaru!",
"😜 Selfie ki background kuda embarrassed!",
"😂 Nuvvu navvagane battery percentage perigindi!",
"🤣 Camera flash kuda blink cheyyaledhu!",
"😜 Bro, pose ki GST apply cheyyali!",
"😂 Ee selfie ni museum lo pettali!",
"🤣 Camera kuda leave request pettindi!",
"😜 Selfie kaadhu bro, election campaign poster!",
"😂 Nuvvu ready ayyaka weather change ayindi!",
"🤣 Pose choosthe birds reverse lo egirayi!",
"😜 Camera focus kakunda pray chesindi!",
"😂 Bro, selfie upload chesthe server confuse ayipothundi!",
"🤣 Ee confidence stock market lo invest cheyyali!",
"😜 Nuvvu pose ichhav ante gravity kuda think chesindi!",
"😂 Selfie kaadhu bro, motivational poster!",
"🤣 Camera final ga 'sare teeseddam' anukundi!"

];

}

    if (roastMode === "savage") {

        roasts = [

"😈 Bro, camera focus cheyyadaniki rendu saarlu think chesindi!",
"💀 Selfie kaadhu bro, public challenge!",
"🔥 Confidence CEO level... planning intern level!",
"😈 Camera ninnu choosi software update adigindi!",
"💀 Bro, ee pose ki warning label undali!",
"🔥 Selfie choosi phone brightness thaggindhi!",
"😈 Mirror kuda notice period pettindhi!",
"💀 Camera flash kuda panic ayindi!",
"🔥 Nuvvu ready ayyaka weather maaripoyindhi!",
"😈 Ee confidence ki separate server kavali!",
"💀 Selfie choosthe charger kuda disconnect ayindi!",
"🔥 Pose ki GST, cess rendu apply avuthayi!",
"😈 Camera lens retirement gurinchi alochinchindhi!",
"💀 Bro, ee look ki traffic police salute chestharu!",
"🔥 Selfie kaadhu, public warning poster!",
"😈 Nuvvu navvagane WiFi signal disappear ayindi!",
"💀 Camera gallery lo strike start ayindi!",
"🔥 Pose choosthe neighbours CCTV off chesaru!",
"😈 Selfie upload chesthe cloud storage kuda bayapadindhi!",
"💀 Bro, confidence unlimited... results limited!",
"🔥 Camera focus kakunda pray chesindhi!",
"😈 Selfie choosthe Google reverse search kuda confuse ayindi!",
"💀 Nuvvu pose ichhav ante gravity reconsider chesindhi!",
"🔥 Ee angle choosthe geometry fail ayindi!",
"😈 Camera battery direct power saving mode ki vellindhi!",
"💀 Bro, selfie kanna caption better undali!",
"🔥 Phone kuda 'nenu enduku?' anukundhi!",
"😈 Ee pose ki UNESCO protection kavali!",
"💀 Selfie choosi mirror logout ayindi!",
"🔥 Bro, nuvvu trend follow avvatledhu... trend ni bayapettunnav!",
"😈 Camera focus ayyaka regret ayindi!",
"💀 Selfie choosthe keyboard automatic ga RIP type chesindhi!",
"🔥 Pose ki background kuda embarrassed!",
"😈 Nuvvu hero kaadhu bro, plot twist!",
"💀 Camera gallery lo emergency meeting pettaru!",
"🔥 Selfie choosthe birds reverse lo egirayi!",
"😈 Bro, ee confidence stock market lo list cheyyali!",
"💀 Camera lens kuda transfer request pettindhi!",
"🔥 Selfie kaadhu bro, natural disaster alert!",
"😈 Pose choosthe photographer career change chesadu!",
"💀 Bro, ee look ki subtitles kavali!",
"🔥 Camera app uninstall avvalani try chesindhi!",
"😈 Selfie choosi AI kuda answer ivvalekapoyindhi!",
"💀 Mirror reflection kuda leave lo undhi!",
"🔥 Bro, nuvvu pose ichhav ante time kuda slow ayindi!",
"😈 Selfie choosthe battery percentage taggindhi!",
"💀 Camera ki therapy sessions book cheyyali!",
"🔥 Pose choosthe GPS location marchindhi!",
"😈 Bro, ee look ni science explain cheyyaledhu!",
"💀 Camera final ga 'sare teeseddam ra' anukundhi!"

];

    }

   setTimeout(() => {

    const random =
        Math.floor(Math.random() * roasts.length);

    result.innerHTML =
        roasts[random];

    const roastLevel =
        Math.floor(Math.random() * 41) + 60;

    const savageScore =
        Math.floor(Math.random() * 5) + 6;

    document.getElementById("score").innerHTML =
        `🔥 Roast Level: ${roastLevel}%<br>😈 Savage Score: ${savageScore}/10`;

}, 2200);
}

// =========================
// Download Meme
// =========================

function downloadMeme() {

    if (!preview.src || preview.src === window.location.href) {

        alert("📸 First upload a selfie!");

        return;
    }

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 750;

    // Background

    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, 500, 750);

    // Header

    ctx.fillStyle = "#ff9800";
    ctx.font = "bold 38px Arial";
    ctx.textAlign = "center";

    ctx.fillText(
        "👑 ROAST RAJA",
        250,
        50
    );

    // Divider

    ctx.strokeStyle = "#ff9800";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(40, 80);
    ctx.lineTo(460, 80);
    ctx.stroke();

    // Photo

    ctx.drawImage(
        preview,
        75,
        100,
        350,
        300
    );

    // Roast Box

    ctx.fillStyle = "#222";
    ctx.fillRect(
        40,
        430,
        420,
        170
    );

    // Roast Title

    ctx.fillStyle = "#ff9800";
    ctx.font = "bold 26px Arial";

    ctx.fillText(
        "😂 YOUR ROAST",
        250,
        470
    );

    // Roast Text

    ctx.fillStyle = "white";
    ctx.font = "22px Arial";

    const roast =
        document.getElementById("result").innerText;

    wrapText(
        ctx,
        roast,
        250,
        520,
        350,
        32
    );

    // Footer Divider

    ctx.strokeStyle = "#444";

    ctx.beginPath();
    ctx.moveTo(40, 650);
    ctx.lineTo(460, 650);
    ctx.stroke();

    // Footer

    ctx.fillStyle = "#ff9800";
    ctx.font = "20px Arial";

    ctx.fillText(
        "Turn Your Selfie Into A Meme 🔥",
        250,
        690
    );

    ctx.fillStyle = "#888";
    ctx.font = "16px Arial";

    ctx.fillText(
        "Made with Roast Raja",
        250,
        720
    );

    // Download

    const link =
        document.createElement("a");

    link.download =
        "RoastRaja.png";

    link.href =
        canvas.toDataURL();

    link.click();

}

// =========================
// Text Wrapper
// =========================

function wrapText(
    ctx,
    text,
    x,
    y,
    maxWidth,
    lineHeight
) {

    const words =
        text.split(" ");

    let line = "";

    for (let n = 0; n < words.length; n++) {

        let testLine =
            line + words[n] + " ";

        let metrics =
            ctx.measureText(testLine);

        let testWidth =
            metrics.width;

        if (
            testWidth > maxWidth &&
            n > 0
        ) {

            ctx.fillText(
                line,
                x,
                y
            );

            line =
                words[n] + " ";

            y += lineHeight;

        } else {

            line =
                testLine;

        }

    }

    ctx.fillText(
        line,
        x,
        y
    );

}

// =========================
// Share Meme
// =========================

async function shareMeme() {

    const canvas =
        document.getElementById("canvas");

    canvas.toBlob(async function (blob) {

        const file =
            new File(
                [blob],
                "RoastRaja.png",
                {
                    type: "image/png"
                }
            );

        if (
            navigator.canShare &&
            navigator.canShare({
                files: [file]
            })
        ) {

            try {

                await navigator.share({

                    title: "Roast Raja",

                    text: "😂 Check out my Roast Raja meme!",

                    files: [file]

                });

            } catch (e) {

                console.log(e);

            }

        } else {

            alert(
                "📥 Sharing is not supported on this device. Please save the meme first!"
            );

        }

    });

}

// Default Mode

setMode("soft");

async function aiRoastMe() {

    const result = document.getElementById("result");

    if (!preview.src || preview.src === window.location.href) {
        result.innerHTML = "📸 First upload a selfie!";
        return;
    }

    result.innerHTML = "🤖 AI is cooking a roast...";

    try {

      const response = await fetch("https://roastraja-ai.onrender.com/roast", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    imageBase64: preview.src.split(",")[1]
  })
});

        const data = await response.json();

        console.log(data);

       if (data.roast) {
    result.innerHTML = data.roast;
} else {
    result.innerHTML = "⚠️ AI busy. Using local roast...";
    
    setTimeout(() => {
        roastMe(); // existing local roast function
    }, 1000);
}
    } catch (error) {

    console.error(error);

    result.innerHTML =
        "⚠️ AI unavailable. Using local roast...";

    setTimeout(() => {
        roastMe();
    }, 1000);

}
}
