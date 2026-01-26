# I Never Actually \"Vibe Code\"
ㅤ

**AI is only as smart as your instructions—and that explains more than you'd think**

*January 2026*


It's 2026, and I wanted to write down some thoughts on the current state of AI and software engineering—a time capsule that I (and maybe someone else) can look back on later to see how wrong I was.

## The State of AI in 2026

After billions in investment, from what I can gather and from my own experience, the only domain where AI has delivered real monetary value is software engineering. Specifically, writing code. Every other industry reportedly loses money trying to apply AI to their problems.

The current "best" model and where the state-of-the-art is is Claude Opus 4.5. It's what prompted me to write this, because it represents a shift in what's possible just by typing instructions into a box, and getting solutions flying out the other end.


## Brilliant and Stupid Simultaneously

Some people dismiss AI as "just autocomplete" that is "just predicting the next word". They're grosely underestimating what's at stake. At my company, one person now does what previously required three. A year ago, I expected we'd bring someone on to help me. Instead, I got that help—from a model in the cloud.

One thing is certain; AI is really hard to estimate. When AI solves a task brilliantly, I instinctively assign it human-like intelligence. Only a smart person could have done this, I think. But that's not what's actually happening. The AI can excel at one task and fail completely at a closely related one, even within the same domain. This breaks our mental model of intelligence. With humans, there's consistency, someone who struggles in one area usually struggles in related areas. AI doesn't work that way. You can't extrapolate from one success to predict another.


## The Displacement That Didn't Happen

Here's what I find notable: outside of tech, we're not seeing significant job displacement. No surge in layoffs. No rising unemployment. AI hasn't been the disruptor that was feared or promised.

This is, of course, good news—people aren't losing their jobs. But there's a cynical way to look at it: if AI could genuinely perform tasks without human guidance, we'd be seeing economic displacement. We're not. That's a hard-numbers way of saying these tools might not be as capable as advertised.

In 2026, AI is genuinely useful for coding. It's transformed my workflow. But it apparently hasn't delivered the same value elsewhere.

Why?

## The Excel Analogy

Developers today are already far more productive than developers writing assembly or early C thanks to modern frameworks and languages. But those people were always programmers—passionate about understanding how things worked at whatever level of abstraction they operated on.

Now we're moving away from that, fast.

For the short term—even a few years out—engineers are still necessary, and I'm comfortable with my position. 
I'm more productive than ever, shipping more and cleaner code, more nimble in how I work. 
And I definitely still feel like a software engineer, even when I type prompts in plain english and marvel at the code that has just appeared out of thin electrons in many many graphics cards somewhere. 

The question is, how long will I still be needed? Could someone else do this without me? After watching a non-technical person attempt it: not today. I'm still necessary, but will this ever change? Assuming even linear improvement, it's not hard to imagine non-technical people shipping medium-complexity apps by prompting their way through the gotchas and edge cases.
Looking further ahead, the landscape becomes impossible to predict. Many jobs seem vulnerable.

