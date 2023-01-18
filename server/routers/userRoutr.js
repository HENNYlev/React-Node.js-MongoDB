const express = require('express');
const usersBL = require('../models/usersBL');
const router = express.Router();

router.get("/:password", async function (req, res) {
    let password = req.params.password;
    let user = await usersBL.getPersonByPassword(password);
    res.status(200).json(user);
})
router.get("/", async function (req, res) {
    try {
        const users = await usersBL.getAllUsers()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})
router.post("/login", async function (req, res) {
    const user = await usersBL.getPersonByPassword(req.body);
    res.status(200).json(user);
})
router.post("/", async function (req, res) {
    console.log("post")
    try {
        const status = await usersBL.createuser(req.body);
        console.log(status);
        res.status(200).json({ msg: status });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: err })
    }
})
router.delete("/:id", async function (req, res) {
    const id = req.params.id
    const status = await usersBL.deletePerson(id)
    res.status(200).json({ msg: status })
})
module.exports = router;
