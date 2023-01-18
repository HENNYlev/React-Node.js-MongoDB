const express = require('express');
const membersBL = require('../models/membersBL');
const router = express.Router();

router.get("/", async function (req, res) {
    try {
        const members = await membersBL.getAllMembers();
        console.log(members);
        res.status(200).json(members);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err })
    }
})

router.get("/:id", async function (req, res) {
    console.log("get")
    try {
        let id=req.params.id;
        const member = await membersBL.getMemberById(id);
        res.status(200).json(member);
        console.log(member);
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post("/", async function (req, res) {
    try {
        const status = await membersBL.addMember(req.body);
        res.status(200).json({ msg: status })
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.delete("/:id", async function (req, res) {
    try {
        const status = await membersBL.deleteMember(req.params.id);
        res.status(200).json({ msg: status })
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})
router.put("/:id", async function (req, res) {
    const id = req.params.id
    const member = req.body

    const status = await membersBL.updateMember(id,member);

    res.status(200).json({ msg: status })
})
module.exports = router;
