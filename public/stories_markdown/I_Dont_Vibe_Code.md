# How AI coding tools are transforming software engineering—but not in the way you might think

It's 2026, and I wanted to write down some thoughts on the current state of AI and software engineering—a kind of time capsule that I (and maybe someone else) can look back on later.

## The Uncertainty Problem

Here's the uncomfortable truth: we do not know how this AI thing is going to play out. The companies building these tools have every incentive to make us believe AI is revolutionary, but is that really the case.

What I find notable is that the actual data tells a different story than the headlines. Outside of tech, we are not seeing significant job displacement (at least not yet). No surge in layoffs. No rising unemployment. AI hasn't been the disruptor that was feared / promised.

This is, of course, a great thing to hear; people aren't losing their jobs. There is however a cynical way to look at this: if AI could genuinely perform tasks without human guidance, we'd be seeing economic displacement. We're not. That's a hard-numbers way of saying these tools might not be as useful as advertised.

Tech layoffs are a separate phenomenon—more about investment corrections than AI replacement. But outside the tech sphere, the job market seems largely unaffected (more thoughts on possible explanations for this coming later).

Consider this a checkpoint. In 2026, AI is genuinely useful for coding. As I'll explain, it's transformed my workflow, but it apparently hasn't delivered the same value elsewhere, and here are some of my thoughts as to why.

## The State of AI in 2026

After billions in investment, from what I can gather and from my own experience, the only domain where AI has delivered real monetary value is software engineering. Specifically, writing code. Every other industry reportedly loses money trying to apply AI to their problems.

The current "best" model and where the state-of-the-art is is Claude Opus 4.5. It's what prompted me to write this, because it represents the start to a shift in what's possible just by typing instructions into a box, and getting solutions flying out the other end.

## How I Actually Use AI for Coding

Despite what the title says, I cannot claim I've never Vibe Coded. I've tried it. But every time I approached AI with vague requests like "make this different" or "make this look like that," the results disappointed me.

Here is how I actually use my 10 years of experience as a software engineer to get the best results out of putting the AI to work. When I get a ticket, I think deeply about the problem first. I consider the codebase and decide how I would solve it. Then I explain my approach to Claude the same way I'd explain to a colleague what I'd done if I'd written the code myself.

I tell it which files we need to touch, referencing them by name. I explain that we need to replicate functionality from one place, modify these classes, add or change types. I'm specific.

I do this in the "Plan" mode and always tell it to ask questions back to me. This lets me verify it understands the problem. I answer—usually just confirming it's got the right idea—and it produces solid documentation of the functional requirements. From there, I let a faster model execute the actual writing of the code. I then review each file individually, checking that the changes make sense. I test constantly—in the browser for UI work, with scripts for everything else. 

The code I get out of this is sometimes genuinely impressive. Claude matches the existing codebase style and produces something I can accept with minimal changes.

The output isn't always DRY or clean in the computer-science-nerd sense, but I clean that up manually during my pre-PR polish, which also ensures I've read and understood every change.

The result is a significant speed increase. But I'm still one developer. I'm not managing a fleet of bots and reviewing their PRs. I am the one coding.

## Contrast This With Vibe Coding

Vibe coding works differently. When I've started completely fresh projects this way, it's fine—but only because my expectations are low. I'm not evaluating the output as an engineer. I'm just asking: did I get a screen that works? When it does, I'm not worried about whether it's good code. 

Looking back thought the commits of a small SwiftUI app I'd build from zero as a weekend project recently, the LLM gave me some bizarre combinations of scrollable and fixed elements, it definitely didn't think ahead on how more complex navigation could be added in the future, and it stuck buttons in some weird places, but I almost didn't even notice. This is because, while writing the prompt, I had no vision of how the resulting screen *should* even look like. I was basically ready do be delighted with wathere met me when I pressed Build. I was just happy there was now someting where minutes before there was nothing. 

