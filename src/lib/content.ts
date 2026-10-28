import type { LearningPath, Lesson, Question } from '../types'

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'bible-basics', title: 'Bible Basics', description: 'Discover what the Bible is, how it is organized, and how to read it.', difficulty: 'Beginner', icon: 'BookOpen', color: '#2d6a4f',
    units: [
      { id: 'bb-u1', pathId: 'bible-basics', title: 'What Is the Bible?', description: 'The Bible as God\'s Word.', order: 1 },
      { id: 'bb-u2', pathId: 'bible-basics', title: 'How the Bible Is Organized', description: 'Books, chapters, verses.', order: 2 },
      { id: 'bb-u3', pathId: 'bible-basics', title: 'The Old Testament', description: 'The first part of the Bible.', order: 3 },
      { id: 'bb-u4', pathId: 'bible-basics', title: 'The New Testament', description: 'The second part of the Bible.', order: 4 },
      { id: 'bb-u5', pathId: 'bible-basics', title: 'Understanding Bible References', description: 'How to find verses.', order: 5 },
      { id: 'bb-u6', pathId: 'bible-basics', title: 'The Four Gospels', description: 'Matthew, Mark, Luke, John.', order: 6 },
      { id: 'bb-u7', pathId: 'bible-basics', title: 'The Life of Jesus', description: 'An overview of Jesus\' life.', order: 7 },
      { id: 'bb-u8', pathId: 'bible-basics', title: 'The Early Church', description: 'How the church began.', order: 8 },
    ],
  },
  {
    id: 'life-of-jesus', title: 'The Life of Jesus', description: 'Walk through the birth, ministry, death, and resurrection of Jesus Christ.', difficulty: 'Beginner', icon: 'Sun', color: '#d4a017',
    units: [
      { id: 'loj-u1', pathId: 'life-of-jesus', title: 'The Birth of Jesus', description: 'The incarnation.', order: 1 },
      { id: 'loj-u2', pathId: 'life-of-jesus', title: 'The Baptism of Jesus', description: 'Beginning of ministry.', order: 2 },
      { id: 'loj-u3', pathId: 'life-of-jesus', title: 'The Calling of the Disciples', description: 'Jesus chooses followers.', order: 3 },
      { id: 'loj-u4', pathId: 'life-of-jesus', title: 'The Teachings of Jesus', description: 'What Jesus taught.', order: 4 },
      { id: 'loj-u5', pathId: 'life-of-jesus', title: 'The Parables of Jesus', description: 'Stories with meaning.', order: 5 },
      { id: 'loj-u6', pathId: 'life-of-jesus', title: 'The Miracles of Jesus', description: 'Signs of His power.', order: 6 },
      { id: 'loj-u7', pathId: 'life-of-jesus', title: 'The Crucifixion', description: 'Jesus dies for us.', order: 7 },
      { id: 'loj-u8', pathId: 'life-of-jesus', title: 'The Resurrection', description: 'Jesus rises again.', order: 8 },
      { id: 'loj-u9', pathId: 'life-of-jesus', title: 'The Great Commission', description: 'Go and make disciples.', order: 9 },
    ],
  },
  {
    id: 'people-of-bible', title: 'People of the Bible', description: 'Meet the men and women God used throughout Scripture.', difficulty: 'Beginner', icon: 'Users', color: '#5c4033',
    units: [
      { id: 'pob-u1', pathId: 'people-of-bible', title: 'Adam and Eve', description: 'The first humans.', order: 1 },
      { id: 'pob-u2', pathId: 'people-of-bible', title: 'Noah', description: 'Faith and the ark.', order: 2 },
      { id: 'pob-u3', pathId: 'people-of-bible', title: 'Abraham', description: 'Father of faith.', order: 3 },
      { id: 'pob-u4', pathId: 'people-of-bible', title: 'Joseph', description: 'From pit to palace.', order: 4 },
      { id: 'pob-u5', pathId: 'people-of-bible', title: 'Moses', description: 'Deliverer of Israel.', order: 5 },
      { id: 'pob-u6', pathId: 'people-of-bible', title: 'David', description: 'A man after God\'s heart.', order: 6 },
      { id: 'pob-u7', pathId: 'people-of-bible', title: 'Esther', description: 'Courage and deliverance.', order: 7 },
      { id: 'pob-u8', pathId: 'people-of-bible', title: 'Daniel', description: 'Faith in exile.', order: 8 },
      { id: 'pob-u9', pathId: 'people-of-bible', title: 'Mary', description: 'Mother of Jesus.', order: 9 },
      { id: 'pob-u10', pathId: 'people-of-bible', title: 'Peter', description: 'The rock.', order: 10 },
      { id: 'pob-u11', pathId: 'people-of-bible', title: 'Paul', description: 'Apostle to the nations.', order: 11 },
    ],
  },
  {
    id: 'christian-living', title: 'Christian Living', description: 'Apply biblical truth to everyday life.', difficulty: 'Intermediate', icon: 'Heart', color: '#7b2cbf',
    units: [
      { id: 'cl-u1', pathId: 'christian-living', title: 'Faith and Trust', description: 'Trusting God.', order: 1 },
      { id: 'cl-u2', pathId: 'christian-living', title: 'Love and Compassion', description: 'Loving others.', order: 2 },
      { id: 'cl-u3', pathId: 'christian-living', title: 'Forgiveness', description: 'Forgiving as Christ forgave.', order: 3 },
      { id: 'cl-u4', pathId: 'christian-living', title: 'Prayer', description: 'Talking with God.', order: 4 },
      { id: 'cl-u5', pathId: 'christian-living', title: 'Handling Difficulties', description: 'Hope in trials.', order: 5 },
      { id: 'cl-u6', pathId: 'christian-living', title: 'Serving Others', description: 'A servant\'s heart.', order: 6 },
    ],
  },
  {
    id: 'old-testament-journey', title: 'Old Testament Journey', description: 'From creation to exile — the story of God and His people.', difficulty: 'Intermediate', icon: 'Scroll', color: '#8b5a2b',
    units: [
      { id: 'otj-u1', pathId: 'old-testament-journey', title: 'Creation', description: 'In the beginning.', order: 1 },
      { id: 'otj-u2', pathId: 'old-testament-journey', title: 'The Fall', description: 'Sin enters the world.', order: 2 },
      { id: 'otj-u3', pathId: 'old-testament-journey', title: 'The Flood', description: 'Noah and the ark.', order: 3 },
      { id: 'otj-u4', pathId: 'old-testament-journey', title: 'Abraham and God\'s Covenant', description: 'A promise.', order: 4 },
      { id: 'otj-u5', pathId: 'old-testament-journey', title: 'The Exodus', description: 'Freedom from Egypt.', order: 5 },
      { id: 'otj-u6', pathId: 'old-testament-journey', title: 'The Ten Commandments', description: 'God\'s law.', order: 6 },
    ],
  },
  {
    id: 'new-testament-journey', title: 'New Testament Journey', description: 'The Gospels, the early church, and the hope of Christ.', difficulty: 'Intermediate', icon: 'Cross', color: '#1d3557',
    units: [
      { id: 'ntj-u1', pathId: 'new-testament-journey', title: 'The Gospels', description: 'Four witnesses.', order: 1 },
      { id: 'ntj-u2', pathId: 'new-testament-journey', title: 'Acts of the Apostles', description: 'The church grows.', order: 2 },
      { id: 'ntj-u3', pathId: 'new-testament-journey', title: 'Paul\'s Conversion', description: 'From persecutor to apostle.', order: 3 },
      { id: 'ntj-u4', pathId: 'new-testament-journey', title: 'The Letters of Paul', description: 'Teaching the churches.', order: 4 },
      { id: 'ntj-u5', pathId: 'new-testament-journey', title: 'Christian Hope', description: 'Looking forward.', order: 5 },
    ],
  },
  {
    id: 'teachings-of-jesus', title: 'The Teachings of Jesus', description: 'The Sermon on the Mount and the heart of Christ\'s message.', difficulty: 'Intermediate', icon: 'MessageCircle', color: '#0077b6',
    units: [
      { id: 'toj-u1', pathId: 'teachings-of-jesus', title: 'The Sermon on the Mount', description: 'Jesus\' great teaching.', order: 1 },
      { id: 'toj-u2', pathId: 'teachings-of-jesus', title: 'The Beatitudes', description: 'Blessed are...', order: 2 },
      { id: 'toj-u3', pathId: 'teachings-of-jesus', title: 'Loving Your Neighbor', description: 'The greatest commandment.', order: 3 },
      { id: 'toj-u4', pathId: 'teachings-of-jesus', title: 'Forgiveness', description: 'Forgive as you are forgiven.', order: 4 },
      { id: 'toj-u5', pathId: 'teachings-of-jesus', title: 'Prayer', description: 'How to pray.', order: 5 },
      { id: 'toj-u6', pathId: 'teachings-of-jesus', title: 'Faith', description: 'Trust in God.', order: 6 },
      { id: 'toj-u7', pathId: 'teachings-of-jesus', title: 'The Kingdom of God', description: 'God\'s reign.', order: 7 },
    ],
  },
  {
    id: 'prayer-growth', title: 'Prayer and Spiritual Growth', description: 'Learn to pray and grow in your walk with God.', difficulty: 'Beginner', icon: 'Sparkles', color: '#2a9d8f',
    units: [
      { id: 'pg-u1', pathId: 'prayer-growth', title: 'What Is Prayer?', description: 'Talking with God.', order: 1 },
      { id: 'pg-u2', pathId: 'prayer-growth', title: 'The Lord\'s Prayer', description: 'Jesus teaches us to pray.', order: 2 },
      { id: 'pg-u3', pathId: 'prayer-growth', title: 'Thanksgiving', description: 'Giving thanks.', order: 3 },
      { id: 'pg-u4', pathId: 'prayer-growth', title: 'Praying for Others', description: 'Intercession.', order: 4 },
      { id: 'pg-u5', pathId: 'prayer-growth', title: 'Consistent Prayer Habit', description: 'Daily prayer.', order: 5 },
    ],
  },
]

// Helper to build lesson
function L(id: string, pathId: string, unitId: string, title: string, intro: string, objectives: string[], mins: number, questions: Question[], summary: string, refs: string[]): Lesson {
  return { id, pathId, unitId, title, introduction: intro, learningObjectives: objectives, estimatedMinutes: mins, questions, summary, scriptureReferences: refs }
}

