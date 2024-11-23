function chuyenDoi() {
    const doC = document.getElementById('inputC').value; //Lấy giá trị nhập từ ô có id là "inputC" trong html
    const doF = (doC * 9 / 5) + 32;
    document.getElementById('outputF').value = doF;

}
