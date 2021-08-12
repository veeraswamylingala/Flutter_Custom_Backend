import Router from "express";
import { DBController } from "../controller/db_controller";
import { MongoDBController } from "../controller/mongodb_controller";


const router = Router();

//Get-----------------------------------------------------------------
//HomePage
router.get("/",(req,res)=>{
    console.log("opening Cart Api")
    res.send({

        received:false,
        data:"this is Home page",
    });
});


//Profile
router.get("/profile",(req,res)=>{
    console.log("opening Cart Api")

    res.send({
        received:false,
        data:"this is Profile page",
    });
});


///Cart
router.get("/cart",(req,res)=>{
    console.log("opening Cart Api")

    res.send({
        received:false,
        data:"this is cart page",
    });
});


///tag
// router.get("/gettag",(req,res)=>{
//     console.log("tag")

//     res.send({
//         received:false,
//         data:"this is tag page",
//     });
// });



router.get("/verify",DBController.showdata)


router.get("/admin",DBController.showAdminData)

//Tag info
router.get("/getTag",DBController.getTagData);

//Post---------------------------------------------------------
//Signup
 router.post("/signup",DBController.signup);
 

 //Upload File -----
 router.post("/uploadFile",DBController.uploadFile);


//Tag info
 router.post("/tag",DBController.postTagData);

//MongoDb_Routes
router.post("/mongodb/create",MongoDBController.createData)
router.get("/mongodb/read",MongoDBController.readData)
router.put("/mongodb/update",MongoDBController.updateData)
router.post("/mongodb/exists", MongoDBController.checkIfExists);

router.delete("/mongodb/delete/:useruid",MongoDBController.deleteData)




///Stickers...
router.post("/mongodb/addsticker",MongoDBController.addStickers)
router.get("/mongodb/getstickers",MongoDBController.getStickers)

export {router};

