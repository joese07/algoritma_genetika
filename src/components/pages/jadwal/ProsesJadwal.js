import { useState} from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import useGetPembina from "../../../graphql/GetPembina";
import Sidebar from "../../partials/Sidebar";
import ProsesGenetika from "./ProsesGenetika";

function Prosesjadwal() {
//kromosom 1
const [dataPembina, setDataPembina] = useState()
const [dataPembinaDua, setDataPembinaDua] = useState()
const [dataPembinaTiga, setDataPembinaTiga] = useState()
const [dataPembinaEmpat, setDataPembinaEmpat] = useState()
const [dataPembinaTujuhBelas, setDataPembinaTujuhBelas] = useState()
const [dataPembinaDelapanBelas, setDataPembinaDelapanBelas] = useState()
const [dataPembinaSembilanBelas, setDataPembinaSembilanBelas] = useState()
const [dataPembinaDuaPuluh, setDataPembinaDuaPuluh] = useState()
const [fitnesKromosomSatu,setfitnesKromosomSatu] = useState(0)

//kromsom 2
const [dataPembinaLima, setDataPembinaLima] = useState()
const [dataPembinaEnam, setDataPembinaEnam] = useState()
const [dataPembinaTujuh, setDataPembinaTujuh] = useState()
const [dataPembinaDelapan, setDataPembinaDelapan] = useState()
const [dataPembinaDuaSatu, setDataPembinaDuaSatu] = useState()
const [dataPembinaDuaDua, setDataPembinaDuaDua] = useState()
const [dataPembinaDuaTiga, setDataPembinaDuaTiga] = useState()
const [dataPembinaDuaEmpat, setDataPembinaDuaEmpat] = useState()
const [fitnesKromosomDua, setfitnesKromosomDua] = useState(0)

//kromosom 3
const [dataPembinaSembilan, setDataPembinaSembilan] = useState()
const [dataPembinaSepuluh, setDataPembinaSepuluh] = useState()
const [dataPembinaSebelas, setDataPembinaSebelas] = useState()
const [dataPembinaDuabelas, setDataPembinaDuabelas] = useState()
const [dataPembinaDuaLima, setDataPembinaDuaLima] = useState()
const [dataPembinaDuaEnam, setDataPembinaDuaEnam] = useState()
const [dataPembinaDuaTujuh, setDataPembinaDuaTujuh] = useState()
const [dataPembinaDuaDelapan, setDataPembinaDuaDelapan] = useState()
const [fitnesKromosomTiga, setfitnesKromosomTiga] = useState(0)

//kromosom 4
const [dataPembinaTigabelas, setDataPembinaTigabelas] = useState()
const [dataPembinaEmpatbelas, setDataPembinaEmpatbelas] = useState()
const [dataPembinaLimabelas, setDataPembinaLimabelas] = useState()
const [dataPembinaEnambelas, setDataPembinaEnambelas] = useState()
const [dataPembinaDuaSembilan, setDataPembinaDuaSembilan] = useState()
const [dataPembinaTigaPuluh, setDataPembinaTigaPuluh] = useState()
const [dataPembinaTigaSatu, setDataPembinaTigaSatu] = useState()
const [dataPembinaTigaDua, setDataPembinaTigaDua] = useState()
const [fitnessKromosomEmpat, setfitnesKromosomEmpat] = useState(0)

const[tableIndukSatu, setTableIndukSatu] = useState()
const[tableIndukDua, setTableIndukDua] = useState()

const [tableCrossover, setTableCrossoverSatu] = useState()
const [tableCrossoverDua, setTableCrossoverDua] = useState()


  const { error, loading, data } = useGetPembina();
  const [lokasi, setLokasi] = useState("");
  const [bulan, setBulan] = useState("");
 

  if (loading) return <div>Spinner...</div>;
  if (error) return <div>something went wrong</div>;

  console.log(data.Data_Pembina[0].nama)

  const pembina = data.Data_Pembina
 
  const handleGenerate = () =>{
    // Kromosom 1 Sabtu 1
    const render = pembina.map((data)=>(data))
    const shuffleArray = render.sort(() => Math.random()  - 0.5)
    shuffleArray.length = 3
    const data = shuffleArray.map((data)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))    
    // Kromosom 1 Minggu 1
    const renderDua = pembina.map((data)=>(data))
    const shuffleArrayDua = renderDua.sort(() => Math.random()  - 0.5)
    shuffleArrayDua.length = 3
    const dataDua = shuffleArrayDua.map((data)=>(<td key={data.id}>{data.nama}: {data.nilai}</td>))
    console.log(dataDua)
    //Kromosom 1 Sabtu 2
    const renderTiga = pembina.map((data)=>(data))
    const shuffleArrayTiga = renderTiga.sort(() => Math.random()  - 0.5)
    shuffleArrayTiga.length = 3
    const dataTiga = shuffleArrayTiga.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
    //Kromosom 1 Minggu 2
    const renderEmpat = pembina.map((data)=>(data))
    const shuffleArrayEmpat = renderEmpat.sort(() => Math.random()  - 0.5)
    shuffleArrayEmpat.length = 3
    const dataEmpat = shuffleArrayEmpat.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     // Kromosom 1 Sabtu 3
     const renderTujuhBelas = pembina.map((data)=>(data))
     const shuffleArrayTujuhBelas = renderTujuhBelas.sort(() => Math.random()  - 0.5)
     shuffleArrayTujuhBelas.length = 3
     const dataTujuhBelas = shuffleArrayTujuhBelas.map((data)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     // Kromosom 1 Minggu 3
     const renderDelapanBelas = pembina.map((data)=>(data))
     const shuffleArrayDelapanBelas = renderDelapanBelas.sort(() => Math.random()  - 0.5)
     shuffleArrayDelapanBelas.length = 3
     const dataDelapanBelas = shuffleArrayDelapanBelas.map((data)=>(<td key={data.id}>{data.nama}: {data.nilai}</td>))
     //Kromosom 1 Sabtu 4
     const renderSembilanBelas = pembina.map((data)=>(data))
     const shuffleArraySembilanBelas = renderSembilanBelas.sort(() => Math.random()  - 0.5)
     shuffleArraySembilanBelas.length = 3
     const dataSembilanBelas = shuffleArraySembilanBelas.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     //Kromosom 1 Minggu 4
     const renderDuaPuluh = pembina.map((data)=>(data))
     const shuffleArrayDuaPuluh = renderDuaPuluh.sort(() => Math.random()  - 0.5)
     shuffleArrayDuaPuluh.length = 3
     const dataDuaPuluh = shuffleArrayDuaPuluh.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
    

    //Kromosom 2 Sabtu 1
    const renderLima = pembina.map((data, index)=>(data))
    const shuffleArrayLima = renderLima.sort(() => Math.random()  - 0.5)
    shuffleArrayLima.length = 3
    const dataLima = shuffleArrayLima.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
    //Kromosom 2 Minggu 1
    const renderEnam = pembina.map((data, index)=>(data))
    const shuffleArrayEnam = renderEnam.sort(() => Math.random()  - 0.5)
    shuffleArrayEnam.length = 3
    const dataEnam = shuffleArrayEnam.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
    //Kromosom 2 Sabtu 2
    const renderTujuh = pembina.map((data, index)=>(data))
    const shuffleArrayTujuh = renderTujuh.sort(() => Math.random()  - 0.5)
    shuffleArrayTujuh.length = 3
    const dataTujuh = shuffleArrayTujuh.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
    //Kromosom 2 Minggu 2
    const renderDelapan = pembina.map((data, index)=>(data))
    const shuffleArrayDelapan = renderDelapan.sort(() => Math.random()  - 0.5)
    shuffleArrayDelapan.length = 3
    const dataDelapan = shuffleArrayDelapan.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     //Kromosom 2 Sabtu 3
     const renderDuaSatu = pembina.map((data, index)=>(data))
     const shuffleArrayDuaSatu = renderDuaSatu.sort(() => Math.random()  - 0.5)
     shuffleArrayDuaSatu.length = 3
     const dataDuaSatu = shuffleArrayDuaSatu.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     //Kromosom 2 Minggu 3
     const renderDuaDua = pembina.map((data, index)=>(data))
     const shuffleArrayDuaDua = renderDuaDua.sort(() => Math.random()  - 0.5)
     shuffleArrayDuaDua.length = 3
     const dataDuaDua = shuffleArrayDuaDua.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     //Kromosom 2 Sabtu 4
     const renderDuaTiga = pembina.map((data, index)=>(data))
     const shuffleArrayDuaTiga = renderDuaTiga.sort(() => Math.random()  - 0.5)
     shuffleArrayDuaTiga.length = 3
     const dataDuaTiga = shuffleArrayDuaTiga.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     //Kromosom 2 Minggu 4
     const renderDuaEmpat = pembina.map((data, index)=>(data))
     const shuffleArrayDuaEmpat = renderDuaEmpat.sort(() => Math.random()  - 0.5)
     shuffleArrayDuaEmpat.length = 3
     const dataDuaEmpat = shuffleArrayDuaEmpat.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))


    //Kromosom 3 Sabtu 1
    const renderSembilan = pembina.map((data, index)=>(data))
    const shuffleArraySembilan = renderSembilan.sort(() => Math.random()  - 0.5)
    shuffleArraySembilan.length = 3
    const dataSembilan = shuffleArraySembilan.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
    //Kromosom 3 Minggu 1
    const renderSepuluh = pembina.map((data, index)=>(data))
    const shuffleArraySepuluh = renderSepuluh.sort(() => Math.random()  - 0.5)
    shuffleArraySepuluh.length = 3
    const dataSepuluh = shuffleArraySepuluh.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
    //Kromosom 3 Sabtu 2
    const renderSebelas = pembina.map((data, index)=>(data))
    const shuffleArraySebelas = renderSebelas.sort(() => Math.random()  - 0.5)
    shuffleArraySebelas.length = 3
    const dataSebelas = shuffleArraySebelas.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
    //Kromosom 3 Minggu 2
    const renderDuabelas = pembina.map((data, index)=>(data))
    const shuffleArrayDuabelas = renderDuabelas.sort(() => Math.random()  - 0.5)
    shuffleArrayDuabelas.length = 3
    const dataDuabelas = shuffleArrayDuabelas.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     //Kromosom 3 sabtu 3
     const renderDuaLima = pembina.map((data, index)=>(data))
     const shuffleArrayDuaLima = renderDuaLima.sort(() => Math.random()  - 0.5)
     shuffleArrayDuaLima.length = 3
     const dataDuaLima = shuffleArrayDuaLima.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
      //Kromosom 3 Minggu 3
      const renderDuaEnam = pembina.map((data, index)=>(data))
      const shuffleArrayDuaEnam = renderDuaEnam.sort(() => Math.random()  - 0.5)
      shuffleArrayDuaEnam.length = 3
      const dataDuaEnam = shuffleArrayDuaEnam.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
      //Kromosom 3 sabtu 4
      const renderDuaTujuh = pembina.map((data, index)=>(data))
      const shuffleArrayDuaTujuh = renderDuaTujuh.sort(() => Math.random()  - 0.5)
      shuffleArrayDuaTujuh.length = 3
      const dataDuaTujuh = shuffleArrayDuaTujuh.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
      //Kromosom 3 Minggu 4
      const renderDuaDelapan = pembina.map((data, index)=>(data))
      const shuffleArrayDuaDelapan = renderDuaDelapan.sort(() => Math.random()  - 0.5)
      shuffleArrayDuaDelapan.length = 3
      const dataDuaDelapan = shuffleArrayDuaDelapan.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))

    
    //Kromosom 4 Sabtu 1
    const renderTigabelas = pembina.map((data, index)=>(data))
    const shuffleArrayTigabelas = renderTigabelas.sort(() => Math.random()  - 0.5)
    shuffleArrayTigabelas.length = 3
    const dataTigabelas = shuffleArrayTigabelas.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
    //Kromosom 4 Minggu 1
    const renderEmpatbelas = pembina.map((data, index)=>(data))
    const shuffleArrayEmpatbelas = renderEmpatbelas.sort(() => Math.random()  - 0.5)
    shuffleArrayEmpatbelas.length = 3
    const dataEmpatbelas = shuffleArrayEmpatbelas.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
    //Kromosom 4 Sabtu 2
    const renderLimabelas = pembina.map((data, index)=>(data))
    const shuffleArrayLimabelas = renderLimabelas.sort(() => Math.random()  - 0.5)
    shuffleArrayLimabelas.length = 3
    const dataLimabelas = shuffleArrayLimabelas.map((data, index)=>(<td key={index.id}>{data.nama} : {data.nilai}</td>))
    //Kromosom 4 Minggu 2
    const renderEnambelas = pembina.map((data, index)=>(data))
    const shuffleArrayEnambelas = renderEnambelas.sort(() => Math.random()  - 0.5)
    shuffleArrayEnambelas.length = 3
    const dataEnambelas = shuffleArrayEnambelas.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     //Kromosom 4 Sabtu 3
     const renderDuaSembilan = pembina.map((data, index)=>(data))
     const shuffleArrayDuaSembilan = renderDuaSembilan.sort(() => Math.random()  - 0.5)
     shuffleArrayDuaSembilan.length = 3
     const dataDuaSembilan = shuffleArrayDuaSembilan.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     //Kromosom 4 Minggu 3
     const renderTigaPuluh = pembina.map((data, index)=>(data))
     const shuffleArrayTigaPuluh = renderTigaPuluh.sort(() => Math.random()  - 0.5)
     shuffleArrayTigaPuluh.length = 3
     const dataTigaPuluh = shuffleArrayTigaPuluh.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     //Kromosom 4 Sabtu 4
     const renderTigaSatu = pembina.map((data, index)=>(data))
     const shuffleArrayTigaSatu = renderTigaSatu.sort(() => Math.random()  - 0.5)
     shuffleArrayTigaSatu.length = 3
     const dataTigaSatu = shuffleArrayTigaSatu.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     //Kromosom 4 Minggu 4
     const renderTigaDua = pembina.map((data, index)=>(data))
     const shuffleArrayTigaDua = renderTigaDua.sort(() => Math.random()  - 0.5)
     shuffleArrayTigaDua.length = 3
     const dataTigaDua = shuffleArrayTigaDua.map((data, index)=>(<td key={data.id}>{data.nama} : {data.nilai}</td>))
     
    
    let fitnesShiftKromosomSatu ;
    let fitnesHariKromosomSatu ;
    let fitnesKualitasKromosomSatu ;
    
    //Kromosom 1 Seleksi Fitness sabtu
        if(shuffleArray[2].nama === shuffleArrayDua[0].nama || shuffleArrayDua[2].nama === shuffleArrayTiga[0].nama || 
          shuffleArrayTiga[2].nama === shuffleArrayEmpat[0].nama || shuffleArrayEmpat[2].nama === shuffleArrayTujuhBelas[0].nama || 
          shuffleArrayTujuhBelas[2].nama === shuffleArrayDelapanBelas[0].nama || shuffleArrayDelapanBelas[2].nama === shuffleArraySembilanBelas[0].nama ||
          shuffleArraySembilanBelas[2].nama === shuffleArrayDuaPuluh[0].nama){
            console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 1)")
            fitnesShiftKromosomSatu = 1;
        }
        if(shuffleArray[0].nama === shuffleArray[1].nama === shuffleArray[2].nama || shuffleArrayDua[0].nama === shuffleArrayDua[1].nama === shuffleArrayDua[2].nama ||
           shuffleArrayTiga[0].nama === shuffleArrayTiga[1].nama === shuffleArrayTiga[2].nama || shuffleArrayEmpat[0].nama === shuffleArrayEmpat[1].nama === shuffleArrayEmpat[2].nama){
            console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 1)")
            fitnesHariKromosomSatu = 1;
        }
        if(shuffleArray[0].nilai === 0 && shuffleArray[1].nilai === 0 && shuffleArray[2].nilai === 0 ){
            console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
            fitnesKualitasKromosomSatu = 1;
        }
        //Kromosom 1 seleksi Fitness Minggu
        if(shuffleArrayDua[0].nilai === 0 && shuffleArrayDua[1].nilai === 0 && shuffleArrayDua[2].nilai === 0 ){
            console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
            fitnesKualitasKromosomSatu = 1;
        }
        //Kromosom 1 Seleksi Fitness Sabtu 2
        if(shuffleArrayTiga[0].nilai === 0 && shuffleArrayTiga[1].nilai === 0 && shuffleArrayTiga[2].nilai === 0 ){
            console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
            fitnesKualitasKromosomSatu = 1;
        }
        //Kromosom 1 Seleksi Fitness Minggu 2
        if(shuffleArrayEmpat[0].nilai === 0 && shuffleArrayEmpat[1].nilai === 0 && shuffleArrayEmpat[2].nilai === 0 ){
            console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
            fitnesKualitasKromosomSatu = 1;
        }
        if(shuffleArrayTujuhBelas[0].nilai === 0 && shuffleArrayTujuhBelas[1].nilai === 0 && shuffleArrayTujuhBelas[2].nilai === 0 ){
          console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
          fitnesKualitasKromosomSatu = 1;
      }
      if(shuffleArrayDelapanBelas[0].nilai === 0 && shuffleArrayDelapanBelas[1].nilai === 0 && shuffleArrayDelapanBelas[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
        fitnesKualitasKromosomSatu = 1;
      }
      if(shuffleArraySembilanBelas[0].nilai === 0 && shuffleArraySembilanBelas[1].nilai === 0 && shuffleArraySembilanBelas[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
        fitnesKualitasKromosomSatu = 1;
      }
      if(shuffleArrayDuaPuluh[0].nilai === 0 && shuffleArrayDuaPuluh[1].nilai === 0 && shuffleArrayDuaPuluh[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
        fitnesKualitasKromosomSatu = 1;
      }

        if(fitnesShiftKromosomSatu === undefined){
            console.log()
            setfitnesKromosomSatu(0)
        } else{
            console.log(fitnesShiftKromosomSatu)
            setfitnesKromosomSatu(fitnesShiftKromosomSatu)
        }
        
        if(fitnesKualitasKromosomSatu === undefined){
            console.log()
        } else{
            console.log(fitnesKualitasKromosomSatu)
            setfitnesKromosomSatu(fitnesKualitasKromosomSatu)
        }
        
        let totalFitnesKromosomSatu = fitnesShiftKromosomSatu + fitnesKualitasKromosomSatu
        if(isNaN(totalFitnesKromosomSatu)){
            console.log()
        } else{
            console.log(totalFitnesKromosomSatu)
            setfitnesKromosomSatu(totalFitnesKromosomSatu)
        }
        
        if(fitnesShiftKromosomSatu !== "" && fitnesKualitasKromosomSatu !== "" ){
            console.log("ulangi")
        }else{
            console.log("ok")
        }
    
    
    
    //kromosom 2 START
    let fitnessShiftKromosomDua;
    let fitnessHariKromosomDua;
    let fitnessKualitasKromosomDua;
    //Kromosom 2 Seleksi Fitness sabtu
    if(shuffleArrayLima[2].nama === shuffleArrayEnam[0].nama || shuffleArrayEnam[2].nama === shuffleArrayTujuh[0].nama || shuffleArrayTujuh[2].nama === shuffleArrayDelapan[0].nama
      || shuffleArrayDelapan[2].nama === shuffleArrayDuaSatu[0].nama || shuffleArrayDuaSatu[2].nama === shuffleArrayDuaDua[0].nama || shuffleArrayDuaDua[2].nama === shuffleArrayDuaTiga[0].nama ||
      shuffleArrayDuaTiga[2].nama === shuffleArrayDuaPuluh[0].nama){
        console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 2)")
        fitnessShiftKromosomDua = 1;
    }
    if(shuffleArrayLima[0].nama === shuffleArrayLima[1].nama === shuffleArrayLima[2].nama || shuffleArrayEnam[0].nama === shuffleArrayEnam[1].nama === shuffleArrayEnam[2].nama || shuffleArrayTujuh[0].nama === shuffleArrayTujuh[1].nama === shuffleArrayTujuh[2].nama || shuffleArrayDelapan[0].nama === shuffleArrayDelapan[1].nama === shuffleArrayDelapan[2].nama){
        console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 2)")
        fitnessHariKromosomDua = 1;
    }
    if(shuffleArrayLima[0].nilai === 0 && shuffleArrayLima[1].nilai === 0 && shuffleArrayLima[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
        fitnessKualitasKromosomDua = 1;
    }
    //Kromosom 2 seleksi Fitness Minggu
    if(shuffleArrayEnam[0].nilai === 0 && shuffleArrayEnam[1].nilai === 0 && shuffleArrayEnam[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
        fitnessKualitasKromosomDua = 1;
    }
    //Kromosom 2 Seleksi Fitness Sabtu 2
    if(shuffleArrayTujuh[0].nilai === 0 && shuffleArrayTujuh[1].nilai === 0 && shuffleArrayTujuh[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
        fitnessKualitasKromosomDua = 1;
    }
    //Kromosom 2 Seleksi Fitness Minggu 2
    if(shuffleArrayDelapan[0].nilai === 0 && shuffleArrayDelapan[1].nilai === 0 && shuffleArrayDelapan[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
        fitnessKualitasKromosomDua = 1;
    }
    if(shuffleArrayDuaSatu[0].nilai === 0 && shuffleArrayDuaSatu[1].nilai === 0 && shuffleArrayDuaSatu[2].nilai === 0 ){
      console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
      fitnessKualitasKromosomDua = 1;
  }
  if(shuffleArrayDuaDua[0].nilai === 0 && shuffleArrayDuaDua[1].nilai === 0 && shuffleArrayDuaDua[2].nilai === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
    fitnessKualitasKromosomDua = 1;
  } 
  if(shuffleArrayDuaTiga[0].nilai === 0 && shuffleArrayDuaTiga[1].nilai === 0 && shuffleArrayDuaTiga[2].nilai === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
    fitnessKualitasKromosomDua = 1;
  }
if(shuffleArrayDuaEmpat[0].nilai === 0 && shuffleArrayDuaEmpat[1].nilai === 0 && shuffleArrayDuaEmpat[2].nilai === 0 ){
  console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
  fitnessKualitasKromosomDua = 1;
}
    if(fitnessShiftKromosomDua === undefined){
        console.log()
        setfitnesKromosomDua(0)
    } else{
        console.log(fitnessShiftKromosomDua)
        setfitnesKromosomDua(fitnessShiftKromosomDua)
    }
    if(fitnessKualitasKromosomDua === undefined){
        console.log()
    } else{
        console.log(fitnessKualitasKromosomDua)
        setfitnesKromosomDua(fitnessKualitasKromosomDua)
    }
    let totalFitnesKromosomDua = fitnessShiftKromosomDua + fitnessKualitasKromosomDua
    if(isNaN(totalFitnesKromosomDua)){
        console.log()
    } else{
        console.log(totalFitnesKromosomDua)
        setfitnesKromosomDua(totalFitnesKromosomDua)
    }
    
    
    let fitnessShiftKromosomTiga;
    let fitnessHariKromosomTiga;
    let fitnessKualitasKromosomTiga;
    //Kromosom 3 Seleksi Fitness sabtu
    if(shuffleArraySembilan[2].nama === shuffleArraySepuluh[0].nama || shuffleArraySepuluh[2].nama === shuffleArraySebelas[0].nama || shuffleArraySebelas[2].nama === shuffleArrayDuabelas[0].nama 
      || shuffleArrayDuabelas[2].nama === shuffleArrayDuaLima[0].nama || shuffleArrayDuaLima[2].nama === shuffleArrayDuaEnam[0].nama || shuffleArrayDuaEnam[2].nam === shuffleArrayDuaTujuh[0].nama||
      shuffleArrayDuaTujuh[2].nama === shuffleArrayDuaDelapan[0].nama){
        console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 3)")
        fitnessShiftKromosomTiga = 1;
    }
    if(shuffleArraySembilan[0].nama === shuffleArraySembilan[1].nama === shuffleArraySembilan[2].nama || shuffleArraySepuluh[0].nama === shuffleArraySepuluh[1].nama === shuffleArraySepuluh[2].nama || shuffleArraySebelas[0].nama === shuffleArraySebelas[1].nama === shuffleArraySebelas[2].nama || shuffleArrayDuabelas[0].nama === shuffleArrayDuabelas[1].nama === shuffleArrayDuabelas[2].nama){
        console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 3)")
        fitnessHariKromosomTiga = 1;
    }
    if(shuffleArraySembilan[0].nilai === 0 && shuffleArraySembilan[1].nilai === 0 && shuffleArraySembilan[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
        fitnessKualitasKromosomTiga = 1;
    }
    //Kromosom 3 seleksi Fitness Minggu
    if(shuffleArraySepuluh[0].nilai === 0 && shuffleArraySepuluh[1].nilai === 0 && shuffleArraySepuluh[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
        fitnessKualitasKromosomTiga = 1;
    }
    //Kromosom 3 Seleksi Fitness Sabtu 2
    if(shuffleArraySebelas[0].nilai === 0 && shuffleArraySebelas[1].nilai === 0 && shuffleArraySebelas[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
        fitnessKualitasKromosomTiga = 1;
    }
    //Kromosom 3 Seleksi Fitness Minggu 2
    if(shuffleArrayDuabelas[0].nilai === 0 && shuffleArrayDuabelas[1].nilai === 0 && shuffleArrayDuabelas[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
        fitnessKualitasKromosomTiga = 1;
    }
    if(shuffleArrayDuaLima[0].nilai === 0 && shuffleArrayDuaLima[1].nilai === 0 && shuffleArrayDuaLima[2].nilai === 0 ){
      console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
      fitnessKualitasKromosomTiga = 1;
  }
  if(shuffleArrayDuaEnam[0].nilai === 0 && shuffleArrayDuaEnam[1].nilai === 0 && shuffleArrayDuaEnam[2].nilai === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
    fitnessKualitasKromosomTiga = 1;
}
if(shuffleArrayDuaTujuh[0].nilai === 0 && shuffleArrayDuaTujuh[1].nilai === 0 && shuffleArrayDuaTujuh[2].nilai === 0 ){
  console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
  fitnessKualitasKromosomTiga = 1;
}
if(shuffleArrayDuaDelapan[0].nilai === 0 && shuffleArrayDuaDelapan[1].nilai === 0 && shuffleArrayDuaDelapan[2].nilai === 0 ){
  console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
  fitnessKualitasKromosomTiga = 1;
}

    if(fitnessShiftKromosomTiga === undefined){
        console.log()
        setfitnesKromosomTiga(0)
    } else{
        console.log(fitnessShiftKromosomTiga)
        setfitnesKromosomTiga(fitnessShiftKromosomTiga)
    }
    if(fitnessKualitasKromosomTiga === undefined){
        console.log()
    } else{
        console.log(fitnessKualitasKromosomTiga)
        setfitnesKromosomTiga(fitnessKualitasKromosomTiga)
    }
    let totalFitnesKromosomTiga = fitnessShiftKromosomTiga + fitnessKualitasKromosomTiga
    if(isNaN(totalFitnesKromosomTiga)){
        console.log()
    } else{
        console.log(totalFitnesKromosomTiga)
        setfitnesKromosomTiga(totalFitnesKromosomTiga)
    }
    
    
    
    
    let fitnessShiftKromosomEmpat;
    let fitnessHariKromosomEmpat;
    let fitnessKualitasKromosomEmpat;
    //Kromosom 4 Seleksi Fitness sabtu
    if(shuffleArrayTigabelas[2].nama === shuffleArrayEmpatbelas[0].nama || shuffleArrayEmpatbelas[2].nama === shuffleArrayLimabelas[0].nama || shuffleArrayLimabelas[2].nama === shuffleArrayEnambelas[0].nama ||
      shuffleArrayEnambelas[2].nama === shuffleArrayDuaSembilan[0].nama || shuffleArrayDuaSembilan[2].nama === shuffleArrayTigaPuluh[0].nama || shuffleArrayTigaPuluh[2].nama === shuffleArrayTigaSatu[0].nama ||
      shuffleArrayTigaSatu[2].nama === shuffleArrayTigaDua[0].nama){
        console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 4)")
        fitnessShiftKromosomEmpat = 1;
    }
    if(shuffleArrayTigabelas[0].nama === shuffleArrayTigabelas[1].nama === shuffleArrayTigabelas[2].nama || shuffleArrayEmpatbelas[0].nama === shuffleArrayEmpatbelas[1].nama === shuffleArrayEmpatbelas[2].nama || shuffleArrayLimabelas[0].nama === shuffleArrayLimabelas[1].nama === shuffleArrayLimabelas[2].nama || shuffleArrayEnambelas[0].nama === shuffleArrayEnambelas[1].nama === shuffleArrayEnambelas[2].nama){
        console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 4)")
        fitnessHariKromosomEmpat = 1;
    }
    if(shuffleArrayTigabelas[0].nilai === 0 && shuffleArrayTigabelas[1].nilai === 0 && shuffleArrayTigabelas[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
        fitnessKualitasKromosomEmpat = 1;
    }
    //Kromosom 4 seleksi Fitness Minggu
    if(shuffleArrayEmpatbelas[0].nilai === 0 && shuffleArrayEmpatbelas[1].nilai === 0 && shuffleArrayEmpatbelas[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
        fitnessKualitasKromosomEmpat = 1;
    }
    //Kromosom 4 Seleksi Fitness Sabtu 2
    if(shuffleArrayLimabelas[0].nilai === 0 && shuffleArrayLimabelas[1].nilai === 0 && shuffleArrayLimabelas[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
        fitnessKualitasKromosomEmpat = 1;
    }
    //Kromosom 3 Seleksi Fitness Minggu 2
    if(shuffleArrayEnambelas[0].nilai === 0 && shuffleArrayEnambelas[1].nilai === 0 && shuffleArrayEnambelas[2].nilai === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
        fitnessKualitasKromosomEmpat = 1;
    }
    if(shuffleArrayDuaSembilan[0].nilai === 0 && shuffleArrayDuaSembilan[1].nilai === 0 && shuffleArrayDuaSembilan[2].nilai === 0 ){
      console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
      fitnessKualitasKromosomEmpat = 1;
  }
  if(shuffleArrayTigaPuluh[0].nilai === 0 && shuffleArrayTigaPuluh[1].nilai === 0 && shuffleArrayTigaPuluh[2].nilai === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
    fitnessKualitasKromosomEmpat = 1;
}
if(shuffleArrayTigaSatu[0].nilai === 0 && shuffleArrayTigaSatu[1].nilai === 0 && shuffleArrayTigaSatu[2].nilai === 0 ){
  console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
  fitnessKualitasKromosomEmpat = 1;
}
if(shuffleArrayTigaDua[0].nilai === 0 && shuffleArrayTigaDua[1].nilai === 0 && shuffleArrayTigaDua[2].nilai === 0 ){
  console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
  fitnessKualitasKromosomEmpat = 1;
}
    if(fitnessShiftKromosomEmpat === undefined){
        console.log()
        setfitnesKromosomEmpat(0)
    } else{
        console.log(fitnessShiftKromosomEmpat)
        setfitnesKromosomEmpat(fitnessShiftKromosomEmpat)
    }
    if(fitnessKualitasKromosomEmpat === undefined){
        console.log()
    } else{
        console.log(fitnessKualitasKromosomEmpat)
        setfitnesKromosomEmpat(fitnessKualitasKromosomEmpat)
    }
    let totalFitnesKromosomEmpat = fitnessShiftKromosomEmpat + fitnessKualitasKromosomEmpat
    if(isNaN(totalFitnesKromosomEmpat)){
        console.log()
    } else{
        console.log(totalFitnesKromosomEmpat)
        setfitnesKromosomEmpat(totalFitnesKromosomEmpat)
    }
    
    
    //indukan yang akan di crossover
    if(isNaN(totalFitnesKromosomSatu) && fitnesKualitasKromosomSatu !== 1 && fitnesShiftKromosomSatu !== 1){
        const tableSatu = data.concat(dataDua, dataTiga, dataEmpat,dataTujuhBelas, dataDelapanBelas, dataSembilanBelas, dataDuaPuluh)
        setTableIndukSatu(tableSatu)
    } else if(isNaN(totalFitnesKromosomDua) && fitnessKualitasKromosomDua !== 1 && fitnessShiftKromosomDua !== 1){
        const tableDua = dataLima.concat(dataEnam, dataTujuh, dataDelapan, dataDuaSatu, dataDuaDua, dataDuaTiga, dataDuaEmpat)
        setTableIndukSatu(tableDua)
    } else {
        setTableIndukSatu()
    }
    
    if(isNaN(totalFitnesKromosomTiga) && fitnessKualitasKromosomTiga !== 1 && fitnessShiftKromosomTiga !== 1){
        const tableTiga = dataSembilan.concat(dataSepuluh, dataSebelas, dataDuabelas, dataDuaLima, dataDuaEnam, dataDuaTujuh, dataDuaDelapan)
        setTableIndukDua(tableTiga)
    } else if(isNaN(totalFitnesKromosomEmpat) && fitnessKualitasKromosomEmpat !== 1 && fitnessShiftKromosomEmpat !== 1){
        const tableEmpat = dataTigabelas.concat(dataEmpatbelas, dataLimabelas, dataEnambelas, dataDuaSembilan,dataTigaPuluh, dataTigaSatu, dataTigaDua)
        setTableIndukDua(tableEmpat)
    } else {
        setTableIndukDua()
    }
    
    
    //Data CrossOver 
    if(isNaN(totalFitnesKromosomSatu) && fitnesKualitasKromosomSatu !== 1 && fitnesShiftKromosomSatu !== 1 && isNaN(totalFitnesKromosomTiga) && fitnessKualitasKromosomTiga !== 1 && fitnessShiftKromosomTiga !== 1){
        const crossOverSatu = data.concat(dataDua, dataSebelas, dataDuabelas)
        const crossOverDua = dataSembilan.concat(dataSepuluh, dataTiga, dataEmpat)
        setTableCrossoverDua(crossOverDua)
        setTableCrossoverSatu(crossOverSatu)
    } else if(isNaN(totalFitnesKromosomDua) && fitnessKualitasKromosomDua !== 1 && fitnessShiftKromosomDua !== 1 && isNaN(totalFitnesKromosomEmpat) && fitnessKualitasKromosomEmpat !== 1 && fitnessShiftKromosomEmpat !== 1){
        const crossOverTiga = dataLima.concat(dataEnam, dataLimabelas, dataEnambelas)
        const crossOverEmpat = dataDuabelas.concat(dataTigabelas,dataTujuh, dataDelapan ) 
          setTableCrossoverSatu(crossOverTiga)
          setTableCrossoverDua(crossOverEmpat)
    }
    
    
    //kromosom 1
        setDataPembina(data)
        setDataPembinaDua(dataDua)
        setDataPembinaTiga(dataTiga)
        setDataPembinaEmpat(dataEmpat)
        setDataPembinaTujuhBelas(dataTujuhBelas)
        setDataPembinaDelapanBelas(dataDelapanBelas)
        setDataPembinaSembilanBelas(dataSembilanBelas)
        setDataPembinaDuaPuluh(dataDuaPuluh)


    //kromosom 2
        setDataPembinaLima(dataLima)
        setDataPembinaEnam(dataEnam)
        setDataPembinaTujuh(dataTujuh)
        setDataPembinaDelapan(dataDelapan)
        setDataPembinaDuaSatu(dataDuaSatu)
        setDataPembinaDuaDua(dataDuaDua)
        setDataPembinaDuaTiga(dataDuaTiga)
        setDataPembinaDuaEmpat(dataDuaEmpat)

      //kromosom 3
        setDataPembinaSembilan(dataSembilan)
        setDataPembinaSepuluh(dataSepuluh)
        setDataPembinaSebelas(dataSebelas)
        setDataPembinaDuabelas(dataDuabelas)
        setDataPembinaDuaLima(dataDuaLima)
        setDataPembinaDuaEnam(dataDuaEnam)
        setDataPembinaDuaTujuh(dataDuaTujuh)
        setDataPembinaDuaDelapan(dataDuaDelapan)

      //kromosom 4
        setDataPembinaTigabelas(dataTigabelas)
        setDataPembinaEmpatbelas(dataEmpatbelas)
        setDataPembinaLimabelas(dataLimabelas)
        setDataPembinaEnambelas(dataEnambelas)
        setDataPembinaDuaSembilan(dataDuaSembilan)
        setDataPembinaTigaPuluh(dataTigaPuluh)
        setDataPembinaTigaSatu(dataTigaSatu)
        setDataPembinaTigaDua(dataTigaDua)
    }

  const handleLokasi = (e) => {
    setLokasi(e.target.value);
  };

  const handleBulan = (e) => {
    setBulan(e.target.value);
  };

  return (
    <>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <div className="b-example-divider b-example-vr" />
        <div className="container">
          <div className=" bg-light rounded-2 mt-3">
            <div className="container-fluid py-3">
              <h1 className="display-5 fw-bold">Proses Penjadwalan </h1>
              <p className="col-md-8 fs-4">
                Klik tombol dibawah jika ingin langsung generate jadwal{" "}
              </p>
              <div className="mb-3 col-sm-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Lokasi
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleLokasi}
                >
                  <option selected>-- Pilih Lokasi --</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Jakarta">Jakarta</option>
                </select>
              </div>
              <div className="mb-3 col-sm-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Bulan
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleBulan}
                >
                  <option selected>-- Pilih Bulan --</option>
                  <option value="Januari">Januari</option>
                  <option value="Februari">Februari</option>
                  <option value="Maret">Maret</option>
                  <option value="April">April</option>
                  <option value="Mei">Mei</option>
                  <option value="Juni">Juni</option>
                  <option value="Juli">Juli</option>
                  <option value="Agustus">Agustus</option>
                  <option value="September">September</option>
                  <option value="Oktober">Oktober</option>
                  <option value="November">November</option>
                  <option value="Desember">Desember</option>

                </select>
              </div>
           

              <div className="mt-4 d-flex justify-content-end mb-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#formInput"
                  data-bs-whatever="@mdo"
                >
                  Buat Jadwal
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#prosesAlgoritma"
                  data-bs-whatever="@mdo"
                >
                  Proses kromosom
                </button>
              </div>

              <div
                className="modal fade"
                id="prosesAlgoritma"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Data Jadwal
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>

                    <div className="modal-body">
                      <h4>Data Lokasi : {lokasi}</h4>
                      <h4>Data Bulan : {bulan}</h4>
                      <button onClick={()=> window.location.reload()}>Reload</button><p />
                      <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button btn btn-success mb-3"
                        table="table-to-xls"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText="Export Data to Excel Sheet"
                      />
                      <div className="mb-3">
                        <div className="table-responsive">
                        <button onClick={handleGenerate}>Klik generate</button>
    <p></p>
    <table border={1}   className="table table-bordered"
                            id="table-to-xls">
        <thead>
        <tr>
                <th></th>
                <th colSpan={3}>sabtu I</th>
                <th colSpan={3}>minggu I</th>
                <th colSpan={3}>sabtu II</th>
                <th colSpan={3}>minggu II </th>
                <th colSpan={3}>sabtu II </th>
                <th colSpan={3}>minggu II </th>
                <th colSpan={3}>sabtu II</th>
                <th colSpan={3}>minggu II </th>
                <th>Total Fitness</th>
            </tr>
            <tr>
                <th>Kromosom 1</th>
                {dataPembina}
                {dataPembinaDua}
                {dataPembinaTiga}
                {dataPembinaEmpat}
                {dataPembinaTujuhBelas}
                {dataPembinaDelapanBelas}
                {dataPembinaSembilanBelas}
                {dataPembinaDuaPuluh}
                <td>{fitnesKromosomSatu}</td>
            </tr>
            <tr>
                <th>Kromosom 2</th>
                {dataPembinaLima}
                {dataPembinaEnam}
                {dataPembinaTujuh}
                {dataPembinaDelapan}
                {dataPembinaDuaSatu}
                {dataPembinaDuaDua}
                {dataPembinaDuaTiga}
                {dataPembinaDuaEmpat}
                <td>{fitnesKromosomDua}</td>
            </tr>
            <tr>
                <th>Kromosom 3</th>
                {dataPembinaSembilan}
                {dataPembinaSepuluh}
                {dataPembinaSebelas}
                {dataPembinaDuabelas}
                {dataPembinaDuaLima}
                {dataPembinaDuaEnam}
                {dataPembinaDuaTujuh}
                {dataPembinaDuaDelapan}
                <td>{fitnesKromosomTiga}</td>
            </tr>
            <tr>
                <th>Kromosom 4</th>
                {dataPembinaTigabelas}
                {dataPembinaEmpatbelas}
                {dataPembinaLimabelas}
                {dataPembinaEnambelas}
                {dataPembinaDuaSembilan}
                {dataPembinaTigaPuluh}
                {dataPembinaTigaSatu}
                {dataPembinaTigaDua}
                <td>{fitnessKromosomEmpat}</td>
            </tr>
            <tr>
                <th>Shift</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
            
        </thead>
    </table>
    <p />
    <h3>Table Induk</h3>
    <table  className="table table-bordered">
        <thead>
        <tr>
                <th></th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
              
            </tr>
            <tr>
                <th>Kromosom 1</th>
              {tableIndukSatu}
            </tr>
            <tr>
                <th>Kromosom 2</th>
              {tableIndukDua}
            </tr>
            <tr>
                <th>Shift</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
        </thead>
    </table>
    <p />
    <h3>Table Fix Jadwal</h3>
    <table  className="table table-bordered">
        <thead>
        <tr>
                <th></th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
            
            
            </tr>
            <tr>
                <th>Nama Pembina</th>
              {tableIndukSatu}
            </tr>
            <tr>
                <th>Shift</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
        </thead>
    </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="formInput"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Pengaturan Algoritma Genetika
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <ProsesGenetika />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="pt-3 mt-4 text-muted border-top">© 2022 dd</footer>
        </div>
      </main>
    </>
  );
}

export default Prosesjadwal;
