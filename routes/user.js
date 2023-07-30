import express  from "express";
import { puzzle1, puzzle2, puzzle3, puzzle4, puzzle5 } from "../controllers/puzzels.js";
import { login, register, showlogin, showregister , showadmin, verifyAdmin, showrules, showall} from "../controllers/user.js";

const router=express.Router();

router.get('/load',showlogin);
router.get('/rules',showrules);
router.get('/view',showall);
router.get('/registerpage',showregister);

router.get('/admin',showadmin);

router.post('/Admin',verifyAdmin);

 router.post("/register",register)
 
 router.post("/login",login)
 
 router.post("/puzzle1",puzzle1)
 
 router.post("/puzzle2",puzzle2)
 
 router.post("/puzzle3",puzzle3)
 router.post("/puzzle4",puzzle4)
 router.post("/puzzle5",puzzle5)

 export default router;
