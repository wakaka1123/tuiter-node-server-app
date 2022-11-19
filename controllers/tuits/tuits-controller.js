import * as tuitsDao from '../tuits/tuits-dao.js';
// import posts from "./tuits.js";
// let tuits = posts;

const createTuit = async (req, res) => {
  const newTuit = req.body;
  // newTuit._id = (new Date()).getTime()+'';
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.liked = false;
  // tuits.push(newTuit);
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  return res.json(tuits);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  // tuits = tuits.filter((t) =>
  //     t._id !== tuitdIdToDelete);
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;

  const status = await tuitsDao.updateTuit(tuitdIdToUpdate,updates);
  // console.log(updates)
  res.json(updates);

  // const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
  // if(tuitIndex>=0) {
  //       tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
  //
  //       res.json(tuits[tuitIndex])
  //   }else {
  //       res.send(404)
  // }
}


export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}
