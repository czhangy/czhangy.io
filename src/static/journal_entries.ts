// -------------------------------------------------------------------------------
// This is a temporary file for journal entries until the edit page is implemented
// -------------------------------------------------------------------------------

import {
    CAREER_CHRONICLES,
    LIFE_LOGS,
    WARRIORS_WATCH,
} from "@/static/constants";
import { Entry } from "@/static/types";

export const journalEntry_04_10: Entry = {
    title: "Pilot",
    timestamp: "04/10/2024",
    sections: [
        {
            type: LIFE_LOGS,
            title: "Beefing with Canadian Tesla Interns",
            paragraphs: [
                "My life has been temporarily consumed by this weird urge to journal, so I've been pouring most of my free time into implementing this onto my site (because of course I have). Despite this, I'm actually really proud of myself for having the most social week I've had in a long time.",
                "Honestly, I started out by dreading the week. Like I'm already tired man, now I'm about to be even more tired. But the onsite Mon-Thurs was actually a lot more fun than I thought it'd be. Getting to see my co-workers outside of a work setting was a great time, finding out my mentor is also a big Warriors fan was shocking, and Whirlyball might just be the best sport on the planet (although I did walk away with my fair share of injuries). For the first time, I'm actually really excited to go to Chicago in May.",
                "Then, Friday should've been a dud: wasn't going into the office, didn't have any meetings, Vicky was a little mad at me, didn't even go to the gym. But middle of the day, the Seattle boys hit me up for what can only be described as a boys night: pizza, beer, Smash. Despite being absolute dogwater at Smash, I had a good time, and it's been so long since I've made actual new friends I forgot what that felt like. Though I will say, not being with Vicky on the last night before both our trips made me a little sadge.",
                "Last, but certainly not least, Vegas. The trip itself was a little brutal. Waking up at 5am is just never a good thing. Being able to hang out with Erin & Co. is (usually) a fun time though. Being in a different state than most of the people I know has really made it easier to appreciate the time I do get to spend with them. Yes I ate the greasiest Panda Express I have ever had. Yes we waited sober in line for the club for 3 hours and still missed the Chainsmokers. Yes I was up for 21 hours straight on 4 hours of sleep. But at least I didn't get into a kicking match with the Canadian Tesla interns, and I was electric on the roulette table (I lost $16). Overall, a great experience that I could shove into my 3rd ever Instagram post. Honestly, I got whiplash going from 36 hours of Vegas with friends to coming home to an empty apartment. All the more reason to hit up the other 4 friends I have to catch up.",
            ],
        },
        {
            type: CAREER_CHRONICLES,
            title: "Halfway to Knowing What I'm Doing",
            paragraphs: [
                "I'm officially over 3 months into my Stripe tenure, which means I'm halfway to the magical 6 month mark where everything's just going to click apparently. I'm pretty sure I believe this less and less every time someone says it to me. I definitely feel like I've learned way more in the past 3 months than I ever did in a classroom, but literally everything I learn just uncovers more that I need to learn.",
                "Just yesterday, I had to follow up on a run ticket that's been in limbo for the last ~3 weeks, and I came up with this set of next steps I thought we should take. I figured them out pretty quickly and sent them over to my mentor to double-check, actually feeling kinda okay about the idea of being the primary runner for the first time. But then, bam, she sends me back a million extra steps that are so obviously the right steps to take with some absolutely basic knowledge that I just didn't have. Run is back to feeling like the monster under my bed.",
                "On a much brighter note, I'm feeling pretty good about my actual project work. I ran into this bug today that looked suspiciously similar in shape to another bug I had fixed in the first ~month of working. Back then, I had a bunch of help from my mentor to comb through the code, understand the impact the bug had on our users, and fix it safely. This time, I really felt like I could actually handle it myself, from searching through old PRs and API reviews all the way to writing the SQL queries to determine if it's impacting our users. This, of course, sidetracked me entirely for a full day, but you can't win them all I guess.",
                "In terms of the actual project work I've been doing, it really looks like I'm going to be in it for the long haul. With how carefully we need to approach this project to not cause any incidents, there's usually not a whole lot we can do but to wait around for rollouts or team responses. One silver lining to this is that I'm comfortable enough and have the time to start looking at next steps, which means one thing: design work. Time to push for that promotion baby.",
                'Something a little unexpected that I\'ve noticed recently is that my work mood has been super predictable. When I wake up and check my phone for work notifs, I feel a ton of dread and a lot of "Oh no, how do I do this" or "What does that even mean". As I go on with the day, I can usually figure things out (with a ton of help from my mentor of course) and get into a bit of a flow. By the end of the day, I usually feel like I can look back on the things I worked on and be happy with what I got done and how much I learned. Then, I wake up the next day and the cycle repeats. As it stands, I think figuring out how to get a handle on this up-and-down is going to be something I need to work on, or else I\'m going to stunt my growth and burn out real quick.',
            ],
        },
        {
            type: WARRIORS_WATCH,
            title: "Win Out or Go Next",
            paragraphs: [
                "It's practically impossible to understand this Warriors team at this point. The Suns beat up on the Clippers' bench tonight, so we are officially locked into the play-in, but 7-10 are all still in play. It's been hard to find a real reason to care about making it out of the play-ins when we all know that either Denver (0-4 against them this year) or Minny (0-3 against them this year) is going to be waiting on the other side. And of course, making it out of the play-in isn't even close to a guarantee. If we run into a Lakers team with Bron and AD healthy? Cooked. If we run into the Kings? Every game against them this season has been heart attack-inducing. If we run into the Pels? Who the hell on our small-ass team is guarding Zion?",
                "Realistically, the Warriors probably need to win out to be favored to make it out of the play-in. Getting to that 7/8 game (I literally can't even care about HCA anymore so 7/8 both work for me) is absolutely critical considering how inconsistent this team has looked. Getting 2x the chances to make it through should be looked at as an absolute necessity. It's hard to ask for a better schedule to close out the season (Blazers/Pels/Jazz), so we really gotta meet the moment.",
                "I've actually been super happy with the way the other guys are playing right now. Klay has been surprisingly great, Wiggs is looking locked in on both sides of the court, CP3 is still healthy, TJD has been a revelation, Kuminga's back from injury, etc. etc. Shockingly, the big question mark has been Steph. Man just looks old out there. Hopefully, he's just saving his energy for the postseason because this team lives and dies by Steph, but I can't remember the last time we got real superstar Steph Curry.",
                "It's pretty funny to look back at the beginning of the season and see how people expected us to perform. The Warriors were supposed to be competing for HCA in the playoffs, not the play-ins. Curry was supposed to be fighting for All-NBA 1st Team, not 3rd Team. Klay was supposed to build on his league leading 3PM performances from last season. Dray was supposed to do anything other than assault every Euro big man he plays. The most frustrating part is every once in a while, you get those runs where things click, the Warriors are the Warriors, and you can just barely convince yourself that maybe they can actually do some damage in the postseason. But for every one of those runs, there's also a game where we collectively forget how to play basketball, blow a 15+ point lead, and get sent right back to reality.",
            ],
        },
    ],
};
