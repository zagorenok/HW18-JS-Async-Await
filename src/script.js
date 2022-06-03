"use strict";

// ...............................................#1
function delay(ms, str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(str), ms),
      setTimeout(() => reject(new Error("error")), ms);
  });
}

async function getUserInfo() {
  return { name: "Vic", age: 21, id: 1 };
}

async function getUserAvatar(userInfo) {
  return (userInfo.avatar =
    "https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg");
}

async function getUserAdditionalInfo(userInfo) {
  return (userInfo.interests = ["sport", "books"]);
}

async function getResult() {
  try {
    let userInform = await delay(1000, getUserInfo());
    let userAvatar = await delay(2000, getUserAvatar(userInform));
    let userAdditionalInfo = await delay(
      3000,
      getUserAdditionalInfo(userInform)
    );
    console.log(userInform);
    console.log(userAvatar);
    console.log(userAdditionalInfo);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("FINALLY!!!");
  }
}
getResult();

// ...............................................#2
async function getUser() {
  return {name: "Vic", age: 21, id: 1};
}

async function getInfo() {
  try {
    let user = await getUser(); 
    console.log(user);
  } catch(error) {
    console.error(error);
  }
}
getInfo();
