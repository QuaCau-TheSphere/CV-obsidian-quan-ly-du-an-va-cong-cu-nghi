---
share: true
created: 2023-07-18T11:21
updated: 2024-09-03T01:21
title: Phòng họp riêng ở TPHCM
alias: Phòng họp riêng ở TPHCM
---


```dataviewjs
const dsTrường = [
  ]
const dsCột = [
  "Địa điểm",
  "Số người tối đa", 
  "Giá", 
  "Giờ mở cửa", 
  "Ghi chú", 
  "Địa chỉ",
  "Khác so với mặc định"
]

function tạoĐịaChỉ(địaĐiểm) {
  const {"Địa chỉ": địaChỉ, quận } = địaĐiểm
  switch (typeof quận) {
    case 'number':
      return `${địaChỉ}, Q${quận}`
    default:
      return `${địaChỉ}, ${quận}`
  }
}

function tạoGiờMởCửa(địaĐiểm) {
  const {"Giờ mở cửa": giờMởCửa, "Giờ đóng cửa": giờĐóngCửa} = địaĐiểm
  if (typeof giờĐóngCửa === "string") return `${giờMởCửa} – ${giờĐóngCửa}`
}

function tạoDsKhácMặcĐịnh(địaĐiểm){
  const dsKhácMặcĐịnh = địaĐiểm.file.lists.filter(i=>i.header.subpath === "Những thứ không có trong mặc định")
  const dsCó = dsKhácMặcĐịnh.filter(i=>i.status === "x").map(i=>i.text).join(", ")
  const dsKhông = dsKhácMặcĐịnh.filter(i=>i.checked === false).map(i=>i.text).join(", ")
  if (dsCó && dsKhông) return `❌${dsKhông}, ✔${dsCó}`
  if (!dsCó && dsKhông) return `❌${dsKhông}`
  if (dsCó && !dsKhông) return `✔${dsCó}`
}

function tạoHàng(địaĐiểm) {
  const dsThuộcTính = []
  for (const cột of dsCột){
    switch (cột) {
      case "Địa điểm":
        dsThuộcTính.push(địaĐiểm.file.link)
        break 
      case "Địa chỉ":
        dsThuộcTính.push(tạoĐịaChỉ(địaĐiểm))
        break 
      case "Giờ mở cửa":
        dsThuộcTính.push(tạoGiờMởCửa(địaĐiểm))
        break 
      case "Khác so với mặc định":
        dsThuộcTính.push(tạoDsKhácMặcĐịnh(địaĐiểm))
        break 
      default:
        dsThuộcTính.push(địaĐiểm[cột])
    }
  }
  return dsThuộcTính
}

function tạoKếtQuả() {
  return dv.pages(`"${dv.current().file.folder}"`)
  .filter(địaĐiểm => địaĐiểm.file.name !== dv.current().file.name)
  .sort(địaĐiểm => địaĐiểm.giá)
  .map(địaĐiểm => tạoHàng(địaĐiểm));
}

dv.table(dsCột, tạoKếtQuả())
```