import rtx3090 from "../Assets/Products/gpus/3090.jpg"
import rtx3080 from "../Assets/Products/gpus/3080.jpg"
import rtx3070 from "../Assets/Products/gpus/3070.jpg"
import rtx1660super from "../Assets/Products/gpus/PLACA DE VIDEO PALIT NVIDIA GEFORCE GTX 1660 SUPER GP 6GB.jpg"
import rtx2060super from "../Assets/Products/gpus/PLACA DE VIDEO PALIT NVIDIA GEFORCE RTX 2060 SUPER DUAL 8GB.jpg"
import rtx1660superPrev from "../Assets/Products/gpus/1660 super prev.png"
import rtx2060superPrev from "../Assets/Products/gpus/2060superPrev.png"
import rtx3070Pre from "../Assets/Products/gpus/3070Prev.jpg"
import rtx3080Pre from "../Assets/Products/gpus/3080Prev.jpg"
import rtx3090Pre from "../Assets/Products/gpus/3090Prev.jpg"
import  Asusb660 from "../Assets/Products/MotherBoards/MOTHERBOARD ASUS ROG STRIX B660-A GAMING WIFI D4 S1700.jpg"
import  Asusx570 from "../Assets/Products/MotherBoards/MOTHERBOARD ASUS X570-PLUS WIFI TUF GAMING BOX ATX AM4.jpg"
import  AsusB560 from "../Assets/Products/MotherBoards/MOTHERBOARD GIGABYTE B560 AORUS PRO AX S1200.png"
import  MSIZ690 from "../Assets/Products/MotherBoards/MOTHERBOARD MSI PRO Z690-A DDR4 S1700 12VA GEN WIFI.png"
import i3 from "../Assets/Products/Cpu/-PROCESADOR INTEL CORE I3 10100F 4.3GHZ S1200.jpg"
import i5 from "../Assets/Products/Cpu/PROCESADOR INTEL CORE I5 10400 COMETLAKE.png"
import Ryzen5600g from "../Assets/Products/Cpu/MICROPROCESADOR AMD RYZEN 5600G 4.4 GHZ AM4.jpg"
import Pulsador from "../Assets/Products/Accesories/Boton Pulsador Interno Power Reset Computación Atx Pc.webp"
import add2psu from "../Assets/Products/Accesories/Mineria - Cable Adaptador 2 Fuentes (no Add2psu) 24pin Psu.webp"
import m2apcie from "../Assets/Products/Accesories/ADAPTADOR NGFF M.2 A PCI-E USB 3.0 MINERIA.png"
import Rack6gpu from "../Assets/Products/Accesories/Rack6gpu.webp"
import rackMinero12gpu from "../Assets/Products/Accesories/rackMinero12gpu.webp"

const Products = [
    {
        name:"Nvidia 3070",
        img:rtx3070,
        imgPrev:rtx3070Pre ,
        price:"225000",
        category:"Gpu",
        id:"3070"          
    },
    {   
        name:"Nvidia 3080",
        img: rtx3080,
        imgPrev:rtx3080Pre ,
        price:"250000",
        category:"Gpu",
        id:"3080"          
    },
    { name:"Nvidia 3090",
    img: rtx3090,
    imgPrev:rtx3090Pre ,
    price:"435000",
    category:"Gpu",
    id:"3090"          
    },
    {
        name:"PALIT NVIDIA GEFORCE GTX 1660 SUPER GP 6GB",
        img: rtx1660super,
        imgPrev:rtx1660superPrev ,
        price:"85000",
        id:"1660Super",
        category:"Gpu"
    },
    {
        name:"PALIT NVIDIA GEFORCE RTX 2060 SUPER DUAL 8GB",
        img: rtx2060super,
        imgPrev:rtx2060superPrev ,
        price:"115000",
        category:"Gpu",
        id:"2060Super"
    },
    {
        name:"ASUS ROG STRIX B660-A GAMING WIFI D4 S1700",
        img: Asusb660,
        price:"23500",
        category:"Mother Board"
    },
    {
        name:"ASUS X570-PLUS WIFI TUF GAMING BOX ATX AM4",
        img: Asusx570,
        price:"45000",
        category:"Mother Board"
    },
    {
        name:"GIGABYTE B560 AORUS PRO AX S1200",
        img: AsusB560,
        price:"33540",
        category:"Mother Board"
    },
    {
        name:"MSI PRO Z690-A DDR4 S1700 12VA GEN WIFI",
        img: MSIZ690,
        price:"20865",
        category:"Mother Board"
    },
    {
        name:"PROCESADOR INTEL CORE I3 10100F 4.3GHZ S1200",
        img: i3,
        price:"13500",
        category:"Cpu"
    },
    {
        name:"PROCESADOR INTEL CORE I5 10400 COMETLAKE",
        img: i5,
        price:"25000",
        category:"Cpu"
    },
    {
        name:"PROCESADOR AMD RYZEN 5600G 4.4 GHZ AM4",
        img: Ryzen5600g,
        price:"32000",
        category:"Cpu"
    },
  
    {
        name:"Nvidia 3060",
        img: Pulsador,
        price:"",
        category:"Accesories"
    },
    {
        name:"Nvidia 3060",
        img: add2psu,
        price:"",
        category:"Accesories"
    },
    {
        name:"Nvidia 3060",
        img: m2apcie,
        price:"",
        category:"Accesories"
    },
    {
        name:"Nvidia 3060",
        img: Rack6gpu,
        price:"",
        category:"Accesorries"
    },
    { 
        name:"Nvidia 3060",
        img: rackMinero12gpu,
        price:"",
        category:"Accesories"
    }
]
export default function ExportProducts(){
    return Products
}