const express = require('express');
const Admin = require("../modules/admin.model");
const router = express.Router();

router.get("", async (req, res) => {
    try {
        let admins = await Admin.find().lean().exec();
        return res.status(200).send(admins);
    } catch (error) {
        return res.status(500).send(error.message)
    }
});


router.post("", async (req, res) => {
    try {
        const admin = await Admin.create(req.body);
        res.send(admin);

    }
    catch (err) {
        res.send(err.message);
    }
});

router.patch("/:_id", async (req, res)=>{
    try {
        const admin = await Admin.findByIdAndUpdate(req.params._id, req.body,{new:true});
        res.send(admin)
    }
    catch (err) {
        console.log('err', err);
    }
})

module.exports = router;