It is important to recognise this was code I would in no way be happy with had I bothered reading it. I would not be able to maintain it going forward. But that is not what I needed it to be. I needed my small app to work and do it's one simple task, and it did.

## When to write code?

Even though the workflow I have described above works pretty well for me right now, there is a question of long term sustainability. Will I get *rusty* the less code I writre "by hand"? Will my grasp on the code-base slowly fade, and thus I won't be able to steer the AI towards the right solution when it goes off the rails. Will the codebase slowly rot from a thousand-and-one subtle bugs it introduces?

There's also the financial reality. I'm based in Croatia, and I have kept a worried eye on the number of tokens fliying by this past few weeks since Opus 4.5 has dropped. All this AI companies seem to be offering a $200/mo plan for when you need to get real work done, and the reality is that here in Croatia where I am based this is a significant sum to ask your company for—not something you'd casually file under "tooling costs." It's a meaningful expense that needs to justify itself in productivity gains.

If I stopped writing code entirely and worked purely through prompts, I'd spend at least €100 monthly on Claude alone, even with the optimisations I've found.

## Why Cursor Beats Claude Code

I want to make a case for GUI-based tools over CLI-only workflows. When I watch YouTubers using Claude Code, living entirely in the terminal, I see them handicapping themselves. They're ignoring the visual part of their brain.

