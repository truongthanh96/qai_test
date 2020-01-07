function test(){
if (targetDbConfigEnv.driver == 'pg') {
        log.info("migratedb", "Updating sequences...");
        return target.query("SELECT setval('links_id_seq', COALESCE((SELECT MAX(id)+1 FROM links), 1), false)", 
        {type: Sequelize.QueryTypes.SELECT})
            .then(() => target.query("SELECT setval('node_versions_id_seq',"+
            " COALESCE((SELECT MAX(id)+1 FROM node_versions), 1), false)", {type: Sequelize.QueryTypes.SELECT}))
            .then(() => target.query("SELECT setval('nodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM nodes), 1), false)",
             {type: Sequelize.QueryTypes.SELECT}))
            .then(() => target.query("SELECT setval('node_meta_id_seq', COALESCE((SELECT MAX(id)+1 FROM node_meta), 1), false)", 
            {type: Sequelize.QueryTypes.SELECT}))
            .then(() => target.query("SELECT setval('state_events_id_seq', COALESCE((SELECT MAX(id)+1 FROM state_events), 1), false)", 
            {type: Sequelize.QueryTypes.SELECT}))
            .then(() => 
            target.query("SELECT setval('timeline_events_id_seq', COALESCE((SELECT MAX(id)+1 FROM timeline_events), 1), false)", 
            {type: Sequelize.QueryTypes.SELECT}))
    }
}
