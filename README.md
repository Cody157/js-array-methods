# js-array-methods
Concepts behind some common JavaScript array methods and how they are related.

The idea here is to build all of these array methods (with their most basic functionality).

The first step would likely be to implement each of them independently, not trying to share code (no function for shared code paths, or reuse by calling other methods within the one being impelemented). The goal of this step is to understand what's going on under the hood and the intent of these methods. That is - what can they each do (differently).

After that, you might look at code that is common among different methods and try to break it out. The goal of this step is to see how different methods are similar. Since they all share concepts, the relationships between them can be important for choosing the right ones for the right jobs.

The final step would probably be to try to implement each method using other methods. This is really just a continuation of the above step to build more intuition around the breadth of each.

Answers for step 1 and 3 are included in the `answers` folder. I haven't thought enough about it to know if there's a useful answer to the second step, but it seems like a natural step between them if you don't already know the answers you're looking for.

All of these methods are simplified. Assume valid input. Invalid input handling doesn't add anything to the lesson here. I'm not worrying about all the optional arguments, just the common use cases. For example, most of the callback functions take `(element, index, fullArray)`, but I'm only worrying about element. I included `index` in reduce, primarily for the sake of one of my answers. Efficiency is also not a consideration here, though it could be useful to elaborate on parts of this to discuss wasted space or cycle (especially in the case of early stopping).

Question: Which of these methods is the most general? That is, which can perform all the other operations (and more)?
