let danhsachhs = []

function help() {
    danhsachhs = [
  {
    "ma": "48A44",
    "ten": "a",
    "tuoi": "10",
    "gioitinh": "nam",
    "chieucao": "6",
    "cannang": "156",
    "lop": "8A",
    "diemtb": "10"
  },
  {
    "ma": "48A445",
    "ten": "b",
    "tuoi": "10",
    "gioitinh": "nam",
    "chieucao": "6",
    "cannang": "156",
    "lop": "8A",
    "diemtb": "10"
  },
  {
    "ma": "48A4453",
    "ten": "a",
    "tuoi": "10",
    "gioitinh": "nam",
    "chieucao": "6",
    "cannang": "156",
    "lop": "8A",
    "diemtb": "8"
  }
]
alert("Đã thêm vào")
}
 
function quanlyhocsinh() {
    const mahs = document.getElementById('mahocsinh').value
    const tenhs = document.getElementById('tenhocsinh').value
    const tuoihs = document.getElementById('tuoihocsinh').value
    const gioitinhhs = document.getElementById('chongioitinh').value
    const chieucaohs = document.getElementById('chieucaohocsinh').value
    const cannanghs = document.getElementById('cannanghocsinh').value
    const lophs = document.getElementById('lophocsinh').value
    const diemtbhs = document.getElementById('diemtbhocsinh').value

    const tbody = document.getElementById('tbody')
    let check = false

    const tr = document.createElement('tr')
    const mahstd = document.createElement('td')
    const tenhstd = document.createElement('td')
    const tuoihstd = document.createElement('td')
    const gioitinhhstd = document.createElement('td')
    const chieucaohstd = document.createElement('td')
    const cannanghstd = document.createElement('td')
    const lophstd = document.createElement('td')
    const diemtbhstd = document.createElement('td')

    mahstd.textContent = mahs
    tenhstd.textContent = tenhs
    tuoihstd.textContent = tuoihs
    gioitinhhstd.textContent = gioitinhhs
    chieucaohstd.textContent = chieucaohs
    cannanghstd.textContent = cannanghs
    lophstd.textContent = lophs
    diemtbhstd.textContent = diemtbhs

    let thongtinhs = {
        ma: mahs,
        ten: tenhs,
        tuoi: tuoihs,
        gioitinh: gioitinhhs,
        chieucao: chieucaohs,
        cannang: cannanghs,
        lop: lophs,
        diemtb: diemtbhs
    }

    danhsachhs.forEach (item => {
        if (item.ma === mahs) {
            check = true
        }
    })

    if (check === false) {
        tr.append(mahstd, tenhstd, gioitinhhstd, tuoihstd, chieucaohstd, cannanghstd, lophstd, diemtbhstd)
        tbody.append(tr)
        danhsachhs.push(thongtinhs)
    }
    else if (check === true) {
        alert("Thong tin khong hop le")
    }
}

function lochocsinh() {
    const luachon = document.getElementById('luachon').value
    let danhsachhsfilter = []
    if (luachon == 'luachonlop8A') {
        danhsachhsfilter = danhsachhs.filter(item => item.lop === '8A')
    }
    else if (luachon == 'luachonlop8B') {
        danhsachhsfilter = danhsachhs.filter(item => item.lop === '8B')
    }
    else if (luachon == 'luachontatca') {
        danhsachhsfilter = danhsachhs
    }
    const tbody = document.getElementById('tbody2')
    tbody.innerHTML = ''

    danhsachhsfilter.forEach(item => {
        const tr = document.createElement('tr')
        const mahstd = document.createElement('td')
        const tenhstd = document.createElement('td')
        const tuoihstd = document.createElement('td')
        const gioitinhhstd = document.createElement('td')
        const chieucaohstd = document.createElement('td')
        const cannanghstd = document.createElement('td')
        const lophstd = document.createElement('td')
        const diemtbhstd = document.createElement('td')

        mahstd.textContent = item.ma
        tenhstd.textContent = item.ten
        tuoihstd.textContent = item.tuoi
        gioitinhhstd.textContent = item.gioitinh
        chieucaohstd.textContent = item.chieucao
        cannanghstd.textContent = item.cannang
        lophstd.textContent = item.lop
        diemtbhstd.textContent = item.diemtb

        tr.append(mahstd, tenhstd, gioitinhhstd, tuoihstd, chieucaohstd, cannanghstd, lophstd, diemtbhstd)
        tbody.append(tr)
        })
}

