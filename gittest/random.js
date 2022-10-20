let aphroisms = [
    'The beauty of a group lies in the refinement of its individuals.',
    'A refined disposition is naturally expressed in the way a person walks, lives, sits, and sleeps.',
    'Because seeing virtue in others is in itself a virtue, in appreciating others we in fact dignify ourselves',
    'Material objects were meant to be tools for us to use. Yet, lacking wisdom, we are perpetually discontent, and we thus become enslvaed by material objects.',
    'How bitter life is when we have desires! Our demands on others bring endless misery.',
    'One who is content is immensely broadhearted. A broadhearted person will not be in dispute with others over any matter.',
    'Know your blessings, cherish them and sow more blessings.',
    'The ocean can be filled, yet the tiny mouth of a human being can never be filled.',
    'When we treat others with loving-kindness, we will not stir up ill feelings and we will be able to form good relationships with others.',
    'Be faithful and honest from deep inside, this is the essence of spiritual cultivation.',
    'There is no need to learn many teachings. If we can put one simple verse into practice, we can awaken our true nature of goodness.',
    'Every single day is like a blank page of our life. Every person we meet, every event we participate in is a lively essay.',
    'The behavior of a person during his lifetime, be it good or evil, is accumlated over time.',
    'Doing nothing and idling time away consumes life. Giving to others with total dedication creates life.',
    'If we don\'t do something, our life will pass by in vain. But if we work unceasingly for the betterment of mankind, ours will be a beautiful life.',
    'Be careful and mindful when dealing with others, but do not be narrow-minded.',
    'To have two good hands and refuse to work is no different than having no hands at all.',
    'Do not think too highly of yourself, and yet, never underestimate your ability.',
    'To live in peace, we must have inner peace. To have inner peace, we must have a clear conscience. When our conscience is clear and our mind at peace, we bring peace and bliss to those around us.',
    'Continue even when it is hard to go on, release even when it is hard to let go, endure even when it hard to bear, this is how we build our character.',
    'Speak kind words, think good thoughts, do good deeds, and walk the right path.',
    'When you view the world from a different perspective, the world becomes vast and wide. Try shifting your perspective in everything you do, and all will be light and easy.',
    'Be honest and truthful in everything you do. Be gentle and forgiving in your relationships with others.',
    'Life becomes meaningful when we shoulder responsibilities. Avoiding responsibilities makes our life empty.',
    'Do not ask for less responsibility to be free and relaxed - ask for more strength.',
    'Rather than worry about the condition of our society, why not replace it with confidence and with dedication to contribute with loving-kindness?',
    'Even the tiniest bolt must be screwed on tightly in order to perform its best.',
    'In the face of adversity, be grateful, for such opportunities do not come by easily.',
    'When conflict and adversity arise, always preserve a spacious heart.',
    'Forgive those who unintentionally hurt us. Do not be someone who is easily hurt by others.',
    'When life is safe and smooth, we can easily lose our direction. Yet even a small setback or misfortune can awaken our conscience, and nurture the seeds of kindness.',
    'Believe in yourself, but do not be attached to your own point of view.',
    'We cannot love when filled with suspicion. We cannot trust when filled with doubts. We cannot forgive when unwilling to believe.',
    'The more mistrust we feel, the less confidence we have.',
    'A truly successful person is accepted by everyone and accepts everyone.',
    'How can we be free from the suffering of burth and death? Only when we nurture our heart with joy and unselfish giving can we truly release our attachments.',
    'Let go of all worries, only then will you experience  the happiness of a compassionate heart.'
];

function randomMessage(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
}

console.log(randomMessage(aphroisms));