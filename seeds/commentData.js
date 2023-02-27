const { Comment } = require('../models');

const commentdata = [
  {
    comment: 'Comment 1',
    creation_date: 'March 30, 2018',
    post_id: 1,
    user_id: 2,
  },
  {
    comment: 'Comment 2',
    creation_date: 'May 05, 2017',
    post_id: 1,
    user_id: 3,
  },
  {
    comment: 'Comment 3',
    creation_date: 'June 10, 2019',
    post_id: 2,
    user_id: 1,
  },
  {
    comment: 'Comment 4',
    creation_date: 'July 4, 2020',
    post_id: 3,
    user_id: 4,
  },
  {
    comment: 'Comment 5',
    creation_date: 'August 14, 2016',
    post_id: 3,
    user_id: 4,
  },
  {
    comment: 'Comment 6',
    creation_date: 'October 15, 2018',
    post_id: 4,
    user_id: 5,
  },
  {
    comment: 'Comment 7',
    creation_date: 'November 3, 2016',
    post_id: 4,
    user_id: 1,
  },
  {
    comment: 'Comment 8',
    creation_date: 'December 24, 2020',
    post_id: 4,
    user_id: 1,
  },
  {
    comment: 'Comment 9',
    creation_date: 'January 20, 2018',
    post_id: 4,
    user_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
