const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

router.post('/login', adminController.adminLogin)
router.post('/register', adminController.adminRegister)
router.get('/users', adminController.getUsers)
router.get('/agents', adminController.getAgents)
router.get('/listpackages',adminController.listPackage)

router.post('/addcategory',adminController.addCategory)

router.get('/listcategory',adminController.listCategory)

router.patch('/blockuser',adminController.blockUser)

router.patch('/unblockuser',adminController.unBlockuser)

router.patch('/blockagent',adminController.blockAgent)

router.patch('/unblockagent',adminController.unBlockAgent)

router.delete('/deletecategory/:id',adminController. deleteCategory)

router.delete('/deletepackage/:id',adminController.deletePackage)

router.post('/approve',adminController.approveAgent)

router.post('/notapprove',adminController.notapproveAgent)


router.get('/allorders', adminController.allOrders)

router.patch('/bookingStatus', adminController.bookingStatus)





module.exports = router;