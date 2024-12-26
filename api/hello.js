module.exports = (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`IP Address: ${ip}`); // Log the IP to Vercel logs

    res.status(200).send('IP logged!');
};
