# I've Never Actually "Vibe Coded" (And Why That Matters)

## How AI coding tools are transforming software engineering—but not in the way you might think

**Description:** A software engineer's candid reflection on the current state of AI in 2026, exploring why AI has succeeded in code generation while struggling elsewhere, and what this reveals about the future of software development and knowledge work.

---

It's 2026, and I wanted to write down some thoughts on the current state of AI and how software engineering is looking right now—a kind of time capsule that I and maybe somebody else can look back on.

## The State of AI in 2026

Looking at what AI has done right now after a lot of investments, from what I'm gathering and from my lived experience, the only place where AI has been able to deliver some monetary gains is actually software engineering. More than that, it's actual code—writing code. Engineering in every other industry is reportedly losing money when trying to apply AI to their problems.

The current best model, which I have to admit I'm impressed with, is Claude Opus 4.5. It has made me write this because it represents a shift in what is possible to get out of the box by just typing some instructions and getting solutions.

## How I Actually Use AI for Coding

I actually want to title this something like "I've Actually Never Vibe Coded"—which, of course, is not true. I have tried that as well. But what I mainly want to say is this: when I tried vibe coding and just going "I need this to be different" or "I need this to look like this," I have always gotten disappointing results.

What I actually do when I code: I'm a senior engineer with basically 10 years of experience with software engineering and writing code. What I do is I think deeply about the problem. I look at a Jira ticket and then decide, knowing the code base, how I would do this. And I explain this in detail as I would explain to a colleague what I had done if I had written the solution.

I explain this to Claude. I say we need to touch these files, which I reference by name, and we need to basically replicate some functionality which is here. We will be needing to modify these classes, for example, and we're going to need types for this, or we'll need to change the types for this if I believe the types aren't really supporting it.

Then I ask it to go into plan mode and also to ask me questions—I always make sure to ask for some questions so I can see it restating the problem. I answer the questions, which is basically: yes, let's go ahead with this, you have understood my problem.

It then writes pretty solid basic documentation of the functional requirements, what would be called, in agile, user stories. I then let another, quicker model—Composer in this case—just go and execute on this code.

I then look at the code. I accept each file separately, just looking at it, saying the changes make sense. In between, I always test the code. If it's something in the web browser, I test in the browser. If it's something I need to run scripts to test, then I run the scripts to test.

I am generally not for testing. I think writing tests is only useful if it's tightly coupled with writing the code, and I think in most codebases I haven't encountered—I haven't seen tests actually make my writing of the code better. But this is just a lack of experience in larger teams. In smaller teams that move faster, I haven't seen that.

## The Results

The code, in this way, is actually impressive. It's great, and Claude is very good at writing code in the same style that the code base is already written in. It will match it nicely, and it will do something which I can pretty much accept with minimal changes.

It will, however, not be DRY. Which means it is repeating itself often. But I can, and I often do now when I'm polishing before doing a PR, actually remove the duplicate code and simplify the logic manually. In this way, I also read the changes and I am sure I know what they are and where they are.

So what I'm getting is a very big increase in speed. I'm still one developer. I'm not managing a team of bots which run around, make code changes, and then I just review this as if my colleagues sent me a PR. I am the one coding.

## Contrasting This With Vibe Coding

I would like to contrast this with how this works with vibe coding, which I have tried as well. When I have started completely new, this works fine. But this is because I actually now have low expectations on it. I'm not looking at the output as a software engineer. I'm looking at the output as: did I get a screen?

When I get a screen that works, I'm not concerned whether the screen is very good. When I take a step back and think about intermediary steps, it did give me some stupid combinations of scrollable and unscrollable parts of the app, and they did look kind of weird until I jumped in and gave it very specific directions.

## Am I Really an Engineer Anymore?

So what I think is: the problem here is that it's very hard—and this is something that has been a lot on my mind lately—when do I code and when do I prompt? Am I really an engineer? Could this all be done without me?

And this is the part where I'm definitely, after having attempted this with a non-technical person: no. I am still necessary for doing the changes which are in our sprints right now. I couldn't just give it to the manager. They couldn't manage to do it.

But should I be writing the code, or should I be looking at the AI?

## The Cost Question

And here is also the question of how much do you want to spend on the AI. I am based in Croatia, and paying $200 a month extra on top of my salary for this is actually kind of pushing it. It's saying like, this is a big pay increase for Croatian standards. It's a significant item. It's not just—it wouldn't be justified in the tooling budget. You couldn't just say, this is just tooling costs. You would really have to think like, okay, this is something that we are paying this guy more to deliver us more.

Basically, if I were to just stop coding and just do everything through text, I would basically be spending at least €100 every month on Claude, essentially, even with the Composer combination and stuff.

## Where Cursor Beats Claude Code

I would also like to do a chapter on where I think Cursor is absolutely better than what Claude Code is offering. And this is because I believe that people who use Claude Code and people in general—when I look at YouTubers using them and being always in the CLI—I think what they are missing is they are completely disregarding one part of their human brains and they are missing the visual part.

