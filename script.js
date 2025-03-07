// ###################
// Raindrops

const RAINDROPS = 400;

const getPos = () => Math.random() * 100;
for(let _i = 0; _i < RAINDROPS / 2; _i++) {
    const x = getPos(), y = getPos();

    for(let j = 0; j < 2; j++) {
        const drop = document.createElement("div");
        drop.style.left = x + "vw";
        drop.style.top = (y + 100) + "vh";
        if(j == 0)
            drop.classList.add("clone");

        document.querySelector("#raindrops").appendChild(drop);
    }
}

// ###################
// Quote

const QUOTES = `That morning, just me and you
With azure views for two
Our promises bound by sights we long outgrew
A curtain dyed shades unlaid by morning sun
A weeping window wails for days come undone
If I live to be a weathervane
Always pointing off, away, to lead you 'long the flyway
Turned to face this side of you
Would it be enough for me to lead your way?
I’ll stay afraid in weekday
(Come what may)
I reach for what remains
Didn't you see the news today?
I heard they said it looked like rain
All the words I left unsaid that day
Stained the sidewalk drop by drop with gray, oh
Rain or shine, I'm by your side
So why won't you look my way?
The weather forecast's calling for another cloudy day
That evening, just me and you
Through rosy tinted hues
A promise of fairer winds that never blew
Vermilion claims to say the sun will stay
And yet my heart holds close the storm as it breaks
I could live to be a hurricane
Turn into a tempest, violent, silent in the eye
All whirling, gusting, wuthering
Could it be enough to change the way you use my name?
Remain in weekday
(I’m okay)
I stay for all that aches
Didn't you see the news today?
I heard they said it looked like rain
All the words I left unsaid that day
Stained the sidewalk drop by drop with gray, oh
Rain or shine, my heart won't dry
So why can't I look away?
The weather forecast's calling for another cloudy day
Didn't you see the news today?
I heard they said it looked like rain
All the words I left unsaid that day
Stained the sidewalk drop by drop with gray, oh
Rain or shine, I'm by your side
So why won't you look my way?
The weather forecast's calling for another…
Didn't you see the news today?
I heard they said it looked like rain
All the words I left unsaid that day
Stained the sidewalk drop by drop with gray, oh
Vivid skies may pass me by
But even still, I'll stay
The weather forecast's calling for another cloudy day
Look through me, a windowpane
Colored as a sky entirely filled with clouds, I might be
Everything that I can be
If it’s not enough, I trust the sky will open up
Someday, someday, someday`.split("\n");

document.querySelector("#quote").innerText = QUOTES[Math.floor(Math.random() * QUOTES.length)];