export const LESSONS: Lesson[] = [
  // === BIBLE BASICS ===
  L('bb-1','bible-basics','bb-u1','What Is the Bible?','The Bible is a collection of books written over many centuries, inspired by God, telling the story of His love for humanity.', ['Understand what the Bible is','Know it is God\'s Word','See the Bible as one story'], 5, [
    { id:'bb1-q1', type:'multiple_choice', question:'What is the Bible?', options:['A collection of human stories','God\'s inspired Word to humanity','A history book only','A book of rules'], correctAnswer:'God\'s inspired Word to humanity', explanation:'The Bible is God\'s inspired Word, revealing His character and plan for salvation.', scriptureReference:'2 Timothy 3:16' },
    { id:'bb1-q2', type:'true_false', question:'The Bible is made up of 66 books.', options:['True','False'], correctAnswer:'True', explanation:'The Bible contains 66 books — 39 in the Old Testament and 27 in the New Testament.' },
    { id:'bb1-q3', type:'fill_blank', question:'Complete the verse (WEB): "All Scripture is God-breathed and is useful for ____."', blankSentence:'All Scripture is God-breathed and is useful for ____.', correctAnswer:'teaching', explanation:'2 Timothy 3:16 says Scripture is useful for teaching, rebuking, correcting, and training in righteousness.', scriptureReference:'2 Timothy 3:16' },
    { id:'bb1-q4', type:'multiple_choice', question:'Who wrote the Bible?', options:['Only Moses','Many authors over centuries, inspired by God','Only the apostles',' Unknown scribes'], correctAnswer:'Many authors over centuries, inspired by God', explanation:'God used many authors across centuries, all inspired by the Holy Spirit.' },
    { id:'bb1-q5', type:'scenario', question:'A friend says the Bible is just an old book of myths. What is the best response?', options:['Agree with them','Explain it is God\'s inspired Word with a unified story of salvation','Ignore the comment','Tell them they are wrong'], correctAnswer:'Explain it is God\'s inspired Word with a unified story of salvation', explanation:'We can gently share that the Bible is God\'s Word, pointing to Jesus and salvation.' },
  ], 'The Bible is God\'s inspired Word — a unified story of His love and salvation through Jesus Christ.', ['2 Timothy 3:16','Psalm 119:105']),

  L('bb-2','bible-basics','bb-u2','How the Bible Is Organized','The Bible is divided into the Old and New Testaments, with books, chapters, and verses.', ['Name the two testaments','Understand chapters and verses','Find a Bible reference'], 5, [
    { id:'bb2-q1', type:'multiple_choice', question:'What are the two main parts of the Bible?', options:['Law and Prophets','Old and New Testament','History and Poetry','Gospels and Letters'], correctAnswer:'Old and New Testament', explanation:'The Bible is divided into the Old Testament (before Christ) and New Testament (Christ and after).' },
    { id:'bb2-q2', type:'multiple_choice', question:'How many books are in the Old Testament?', options:['27','39','66','50'], correctAnswer:'39', explanation:'The Old Testament has 39 books.' },
    { id:'bb2-q3', type:'fill_blank', question:'A Bible reference like "John 3:16" means book ____, chapter 3, verse 16.', blankSentence:'A Bible reference like "John 3:16" means book ____, chapter 3, verse 16.', correctAnswer:'John', explanation:'The format is Book Chapter:Verse.' },
    { id:'bb2-q4', type:'true_false', question:'Chapters and verses were part of the original Bible manuscripts.', options:['True','False'], correctAnswer:'False', explanation:'Chapters and verses were added later to help us find passages easily.' },
    { id:'bb2-q5', type:'order_events', question:'Arrange the order of a Bible reference from largest to smallest.', events:['Book','Chapter','Verse'], correctAnswer:['Book','Chapter','Verse'], explanation:'A reference goes Book, then Chapter, then Verse.' },
  ], 'The Bible has two testaments, 66 books, and uses book:chapter:verse references.', ['John 3:16']),

  L('bb-3','bible-basics','bb-u3','The Old Testament','The Old Testament tells the story of creation, the fall, Israel, and God\'s promises leading to Christ.', ['Summarize the Old Testament','Name key sections','See Christ foreshadowed'], 5, [
    { id:'bb3-q1', type:'multiple_choice', question:'The Old Testament was written mostly in which language?', options:['Greek','Latin','Hebrew (and some Aramaic)','English'], correctAnswer:'Hebrew (and some Aramaic)', explanation:'Most of the Old Testament was written in Hebrew, with some Aramaic.' },
    { id:'bb3-q2', type:'multiple_choice', question:'Which of these is in the Old Testament?', options:['Romans','Genesis','Revelation','Acts'], correctAnswer:'Genesis', explanation:'Genesis is the first book of the Old Testament.' },
    { id:'bb3-q3', type:'true_false', question:'The Old Testament points forward to Jesus Christ.', options:['True','False'], correctAnswer:'True', explanation:'The Old Testament contains prophecies and types that point to Jesus.' },
    { id:'bb3-q4', type:'match_pairs', question:'Match the Old Testament section to its content.', pairs:[{left:'Law (Torah)',right:'Genesis–Deuteronomy'},{left:'History',right:'Joshua–Esther'},{left:'Poetry',right:'Job–Song of Songs'},{left:'Prophets',right:'Isaiah–Malachi'}], correctAnswer:['Genesis–Deuteronomy','Joshua–Esther','Job–Song of Songs','Isaiah–Malachi'], explanation:'The Old Testament has four main sections: Law, History, Poetry, and Prophets.' },
    { id:'bb3-q5', type:'scenario', question:'A new believer asks where to start reading the Old Testament. What do you suggest?', options:['Start with Leviticus','Start with Genesis',' Start with the prophets',' Start anywhere'], correctAnswer:'Start with Genesis', explanation:'Genesis lays the foundation for the whole Bible story.' },
  ], 'The Old Testament is God\'s story with Israel, pointing forward to Christ.', ['Genesis 1:1','Luke 24:27']),

  L('bb-4','bible-basics','bb-u4','The New Testament','The New Testament tells of Jesus Christ and the early church.', ['Summarize the New Testament','Name key sections','Know the Gospels'], 5, [
    { id:'bb4-q1', type:'multiple_choice', question:'How many books are in the New Testament?', options:['27','39','66','12'], correctAnswer:'27', explanation:'The New Testament has 27 books.' },
    { id:'bb4-q2', type:'multiple_choice', question:'The New Testament was written mostly in which language?', options:['Hebrew','Greek','Latin','Aramaic'], correctAnswer:'Greek', explanation:'The New Testament was written in Greek (Koine Greek).' },
    { id:'bb4-q3', type:'true_false', question:'The Gospels are the first four books of the New Testament.', options:['True','False'], correctAnswer:'True', explanation:'Matthew, Mark, Luke, and John are the four Gospels.' },
    { id:'bb4-q4', type:'match_pairs', question:'Match the New Testament section.', pairs:[{left:'Gospels',right:'Matthew–John'},{left:'History',right:'Acts'},{left:'Letters',right:'Romans–Jude'},{left:'Prophecy',right:'Revelation'}], correctAnswer:['Matthew–John','Acts','Romans–Jude','Revelation'], explanation:'The New Testament contains Gospels, Acts, Letters (Epistles), and Revelation.' },
    { id:'bb4-q5', type:'fill_blank', question:'The New Testament centers on the person and work of ____.', blankSentence:'The New Testament centers on the person and work of ____.', correctAnswer:'Jesus', explanation:'Jesus Christ is the center of the New Testament.', scriptureReference:'John 1:14' },
  ], 'The New Testament reveals Jesus Christ and the birth of the church.', ['John 1:14','Acts 1:8']),

  L('bb-5','bible-basics','bb-u5','Understanding Bible References','Learn to read and find Bible references quickly.', ['Read a reference','Find book, chapter, verse','Use cross-references'], 4, [
    { id:'bb5-q1', type:'multiple_choice', question:'In "Psalm 23:1", what does "23" represent?', options:['Verse','Chapter','Book number','Testament'], correctAnswer:'Chapter', explanation:'The number before the colon is the chapter.' },
    { id:'bb5-q2', type:'multiple_choice', question:'In "Psalm 23:1", what does "1" represent?', options:['Chapter','Verse','Book number','Page'], correctAnswer:'Verse', explanation:'The number after the colon is the verse.' },
    { id:'bb5-q3', type:'fill_blank', question:'A range like "John 3:16-17" means verses 16 ____ 17.', blankSentence:'A range like "John 3:16-17" means verses 16 ____ 17.', correctAnswer:'to', explanation:'A hyphen indicates a range of verses (16 to 17).' },
    { id:'bb5-q4', type:'true_false', question:'"Gen 1:1" is a valid abbreviation for Genesis 1:1.', options:['True','False'], correctAnswer:'True', explanation:'Genesis is commonly abbreviated "Gen".' },
    { id:'bb5-q5', type:'scripture_ref', question:'Which book contains "In the beginning God created the heavens and the earth"?', options:['Exodus','Genesis','Psalms','John'], correctAnswer:'Genesis', explanation:'Genesis 1:1 opens the Bible with creation.', scriptureReference:'Genesis 1:1' },
  ], 'Bible references use Book Chapter:Verse format.', ['Genesis 1:1']),

  L('bb-6','bible-basics','bb-u6','The Four Gospels','Matthew, Mark, Luke, and John each tell the story of Jesus.', ['Name the four Gospels','Know their authors','Understand their purpose'], 5, [
    { id:'bb6-q1', type:'multiple_choice', question:'Which Gospel is known for its genealogy of Jesus?', options:['Mark','Luke','Matthew','John'], correctAnswer:'Matthew', explanation:'Matthew begins with Jesus\' genealogy.' },
    { id:'bb6-q2', type:'multiple_choice', question:'Which Gospel is the shortest?', options:['Matthew','Mark','Luke','John'], correctAnswer:'Mark', explanation:'Mark is the shortest Gospel, written for a Roman audience.' },
    { id:'bb6-q3', type:'multiple_choice', question:'Which Gospel is written by a doctor?', options:['Matthew','Mark','Luke','John'], correctAnswer:'Luke', explanation:'Luke, a physician, wrote the Gospel of Luke and Acts.' },
    { id:'bb6-q4', type:'true_false', question:'John\'s Gospel focuses on Jesus as the Son of God.', options:['True','False'], correctAnswer:'True', explanation:'John emphasizes Jesus\' divine identity ("I am" statements).' },
    { id:'bb6-q5', type:'word_bank', question:'The Gospels tell the story of Jesus\' ____, ____, and ____.', wordBank:['life','teachings','death','resurrection','birth'], correctAnswer:['life','teachings','death'], explanation:'The Gospels record Jesus\' life, teachings, death, and resurrection. (Multiple valid; here life, teachings, death.)', scriptureReference:'John 20:31' },
  ], 'The four Gospels — Matthew, Mark, Luke, John — present Jesus as King, Servant, Son of Man, and Son of God.', ['John 20:31']),

  L('bb-7','bible-basics','bb-u7','The Life of Jesus','A quick overview of Jesus\' birth, ministry, death, and resurrection.', ['Outline Jesus\' life','Know key events','See the gospel message'], 5, [
    { id:'bb7-q1', type:'order_events', question:'Put these events in order.', events:['Birth','Baptism','Crucifixion','Resurrection'], correctAnswer:['Birth','Baptism','Crucifixion','Resurrection'], explanation:'Jesus was born, baptized, crucified, and resurrected.' },
    { id:'bb7-q2', type:'multiple_choice', question:'Where was Jesus born?', options:['Jerusalem','Nazareth','Bethlehem','Capernaum'], correctAnswer:'Bethlehem', explanation:'Jesus was born in Bethlehem (Matthew 2; Luke 2).', scriptureReference:'Luke 2:4-7' },
    { id:'bb7-q3', type:'multiple_choice', question:'What was Jesus\' main message?', options:['Political freedom','The Kingdom of God','Wealth and health','Religious rules'], correctAnswer:'The Kingdom of God', explanation:'Jesus proclaimed the Kingdom of God.' },
    { id:'bb7-q4', type:'true_false', question:'Jesus died on a cross and rose again on the third day.', options:['True','False'], correctAnswer:'True', explanation:'Jesus was crucified and rose on the third day (1 Cor 15:3-4).', scriptureReference:'1 Corinthians 15:3-4' },
    { id:'bb7-q5', type:'fill_blank', question:'Jesus said, "I am the way, the truth, and the ____." (John 14:6)', blankSentence:'Jesus said, "I am the way, the truth, and the ____."', correctAnswer:'life', explanation:'John 14:6 — Jesus is the way, the truth, and the life.', scriptureReference:'John 14:6' },
  ], 'Jesus\' life — His birth, ministry, death, and resurrection — is the heart of the gospel.', ['John 14:6','1 Corinthians 15:3-4']),

  L('bb-8','bible-basics','bb-u8','The Early Church','After Jesus ascended, the Holy Spirit empowered the church to spread the gospel.', ['Understand Pentecost','Know the church\'s mission','See Acts as history'], 5, [
    { id:'bb8-q1', type:'multiple_choice', question:'What happened at Pentecost?', options:['Jesus was born','The Holy Spirit came','The temple was destroyed','Paul was converted'], correctAnswer:'The Holy Spirit came', explanation:'At Pentecost the Holy Spirit came upon the believers (Acts 2).', scriptureReference:'Acts 2:1-4' },
    { id:'bb8-q2', type:'multiple_choice', question:'Who wrote the book of Acts?', options:['Peter','Paul','Luke','John'], correctAnswer:'Luke', explanation:'Luke wrote Acts as a sequel to his Gospel.' },
    { id:'bb8-q3', type:'true_false', question:'The early church shared everything they had.', options:['True','False'], correctAnswer:'True', explanation:'Believers shared their possessions (Acts 2:44-45).', scriptureReference:'Acts 2:44-45' },
    { id:'bb8-q4', type:'fill_blank', question:'Jesus said, "You will receive power when the Holy Spirit comes on you... you will be my ____." (Acts 1:8)', blankSentence:'Jesus said, "You will receive power when the Holy Spirit comes on you... you will be my ____."', correctAnswer:'witnesses', explanation:'Acts 1:8 — be witnesses to the ends of the earth.', scriptureReference:'Acts 1:8' },
    { id:'bb8-q5', type:'scenario', question:'A friend asks why Christians gather together. What best explains it?', options:['It is a social club','To worship, learn, and serve together as the body of Christ',' To follow tradition',' To feel good'], correctAnswer:'To worship, learn, and serve together as the body of Christ', explanation:'The church gathers to worship God and grow together (Hebrews 10:25).', scriptureReference:'Hebrews 10:24-25' },
  ], 'The early church was empowered by the Holy Spirit to spread the gospel.', ['Acts 1:8','Acts 2:42-47']),

  // === LIFE OF JESUS ===
  L('loj-1','life-of-jesus','loj-u1','The Birth of Jesus','Jesus was born in Bethlehem to Mary, fulfilling Old Testament prophecies.', ['Know the birth story','Understand the incarnation','See prophecy fulfilled'], 5, [
    { id:'loj1-q1', type:'multiple_choice', question:'Who was Jesus\' mother?', options:['Elizabeth','Mary','Martha','Sarah'], correctAnswer:'Mary', explanation:'Mary was chosen to be the mother of Jesus (Luke 1).', scriptureReference:'Luke 1:26-31' },
    { id:'loj1-q2', type:'multiple_choice', question:'In what town was Jesus born?', options:['Jerusalem','Nazareth','Bethlehem','Capernaum'], correctAnswer:'Bethlehem', explanation:'Jesus was born in Bethlehem (Luke 2:4-7).', scriptureReference:'Luke 2:4-7' },
    { id:'loj1-q3', type:'true_false', question:'Angels announced Jesus\' birth to shepherds.', options:['True','False'], correctAnswer:'True', explanation:'An angel announced good news to shepherds (Luke 2:8-14).', scriptureReference:'Luke 2:10-11' },
    { id:'loj1-q4', type:'fill_blank', question:'The angel said, "Today in the town of David a ____ has been born to you." (Luke 2:11)', blankSentence:'The angel said, "Today in the town of David a ____ has been born to you."', correctAnswer:'Savior', explanation:'Luke 2:11 — a Savior, Christ the Lord.', scriptureReference:'Luke 2:11' },
    { id:'loj1-q5', type:'match_pairs', question:'Match the person to their role in the birth story.', pairs:[{left:'Mary',right:'Mother of Jesus'},{left:'Joseph',right:'Earthly father'},{left:'Shepherds',right:'First visitors'},{left:'Magi',right:'Wise men from the east'}], correctAnswer:['Mother of Jesus','Earthly father','First visitors','Wise men from the east'], explanation:'Mary, Joseph, shepherds, and the Magi all play roles in the birth narrative.' },
  ], 'Jesus, the Savior, was born in Bethlehem, fulfilling God\'s promise.', ['Luke 2:1-20','Matthew 1:18-25']),

  L('loj-2','life-of-jesus','loj-u2','The Baptism of Jesus','Jesus was baptized by John, marking the start of His public ministry.', ['Understand Jesus\' baptism','Know John the Baptist\'s role','See the Trinity revealed'], 5, [
    { id:'loj2-q1', type:'multiple_choice', question:'Who baptized Jesus?', options:['Peter','John the Baptist','Paul','James'], correctAnswer:'John the Baptist', explanation:'John baptized Jesus in the Jordan (Matthew 3).', scriptureReference:'Matthew 3:13-17' },
    { id:'loj2-q2', type:'true_false', question:'A voice from heaven said, "This is my Son, whom I love."', options:['True','False'], correctAnswer:'True', explanation:'God the Father affirmed Jesus at His baptism (Matthew 3:17).', scriptureReference:'Matthew 3:17' },
    { id:'loj2-q3', type:'fill_blank', question:'At Jesus\' baptism, the Spirit descended like a ____.', blankSentence:'At Jesus\' baptism, the Spirit descended like a ____.', correctAnswer:'dove', explanation:'Matthew 3:16 — the Spirit descended like a dove.', scriptureReference:'Matthew 3:16' },
    { id:'loj2-q4', type:'multiple_choice', question:'Why did Jesus get baptized?', options:['To be forgiven of sins','To identify with humanity and fulfill righteousness',' To show off',' To join John\'s group'], correctAnswer:'To identify with humanity and fulfill righteousness', explanation:'Jesus said it was to fulfill all righteousness (Matthew 3:15).', scriptureReference:'Matthew 3:15' },
    { id:'loj2-q5', type:'scenario', question:'A friend wonders why Jesus needed baptism if He was sinless. You reply:', options:['He needed forgiveness',' He set an example and identified with us',' It was a mistake',' He was testing John'], correctAnswer:' He set an example and identified with us', explanation:'Jesus identified with humanity and modeled obedience.' },
  ], 'Jesus\' baptism revealed the Trinity and launched His ministry.', ['Matthew 3:13-17']),

  L('loj-3','life-of-jesus','loj-u3','The Calling of the Disciples','Jesus called ordinary people to follow Him and become fishers of men.', ['Know the first disciples','Understand "follow me"','See discipleship'], 5, [
    { id:'loj3-q1', type:'multiple_choice', question:'What did Jesus say to Peter and Andrew?', options:['Come and see',' Follow me, and I will make you fishers of men',' Sell all you have',' Go home'], correctAnswer:' Follow me, and I will make you fishers of men', explanation:'Matthew 4:19 — follow me, and I will make you fishers of men.', scriptureReference:'Matthew 4:19' },
    { id:'loj3-q2', type:'multiple_choice', question:'What was Peter\'s occupation before following Jesus?', options:['Tax collector','Fisherman','Carpenter',' Shepherd'], correctAnswer:'Fisherman', explanation:'Peter was a fisherman (Matthew 4:18).', scriptureReference:'Matthew 4:18' },
    { id:'loj3-q3', type:'true_false', question:'Matthew was a tax collector before following Jesus.', options:['True','False'], correctAnswer:'True', explanation:'Matthew (Levi) was a tax collector (Matthew 9:9).', scriptureReference:'Matthew 9:9' },
    { id:'loj3-q4', type:'fill_blank', question:'Jesus said, "Follow me" — and they left their ____ and followed him.', blankSentence:'Jesus said, "Follow me" — and they left their ____ and followed him.', correctAnswer:'nets', explanation:'The fishermen left their nets (Matthew 4:20).', scriptureReference:'Matthew 4:20' },
    { id:'loj3-q5', type:'scenario', question:'Jesus calls you to follow Him today. What does that mean?', options:['Just attend church',' Trust and obey Him daily',' Be perfect',' Memorize rules'], correctAnswer:' Trust and obey Him daily', explanation:'Following Jesus means daily trust and obedience.' },
  ], 'Jesus called ordinary people to follow Him and make disciples.', ['Matthew 4:18-22','Matthew 9:9']),

  L('loj-4','life-of-jesus','loj-u4','The Teachings of Jesus','Jesus taught with authority about God\'s Kingdom, love, and grace.', ['Summarize Jesus\' teaching','Know the Kingdom theme','Apply His words'], 5, [
    { id:'loj4-q1', type:'multiple_choice', question:'Jesus often taught using:', options:['Laws only',' Parables (stories)',' Science',' Politics'], correctAnswer:' Parables (stories)', explanation:'Jesus used parables to teach spiritual truths (Matthew 13).', scriptureReference:'Matthew 13:3' },
    { id:'loj4-q2', type:'true_false', question:'Jesus said the greatest commandment is to love God and love your neighbor.', options:['True','False'], correctAnswer:'True', explanation:'Matthew 22:37-39 — love God and love your neighbor.', scriptureReference:'Matthew 22:37-39' },
    { id:'loj4-q3', type:'fill_blank', question:'Jesus said, "Blessed are the pure in ____, for they will see God." (Matt 5:8)', blankSentence:'Jesus said, "Blessed are the pure in ____, for they will see God."', correctAnswer:'heart', explanation:'Matthew 5:8 — pure in heart.', scriptureReference:'Matthew 5:8' },
    { id:'loj4-q4', type:'multiple_choice', question:'In the Sermon on the Mount, Jesus taught about:', options:['Wealth only',' The Kingdom and righteous living',' Politics',' Science'], correctAnswer:' The Kingdom and righteous living', explanation:'The Sermon on the Mount (Matthew 5-7) teaches Kingdom living.' },
    { id:'loj4-q5', type:'scenario', question:'Someone asks how to live as a Christian. You point to:', options:['Rules of a church',' Jesus\' teachings in the Gospels',' Popular opinion',' Feelings'], correctAnswer:' Jesus\' teachings in the Gospels', explanation:'Christians follow Jesus\' teachings (John 14:21).', scriptureReference:'John 14:21' },
  ], 'Jesus taught about God\'s Kingdom with authority and grace.', ['Matthew 5-7','Matthew 22:37-39']),

  L('loj-5','life-of-jesus','loj-u5','The Parables of Jesus','Parables are earthly stories with heavenly meanings.', ['Define parable','Know key parables','Apply the lesson'], 5, [
    { id:'loj5-q1', type:'multiple_choice', question:'What is a parable?', options:['A poem',' An earthly story with a spiritual meaning',' A law',' A prophecy'], correctAnswer:' An earthly story with a spiritual meaning', explanation:'A parable uses everyday stories to teach spiritual truth.' },
    { id:'loj5-q2', type:'multiple_choice', question:'The Parable of the Good Samaritan teaches:', options:['How to travel',' Love your neighbor, even enemies',' Money management',' Farming'], correctAnswer:' Love your neighbor, even enemies', explanation:'Luke 10:25-37 — love your neighbor as yourself.', scriptureReference:'Luke 10:25-37' },
    { id:'loj5-q3', type:'multiple_choice', question:'The Parable of the Prodigal Son shows:', options:['God\'s anger',' God\'s forgiving love',' Money is bad',' Family conflict'], correctAnswer:' God\'s forgiving love', explanation:'Luke 15:11-32 — the father welcomes the lost son home.', scriptureReference:'Luke 15:11-32' },
    { id:'loj5-q4', type:'true_false', question:'The Parable of the Sower is about how people receive God\'s Word.', options:['True','False'], correctAnswer:'True', explanation:'Matthew 13:3-9, 18-23 — the seed is God\'s Word.', scriptureReference:'Matthew 13:3-9' },
    { id:'loj5-q5', type:'fill_blank', question:'In the Parable of the Lost Sheep, the shepherd leaves the 99 to find the ____.', blankSentence:'In the Parable of the Lost Sheep, the shepherd leaves the 99 to find the ____.', correctAnswer:'one', explanation:'Luke 15:4-7 — he rejoices over the one found.', scriptureReference:'Luke 15:4-7' },
  ], 'Parables reveal God\'s Kingdom and His heart for the lost.', ['Luke 10:25-37','Luke 15']),

  L('loj-6','life-of-jesus','loj-u6','The Miracles of Jesus','Jesus\' miracles reveal His power and compassion.', ['Know key miracles','Understand their purpose','See Jesus as Lord'], 5, [
    { id:'loj6-q1', type:'multiple_choice', question:'Jesus turned water into:', options:['Wine',' Bread',' Oil',' Milk'], correctAnswer:'Wine', explanation:'John 2:1-11 — water to wine at Cana.', scriptureReference:'John 2:1-11' },
    { id:'loj6-q2', type:'multiple_choice', question:'Jesus fed 5,000 people with:', options:['10 loaves and 2 fish',' 5 loaves and 2 fish',' 7 loaves and 3 fish',' 2 loaves and 5 fish'], correctAnswer:' 5 loaves and 2 fish', explanation:'John 6:1-14 — five loaves and two fish.', scriptureReference:'John 6:9' },
    { id:'loj6-q3', type:'true_false', question:'Jesus walked on water.', options:['True','False'], correctAnswer:'True', explanation:'Matthew 14:22-33 — Jesus walked on the water.', scriptureReference:'Matthew 14:25' },
    { id:'loj6-q4', type:'multiple_choice', question:'Jesus raised which man from the dead?', options:['Lazarus',' Stephen',' Timothy',' Barnabas'], correctAnswer:'Lazarus', explanation:'John 11 — Jesus raised Lazarus.', scriptureReference:'John 11:43-44' },
    { id:'loj6-q5', type:'scenario', question:'A friend doubts miracles are possible. You respond:', options:['They are just myths',' Jesus\' miracles show His divine power and compassion',' They never happened',' Science disproves them'], correctAnswer:' Jesus\' miracles show His divine power and compassion', explanation:'Miracles reveal Jesus as Lord (John 20:30-31).', scriptureReference:'John 20:30-31' },
  ], 'Jesus\' miracles reveal His divine power, compassion, and authority.', ['John 2:1-11','John 6:1-14','John 11']),

  L('loj-7','life-of-jesus','loj-u7','The Crucifixion','Jesus willingly died on the cross for our sins.', ['Understand the cross','Know why Jesus died','See the gospel'], 5, [
    { id:'loj7-q1', type:'multiple_choice', question:'Why did Jesus die on the cross?', options:['By accident',' For our sins, to reconcile us to God',' For political reasons',' Because He failed'], correctAnswer:' For our sins, to reconcile us to God', explanation:'1 Peter 3:18 — Christ died for sins to bring us to God.', scriptureReference:'1 Peter 3:18' },
    { id:'loj7-q2', type:'true_false', question:'Jesus was crucified between two criminals.', options:['True','False'], correctAnswer:'True', explanation:'Luke 23:32-33 — crucified with two criminals.', scriptureReference:'Luke 23:33' },
    { id:'loj7-q3', type:'fill_blank', question:'Jesus said, "Father, forgive them, for they do not know what they are ____." (Luke 23:34)', blankSentence:'Jesus said, "Father, forgive them, for they do not know what they are ____."', correctAnswer:'doing', explanation:'Luke 23:34 — "what they are doing."', scriptureReference:'Luke 23:34' },
    { id:'loj7-q4', type:'multiple_choice', question:'What did the centurion say at the cross?', options:['He is guilty',' Surely this was the Son of God',' I don\'t care',' He is a prophet'], correctAnswer:' Surely this was the Son of God', explanation:'Mark 15:39 — the centurion confessed Jesus as God\'s Son.', scriptureReference:'Mark 15:39' },
    { id:'loj7-q5', type:'scenario', question:'Someone asks why the cross matters. You say:', options:[' It is just history',' Jesus paid for our sins so we can be forgiven',' It was unfair',' It ended His teaching'], correctAnswer:' Jesus paid for our sins so we can be forgiven', explanation:'The cross is the heart of the gospel (Romans 5:8).', scriptureReference:'Romans 5:8' },
  ], 'Jesus died on the cross for our sins, opening the way to God.', ['1 Peter 3:18','Romans 5:8','Luke 23']),

  L('loj-8','life-of-jesus','loj-u8','The Resurrection','Jesus rose from the dead, conquering sin and death.', ['Know the resurrection account','Understand its significance','See hope for believers'], 5, [
    { id:'loj8-q1', type:'multiple_choice', question:'On which day did Jesus rise?', options:['Friday',' Saturday',' Sunday (third day)',' Monday'], correctAnswer:' Sunday (third day)', explanation:'Jesus rose on the third day (Luke 24:1-7).', scriptureReference:'Luke 24:1-7' },
    { id:'loj8-q2', type:'true_false', question:'Women were the first to discover the empty tomb.', options:['True','False'], correctAnswer:'True', explanation:'Women found the empty tomb (Luke 24:1-3).', scriptureReference:'Luke 24:1-3' },
    { id:'loj8-q3', type:'fill_blank', question:'The angel said, "He is not here; he has ____!" (Luke 24:6)', blankSentence:'The angel said, "He is not here; he has ____!"', correctAnswer:'risen', explanation:'Luke 24:6 — He has risen.', scriptureReference:'Luke 24:6' },
    { id:'loj8-q4', type:'multiple_choice', question:'Why is the resurrection important?', options:[' It proves Jesus is Lord and gives hope',' It is just a story',' It ended suffering',' It started a religion'], correctAnswer:' It proves Jesus is Lord and gives hope', explanation:'1 Corinthians 15:17 — if Christ is not raised, faith is futile.', scriptureReference:'1 Corinthians 15:17' },
    { id:'loj8-q5', type:'scenario', question:'A friend doubts the resurrection. You share:', options:[' It is a myth',' The tomb was empty and Jesus appeared to many',' It doesn\'t matter',' We just have faith'], correctAnswer:' The tomb was empty and Jesus appeared to many', explanation:'Jesus appeared to over 500 people (1 Cor 15:6).', scriptureReference:'1 Corinthians 15:3-8' },
  ], 'Jesus rose from the dead, proving He is Lord and giving us hope.', ['Luke 24','1 Corinthians 15:3-8']),

  L('loj-9','life-of-jesus','loj-u9','The Great Commission','Jesus commanded His followers to make disciples of all nations.', ['Know the Great Commission','Understand disciple-making','Apply the mission'], 5, [
    { id:'loj9-q1', type:'fill_blank', question:'Jesus said, "Go and make ____ of all nations." (Matthew 28:19)', blankSentence:'Jesus said, "Go and make ____ of all nations."', correctAnswer:'disciples', explanation:'Matthew 28:19 — make disciples.', scriptureReference:'Matthew 28:19' },
    { id:'loj9-q2', type:'multiple_choice', question:'Jesus promised to be with us:', options:[' Only in church',' Always, to the very end of the age',' Only when we pray',' Only on Sundays'], correctAnswer:' Always, to the very end of the age', explanation:'Matthew 28:20 — I am with you always.', scriptureReference:'Matthew 28:20' },
    { id:'loj9-q3', type:'true_false', question:'The Great Commission includes baptizing new believers.', options:['True','False'], correctAnswer:'True', explanation:'Matthew 28:19 — baptizing them.', scriptureReference:'Matthew 28:19' },
    { id:'loj9-q4', type:'multiple_choice', question:'"Teaching them to obey everything I have commanded" is part of:', options:['The Beatitudes',' The Great Commission',' The Lord\'s Prayer',' The Ten Commandments'], correctAnswer:' The Great Commission', explanation:'Matthew 28:20 — teaching obedience.', scriptureReference:'Matthew 28:20' },
    { id:'loj9-q5', type:'scenario', question:'How can you live out the Great Commission today?', options:[' Ignore it',' Share the gospel and make disciples',' Only pastors do that',' Wait for a calling'], correctAnswer:' Share the gospel and make disciples', explanation:'Every believer is called to witness (Acts 1:8).', scriptureReference:'Acts 1:8' },
  ], 'The Great Commission calls every believer to make disciples.', ['Matthew 28:18-20']),

  // === PEOPLE OF THE BIBLE ===
  L('pob-1','people-of-bible','pob-u1','Adam and Eve','God created Adam and Eve in His image and placed them in Eden.', ['Know creation of humanity','Understand the fall','See God\'s plan'], 5, [
    { id:'pob1-q1', type:'multiple_choice', question:'Who were the first humans?', options:['Noah and Eve',' Adam and Eve',' Abraham and Sarah',' Moses and Miriam'], correctAnswer:' Adam and Eve', explanation:'Genesis 1-2 — God created Adam and Eve.', scriptureReference:'Genesis 1:27' },
    { id:'pob1-q2', type:'true_false', question:'God created humans in His own image.', options:['True','False'], correctAnswer:'True', explanation:'Genesis 1:27 — in His image He created them.', scriptureReference:'Genesis 1:27' },
    { id:'pob1-q3', type:'fill_blank', question:'God placed Adam and Eve in the Garden of ____.', blankSentence:'God placed Adam and Eve in the Garden of ____.', correctAnswer:'Eden', explanation:'Genesis 2:8 — the Garden of Eden.', scriptureReference:'Genesis 2:8' },
    { id:'pob1-q4', type:'multiple_choice', question:'What did the serpent tempt Eve to do?', options:[' Eat from the tree of life',' Eat from the forbidden tree',' Leave Eden',' Pray'], correctAnswer:' Eat from the forbidden tree', explanation:'Genesis 3:1-6 — eating the forbidden fruit.', scriptureReference:'Genesis 3:6' },
    { id:'pob1-q5', type:'scenario', question:'The fall shows us:', options:[' Humans are perfect',' Sin separates us from God, but God promises redemption',' God abandoned us',' The story is over'], correctAnswer:' Sin separates us from God, but God promises redemption', explanation:'Genesis 3:15 — the first promise of a Savior.', scriptureReference:'Genesis 3:15' },
  ], 'Adam and Eve\'s story shows our need for a Savior.', ['Genesis 1-3']),

  L('pob-2','people-of-bible','pob-u2','Noah','Noah found favor with God and built the ark, saving his family.', ['Know Noah\'s story','Understand the flood','See faith and obedience'], 5, [
    { id:'pob2-q1', type:'multiple_choice', question:'Why did God send the flood?', options:['To punish Noah',' Because of human wickedness',' To water the earth',' By accident'], correctAnswer:' Because of human wickedness', explanation:'Genesis 6:5-7 — the earth was filled with violence.', scriptureReference:'Genesis 6:5' },
    { id:'pob2-q2', type:'true_false', question:'Noah built the ark as God commanded.', options:['True','False'], correctAnswer:'True', explanation:'Genesis 6:22 — Noah did all God commanded.', scriptureReference:'Genesis 6:22' },
    { id:'pob2-q3', type:'fill_blank', question:'God made a covenant with Noah, signified by a ____.', blankSentence:'God made a covenant with Noah, signified by a ____.', correctAnswer:'rainbow', explanation:'Genesis 9:13 — the rainbow is the sign.', scriptureReference:'Genesis 9:13' },
    { id:'pob2-q4', type:'multiple_choice', question:'How many people were saved in the ark?', options:['2','7','8','12'], correctAnswer:'8', explanation:'1 Peter 3:20 — eight people.', scriptureReference:'1 Peter 3:20' },
    { id:'pob2-q5', type:'scenario', question:'Noah\'s obedience teaches us to:', options:[' Ignore God',' Trust and obey God even when it seems strange',' Build boats',' Fear floods'], correctAnswer:' Trust and obey God even when it seems strange', explanation:'Hebrews 11:7 — Noah acted in faith.', scriptureReference:'Hebrews 11:7' },
  ], 'Noah\'s faith and obedience saved his family; God\'s covenant endures.', ['Genesis 6-9']),

  L('pob-3','people-of-bible','pob-u3','Abraham','Abraham trusted God\'s promise and became the father of faith.', ['Know Abraham\'s call','Understand faith','See God\'s promise'], 5, [
    { id:'pob3-q1', type:'multiple_choice', question:'God called Abraham to leave:', options:['Egypt',' Ur of the Chaldeans',' Babylon',' Canaan'], correctAnswer:' Ur of the Chaldeans', explanation:'Genesis 12:1 — leave your country.', scriptureReference:'Genesis 12:1' },
    { id:'pob3-q2', type:'true_false', question:'Abraham is called the father of faith.', options:['True','False'], correctAnswer:'True', explanation:'Romans 4:16 — father of all who believe.', scriptureReference:'Romans 4:16' },
    { id:'pob3-q3', type:'fill_blank', question:'God promised Abraham descendants as numerous as the ____.', blankSentence:'God promised Abraham descendants as numerous as the ____.', correctAnswer:'stars', explanation:'Genesis 15:5 — as many as the stars.', scriptureReference:'Genesis 15:5' },
    { id:'pob3-q4', type:'multiple_choice', question:'Abraham was willing to sacrifice:', options:['Isaac',' Ishmael',' Jacob',' Joseph'], correctAnswer:'Isaac', explanation:'Genesis 22 — Abraham offered Isaac.', scriptureReference:'Genesis 22:2' },
    { id:'pob3-q5', type:'scenario', question:'Abraham\'s faith teaches us to:', options:[' Trust God\'s promises even when unseen',' Rely on ourselves',' Fear the future',' Demand signs'], correctAnswer:' Trust God\'s promises even when unseen', explanation:'Hebrews 11:8-10 — by faith Abraham obeyed.', scriptureReference:'Hebrews 11:8' },
  ], 'Abraham trusted God\'s promise; faith is credited as righteousness.', ['Genesis 12-22','Romans 4']),

  L('pob-4','people-of-bible','pob-u4','Joseph','Joseph rose from betrayal to become Egypt\'s ruler, forgiving his brothers.', ['Know Joseph\'s story','See God\'s providence','Learn forgiveness'], 5, [
    { id:'pob4-q1', type:'multiple_choice', question:'Joseph\'s brothers sold him to:', options:['Egyptians',' Midianite traders',' Romans',' Philistines'], correctAnswer:' Midianite traders', explanation:'Genesis 37:28 — sold to Midianite traders.', scriptureReference:'Genesis 37:28' },
    { id:'pob4-q2', type:'true_false', question:'Joseph interpreted Pharaoh\'s dreams.', options:['True','False'], correctAnswer:'True', explanation:'Genesis 41 — Joseph interpreted dreams.', scriptureReference:'Genesis 41:25' },
    { id:'pob4-q3', type:'fill_blank', question:'Joseph told his brothers, "You intended to harm me, but God intended it for ____." (Gen 50:20)', blankSentence:'Joseph told his brothers, "You intended to harm me, but God intended it for ____."', correctAnswer:'good', explanation:'Genesis 50:20 — God intended it for good.', scriptureReference:'Genesis 50:20' },
    { id:'pob4-q4', type:'multiple_choice', question:'Joseph forgave his brothers because:', options:[' He forgot what they did',' He saw God\'s hand in his suffering',' He was weak',' He had to'], correctAnswer:' He saw God\'s hand in his suffering', explanation:'Genesis 50:20 — God used it for good.' },
    { id:'pob4-q5', type:'scenario', question:'When wronged, Joseph\'s example teaches us to:', options:[' Seek revenge',' Trust God and forgive',' Hold a grudge',' Ignore it'], correctAnswer:' Trust God and forgive', explanation:'Forgiveness reflects God\'s grace (Ephesians 4:32).', scriptureReference:'Ephesians 4:32' },
  ], 'God used Joseph\'s suffering for good; forgiveness brings healing.', ['Genesis 37-50']),

  L('pob-5','people-of-bible','pob-u5','Moses','Moses led Israel out of Egypt and received God\'s law.', ['Know Moses\' calling','Understand the Exodus','See the law'], 5, [
    { id:'pob5-q1', type:'multiple_choice', question:'God called Moses from:', options:['A palace',' A burning bush',' A temple',' A mountain'], correctAnswer:' A burning bush', explanation:'Exodus 3:2 — the burning bush.', scriptureReference:'Exodus 3:2' },
    { id:'pob5-q2', type:'true_false', question:'Moses parted the Red Sea.', options:['True','False'], correctAnswer:'True', explanation:'Exodus 14:21 — Moses stretched out his hand.', scriptureReference:'Exodus 14:21' },
    { id:'pob5-q3', type:'fill_blank', question:'God gave Moses the ____ Commandments on Mount Sinai.', blankSentence:'God gave Moses the ____ Commandments on Mount Sinai.', correctAnswer:'Ten', explanation:'Exodus 20 — the Ten Commandments.', scriptureReference:'Exodus 20:1-17' },
    { id:'pob5-q4', type:'multiple_choice', question:'Moses was a:', options:['King',' Prophet and leader',' Priest only',' Judge'], correctAnswer:' Prophet and leader', explanation:'Moses led Israel and spoke for God (Deuteronomy 34:10).', scriptureReference:'Deuteronomy 34:10' },
    { id:'pob5-q5', type:'scenario', question:'Moses felt inadequate to lead. God\'s response teaches:', options:[' God uses the weak and equips them',' Only the strong lead',' Moses was wrong',' Leadership is easy'], correctAnswer:' God uses the weak and equips them', explanation:'God\'s power is made perfect in weakness (2 Cor 12:9).', scriptureReference:'2 Corinthians 12:9' },
  ], 'Moses led Israel to freedom and received God\'s law.', ['Exodus 3-20','Deuteronomy 34']),

  L('pob-6','people-of-bible','pob-u6','David','David was a shepherd boy who became king, a man after God\'s heart.', ['Know David\'s rise','Understand his heart for God','See his legacy'], 5, [
    { id:'pob6-q1', type:'multiple_choice', question:'David defeated Goliath with:', options:['A sword',' A sling and a stone',' A bow',' A spear'], correctAnswer:' A sling and a stone', explanation:'1 Samuel 17:49 — David slew Goliath with a sling.', scriptureReference:'1 Samuel 17:49' },
    { id:'pob6-q2', type:'true_false', question:'David wrote many of the Psalms.', options:['True','False'], correctAnswer:'True', explanation:'David is attributed with many Psalms.' },
    { id:'pob6-q3', type:'fill_blank', question:'God said David was "a man after my own ____." (Acts 13:22)', blankSentence:'God said David was "a man after my own ____."', correctAnswer:'heart', explanation:'Acts 13:22 — a man after God\'s heart.', scriptureReference:'Acts 13:22' },
    { id:'pob6-q4', type:'multiple_choice', question:'David became king of:', options:['Egypt',' Israel',' Babylon',' Rome'], correctAnswer:' Israel', explanation:'David was anointed king of Israel (2 Samuel 5).', scriptureReference:'2 Samuel 5:3' },
    { id:'pob6-q5', type:'scenario', question:'David sinned but repented. His story shows:', options:[' Sin doesn\'t matter',' God forgives the repentant',' Only kings sin',' Repentance is optional'], correctAnswer:' God forgives the repentant', explanation:'Psalm 51 — David\'s prayer of repentance.', scriptureReference:'Psalm 51:10' },
  ], 'David\'s heart for God and repentance mark him as a model king.', ['1 Samuel 17','2 Samuel 5','Psalm 51']),

  L('pob-7','people-of-bible','pob-u7','Esther','Esther risked her life to save her people.', ['Know Esther\'s courage','Understand providence','See God\'s timing'], 5, [
    { id:'pob7-q1', type:'multiple_choice', question:'Esther was a:', options:['Prophet',' Queen of Persia',' Priest',' Judge'], correctAnswer:' Queen of Persia', explanation:'Esther became queen of Persia (Esther 2).', scriptureReference:'Esther 2:17' },
    { id:'pob7-q2', type:'true_false', question:'Esther\'s cousin Mordecai raised her.', options:['True','False'], correctAnswer:'True', explanation:'Esther 2:7 — Mordecai raised Esther.', scriptureReference:'Esther 2:7' },
    { id:'pob7-q3', type:'fill_blank', question:'Mordecai said, "Perhaps you have come to your royal position for such a ____ as this." (Esther 4:14)', blankSentence:'Mordecai said, "Perhaps you have come to your royal position for such a ____ as this."', correctAnswer:'time', explanation:'Esther 4:14 — for such a time as this.', scriptureReference:'Esther 4:14' },
    { id:'pob7-q4', type:'multiple_choice', question:'Esther saved the Jews by:', options:[' Fighting',' Appealing to the king',' Fleeing',' Praying only'], correctAnswer:' Appealing to the king', explanation:'Esther 5-7 — she appealed to King Xerxes.', scriptureReference:'Esther 5:1-2' },
    { id:'pob7-q5', type:'scenario', question:'Esther\'s courage teaches us to:', options:[' Avoid risk',' Stand for what is right, trusting God',' Act only when safe',' Wait for others'], correctAnswer:' Stand for what is right, trusting God', explanation:'Courage and faith in God\'s providence.' },
  ], 'Esther\'s courage and God\'s providence saved His people.', ['Esther 4-7']),

  L('pob-8','people-of-bible','pob-u8','Daniel','Daniel remained faithful to God in exile.', ['Know Daniel\'s faith','Understand the lions\' den','See God\'s deliverance'], 5, [
    { id:'pob8-q1', type:'multiple_choice', question:'Daniel was taken captive to:', options:['Egypt',' Babylon',' Rome',' Persia'], correctAnswer:' Babylon', explanation:'Daniel 1:1-6 — taken to Babylon.', scriptureReference:'Daniel 1:6' },
    { id:'pob8-q2', type:'true_false', question:'Daniel refused to stop praying to God.', options:['True','False'], correctAnswer:'True', explanation:'Daniel 6:10 — he prayed three times a day.', scriptureReference:'Daniel 6:10' },
    { id:'pob8-q3', type:'fill_blank', question:'Daniel was thrown into a den of ____.', blankSentence:'Daniel was thrown into a den of ____.', correctAnswer:'lions', explanation:'Daniel 6:16 — the lions\' den.', scriptureReference:'Daniel 6:16' },
    { id:'pob8-q4', type:'multiple_choice', question:'God saved Daniel by:', options:[' Killing the lions',' Shutting the lions\' mouths',' Sending an angel',' Helping him escape'], correctAnswer:' Shutting the lions\' mouths', explanation:'Daniel 6:22 — God shut the lions\' mouths.', scriptureReference:'Daniel 6:22' },
    { id:'pob8-q5', type:'scenario', question:'Daniel\'s example teaches us to:', options:[' Compromise when pressured',' Stay faithful to God always',' Hide our faith',' Fear rulers'], correctAnswer:' Stay faithful to God always', explanation:'Faithfulness to God above all (Daniel 3:17-18).', scriptureReference:'Daniel 3:17-18' },
  ], 'Daniel stayed faithful to God and God delivered him.', ['Daniel 1-6']),

  L('pob-9','people-of-bible','pob-u9','Mary','Mary, the mother of Jesus, trusted God\'s plan.', ['Know Mary\'s faith','Understand the annunciation','See her example'], 5, [
    { id:'pob9-q1', type:'multiple_choice', question:'The angel Gabriel announced Jesus\' birth to:', options:['Elizabeth',' Mary',' Anna',' Martha'], correctAnswer:' Mary', explanation:'Luke 1:26-31 — Gabriel to Mary.', scriptureReference:'Luke 1:26-31' },
    { id:'pob9-q2', type:'true_false', question:'Mary said, "I am the Lord\'s servant. May your word to me be fulfilled."', options:['True','False'], correctAnswer:'True', explanation:'Luke 1:38 — Mary\'s humble response.', scriptureReference:'Luke 1:38' },
    { id:'pob9-q3', type:'fill_blank', question:'Mary sang a song of praise called the ____.', blankSentence:'Mary sang a song of praise called the ____.', correctAnswer:'Magnificat', explanation:'Luke 1:46-55 — the Magnificat.' },
    { id:'pob9-q4', type:'multiple_choice', question:'Mary\'s faith shows:', options:[' Doubt',' Trust in God\'s word',' Pride',' Fear'], correctAnswer:' Trust in God\'s word', explanation:'Mary trusted God\'s promise (Luke 1:45).', scriptureReference:'Luke 1:45' },
    { id:'pob9-q5', type:'scenario', question:'When God calls you to something hard, Mary\'s example teaches:', options:[' Refuse',' Trust and obey God',' Ask for signs first',' Wait for others'], correctAnswer:' Trust and obey God', explanation:'Mary\'s willing obedience (Luke 1:38).', scriptureReference:'Luke 1:38' },
  ], 'Mary trusted God\'s plan and became the mother of Jesus.', ['Luke 1:26-56']),

  L('pob-10','people-of-bible','pob-u10','Peter','Peter was a bold disciple who became a pillar of the early church.', ['Know Peter\'s story','Understand his denial and restoration','See his leadership'], 5, [
    { id:'pob10-q1', type:'multiple_choice', question:'Peter\'s original name was:', options:['Simon',' Andrew',' James',' John'], correctAnswer:'Simon', explanation:'John 1:42 — Simon, called Peter.', scriptureReference:'John 1:42' },
    { id:'pob10-q2', type:'true_false', question:'Peter denied Jesus three times.', options:['True','False'], correctAnswer:'True', explanation:'Luke 22:54-62 — Peter denied Jesus three times.', scriptureReference:'Luke 22:61' },
    { id:'pob10-q3', type:'fill_blank', question:'Jesus told Peter, "Feed my ____." (John 21:17)', blankSentence:'Jesus told Peter, "Feed my ____."', correctAnswer:'sheep', explanation:'John 21:17 — feed my sheep.', scriptureReference:'John 21:17' },
    { id:'pob10-q4', type:'multiple_choice', question:'Peter preached at Pentecost and ____ people were saved.', options:[' 500',' 1,000',' 3,000',' 5,000'], correctAnswer:' 3,000', explanation:'Acts 2:41 — about 3,000 added.', scriptureReference:'Acts 2:41' },
    { id:'pob10-q5', type:'scenario', question:'Peter failed but was restored. This teaches:', options:[' Failure is final',' God restores those who repent',' Only perfect people serve',' Peter was special'], correctAnswer:' God restores those who repent', explanation:'Jesus restored Peter (John 21:15-19).', scriptureReference:'John 21:15-19' },
  ], 'Peter was restored by Jesus and led the early church.', ['Matthew 16:18','Luke 22:54-62','Acts 2']),

  L('pob-11','people-of-bible','pob-u11','Paul','Paul, once a persecutor, became the apostle to the nations.', ['Know Paul\'s conversion','Understand his mission','See grace'], 5, [
    { id:'pob11-q1', type:'multiple_choice', question:'Paul\'s name before conversion was:', options:['Saul',' Simon',' Silas',' Stephen'], correctAnswer:'Saul', explanation:'Acts 9:1 — Saul of Tarsus.', scriptureReference:'Acts 9:1' },
    { id:'pob11-q2', type:'true_false', question:'Paul was blinded on the road to Damascus.', options:['True','False'], correctAnswer:'True', explanation:'Acts 9:3-9 — a light from heaven.', scriptureReference:'Acts 9:3' },
    { id:'pob11-q3', type:'fill_blank', question:'Paul said, "I am not ashamed of the gospel, because it is the ____ of God." (Romans 1:16)', blankSentence:'Paul said, "I am not ashamed of the gospel, because it is the ____ of God."', correctAnswer:'power', explanation:'Romans 1:16 — the power of God.', scriptureReference:'Romans 1:16' },
    { id:'pob11-q4', type:'multiple_choice', question:'Paul wrote about half of the:', options:['Old Testament',' New Testament letters',' Gospels',' Psalms'], correctAnswer:' New Testament letters', explanation:'Paul wrote many New Testament epistles.' },
    { id:'pob11-q5', type:'scenario', question:'Paul\'s transformation shows:', options:[' People can\'t change',' God\'s grace can transform anyone',' Only good people are saved',' Effort saves us'], correctAnswer:' God\'s grace can transform anyone', explanation:'1 Timothy 1:15-16 — grace shown to Paul.', scriptureReference:'1 Timothy 1:15' },
  ], 'Paul\'s life shows the transforming power of God\'s grace.', ['Acts 9','Romans 1:16','1 Timothy 1:15']),

  // === CHRISTIAN LIVING ===
  L('cl-1','christian-living','cl-u1','Faith and Trust','Faith is trusting God even when we cannot see.', ['Define faith','Trust God in uncertainty','Grow in faith'], 5, [
    { id:'cl1-q1', type:'multiple_choice', question:'Hebrews 11:1 defines faith as:', options:[' Seeing is believing',' Confidence in what we hope for and assurance about what we do not see',' A feeling',' A rule'], correctAnswer:' Confidence in what we hope for and assurance about what we do not see', explanation:'Hebrews 11:1 — faith defined.', scriptureReference:'Hebrews 11:1' },
    { id:'cl1-q2', type:'true_false', question:'Faith comes by hearing the message of Christ.', options:['True','False'], correctAnswer:'True', explanation:'Romans 10:17 — faith comes from hearing.', scriptureReference:'Romans 10:17' },
    { id:'cl1-q3', type:'fill_blank', question:'"Trust in the LORD with all your heart and lean not on your own ____." (Proverbs 3:5)', blankSentence:'"Trust in the LORD with all your heart and lean not on your own ____."', correctAnswer:'understanding', explanation:'Proverbs 3:5 — lean not on your own understanding.', scriptureReference:'Proverbs 3:5' },
    { id:'cl1-q4', type:'scenario', question:'When facing uncertainty, a Christian should:', options:[' Panic',' Trust God and pray',' Give up',' Rely only on self'], correctAnswer:' Trust God and pray', explanation:'Philippians 4:6-7 — pray with thanksgiving.', scriptureReference:'Philippians 4:6-7' },
    { id:'cl1-q5', type:'multiple_choice', question:'Faith grows through:', options:[' Worry',' Reading Scripture and prayer',' Ignoring problems',' Entertainment'], correctAnswer:' Reading Scripture and prayer', explanation:'Romans 10:17; Jude 1:20.' },
  ], 'Faith trusts God and grows through His Word.', ['Hebrews 11:1','Proverbs 3:5-6']),

  L('cl-2','christian-living','cl-u2','Love and Compassion','Jesus commands us to love God and love our neighbor.', ['Know the love command','Show compassion','Love in action'], 5, [
    { id:'cl2-q1', type:'multiple_choice', question:'Jesus said the second greatest commandment is:', options:[' Love your enemy',' Love your neighbor as yourself',' Honor parents',' Keep Sabbath'], correctAnswer:' Love your neighbor as yourself', explanation:'Matthew 22:39 — love your neighbor.', scriptureReference:'Matthew 22:39' },
    { id:'cl2-q2', type:'true_false', question:'1 Corinthians 13 says love is patient and kind.', options:['True','False'], correctAnswer:'True', explanation:'1 Corinthians 13:4 — love is patient, love is kind.', scriptureReference:'1 Corinthians 13:4' },
    { id:'cl2-q3', type:'fill_blank', question:'"God is ____, and whoever lives in love lives in God." (1 John 4:16)', blankSentence:'"God is ____, and whoever lives in love lives in God."', correctAnswer:'love', explanation:'1 John 4:16 — God is love.', scriptureReference:'1 John 4:16' },
    { id:'cl2-q4', type:'scenario', question:'A neighbor is hurting. The Christ-like response is:', options:[' Ignore them',' Show compassion and help',' Gossip',' Judge them'], correctAnswer:' Show compassion and help', explanation:'Luke 10:33-34 — the Samaritan helped.', scriptureReference:'Luke 10:33-34' },
    { id:'cl2-q5', type:'multiple_choice', question:'Love is best shown through:', options:[' Words only',' Actions and sacrifice',' Feelings',' Gifts'], correctAnswer:' Actions and sacrifice', explanation:'1 John 3:18 — love in action and truth.', scriptureReference:'1 John 3:18' },
  ], 'Love God and love others through compassionate action.', ['Matthew 22:37-39','1 Corinthians 13','1 John 4:16']),

  L('cl-3','christian-living','cl-u3','Forgiveness','Forgive others as God in Christ forgave you.', ['Understand forgiveness','Forgive others','Receive God\'s forgiveness'], 5, [
    { id:'cl3-q1', type:'multiple_choice', question:'Jesus taught us to forgive:', options:[' Once',' Seven times',' Seventy-seven times (without limit)',' Never'], correctAnswer:' Seventy-seven times (without limit)', explanation:'Matthew 18:22 — forgive without limit.', scriptureReference:'Matthew 18:22' },
    { id:'cl3-q2', type:'true_false', question:'We forgive because God forgave us.', options:['True','False'], correctAnswer:'True', explanation:'Ephesians 4:32 — forgive as God forgave you.', scriptureReference:'Ephesians 4:32' },
    { id:'cl3-q3', type:'fill_blank', question:'"Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave ____." (Eph 4:32)', blankSentence:'"Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave ____."', correctAnswer:'you', explanation:'Ephesians 4:32 — forgave you.', scriptureReference:'Ephesians 4:32' },
    { id:'cl3-q4', type:'scenario', question:'Someone wrongs you deeply. Forgiveness means:', options:[' Forgetting it happened',' Releasing resentment and seeking reconciliation when possible',' Ignoring it',' Getting even'], correctAnswer:' Releasing resentment and seeking reconciliation when possible', explanation:'Forgiveness frees the heart (Colossians 3:13).', scriptureReference:'Colossians 3:13' },
    { id:'cl3-q5', type:'multiple_choice', question:'Forgiveness is:', options:[' A feeling',' A choice and obedience',' Weakness',' Optional'], correctAnswer:' A choice and obedience', explanation:'We choose to forgive in obedience to Christ.' },
  ], 'Forgive as Christ forgave you — it frees your heart.', ['Matthew 18:21-22','Ephesians 4:32','Colossians 3:13']),

  L('cl-4','christian-living','cl-u4','Prayer','Prayer is talking with God — praise, confession, thanks, and requests.', ['Understand prayer','Pray with confidence','Build a habit'], 5, [
    { id:'cl4-q1', type:'multiple_choice', question:'The Lord\'s Prayer begins with:', options:[' Give us bread',' Our Father in heaven',' Forgive us',' Lead us not'], correctAnswer:' Our Father in heaven', explanation:'Matthew 6:9 — Our Father in heaven.', scriptureReference:'Matthew 6:9' },
    { id:'cl4-q2', type:'true_false', question:'We should pray without ceasing.', options:['True','False'], correctAnswer:'True', explanation:'1 Thessalonians 5:17 — pray continually.', scriptureReference:'1 Thessalonians 5:17' },
    { id:'cl4-q3', type:'fill_blank', question:'"Do not be anxious about anything, but in every situation, by prayer and petition, with ____ , present your requests to God." (Phil 4:6)', blankSentence:'"Do not be anxious about anything, but in every situation, by prayer and petition, with ____ , present your requests to God."', correctAnswer:'thanksgiving', explanation:'Philippians 4:6 — with thanksgiving.', scriptureReference:'Philippians 4:6' },
    { id:'cl4-q4', type:'scenario', question:'When you don\'t know what to pray, you can:', options:[' Stop praying',' Pray Scripture or simply talk to God',' Wait for feelings',' Copy others'], correctAnswer:' Pray Scripture or simply talk to God', explanation:'Romans 8:26 — the Spirit helps us pray.' },
    { id:'cl4-q5', type:'multiple_choice', question:'Prayer is:', options:[' A ritual',' Conversation with God',' Magic',' Optional'], correctAnswer:' Conversation with God', explanation:'Prayer is talking with our Father.' },
  ], 'Prayer is conversation with God; pray continually with thanksgiving.', ['Matthew 6:9-13','Philippians 4:6-7','1 Thessalonians 5:17']),

  L('cl-5','christian-living','cl-u5','Handling Difficulties','God is with us in trials and works all things for good.', ['Trust God in trials','Find hope','See God\'s purpose'], 5, [
    { id:'cl5-q1', type:'multiple_choice', question:'Romans 8:28 says God works all things:', options:[' For the worst',' For the good of those who love Him',' By chance',' For the strong'], correctAnswer:' For the good of those who love Him', explanation:'Romans 8:28 — all things work for good.', scriptureReference:'Romans 8:28' },
    { id:'cl5-q2', type:'true_false', question:'James says to consider trials as pure joy.', options:['True','False'], correctAnswer:'True', explanation:'James 1:2 — consider it pure joy.', scriptureReference:'James 1:2' },
    { id:'cl5-q3', type:'fill_blank', question:'"The LORD is close to the ____-hearted and saves those who are crushed in spirit." (Psalm 34:18)', blankSentence:'"The LORD is close to the ____-hearted and saves those who are crushed in spirit."', correctAnswer:'broken', explanation:'Psalm 34:18 — close to the brokenhearted.', scriptureReference:'Psalm 34:18' },
    { id:'cl5-q4', type:'scenario', question:'When suffering, a Christian remembers:', options:[' God abandoned them',' God is near and works for good',' It is punishment',' Nothing matters'], correctAnswer:' God is near and works for good', explanation:'Psalm 34:18; Romans 8:28.' },
    { id:'cl5-q5', type:'multiple_choice', question:'Hope in Christ is:', options:[' Wishful thinking',' Sure and certain',' Uncertain',' Temporary'], correctAnswer:' Sure and certain', explanation:'Hebrews 6:19 — hope as an anchor.' },
  ], 'God is near in trials and works all things for good.', ['Romans 8:28','James 1:2-4','Psalm 34:18']),

  L('cl-6','christian-living','cl-u6','Serving Others','Jesus came to serve; we follow His example.', ['Understand servanthood','Serve humbly','Love in action'], 5, [
    { id:'cl6-q1', type:'multiple_choice', question:'Jesus said the greatest among you must be:', options:[' The richest',' The servant of all',' The loudest',' The smartest'], correctAnswer:' The servant of all', explanation:'Mark 10:44 — servant of all.', scriptureReference:'Mark 10:44' },
    { id:'cl6-q2', type:'true_false', question:'Jesus washed His disciples\' feet.', options:['True','False'], correctAnswer:'True', explanation:'John 13:5 — Jesus washed their feet.', scriptureReference:'John 13:5' },
    { id:'cl6-q3', type:'fill_blank', question:'"Serve one another ____ in love." (Galatians 5:13)', blankSentence:'"Serve one another ____ in love."', correctAnswer:'humbly', explanation:'Galatians 5:13 — serve humbly in love.', scriptureReference:'Galatians 5:13' },
    { id:'cl6-q4', type:'scenario', question:'A church needs volunteers. You:', options:[' Wait for others',' Serve willingly where needed',' Complain',' Quit'], correctAnswer:' Serve willingly where needed', explanation:'1 Peter 4:10 — use your gifts to serve.', scriptureReference:'1 Peter 4:10' },
    { id:'cl6-q5', type:'multiple_choice', question:'Serving others reflects:', options:[' Weakness',' Christ\'s love and humility',' Duty only',' Pride'], correctAnswer:' Christ\'s love and humility', explanation:'Philippians 2:5-8 — Jesus humbled Himself.', scriptureReference:'Philippians 2:5-8' },
  ], 'Serve others humbly, following Jesus\' example.', ['Mark 10:42-45','John 13:1-17','Galatians 5:13']),

  // === OLD TESTAMENT JOURNEY ===
  L('otj-1','old-testament-journey','otj-u1','Creation','God created the heavens and the earth and everything in them.', ['Know the creation account','See God as Creator','Understand humanity\'s role'], 5, [
    { id:'otj1-q1', type:'multiple_choice', question:'"In the beginning God created the ____ and the earth." (Gen 1:1)', options:['heavens',' seas',' animals',' people'], correctAnswer:'heavens', explanation:'Genesis 1:1 — heavens and earth.', scriptureReference:'Genesis 1:1' },
    { id:'otj1-q2', type:'true_false', question:'God created humans in His image.', options:['True','False'], correctAnswer:'True', explanation:'Genesis 1:27.', scriptureReference:'Genesis 1:27' },
    { id:'otj1-q3', type:'fill_blank', question:'On the seventh day God ____ from all His work.', blankSentence:'On the seventh day God ____ from all His work.', correctAnswer:'rested', explanation:'Genesis 2:2 — God rested.', scriptureReference:'Genesis 2:2' },
    { id:'otj1-q4', type:'multiple_choice', question:'God saw that creation was:', options:[' Bad',' Good',' Incomplete',' Boring'], correctAnswer:' Good', explanation:'Genesis 1:31 — very good.', scriptureReference:'Genesis 1:31' },
    { id:'otj1-q5', type:'scenario', question:'Knowing God is Creator means:', options:[' We are random',' We have purpose and value',' Nature is God',' Nothing matters'], correctAnswer:' We have purpose and value', explanation:'Psalm 139:14 — fearfully and wonderfully made.', scriptureReference:'Psalm 139:14' },
  ], 'God created all things and made humans in His image.', ['Genesis 1-2']),

  L('otj-2','old-testament-journey','otj-u2','The Fall','Sin entered the world through Adam and Eve\'s disobedience.', ['Understand the fall','See consequences of sin','Know God\'s promise'], 5, [
    { id:'otj2-q1', type:'multiple_choice', question:'The serpent tempted Eve to eat from:', options:[' Tree of life',' Tree of knowledge of good and evil',' Olive tree',' Fig tree'], correctAnswer:' Tree of knowledge of good and evil', explanation:'Genesis 2:17; 3:6.', scriptureReference:'Genesis 3:6' },
    { id:'otj2-q2', type:'true_false', question:'Adam and Eve hid from God after sinning.', options:['True','False'], correctAnswer:'True', explanation:'Genesis 3:8 — they hid.', scriptureReference:'Genesis 3:8' },
    { id:'otj2-q3', type:'fill_blank', question:'God said to the serpent, "He will crush your head, and you will strike his ____." (Gen 3:15)', blankSentence:'God said to the serpent, "He will crush your head, and you will strike his ____."', correctAnswer:'heel', explanation:'Genesis 3:15 — first promise of a Savior.', scriptureReference:'Genesis 3:15' },
    { id:'otj2-q4', type:'multiple_choice', question:'The fall resulted in:', options:[' Death and separation from God',' Nothing',' Better life',' Immortality'], correctAnswer:' Death and separation from God', explanation:'Romans 5:12 — sin entered the world.', scriptureReference:'Romans 5:12' },
    { id:'otj2-q5', type:'scenario', question:'The fall shows our need for:', options:[' More rules',' A Savior',' Self-improvement',' Nothing'], correctAnswer:' A Savior', explanation:'Romans 6:23 — the gift of God is eternal life.', scriptureReference:'Romans 6:23' },
  ], 'The fall brought sin and death, but God promised a Savior.', ['Genesis 3','Romans 5:12']),

  L('otj-3','old-testament-journey','otj-u3','The Flood','God judged the world through a flood but saved Noah.', ['Know the flood story','See God\'s judgment and mercy','Understand the covenant'], 5, [
    { id:'otj3-q1', type:'multiple_choice', question:'God told Noah to build an:', options:['Temple',' Ark',' Altar',' Tower'], correctAnswer:' Ark', explanation:'Genesis 6:14 — build an ark.', scriptureReference:'Genesis 6:14' },
    { id:'otj3-q2', type:'true_false', question:'The flood covered the whole earth.', options:['True','False'], correctAnswer:'True', explanation:'Genesis 7:19 — all the high mountains covered.', scriptureReference:'Genesis 7:19' },
    { id:'otj3-q3', type:'fill_blank', question:'After the flood, God set a ____ in the sky as a sign.', blankSentence:'After the flood, God set a ____ in the sky as a sign.', correctAnswer:'rainbow', explanation:'Genesis 9:13 — rainbow.', scriptureReference:'Genesis 9:13' },
    { id:'otj3-q4', type:'multiple_choice', question:'The flood teaches that God:', options:[' Doesn\'t care',' Judges sin but saves the faithful',' Is weak',' Forgets'], correctAnswer:' Judges sin but saves the faithful', explanation:'2 Peter 2:5 — God saved Noah.', scriptureReference:'2 Peter 2:5' },
    { id:'otj3-q5', type:'scenario', question:'God\'s mercy to Noah reminds us:', options:[' We can sin freely',' God saves those who trust Him',' Judgment is unfair',' Noah was perfect'], correctAnswer:' God saves those who trust Him', explanation:'Hebrews 11:7 — by faith Noah.' },
  ], 'God judged sin through the flood but saved Noah in mercy.', ['Genesis 6-9']),

  L('otj-4','old-testament-journey','otj-u4','Abraham and God\'s Covenant','God promised Abraham land, descendants, and blessing for all nations.', ['Know the covenant','See God\'s promise','Understand blessing for all'], 5, [
    { id:'otj4-q1', type:'multiple_choice', question:'God\'s covenant with Abraham included:', options:[' Land only',' Descendants only',' Blessing all nations',' All of the above'], correctAnswer:' All of the above', explanation:'Genesis 12:1-3 — land, descendants, blessing.', scriptureReference:'Genesis 12:1-3' },
    { id:'otj4-q2', type:'true_false', question:'Through Abraham all nations would be blessed.', options:['True','False'], correctAnswer:'True', explanation:'Genesis 12:3 — all peoples blessed.', scriptureReference:'Genesis 12:3' },
    { id:'otj4-q3', type:'fill_blank', question:'God\'s covenant was sealed by ____.', blankSentence:'God\'s covenant was sealed by ____.', correctAnswer:'circumcision', explanation:'Genesis 17:10-11 — circumcision.', scriptureReference:'Genesis 17:11' },
    { id:'otj4-q4', type:'multiple_choice', question:'The covenant pointed forward to:', options:[' A nation only',' The Messiah (Jesus)',' A law only',' A temple'], correctAnswer:' The Messiah (Jesus)', explanation:'Galatians 3:16 — the promise to Abraham\'s seed, Christ.', scriptureReference:'Galatians 3:16' },
    { id:'otj4-q5', type:'scenario', question:'God\'s faithfulness to His promises means:', options:[' He might forget',' He always keeps His word',' Promises are conditional',' We must earn them'], correctAnswer:' He always keeps His word', explanation:'2 Corinthians 1:20 — all promises are "Yes" in Christ.', scriptureReference:'2 Corinthians 1:20' },
  ], 'God\'s covenant with Abraham promised blessing for all nations through Christ.', ['Genesis 12:1-3','15:5','17:1-8','Galatians 3:16']),

  L('otj-5','old-testament-journey','otj-u5','The Exodus','God delivered Israel from slavery in Egypt.', ['Know the Exodus story','See God\'s deliverance','Understand Passover'], 5, [
    { id:'otj5-q1', type:'multiple_choice', question:'God sent Moses to deliver Israel from:', options:[' Babylon',' Egypt',' Rome',' Canaan'], correctAnswer:' Egypt', explanation:'Exodus 3:10 — deliver from Egypt.', scriptureReference:'Exodus 3:10' },
    { id:'otj5-q2', type:'true_false', question:'The Passover lamb\'s blood protected Israelite homes.', options:['True','False'], correctAnswer:'True', explanation:'Exodus 12:13 — blood as a sign.', scriptureReference:'Exodus 12:13' },
    { id:'otj5-q3', type:'fill_blank', question:'God parted the ____ Sea for Israel to cross.', blankSentence:'God parted the ____ Sea for Israel to cross.', correctAnswer:'Red', explanation:'Exodus 14:21 — Red Sea.', scriptureReference:'Exodus 14:21' },
    { id:'otj5-q4', type:'multiple_choice', question:'The Exodus points forward to:', options:[' Slavery',' Jesus delivering us from sin',' A nation',' A law'], correctAnswer:' Jesus delivering us from sin', explanation:'1 Corinthians 5:7 — Christ our Passover.', scriptureReference:'1 Corinthians 5:7' },
    { id:'otj5-q5', type:'scenario', question:'God\'s deliverance of Israel reminds us:', options:[' We save ourselves',' God rescues His people',' Slavery is good',' Pharaoh was right'], correctAnswer:' God rescues His people', explanation:'Psalm 106:10 — He saved them.', scriptureReference:'Psalm 106:10' },
  ], 'God delivered Israel from Egypt; Jesus delivers us from sin.', ['Exodus 3-14']),

  L('otj-6','old-testament-journey','otj-u6','The Ten Commandments','God gave Israel His law on Mount Sinai.', ['Know the Ten Commandments','Understand their purpose','Apply to life'], 5, [
    { id:'otj6-q1', type:'multiple_choice', question:'The Ten Commandments were given on:', options:[' Mount Sinai',' Mount Zion',' Mount Carmel',' Mount of Olives'], correctAnswer:' Mount Sinai', explanation:'Exodus 19-20 — Mount Sinai.', scriptureReference:'Exodus 20:1' },
    { id:'otj6-q2', type:'true_false', question:'The first commandment is "You shall have no other gods before me."', options:['True','False'], correctAnswer:'True', explanation:'Exodus 20:3.', scriptureReference:'Exodus 20:3' },
    { id:'otj6-q3', type:'fill_blank', question:'"Honor your father and your ____." (Exodus 20:12)', blankSentence:'"Honor your father and your ____."', correctAnswer:'mother', explanation:'Exodus 20:12 — father and mother.', scriptureReference:'Exodus 20:12' },
    { id:'otj6-q4', type:'multiple_choice', question:'The law shows us:', options:[' We are perfect',' Our need for a Savior',' We don\'t need God',' Rules save us'], correctAnswer:' Our need for a Savior', explanation:'Romans 3:20 — through the law we become conscious of sin.', scriptureReference:'Romans 3:20' },
    { id:'otj6-q5', type:'scenario', question:'Jesus summarized the law as:', options:[' Obey rules only',' Love God and love neighbor',' Sacrifice animals',' Keep traditions'], correctAnswer:' Love God and love neighbor', explanation:'Matthew 22:37-39.', scriptureReference:'Matthew 22:37-39' },
  ], 'The Ten Commandments reveal God\'s will and our need for a Savior.', ['Exodus 20:1-17','Romans 3:20']),

  // === NEW TESTAMENT JOURNEY ===
  L('ntj-1','new-testament-journey','ntj-u1','The Gospels','Four witnesses tell the story of Jesus.', ['Know the four Gospels','Understand their purpose','See Jesus as center'], 5, [
    { id:'ntj1-q1', type:'multiple_choice', question:'The four Gospels are:', options:[' Genesis, Exodus, Leviticus, Numbers',' Matthew, Mark, Luke, John',' Acts, Romans, Corinthians, Galatians',' Psalms, Proverbs, Isaiah, Jeremiah'], correctAnswer:' Matthew, Mark, Luke, John', explanation:'The four Gospels tell Jesus\' story.' },
    { id:'ntj1-q2', type:'true_false', question:'Each Gospel presents Jesus from a unique perspective.', options:['True','False'], correctAnswer:'True', explanation:'Each Gospel has a distinct emphasis.' },
    { id:'ntj1-q3', type:'fill_blank', question:'John wrote his Gospel so that we may ____ that Jesus is the Christ. (John 20:31)', blankSentence:'John wrote his Gospel so that we may ____ that Jesus is the Christ.', correctAnswer:'believe', explanation:'John 20:31 — that you may believe.', scriptureReference:'John 20:31' },
    { id:'ntj1-q4', type:'multiple_choice', question:'The Gospels are part of the:', options:[' Old Testament',' New Testament',' Apocrypha',' History only'], correctAnswer:' New Testament', explanation:'The Gospels open the New Testament.' },
    { id:'ntj1-q5', type:'scenario', question:'To learn about Jesus, start with:', options:[' Leviticus',' The Gospels',' Revelation',' Psalms'], correctAnswer:' The Gospels', explanation:'The Gospels reveal Jesus.' },
  ], 'The four Gospels reveal Jesus as the Christ, Son of God.', ['John 20:31']),

  L('ntj-2','new-testament-journey','ntj-u2','Acts of the Apostles','The Holy Spirit empowers the church to spread the gospel.', ['Know the book of Acts','See the Spirit\'s work','Understand the church\'s mission'], 5, [
    { id:'ntj2-q1', type:'multiple_choice', question:'Acts is a sequel to the Gospel of:', options:['Matthew',' Mark',' Luke',' John'], correctAnswer:' Luke', explanation:'Acts is Luke\'s second volume.' },
    { id:'ntj2-q2', type:'true_false', question:'The church began at Pentecost.', options:['True','False'], correctAnswer:'True', explanation:'Acts 2 — Pentecost.', scriptureReference:'Acts 2:1-4' },
    { id:'ntj2-q3', type:'fill_blank', question:'Jesus said, "You will be my witnesses... to the ends of the ____." (Acts 1:8)', blankSentence:'Jesus said, "You will be my witnesses... to the ends of the ____."', correctAnswer:'earth', explanation:'Acts 1:8 — ends of the earth.', scriptureReference:'Acts 1:8' },
    { id:'ntj2-q4', type:'multiple_choice', question:'The early church devoted themselves to:', options:[' Politics',' The apostles\' teaching, fellowship, breaking bread, prayer',' Wealth',' Entertainment'], correctAnswer:' The apostles\' teaching, fellowship, breaking bread, prayer', explanation:'Acts 2:42.', scriptureReference:'Acts 2:42' },
    { id:'ntj2-q5', type:'scenario', question:'The book of Acts teaches us to:', options:[' Be passive',' Be witnesses for Christ',' Avoid the world',' Focus on self'], correctAnswer:' Be witnesses for Christ', explanation:'Acts 1:8.' },
  ], 'Acts shows the Spirit empowering the church to witness.', ['Acts 1:8','Acts 2:42-47']),

  L('ntj-3','new-testament-journey','ntj-u3','Paul\'s Conversion','Saul the persecutor became Paul the apostle.', ['Know Paul\'s conversion','See God\'s grace','Understand transformation'], 5, [
    { id:'ntj3-q1', type:'multiple_choice', question:'Paul was traveling to ____ to persecute Christians.', options:[' Jerusalem',' Damascus',' Rome',' Antioch'], correctAnswer:' Damascus', explanation:'Acts 9:1-2 — Damascus.', scriptureReference:'Acts 9:2' },
    { id:'ntj3-q2', type:'true_false', question:'A bright light from heaven stopped Paul.', options:['True','False'], correctAnswer:'True', explanation:'Acts 9:3.', scriptureReference:'Acts 9:3' },
    { id:'ntj3-q3', type:'fill_blank', question:'Jesus asked, "Saul, Saul, why do you ____ me?" (Acts 9:4)', blankSentence:'Jesus asked, "Saul, Saul, why do you ____ me?"', correctAnswer:'persecute', explanation:'Acts 9:4.', scriptureReference:'Acts 9:4' },
    { id:'ntj3-q4', type:'multiple_choice', question:'Ananias was sent to:', options:[' Arrest Paul',' Restore Paul\'s sight',' Kill Paul',' Ignore Paul'], correctAnswer:' Restore Paul\'s sight', explanation:'Acts 9:17-18.', scriptureReference:'Acts 9:17' },
    { id:'ntj3-q5', type:'scenario', question:'Paul\'s conversion shows:', options:[' People can\'t change',' God can transform anyone by grace',' Effort saves',' Only good people matter'], correctAnswer:' God can transform anyone by grace', explanation:'1 Timothy 1:15-16.', scriptureReference:'1 Timothy 1:15' },
  ], 'Paul\'s conversion shows God\'s transforming grace.', ['Acts 9']),

  L('ntj-4','new-testament-journey','ntj-u4','The Letters of Paul','Paul wrote letters teaching and encouraging the churches.', ['Know Paul\'s letters','Understand their themes','Apply to life'], 5, [
    { id:'ntj4-q1', type:'multiple_choice', question:'Paul\'s longest letter is:', options:[' Galatians',' Romans',' Philemon',' 1 Thessalonians'], correctAnswer:' Romans', explanation:'Romans is Paul\'s longest letter.' },
    { id:'ntj4-q2', type:'true_false', question:'Paul wrote about justification by faith in Romans.', options:['True','False'], correctAnswer:'True', explanation:'Romans 3:28 — justified by faith.' },
    { id:'ntj4-q3', type:'fill_blank', question:'"For it is by grace you have been saved, through ____, and this is not from yourselves." (Eph 2:8)', blankSentence:'"For it is by grace you have been saved, through ____, and this is not from yourselves."', correctAnswer:'faith', explanation:'Ephesians 2:8 — through faith.', scriptureReference:'Ephesians 2:8' },
    { id:'ntj4-q4', type:'multiple_choice', question:'The fruit of the Spirit includes:', options:[' Anger and jealousy',' Love, joy, peace, patience',' Pride and greed',' Fear'], correctAnswer:' Love, joy, peace, patience', explanation:'Galatians 5:22-23.', scriptureReference:'Galatians 5:22-23' },
    { id:'ntj4-q5', type:'scenario', question:'Paul\'s letters teach us to:', options:[' Ignore Scripture',' Live by grace and grow in Christ',' Rely on works',' Be proud'], correctAnswer:' Live by grace and grow in Christ', explanation:'Colossians 2:6-7.' },
  ], 'Paul\'s letters teach grace, faith, and life in Christ.', ['Romans','Ephesians','Galatians 5:22-23']),

  L('ntj-5','new-testament-journey','ntj-u5','Christian Hope','Believers look forward to Christ\'s return and eternal life.', ['Understand Christian hope','Look to Christ\'s return','Live with purpose'], 5, [
    { id:'ntj5-q1', type:'multiple_choice', question:'Jesus promised to return:', options:[' Never',' In the same way He ascended',' Secretly only',' Not literally'], correctAnswer:' In the same way He ascended', explanation:'Acts 1:11 — He will come back.', scriptureReference:'Acts 1:11' },
    { id:'ntj5-q2', type:'true_false', question:'Revelation promises a new heaven and new earth.', options:['True','False'], correctAnswer:'True', explanation:'Revelation 21:1.', scriptureReference:'Revelation 21:1' },
    { id:'ntj5-q3', type:'fill_blank', question:'"He will wipe every tear from their eyes... for the old order of things has passed ____." (Rev 21:4)', blankSentence:'"He will wipe every tear from their eyes... for the old order of things has passed ____."', correctAnswer:'away', explanation:'Revelation 21:4.', scriptureReference:'Revelation 21:4' },
    { id:'ntj5-q4', type:'multiple_choice', question:'Christian hope is:', options:[' Uncertain',' Sure because of Christ',' Wishful',' Temporary'], correctAnswer:' Sure because of Christ', explanation:'Hebrews 6:19.' },
    { id:'ntj5-q5', type:'scenario', question:'Hope in Christ should make us:', options:[' Fearful',' Live faithfully and share the gospel',' Ignore the world',' Hoard wealth'], correctAnswer:' Live faithfully and share the gospel', explanation:'1 Thessalonians 1:10; Titus 2:13.' },
  ], 'Christian hope rests on Christ\'s return and eternal life.', ['Acts 1:11','Revelation 21:1-4']),

  // === TEACHINGS OF JESUS ===
  L('toj-1','teachings-of-jesus','toj-u1','The Sermon on the Mount','Jesus\' great teaching on Kingdom living.', ['Know the Sermon on the Mount','Understand its themes','Apply to life'], 5, [
    { id:'toj1-q1', type:'multiple_choice', question:'The Sermon on the Mount is found in:', options:[' John 3',' Matthew 5-7',' Luke 10',' Mark 1'], correctAnswer:' Matthew 5-7', explanation:'Matthew 5-7.', scriptureReference:'Matthew 5:1' },
    { id:'toj1-q2', type:'true_false', question:'Jesus said, "You are the salt of the earth."', options:['True','False'], correctAnswer:'True', explanation:'Matthew 5:13.', scriptureReference:'Matthew 5:13' },
    { id:'toj1-q3', type:'fill_blank', question:'"You are the light of the world. A town built on a hill cannot be ____." (Matt 5:14)', blankSentence:'"You are the light of the world. A town built on a hill cannot be ____."', correctAnswer:'hidden', explanation:'Matthew 5:14.', scriptureReference:'Matthew 5:14' },
    { id:'toj1-q4', type:'multiple_choice', question:'Jesus said He came to:', options:[' Abolish the Law',' Fulfill the Law',' Ignore it',' Replace with rules'], correctAnswer:' Fulfill the Law', explanation:'Matthew 5:17.', scriptureReference:'Matthew 5:17' },
    { id:'toj1-q5', type:'scenario', question:'The Sermon on the Mount calls us to:', options:[' Outward religion only',' Heart-level obedience',' Ignore the heart',' Legalism'], correctAnswer:' Heart-level obedience', explanation:'Matthew 5:20.' },
  ], 'The Sermon on the Mount calls for heart-level Kingdom living.', ['Matthew 5-7']),

  L('toj-2','teachings-of-jesus','toj-u2','The Beatitudes','Jesus pronounces blessings on the humble and faithful.', ['Know the Beatitudes','Understand "blessed"','Apply to life'], 5, [
    { id:'toj2-q1', type:'multiple_choice', question:'"Blessed are the poor in spirit, for theirs is the kingdom of ____." (Matt 5:3)', options:['heaven',' earth',' God',' grace'], correctAnswer:'heaven', explanation:'Matthew 5:3.', scriptureReference:'Matthew 5:3' },
    { id:'toj2-q2', type:'true_false', question:'"Blessed are the meek, for they will inherit the earth."', options:['True','False'], correctAnswer:'True', explanation:'Matthew 5:5.', scriptureReference:'Matthew 5:5' },
    { id:'toj2-q3', type:'fill_blank', question:'"Blessed are the peacemakers, for they will be called ____ of God." (Matt 5:9)', blankSentence:'"Blessed are the peacemakers, for they will be called ____ of God."', correctAnswer:'children', explanation:'Matthew 5:9.', scriptureReference:'Matthew 5:9' },
    { id:'toj2-q4', type:'multiple_choice', question:'The Beatitudes describe:', options:[' The powerful',' The values of God\'s Kingdom',' Wealth',' Success'], correctAnswer:' The values of God\'s Kingdom', explanation:'Matthew 5:3-12.' },
    { id:'toj2-q5', type:'scenario', question:'"Blessed are those who hunger and thirst for righteousness" means:', options:[' Physical hunger',' Desire to do right before God',' Wealth',' Fame'], correctAnswer:' Desire to do right before God', explanation:'Matthew 5:6.', scriptureReference:'Matthew 5:6' },
  ], 'The Beatitudes reveal the values of God\'s Kingdom.', ['Matthew 5:3-12']),

  L('toj-3','teachings-of-jesus','toj-u3','Loving Your Neighbor','The greatest commandment includes loving others.', ['Know the love command','Love in action','See neighbor broadly'], 5, [
    { id:'toj3-q1', type:'multiple_choice', question:'Jesus said the greatest commandment is:', options:[' Keep Sabbath',' Love the Lord your God with all your heart',' Don\'t steal',' Fast'], correctAnswer:' Love the Lord your God with all your heart', explanation:'Matthew 22:37.', scriptureReference:'Matthew 22:37' },
    { id:'toj3-q2', type:'true_false', question:'The second is like it: love your neighbor as yourself.', options:['True','False'], correctAnswer:'True', explanation:'Matthew 22:39.', scriptureReference:'Matthew 22:39' },
    { id:'toj3-q3', type:'fill_blank', question:'"On these two commandments hang all the ____ and the Prophets." (Matt 22:40)', blankSentence:'"On these two commandments hang all the ____ and the Prophets."', correctAnswer:'Law', explanation:'Matthew 22:40.', scriptureReference:'Matthew 22:40' },
    { id:'toj3-q4', type:'scenario', question:'"Who is my neighbor?" — Jesus answers with:', options:[' Only friends',' The Parable of the Good Samaritan',' Family only',' Same religion'], correctAnswer:' The Parable of the Good Samaritan', explanation:'Luke 10:29-37.', scriptureReference:'Luke 10:29-37' },
    { id:'toj3-q5', type:'multiple_choice', question:'Loving neighbor means:', options:[' Feelings only',' Action and compassion',' Ignoring needs',' Judging'], correctAnswer:' Action and compassion', explanation:'1 John 3:18.', scriptureReference:'1 John 3:18' },
  ], 'Love God and love your neighbor as yourself.', ['Matthew 22:37-40','Luke 10:25-37']),

  L('toj-4','teachings-of-jesus','toj-u4','Forgiveness','Forgive as you have been forgiven.', ['Understand forgiveness','Forgive others','Receive grace'], 5, [
    { id:'toj4-q1', type:'multiple_choice', question:'Jesus taught, "If you forgive others... your heavenly Father will also forgive you." (Matt 6:14) This means:', options:[' Forgiveness is earned',' Forgiveness flows from being forgiven',' We don\'t need forgiveness',' Forgiveness is optional'], correctAnswer:' Forgiveness flows from being forgiven', explanation:'Matthew 6:14.' },
    { id:'toj4-q2', type:'true_false', question:'Jesus forgave those who crucified Him.', options:['True','False'], correctAnswer:'True', explanation:'Luke 23:34.', scriptureReference:'Luke 23:34' },
    { id:'toj4-q3', type:'fill_blank', question:'"For if you forgive other people when they sin against you, your heavenly Father will also forgive ____." (Matt 6:14)', blankSentence:'"For if you forgive other people when they sin against you, your heavenly Father will also forgive ____."', correctAnswer:'you', explanation:'Matthew 6:14.', scriptureReference:'Matthew 6:14' },
    { id:'toj4-q4', type:'scenario', question:'When someone apologizes, you should:', options:[' Hold a grudge',' Forgive and reconcile',' Punish them',' Ignore them'], correctAnswer:' Forgive and reconcile', explanation:'Colossians 3:13.' },
    { id:'toj4-q5', type:'multiple_choice', question:'Forgiveness is possible because of:', options:[' Our goodness',' Christ\'s sacrifice',' Effort',' Time'], correctAnswer:' Christ\'s sacrifice', explanation:'Ephesians 1:7.', scriptureReference:'Ephesians 1:7' },
  ], 'Forgiveness is possible because of Christ; forgive as you are forgiven.', ['Matthew 6:14-15','Luke 23:34','Ephesians 1:7']),

  L('toj-5','teachings-of-jesus','toj-u5','Prayer','Jesus taught His disciples how to pray.', ['Know the Lord\'s Prayer','Pray with faith','Seek God\'s will'], 5, [
    { id:'toj5-q1', type:'multiple_choice', question:'The Lord\'s Prayer asks for "daily ____."', options:[' bread',' money',' strength',' wisdom'], correctAnswer:' bread', explanation:'Matthew 6:11.', scriptureReference:'Matthew 6:11' },
    { id:'toj5-q2', type:'true_false', question:'Jesus said to pray in secret to the Father.', options:['True','False'], correctAnswer:'True', explanation:'Matthew 6:6.', scriptureReference:'Matthew 6:6' },
    { id:'toj5-q3', type:'fill_blank', question:'"Your kingdom come, your will be done, on earth as it is in ____." (Matt 6:10)', blankSentence:'"Your kingdom come, your will be done, on earth as it is in ____."', correctAnswer:'heaven', explanation:'Matthew 6:10.', scriptureReference:'Matthew 6:10' },
    { id:'toj5-q4', type:'scenario', question:'When praying, focus on:', options:[' Impressing others',' God\'s will and kingdom',' Selfish desires',' Repetition'], correctAnswer:' God\'s will and kingdom', explanation:'Matthew 6:9-10.' },
    { id:'toj5-q5', type:'multiple_choice', question:'Prayer should be:', options:[' Showy',' Sincere and faith-filled',' Long and empty',' Rare'], correctAnswer:' Sincere and faith-filled', explanation:'Matthew 6:5-8.' },
  ], 'Pray sincerely, seeking God\'s will and kingdom.', ['Matthew 6:5-15']),

  L('toj-6','teachings-of-jesus','toj-u6','Faith','Jesus taught that faith moves mountains.', ['Understand faith','Trust God','Pray with faith'], 5, [
    { id:'toj6-q1', type:'multiple_choice', question:'Jesus said, "If you have faith as small as a mustard seed, you can say to this mountain, \'Move from here to there,\' and it will move." (Matt 17:20) This teaches:', options:[' Faith size matters most',' Even small faith in God is powerful',' Mountains literally move',' Faith is magic'], correctAnswer:' Even small faith in God is powerful', explanation:'Matthew 17:20.' },
    { id:'toj6-q2', type:'true_false', question:'Jesus calmed the storm and asked, "Where is your faith?"', options:['True','False'], correctAnswer:'True', explanation:'Luke 8:25.' },
    { id:'toj6-q3', type:'fill_blank', question:'"Everything is possible for one who ____." (Mark 9:23)', blankSentence:'"Everything is possible for one who ____."', correctAnswer:'believes', explanation:'Mark 9:23.', scriptureReference:'Mark 9:23' },
    { id:'toj6-q4', type:'scenario', question:'When doubts arise, you should:', options:[' Give up',' Bring them to Jesus like the father in Mark 9',' Hide them',' Pretend'], correctAnswer:' Bring them to Jesus like the father in Mark 9', explanation:'Mark 9:24 — "I believe; help my unbelief!"', scriptureReference:'Mark 9:24' },
    { id:'toj6-q5', type:'multiple_choice', question:'Faith is:', options:[' Feeling sure',' Trusting God despite circumstances',' Blind optimism',' Denial'], correctAnswer:' Trusting God despite circumstances', explanation:'Hebrews 11:1.' },
  ], 'Faith trusts God; even small faith is powerful.', ['Matthew 17:20','Mark 9:23-24','Hebrews 11:1']),

  L('toj-7','teachings-of-jesus','toj-u7','The Kingdom of God','Jesus proclaimed that God\'s Kingdom is near.', ['Understand God\'s Kingdom','Seek it first','Live as citizens'], 5, [
    { id:'toj7-q1', type:'multiple_choice', question:'Jesus began His ministry preaching:', options:[' Repent, for the kingdom of heaven is near',' Politics',' Wealth',' Rules'], correctAnswer:' Repent, for the kingdom of heaven is near', explanation:'Matthew 4:17.', scriptureReference:'Matthew 4:17' },
    { id:'toj7-q2', type:'true_false', question:'Jesus said to seek first God\'s kingdom and His righteousness.', options:['True','False'], correctAnswer:'True', explanation:'Matthew 6:33.', scriptureReference:'Matthew 6:33' },
    { id:'toj7-q3', type:'fill_blank', question:'"The kingdom of God is not a matter of eating and drinking, but of righteousness, peace and joy in the Holy ____." (Rom 14:17)', blankSentence:'"The kingdom of God is not a matter of eating and drinking, but of righteousness, peace and joy in the Holy ____."', correctAnswer:'Spirit', explanation:'Romans 14:17.', scriptureReference:'Romans 14:17' },
    { id:'toj7-q4', type:'multiple_choice', question:'God\'s Kingdom is:', options:[' A political nation',' God\'s rule and reign in hearts and creation',' A building',' A religion'], correctAnswer:' God\'s rule and reign in hearts and creation', explanation:'Luke 17:21.' },
    { id:'toj7-q5', type:'scenario', question:'Seeking God\'s Kingdom first means:', options:[' Ignore needs',' Prioritize God over everything',' Be religious',' Work harder'], correctAnswer:' Prioritize God over everything', explanation:'Matthew 6:33.' },
  ], 'God\'s Kingdom is His rule; seek it first.', ['Matthew 4:17','6:33','Luke 17:20-21']),

  // === PRAYER AND GROWTH ===
  L('pg-1','prayer-growth','pg-u1','What Is Prayer?','Prayer is talking with God.', ['Define prayer','Know why we pray','Pray simply'], 4, [
    { id:'pg1-q1', type:'multiple_choice', question:'Prayer is:', options:[' A ritual',' Conversation with God',' Magic',' A duty only'], correctAnswer:' Conversation with God', explanation:'Prayer is talking with our Father.' },
    { id:'pg1-q2', type:'true_false', question:'God hears our prayers.', options:['True','False'], correctAnswer:'True', explanation:'Psalm 65:2 — God hears prayer.', scriptureReference:'Psalm 65:2' },
    { id:'pg1-q3', type:'fill_blank', question:'"The prayer of a righteous person is powerful and ____." (James 5:16)', blankSentence:'"The prayer of a righteous person is powerful and ____."', correctAnswer:'effective', explanation:'James 5:16.', scriptureReference:'James 5:16' },
    { id:'pg1-q4', type:'scenario', question:'When you pray, you can:', options:[' Only use fancy words',' Talk to God honestly',' Wait for perfect feelings',' Copy others'], correctAnswer:' Talk to God honestly', explanation:'Hebrews 4:16 — approach God\'s throne with confidence.' },
    { id:'pg1-q5', type:'multiple_choice', question:'Prayer includes:', options:[' Praise',' Confession',' Thanks',' All of the above'], correctAnswer:' All of the above', explanation:'Prayer includes praise, confession, thanks, and requests.' },
  ], 'Prayer is honest conversation with God.', ['Psalm 65:2','James 5:16','Hebrews 4:16']),

  L('pg-2','prayer-growth','pg-u2','The Lord\'s Prayer','Jesus taught His disciples a model prayer.', ['Know the Lord\'s Prayer','Understand its parts','Pray it meaningfully'], 5, [
    { id:'pg2-q1', type:'multiple_choice', question:'The Lord\'s Prayer is found in:', options:[' John 3',' Matthew 6',' Luke 10',' Mark 1'], correctAnswer:' Matthew 6', explanation:'Matthew 6:9-13.', scriptureReference:'Matthew 6:9' },
    { id:'pg2-q2', type:'true_false', question:'The Lord\'s Prayer asks God to forgive our debts as we forgive debtors.', options:['True','False'], correctAnswer:'True', explanation:'Matthew 6:12.', scriptureReference:'Matthew 6:12' },
    { id:'pg2-q3', type:'fill_blank', question:'"Give us today our daily ____." (Matt 6:11)', blankSentence:'"Give us today our daily ____."', correctAnswer:'bread', explanation:'Matthew 6:11.', scriptureReference:'Matthew 6:11' },
    { id:'pg2-q4', type:'multiple_choice', question:'"Lead us not into temptation, but deliver us from the evil one" teaches:', options:[' God tempts us',' We need God\'s protection',' Temptation is good',' We are strong'], correctAnswer:' We need God\'s protection', explanation:'Matthew 6:13.' },
    { id:'pg2-q5', type:'scenario', question:'Praying the Lord\'s Prayer helps us:', options:[' Recite words only',' Align our hearts with God\'s will',' Impress God',' Earn salvation'], correctAnswer:' Align our hearts with God\'s will', explanation:'Matthew 6:9-10.' },
  ], 'The Lord\'s Prayer models how to pray to our Father.', ['Matthew 6:9-13']),

  L('pg-3','prayer-growth','pg-u3','Thanksgiving','Give thanks to God in all circumstances.', ['Practice thanksgiving','See God\'s goodness','Cultivate gratitude'], 4, [
    { id:'pg3-q1', type:'multiple_choice', question:'"Give thanks in all circumstances; for this is God\'s will for you in Christ Jesus." (1 Thess 5:18) means:', options:[' Only when happy',' In all circumstances',' Only on Sundays',' Never'], correctAnswer:' In all circumstances', explanation:'1 Thessalonians 5:18.', scriptureReference:'1 Thessalonians 5:18' },
    { id:'pg3-q2', type:'true_false', question:'Enter God\'s gates with thanksgiving.', options:['True','False'], correctAnswer:'True', explanation:'Psalm 100:4.', scriptureReference:'Psalm 100:4' },
    { id:'pg3-q3', type:'fill_blank', question:'"Oh give thanks to the LORD, for he is ____, for his steadfast love endures forever!" (Psalm 107:1)', blankSentence:'"Oh give thanks to the LORD, for he is ____, for his steadfast love endures forever!"', correctAnswer:'good', explanation:'Psalm 107:1.', scriptureReference:'Psalm 107:1' },
    { id:'pg3-q4', type:'scenario', question:'When life is hard, thanksgiving helps us:', options:[' Deny reality',' Remember God\'s goodness',' Ignore problems',' Be fake'], correctAnswer:' Remember God\'s goodness', explanation:'Psalm 103:2 — forget not His benefits.' },
    { id:'pg3-q5', type:'multiple_choice', question:'Gratitude grows when we:', options:[' Compare to others',' Remember God\'s gifts',' Complain',' Isolate'], correctAnswer:' Remember God\'s gifts', explanation:'James 1:17 — every good gift from above.' },
  ], 'Give thanks to God in all circumstances.', ['1 Thessalonians 5:18','Psalm 100:4','Psalm 107:1']),

  L('pg-4','prayer-growth','pg-u4','Praying for Others','Intercede for others as Jesus does for us.', ['Understand intercession','Pray for others','Love through prayer'], 4, [
    { id:'pg4-q1', type:'multiple_choice', question:'Intercession means:', options:[' Praying for yourself',' Praying on behalf of others',' Ignoring others',' Judging others'], correctAnswer:' Praying on behalf of others', explanation:'Intercession is praying for others.' },
    { id:'pg4-q2', type:'true_false', question:'Jesus intercedes for us at God\'s right hand.', options:['True','False'], correctAnswer:'True', explanation:'Romans 8:34.', scriptureReference:'Romans 8:34' },
    { id:'pg4-q3', type:'fill_blank', question:'"I urge, then, first of all, that petitions, prayers, intercession and ____ be made for all people." (1 Tim 2:1)', blankSentence:'"I urge, then, first of all, that petitions, prayers, intercession and ____ be made for all people."', correctAnswer:'thanksgiving', explanation:'1 Timothy 2:1.', scriptureReference:'1 Timothy 2:1' },
    { id:'pg4-q4', type:'scenario', question:'A friend is struggling. You can:', options:[' Gossip',' Pray for them and help',' Ignore them',' Judge them'], correctAnswer:' Pray for them and help', explanation:'Galatians 6:2 — bear one another\'s burdens.' },
    { id:'pg4-q5', type:'multiple_choice', question:'Praying for others shows:', options:[' Pride',' Love and care',' Weakness',' Duty only'], correctAnswer:' Love and care', explanation:'Colossians 4:12 — Epaphras praying for believers.' },
  ], 'Intercede for others in love.', ['1 Timothy 2:1-4','Romans 8:34','Galatians 6:2']),

  L('pg-5','prayer-growth','pg-u5','Consistent Prayer Habit','Build a daily habit of prayer.', ['Build consistency','Remove barriers','Pray daily'], 4, [
    { id:'pg5-q1', type:'multiple_choice', question:'Jesus often withdrew to:', options:[' Parties',' Lonely places to pray',' The temple only',' Crowds'], correctAnswer:' Lonely places to pray', explanation:'Luke 5:16 — Jesus withdrew to pray.', scriptureReference:'Luke 5:16' },
    { id:'pg5-q2', type:'true_false', question:'Daniel prayed three times a day.', options:['True','False'], correctAnswer:'True', explanation:'Daniel 6:10.', scriptureReference:'Daniel 6:10' },
    { id:'pg5-q3', type:'fill_blank', question:'"Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he ____." (Mark 1:35)', blankSentence:'"Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he ____."', correctAnswer:'prayed', explanation:'Mark 1:35.', scriptureReference:'Mark 1:35' },
    { id:'pg5-q4', type:'scenario', question:'To build a prayer habit, you should:', options:[' Wait for perfect conditions',' Set a daily time and place',' Pray only in church',' Pray only when sad'], correctAnswer:' Set a daily time and place', explanation:'Consistency builds habit.' },
    { id:'pg5-q5', type:'multiple_choice', question:'Prayer habits grow through:', options:[' Perfection',' Daily practice and grace',' Guilt',' Comparison'], correctAnswer:' Daily practice and grace', explanation:'Lamentations 3:22-23 — new mercies each day.' },
  ], 'Build a daily habit of prayer like Jesus.', ['Luke 5:16','Mark 1:35','Daniel 6:10']),
]

export function getLessonsByPath(pathId: string): Lesson[] {
  return LESSONS.filter(l => l.pathId === pathId)
}
export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find(l => l.id === id)
}
export function getPath(id: string): LearningPath | undefined {
  return LEARNING_PATHS.find(p => p.id === id)
}
export function getUnit(pathId: string, unitId: string) {
  return LEARNING_PATHS.find(p => p.id === pathId)?.units.find(u => u.id === unitId)
}