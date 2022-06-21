import express from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"
import bodyparser from "body-parser"
const app = express();

app.use(bodyparser.json({
    extended: true
}))

const posts = [
    {
        username: "vikash",
        title: "first post",
    },
    {
        username: "vikas",
        tilt: "second post ",
    },
];

const users = [
    {
        name: "vikash",
        password: "1234"
    },
    {
        name: "arun",
        password: "1234"
    }

]

const refreshtokens = []


app.get("/posts", authenticateToken, (req, res) => {
    const user = req.body.user;
    const postsdata = posts.filter((post) => {
        return post.username === user
    })
    res.json({
        post: postsdata,
    })
})

app.post("/login", (req, res) => {

    const name = req.body.name;
    const password = req.body.password;
    let authenticateduser = null;
    users.forEach(user => {
        if (name === user.name && password === user.password) {
            authenticateduser = true;
        }
    });
    if (authenticateduser) {
        const accessToken = jwt.sign({ name: name }, process.env.TOKEN_SECRET, { expiresIn: '15s' })
        const refreshToken = jwt.sign(name, process.env.REFRESH_TOKEN_SECRETE)
        refreshtokens.push(refreshToken)
        res.json({
            accessToken: accessToken,
            refreshToken: refreshToken
        })
    } else {
        res.json({
            error: "you are not our user "
        })
    }

})


app.get('/token', (req, res) => {
    const token = req.body.token;

    if (!token) res.send(401)
    if (!refreshtokens.includes(token)) res.send(403)

    const user = jwt.verify(token, process.env.REFRESH_TOKEN_SECRETE)

    if (user) {
        const accessToken = jwt.sign({ name: user.name }, process.env.TOKEN_SECRET, { expiresIn: '15s' })
        res.json({
            accessToken: accessToken,
            refreshtokens: refreshtokens
        })
    }
}

)


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}


app.listen(3000, () => {
    console.log("app is running on port 4001");
});