A good interface helps you see what you're doing and catch problems early. I've watched people make mistakes because of their interface—not realizing they switched models (it's just small text at the bottom), accidentally entering agent mode or plan mode, seeing only a few lines of code at once.

On my setup, I have two or three files open side by side, the Git diff visible on the left, the agent panel on the right. I can contextualize everything happening at once. Visual cues tell me the agent is doing what I want. I see more, so I'm more confident.

I use the AI like a sophisticated text expander. I describe in English what the code should do, and then I watch it happen, fully aware of what's changing.

## The Problem With CLI-Only Workflows

Working exclusively in the terminal is like editing video through FFmpeg commands—technically possible, but you're fighting the medium. You lose the visual context that makes complex work manageable.

The goal should be augmentation: becoming a cyborg, an enhanced human. That's what I'm doing, and it's the only approach where I see real returns. I'm more willing to make changes now, less afraid to touch unfamiliar parts of the codebase.

People using CLI tools forget to commit. In Cursor, the changes are always visible, so I commit constantly. I branch, checkpoint, stash. I'm never afraid because the AI is never a black box—I'm not throwing messages over a wall hoping features come back. I'm engineering.

## Brilliant and Stupid Simultaneously

Here is one more gotcha I've become more concious of lately.  When AI solves a task brilliantly, I instinctively assign it human-like intelligence. Only a smart person could have done this, I think.

But that's not what's actually happening. The AI can excel at one task and fail completely at a closely related one—within the same domain. This breaks our mental model of intelligence. With humans, there's consistency—someone who struggles in one area usually struggles in related areas. AI doesn't work that way. You can't extrapolate from one success to predict another.

Understanding this is crucial for anyone using these tools. You have to manage expectations. You have to manage costs, because these models aren't free, and deploying them based on false assumptions—as many non-tech companies are discovering—can be financially ruinous.

## Engineers are still needed, but for how long?

I definitely still feel like a software engineer, even when I type prompts in plain english and marvel at the code that has just appeared out of thin electrons in many many graphics cards somewhere. But the question is, how long will I still be needed? Could someone else do this without me? After watching a non-technical person attempt it: no. I'm still necessary, but will this ever change?

## The Employment Impact

Some people dismiss AI as "just autocomplete, just predicting the next word." They're underestimating what's happening. Simple implementation work has been replaced in many cases.

At my company, one person now does what previously required three. We've stopped hiring for certain roles entirely.

I don't know how an intern would fit into our workflow anymore. A year ago, I expected we'd bring someone on to help me. Instead, I got that help—from a model in the cloud.

## The Future

Plot this out assuming even linear improvement, and it's not hard to imagine non-technical people shipping medium-complexity apps by prompting their way through the gotchas and edge cases.

Developers today are already far more productive than developers writing assembly or early C, thanks to modern frameworks and languages. But those people were always programmers—passionate about understanding how things worked at whatever level of abstraction they operated on.

Now we're running away from that, fast.

For the short term—even a few years out—engineers are still necessary, and I'm comfortable with my position. I'll be more productive than ever, shipping more and cleaner code, more nimble in how I work. But looking further ahead, the landscape becomes impossible to predict. Many jobs seem vulnerable.

## Jobs Disappearing or Transforming?

Mike Hurley and Federico Viticci discussed this on Connected 587, comparing AI tools to Excel for accountants or Squarespace for web development.

Excel didn't eliminate accountants—it made them more productive. We still need accountants because the domain knowledge matters. Maybe there are fewer of them now, or maybe accounting just got more complex to match their new capabilities. The analogy raises questions more than it answers them.

Squarespace lets non-developers build websites, just as AI lets non-programmers build apps. But developers still exist. There are just more websites now. People still hire professionals because they don't want to learn Squarespace, or because complex work exceeds its capabilities. There are even "Squarespace builders"—people you hire to set up your Squarespace site.

The question Mike posed: are these jobs disappearing, or just changing? Maybe the tools shift and adapt the work rather than eliminating it.

## Why AI Hasn't Disrupted Other Industries

Why hasn't AI replaced jobs outside software engineering?

I think it comes down to how programmers are different. In developer interviews, you prove your knowledge. In many other fields, you show past experience and demonstrate you're pleasant to work with.

Developers need deep competence. We're accustomed to constant learning, rapid adaptation, obsessive efficiency. If I were a clerk or a salesperson, I'd probably be faster with AI assistance. But that's not happening at scale.

Part of the problem might be that managers try to make AI an employee rather than an augmentation. But I also think workers in other fields aren't conditioned to think about productivity the way developers are. They're not looking for ways to be more efficient, and their jobs may not even reward efficiency.

## The Ground Truth

Here's what crystallizes everything for me. When I'm coding and solving real problems, I'm constantly impressed by how smart the AI seems. But maybe I'm the smart one, and the AI is just very good at following precise directions.

Could AI run a small business autonomously? Based on everything I've seen—no.

This becomes obvious when I try using AI for non-coding tasks. "Make me a marketing plan" yields vague platitudes: maybe post on social media, maybe make a landing page. It can't produce a realistic, grounded plan with specific actions and timelines.

But when I'm coding with precise instructions? It impresses me every time.

The difference is that I know how to be precise in my domain. I have the vocabulary, the file references, the pattern knowledge, the awareness of edge cases. I can give the AI exactly the context it needs to succeed.

Other professions lack this infrastructure of precision. Their work isn't structured for unambiguous direction-giving. And perhaps their jobs don't reward—or even recognize—the kind of productivity gains AI could theoretically provide.

That's the state of things as I see them. A checkpoint for 2026.

This could be the final chapter looking outside of software engineering. And I think the reason they haven't been replaced—and this is kind of like a case for programmers—is programmers are different than most people in the way that when I look at job interviews for programmers and job interviews for other positions, you are always asked to prove your knowledge as a programmer, while in many other positions which are not doctors, for example, you are only asked to show some kind of proof of past experience and just be a personable guy who they would like to work with and they hire you.

Developers really need to understand what they are doing at a deep level and be very competent. And I think this is showing that if I were to use AI in other fields—like in sales or in clerk jobs, if I were some kind of clerk or whatever, or in the post office or some knowledge worker somewhere—I think I would be much faster thanks to AI.

But I think this is not happening because maybe one part is that the managers are trying to make the AI be an employee, instead of being an augmentation to existing employees. But I also think existing employees in other fields are not nearly as accustomed to always learning new things, adapting, and using the technology—or even just thinking about efficiency and being very concerned about their own efficiency—as developers are.

