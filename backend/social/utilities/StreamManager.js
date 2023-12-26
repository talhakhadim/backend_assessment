const {db} = require('../database/models');
const processMessage = async (kafkaMessage) => {
	try {
		if(kafkaMessage.event_name === 'tenant_created'){
			await db.TenantProfile.create(kafkaMessage.properties)
	   }else if(kafkaMessage.event_name === 'user_created'){
			await db.UserProfile.create(kafkaMessage.properties)
	   }
		
	} catch (error) {
		console.log(error.message)
		
	}
};

module.exports = { processMessage };

