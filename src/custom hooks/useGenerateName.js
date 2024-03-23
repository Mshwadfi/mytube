
const arabicNames = [
    "Ahmed", "Ali", "Omar", "Fatima", "Mohammed", "Aisha", "Hassan", "Mariam", "Khalid", "Layla",
    "Hadi", "Yasmin", "Rania", "Tariq", "Leila", "Zainab", "Nour", "Yusuf", "Amira", "Samir",
    "Zahra", "Bilal", "Amina", "Mustafa", "Salma", "Karim", "Lina", "Jamal", "Hana", "Ayman",
    "Nadia", "Khaled", "Sara", "Rami", "Farah", "Hamza", "Reem", "Raheem", "Malak", "Fahad",
    "Maya", "Youssef", "Leila", "Huda", "Yasin", "Layla", "Waleed", "Aaliyah", "Kareem", "Samar",
    "Mahdi", "Nora", "Mahmoud", "Inaya", "Maha", "Raed", "Dana", "Jawad", "Dalia", "Fadi", "Laila",
    "Faisal", "Zara", "Marwan", "Nadine", "Imad", "Hind", "Moataz", "Sana", "Safa", "Hani", "Asma",
    "Walid", "Amal", "Khalil", "Mona", "Mounir", "Rasha", "Rania", "Malika", "Nasser", "Noor",
    "Layth", "Zaynab", "Sameh", "Yara", "Bassam", "Manal", "Fawzi", "Abeer", "Tarek", "Amira",
    "Majed", "Nada", "Nadir", "Rana", "Hind", "Widad", "Batoul", "Jihad", "Ghada", "Najib", "Dina",
    "Omar", "Sabah", "Nabil", "Lubna", "Hisham", "Saida", "Aliya", "Waleed", "Rima", "Youssef",
    "Layan", "Tamara", "Zakaria", "Asmaa", "Jaafar", "Salwa", "Rayan", "Ghina", "Yaser", "Nura",
    "Hisham", "Lamya", "Amer", "Jamila", "Adil", "Hajar", "Maher", "Jana", "Ziad", "Basma", "Riad",
    "Inas", "Hind", "Widad", "Bahaa", "Samar", "Sharif", "Faten", "Nizar", "Leen", "Abdel", "Asmaa",
    "Fahd", "Amira", "Yasmine", "Hana", "Rafiq", "Layla", "Aziz", "Sanaa", "Safwan", "Farida", "Amin",
    "Randa", "Maroun", "Shireen", "Nadim", "Mona", "Rami", "Rima", "Qasim", "Salma", "Dany", "Maha",
    "Zaki", "Sara", "Akram", "Leila", "Jamil", "Dalal", "Tamer", "Noura", "Khalil", "Fatima", "Jihad",
    "Lamis", "Saad", "Sana", "Bader", "Layla", "Ghassan", "Manar", "Fares", "Lina", "Jamal", "Salma",
    "Saleh", "Amal", "Raed", "Amina", "Sami", "Nadine", "Hatem", "Reem", "Nidal", "Noor", "Adnan",
    "Samira", "Majid", "Laila", "Adel", "Hanan", "Maan", "Yara", "Rami", "Dana", "Jalal", "Hind",
    "Saif", "Saba", "Sameer", "Maya", "Adham", "Dina", "Rida", "Rana", "Muhsin", "Huda", "Wael",
    "Noora", "Fadel", "Aisha", "Saad", "Amal", "Naeem", "Nada", "Anwar", "Rima", "Imran", "Laila",
    "Mazen", "Samia", "Qasim", "Malak", "Tawfiq", "Salwa", "Jihad", "Ghada", "Rashid", "Mona", "Kareem",
    "Sana", "Saif", "Rasha", "Ziad", "Salma", "Tariq", "Dalia", "Farid", "Rana", "Tamer", "Layla",
    "Majid", "Leila", "Fahad", "Maysa", "Jihad", "Samar", "Rami", "Amira", "Raafat", "Hana", "Nadim",
    "Lina", "Salah", "Rawan", "Sameh", "Salma", "Saif", "Rana", "Munir", "Sana", "Sami", "Mona", "Saad",
    "Rima", "Abdul", "Nada", "Fadi", "Amal", "Nasser", "Farah", "Mazin", "Maya", "Khaled", "Nour",
    "Tarek", "Dina", "Ali", "Laila", "Basim", "Rania", "Zaki", "Sanaa", "Jaafar", "Huda", "Ahmed"
  ];
  const englishSentences = [
    "The sun is shining.",
    "I love to read books.",
    "She sings beautifully.",
    "He runs every morning.",
    "They are best friends.",
    "We enjoy eating pizza.",
    "The cat is sleeping.",
    "He plays the guitar well.",
    "She dances gracefully.",
    "We watch movies together.",
    "The flowers smell lovely.",
    "He cooks delicious food.",
    "She speaks fluent Spanish.",
    "They swim in the pool.",
    "I like to travel abroad.",
    "The dog chases the ball.",
    "She writes poetry often.",
    "He paints amazing landscapes.",
    "We go hiking on weekends.",
    "The baby laughs loudly.",
    "I study French at school.",
    "She bakes tasty cookies.",
    "They climb mountains.",
    "We visit museums occasionally.",
    "He fixes cars for a living.",
    "She volunteers at the shelter.",
    "We plant flowers in the garden.",
    "The birds chirp in the trees.",
    "He teaches English online.",
    "She practices yoga daily.",
    "They play soccer in the park.",
    "I enjoy listening to music.",
    "She sketches portraits well.",
    "He rides his bike to work.",
    "We take walks in the park.",
    "The rain falls gently.",
    "She designs websites professionally.",
    "They build sandcastles on the beach.",
    "I play video games sometimes.",
    "He studies astronomy passionately.",
    "She makes jewelry as a hobby.",
    "We bake cakes for birthdays.",
    "The wind blows softly.",
    "He collects stamps from around the world.",
    "She studies mathematics diligently.",
    "They go fishing on weekends.",
    "I enjoy watching the stars.",
    "She reads bedtime stories to her children.",
    "He practices meditation regularly."
  ];
  
   
  
  
const useGenerateName = () =>{
    return (arabicNames[(Math.floor(Math.random() * arabicNames.length))])
}
const useGenerateSentence = () =>{
  return (englishSentences[(Math.floor(Math.random() * englishSentences.length))])
}

export  {useGenerateName , useGenerateSentence};