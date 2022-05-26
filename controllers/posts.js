const Post = require('../models/post');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');

const s3 = new S3();

module.exports = {
    create,
    index,
    delete: deletePost
}

function create(req, res){
    console.log('Create method begin>>>','req.file: ',req.file,'req.body: ', req.body,'req.user: ', req.user,'<<<Create method End',)
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data){
			console.log(err, 'Creating Post AWS ERROR')
            const post = await Post.create({caption: req.body.caption, user: req.user, photoUrl: data.Location, boardGames: req.body.boardGames, computerGames: req.body.computerGames
                , cooking: req.body.cooking, discussion: req.body.discussion, outdoors: req.body.outdoors, restaurants: req.body.restaurants, sports: req.body.sports
                , trivia: req.body.trivia, TTRPG: req.body.TTRPG});
			await post.populate('user');
            res.status(201).json({post: post})
        })

    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function index(req, res){
    try {
        const posts = await Post.find({}).populate('user').exec()
        res.status(200).json({posts})
    } catch(err){

    }
}

async function deletePost(req, res){
    try {
        const post = await Post.findOne({'posts._id': req.params.id})
        post.remove
        console.log("deleted this>>>>",post,"<<< GONE!")
        await post.save()
        res.json({data:'post removed'})
    } catch(err){
        res.status(400).json({err})
    }
}