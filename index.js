(async () => {

    const db = require('./models')

    await db.sequelize.sync({force : true})

    const user = await db.User.create({
        firstName: 'Gonzalo',
        lastName: 'Diaz',
        email: 'gonzacade@cilindro.com',
        disponible: true
    })
    const user2 = await db.User.create({
        firstName: 'papa',
        lastName: 'na',
        email: 'gonza@cilindro.com',
        disponible: true
    })
    const user3 = await db.User.create({
        firstName: 'leo',
        lastName: 'messi',
        email: 'messi@afa.com',
        disponible: false
    })

    const recu1 = await db.User.findByPk(3)
    console.log(JSON.stringify(recu1, null, 2))

    const recu2 = await db.User.findOne({
        where : {firstName: 'Gonzalo'}
    })
    console.log(JSON.stringify(recu2, null, 2))     

    const recu3 = await db.User.findAll({
        where: {firstName: 'Gonzalo'}
    })
    console.log(JSON.stringify(recu3, null, 2))         

    const borrar = await db.User.destroy({
        where: {firstName : 'papa'}
    })
    console.log(JSON.stringify(borrar, null, 2))

    const editar = await db.User.findByPk(1)
    editar.email='bla'
    editar.save()
    
})()



