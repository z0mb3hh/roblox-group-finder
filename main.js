const axios = require('axios');

async function findOpenGroups() {
  for (let i = 300000; i < 900000; i++) {
    try {
      const group = await axios.get(`https://groups.roproxy.com/v1/groups/${i}`);
      if (group.data.publicEntryAllowed === true && group.data.owner === null) {
        await axios.post('https://discord.com/api/webhooks/1196615108844068864/RYqACJpB28mBod7eN6Hqw9is0GBPZJwp7RBFkS8xfzBEipfKGVh7Q4F40aJtHaCwpcB5', {
          content: `Found an open group: https://www.roblox.com/groups/${i}`
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

findOpenGroups();
