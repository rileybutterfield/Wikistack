const express = require('express');
const router = express.Router();
const { Page, User } = require("../models");
const addPage = require('../views/addPage.js');
const wikipage = require('../views/wikipage.js');
const main = require('../views/main.js');


module.exports = router;



router.get('/', async (req, res, next) => {
  try{
    const pages = await Page.findAll()
    res.send(main(pages))
   } catch(error){
      next(error)
   }
});

router.post("/", async (req, res, next) => {
    try {
      const [user, wasCreated] = await User.findOrCreate({
        where: {
          name: req.body.name,
          email: req.body.email,
        },
      });

      const page = await Page.create(req.body);

      await page.setAuthor(user);

      res.redirect("/wiki/" + page.slug);
    } catch (error) {
      next(error);
    }
  });

router.get('/add', (req, res, next) => {
    res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
    try{
      const page = await Page.findOne({
          where: {
              slug: req.params.slug
          }
      })
      const author = await page.getAuthor()
      res.send(wikipage(page, author))
    } catch(error){
        next(error)
    }
  });
