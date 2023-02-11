const content = [
    {quote:`“Be yourself; everyone else is already taken.”`, author:"Oscar Wilde", src:"IMGS/Oscar Wilde.jpg"},
    {quote:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`, author:"Marilyn Monroe", src:"IMGS/Marilyn Monroe.jpg"},
    {quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`, author:"Albert Einstein", src:"IMGS/Albert Einstein.jpg"},
    {quote:`“So many books, so little time.”`, author:"Frank Zappa", src:"IMGS/Frank Zappa.jpg"},
    {quote:`“A room without books is like a body without a soul.”`, author:"Marcus Tullius Cicero", src:"IMGS/Marcus Tullius Cicero.jpg"},
    {quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`, author:"Bernard M. Baruch", src:"IMGS/Bernard M. Baruch.jpg"},
    {quote:`“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”`, author:"William W. Purkey", src:"IMGS/William W. Purkey.jpg"},
    {quote:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`, author:"Dr. Seuss", src:"IMGS/Dr. Seuss.jpg"},
    {quote:`“You only live once, but if you do it right, once is enough.”`, author:"Mae West", src:"IMGS/Mae West.jpg"},
    {quote:`“Be the change that you wish to see in the world.”`, author:"Mahatma Gandhi", src:"IMGS/Mahatma Gandhi.jpg"},
    {quote:`“In three words I can sum up everything I've learned about life: it goes on.”`, author:"Robert Frost", src:"IMGS/Robert Frost.jpg"},
    {quote:`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`, author:"J.K. Rowling, Harry Potter and the Goblet of Fire", src:"IMGS/J.K. Rowling.jpg"},
    {quote:`“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend.”`, author:"Albert Camus", src:"IMGS/Albert Camus.jpg"},
    {quote:`“If you tell the truth, you don't have to remember anything.”`, author:"Mark Twain", src:"IMGS/Mark Twain.jpg"},
    {quote:`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`, author:"Maya Angelou", src:"IMGS/Maya Angelou.jpg"},
    {quote:`“A friend is someone who knows all about you and still loves you.”`, author:"Elbert Hubbard", src:"IMGS/Elbert Hubbard.jpg"},
    {quote:`“To live is the rarest thing in the world. Most people exist, that is all.”`, author:"Oscar Wilde", src:"IMGS/Oscar Wilde.jpg"},
    {quote:`“Always forgive your enemies; nothing annoys them so much.”`, author:"Oscar Wilde", src:"IMGS/Oscar Wilde.jpg"},
    {quote:`“Live as if you were to die tomorrow. Learn as if you were to live forever.”`, author:"Mahatma Gandhi", src:"IMGS/Mahatma Gandhi.jpg"},
    {quote:`“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`, author:"Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches", src:"IMGS/Martin Luther King Jr.jpg"},
    {quote:`“Without music, life would be a mistake.”`, author:"Friedrich Nietzsche, Twilight of the Idols", src:"IMGS/Friedrich Nietzsche.jpg"},
    {quote:`“I am so clever that sometimes I don't understand a single word of what I am saying.”`, author:"Oscar Wilde, The Happy Prince and Other Stories", src:"IMGS/Oscar Wilde.jpg"},
    {quote:`“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`, author:"Ralph Waldo Emerson", src:"IMGS/Ralph Waldo Emerson.jpg"},
    {quote:`“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”`, author:"Marilyn Monroe", src:"IMGS/Marilyn Monroe.jpg"},
    {quote:`“It is better to be hated for what you are than to be loved for what you are not.”`, author:"Andre Gide, Autumn Leaves", src:"IMGS/Andre Gide.jpg"},
    {quote:`“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”`, author:"H. Jackson Brown Jr., P.S. I Love You", src:"IMGS/H. Jackson Brown Jr.jpg"},
    {quote:`“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`, author:"C.S. Lewis, The Four Loves", src:"IMGS/C.S. Lewis.jpg"},
    {quote:`“We accept the love we think we deserve.”`, author:"Stephen Chbosky, The Perks of Being a Wallflower", src:"IMGS/Stephen Chbosky.jpg"},
    {quote:`“The whole world began to stink with the sins of powerful men.”`, author:"Betsy Cornwell, Reader, I Murdered Him", src:"IMGS/Betsy Cornwell.jpg"},
    {quote:`“When I look at my life and its secret colours, I feel like bursting into tears.”`, author:"Albert Camus, A Happy Death", src:"IMGS/Albert Camus.jpg"},
    {quote:`“At 20 years of age the Will reigns; at 30 the Wit; at 40 the Judgment.”`, author:"Benjamin Franklin, Wit and Wisdom from Poor Richard's Almanack", src:"IMGS/Benjamin Franklin.jpg"},
    {quote:`“I don't believe in ageing. I believe in forever altering one's aspect to the sun. Hence my optimism. And to alter now, cleanly and sanely, I want to shuffle off this loose living randomness: people; reviews; fame; all the glittering scales; and be withdrawn, and concentrated.”`, author:"Virginia Woolf, A Writer's Diary", src:"IMGS/Virginia Woolf.jpg"},
    {quote:`“Grief is the stuff of life. A life without grief is no life at all. But regret is a prison. Some part of you which you deeply value lies forever impaled at a crossroads you can no longer find and never forget.”`, author:"Cormac McCarthy, The Passenger", src:"IMGS/Cormac McCarthy.jpg"},
    {quote:`“At sunrise everything is luminous but not clear. It is those we live with and love and should know who elude us. You can love completely without complete understanding.”`, author:"Norman Maclean, A River Runs Through It and Other Stories", src:"IMGS/Norman Maclean.jpg"},
    {quote:`“Well, of course she didn’t. They just met!” Kat says. “Why would he invite a stranger to a Christmas party?”`, author:"Morgan Elizabeth, Tis the Season for Revenge", src:"IMGS/Morgan Elizabeth.jpg"},
    {quote:`“At sunrise everything is luminous but not clear.”`, author:"Norman Maclean, A River Runs Through It and Other Stories", src:"IMGS/Norman Maclean.jpg"},
    {quote:`“I can clearly recall the times when I left God, but I cannot recount a single time when God has ever left me.”`, author:"Gift Gugu Mona", src:"IMGS/Gift Gugu Mona.jpg"},
    {quote:`“For small creatures such as we the vastness is bearable only through love.”`, author:"Carl Sagan, Contact", src:"IMGS/Carl Sagan.jpg"},
    {quote:`“It is not good to want a thing too much. It sometimes drives the luck away. You must want it just enough, and you must be very tactful with Gods or the gods.”`, author:"John Steinbeck, The Pearl", src:"IMGS/John Steinbeck.jpg"},
    {quote:`“People do not seem to realise that their opinion of the world is also a confession of their character.”`, author:"Ralph Waldo Emerson", src:"IMGS/Ralph Waldo Emerson.jpg"},
    {quote:`“Our chief want is someone who will inspire us to be what we know we could be.”`, author:"Ralph Waldo Emerson", src:"IMGS/Ralph Waldo Emerson.jpg"},
    {quote:`“For it is said that humans are never satisfied, that you give them one thing and they want something more. And this is said in disparagement, whereas it is one of the greatest talents the species has and one that has made it superior to animals that are satisfied with what they have.”`, author:"John Steinbeck, The Pearl", src:"IMGS/John Steinbeck.jpg"},
    {quote:`“You’re not dead, but you’re not alive, either. You’re a wintergirl.”`, author:"Laurie Halse Anderson, Wintergirls", src:"IMGS/Laurie Halse Anderson.jpg"},
    {quote:`“Most of us understand that your future is not promised to you. It is constructed day by day, through the choices you make. Your future is earned, little by little, through hard work and action. If you don’t act accordingly, that dream dissolves.”`, author:"Chanel Miller, Know My Name", src:"IMGS/Chanel Miller.jpg"},
    {quote:`“My pain was never more valuable than his potential.”`, author:"Chanel Miller, Know My Name", src:"IMGS/Chanel Miller.jpg"},
    {quote:`“Maybe that's what we do to the people we love: take shots in the dark and realize too late that we've wounded the people we are trying to protect.”`, author:"Jodi Picoult, Handle with Care", src:"IMGS/Jodi Picoult.jpg"},
    {quote:`“There was something terribly wrong with the child, and simply by crossing paths with him, Phil had caught his attention. He felt trapped in a bizarre otherworld in which everything was crooked, but the harder he fought to extricate himself, the more tangled he became. So, in the absence of better options, he stopped struggling.”`, author:"Kealan Patrick Burke, Sour Candy", src:"IMGS/Kealan Patrick Burke.jpg"},
    {quote:`“If we encounter a man of rare intellect, we should ask him what books he reads.”`, author:"Ralph Waldo Emerson", src:"IMGS/Ralph Waldo Emerson.jpg"},
    {quote:`“I knew how much it hurt to be the daughter of people who can't see you, not even if you are standing in front of them stomping your feet.”`, author:"Laurie Halse Anderson, Wintergirls", src:"IMGS/Laurie Halse Anderson.jpg"},
    {quote:`“Write it on your heart that every day is the best day in the year.”`, author:"Ralph Waldo Emerson", src:"IMGS/Ralph Waldo Emerson.jpg"},];

const startContent = document.getElementById("startContent")
const mainContent = document.getElementById("mainContent")
const btnStart = document.getElementById("btnStart")
const btnNext = document.getElementById("btnNext")
const btnEnd = document.getElementById("btnEnd")
const img = document.querySelector(".rounded-pill")

btnStart.addEventListener("click",_ => {
    startContent.classList.replace("d-block","d-none")
    mainContent.classList.replace("d-none","d-block")
    getcontent()
});

btnEnd.addEventListener("click",_ => {
    startContent.classList.replace("d-none","d-block")
    mainContent.classList.replace("d-block","d-none")
});

btnNext.addEventListener("click", getcontent);

function getcontent(){
    let index = Math.trunc(Math.random() * content.length)
    document.getElementById("quote").innerHTML = content[index].quote
    document.getElementById("author").innerHTML = `-- ${content[index].author}`
    img.src = content[index].src
    img.alt = content[index].author
};
