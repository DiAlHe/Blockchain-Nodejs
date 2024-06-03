const SHA256 = require("crypto-js/sha256");
const hex2ascii = require("hex2ascii")

class Block{
    constructor(data){
        this.hash = null;
        this.height = 0;
        this.body = JSON.stringify(data),toString("hex");
        this.time = 0;
        this.previusBlockHash = "";
    }

    validate(){
        return new Promise((resolve,reject) => {
            let currentHash = this.hash;

            this.hash = SHA256(JSON.stringify({...this,hash:null})).toString()

            if (currentHashv !== this.hash){
                return resolve(false);
            }

            resolve(true)
        })
    }

    getBlockData(){
        return new Promise((resolve,reject) => {
            let encodeData = this.body;
            let decodeData = hex2ascii(encodeData);
            let dataObject = JSON.parse(decodeData) 

            if(dataObject === 'Genesis Block'){
                  reject(new Error("This is the Genesis Block"))
            }

            resolve(dataObject)
        })
    }

    toString(){
        return `Block - 
        Hash: ${this.hash}
        height: ${this.height}
        body: ${this.body}
        time: ${this.time}
        previusBlockHash: ${this.previusBlockHash}
        ------------------------------------------`;
    }
}

module.exports = Block