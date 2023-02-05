# Hidden metadata
Tbh, I see more trouble than it's probably worth

If it's possible, it'd be some hacky CSS solution, and those get out of hand quickly

that's my opinion, ofc. There may be someone who's got a better idea of how it ~~would~~ *could be done (edited)

can you tell more on what could get out of hand quickly? (edited)

When you try to target things in CSS, it is common to not account for every instance that element is being used. Furthermore, you sometimes can't specifically target that element, so you end up changing every element that shares the same name, so there's lots of tweaking involved, and as soon as there's an update changing something, you'll have to adjust it.

This is especially true when theming, since we don't have control over native obsidian's html structure. When you're the one making something from scratch (a website for example), it's easier to keep that stuff in check.

Again, it also depends on the plugin you're using. After taking a look at MetaEdit, I think I've seen people targeting that special `metadata:: value` thing

I believe there was another plugin that added a custom class to dataview fields. @pseudometa I think I've seen you talk about something like this months ago?


not that I know of, iirc you can have custom dataview css classes by using `[key:: value]` or something

I'm struggling to remember the name of the plugin that added classes for different types of words

You can target dataview inline fields in Preview View with CSS @Ooker , but I'm no so sure in Editing View, much less Source Code Mode
Dynamic Highlights? Markdown Attributes? (edited)

Yes, that's it! @Ooker from the plugin's description:

> Persistent highlights are created by defining a search query and associating a CSS class name and color. Once defined, any string that matches the search query will be marked with the associated CSS class and will receive background color that matches the chosen color.
