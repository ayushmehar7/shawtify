const Shortener = require("../models/shortenerModel")
const {errorHandling} = require("../utils/errorHandler")
const urlGenerator = require("../utils/urlGenerator")


exports.createShortener = (req, res)=>{
    let {longURL} = req.body
    longURL = longURL.replace(/www\./i, "")
    if (!/^https?:\/\//i.test(longURL)) {
        longURL = 'http://' + longURL;
    }
    Shortener.findOne({long_url: longURL}).then(s=>{
        if(s){
            return res.status(200).json({
                instance: s
            })
        }
        Shortener.create({long_url: longURL}).then(async data => {
            const shortURL = urlGenerator()
            data.short_url = shortURL
            await data.save()
            res.status(201).json({
                instance: data
            })
        }).catch(err =>{    
            return errorHandling(res, err, "Instance")
        })
    }).catch(err=>{
        res.status(500).json({
            message: "Something went wrong!"
        })
    })
}


exports.redirect = (req, res)=>{
    const {url: short_url} = req.body
    Shortener.findOne({short_url}).then(async data => {
        if(!data){
            return res.status(404).json({
                message: "No URL found"
            })
        }
        data.timesFollowed = data.timesFollowed+1
        await data.save()
        return res.status(200).json({
            instance: data
        })
    }).catch(err=>{
        errorHandling(res, err, "Instance")
    })


}