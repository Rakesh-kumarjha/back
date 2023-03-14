export const generatenewOtp = (length) => {
    const string = "12345678";
    let newotp = "";
    const len = string.length;
    for (let i = 0; i < length; i++) {
      newotp += string[Math.floor(Math.random() * len)];
    }
    return newotp;
  };