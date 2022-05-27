const Friend = require('../models/friend');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');

const s3 = new S3();

module.exports = {
    create,
    index,

}

function create(req, res){
    console.log('Create method begin>>>','req.file: ',req.file,'req.body: ', req.body,'req.user: ', req.user,'<<<Create method End',)
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data){
			console.log(err, 'Creating Friend AWS ERROR')
            const friend = await Friend.create({user: req.user, name: req.body.name, photoUrl: data.Location, computerGames: req.body.computerGames
                , cooking: req.body.cooking, discussion: req.body.discussion, outdoors: req.body.outdoors, restaurants: req.body.restaurants, sports: req.body.sports
                , trivia: req.body.trivia, TTRPG: req.body.TTRPG});
			await friend.populate('user');
            res.status(201).json({friend: friend})
        })

    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function index(req, res){
    try {
        const friends = await Friend.find({}).populate('user').exec()
        res.status(200).json({friends})
    } catch(err){

    }
}