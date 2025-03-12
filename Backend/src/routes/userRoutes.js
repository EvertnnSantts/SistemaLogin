import express from 'express';
import { getallUsers, createrUsers } from '../controllers/userControllers.js';


const router = express.Router();

router.get('/users/:id', getallUsers); 
router.get('/users', getallUsers);    
router.post('/users', createrUsers);

export default router;
