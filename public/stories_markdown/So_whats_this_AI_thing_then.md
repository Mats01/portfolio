# So what’s this AI thing then?

started: May 25, 2025

intro…

# The state of the art

As I’m writing this it's May 2025 and this is definitely late in the AI revolution happening right now but I just didn't feel I had much to add to the conversation. This is now changing, as I have decided to finally dip my toes in and try some “AI development” in the sense that I'm gonna try to use some of the API and tools to make something hopefully has value. Right now the main contests in the AI space are open AI with their GPT 4.something models, Google who just had their I/O and announced and even better Gemini model, Anthropic just released Claude 4. Any if I'm being honest this last one is the real reason why I'm picking this blog back up because for the first time I feel like I can create beautiful UIs with my limited design skills. In the past, even if I had a designer draw up a design in something like Figma, I still wouldn't be able to write CSS that would make it look exactly as good as the design file, but this all changed now that Claude can actually take the design inspo and create an actual functional and good looking design.

# Who am I

 I finished. I graduated from college two years ago.

When I was in college, I was never interested in learning how to develop AI systems, just for ChatGPT to take over the world on my final year

But not always lost because as it turns out I actually picked mostly system architecture as my focus for studying, which given that I'm not gonna spend half $1 billion in training my model is exactly you need to use the state of the art. AI is out now.

Ever since school, I've been working as a full stack plus mobile software engineer.

# What am I trying to build

Ever since I started coding back in 2015 I've always believed that the best way to learn something was to have a real enough project to try to get accomplished because Hello worlds are so limited that you're never gonna get exposed to real problems and learn to solve them. 

This is why I was looking for an interesting use for the existing AI models, I was looking for something I actually have in my work that I could actually meaningfully solve using AI, I was hoping that I could try running some of these models locally, and then connect this to some kind of API and try to host it somewhere and release it to the world. 

This is when I accidentally fond myself needing to write some user interface documentation for a system I was developing. It clicked that this was the perfect use case for me to try to explain something sloppily and get an AI system to refine it into something usable and professional.

What I had then first set out to do is to just try doing this “manually”. I recorded a voice note on my phone just speaking aloud all the steps needed to do something in the admin panel. I then installed whisper onto my Mac, got out the transcription, came up with a rough prompt and asked Chat GPT to generate professional sounding instructional text from my transcript, and finally, I pasted the text into Cursor, which then generated a decent looking HTML file that I could just put on my server.

So in principal, the concept worked.

It was not time to try to create a system doing all this one shot. 

# Local is impressive but unnecessary

For some reason, I really wanted to try running all the models locally. I guess I didn't wanna be beholden to some system or incur some unexpected costs; so I got to work. 

- superwhisper
- python server
- LM Studio
- gemma 12b
- `pnpm install ai`

After just an afternoon of trying, this actually worked. Yes it was duct taped together, but I had a server which could connect all the steps I used to do manually and just do them one after the other, and give me the result. But man, it was slow.

I was impressed that this could actually be accomplished. I could do this all off-line running on my machine, but my machine is super hot and the whole thing was running super slow. So I finally decided to check out the pricing for Google Gemini, which I understood to be the cheapest trustworthy remodel available over an API. It turned out that the cost for trying it out for development was laughably small. It was, in fact, free. So I connected my service to the API and after a little bit of fiddling with setting up the keys, it all once again worked, just… waay faster.

# Architecture

- tanstack start
- ai sdk
- google gemini
- clerk
- netlify

When I decided to try to host this, my main requirement was for the architecture to be as easy as possible, and to offer some kind of free tier, so I could try everything out without committing too much. In my day job I work a lot with React, which inevitably means I am familiar with Tanstack Query, and when I saw they have a full stock framework in the works. I just knew this is why I wanted to try. (I had given next JS a shot earlier this year, but I just didn't jive with it, it felt cumbersome and heavy handed, TanStack just fit much better with my way of thinking)

# Desing

… my desing vs Claude

# Takeaways

Did I accidentally make a SaaS?

I never thought it would come to this as I was saying, all the developer influencers talking about how you can get rich by making simple web apps, but here I am.

I did find it kind of liberating building something with such limited scope, it's not a whole system. It's not a whole platform, it's a one feature tool, and that makes it very fun to work on.