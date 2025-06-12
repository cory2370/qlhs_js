let danhsachhs = [];
let danhsachreset = [];
function showdata(danhsach) {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  danhsach.forEach((item) => {
    const tr = document.createElement("tr");
    const mahstd = document.createElement("td");
    const tenhstd = document.createElement("td");
    const tuoihstd = document.createElement("td");
    const gioitinhhstd = document.createElement("td");
    const chieucaohstd = document.createElement("td");
    const cannanghstd = document.createElement("td");
    const lophstd = document.createElement("td");
    const diemtbhstd = document.createElement("td");

    mahstd.textContent = item.ma;
    tenhstd.textContent = item.ten;
    tuoihstd.textContent = item.tuoi;
    gioitinhhstd.textContent = item.gioitinh;
    chieucaohstd.textContent = item.chieucao;
    cannanghstd.textContent = item.cannang;
    lophstd.textContent = item.lop;
    diemtbhstd.textContent = item.diemtb;

    tr.append(
      mahstd,
      tenhstd,
      gioitinhhstd,
      tuoihstd,
      chieucaohstd,
      cannanghstd,
      lophstd,
      diemtbhstd
    );
    tbody.append(tr);
  });
}

function quanlyhocsinh() {
  const mahs = document.getElementById("mahocsinh").value;
  const tenhs = document.getElementById("tenhocsinh").value;
  const tuoihs = document.getElementById("tuoihocsinh").value;
  const gioitinhhs = document.getElementById("chongioitinh").value;
  const chieucaohs = document.getElementById("chieucaohocsinh").value;
  const cannanghs = document.getElementById("cannanghocsinh").value;
  const lophs = document.getElementById("lophocsinh").value;
  const diemtbhs = document.getElementById("diemtbhocsinh").value;
  let check = false;

  let thongtinhs = {
    ma: mahs,
    ten: tenhs,
    tuoi: tuoihs,
    gioitinh: gioitinhhs,
    chieucao: chieucaohs,
    cannang: cannanghs,
    lop: lophs,
    diemtb: diemtbhs,
  };

  danhsachhs.forEach((item) => {
    if (item.ma === mahs) {
      check = true;
    }
  });

  if (check === false) {
    danhsachhs.push(thongtinhs);
    danhsachreset.push(thongtinhs);
    showdata(danhsachhs);
  } else if (check === true) {
    alert("Thong tin khong hop le");
  }
}

function lochocsinh() {
  const luachon = document.getElementById("luachon").value;
  let danhsachhsfilter = [];
  if (luachon == "luachonlop8A") {
    danhsachhsfilter = danhsachhs.filter((item) => item.lop === "8A");
  } else if (luachon == "luachonlop8B") {
    danhsachhsfilter = danhsachhs.filter((item) => item.lop === "8B");
  } else if (luachon == "luachontatca") {
    danhsachhsfilter = danhsachhs;
  }
  showdata(danhsachhsfilter);
}

const sortNameAZ = (list) => {
  return list.sort((a, b) => {
    if (a.ten < b.ten) return -1;
    if (a.ten > b.ten) return 1;
    return 0;
  });
};

const sortNameZA = (list) => {
  return list.sort((a, b) => {
    if (a.ten > b.ten) return -1;
    if (a.ten < b.ten) return 1;
    return 0;
  });
};

function sapxepten() {
  let danhsachsapxep = danhsachhs;

  if (sapxep == "sapXepTenASC") {
    danhsachsapxep = sortNameAZ(danhsachsapxep);
  } else if (sapxep == "sapXepTenDEC") {
    console.log(danhsachsapxep);
    danhsachsapxep = sortNameZA(danhsachsapxep);
  }

  showdata(danhsachsapxep);
}

function sapxepdtb() {
  let danhsachsort = danhsachhs.sort((a, b) => b.diemtb - a.diemtb)

  if (danhsachsort = danhsachhs.sort((a, b) => a.diemtb - b.diemtb)) {
    danhsachsort = danhsachhs.sort((a, b) => b.diemtb - a.diemtb);
  } else (danhsachsort = danhsachhs.sort((a, b) => a.diemtb - b.diemtb))
  showdata(danhsachsort);
}

function reset() {
  showdata(danhsachreset);
}