On a recent episode of [Connected](https://www.relay.fm/connected/587) Myke and Federico discussed just this. What particularely made me think what the comparison of AI tools to Excel for accountants or Squarespace for web development.

Excel didn't eliminate accountants, it made them more productive. We still need accountants because the domain knowledge matters. Maybe there are fewer of them now, or maybe accounting just got more complex to match their new capabilities. Squarespace lets non-developers build websites, just as AI lets non-programmers build apps. But developers still exist. There are just more websites now. People still hire professionals because they don't want to learn Squarespace, or because complex work exceeds its capabilities. There are even "Squarespace builders" - people you hire to set up your Squarespace site.

Are these jobs disappearing, or just changing? Maybe these tools will change the work rather than eliminating it.



## How I Actually Use AI for Coding

Here is how I actually use my 10 years of experience as a software engineer to get the best results out of putting the AI to work. When I get a ticket, I think deeply about the problem first. I consider the codebase and decide how I would solve it. Then I explain my approach to Claude the same way I'd explain to a colleague what I'd done if I'd written the code myself.

I tell it which files we need to touch, referencing them by name. I explain that we need to replicate functionality from one place, modify these classes, add or change types. I'm specific.

I do this in "Plan" mode and always tell it to ask questions back to me. This lets me verify it understands the problem. I answer—usually just confirming it's got the right idea—and it produces solid documentation of the functional requirements. From there, I let a faster model execute the actual writing of the code.

I then review each file individually, checking that the changes make sense. I test constantly—in the browser for UI work, with scripts for everything else.

The code I get out of this is sometimes genuinely impressive. Claude matches the existing codebase style and produces something I can accept with minimal changes. The output isn't always DRY or clean in the computer-science-nerd sense, but I clean that up manually during my pre-PR polish, which also ensures I've read and understood every change.

The result is a significant speed increase. But I'm still one developer. I'm not managing a fleet of bots and reviewing their PRs. I am the one coding.


## Contrast This With Vibe Coding

Despite what the title says, I can't claim I've never vibe coded. I've tried it. But every time I approached AI with vague requests like "make this different" or "make this look like that," the results disappointed me.

When I've started completely fresh projects this way, it's fine—but only because my expectations are low. I'm not evaluating the output as an engineer. I'm just asking: did I get a screen that works?

Looking back thought the commits of a small SwiftUI app I'd build from zero as a weekend project recently, the LLM gave me some bizarre combinations of scrollable and fixed elements, it definitely didn't think ahead on how more complex navigation could be added in the future, and it stuck buttons in some weird places, but I almost didn't even notice. This is because, while writing the prompt, I had no vision of how the resulting screen *should* even look like. I was basically ready do be delighted with wathere met me when I pressed Build. I was just happy there was now someting where minutes before there was nothing. 

It is important to recognise this was code I would in no way be happy with had I bothered reading it. I would not be able to maintain it going forward. But that is not what I needed it to be. I needed my small app to work and do it's one simple task, and it did.


## So why hasn't AI replaced jobs outside software engineering?

Here's what crystallizes everything for me. When I'm coding and solving real problems, I'm constantly impressed by how smart the AI seems. But when I try using it for non-coding tasks, the magic disappears.

Maybe I'm actually the smart one, and the AI is just very good at following precise directions.

"Make me a marketing plan" yields vague platitudes: maybe post on social media, maybe make a landing page. It can't produce a realistic, grounded plan with specific actions and timelines.

But when I'm coding with precise instructions? It impresses me every time.

The difference is that I know how to be precise in my domain. I have the vocabulary, the file references, the pattern knowledge, the awareness of edge cases. I can give the AI exactly the context it needs to succeed.

Other professions lack this infrastructure of precision. Their work isn't structured for unambiguous direction-giving. A marketing manager can't point to `campaign_strategy.yaml` and say "replicate the Q3 approach but adjust the conversion targets." The vocabulary doesn't exist. The verifiable outputs don't exist.

Part of the problem might be that managers try to make AI an employee rather than an augmentation ([this is not a good idea](https://www.youtube.com/watch?v=SpPhm7S9vsQ)), or it's just that workers in other fields aren't conditioned to think about productivity the way developers are. They're not looking for ways to be more efficient, their jobs may not even reward efficiency.

In other words, it seems like non-coders are trying to use LLMs only in the "Vibe coding" mode, and not in the Plan --> Execute mode. Is this a fundamental limitation of the "fuzziness" of human systems or is this a temporary hurdle that will simply get solved when AI gets even better and doing what you mean insted of what you are asking remains to be seen. I for one am excitied to be living in the future.




## Apx. #1 When to write code?

Even though the workflow I have described above works pretty well for me right now, there is a question of long term sustainability. Will I get *rusty* the less code I writre "by hand"? Will my grasp on the code-base slowly fade, and thus I won't be able to steer the AI towards the right solution when it goes off the rails. Will the codebase slowly rot from a thousand-and-one subtle bugs it introduces?

There's also the financial reality. I'm based in Croatia, and I have kept a worried eye on the number of tokens fliying by this past few weeks since Opus 4.5 has dropped. All this AI companies seem to be offering a $200/mo plan for when you need to get real work done, and the reality is that here in Croatia this is a significant sum to ask your company for—not something you'd casually file under "tooling costs." It's a meaningful expense that needs to justify itself in productivity gains.

If I stopped writing code entirely and worked purely through prompts, I'd spend at least €100 monthly on Claude alone, even with the optimisations I've found.


## Apx. #2 Why Cursor Beats Claude Code

The workflow described above happens entirely in my new favorite app: Cursor.

When I watch people using Claude Code, living entirely in the terminal, I see them handicapping themselves. They're ignoring the visual part of their brain. A good interface helps you see what you're doing and catch problems early.

In my setup using Cursor, I have two or three files open side by side, the Git diff visible on the left, the agent panel on the right. I can contextualize everything happening at once. Visual cues tell me the agent is doing what I want. I see more, so I'm more confident.

I use the AI like a sophisticated text expander. I describe in English what the code should do, and then I watch it happen, fully aware of what's changing.

Working exclusively in the terminal is like replacing Final Cut with FFmpeg for editing video — technically possible, but you're fighting the medium. You lose the visual context that makes complex work manageable.

The goal is augmentation—becoming enhanced rather than replaced. I'm more willing to make changes now, less afraid to touch unfamiliar parts of the codebase. The changes are always visible, so I commit constantly. I branch, checkpoint, stash. I'm never afraid because the AI is never a black box.
I'm not throwing messages over a wall hoping features come back. I'm engineering.