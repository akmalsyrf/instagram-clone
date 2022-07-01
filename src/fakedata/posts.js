import { users } from "./users";

export const post = [
  {
    imageurl: "https://images.unsplash.com/photo-1643779374715-b9ed5786c3f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    user: users[0].user,
    likes: 2300008,
    caption: "Look at this, it's so cute 🤤",
    profile_picture: users[0].image,
    comments: [
      {
        user: users[1].user,
        comment: "Nice pic!",
      },
      {
        user: users[2].user,
        comment: "How did you get this pic?",
      },
    ],
  },
  {
    imageurl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    user: users[1].user,
    likes: 36767580,
    caption: "Look at this, it's so cute 🤤",
    profile_picture: users[1].image,
    comments: [],
  },
];
