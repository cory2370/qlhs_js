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

let sortOrder = 'ASC'
const sortCustom = (arrayObject, sortField, sortOrder) => {
  if (sortOrder === "DESC") {
    return arrayObject.sort((a, b) => {
      if (a[sortField] > b[sortField]) return -1
      if (a[sortField] < b[sortField]) return 1
      return 0
    })
  } else {
    return arrayObject.sort((a, b) => {
      if (a[sortField] < b[sortField]) return -1
      if (a[sortField] > b[sortField]) return 1
      return 0  
    })
  }
}

const handleSort = (sortField) => {
  danhsachhssort = danhsachhs
  danhsachhssort = sortCustom(danhsachhssort, sortField, sortOrder);
  showdata(danhsachhssort)
  sortOrder = sortOrder === "DESC" ? "ASC" : "DESC"
}

function reset() {
  showdata(danhsachreset);
}

function kiemTraXuatHien() {
  const tbody = document.getElementById('tbody2')
  let xacxuat = document.getElementById("xacXuat")
  const tr = document.createElement('tr')
  let d1 = document.createElement('td')
  let d2 = document.createElement('td')
  let d3 = document.createElement('td')
  let d4 = document.createElement('td')
  let d5 = document.createElement('td')
  let d6 = document.createElement('td')
  let d7 = document.createElement('td')
  let d8 = document.createElement('td')
  let d9 = document.createElement('td')
  let d10 = document.createElement('td')

  const tr2 = document.createElement('tr')
  let d1a = document.createElement('td')
  let d2a = document.createElement('td')
  let d3a = document.createElement('td')
  let d4a = document.createElement('td')
  let d5a = document.createElement('td')
  let d6a = document.createElement('td')
  let d7a = document.createElement('td')
  let d8a = document.createElement('td')
  let d9a = document.createElement('td')
  let d10a = document.createElement('td')

  d1.textContent = 0
  d2.textContent = 0
  d3.textContent = 0
  d4.textContent = 0
  d5.textContent = 0
  d6.textContent = 0
  d7.textContent = 0
  d8.textContent = 0
  d9.textContent = 0
  d10.textContent = 0

  danhsachhs.forEach(item => {
    if (item.diemtb == 1) {
      d1.textContent = parseInt(d1.textContent) + 1
    }
    if (item.diemtb == 2) {
      d2.textContent = parseInt(d2.textContent) + 1
    }
    if (item.diemtb == 3) {
      d3.textContent = parseInt(d3.textContent) + 1
    }
    if (item.diemtb == 4) {
      d4.textContent = parseInt(d4.textContent) + 1
    }
    if (item.diemtb == 5) {
      d5.textContent = parseInt(d5.textContent) + 1
    }
    if (item.diemtb == 6) {
      d6.textContent = parseInt(d6.textContent) + 1
    }
    if (item.diemtb == 7) {
      d7.textContent = parseInt(d7.textContent) + 1
    }
    if (item.diemtb == 8) {
      d8.textContent = parseInt(d8.textContent) + 1
    }
    if (item.diemtb == 9) {
      d9.textContent = parseInt(d9.textContent) + 1
    }
    if (item.diemtb == 10) {
      d10.textContent = parseInt(d10.textContent) + 1
    }
  });
  let tongSo = parseInt(d1.textContent) + parseInt(d2.textContent) + parseInt(d3.textContent) + parseInt(d4.textContent) + parseInt(d5.textContent) + parseInt(d6.textContent) + parseInt(d7.textContent) + parseInt(d8.textContent) + parseInt(d9.textContent) + parseInt(d10.textContent)
  d1a.textContent = (parseFloat(d1.textContent) / tongSo) * 100 + "%"
  d2a.textContent = (parseFloat(d2.textContent) / tongSo) * 100 + '%'
  d3a.textContent = (parseFloat(d3.textContent) / tongSo) * 100 + "%"
  d4a.textContent = (parseFloat(d4.textContent) / tongSo) * 100 + "%"
  d5a.textContent = (parseFloat(d5.textContent) / tongSo) * 100 + "%"
  d6a.textContent = (parseFloat(d6.textContent) / tongSo) * 100 + "%"
  d7a.textContent = (parseFloat(d7.textContent) / tongSo) * 100 + "%"
  d8a.textContent = (parseFloat(d8.textContent) / tongSo) * 100 + "%"
  d9a.textContent = (parseFloat(d9.textContent) / tongSo) * 100 + "%"
  d10a.textContent = (parseFloat(d10.textContent) / tongSo) * 100 + "%"

  tr.append(d1, d2, d3, d4, d5, d6, d7, d8, d9, d10)
  tr2.append(d1a, d2a, d3a, d4a, d5a, d6a, d7a, d8a, d9a, d10a)
  tbody.append(tr, tr2)
}


