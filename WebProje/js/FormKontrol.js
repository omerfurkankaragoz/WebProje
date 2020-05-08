function GirisKontrol() {
    if (document.Giris.kadi.value == "g191210381" && document.Giris.sifre.value == "1234") {
        window.location.href="Admin.html";
        alert("Hoşgeldiniz g191210381")
    }
    else {
        alert("Kullanıcı adı ve şifre uyuşmuyor")
    }
    
};
function YorumKontrol(frm) {
    var adi = frm.adi.value;
    var soyadi = frm.soyadi.value;
    var email = frm.email.value;
    var mesaj = frm.mesaj.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (adi.length < 2) {
        document.getElementById("adikontrol").innerHTML = "Adınızı 2 karakter az olamaz";
        document.getElementById("adikontrol").style.color = "red";
        return false;
    }
    else {
        document.getElementById("adikontrol").innerHTML = "Uygundur";
        document.getElementById("adikontrol").style.color = "green";
    }
    if (soyadi.length < 2) {
        document.getElementById("soyadikontrol").innerHTML = "Soyadınız 2 karakter az olamaz";
        document.getElementById("soyadikontrol").style.color = "red";
        return false;
    }
    else {
        document.getElementById("soyadikontrol").innerHTML = "Uygundur";
        document.getElementById("soyadikontrol").style.color = "green";
    }
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("emailkontrol").innerHTML = "Lütfen Uygun email adresi giriniz";
        document.getElementById("emailkontrol").style.color = "red";
        return false;
    }
    else {
        document.getElementById("emailkontrol").innerHTML = "email uygundur";
        document.getElementById("emailkontrol").style.color = "green";
    }
    if (mesaj.length < 10 || mesaj.length > 100) {
        document.getElementById("mesajkontrol").innerHTML = "Lütfen 10 ile 100 hece arası bilgi giriniz";
        document.getElementById("mesajkontrol").style.color = "red";
        return false;
    }
    else {
        document.getElementById("mesajkontrol").innerHTML = "Uygundur";
        document.getElementById("mesajkontrol").style.color = "green";

    alert("yorumunuz oluşturuldu");
    return true;
  }
};
