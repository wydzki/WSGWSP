const axios = require('axios');

module.exports = async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`logged a niggas ip address: ${ip}`); 

    try {
        const response = await axios.get(`https://ipinfo.io/${ip}?token=YOUR_IPINFO_TOKEN`);
        const { country, region, city } = response.data;

        res.status(200).send(`he's from: ${city}, ${region}, ${country}`);
    } catch (error) {
        console.error('couldnt get bros region', error);
        res.status(500).send('couldnt get bros region');
    }
};
