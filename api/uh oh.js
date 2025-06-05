module.exports = (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`a person has pressed your website, new traffic!: ${ip}`); // bruh dont even

    res.status(200).send(' ');
};