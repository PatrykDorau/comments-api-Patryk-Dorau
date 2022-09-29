// const {models: {comment}} = require('../models');
const db = require('../models');
const Comment = db.comment;

exports.createComment = (req, res) => {

  console.log(req)

  if (req.body.message) {
    const comment = {
      message: req.body.message,
      author: req.body.author
    }

    Comment.create(comment)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the comment."
        });
      });
  } else {
    res.status(400).send({
      message: "Brak wiadomości!"
    });
    return;
  }
}

exports.getComments = (req, res) => {

  Comment.findAll()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments."
      });
    });
};