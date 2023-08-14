const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const validateDid= async(req,res)=>{
  const did = req.query.did
  console.log(did)
  const resa = await fetch(`https://resolver.itn.mobi/1.0/identifiers/${did}`)
  if(resa.status===200){
   return res.status(200).send('Itn membership found')
  }
  else{
    return res.status(404).send('Itn membership not found')
  }
}

const userController = {
validateDid,
};

module.exports = userController;
