const geoip = require('geoip-lite');

module.exports = (req, res) => {
    // Extract the client IP address
    const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();

    // Validate the IP address
    if (!ip || ip.startsWith('127.') || ip === '::1') {
        res.status(400).send('Invalid or internal IP address');
        return;
    }

    console.log(`Logged IP address: ${ip}`);

    // Get geolocation data using geoip-lite
    const geo = geoip.lookup(ip);

    if (geo) {
        const { country, region, city } = geo;
        res.status(200).send(`Hello! You're from ${city || 'Unknown City'}, ${region || 'Unknown Region'}, ${country || 'Unknown Country'}`);
    } else {
        res.status(200).send('Could not determine your location');
    }
};
