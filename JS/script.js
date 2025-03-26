// Function Rumus Luas Persegi
function luasPersegi(sisi) {
    return sisi * sisi;
}

function hitungLuas() {
    const sisi = parseFloat(document.getElementById("luasPersegi").value);
    if (sisi > 0) {
        document.getElementById("hasilLuas").innerHTML = `
            <p>L = S x S</p>
            <p>L = ${sisi} x ${sisi}</p>
            <p>L = ${luasPersegi(sisi)}</p>
        `;
    } else {
        alert("Masukkan angka yang benar!");
    }
}

function resetLuasPersegi() {
    document.getElementById("luasPersegi").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
}


// Function Rumus Keliling Persegi
function kelilingPersegi(sisi) {
    return 4 * sisi;
}

function hitungKeliling() {
    const sisi = parseFloat(document.getElementById("kelilingPersegi").value);
    if (sisi > 0) {
        document.getElementById("hasilKeliling").innerHTML = `
            <p>K = 4 x sisi</p>
            <p>K = 4 x ${sisi}</p>
            <p>K =  ${kelilingPersegi(sisi)}</p>
        `;
    } else {
        alert("Masukkan angka yang benar!");
    }
}

function resetKelilingPersegi() {
    document.getElementById("kelilingPersegi").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
}

// Function Rumus Luas Persegi Panjang
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function hitungluasPersegiPanjang() {
    const panjang = parseFloat(document.getElementById("panjangluasPersegiPanjang").value);
    const lebar = parseFloat(document.getElementById("lebarluasPersegiPanjang").value);
    
    if (panjang > 0 && lebar > 0) {
        document.getElementById("hasilluasPersegiPanjang").innerHTML = `
            <p>L =  P x L</p>
            <p>L = ${panjang} x ${lebar}</p>
            <p>L = ${luasPersegiPanjang(panjang, lebar)}</p>
        `;
    } else {
        alert("Masukkan angka yang benar!");
    }
}

function resetluasPersegiPanjang() {
    document.getElementById("panjangluasPersegiPanjang").value = "";
    document.getElementById("lebarluasPersegiPanjang").value = "";
    document.getElementById("hasilluasPersegiPanjang").innerHTML = "";
}

// Function Rumus Keliling Persegi Panjang
function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}

function hitungkelilingPersegiPanjang() {
    const panjang = parseFloat(document.getElementById("panjangkelilingPersegiPanjang").value);
    const lebar = parseFloat(document.getElementById("lebarkelilingPersegiPanjang").value);
    
    if (panjang > 0 && lebar > 0) {
        document.getElementById("hasilkelilingPersegiPanjang").innerHTML = `
            <p>K = 2 × (P + L)</p>
            <p>K = 2 × (${panjang} + ${lebar})</p>
            <p>K = ${kelilingPersegiPanjang(panjang, lebar)}</p>
        `;
    } else {
        alert("Masukkan angka yang benar!");
    }
}

function resetkelilingPersegiPanjang() {
    document.getElementById("panjangkelilingPersegiPanjang").value = "";
    document.getElementById("lebarkelilingPersegiPanjang").value = "";
    document.getElementById("hasilkelilingPersegiPanjang").innerHTML = "";
}