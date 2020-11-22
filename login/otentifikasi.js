function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if( username == "admin" && password == "admin123") {
        alert("login berhasil!");
        pindah = window.location.replace("utama.html")
        return pindah;
    } else {
        alert("Username / password salah!")
        return false;
    }
}