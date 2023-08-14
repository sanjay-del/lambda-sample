const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const AWS= require('aws-sdk')
AWS.config.update({region: 'us-west-2'});
const validateDid= async(req,res)=>{
  const did = req.query.did
  console.log(did)
  const eventbridge = new AWS.EventBridge({eventBusName: 'event-relay-bus'});
  let response;  
  // Define the event details
  const eventDetails = {
      Source: 'eventProducerApp',
      DetailType: 'inbound-event-sent',
      Detail: JSON.stringify({ "event-id": "123", "return-response-event": true })
  };

  const resa = await fetch(`https://resolver.itn.mobi/1.0/identifiers/${did}`)
  if(resa.status===200){
    try {
      response = await eventbridge.putEvents({ Entries: [eventDetails] }).promise();
      console.log('Event sent to EventBridge:', response);
    } catch (error) {
      console.error('Error sending event:', error);
    }
   return res.status(200).send(`Itn membership found \
   ${response}`)
  }
  else{
    return res.status(404).send('Itn membership not found')
  }
}

const userController = {
validateDid,
};

module.exports = userController;
