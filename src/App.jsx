import Electronic from './components/Electronic';
import "./index.css"

const electronic = [
  {
    id : "1",
    nama : "Handphone",
    gambar : "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/06/spesifikasi-iphone-14-pro-max.webp",
    deskripsi : "Iphone 14 Pro Max merupakan salah satu produk terbaik dari Apple, selain kamera yang bagus Iphone 14 Pro Max juga memiliki banyak keunggulan yang lain.",
    harga : "Harga : Rp.19.999.000",
  },
  {
    id : "2",
    nama : "Television",
    gambar : "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/35b03086-6ce5-11ea-939a-becc10303f49.jpg",
    deskripsi : "Smart TV 4K UHD merupakan salah satu produk dari Sharp, Selain layar yang lebar Smart TV 4K UHD memiliki kelebihan yang tidak dimiliki oleh merk-merk tv yang lain.",
    harga : "Harga : Rp.6.590.000",
  },
  {
    id : "3",
    nama : "Laptop",
    gambar : "https://asset.kompas.com/crops/gjREufJ-zq0yaBeL9aVPXgi1PCI=/0x0:1386x924/750x500/data/photo/2022/09/08/6319aeffb0590.jpg",
    deskripsi : "MacBook Pro memiliki ukuran layar 15-inch selain memiliki layar yang termasuk lebar MacBook merupakan salah satu keluaran dari produk Apple yang bisa layar sentuh.",
    harga : "Harga : Rp.62.000.000",
  }
];

function App() {
  return (
    <div id="container">
    {
    electronic.map((value) => {
      return <Electronic key={value.id} nama = {value.nama} gambar = {value.gambar} deskripsi = {value.deskripsi} harga = {value.harga}/>
    })
  }
    </div>
  )
}

export default App
