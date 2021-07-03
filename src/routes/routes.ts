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
router.get("/gettag",(req,res)=>{
    console.log("tag")

    res.send({
        received:false,
        data:"this is tag page",
    });
});



router.get("/verify",DBController.showdata)


router.get("/admin",DBController.showAdminData)

//Post---------------------------------------------------------
//Signup
 router.post("/signup",DBController.signup);


//Tag info
 router.post("/tag",DBController.getTagData);

//MongoDb_Routes
router.post("/mongodb/create",MongoDBController.createData)
router.get("/mongodb/read",MongoDBController.readData)
router.put("/mongodb/update",MongoDBController.updateData)
router.post("/mongodb/exists", MongoDBController.checkIfExists);

router.delete("/mongodb/delete/:useruid",MongoDBController.deleteData)





export {router};

