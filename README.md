# <a name="top">My LinkedIn posts on #AdventOfCode2021 Condensed</a>

I did not expect to make it as far as I have! 

[Day 1](#Day1)
[Day 2](#Day2)
[Day 3](#Day3)
[Day 4](#Day4)
[Day 5](#Day5)
[Day 6](#Day6)
[Day 7](#Day7)
[Day 8](#Day8)



##<a name="Day1">Day 1</a>

Part 1: I've never had to copy a list of 2000 items from a browser before and try to figure out how to make it usable as an array of numbers. Thanks to Stack Overflow, I learned that splitting by a new line is possible!

Part 2: Wrapping my brain around a rolling sum took a few minutes, but when I have an excuse to use my multi-colored pen it's worth it. 😆 Once I understood the idea the solution seemed pretty straightforward.

IIRC, these start easy and get much harder. I have no idea how long I'll be able to manage but I was so excited to successfully start my day with TWO gold stars!! 😆 🌟 🌟

[Back to top](#top)

##<a name="Day2">Day 2</a>

Very straightforward puzzles, just a matter of parsing the input and calculating accordingly. Part 2 had a fun little twist to it but it involved minimal refactoring. This was a super fun way to warm up my brain for the day while enjoying my coffee. And 4 🌟 is 4 more than I've made it before!! 🤗

[Back to top](#top)

##<a name="Day3">Day 3</a>

Today ramped up the challenge a little! Still doable for me (which probably means easy for the pros).

I worked with binary input: The first puzzle was uncomplicated in simply determining which number was most frequently occurring within each position and then parsing from binary to base 10 and multiplying. I used an object to store the most common digit at each position and then Object.entries() to get the data.

The second puzzle it became clear pretty quickly I would need to use recursion, because the array is filtered depending on the digit at each position. I possibly could have accomplished this using one recursive function, but in the interest of separation of concerns (**cough** being a beginner) I went ahead and created a separate recursive function for each variable.

One goof: In creating my second function I forgot to change to the correct iterator so I wound up with a neverending call. Once I fixed that and then remembered I still had to parse results from binary back to variables I got the answer correct on the first try.

What's exciting for me about today's puzzle is that while I understand the concept of recursion, it's still challenging for me to actually create recursive functions. Keeping it in the top of my brain that a stopping condition is what makes the function work and that you return the function itself, it was great to be able to write a working recursive function.

I really hope I can keep solving these. This is a really beneficial exercise for me!!

[Back to top](#top)

##<a name="Day4">Day 4</a>

This puzzle sounds simple but had a number of steps for me to solve. We have an input of 100 bingo cards and a set of called numbers.

For the first puzzle, the challenge is to determine the first winning bingo card, sum the uncalled numbers and multiply it by the winning number. The second puzzle is to determine the last winning puzzle and complete the same computation but with the last winning called number.

My first challenge was to take the browser input of 2500 numbers as a string and parse it: Regex to the rescue.

The next challenge was to figure out how to compare each bingo card to the winning combinations, and then to get the uncalled numbers and the winning number.

To get the winning combinations I created an array of arrays, each array including a winning combination.

To keep track of each board, I used an object to store the board number (board number obtained with Math.floor(arr.length / 25)) as the key and then the index for each number called by using the modulo operator. For every number called that marked a place on the board, the index of the number was added to that board and then the indices were immediately compared to the winning combination.

I created an array to which I could push any winning board. For the first puzzle I just checked to make sure only one board could be added to the winning boards. For the last puzzle I made sure the board number had not already been pushed to an array of winning boards and used the last array added.

I then used the board number to get the values from just that board and the winning number called (first or last) to create a copy of the called numbers array that were actually "called." I used these to check if the number was called or not, if not, summed it, and then multiplied by the winning number.

The logic of this took me some time to break down and get working. I was a little tired at the end, because even though everything was functioning, I summed the called instead of the uncalled numbers... easy fix but tracks with the kind of mistakes I've made since second grade math... I have to remind myself especially when I get frustrated to just slow down! 🤪

While I am thrilled I was able to break down the challenge into manageable tasks, and put it all back together correctly, it's possible I've reached the end of my gold stars this year! This really stretched my current abilities. We'll see what tomorrow's puzzle looks like. In the meantime, I'm going to take a look at what experienced devs do to solve this. My favorite part of solving challenges is learning.

[Back to top](#top)

##<a name="Day5">Day 5</a>

I'm starting to get the feeling if I had majored in math or I worked with data sets more this would go faster for me. 🙃

The best part of this I am using these exercises to get better at commenting my code and writing my code as clearly as I can.

The concept for today wasn't hard: Take coordinates of beginning and end points for lines and figure out where the lines overlapped. Part 1 was for horizontal and vertical lines only. Part 2 added diagonals.

My first challenge was parsing the coordinate inputs. At one point I didn't realize I still had white space and this lost several coordinates for me. I got the right answer after trimming the space. My regex could definitely be better but it got the job done.

The second challenge was getting the coordinates for each of the points on the line. Part 1 was easier because it only involved calculations to x or y. Part 2 had to add in a slope which meant calculations for both x and y for each point.

After calculating the the x & y points on the line I had to assign a unique number to each point that would identify where it was on the grid. I did this using (y - 1) * xMax + x, with xMax being the maximum length of the grid area.

The unique points were entered as keys and if they already existed then I increased them by 1.

It's so funny to me that the leaders are doing these in a matter of minutes and I'm over here reinventing algebra to figure everything out (see my notes). 🥴

I'm honestly shocked I've made it five days in. My problem solving luck may or may not hold another day. I'm really glad to have made it this far; while I'm slow at these I feel like it's solidifying some basics for me.

[Back to top](#top)

##<a name="Day6">Day 6</a>

We're counting Lanternfish today! 🐟 Given a starting set & propagation timeline, we just have to keep track of how many lanternfish there are. Super simple: create an array of days left till a new lanternfish gets added, add the new lanternfish when the timer goes, return the array length.

Part 1 was WAY too easy, so I should have known part 2 was the catch. Part 2 added more days, which wound up exceeding the memory limits of JavaScript arrays.

After googling the error, I learned how to increase the memory available to Node, which could be useful to know about. Unfortunately the exponential rate of growth of the lanternfish exceeded the memory capabilities of even the EXAMPLE test case.

So I went back to searching. Can JavaScript handle a string better than an array in memory? I refactored using a string instead of an array. No luck.

Finally, I realized I could do this with a dictionary object instead. Just keep track how many fish had which days left till propagation and return the value count with Object.values() and then reducing the values array. I initially made the function more complicated than it needed to be, but once I got it refactored smoothly it passed all (manual) test cases. My answer was in the trillions!!

Yesterday after I completed AoC I spent half the day talking to my husband about it. I may be having a little too much fun with this. 🤪 And every day I wonder... will I be able to figure out the next day???

[Back to top](#top)

##<a name="Day7">Day 7</a>

Today's puzzle included crabs in submarines getting in formation and we have to calculate least fuel used for any given horizontal alignment.

Today was fun for a few reasons: First, I got practice with array.reduce(). I love the usefulness of reduce but I haven't had much practice with it. Second, it wasn't hard. I was done in less than an hour, which is really motivating. Finally, the mental image of crabs in subs had me chuckling all through the puzzle.

Part 2 was great because it wasn't just a simple summing exercise for the reducer. I have had almost zero practice with a reducer that required a callback function other than the basics like adding or multiplying. In order to get the right values I had to set the initial value.

What was almost as funny as crabs in underwater vehicles was forgetting why I coded what I did because I hadn't woken up yet. Usually I fix my coffee first and then code. Once I start in on the code, I don't pay attention when I make my coffee because I'm pseudo coding in my head. I have no idea what I did to my coffee this morning but it's terrible. 😆 Also, by the time I got to revising the reducer function I had no idea what I had written for part 1 since I wasn't really awake when I wrote it. I took probably a solid five minutes reviewing my code and noting it so I could revise the reducer function. And with that being said, I'm off to make more coffee. ☕

[Back to top](#top)

##<a name="Day8">Day 8</a>

Wow, today's puzzle was so fun!!

I did not make the mistake of starting before coffee today, which is good because today's puzzle was a little more complex than yesterday. It was a little like a cipher.

We were given a set of letters that represented different parts of a seven-segment display. If the letter was given the segment was on. Fortunately, four numbers--1,4,7 and 8--are considered unique because the number of segments that are 'on' is specific to each of those numbers. The challenge for part one was to return the number of times the unique numbers appeared in the output portion. Part two involved using the unique numbers as a key to unlock the remaining numbers and interpret each of the output numbers. We then had to sum all the output numbers.

Advent of Code is really helping me get more comfortable with regex. That alone is a win.

For the first puzzle, I only had to filter the strings that had the relevant lengths and return the length of the array.

The second puzzle was quite a bit more involved. I split the input into an array of arrays. I used a function to load the unique numbers into a dictionary. I used a second function to return the decoded number. Using a process of elimination and the unique numbers, I was able to split the remaining numbers. Six, nine and zero all have a length of six. Three, two and five all had a length of five.

Since four fits inside of nine but not six or zero, I created an array from a set that combined nine and four. If the length of the array remained the same, that meant the number was nine. One fits inside of zero but not six, and I could eliminate that way.

I used the same process for three, two and five, added the four-digit numbers to an array, and summed the array.

This was so much fun, the puzzle so cleverly created.

[Back to top](#top)