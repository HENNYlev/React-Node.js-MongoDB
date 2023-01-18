const express = require('express');
const subscriptionBL = require('../models/subscriptionsBL');
const router = express.Router();

router.get("/", async function (req, res) {
    try {
        const subscription = await subscriptionBL.getAllSubscriptions();
        console.log(subscription);
        res.status(200).json(subscription);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err })
    }
})

router.get("/:id", async function (req, res) {
    console.log("get")
    try {
        let id = req.params.id;
        const subscription = await subscriptionBL.getSubscriptionById(id);
        res.status(200).json(subscription);
        console.log(subscription);
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

router.post("/", async function (req, res) {
    try {
        const status = await subscriptionBL.addSubscription(req.body);
        console.log( status)
        res.status(200).json({ msg: status })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ msg: err })
    }
})

router.delete("/:id", async function (req, res) {
    try {
        const status = await subscriptionBL.deleteSubscription(req.params.id);
        res.status(200).json({ msg: status })
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})
router.get("/getSubs/:id", async function (req, res) {
    try {
        let id = req.params.id;
        const subscription = await subscriptionBL.getSubsOfMember(id);
        console.log(subscription);
        res.status(200).json(subscription);
        console.log(subscription);
    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: err })
    }
})
module.exports = router;