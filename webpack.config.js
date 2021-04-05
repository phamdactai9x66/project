

const path = require("path");

module.exports={
    // devtool: "eval-source-map",
    entry: "./src/index.ts",//tim file nguon js,
    resolve:{
        extensions:[".ts",".js"]//when chung ta import no se hieu how to resolve
    },
    output:{
        filename:"main.js",//co the thay doi ten khi complide
        path:path.resolve(__dirname,"/dist"),//va noi nose den
       
    },
    //hien thi loi o dau
    devServer:{//su dung duoc server
        contentBase: "./dist",
        open:true
    },
    mode:"development",
   //mai hoi thay//tai sao phai su dung server
    module:{
        rules:[
            {
                test: /\.ts$/,
                use:"ts-loader",
                include:[path.resolve(__dirname,"./src")]//chi duoc bao gom cac ts co trong src
                //cai do nghia la no chi found trong src
            }
        ]
    }
   
}