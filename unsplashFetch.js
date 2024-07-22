require("dotenv").config();

const myFetchFunc = async () => {
  const res = await fetch(
    `https://api.unsplash.com/photos/?page=1&limit=6&client_id=${process.env.UNSPLASH_CLIENT_ID}`
  );

  const data = await res.json();
  //   console.log(data);
  const sortedPhotos = await data.map((photo) => {
    return {
      id: photo.id,
      imageUrls: {
        small: photo.urls.small,
      },
      likes: photo.likes,
      photgrapher_name: photo.user.username,
    };
  });
  //   console.log(sortedPhotos[0]);

  // console.log(data[0]);
  console.log(sortedPhotos);
};

myFetchFunc();
