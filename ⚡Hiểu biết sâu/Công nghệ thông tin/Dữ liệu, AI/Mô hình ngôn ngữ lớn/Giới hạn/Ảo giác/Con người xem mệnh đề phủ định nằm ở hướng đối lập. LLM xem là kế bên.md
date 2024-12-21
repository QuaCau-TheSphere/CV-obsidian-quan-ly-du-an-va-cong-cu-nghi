---
share: true
created: 2025-05-26T19:55
updated: 2025-06-13T00:44
---
Khái niệm:: 
**Fragility.** LLMs can be extraordinarily fragile with respect to the precise inputs they are given. Here I ask Google for help fact-checking a claim.

Google's AI overview erroneously assures me that Ed Sheeran has a song called "The Crow".

![Google query: does ed sheeran have a song called "the crow" AI Overview Yes, Ed Sheeran has a song called "The Crow". Information. Song: "The Crow" Album: Part of Sheeran's new album, No.](https://thebullshitmachines.com/lesson-9-blue-links-matter/assets/80MwzDipXz/yes-ed-has-a-song-the-crow-1502x638.jpg)

Google query 1/3/2025

Asking the same question but removing the quotation marks around the song title, I get the opposite answer.

In this case, the difference is replicable. We asked repeatedly, and each time Google's Gemini said _yes_ if we put "the crow" in quotes and _no_ otherwise.

Some people will argue that LLMs are great for information retrieval, and if you aren't getting good answers it is because you don't know how to ask the right questions. This strikes us a powerful counterexample. How would anyone know, in advance, that you have to omit quotation marks around a title?

![Google query: does ed sheeran have a song called the crow AI Overview No, Ed Sheeran does not have a song called "the crow", but he has written and performed songs for other artists, including: "Little Things" for One Direction, "Lay It All on Me" for Rudimental, "When Christmas Comes Around" for Matt Terry](https://thebullshitmachines.com/lesson-9-blue-links-matter/assets/TtmxuVl5Zk/no-ed-doesn-t-have-a-song-the-crow-1501x599.jpg)

Google query 1/3/2025

So _why_ does this happen? As we discussed in Lesson 5, it's difficult or impossible to reverse engineer LLMs to get precise answers.

But we can understand the general problem. For us, the statements "_Ed Sheeran has a song called The Crow_" and "_Ed Sheeran doesn't have a song called The Crow_" feel like polar opposites.

![Diagram of a 3D space. Discs represent claims. Discs labeled "Ed Sheeran doesn't have a song called The Crow" and "Ed Sheeran has a song called The Crow" are at polar oppose ends of the horizontal axis. Three other discs are scattered elsewhere at a distance: "The mitochondrion is the powerhouse of the cell", "Time flies", and "The Lions will win the Superbowl".](https://thebullshitmachines.com/lesson-9-blue-links-matter/assets/zqsZ6VOSo9/viewpoint-human-1640x778.jpg)

How a human sees the world: "X is true" and "X is false" are polar opposites.

But recall that LLMs encode strings of words in high-dimensional spaces. This is a bit of a simplification, but for the LLM, these statements may be very close to one another in that high dimensional space. Both involve Ed Sheeran. Both involve a song called The Crow. What fraction of English utterances involve either, let alone both? To the LLM, whether you throw in the word "_doesn't"_ almost is trivial.

![Diagram of a 3D space. Discs represent claims. Discs labeled "Ed Sheeran doesn't have a song called The Crow" and "Ed Sheeran has a song called The Crow" are very close together. Three other discs are scattered elsewhere at a distance: "The mitochondrion is the powerhouse of the cell", "Time flies", and "The Lions will win the Superbowl".](https://thebullshitmachines.com/lesson-9-blue-links-matter/assets/1cumU518Fg/viewpoint-llm-1640x780.jpg)

How an LLM sees the world: "X is true" and "X is false" are both about X, so they are very close together.

Predictive text machines like LLMs measure the distance between statements very differently from the way people do. Claims that seem diametrically opposed to us may seem almost identical to them. As a result, they can be wildly inconsistent in their responses.

Trích từ:: [LESSON 9](https://thebullshitmachines.com/lesson-9-blue-links-matter/index.html)