import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema 
{
    protected tableName = 'users'
    
    public async up() 
    {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unsigned().primary()
            table.string('username', 50).notNullable().unique()
            table.string('email', 45).notNullable().unique()
            table.string('contrasenia', 255).notNullable().unique()
            table.integer('age').notNullable
            table.string('sex', 10).nullable
            table.text('biography').nullable
            table.integer('No_followers').defaultTo(0);
            /**
             * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.dateTime('created_at', { useTz: true })
            table.dateTime('updated_at', { useTz: true })
        })
    }

    public async down() 
    {
        this.schema.dropTable(this.tableName)
    }
}
