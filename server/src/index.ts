import * as express from 'express';
import * as bodyParser from "body-parser";
import {graphqlExpress, graphiqlExpress} from "graphql-server-express";
import * as cors from 'cors'
import {schema} from "./data/schema";
import {Database} from "./database/Database";


let whitelist = [
  'http://localhost:3000',
];
let corsOptions = {
  origin: function (origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};

const GRAPHQL_PORT = 4000;

const database = new Database({database: 'genohm_kpi'});

database.connect();



const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));



app.get('/', (req, res) => {
  res.send('Hello World again, and again');
});


app.use('/graphql', bodyParser.json(), graphqlExpress(request => {
  return {
    schema: schema(database),
  }
}));


app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