const sortNameAZ = (danhsachhs) => {
  return danhsachhs.sort((a,b) => {
    if(a.ten < b.ten)
      return -1
    if(a.ten > b.ten)
      return 1
    return 0
  })
}

const sortNameZA = (danhsachhs) => {
  return danhsachhs.sort((a,b) => {
    if(a.ten > b.ten)
      return -1
    if(a.ten < b.ten)
      return 1
    return 0
  })
}

function sapxephocsinh() {
    const sapxep = document.getElementById('sapxep').value
    let danhsachhssort = []
    if (sapxep == 'sapXepTenASC') {
        danhsachhssort = sortNameAZ(danhsachhs)
    }
    else if (sapxep == 'sapXepTenDEC') {
        danhsachhssort = sortNameZA(danhsachhs)
    }
    else if (sapxep == 'sapXepDTBasc') {
        danhsachhssort = danhsachhs.sort((a, b) => a.diemtb-b.diemtb)
    }
    else if (sapxep == 'sapXepDTBdec') {
        danhsachhssort = danhsachhs.sort((a, b) => b.diemtb-a.diemtb)
    }

    const tbody = document.getElementById('tbody3')
    tbody.innerHTML = ''

    danhsachhssort.forEach(item => {
        const tr = document.createElement('tr')
        const mahstd = document.createElement('td')
        const tenhstd = document.createElement('td')
        const tuoihstd = document.createElement('td')
        const gioitinhhstd = document.createElement('td')
        const chieucaohstd = document.createElement('td')
        const cannanghstd = document.createElement('td')
        const lophstd = document.createElement('td')
        const diemtbhstd = document.createElement('td')

        mahstd.textContent = item.ma
        tenhstd.textContent = item.ten
        tuoihstd.textContent = item.tuoi
        gioitinhhstd.textContent = item.gioitinh
        chieucaohstd.textContent = item.chieucao
        cannanghstd.textContent = item.cannang
        lophstd.textContent = item.lop
        diemtbhstd.textContent = item.diemtb

        tr.append(mahstd, tenhstd, gioitinhhstd, tuoihstd, chieucaohstd, cannanghstd, lophstd, diemtbhstd)
        tbody.append(tr)
        })
}

function sapxephs2loai() {
    const sapxepten = document.getElementById('sapxep2loaiten').value
    const sapxepdiem = document.getElementById('sapxep2loaidiem').value
    let danhsachhssort = []
    if (sapxepten == 'sapXepTenASC' && sapxepdiem == 'sapXepDTBasc') {
        danhsachhssort = sortNameAZ(danhsachhs)
        danhsachhssort = danhsachhs.sort((a, b) => a.diemtb-b.diemtb)
    }
    else if (sapxepten == 'sapXepTenASC' && sapxepdiem == 'sapXepDTBdec') {
        danhsachhssort = sortNameAZ(danhsachhs)
        danhsachhssort = danhsachhs.sort((a, b) => b.diemtb-a.diemtb)
    }
    else if (sapxepten == 'sapXepTenASC' && sapxepdiem == 'sapXepDTBasc') {
        danhsachhssort = sortNameZA(danhsachhs)
        danhsachhssort = danhsachhs.sort((a, b) => a.diemtb-b.diemtb)
    }
    else if (sapxepten == 'sapXepTenASC' && sapxepdiem == 'sapXepDTBdec') {
        danhsachhssort = sortNameZA(danhsachhs)
        danhsachhssort = danhsachhs.sort((a, b) => b.diemtb-a.diemtb)
    }

    const tbody = document.getElementById('tbody4')
    tbody.innerHTML = ''

    danhsachhssort.forEach(item => {
        const tr = document.createElement('tr')
        const mahstd = document.createElement('td')
        const tenhstd = document.createElement('td')
        const tuoihstd = document.createElement('td')
        const gioitinhhstd = document.createElement('td')
        const chieucaohstd = document.createElement('td')
        const cannanghstd = document.createElement('td')
        const lophstd = document.createElement('td')
        const diemtbhstd = document.createElement('td')

        mahstd.textContent = item.ma
        tenhstd.textContent = item.ten
        tuoihstd.textContent = item.tuoi
        gioitinhhstd.textContent = item.gioitinh
        chieucaohstd.textContent = item.chieucao
        cannanghstd.textContent = item.cannang
        lophstd.textContent = item.lop
        diemtbhstd.textContent = item.diemtb

        tr.append(mahstd, tenhstd, gioitinhhstd, tuoihstd, chieucaohstd, cannanghstd, lophstd, diemtbhstd)
        tbody.append(tr)
        })
}