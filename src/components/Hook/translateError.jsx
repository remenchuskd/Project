import React from "react";

export default function translate(obj) {
  let newObj = {};
  let translate = {
    'Email or Username are already taken':'такой пользователь или эмейл уже существует',
    "email must be a valid email": "некорректный эмейл ",
    "username is a required field": "необходимо указать логин",
    "username must be at least 3 characters":
      "длина логина должна быть больше 3 символов",
    "password must be at least 6 characters":
      "длина пароля должна быть больше 6 символов",
    "Email or Username are already taken":
      "такой пользователь или емейл уже существует",
  };

  Object.keys(obj).forEach((item) => {
     newObj[item] = translate[obj[item]];
  });

  return newObj;
}
