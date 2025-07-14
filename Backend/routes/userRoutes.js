  
  import express from 'express';

  
import {
  saveUserData,
  getUserData
} from '../controllers/userController.js';

import {
  saveAIRephrasedSummary,
  getAIRephrasedSummaries,
  deleteAIRephrasedSummary,
  renameAIRephrasedSummary
} from '../controllers/userAiControllers.js';


const router = express.Router();

router.post('/save', saveUserData);
router.get('/:uid', getUserData);



// AI Routes
 

router.post('/ai/save', saveAIRephrasedSummary);
router.get('/ai/:uid', getAIRephrasedSummaries);
router.delete('/ai/:uid/:summaryId', deleteAIRephrasedSummary);
router.put('/ai/rename/:uid/:summaryId', renameAIRephrasedSummary);

export default router;