They are completely missing the visual part of this where some GUI can really help you see what you're doing, can help you catch problems. I have been watching YouTubers code, and I can see them making mistakes because of the interface they're looking at. They don't see they've moved away from the model they were using because it's just a small bit of text at the end. They are accidentally in agent mode, they are in plan mode, because it's all configured to the CLI, and they can see only a very small amount of code at one time.

They are not getting the context which I'm getting on a big screen with two or three files open side by side, and I can still see the Git diff on the left, and I can still see the agent on the right, and I can very well contextualize everything that is happening. I can use the visual cues to understand that the agent is doing exactly what I want. I can see more at once on my screen and I can be confident what the agent is doing is what I want to be happening.

Ultimately, I'm using the agent like a big text expander. I am just saying in English what the code should be, and then the code happens, and I am seeing it happen, and I know that I am aware of what's happening.

## The Problem With CLI-Only Tools

I think people who are using Claude Code or similar CLI tools are shooting themselves in the foot and working with one hand tied behind their back because they are moving away from "I'm looking at what I'm doing."

It's like if you were trying to use Photoshop or a video editing tool through the command line—trying to replace the visual editor with FFmpeg and just doing everything with commands, and then looking at the result and not understanding why the cuts got lost or why the order isn't good, because visual context is important.

You should be using AI to basically be a cyborg, to be an augmented human. Or at least this is what I'm doing right now, and it's the only thing where I can see a real value return. I am actually more inclined to do more changes. I'm less afraid to touch parts of the code base because I'm always sure I have it.

People I see forget to commit when they're working through Claude Code, while when I work in Cursor, I always am keeping an eye on the changes and I always commit them. I jump between branches. I do checkpoints, I do stashing, I do everything to ensure that I'm not afraid of making changes and the AI is never a black box to me. It's never like throwing a message over the wall and hoping it returns with the feature I wanted. I am the one engineering it.

## The Impact on Employment

This is really how I'm thinking of this, and this is something which is on my mind because, of course, I can see—and I think a lot of smart people on the internet are saying, "well, you don't understand, AI is just a big autocomplete, just predicting the next word"—they are a little bit downplaying the possibilities. Because what is happening is that simple code monkeys have been replaced in many cases.

In our firm, we are able to do things which would usually require three employees with just one employee. And so we have stopped looking to hire for some roles.

I do not know how an intern would ever fit into our company now. A year ago, I was pretty sure we were going to be getting an intern for helping me with some stuff. And I basically have gotten the intern, except the intern is a big model in the cloud.

## The Future

This is really something to deeply consider. If you think about it and you plot out assuming at least a linear progression where the AI is going to be this much better tomorrow than it was yesterday, I think it's not inconceivable that someone non-technical could even come up with a good plan by going, "okay, I want this, and I want you to tell me everything I don't know and all the gotchas and all the problems." And they could get simple or even medium complexity apps off the ground without paying developers.

Now, of course, developers today are also different than developers years ago, where one developer today is, even without AI, thanks to modern frameworks and modern programming languages, way more productive than when we were writing assembly or the original C. But I think the difference here is that all of those people were always programmers, software engineers—they were people who were passionate for programming and understanding, at least to the level of abstraction that the code was providing, understanding how the thing worked.

And today we are fully moving away from this, running at a pace away from this in a separate direction.

For the short term, and even maybe years—which is still short term—in the future, I think having an engineer is what we need, and I'm happy with my position. I think I'm going to be useful, and I think I'm going to be way more productive than before, and I'm going to be able to, as I described before, deliver way more code, way clearer code, and be more agile in the sense of nimbly moving around. Not in the framework, but looking down the barrel of marching time, I don't know how the landscape is going to look like, and I think a lot of jobs are looking to be replaced.

## Why Hasn't AI Replaced Jobs Outside Software Engineering?

The question is: why haven't the jobs outside of software engineering been replaced?

This could be the final chapter looking outside of software engineering. And I think the reason they haven't been replaced—and this is kind of like a case for programmers—is programmers are different than most people in the way that when I look at job interviews for programmers and job interviews for other positions, you are always asked to prove your knowledge as a programmer, while in many other positions which are not doctors, for example, you are only asked to show some kind of proof of past experience and just be a personable guy who they would like to work with and they hire you.

Developers really need to understand what they are doing at a deep level and be very competent. And I think this is showing that if I were to use AI in other fields—like in sales or in clerk jobs, if I were some kind of clerk or whatever, or in the post office or some knowledge worker somewhere—I think I would be much faster thanks to AI.

But I think this is not happening because maybe one part is that the managers are trying to make the AI be an employee, instead of being an augmentation to existing employees. But I also think existing employees in other fields are not nearly as accustomed to always learning new things, adapting, and using the technology—or even just thinking about efficiency and being very concerned about their own efficiency—as developers are.

So yeah, this is essentially what I'm thinking about.