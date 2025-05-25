

Author: Andrew Hunt, David Thomas

started: Jan 23, 2021


> If a disk dies, taking your source code with it and you don't have a backup; that's your fault.

true

“Don't leave "broken windows" (bad designs, wrong decisions, or poor code) unrepaired. Fix each one as soon as it is discovered. If there is insufficient time to fix it properly, then board it up. Perhaps you can comment out the offending code, or display a "Not Implemented" message, or substitute dummy data instead. Take some action to prevent further damage and to show that you're on top of the situation.”

“By the same token, if you find yourself on a team and a project where the code is pristinely beautiful—cleanly written, well designed, and elegant—you will likely take extra special care not to mess it up”

“Work out what you can reasonably ask for. Develop it well. Once you've got it, show people, and let them marvel. Then say "of course, it would be better if we added...." Pretend it's not important. Sit back and wait for them to start asking you to add the functionality you originally wanted.”

= ***Juha od cavla***

tips for pithcing your idea:

- know what you want to say
- know your audience
- choose your moment
- choose your style
- make it look good
- involve your audience
- be a listener
- get back to people
- it's both what you say and the way you say it

### the evils of duplication

“Most people assume that maintenance begins when an application is released, that maintenance means fixing bugs and enhancing features. We think these people are wrong. Programmers are constantly in maintenance mode. Our understanding changes day by day. New requirements arrive as we're designing or coding. Perhaps the environment changes. Whatever the reason, maintenance is not a discrete activity, but a routine part of the entire development process.”

for avoding code duplication in say the cient-server rest architecutre where the frontend needs to repelat the definition of the objects being sent by the server they suggest tools with would generate these interaces when the code builds. Sounds like more work upfornt but it's probably better in the long run when adding functionality. 

“Bug fixing is also a good time to assess the orthogonality of the system as a whole. When you come across a problem, assess how localized the fix is. Do you change just one module, or are the changes scattered throughout the entire system?”