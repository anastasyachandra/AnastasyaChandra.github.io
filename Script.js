function calculateTriangle() {
    // Cek fungsi calculateTriangle 
    console.log("Fungsi Berjalan!");

    // Ambil data inputan alas
    var alas = document.getElementsByName("alas-triangle")[0].value;
    
    // Ambil data inputan alas
    var tinggi = document.getElementsByName("tinggi-triangle")[0].value;

    if(alas == "" || tinggi == "") {
        alert("Salah satu nilai belum diisi!");
        return;
    }

    if(alas < 1 || tinggi < 1) {
        alert("Nilai harus lebih besar dari 0!");
        return;
    }

    // Jumlahkan
    var luas = 0.5 * tinggi * alas;

    // tampilkan di JS
    // console.log(luas);

    // tampilkan di HTML
    document.getElementById("nilai-alas").innerHTML = "Alas = " + alas;
    document.getElementById("nilai-tinggi").innerHTML = "Tinggi = " + tinggi;
    document.getElementById("nilai-luas").innerHTML = "Luas = " + luas;
}
function calculateTriangleK() {
    // Cek fungsi calculateTriangle 
    console.log("Fungsi Berjalan!");

    // Ambil data inputan sisi1
    var sisi1 = document.getElementsByName("sisi1-triangle")[0].value;
    
    // Ambil data inputan sisi2
    var sisi2 = document.getElementsByName("sisi2-triangle")[0].value;

    // Ambil data inputan sisi3
     var sisi3 = document.getElementsByName("sisi3-triangle")[0].value;

    if( sisi1== "" || sisi2 == "" || sisi3 == "") {
        alert("Salah satu nilai belum diisi!");
        return;
    }

    if(sisi1 < 1 || sisi2 < 1 || sisi3 <1) {
        alert("Nilai harus lebih besar dari 0!");
        return;
    }

    // Jumlahkan
    var keliling = (parseInt(sisi1)) + (parseInt(sisi2)) + (parseInt(sisi3));

    // tampilkan di JS
    // console.log(luas);

    // tampilkan di HTML
    document.getElementById("nilai-sisi-1").innerHTML = "Sisi 1 = " + sisi1;
    document.getElementById("nilai-sisi-2").innerHTML = "Sisi 2 = " + sisi2;
    document.getElementById("nilai-sisi-3").innerHTML = "Sisi 3 = " + sisi3;
    document.getElementById("nilai-keliling").innerHTML = "Keliling = " + keliling;
}
function calculateJajargenjang() {
    // Cek fungsi calculateParallelogram 
    console.log("Fungsi Berjalan!");

    // Ambil data inputan alas
    var alas = document.getElementsByName("alas-jajargenjang")[0].value;
    
    // Ambil data inputan alas
    var tinggi = document.getElementsByName("tinggi-jajargenjang")[0].value;

    if(alas == "" || tinggi == "") {
        alert("Salah satu nilai belum diisi!");
        return;
    }

    if(alas < 1 || tinggi < 1) {
        alert("Nilai harus lebih besar dari 0!");
        return;
    }

    // Jumlahkan
    var luas = tinggi * alas;

    // tampilkan di JS
    // console.log(luas);

    // tampilkan di HTML
    document.getElementById("nilai-alas-jajargenjang").innerHTML = "Alas = " + alas;
    document.getElementById("nilai-tinggi-jajargenjang").innerHTML = "Tinggi = " + tinggi;
    document.getElementById("nilai-luas-jajargenjang").innerHTML = "Luas = " + luas;
}
function calculateJajargenjangK() {
    // Cek fungsi calculateParallelogram 
    console.log("Fungsi Berjalan!");

    // Ambil data inputan alas
    var alas = document.getElementsByName("nilai-alas-jajargenjang-k")[0].value;
    
    // Ambil data inputan alas
    var sisimiring = document.getElementsByName("nilai-sisimiring-jajargenjang-k")[0].value;

    if(alas == "" || sisimiring == "") {
        alert("Salah satu nilai belum diisi!");
        return;
    }

    if(alas < 1 || sisimiring < 1) {
        alert("Nilai harus lebih besar dari 0!");
        return;
    }

    // Jumlahkan
    var keliling = 2 * (parseInt(alas) + parseInt(sisimiring));

    // tampilkan di JS
    // console.log(luas);

    // tampilkan di HTML
    document.getElementById("nilai-alas-jajargenjang-k").innerHTML = "Alas = " + alas;
    document.getElementById("nilai-sisimiring-jajargenjang-k").innerHTML = "Sisi miring = " + sisimiring;
    document.getElementById("nilai-keliling-jajargenjang-k").innerHTML = "Keliling = " + keliling;
}