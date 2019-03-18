function filter(req, res) {
    const data = req.body.payload;
    const myresponse = data.map(d => {
        if (d.drm && d.episodeCount > 0) {
            return {
                image: d.image.showImage,
                slug: d.slug,
                title: d.title
            }
        }
    }).filter(item => item)
    return res.json({ response: myresponse });
}

module.exports = { filter };