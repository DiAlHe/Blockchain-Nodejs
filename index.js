const Block = require('./src/block');
const block = require('./src/block');
const Blockchain = require('./src/blockchain');

async function run(){
    const blockchain = new Blockchain();
    const block1 = new Block({data: 'Block1'});
    const block2 = new Block({data: 'Block2'});
    const block3 = new Block({data: 'Block3'});

    await blockchain.addBlock(block1);
    await blockchain.addBlock(block2);
    await blockchain.addBlock(block3);

    blockchain.print()
}

run();