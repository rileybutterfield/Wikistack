const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

module.exports = {
  db
}

const Page = db.define('Page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
})

Page.beforeValidate((page) => {
    if (!page.slug) {
      page.slug = page.title.replace(/\s/g, "_").replace(/\W/g, "").toLowerCase();
    }
  });

//   Page.beforeValidate((page) => {
//     page.tags = req.body.tags.split(" ");
//   });

const User = db.define('User', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
    }
})


Page.belongsTo(User, { as: 'author' });

module.exports = {db, Page, User}

