module.exports = (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`logged a nigga's IP address: ${ip}`); // bruh dont even

    res.status(200).send('HI wsg wsp sup');
};
