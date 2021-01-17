const File = require('../models/file.model')

exports.upload = async function (req, res) {
    if(!req.file){
        return;
    }

    const saveFile = new File(req.file);
    saveFile.save((err, doc) => {
        if (err) {
            console.log('error uploading', err)
            return res.status(501).json({
                success: false,
                error: err
            })
        }

        res.status(200).json({
            success: true,
            file: doc
        })
    });
}
