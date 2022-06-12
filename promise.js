const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const marahTidak = (data, emosi) => {
  return new Promise(resolve => {
    const dataKu = data.map((x) => {
      let hitung = 0;
      const hasil = x.hasil;
      if(hasil === emosi){
        return hitung = 1;
        
      }else if(hasil !== emosi){
        return hitung =0;
      }
    });
    
    const callbackSum = (prev, curr) => {
        return prev + curr;
    }
    const total = dataKu.reduce(callbackSum);
    resolve(total);
      
  });
  
};
const promiseOutput = async (emosi) => {
  
   let ixxData = await promiseTheaterIXX();
   let vgcData = await promiseTheaterVGC();
  
    try {
     
     const jumlahIxxData = await marahTidak(ixxData, emosi);
     const jumlahVgcData = await marahTidak(vgcData, emosi);
     const hasil = jumlahIxxData + jumlahVgcData;
    return hasil;
    
  } catch (error) {
    console.log('error');
  }
};
promiseOutput('marah');
promiseOutput('tidak marah');

module.exports = {
  promiseOutput,
};
