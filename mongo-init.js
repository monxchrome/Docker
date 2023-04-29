db.createUser(
    {
        user: 'shikiray',
        pwd: 'admin',
        roles: [
            {
                role: 'readWrite',
                db: 'nodejs2023'
            }
        ]
    }
)