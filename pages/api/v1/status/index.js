import database from "infra/database.js"

async function status(request, response) {
  /*const result = await database.query('SELECT 1+1 as sum;');
  console.log(result.rows);
  response.status(200).json({ chave: "valorzão" });
  //send("Resposta aqui!");*/
  const updatedAt = new Date().toISOString();
  //const postgresVersion = await database.query('SELECT version();');
  const postgresVersion = await database.query('SHOW server_version;');
  //const usedConnections = await database.query("SELECT count(*)::int FROM pg_stat_activity WHERE datname = '" + process.env.POSTGRES_DB + "' and state = 'active';");
  //const usedConnections = await database.query(`SELECT count(*)::int FROM pg_stat_activity WHERE datname = '${process.env.POSTGRES_DB}' and state = 'active';`);
  const databaseName = process.env.POSTGRES_DB;// || request.query.databaseName;
  const usedConnections = await database.query({
    text:
    "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName]
    });
    console.log(usedConnections.rows[0].count);
  const maxConnections = await database.query('SHOW max_connections;');
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: parseFloat(postgresVersion.rows[0].server_version),
        max_connections: parseInt(maxConnections.rows[0].max_connections),
        used_connections: usedConnections.rows[0].count
      }
    }    
  });
}

export default status;