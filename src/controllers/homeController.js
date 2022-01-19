import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    // console.log("====================================");
    // console.log(data);
    // console.log("====================================");
    return res.render("page1/homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("page1/aboutPage.ejs");
};

module.exports = {
  getAboutPage,
  getHomePage,
};
//adm
//là người bán hàng
//Không là người bán hàng
//Phân tích cơ sở dữ liệu dự án backend website bán hàng
