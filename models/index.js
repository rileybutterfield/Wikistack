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
        defaultValue: 'Teddy Is A Very Good Boy'
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Teddy-is-great'
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'I mean, obviously!'
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
})

const User = db.define('User', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false,
        defaultValue: 'Teddy'
    },
    email: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
            isEmail: true
        },
        defaultValue: 'Teddy@cuteDogs.com'
    }
})


module.exports = {db, Page, User}

