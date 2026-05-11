---
share: true
created: 2026-01-05T20:41
updated: 2026-01-14T13:10
---
Khái niệm:: 
Two of the most important motivations for constructing an ontology are that (i) it can help to prevent concept drift and (ii) it supports the interoperability of systems. Regarding the first of these, a common issue in software development is that the use of strings of symbols in computer code by different programmers can change over time, causing unintended performance in a system. An ontology standardizes and reuses concepts, thereby preventing a concept expressed by a string within a given body of code at one time from drifting into use as another, different concept at a later time. Regarding interoperability, note first that the kind of ontology one creates will, at least in part, be driven by its intended uses. Broadly, there are three categories of use, ultimately leading to a computational implementation, which may all be present in some application: (1) communication among people, (2) communication among machines or between people and machines, and (3) computation.

In (1) the ontology is used to align the terminology and understanding of that terminology among developers of a computational system. There may be no exact transfer of the set of labels or definitions into any formal computational system. An ontology that exists to facilitate understanding among humans may rely on intuitions about concepts based on their names, as well as natural language definitions. Grounding the meaning of specialized terms in a glossary can help to eliminate some interpretations, for example, misunderstandings based on word polysemy.

In (2) the set of labels used in a computational system forms a standard that people and software systems adhere to. The people who develop the computational system agree on the set of symbols to be used and agree on some set of definitions which are at least partly given in natural language and require human intelligence to interpret.

In (3) there is a fully computational representation of a set of concepts, in which the intended meaning of a set of symbols is fully specified in a computational form, such as a computationally implemented mathematical logic. People may still have intuitions about concepts which are not fully captured in the logical language, but that would be considered a bug or omission to be rectified.

This classification of an ontology with respect to these three categories is a framework for understanding the usage of an ontology rather than a mutually exclusive and rigid set. One might for example have an ontology strictly implemented in a computational mathematical logic as a way for people to adjudicate disagreements about terminology, rather than to govern the behavior of a software system.

Nguồn:: [Ontology and Information Systems (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/ontology-is/)
