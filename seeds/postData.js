const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1',
    content: 'Content 1',
    creation_date: 'June 21, 2021 17:00:00',
    user_id: 1,
  },
  {
    title: 'Post 2',
    content: 'Content 2',
    creation_date: 'September 22, 2021 22:00:00',
    user_id: 2,
  },
  {
    title: 'Post 3',
    content: 'Content 3',
    creation_date: 'December 21, 2021 20:30:00',
    user_id: 3,
  },
  {
    title: 'Post 4',
    content: 'Content 4',
    creation_date: 'March 19, 2021 19:00:00',
    user_id: 4,
  },
];

const seedPosts = () => Gallery.bulkCreate(postdata);

module.exports = seedPosts;
