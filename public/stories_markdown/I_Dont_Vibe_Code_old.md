# I've Never Actually \"Vibe Coded\" (And Why That Matters)
 

**How AI coding tools are transforming software engineering—but not in the way you might think**

It's 2026, and I wanted to write down some thoughts on the current state of AI and software engineering—a kind of time capsule that I (and maybe someone else) can look back on later.


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

There's also the financial reality. I'm based in Croatia, and I have kept a worried eye on the number of tokens fliying by this past few weeks since Opus 4.5 has dropped. All this AI companies seem to be offering a $200/mo plan for when you need to get real work done, and the reality is that here in Croatia this is a significant sum to ask your company for—not something you'd casually file under "tooling costs." It's a meaningful expense that needs to justify itself in productivity gains.

If I stopped writing code entirely and worked purely through prompts, I'd spend at least €100 monthly on Claude alone, even with the optimisations I've found.

-- i need sometihing here to brigdhe to the next chapter

## Why Cursor Beats Claude Code

I want to make a case for GUI-based tools over CLI-only workflows. When I watch YouTubers using Claude Code, living entirely in the terminal, I see them handicapping themselves. They're ignoring the visual part of their brain.

A good interface helps you see what you're doing and catch problems early. I've watched people make mistakes because of their interface—not realizing they switched models (it's just small text at the bottom), accidentally entering agent mode or plan mode, seeing only a few lines of code at once.

In my setup using Cursor, I have two or three files open side by side, the Git diff visible on the left, the agent panel on the right. I can contextualize everything happening at once. Visual cues tell me the agent is doing what I want. I see more, so I'm more confident.

I use the AI like a sophisticated text expander. I describe in English what the code should do, and then I watch it happen, fully aware of what's changing.

Working exclusively in the terminal is like replacing Final Cut with FFmpeg for editing video — technically possible, but you're fighting the medium. You lose the visual context that makes complex work manageable.

The goal should be augmentation: becoming a "cyborg", an enhanced human. That's what I'm doing, and it's the only approach where I see real returns. I'm more willing to make changes now, less afraid to touch unfamiliar parts of the codebase.

People using CLI tools forget to commit. In Cursor, the changes are always visible, so I commit constantly. I branch, checkpoint, stash. I'm never afraid because the AI is never a black box—I'm not throwing messages over a wall hoping features come back. I'm engineering.
