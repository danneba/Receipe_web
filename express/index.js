const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
// const signup_query = require("./queries/signup_query");
// const login_query = require("./queries/login_query");
require("dotenv").config();

const app = express();

app.use(express.json);

app.use(cors());
app.get("/",(req,res)=>{
  res.send("serbdr....")
})

const HASURA_OPERATION = `
mutation signup($Email:String!,$First_name:String!,$Last_name:String!,$Password:String!) {
  insert_user_one(object: {Email: $Email, First_name: $First_name, Last_name: $Last_name, Password: $Password}) {
    Id
    Email
    Password
  }
}
`;


// signup query execute
const signup_execute = async (variables) => {
  const fetchResponse = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
    headers: { "x-hasura-admin-secret": "myadminsecretkey" },
    body: JSON.stringify({
      query: HASURA_OPERATION,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("DEBUG: ", data);
  return data;
};

app.post("/signup", async (req, res) => {
    // get request input
    console.log("handler")
    const { Email, First_name, Last_name } = req.body.input;
  
    // run some business logic
    const Password = await bcrypt.hash(req.body.input.password, 10);
    // execute the Hasura operation
  
    const { data, errors } = await signup_execute({
      Email,
      First_name,
      Last_name,
      Password,
    });
    // if Hasura operation errors, then throw error
    if (errors) {
      return res.status(400).json(errors[0]);
    }
  
    const tokenContents = {
      sub: data.insert_user_one.id,
      name: First_name,
      iat: Date.now() / 1000,
      iss: "https://myapp.com/",
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["user", "admin"],
        "x-hasura-user-id": data.insert_user_one.id,
        "x-hasura-default-role": "user",
        "x-hasura-role": "user",
      },
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,                                        
    };
  
    const token = jwt.sign(
      tokenContents,
    process.env.HASURA_JWT_SECRET_KEY || "4u7x!A%D*G-KaPdSgVkXp2s5v8y/B?E"
    );
    console.log(token);
    // success
  
    return res.json({
      ...data.insert_user_one,
      token: token,
    });
  });

  


const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});