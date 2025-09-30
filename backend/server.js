import express from 'express';

const app = express();

app.use(express.json());

const jokes =[
        {
            id: 1,
            tittle: "Why did the scarecrow win an award?",
            joke: "Because he was outstanding in his field!",
        },
        {
            id: 2,
            tittle: "Why don't scientists trust atoms?",
            joke: "Because they make up everything!",
        },
        {
            id: 3,
            tittle: "Why did the bicycle fall over?",
            joke: "Because it was two-tired!",
        },
        {
            id: 4,
            tittle: "Why did the math book look sad?",
            joke: "Because it had too many problems!",
        },
        {
            id: 5,
            tittle: "Why did the computer go to the doctor?",
            joke: "Because it had a virus!",
        }
    ];
// app.get('/', (req, res) => {
//     res.send(" Server is Ready");
// })

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
    res.send(jokes);
})

app.post("/api/jokes", (req, res) => {
   const {tittle, joke} = req.body;

   if( !tittle || !joke ){
    return res.status(400)
    .json({
        error: "Both Tittle and Jokes are required.",
    })
   }

   const newJoke = {
    id : jokes.length + 1,
    tittle: tittle,
    joke: joke
   };

   jokes.push(newJoke);

   res.status(201)
   .json(
    { 
        message: " Add New Joke",
        joke: {tittle, joke}
    }
)
})

const PORT = process.env.PORT || 7000;

app.listen( PORT, ()=> {
    console.log(`Server is running on port http://localhost:${PORT}`);
})