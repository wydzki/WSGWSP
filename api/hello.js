module.exports = (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`logged a niggas ip address: ${ip}`); // Log the IP to Vercel logs

    res.status(200).send('HI wsg wsp sup');
};
