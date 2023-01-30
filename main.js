const axios = require('axios');

async function findOpenGroups() {
  for (let i = 300000; i < 900000; i++) {
    try {
      const group = await axios.get(`https://groups.roproxy.com/v1/groups/${i}`);
      if (group.data.publicEntryAllowed === true && group.data.owner === null) {
        await axios.post('YOUR_WEBHOOK_URL', {
          content: `Found an open group: https://www.roblox.com/groups/${i}`
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

findOpenGroups();
