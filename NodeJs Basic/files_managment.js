let fs;
fs = require('fs');

// reading file
fs.readFile("./docs/blog1", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

/// ------------ ----------- ----------- ///

// write file
fs.writeFile('./docs/blog1', "Hello ahmad use write file", () => {
    console.log("writing file");
});


/// append to file ( flag , => a )
for (let i = 0; i < 1000; i++) {
    fs.writeFile('./docs/blog2', "create new file if not exit , \n", {flag: 'a'}, () => {
        console.log("writing file");
    });
}

/// ------------ ----------- ----------- ///

// deleting file

// directories

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err.toString());
        }
        console.log('Folder created');
    });
}else{
    // console.log('assets folder already created');

    /*
             //////   delete folder    /////
            fs.rmdir('./assets',(err)=>{
                if(err){
                    console.log(err);
                }
                console.log("remove assets folder");
            });

     */
}

