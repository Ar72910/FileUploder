const File = require('../models/File');


// localFileUpload -> handler Function 

exports.localFileUpload = async (req,res)=>{
    try{
        // FETCH FILES
        const file = req.files.file;
        console.log("FILE AAGYI HEI ->",file);

        // __dirname -> it shows the current directry
        // currently __dirname represent controllers
        
        let path = __dirname +"/files/"+Date.now();
        console.log("PATH->",path);

        file.mv(path,(err)=>{
            console.log(err);
             
        });
        res.json({
            success:true,
            message:'Local file Uploaded Successfully'
        })

    }
    catch(err) {
        console.log(err);

    }
}