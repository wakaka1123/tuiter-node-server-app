import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = (new Date()).getTime()+'';
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.liked = false;
  tuits.push(newTuit);
  // res.send(200)
  // res.send(newTuit);
  res.json(newTuit);
}
const findTuits  = (req, res) => {
  return res.json(tuits);
}

const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) =>
      t._id !== tuitdIdToDelete);

  // console.log(tuitdIdToDelete)
  res.sendStatus(200);
}

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  // console.log(tuitdIdToUpdate)
  const updates = req.body;
  const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
  // console.log(tuitIndex)
  // console.log(updates)
  if(tuitIndex>=0) {
        tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
        // res.sendStatus(200);
        res.json(tuits[tuitIndex])
    }else {
        res.send(404)
  }
}


export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}
