# manuelFahrenholzPBFinalProject

Manuel Fahrenholz Final Project for the Programming-Basics-Module

You'll find two JS files in the src > javascript folder: - index.js - terminal output is made prettier with npm module chalk - noChalkIndex.js - as the name implies, the same code but without the chalk module additions for better readability.

More Ideas to come over time as there just wasn't enough time to implement everything I wanted but the basic concept stands and works :)!

Hope you'll enjoy it!

Manuel

PS: In case the colors don't work in the terminal when using `node index.js`, you might need to do the following:

-   Check if the node modules are properly cloned, if not you can install chalk with the following terminal command:
    -   `npm i chalk`
-   double check if the `package.json` file looks something like this:

```JSON
{
  "type":"module",
  "dependencies": {
    "chalk": "^5.2.0",
    "prompt-sync": "^4.2.0",
    "readline-sync": "^1.4.10"
  }
}
```

-   the important part here is `"type": "module",` `"dependencies":{"chalk": "^VERSION NUMBER",}`
    -   if anything of this is missing, just copy paste the above code in there and maybe delete the prompt-sync and readline-sync part, since we don't need them for this (yet; plus if we would and if you had to install chalk, you would need to install those two as well, but again, don't worry about those, they are just installed on my end because I have plans with them ;) )
