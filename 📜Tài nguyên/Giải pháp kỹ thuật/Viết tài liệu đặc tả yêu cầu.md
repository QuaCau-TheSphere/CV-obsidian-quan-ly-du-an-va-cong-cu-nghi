---
share: true
created: 2023-09-05T16:17
updated: 2026-01-19T15:25
---
Tuy [[Hình ảnh một phần mềm được xây dựng thuần tuý từ lý thuyết là một ảo tưởng]], nhưng [[Việc giả bộ là phần mềm được xây dựng bằng lý tính là có ích]]

## Computer Specification
A specification of the machines on which the software must run. The machine need not be hardware-for some software this section might simply be a pointer to a language reference manual.

## Input/Output Interfaces
A specification of the interfaces that the software must use in order to communicate with the outside world.

## Specification of Output Values
For each output, a specification of its value in terms of the state and history of the system's environment.

## Timing Constraints
For each output, how often, or how quickly, the software is required to recompute it. 

## Accuracy Constraints
For each output, how accurate it is required to be.

## Likely Changes
If the system is required to be easy to change, the requirements should contain a definition of the areas that are considered likely to change. You cannot design a system so that everything is equally easy to change. Programmers should not have to decide which changes are most likely.

## Undesired Event Handling
The requirements should also contain a discussion ,of what the system should do when, because of undesired events, it cannot fulfill its full requirements. Most requirements documents ignore those situations; they leave the decision about what to do in the event of partial failures to the programmer.
