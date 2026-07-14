/* ============================================================
   KET (A2) & PET (B1) Grammar Question Bank
   ~230 questions across 30 grammar topics
   Generated: 2026-07-14
   ============================================================ */

const GRAMMAR_BANK = [
// ══════════════════════════════════════════
// 1. PRESENT SIMPLE — 一般现在时 (KET ★★★★★)
// ══════════════════════════════════════════
{ id:1, level:'KET', topic:'Present Simple', q:'My brother ___ to school every day.', options:['go','goes','going'], answer:1, explanation:'主语是第三人称单数(My brother)，动词要加 -es：go → goes' },
{ id:2, level:'KET', topic:'Present Simple', q:'They ___ football on Sundays.', options:['plays','play','playing'], answer:1, explanation:'主语 They 是复数，动词用原形 play，不加 -s' },
{ id:3, level:'KET', topic:'Present Simple', q:'She ___ her homework after dinner.', options:['do','does','did'], answer:1, explanation:'第三人称单数 She 用助动词 does（不是 do）' },
{ id:4, level:'KET', topic:'Present Simple', q:'The sun ___ in the east.', options:['rise','rises','rising'], answer:1, explanation:'客观真理用一般现在时。sun 是单数，加 -s：rises' },
{ id:5, level:'KET', topic:'Present Simple', q:'Tom ___ like pizza.', options:["don't","doesn't","isn't"], answer:1, explanation:"否定句用 doesn't + 动词原形（like 不变）" },
{ id:6, level:'KET', topic:'Present Simple', q:'___ you speak English?', options:['Do','Does','Are'], answer:0, explanation:'疑问句用 Do 提问，回答用 Yes, I do / No, I don\'t' },
{ id:7, level:'KET', topic:'Present Simple', q:'Water ___ at 100°C.', options:['boil','boils','is boiling'], answer:1, explanation:'科学事实/规律用一般现在时，water 是不可数名词作单数处理' },
{ id:8, level:'KET', topic:'Present Simple', q:'My parents ___ in Beijing.', options:['live','lives','living'], answer:0, explanation:'parents 是复数，动词用原形 live' },
{ id:9, level:'KET', topic:'Present Simple', q:'He ___ TV every evening.', options:['watch','watches','watching'], answer:1, explanation:'watch 以 ch 结尾，第三人称单数加 -es → watches' },
{ id:10, level:'KET', topic:'Present Simple', q:'___ your teacher come from England?', options:['Is','Does','Do'], answer:1, explanation:'your teacher 是第三人称单数，疑问句用 Does' },
{ id:11, level:'KET', topic:'Present Simple', q:'Cats ___ mice.', options:['catches','catch','caught'], answer:1, explanation:'cats 是复数，动词用原形 catch' },
{ id:12, level:'KET', topic:'Present Simple', q:'This train ___ to London.', options:['go','goes','going'], answer:1, explanation:'this train 是单数（火车），动词加 -s' },

// ══════════════════════════════════════════
// 2. PRESENT CONTINUOUS — 现在进行时 (KET ★★★★★)
// ══════════════════════════════════════════
{ id:13, level:'KET', topic:'Present Continuous', q:'Listen! The baby ___.', options:['cries','crying','is crying'], answer:2, explanation:'Listen! 表示"正在发生"，用现在进行时 be + doing' },
{ id:14, level:'KET', topic:'Present Continuous', q:'Look! It ___.', options:['rain','is raining','raining'], answer:1, explanation:'Look! 提示正在发生的动作，用 is + raining' },
{ id:15, level:'KET', topic:'Present Continuous', q:'We ___ English now.', options:['are studying','study','studying'], answer:0, explanation:'now 表示此刻正在做，用 are studying（现在进行时）' },
{ id:16, level:'KET', topic:'Present Continuous', q:'She ___ not ___ TV at the moment.', options:['is/watching','doesn\'t/watch','isn\'t/watching'], answer:2, explanation:'at the moment = 此刻，否定形式 isn\'t + watching' },
{ id:17, level:'KET', topic:'Present Continuous', q:'What ___ you ___ right now?', options:['do/do','are/doing','is/doing'], answer:1, explanation:'right now = 正在做什么？用现在进行时的特殊疑问句形式' },
{ id:18, level:'KET', topic:'Present Continuous', q:'I ___ my homework now.', options:['do','am doing','doing'], answer:1, explanation:'now 表示正在进行，主语 I 用 am + doing' },
{ id:19, level:'KET', topic:'Present Continuous', q:'They ___ lunch in the kitchen.', options:['have','having','are having'], answer:2, explanation:'表示当前正在发生的动作，用 are having' },
{ id:20, level:'KET', topic:'Present Continuous', q:'My dad ___ dinner in the kitchen.', options:['cooks','cooking','is cooking'], answer:2, explanation:'描述此刻正在进行的动作用 is + cooking' },

// ══════════════════════════════════════════
// 3. PAST SIMPLE — 一般过去时 (KET ★★★★★)
// ══════════════════════════════════════════
{ id:21, level:'KET', topic:'Past Simple', q:'I ___ to the park yesterday.', options:['go','went','gone'], answer:1, explanation:'yesterday 标志过去时间，go 的不规则过去式是 went' },
{ id:22, level:'KET', topic:'Past Simple', q:'She ___ her homework last night.', options:['do','did','done'], answer:1, explanation:'last night = 过去时间，do 的过去式是 did' },
{ id:23, level:'KET', topic:'Past Simple', q:'We ___ a movie last week.', options:['see','saw','seen'], answer:1, explanation:'see 是不规则动词：see → saw → seen' },
{ id:24, level:'KET', topic:'Past Simple', q:'They ___ breakfast two hours ago.', options:['eat','ate','eaten'], answer:1, explanation:'ago 标志过去时间，eat 的过去式是 ate' },
{ id:25, level:'KET', topic:'Past Simple', q:'___ you go to school yesterday?', options:['Do','Did','Were'], answer:1, explanation:'一般过去时的一般疑问句用 Did 开头' },
{ id:26, level:'KET', topic:'Past Simple', q:'He didn\'t ___ the exam.', options:['pass','passed','passes'], answer:0, explanation:"didn't 后面接动词原形 pass（不要加 -ed）" },
{ id:27, level:'KET', topic:'Past Simple', q:'My mum ___ a cake for my birthday last year.', options:['make','made','making'], answer:1, explanation:'make 的过去式是不规则的 made' },
{ id:28, level:'KET', topic:'Past Simple', q:'I ___ my keys this morning. Can you help me find them?', options:['lose','lost','losted'], answer:1, explanation:'lose 的过去式是 lost（不是 losted）' },
{ id:29, level:'KET', topic:'Past Simple', q:'We ___ to the cinema three days ago.', options:['go','went','was going'], answer:1, explanation:'three days ago = 三天前，用一般过去时 went' },
{ id:30, level:'KET', topic:'Past Simple', q:'She ___ up early yesterday morning.', options:['get','got','getting'], answer:1, explanation:'get 的过去式是 got，规则变化加 -t' },
{ id:31, level:'KET', topic:'Past Simple', q:'___ they play tennis last Sunday?', options:['Do','Did','Are'], answer:1, explanation:'last Sunday 是过去时间，疑问句用 Did' },
{ id:32, level:'KET', topic:'Past Simple', q:'He wrote a letter to his friend ___ .', options:['tomorrow','now','yesterday'], answer:2, explanation:'wrote 是 write 的过去式，需要搭配昨天等过去时间词' },

// ══════════════════════════════════════════
// 4. FUTURE — 将来时 (KET ★★★★)
// ══════════════════════════════════════════
{ id:33, level:'KET', topic:'Future Forms', q:'I think it ___ tomorrow.', options:['will rain','raining','is rain'], answer:0, explanation:'will + 动词原形表示预测或将来发生的事' },
{ id:34, level:'KET', topic:'Future Forms', q:'Look at those dark clouds! It ___.', options:['will rain','is going to rain','rains'], answer:1, explanation:'根据现有迹象判断即将发生的事，用 be going to' },
{ id:35, level:'KET', topic:'Future Forms', q:'We ___ visit our grandparents next weekend.', options:['will','are going to','going to'], answer:1, explanation:'有计划安排好的将来，用 be going to' },
{ id:36, level:'KET', topic:'Future Forms', q:'___ you help me with my bag?', options:['Will','Do','Are'], answer:0, explanation:'请求帮助常用 Will you...? （礼貌用语）' },
{ id:37, level:'KET', topic:'Future Forms', q:'I promise I ___ be late again!', options:["won't","don't","didn't"], answer:0, explanation:"承诺用 won't = will not（将来否定式）" },
{ id:38, level:'KET', topic:'Future Forms', q:'She ___ study medicine when she grows up.', options:['will','is going to','shall'], answer:1, explanation:'表达打算、计划用 be going to' },
{ id:39, level:'KET', topic:'Future Forms', q:'I think robots ___ do housework in the future.', options:['will','are','going'], answer:0, explanation:'对未来的推测用 will + 动词原形' },
{ id:40, level:'KET', topic:'Future Forms', q:'— What are your plans?— I ___ take piano lessons next month.', options:['am going to','will','do'], answer:0, explanation:'已经计划好的事用 am going to' },

// ══════════════════════════════════════════
// 5. PRESENT PERFECT — 现在完成时 (KET进阶 ★★★★)
// ══════════════════════════════════════════
{ id:41, level:'PET', topic:'Present Perfect', q:'I ___ already ___ my homework.', options:['have/finished','has/finished','had/finished'], answer:0, explanation:'already 用于肯定句，放在 have/has 和过去分词之间' },
{ id:42, level:'PET', topic:'Present Perfect', q:'Have you finished your homework ___ ?', options:['yet','already','just'], answer:0, explanation:'yet 用于疑问句和否定句，通常放在句末' },
{ id:43, level:'PET', topic:'Present Perfect', q:'She ___ lived here since 2010.', options:['has','have','is'], answer:0, explanation:'since + 过去时间点，用 has/have + 过去分词' },
{ id:44, level:'PET', topic:'Present Perfect', q:'I haven\'t seen him ___ three years.', options:['for','since','from'], answer:0, explanation:'for + 时间段（three years = 一段时间），用 for' },
{ id:45, level:'PET', topic:'Present Perfect', q:'I ___ just ___ an email from him.', options:['have/received','has/received','had/received'], answer:0, explanation:'just 表示"刚刚"，放在助动词和分词之间' },
{ id:46, level:'PET', topic:'Present Perfect', q:'Have you ever ___ to London?', options:['been','be','was'], answer:0, explanation:'ever 意为"曾经"，常用于完成时问句；have been to = 去过' },
{ id:47, level:'PET', topic:'Present Perfect', q:'They ___ never ___ sushi before.', options:['have/tried','has/tried','are/tried'], answer:0, explanation:'never 从不，用于完成时常在助动词后' },
{ id:48, level:'PET', topic:'Present Perfect', q:'I ___ this movie twice.', options:['have seen','see','saw'], answer:0, explanation:'twice 强调到目前为止的经历，用现在完成时' },
{ id:49, level:'PET', topic:'Present Perfect', q:'She started learning English five years ago.\nShe ___ ___ English for five years.', options:['has learned','learned','learns'], answer:0, explanation:'started...ago 转换为 has...for...（PET黄金转换公式）' },
{ id:50, level:'PET', topic:'Present Perfect', q:'I can\'t find my phone. I ___ it somewhere!', options:['must have left','left','leave'], answer:0, explanation:'对过去的推测"一定把手机落在某处了"，用 must have done' },

// ══════════════════════════════════════════
// 6. PAST CONTINUOUS — 过去进行时 (KET ★★★)
// ══════════════════════════════════════════
{ id:51, level:'KET', topic:'Past Continuous', q:'What were you doing at 9 o\'clock last night?\nI ___ TV.', options:['watched','was watching','am watching'], answer:1, explanation:'特定过去时刻正在做的事，用 was/were + V-ing' },
{ id:52, level:'KET', topic:'Past Continuous', q:'While I was reading, my sister ___ the piano.', options:['played','was playing','plays'], answer:1, explanation:'while 引导的从句中两个动作同时进行都用进行时' },
{ id:53, level:'KET', topic:'Past Continuous', q:'It ___ raining when we left home.', options:['is','was','were'], answer:1, explanation:'when 引导的时间状语从句，主句用过去进行时表示当时的状态' },
{ id:54, level:'KET', topic:'Past Continuous', q:'They weren\'t ___ at that time.', options:['sleep','sleeping','sleeps'], answer:1, explanation:'weren\'t 后接 V-ing 形式构成过去进行时否定句' },
{ id:55, level:'KET', topic:'Past Continuous', q:'___ you sleeping when I called?', options:['Did','Were','Was'], answer:1, explanation:'过去进行时的一般疑问句用 Were 开头（you 复数）' },
{ id:56, level:'KET', topic:'Past Continuous', q:'When the teacher came in, the students ___.', options:['talk','were talking','talked'], answer:1, explanation:'老师进来时学生们正在说话——描述那个时刻正在进行的动作' },

// ══════════════════════════════════════════
// 7. ARTICLES — 冠词 a/an/the (KET ★★★★★)
// ══════════════════════════════════════════
{ id:57, level:'KET', topic:'Articles', q:'I saw ___ cat in the garden. It was black.', options:['a','an','the'], answer:0, explanation:'首次提到某物用不定冠词，cat 以辅音开头用 a' },
{ id:58, level:'KET', topic:'Articles', q:'I saw ___ elephant at the zoo yesterday. It was huge!', options:['a','an','the'], answer:1, explanation:'elephant 以元音音素 /e/ 开头，用 an' },
{ id:59, level:'KET', topic:'Articles', q:'I saw ___ cat again today. Same one!', options:['a','an','the'], answer:2, explanation:'第二次提到同一事物，用定冠词 the（特指那只猫）' },
{ id:60, level:'KET', topic:'Articles', q:'She wants to be ___ engineer.', options:['a','an','the'], answer:1, explanation:'engineer 发音以 /en/ 元音音素开头，用 an' },
{ id:61, level:'KET', topic:'Articles', q:'He is ___ honest boy. Everyone likes him.', options:['a','an','the'], answer:1, explanation:'honest 首字母 h 不发音，发音以 /ɒ/ 元音开头，用 an' },
{ id:62, level:'KET', topic:'Articles', q:'I play ___ piano every day.', options:['the','a','an'], answer:0, explanation:'play 后跟乐器名称要用 the（西洋乐器固定搭配）' },
{ id:63, level:'KET', topic:'Articles', q:'Let\'s go to ___ park near my house.', options:['a','an','the'], answer:2, explanation:'near my house 特指我家附近的公园，用 the' },
{ id:64, level:'KET', topic:'Articles', q:'I usually eat ___ apple for breakfast.', options:['an','a','the'], answer:0, explanation:'泛指一个苹果，apple 以元音开头用 an' },
{ id:65, level:'KET', topic:'Articles', q:'___ sun rises in the east.', options:['A','An','The'], answer:2, explanation:'世界上独一无二的事物（太阳、月亮、地球）前用 the' },
{ id:66, level:'KET', topic:'Articles', q:'Can you pass me ___ salt, please?', options:['the','a','an'], answer:0, explanation:'双方都知道的东西用 the（特指桌上的盐）' },

// ══════════════════════════════════════════
// 8. NOUNS & QUANTIFIERS — 名词与量词 (KET ★★★★)
// ══════════════════════════════════════════
{ id:67, level:'KET', topic:'Nouns & Quantifiers', q:'There is ___ water in the glass.', options:['some','many','a few'], answer:0, explanation:'water 是不可数名词，只能用 some 或 any 修饰，不能用 many/a few' },
{ id:68, level:'KET', topic:'Nouns & Quantifiers', q:'How ___ apples did you buy?', options:['much','many','some'], answer:1, explanation:'apples 是可数复数，用 many 提问数量' },
{ id:69, level:'KET', topic:'Nouns & Quantifiers', q:'There aren\'t ___ students in the classroom.', options:['much','any','some'], answer:1, explanation:'students 可数复数，否定句用 any（不用 some）' },
{ id:70, level:'KET', topic:'Nouns & Quantifiers', q:'I have ___ money. Let me pay!', options:['little','a little','few'], answer:1, explanation:'money 不可数，a little = 有一点（肯定）；little 几乎没有（否定含义）' },
{ id:71, level:'KET', topic:'Nouns & Quantifiers', q:'There are only ___ cookies left in the jar.', options:['a few','few','little'], answer:0, explanation:'cookies 可数，a few = 有一些（肯定）；few 几乎没有' },
{ id:72, level:'KET', topic:'Nouns & Quantifiers', q:'Would you like ___ tea?', options:['some','any','a'], answer:0, explanation:'would you like... 表达邀请/建议时可用 some（即使在疑问句中）' },
{ id:73, level:'KET', topic:'Nouns & Quantifiers', q:'How ___ bread do we need for sandwiches?', options:['much','many','some'], answer:0, explanation:'bread 不可数，用 much 提问' },
{ id:74, level:'KET', topic:'Nouns & Quantifiers', q:'I need ___ information about the course.', options:['some','a','an'], answer:0, explanation:'information 是不可数名词，用 some 修饰' },

// ══════════════════════════════════════════
// 9. PRONOUNS — 代词 (KET ★★★★)
// ══════════════════════════════════════════
{ id:75, level:'KET', topic:'Pronouns', q:'This is my book. Where is ___ book?', options:['your','yours','you'], answer:0, explanation:'后面有名词(book)，用形容词性物主代词 your' },
{ id:76, level:'KET', topic:'Pronouns', q:'This pen is mine. Is this pen ___ ?', options:['you','your','yours'], answer:2, explanation:'后面没有名词，用名词性物主代词 yours（= your pen）' },
{ id:77, level:'KET', topic:'Pronouns', q:'I made this cake ___.', options:['myself','my','mine'], answer:0, explanation:'自己做的蛋糕，用反身代词 myself' },
{ id:78, level:'KET', topic:'Pronouns', q:'Please give ___ the red pencil.', options:['me','my','I'], answer:0, explanation:'give 后面的宾语用宾格 me（不是主格 I）' },
{ id:79, level:'KET', topic:'Pronouns', q:'They enjoyed ___ at the party.', options:['themselves','them','their'], answer:0, explanation:'enjoy oneself 是固定搭配，they 对应反身代词 themselves' },
{ id:80, level:'KET', topic:'Pronouns', q:'___ is my best friend. Her name is Lucy.', options:['She','Her','Herself'], answer:0, explanation:'作主语用主格 She' },
{ id:81, level:'KET', topic:'Pronouns', q:'I met Tom yesterday. He gave ___ a gift.', options:['me','I','my'], answer:0, explanation:'gave 后接宾格 me（give sb. sth. 双宾结构）' },
{ id:82, level:'KET', topic:'Pronouns', q:'That car is ___. I bought it last month.', options:['my','mine','me'], answer:1, explanation:'后面没有名词，用名词性物主代词 mine = my car' },

// ══════════════════════════════════════════
// 10. COMPARATIVES & SUPERLATIVES — 比较/最高级 (KET ★★★★)
// ══════════════════════════════════════════
{ id:83, level:'KET', topic:'Comparatives', q:'This book is ___ than that one.', options:['more interesting','interestinger','most interesting'], answer:0, explanation:'多音节形容词的比较级用 more + adj，不用 -er' },
{ id:84, level:'KET', topic:'Comparatives', q:'Tom is ___ tall ___ his brother.', options:['as/as','more/than','so/than'], answer:0, explanation:'as...as 结构表示"和……一样"' },
{ id:85, level:'KET', topic:'Comparatives', q:'Today is ___ than yesterday.', options:['hoter','hotter','more hot'], answer:1, explanation:'hot 以单个辅音字母结尾的重读闭音节，双写末尾辅音再加 -er' },
{ id:86, level:'KET', topic:'Comparatives', q:'Which is ___, the blue one or the green one?', options:['cheap','cheaper','cheapest'], answer:1, explanation:'两者比较用比较级 cheaper' },
{ id:87, level:'KET', topic:'Comparatives', q:'This is ___ film I\'ve ever seen.', options:['good','better','the best'], answer:2, explanation:'ever seen 暗示三者以上比较，用最高级 the best' },
{ id:88, level:'KET', topic:'Comparatives', q:'My room is ___ clean ___ hers.', options:['cleaner/than','as/as','more/than'], answer:1, explanation:'同级比较用 as + 原级 + as' },
{ id:89, level:'KET', topic:'Comparatives', q:'Of all the students, she runs ___.', options:['fastest','faster','more fast'], answer:0, explanation:'of all 暗示范围最大，用最高级 fastest' },
{ id:90, level:'KET', topic:'Comparatives', q:'This test is ___ difficult ___ the last one.', options:['more/than','as/as','most/than'], answer:1, explanation:'一样困难 → 同级比较 as...as' },
{ id:91, level:'KET', topic:'Comparatives', q:'Elephants are ___ animals on land.', options:['the biggest','bigger','biggest'], answer:0, explanation:'陆地上最大的动物 → 最高级 + 定冠词 the' },
{ id:92, level:'KET', topic:'Comparatives', q:'Good, better, ___. Bad, worse, ___.', options:['best/worst','best/badest','goodest/worst'], answer:0, explanation:'不规则比较级：good→better→best; bad→worse→worst' },

// ══════════════════════════════════════════
// 11. ADVERBS OF FREQUENCY — 频率副词 (KET ★★★)
// ══════════════════════════════════════════
{ id:93, level:'KET', topic:'Adverbs of Frequency', q:'He ___ goes swimming. He hates water.', options:['never','always','usually'], answer:0, explanation:'他讨厌水，所以从不游泳 → never' },
{ id:94, level:'KET', topic:'Adverbs of Frequency', q:'I ___ get up at 7:00 on weekdays.', options:['usually','usual','usualy'], answer:0, explanation:'频率副词放在行为动词之前：I usually get up...' },
{ id:95, level:'KET', topic:'Adverbs of Frequency', q:'She is ___ late for class.', options:['never','often','sometimes'], answer:0, explanation:'be 动词之后放频率副词' },
{ id:96, level:'KET', topic:'Adverbs of Frequency', q:'They ___ play basketball after school.', options:['often','oftens','are often'], answer:0, explanation:'频率副词 often 放在主语和动词之间' },
{ id:97, level:'KET', topic:'Adverbs of Frequency', q:'He ___ watches TV before bed.', options:['sometimes','sometime','some time'], answer:0, explanation:'sometimes = 有时候；sometime = 某个时候；some time = 一段时间' },

// ══════════════════════════════════════════
// 12. MODAL VERBS (KET) — 情态动词 (KET ★★★★)
// ══════════════════════════════════════════
{ id:98, level:'KET', topic:'Modal Verbs', q:'You ___ smoke here. It\'s dangerous!', options:['mustn\'t','needn\'t','don\'t'], answer:0, explanation:'mustn\'t = 禁止（绝对不能）；needn\'t = 不必' },
{ id:99, level:'KET', topic:'Modal Verbs', q:'You ___ finish your homework tonight. You can do it tomorrow.', options:["mustn't","needn't",'shouldn\'t'], answer:1, explanation:'不需要今晚做完 → needn\'t = 不必' },
{ id:100, level:'KET', topic:'Modal Verbs', q:'___ I open the window?', options:['May','Must','Should'], answer:0, explanation:'请求许可用 May I...?（比 Can 更礼貌）' },
{ id:101, level:'KET', topic:'Modal Verbs', q:'Students ___ wear uniforms at this school.', options:['have to','can','may'], answer:0, explanation:'have to = 必须（外部规定），比 must 更强调客观要求' },
{ id:102, level:'KET', topic:'Modal Verbs', q:'You ___ be quiet in the library.', options:['should','could','might'], answer:0, explanation:'should = 应该（建议/规则）' },
{ id:103, level:'KET', topic:'Modal Verbs', q:'She ___ speak three languages fluently.', options:['can','must','should'], answer:0, explanation:'表示能力用 can（能/会）' },
{ id:104, level:'KET', topic:'Modal Verbs', q:'It might ___ tomorrow. Look at the clouds.', options:['rain','to rain','raining'], answer:0, explanation:'情态动词 might 后接动词原形' },
{ id:105, level:'KET', topic:'Modal Verbs', q:'You ___ bring your textbook to every class.', options:['must','can','may'], answer:0, explanation:'必须带课本 → must（强调必要性）' },
{ id:106, level:'KET', topic:'Modal Verbs', q:'___ you help me carry these bags?', options:['Could','Must','Shall'], answer:0, explanation:'Could you...? 比 Can you 更客气地请求帮忙' },
{ id:107, level:'KET', topic:'Modal Verbs', q:'We ___ run in the hallway. It\'s against the rules.', options:["mustn't","needn't","couldn't"], answer:0, explanation:'禁止跑 → mustn\'t（绝对不允许）' },

// ══════════════════════════════════════════
// 13. PREPOSITIONS — 介词 (KET ★★★★★)
// ══════════════════════════════════════════
{ id:108, level:'KET', topic:'Prepositions', q:'I was born ___ July 15th, 2012.', options:['on','in','at'], answer:0, explanation:'具体日期（月+日）用 on' },
{ id:109, level:'KET', topic:'Prepositions', q:'I was born ___ 2012.', options:['in','on','at'], answer:0, explanation:'年份前面用 in' },
{ id:110, level:'KET', topic:'Prepositions', q:'The meeting starts ___ 9:00 AM.', options:['at','on','in'], answer:0, explanation:'具体时刻（几点几分）用 at' },
{ id:111, level:'KET', topic:'Prepositions', q:'The cat is ___ the table.', options:['under','above','over'], answer:0, explanation:'under = 在……下面（接触地面）；over = 在正上方悬空' },
{ id:112, level:'KET', topic:'Prepositions', q:'There is a picture ___ the wall.', options:['on','in','at'], answer:0, explanation:'东西挂在墙上用 on' },
{ id:113, level:'KET', topic:'Prepositions', q:'She goes to school ___ bus.', options:['by','with','on'], answer:0, explanation:'by + 交通工具（无冠词）= 乘……' },
{ id:114, level:'KET', topic:'Prepositions', q:'I have been waiting for you ___ 20 minutes.', options:['for','since','from'], answer:0, explanation:'for + 一段时间 = 持续了多长时间' },
{ id:115, level:'KET', topic:'Prepositions', q:'I have known her ___ we were children.', options:['since','for','from'], answer:0, explanation:'since + 过去时间点/从句 = 自从……以来' },
{ id:116, level:'KET', topic:'Prepositions', q:'The book is ___ the box.', options:['in','into','inside'], answer:0, explanation:'在盒子里面用 in（静态位置）；into 是动态"进入"' },
{ id:117, level:'KET', topic:'Prepositions', q:'We usually go skiing ___ winter.', options:['in','on','at'], answer:0, explanation:'季节前用 in（spring/summer/autumn/winter 都用 in）' },

// ══════════════════════════════════════════
// 14. THERE IS/ARE & HAVE GOT (KET ★★★)
// ══════════════════════════════════════════
{ id:118, level:'KET', topic:'There Be / Have Got', q:'There ___ a lot of people at the concert last night.', options:['were','was','are'], answer:0, explanation:'people 复数，且是过去时间(last night)，用 were' },
{ id:119, level:'KET', topic:'There Be / Have Got', q:'There ___ any milk in the fridge.', options:["isn't","aren't","not"], answer:0, explanation:'milk 不可数作单数，否定用 isn\'t' },
{ id:120, level:'KET', topic:'There Be / Have Got', q:'She ___ got a new bicycle.', options:['has','have','had'], answer:0, explanation:'第三人称单数 She 用 has got（英式口语常用）' },
{ id:121, level:'KET', topic:'There Be / Have Got', q:'___ there any questions?', options:['Are','Is','Do'], answer:0, explanation:'questions 复数，疑问句用 Are there' },
{ id:122, level:'KET', topic:'There Be / Have Got', q:'They haven\'t ___ enough time.', options:['got','get','gets'], answer:0, explanation:'haven\'t got = don\'t have 的英式说法' },
{ id:123, level:'KET', topic:'There Be / Have Got', q:'There is a chair and two tables ___ the room.', options:['in','at','on'], answer:0, explanation:'there be 句型中的位置介词用 in the room' },

// ══════════════════════════════════════════
// 15. QUESTIONS & IMPERATIVES (KET ★★★)
// ══════════════════════════════════════════
{ id:124, level:'KET', topic:'Questions & Imperatives', q:'___ do you live? — I live in Shanghai.', options:['Where','What','When'], answer:0, explanation:'询问地点用 Where' },
{ id:125, level:'KET', topic:'Questions & Imperatives', q:'___ is your birthday? — In May.', options:['When','Where','What time'], answer:0, explanation:'回答是月份(In May)，问什么时候用 When' },
{ id:126, level:'KET', topic:'Questions & Imperatives', q:'___ is that girl? — That\'s my sister.', options:['Who','Whose','Which'], answer:0, explanation:'问人是谁用 Who' },
{ id:127, level:'KET', topic:'Questions & Imperatives', q:'___ book is this? — It\'s Tom\'s.', options:['Whose','Who\'s','Which'], answer:0, explanation:'询问归属关系用 Whose（谁的）' },
{ id:128, level:'KET', topic:'Questions & Imperatives', q:'Please ___ quiet during the exam.', options:['be','being','to be'], answer:0, explanation:'祈使句 Please + 动词原形' },
{ id:129, level:'KET', topic:'Questions & Imperatives', q:'Don\'t ___ late again!', options:['be','to be','being'], answer:0, explanation:'否定祈使句 Don\'t + 动词原形' },

// ══════════════════════════════════════════
// 16. CONDITIONALS (KET) — 条件句 (KET ★★★)
// ══════════════════════════════════════════
{ id:130, level:'KET', topic:'Conditionals', q:'If it rains tomorrow, we ___ stay at home.', options:['will','would','do'], answer:0, explanation:'第一条件句：if + 一般现在时，主句 will + 动词原形（真实条件）' },
{ id:131, level:'KET', topic:'Conditionals', q:'If you heat ice, it ___.', options:['melts','will melt','melted'], answer:0, explanation:'零条件句：if + 一般现在时，主句也用一般现在时（科学事实/规律）' },
{ id:132, level:'KET', topic:'Conditionals', q:'If I ___ time, I will help you.', options:['have','will have','had'], answer:0, explanation:'if 从句用一般现在时表将来（主将从现原则）' },
{ id:133, level:'KET', topic:'Conditionals', q:'If you don\'t study hard, you ___ the exam.', options:["won't pass","don't pass","didn't pass"], answer:0, explanation:'if 从句否定，主句用 won\'t + 动词原形' },
{ id:134, level:'KET', topic:'Conditionals', q:'If water reaches 100 degrees, it ___.', options:['boils','will boil','boiled'], answer:0, explanation:'零条件句：自然规律永远成立，主句也用一般现在时' },
{ id:135, level:'KET', topic:'Conditionals', q:'If she comes, I ___ her the good news.', options:['will tell','tell','told'], answer:0, explanation:'第一条件句，主句用 will tell' },

// ══════════════════════════════════════════
// 17. GERUNDS & INFINITIVES BASIC (KET ★★★)
// ══════════════════════════════════════════
{ id:136, level:'KET', topic:'Gerunds & Infinitives', q:'I enjoy ___ music.', options:['listening to','listen','listened'], answer:0, explanation:'enjoy 后接动名词 V-ing（固定搭配）' },
{ id:137, level:'KET', topic:'Gerunds & Infinitives', q:'She wants ___ a doctor.', options:['to be','being','be'], answer:0, explanation:'want 后接不定式 to + 动词原形' },
{ id:138, level:'KET', topic:'Gerunds & Infinitives', q:'He likes ___ football on weekends.', options:['playing','play','plays'], answer:0, explanation:'like + V-ing 表示习惯性喜欢（也可以用 like to play）' },
{ id:139, level:'KET', topic:'Gerunds & Infinitives', q:'They decided ___ to Paris for holiday.', options:['to go','going','went'], answer:0, explanation:'decide 后接不定式 to do（决定做某事）' },
{ id:140, level:'KET', topic:'Gerunds & Infinitives', q:'I stopped ___ because I was tired.', options:['running','to run','run'], answer:0, explanation:'stop + doing = 停止做某事（stop to do =停下来去做另一件事）' },
{ id:141, level:'KET', topic:'Gerunds & Infinitives', q:'My dad finished ___ work at 6 PM.', options:['working','work','to work'], answer:0, explanation:'finish 后接动名词 V-ing（完成做某事）' },

// ══════════════════════════════════════════
// 18. PRESENT PERFECT VS PAST SIMPLE (PET ★★★★★)
// ══════════════════════════════════════════
{ id:142, level:'PET', topic:'Perfect vs Past Simple', q:'I ___ to Paris last summer.', options:['went','have been','have gone'], answer:0, explanation:'last summer 是明确的过去时间点，用一般过去时 went' },
{ id:143, level:'PET', topic:'Perfect vs Past Simple', q:'I ___ to Paris twice in my life.', options:['have been','went','have gone'], answer:0, explanation:'twice in my life 强调人生经历，与现在有关联，用现在完成时' },
{ id:144, level:'PET', topic:'Perfect vs Past Simple', q:'___ you ever ___ sushi?', options:['Have/tried','Did/try','Do/try'], answer:0, explanation:'ever + 完成时表示"曾经是否做过"' },
{ id:145, level:'PET', topic:'Perfect vs Past Simple', q:'When ___ you arrive here? — At 8 o\'clock this morning.', options:['did','have','are'], answer:0, explanation:'this morning 已经结束的动作，用 did（过去时间）' },
{ id:146, level:'PET', topic:'Perfect vs Past Simple', q:'I ___ my keys. I can\'t find them anywhere!', options:["'ve lost","lost",'losing'], answer:0, explanation:'结果影响到现在（找不到钥匙了），用现在完成时' },
{ id:147, level:'PET', topic:'Perfect vs Past Simple', q:'She ___ three books since January.', options:['has written','wrote','is writing'], answer:0, explanation:'since January 表示从一月至今持续的影响，用完成时' },
{ id:148, level:'PET', topic:'Perfect vs Past Simple', q:'I knew about it because he ___ me before.', options:["'d told",'told','has told'], answer:0, explanation:'before 指在过去某个时间之前，即"过去的过去"，用过去完成时 had told' },
{ id:149, level:'PET', topic:'Perfect vs Past Simple', q:'I ___ already ___ breakfast. I\'m not hungry.', options:['have/had','had/had','did/have'], answer:0, explanation:'already + 完成时，表示动作已完成并对现在产生影响' },
{ id:150, level:'PET', topic:'Perfect vs Past Simple', q:'Shakespeare ___ many famous plays.', options:['wrote','has written','writes'], answer:0, explanation:'莎士比亚已故去，其作品属于历史事实，用一般过去时' },
{ id:151, level:'PET', topic:'Perfect vs Past Simple', q:'It\'s the first time I ___ here.', options:["'ve been",'was','went'], answer:0, explanation:'It\'s the first time + 完成时是固定搭配' },

// ══════════════════════════════════════════
// 19. PRESENT PERFECT CONTINUOUS (PET ★★★)
// ══════════════════════════════════════════
{ id:152, level:'PET', topic:'Present Perfect Continuous', q:'I ___ for two hours and I\'m very tired.', options:["'ve been running",'run','ran'], answer:0, explanation:'强调动作从过去开始一直持续到现在（还在继续），用完成进行时' },
{ id:153, level:'PET', topic:'Present Perfect Continuous', q:'She ___ learning Chinese since 2020.', options:['has been','has been learning','is learning'], answer:1, explanation:'since 2020 + 强调过程持续，用 has been + V-ing' },
{ id:154, level:'PET', topic:'Present Perfect Continuous', q:'How long ___ you ___ English?', options:['have/been studying','do/study','are/studying'], answer:0, explanation:'how long 问持续时间，强调过程用完成进行时' },
{ id:155, level:'PET', topic:'Present Perfect Continuous', q:'It\'s been raining all day. The ground ___.', options:['is wet','was wet','has been wet'], answer:0, explanation:'雨停了但结果还在，用一般现在时描述当前状态' },

// ══════════════════════════════════════════
// 20. PAST PERFECT — 过去完成时 (PET ★★★★)
// ══════════════════════════════════════════
{ id:156, level:'PET', topic:'Past Perfect', q:'When I arrived, the train already ___.', options:['had left','has left','left'], answer:0, explanation:'到达之前火车已经离开 → "过去的过去"用过去完成时 had + done' },
{ id:157, level:'PET', topic:'Past Perfect', q:'She said she ___ that movie before.', options:["'d seen",'seen','saw'], answer:0, explanation:'在她说之前就已经看过 → 过去的过去，用 had seen' },
{ id:158, level:'PET', topic:'Past Perfect', q:'After I ___ my homework, I watched TV.', options:['had finished','finished','have finished'], answer:0, explanation:'先完成作业才看电视 → 先发生的事用过去完成时' },
{ id:159, level:'PET', topic:'Past Perfect', q:'By the time he arrived, everyone ___.', options:['had left','left','has left'], answer:0, explanation:'by the time + 过去时间，主句用过去完成时' },
{ id:160, level:'PET', topic:'Past Perfect', q:'I realized I ___ my phone at home.', options:["'d left",'left','have left'], answer:0, explanation:'意识到的时候手机已经落在家了 → "过去的过去"用 had left' },
{ id:161, level:'PET', topic:'Past Perfect', q:'She felt nervous because she ___ such a big audience before.', options:["'d never faced",'never faced','hasn\'t faced'], answer:0, explanation:'从未面对过这么大的观众（在她感到紧张之前），用过去完成时' },

// ══════════════════════════════════════════
// 21. PASSIVE VOICE — 被动语态 (PET ★★★★★)
// ══════════════════════════════════════════
{ id:162, level:'PET', topic:'Passive Voice', q:'English ___ in many countries around the world.', options:['is spoken','speaks','is speaking'], answer:0, explanation:'英语被说（被动语态），一般现在时被动：is/am/are + done' },
{ id:163, level:'PET', topic:'Passive Voice', q:'This bridge was ___ in 1990.', options:['built','build','building'], answer:0, explanation:'桥是被建造的，过去时被动 was/were + done' },
{ id:164, level:'PET', topic:'Passive Voice', q:'The window ___ by someone yesterday.', options:['was broken','broke','broken'], answer:0, explanation:'窗户被人打破 → 过去时被动 was + done' },
{ id:165, level:'PET', topic:'Passive Voice', q:'The project ___ completed by our team next month.', options:['will be','is','has been'], answer:0, explanation:'将来时被动 will be + done' },
{ id:166, level:'PET', topic:'Passive Voice', q:'Many houses ___ destroyed by the storm last night.', options:['were','are','had been'], answer:0, explanation:'许多房子被摧毁，复数 + 过去时被动 were + done' },
{ id:167, level:'PET', topic:'Passive Voice', q:'This song ___ by a famous singer.', options:['was sung','sang','sung'], answer:0, explanation:'歌是被唱出来的，sing 的过去分词是 sung' },
{ id:168, level:'PET', topic:'Passive Voice', q:'The letter should ___ sent immediately.', options:['be','is','been'], answer:0, explanation:'情态动词被动 should be + done' },
{ id:169, level:'PET', topic:'Passive Voice', q:'All the tickets ___ sold out within an hour!', options:['were','are','had been'], answer:0, explanation:'票在一小时内卖光了（已完成的过去动作）→ were sold out' },
{ id:170, level:'PET', topic:'Passive Voice', q:'The cake ___ by my grandma for my birthday.', options:['was made','made','is making'], answer:0, explanation:'蛋糕是被奶奶做的 → was made（make 的过去分词是 made）' },
{ id:171, level:'PET', topic:'Passive Voice', q:'The match ___ cancelled because of heavy rain.', options:['was','is','has been'], answer:0, explanation:'比赛因大雨被取消 → was canceled/cancelled' },

// ══════════════════════════════════════════
// 22. REPORTED SPEECH — 间接引语 (PET ★★★★)
// ══════════════════════════════════════════
{ id:172, level:'PET', topic:'Reported Speech', q:'She said, "I am tired."\nShe said that she ___ tired.', options:['was','is','had been'], answer:0, explanation:'转述时，一般现在时 am → 过去时 was（时态后退一步）' },
{ id:173, level:'PET', topic:'Reported Speech', q:'He told me, "I will call you."\nHe told me that he ___ me.', options:['would call','will call','called'], answer:0, explanation:'will 在转述中变为 would' },
{ id:174, level:'PET', topic:'Reported Speech', q:'She asked, "Where are you going?"\nShe asked where I ___.', options:['was going','am going','went'], answer:0, explanation:'直接引语变为间接引语，are going → was going' },
{ id:175, level:'PET', topic:'Reported Speech', q:'He said, "I have finished the report."\nHe said that he ___ the report.', options:["'d finished",'finished','has finished'], answer:0, explanation:'have finished 在转述中变为 had finished' },
{ id:176, level:'PET', topic:'Reported Speech', q:'They told us, "We are leaving now."\nThey told us that they ___ then.', options:['were leaving','are leaving','left'], answer:0, explanation:'now 变为 then，are leaving 变为 were leaving' },
{ id:177, level:'PET', topic:'Reported Speech', q:'She asked me, "Do you like coffee?"\nShe asked if I ___ coffee.', options:['liked','like','was liking'], answer:0, explanation:'一般疑问句转述：Do you like → if/whether I liked（时态后退）' },
{ id:178, level:'PET', topic:'Reported Speech', q:'He promised, "I won\'t forget."\nHe promised that he ___ forget.', options:["wouldn't","won't","didn't"], answer:0, explanation:"won't 在间接引语中变为 wouldn't" },
{ id:179, level:'PET', topic:'Reported Speech', q:'Mom said, "I bought this dress yesterday."\nMom said that she ___ that dress ___.', options:['bought/the day before','bought/yesterday','had bought/tomorrow'], answer:0, explanation:'yesterday 在转述中变为 the day before' },
{ id:180, level:'PET', topic:'Reported Speech', q:'"I can swim," said Tom.\nTom said that he ___ swim.', options:['could','can','is able to'], answer:0, explanation:'can 在转述中变为 could' },
{ id:181, level:'PET', topic:'Reported Speech', q:'She said, "I must go home."\nShe said that she ___ go home.', options:['had to','must','needed'], answer:0, explanation:'must 在转述中通常变为 had to（表示义务）' },

// ══════════════════════════════════════════
// 23. CONDITIONALS (PET) — 条件句进阶 (PET ★★★★)
// ══════════════════════════════════════════
{ id:182, level:'PET', topic:'Conditionals Advanced', q:'If I ___ rich, I would travel around the world.', options:['were','am','was'], answer:0, explanation:'第二条件句：虚拟语气，if 从句用一般过去时（be 统一用 were）' },
{ id:183, level:'PET', topic:'Conditionals Advanced', q:'If I ___ you, I would accept the offer.', options:['were','am','be'], answer:0, explanation:'If I were you 是虚拟语气固定用法（即使口语说 If I was 也行，考试用 were）' },
{ id:184, level:'PET', topic:'Conditionals Advanced', q:'If she studied harder, she ___ better grades.', options:['would get','will get','got'], answer:0, explanation:'第二条件句：if + 过去时，主句 would + 动词原形（假设/非真实）' },
{ id:185, level:'PET', topic:'Conditionals Advanced', q:'Unless it rains, we ___ have a picnic tomorrow.', options:['will','would','won\'t'], answer:0, explanation:'unless = if...not，遵循主将从现原则，主句用 will' },
{ id:186, level:'PET', topic:'Conditionals Advanced', q:'I wish I ___ fly like a bird!', options:['could','can','will'], answer:0, explanation:'wish + 虚拟语气，与现在事实相反用 could（can 的过去式形式）' },
{ id:187, level:'PET', topic:'Conditionals Advanced', q:'If he had known, he ___ helped us.', options:["'d have helped",'helped','would help'], answer:0, explanation:'第三条件句：与过去事实相反 → if had + done, 主句 would have + done' },
{ id:188, level:'PET', topic:'Conditionals Advanced', q:'If I had more time, I ___ learn another language.', options:['would','will','did'], answer:0, explanation:'第二条件句：假设现在的情况（实际上没更多时间），主句 would + 原形' },
{ id:189, level:'PET', topic:'Conditionals Advanced', q:'I ___ go to the party if you came with me.', options:['would','will','did'], answer:0, explanation:'第二条件句：假设你陪我一起去的话我就去了（虚拟情况）' },

// ══════════════════════════════════════════
// 24. RELATIVE CLAUSES — 定语从句 (PET ★★★★)
// ══════════════════════════════════════════
{ id:190, level:'PET', topic:'Relative Clauses', q:'The man ___ lives next door is a doctor.', options:['who','which','what'], answer:0, explanation:'指人作主语用 who（先行词 man 是人）' },
{ id:191, level:'PET', topic:'Relative Clauses', q:'This is the book ___ I read last week.', options:['that/which','who','where'], answer:0, explanation:'指物作宾语用 that 或 which' },
{ id:192, level:'PET', topic:'Relative Clauses', q:'The place ___ we met was a café.', options:['where','which','who'], answer:0, explanation:'指地点作状语用 where (= in which)' },
{ id:193, level:'PET', topic:'Relative Clauses', q:'The girl ___ mother is a teacher is my classmate.', options:['whose','who','which'], answer:0, explanation:'表示所属关系（谁的妈妈）用 whose' },
{ id:194, level:'PET', topic:'Relative Clauses', q:'Yesterday was the day ___ I passed the exam.', options:['when','which','where'], answer:0, explanation:'指时间作状语用 when (= on which)' },
{ id:195, level:'PET', topic:'Relative Clauses', q:'I know a boy ___ can speak four languages.', options:['who','which','whom'], answer:0, explanation:'指人作主语用 who' },
{ id:196, level:'PET', topic:'Relative Clauses', q:'The museum ___ we visited was amazing.', options:['that/which','where','who'], answer:0, explanation:'visit 的宾语（博物馆），指物用 that/which' },
{ id:197, level:'PET', topic:'Relative Clauses', q:'This is the reason ___ he was late.', options:['why/that','which','when'], answer:0, explanation:'reason 后面用 why 或 that 引导原因解释' },

// ══════════════════════════════════════════
// 25. QUESTION TAGS — 反意疑问句 (PET ★★★)
// ══════════════════════════════════════════
{ id:198, level:'PET', topic:'Question Tags', q:'You are coming, ___ ?',options:['aren\'t you','are you','don\'t you'], answer:0, explanation:'前肯后否：You are coming → aren\'t you?' },
{ id:199, level:'PET', topic:'Question Tags', q:'She can\'t swim, ___ ?',options: ['can she','can\'t she','doesn\'t she'], answer:0, explanation:'前否后肯：She can\'t swim → can she?' },
{ id:200, level:'PET', topic:'Question Tags', q:'It\'s a beautiful day, ___ ?',options: ["isn't it","is it","doesn't it"], answer:0, explanation:'It\'s... → isn\'t it?（最常用的反义疑问句尾）' },
{ id:201, level:'PET', topic:'Question Tags', q:'They went to London, ___ ?',options: ['didn\'t they','did they','don\'t they'], answer:0, explanation:'过去时 went → didn\'t they?（前肯后否）' },
{ id:202, level:'PET', topic:'Question Tags', q:'You won\'t tell anyone, ___ ?',options:['will you','won\'t you','do you'], answer:0, explanation:"won't → will you?（前否后肯）" },
{ id:203, level:'PET', topic:'Question Tags', q:'Let\'s go shopping, ___ ?',options: ['shall we','will we','don\'t we'], answer:0, explanation:'Let\'s... → shall we?（提议一起做某事）' },

// ══════════════════════════════════════════
// 26. MODALS OF DEDUCTION — 推测情态动词 (PET ★★★)
// ══════════════════════════════════════════
{ id:204, level:'PET', topic:'Modals of Deduction', q:'She looks very pale. She ___ be sick.', options:['must','can','will'], answer:0, explanation:'must + 原形 = 很可能/一定（基于证据的强烈推测）' },
{ id:205, level:'PET', topic:'Modals of Deduction', q:'That can\'t be true! He ___ have lied to us.', options:['must','can\'t','might'], answer:1, explanation:"can't + have done = 不可能做了某事（对过去的强烈否定推测）" },
{ id:206, level:'PET', topic:'Modals of Deduction', q:'The lights are off. They ___ be at home.', options:["can't",'must','should'], answer:0, explanation:'灯灭了 → 不可能在家里 → can\'t' },
{ id:207, level:'PET', topic:'Modals of Deduction', q:'You should ___ earlier. Now we missed the train.', options:['have left','leave','left'], answer:0, explanation:'should have done = 本应该做而没做（责备/遗憾）' },
{ id:208, level:'PET', topic:'Modals of Deduction', q:'She might ___ forgotten about the meeting.', options:['have','be','has'], answer:0, explanation:'might have done = 可能已经做了（对过去的不确定推测）' },
{ id:209, level:'PET', topic:'Modals of Deduction', q:'He ___ be at the office. His car is still in the parking lot.', options:['must',"can't",'might'], answer:0, explanation:'车还在停车场 → 他一定在办公室 → must' },

// ══════════════════════════════════════════
// 27. GERUNDS & INFINITIVES EXTENDED (PET ★★★)
// ══════════════════════════════════════════
{ id:210, level:'PET', topic:'Gerunds & Infinitives', q:'I remember ___ him at the party last night.', options:['meeting','meet','met'], answer:0, explanation:'remember + doing = 记得做过某事（已做过）' },
{ id:211, level:'PET', topic:'Gerunds & Infinitives', q:'I forgot ___ the door. Luckily, it wasn\'t locked!', options:['to lock','locking','locked'], answer:0, explanation:'forget to do = 忘记要做（还没做）；forget doing = 忘记做过（已做但不记得了）' },
{ id:212, level:'PET', topic:'Gerunds & Infinitives', q:'She suggested ___ to the cinema together.', options:['going','to go','go'], answer:0, explanation:'suggest + doing（suggest 不接 to do）' },
{ id:213, level:'PET', topic:'Gerunds & Infinitives', q:'The teacher told us ___ quietly.', options:['to be','being','be'], answer:0, explanation:'tell sb. to do sth.（告诉某人做某事）' },
{ id:214, level:'PET', topic:'Gerunds & Infinitives', q:'He avoided ___ eye contact with me.', options:['making','to make','make'], answer:0, explanation:'avoid + doing（避免做某事，avoid 只接动名词）' },
{ id:215, level:'PET', topic:'Gerunds & Infinitives', q:'I look forward to ___ you soon!', options:['seeing','see','seen'], answer:0, explanation:'look forward to + doing（to 是介词，不是不定式符号！）' },

// ══════════════════════════════════════════
// 28. CONNECTING WORDS — 连词/连接词 (PET ★★★)
// ══════════════════════════════════════════
{ id:216, level:'PET', topic:'Connecting Words', q:'___ it was raining, we still went out.', options:['Although','Because','So'], answer:0, explanation:'Although 让步状语从句（虽然……但是）' },
{ id:217, level:'PET', topic:'Connecting Words', q:'He studied hard, ___ he failed the exam.', options:['but','so','because'], answer:0, explanation:'前后转折用 but' },
{ id:218, level:'PET', topic:'Connecting Words', q:'She was tired ___ she stayed up late.', options:['because','but','although'], answer:0, explanation:'因果关系的后半部分用 because' },
{ id:219, level:'PET', topic:'Connecting Words', q:'He worked hard, ___ he got promoted quickly.', options:['so','but','however'], answer:0, explanation:'因果关系：因为努力工作，所以升职快 → so' },
{ id:220, level:'PET', topic:'Connecting Words', q:'______ the weather was bad, the flight was cancelled.', options:['Since','But','And'], answer:0, explanation:'Since = 因为/既然（原因状语从句）' },
{ id:221, level:'PET', topic:'Connecting Words', q:'I want to go, ______ I don\'t have enough money.', options:['but','and','or'], answer:0, explanation:'想去做但没有钱 → 转折用 but' },

// ══════════════════════════════════════════
// 29. EMBEDDED QUESTIONS — 嵌套/间接疑问句 (PET ★★★)
// ══════════════════════════════════════════
{ id:222, level:'PET', topic:'Embedded Questions', q:'I don\'t know where ___.', options:['he is','is he','does he'], answer:0, explanation:'嵌入疑问句用陈述语序（主语在前，谓语在后），不用倒装' },
{ id:223, level:'PET', topic:'Embedded Questions', q:'Can you tell me what time ___ ?',options: ['it is','is it','it was'], answer:0, explanation:'间接疑问句保持陈述语序 it is（不是 is it）' },
{ id:224, level:'PET', topic:'Embedded Questions', q:'Do you remember how we ___ to the station?', options:['got','did get','get'], answer:0, explanation:'how we got（陈述语序：we + got）' },
{ id:225, level:'PET', topic:'Embedded Questions', q:'I wonder why she ___ angry with me.', options:['was','is','did'], answer:0, explanation:'wonder 后接从句用陈述语序 she was（不是 was she）' },

// ══════════════════════════════════════════
// 30. PHRASAL VERBS — 动词短语 (PET/KET ★★★)
// ══════════════════════════════════════════
{ id:226, level:'PET', topic:'Phrasal Verbs', q:'Please turn ___ the light before you leave.', options:['off','on','up'], answer:0, explanation:'turn off = 关掉（电器/灯）' },
{ id:227, level:'PET', topic:'Phrasal Verbs', q:'Can you look ___ this word in the dictionary?', options:['up','after','for'], answer:0, explanation:'look up = 查阅（字典/信息）' },
{ id:228, level:'PET', topic:'Phrasal Verbs', q:'My grandmother brought me ___.', options:['up','out','away'], answer:0, explanation:'bring up = 抚养长大' },
{ id:229, level:'PET', topic:'Phrasal Verbs', q:'We ran ___ of milk. We need to buy more.', options:['out','up','into'], answer:0, explanation:'run out of = 用完/耗尽' },
{ id:230, level:'PET', topic:'Phrasal Verbs', q:'He gave ___ smoking last month.', options:['up','in','off'], answer:0, explanation:'give up = 放弃/戒除' },
{ id:231, level:'PET', topic:'Phrasal Verbs', q:'Please put ___ your coat. It\'s cold outside.', options:['on','off','away'], answer:0, explanation:'put on = 穿上/戴上' },
{ id:232, level:'PET', topic:'Phrasal Verbs', q:'She takes ___ her mother. They both love reading.', options:['after','up','off'], answer:0, explanation:'take after = 像/长得像（性格或外貌）' },

{ id:233, level:"KET", topic:"Present Simple", q:"He ___ coffee every morning.", options:["drink","drinks","drinking"], answer:1, explanation:"He 是第三人称单数，动词加 -s：drinks" },
{ id:234, level:"KET", topic:"Present Simple", q:"We ___ to music when we study.", options:["listen","listens","listening"], answer:0, explanation:"We 是复数，用原形 listen" },
{ id:235, level:"KET", topic:"Present Simple", q:"___ she work in a bank?", options:["Do","Does","Is"], answer:1, explanation:"she 是第三人称单数，疑问句用 Does" },
{ id:236, level:"KET", topic:"Present Simple", q:"The earth ___ around the sun.", options:["go","goes","is going"], answer:1, explanation:"客观真理用一般现在时，earth 单数加 -s" },
{ id:237, level:"KET", topic:"Present Simple", q:"I ___ like spicy food.", options:["don't","doesn't","am not"], answer:0, explanation:"I 用 don't + 动词原形" },
{ id:238, level:"KET", topic:"Present Simple", q:"My sister ___ the piano very well.", options:["play","plays","playing"], answer:1, explanation:"sister 单数，动词加 -s" },
{ id:239, level:"KET", topic:"Present Simple", q:"___ your parents speak French?", options:["Do","Does","Are"], answer:0, explanation:"parents 复数，疑问句用 Do" },
{ id:240, level:"KET", topic:"Present Simple", q:"The shop ___ at 9 a.m.", options:["open","opens","opening"], answer:1, explanation:"shop 单数，动词加 -s" },
{ id:241, level:"KET", topic:"Present Continuous", q:"I ___ a book right now.", options:["read","am reading","reads"], answer:1, explanation:"right now 此刻正在读，用 am reading" },
{ id:242, level:"KET", topic:"Present Continuous", q:"The children ___ in the garden.", options:["play","are playing","plays"], answer:1, explanation:"children 复数，用 are playing" },
{ id:243, level:"KET", topic:"Present Continuous", q:"He ___ a shower at the moment.", options:["has","is having","have"], answer:1, explanation:"此刻正在洗澡，用 is having" },
{ id:244, level:"KET", topic:"Present Continuous", q:"Why ___ you ___ ?", options:["are/crying","do/cry","is/crying"], answer:0, explanation:"现在进行时特殊疑问：are + 主语 + doing" },
{ id:245, level:"KET", topic:"Present Continuous", q:"Look! The dog ___ after the cat.", options:["run","runs","is running"], answer:2, explanation:"Look! 提示正在发生，用 is running" },
{ id:246, level:"KET", topic:"Present Continuous", q:"We ___ dinner now, call later.", options:["have","are having","having"], answer:1, explanation:"now 提示正在进行，用 are having" },
{ id:247, level:"KET", topic:"Past Simple", q:"I ___ a letter to my grandma last week.", options:["write","wrote","written"], answer:1, explanation:"write 的过去式是不规则 wrote" },
{ id:248, level:"KET", topic:"Past Simple", q:"They ___ happy after the game.", options:["are","were","was"], answer:1, explanation:"主语 they 复数 + 过去时间，用 were" },
{ id:249, level:"KET", topic:"Past Simple", q:"She ___ a beautiful song at the party.", options:["sings","sang","sung"], answer:1, explanation:"sing 的过去式是 sang" },
{ id:250, level:"KET", topic:"Past Simple", q:"We ___ not ___ to the meeting.", options:["do/go","did/go","were/go"], answer:1, explanation:"过去时否定：didn't + go（原形）" },
{ id:251, level:"KET", topic:"Past Simple", q:"He ___ his leg when he was seven.", options:["break","broke","broken"], answer:1, explanation:"break 的过去式是 broke" },
{ id:252, level:"KET", topic:"Past Simple", q:"___ you watch the match on TV?", options:["Did","Do","Were"], answer:0, explanation:"过去时疑问句用 Did" },
{ id:253, level:"KET", topic:"Past Simple", q:"The train ___ late yesterday.", options:["is","was","were"], answer:1, explanation:"train 单数 + yesterday，用 was" },
{ id:254, level:"KET", topic:"Past Simple", q:"I ___ my friend at the station two hours ago.", options:["meet","met","meeting"], answer:1, explanation:"meet 的过去式是 met" },
{ id:255, level:"PET", topic:"Present Perfect", q:"I ___ never ___ to Japan.", options:["have/been","has/been","have/went"], answer:0, explanation:"I 用 have，never 搭配 been（去过）" },
{ id:256, level:"PET", topic:"Present Perfect", q:"She ___ just ___ her lunch.", options:["has/finished","have/finished","has/finish"], answer:0, explanation:"she 第三人称单数用 has，just 用现在完成时 finished" },
{ id:257, level:"PET", topic:"Present Perfect", q:"We ___ already ___ the film.", options:["have/seen","has/seen","have/saw"], answer:0, explanation:"already 常用现在完成时：have seen" },
{ id:258, level:"PET", topic:"Present Perfect", q:"___ you ever ___ sushi?", options:["Have/eaten","Has/eaten","Have/ate"], answer:0, explanation:"you 用 Have，ever 用完成时 eaten" },
{ id:259, level:"PET", topic:"Present Perfect", q:"He ___ lost his keys three times this week.", options:["has","have","is"], answer:0, explanation:"this week 与现在完成时连用，he 用 has" },
{ id:260, level:"PET", topic:"Present Perfect", q:"They ___ not ___ the news yet.", options:["have/heard","has/heard","have/hear"], answer:0, explanation:"yet 常用于否定完成时：have not heard" },
{ id:261, level:"PET", topic:"Present Perfect", q:"I ___ just ___ my homework, I can play now.", options:["have/finished","has/finished","have/finish"], answer:0, explanation:"just 用现在完成时 have finished" },
{ id:262, level:"PET", topic:"Present Perfect", q:"How long ___ you ___ here?", options:["have/lived","has/lived","have/live"], answer:0, explanation:"How long 问持续时间，用现在完成时 have lived" },
{ id:263, level:"KET", topic:"Past Continuous", q:"I ___ TV when you called.", options:["watched","was watching","am watching"], answer:1, explanation:"when + 短动作，长动作用过去进行时 was watching" },
{ id:264, level:"KET", topic:"Past Continuous", q:"They ___ football at 5 p.m. yesterday.", options:["played","were playing","play"], answer:1, explanation:"具体过去时间点正在做，用 were playing" },
{ id:265, level:"KET", topic:"Past Continuous", q:"She ___ a book when the phone rang.", options:["read","was reading","reads"], answer:1, explanation:"rang 是短动作，read 用过去进行时 was reading" },
{ id:266, level:"KET", topic:"Past Continuous", q:"What ___ you ___ at 8 o'clock?", options:["were/doing","are/doing","did/do"], answer:0, explanation:"过去具体时间问正在做什么，用 were doing" },
{ id:267, level:"KET", topic:"Past Continuous", q:"He ___ not ___ when I arrived.", options:["was/sleeping","is/sleeping","were/sleeping"], answer:0, explanation:"过去进行时否定：was not sleeping" },
{ id:268, level:"KET", topic:"Past Continuous", q:"We ___ dinner when the guest came.", options:["had","were having","have"], answer:1, explanation:"came 是短动作，had dinner 用过去进行时 were having" },
{ id:269, level:"KET", topic:"Future Forms", q:"I ___ help you tomorrow.", options:["will","am","was"], answer:0, explanation:"将来预测/承诺用 will + 动词原形" },
{ id:270, level:"KET", topic:"Future Forms", q:"Look at the sky! It ___ rain.", options:["is going to","will","goes to"], answer:0, explanation:"有迹象（乌云）用 be going to 表即将发生" },
{ id:271, level:"KET", topic:"Future Forms", q:"We ___ meet at 7 p.m.", options:["are going to","will to","going to"], answer:0, explanation:"计划用 be going to meet" },
{ id:272, level:"KET", topic:"Future Forms", q:"She ___ be ten next year.", options:["will","is going to","was"], answer:0, explanation:"将来事实用 will be" },
{ id:273, level:"KET", topic:"Future Forms", q:"I think it ___ sunny tomorrow.", options:["is","will be","was"], answer:1, explanation:"预测天气用 will be" },
{ id:274, level:"KET", topic:"Future Forms", q:"He ___ call you when he arrives.", options:["will","is going to","going"], answer:0, explanation:"when 引导的时间状语从句，主句用 will" },
{ id:275, level:"KET", topic:"Future Forms", q:"We ___ a party next Saturday.", options:["have","are having","will have"], answer:1, explanation:"已安排好的近期活动可用现在进行时表将来 are having" },
{ id:276, level:"KET", topic:"Future Forms", q:"___ you ___ to the concert with us?", options:["Will/come","Are/coming","Do/come"], answer:0, explanation:"意愿邀请用 Will you come" },
{ id:277, level:"KET", topic:"Articles", q:"I saw ___ elephant at the zoo.", options:["a","an","the"], answer:1, explanation:"elephant 以元音音素开头，用 an" },
{ id:278, level:"KET", topic:"Articles", q:"She is ___ honest student.", options:["a","an","the"], answer:1, explanation:"honest 的 h 不发音，以元音开头用 an" },
{ id:279, level:"KET", topic:"Articles", q:"Can you pass me ___ salt, please?", options:["a","an","the"], answer:2, explanation:"特指桌上的盐用 the" },
{ id:280, level:"KET", topic:"Articles", q:"He wants to be ___ engineer.", options:["a","an","the"], answer:0, explanation:"engineer 以辅音音素开头用 a" },
{ id:281, level:"KET", topic:"Articles", q:"___ sun is very hot today.", options:["A","An","The"], answer:2, explanation:"世界上独一无二的事物用 the sun" },
{ id:282, level:"KET", topic:"Articles", q:"I eat ___ apple every day.", options:["a","an","the"], answer:1, explanation:"apple 元音开头，泛指用 an" },
{ id:283, level:"KET", topic:"Articles", q:"She plays ___ piano beautifully.", options:["a","an","the"], answer:2, explanation:"乐器前加 the：play the piano" },
{ id:284, level:"KET", topic:"Articles", q:"We visited ___ school yesterday.", options:["a","an","the"], answer:2, explanation:"特指那所学校用 the" },
{ id:285, level:"KET", topic:"Prepositions", q:"The book is ___ the table.", options:["in","on","at"], answer:1, explanation:"在桌子表面用 on" },
{ id:286, level:"KET", topic:"Prepositions", q:"I live ___ Beijing.", options:["in","on","at"], answer:0, explanation:"大城市前用 in" },
{ id:287, level:"KET", topic:"Prepositions", q:"She arrived ___ the station at 8.", options:["in","on","at"], answer:2, explanation:"小地点/站点用 at the station" },
{ id:288, level:"KET", topic:"Prepositions", q:"The cat is hiding ___ the bed.", options:["under","on","over"], answer:0, explanation:"在床下面用 under" },
{ id:289, level:"KET", topic:"Prepositions", q:"We go to school ___ Monday.", options:["in","on","at"], answer:1, explanation:"星期前用 on" },
{ id:290, level:"KET", topic:"Prepositions", q:"He was born ___ 2015.", options:["in","on","at"], answer:0, explanation:"年份前用 in" },
{ id:291, level:"KET", topic:"Prepositions", q:"The picture is ___ the wall.", options:["on","in","at"], answer:0, explanation:"挂在墙上用 on the wall" },
{ id:292, level:"KET", topic:"Prepositions", q:"She is good ___ math.", options:["in","at","on"], answer:1, explanation:"be good at 擅长（固定搭配）" },
{ id:293, level:"KET", topic:"Pronouns", q:"___ is your brother? He is over there.", options:["Who","Whom","Which"], answer:0, explanation:"问人是谁用 Who" },
{ id:294, level:"KET", topic:"Pronouns", q:"This is my book. Where is ___?", options:["your","yours","you"], answer:1, explanation:"名词性物主代词 yours = your book" },
{ id:295, level:"KET", topic:"Pronouns", q:"We cooked the meal ___.", options:["ourselves","ourself","our"], answer:0, explanation:"主语 we 反身用 ourselves" },
{ id:296, level:"KET", topic:"Pronouns", q:"___ of the students passed the exam.", options:["Both","All","Either"], answer:1, explanation:"三者及以上都用 All（students 复数）" },
{ id:297, level:"KET", topic:"Pronouns", q:"She taught ___ to swim.", options:["her","hers","herself"], answer:2, explanation:"主语 she 给自己教，反身代词 herself" },
{ id:298, level:"KET", topic:"Pronouns", q:"That bike is ___.", options:["my","mine","me"], answer:1, explanation:"名词性物主代词 mine = my bike" },
{ id:299, level:"KET", topic:"Comparatives", q:"This box is ___ than that one.", options:["heavy","heavier","heaviest"], answer:1, explanation:"两者比较用比较级 heavier" },
{ id:300, level:"KET", topic:"Comparatives", q:"Tom is ___ than his brother.", options:["tall","taller","tallest"], answer:1, explanation:"两者比身高用 taller" },
{ id:301, level:"KET", topic:"Comparatives", q:"Today is ___ than yesterday.", options:["cold","colder","coldest"], answer:1, explanation:"比较天气用 colder" },
{ id:302, level:"KET", topic:"Comparatives", q:"My bag is ___ than yours.", options:["big","bigger","biggest"], answer:1, explanation:"重读闭音节双写 g：bigger" },
{ id:303, level:"KET", topic:"Comparatives", q:"She is the ___ girl in the class.", options:["smart","smarter","smartest"], answer:2, explanation:"三者以上最高级 smartest" },
{ id:304, level:"KET", topic:"Comparatives", q:"This film is ___ than the book.", options:["good","better","best"], answer:1, explanation:"good 的比较级是不规则 better" },
{ id:305, level:"KET", topic:"Comparatives", q:"He runs ___ than me.", options:["fast","faster","fastest"], answer:1, explanation:"fast 规则比较级 faster" },
{ id:306, level:"KET", topic:"Comparatives", q:"Which is ___, the cat or the dog?", options:["small","smaller","smallest"], answer:1, explanation:"两者比较用 smaller" },
{ id:307, level:"KET", topic:"Modal Verbs", q:"You ___ smoke here. It's not allowed.", options:["mustn't","don't have to","shouldn't"], answer:0, explanation:"禁止用 mustn't（不准）" },
{ id:308, level:"KET", topic:"Modal Verbs", q:"___ I open the window?", options:["Can","Must","Will"], answer:0, explanation:"请求许可用 Can I" },
{ id:309, level:"KET", topic:"Modal Verbs", q:"You ___ wear a seatbelt. It's the law.", options:["must","can","may"], answer:0, explanation:"义务/规定用 must" },
{ id:310, level:"KET", topic:"Modal Verbs", q:"He ___ be tired; he worked all night.", options:["must","can","may"], answer:0, explanation:"肯定推测用 must（一定）" },
{ id:311, level:"KET", topic:"Modal Verbs", q:"You ___ worry, I'll help you.", options:["don't have to","mustn't","can't"], answer:0, explanation:"不必担心用 don't have to" },
{ id:312, level:"KET", topic:"Modal Verbs", q:"___ you pass the salt, please?", options:["Could","Must","Would"], answer:0, explanation:"礼貌请求用 Could you" },
{ id:313, level:"KET", topic:"Modal Verbs", q:"We ___ go now or we'll be late.", options:["should","must to","can to"], answer:0, explanation:"建议用 should + 原形" },
{ id:314, level:"KET", topic:"Modal Verbs", q:"She ___ speak three languages.", options:["can","must","should"], answer:0, explanation:"能力用 can（能）" },
{ id:315, level:"PET", topic:"Gerunds & Infinitives", q:"I enjoy ___ books.", options:["read","reading","to read"], answer:1, explanation:"enjoy + doing" },
{ id:316, level:"PET", topic:"Gerunds & Infinitives", q:"She wants ___ a doctor.", options:["be","being","to be"], answer:2, explanation:"want + to do" },
{ id:317, level:"PET", topic:"Gerunds & Infinitives", q:"It's difficult ___ this puzzle.", options:["solve","solving","to solve"], answer:2, explanation:"It's + adj. + to do" },
{ id:318, level:"PET", topic:"Gerunds & Infinitives", q:"He stopped ___ TV and went to bed.", options:["watch","watching","to watch"], answer:1, explanation:"stop doing 停止做某事" },
{ id:319, level:"PET", topic:"Gerunds & Infinitives", q:"We decided ___ by train.", options:["travel","travelling","to travel"], answer:2, explanation:"decide + to do" },
{ id:320, level:"PET", topic:"Gerunds & Infinitives", q:"Do you mind ___ the window?", options:["open","opening","to open"], answer:1, explanation:"mind + doing" },
{ id:321, level:"PET", topic:"Gerunds & Infinitives", q:"They hope ___ the match.", options:["win","winning","to win"], answer:2, explanation:"hope + to do" },
{ id:322, level:"PET", topic:"Gerunds & Infinitives", q:"My father suggested ___ early.", options:["leave","leaving","to leave"], answer:1, explanation:"suggest + doing" },
{ id:323, level:"PET", topic:"Passive Voice", q:"English ___ all over the world.", options:["speaks","is spoken","spoke"], answer:1, explanation:"被动：be + 过去分词，English 单数用 is spoken" },
{ id:324, level:"PET", topic:"Passive Voice", q:"The letter ___ by Tom yesterday.", options:["was written","wrote","is written"], answer:0, explanation:"过去被动：was written" },
{ id:325, level:"PET", topic:"Passive Voice", q:"The house ___ every week.", options:["cleans","is cleaned","cleaned"], answer:1, explanation:"习惯性被动用 is cleaned" },
{ id:326, level:"PET", topic:"Passive Voice", q:"A new bridge ___ built next year.", options:["is","will be","was"], answer:1, explanation:"将来被动：will be built" },
{ id:327, level:"PET", topic:"Passive Voice", q:"The window ___ broken by the wind.", options:["was","is","were"], answer:0, explanation:"已发生被动用 was broken" },
{ id:328, level:"PET", topic:"Passive Voice", q:"Coffee ___ in many countries.", options:["grows","is grown","grew"], answer:1, explanation:"被动：is grown" },
{ id:329, level:"PET", topic:"Passive Voice", q:"The book ___ by millions of people.", options:["reads","is read","was read"], answer:1, explanation:"被动一般现在：is read" },
{ id:330, level:"PET", topic:"Passive Voice", q:"The cake ___ by my mum.", options:["made","is made","makes"], answer:1, explanation:"被动：is made" },
{ id:331, level:"PET", topic:"Reported Speech", q:"He said he ___ tired.", options:["is","was","were"], answer:1, explanation:"间接引语中现在时退一格变过去时 was" },
{ id:332, level:"PET", topic:"Reported Speech", q:"She told me she ___ to Paris.", options:["goes","went","will go"], answer:1, explanation:"转述过去的事用 went" },
{ id:333, level:"PET", topic:"Reported Speech", q:"Tom said, 'I am happy.' → Tom said he ___ happy.", options:["am","was","is"], answer:1, explanation:"am 在间接引语变 was" },
{ id:334, level:"PET", topic:"Reported Speech", q:"She asked where I ___ .", options:["live","lived","will live"], answer:1, explanation:"间接疑问用陈述语序且时态后退 lived" },
{ id:335, level:"PET", topic:"Reported Speech", q:"He told us he ___ watch TV.", options:["will","would","won't"], answer:1, explanation:"will 在间接引语变 would" },
{ id:336, level:"PET", topic:"Reported Speech", q:"Mary said she ___ done it.", options:["has","had","have"], answer:1, explanation:"现在完成在间接引语变过去完成 had done" },
{ id:337, level:"KET", topic:"Conditionals", q:"If it rains, we ___ at home.", options:["stay","will stay","stayed"], answer:1, explanation:"真实条件句主句用 will + 动词原形" },
{ id:338, level:"KET", topic:"Conditionals", q:"If you ___ hard, you will pass.", options:["study","will study","studied"], answer:0, explanation:"if 从句用一般现在时 study" },
{ id:339, level:"KET", topic:"Conditionals", q:"I will call you if I ___ time.", options:["have","will have","had"], answer:0, explanation:"if 从句现在时 have" },
{ id:340, level:"KET", topic:"Conditionals", q:"If he is late, we ___ without him.", options:["leave","will leave","left"], answer:1, explanation:"主句将来 will leave" },
{ id:341, level:"KET", topic:"Conditionals", q:"We ___ happy if we win.", options:["are","will be","were"], answer:1, explanation:"主句将来 will be" },
{ id:342, level:"KET", topic:"Conditionals", q:"If they ___ bus, they'll be here soon.", options:["take","will take","took"], answer:0, explanation:"if 从句现在时 take" },
{ id:343, level:"PET", topic:"Conditionals Advanced", q:"If I ___ rich, I would travel the world.", options:["am","were","be"], answer:1, explanation:"与现在事实相反用 were（虚拟语气）" },
{ id:344, level:"PET", topic:"Conditionals Advanced", q:"If she studied more, she ___ better grades.", options:["gets","would get","will get"], answer:1, explanation:"与现在相反主句用 would get" },
{ id:345, level:"PET", topic:"Conditionals Advanced", q:"If it ___ snowed, we could ski.", options:["has","had","having"], answer:1, explanation:"与现在相反 if 用 had + 过去分词（虚拟）" },
{ id:346, level:"PET", topic:"Conditionals Advanced", q:"If I had known, I ___ helped you.", options:["will","would have","would"], answer:1, explanation:"与过去相反主句 would have helped" },
{ id:347, level:"PET", topic:"Conditionals Advanced", q:"If he ___ left earlier, he wouldn't have missed the train.", options:["has","had","have"], answer:1, explanation:"与过去相反 if 用 had left" },
{ id:348, level:"PET", topic:"Conditionals Advanced", q:"I wish I ___ taller.", options:["am","were","be"], answer:1, explanation:"wish 后表与现在相反用 were" },
{ id:349, level:"PET", topic:"Relative Clauses", q:"The man ___ lives next door is a doctor.", options:["which","who","whose"], answer:1, explanation:"指人作主语用 who" },
{ id:350, level:"PET", topic:"Relative Clauses", q:"The book ___ I borrowed is great.", options:["who","which","whose"], answer:1, explanation:"指物用 which" },
{ id:351, level:"PET", topic:"Relative Clauses", q:"The girl ___ hair is long is my sister.", options:["who","which","whose"], answer:2, explanation:"表所属用 whose" },
{ id:352, level:"PET", topic:"Relative Clauses", q:"This is the house ___ I was born.", options:["where","who","which"], answer:0, explanation:"指地点用 where" },
{ id:353, level:"PET", topic:"Relative Clauses", q:"The boy ___ won the race is happy.", options:["which","that","whose"], answer:1, explanation:"指人用 that/who" },
{ id:354, level:"PET", topic:"Relative Clauses", q:"Do you know the woman ___ car is red?", options:["who","whose","which"], answer:1, explanation:"所属关系用 whose" },
{ id:355, level:"PET", topic:"Phrasal Verbs", q:"Please ___ the light; it's dark.", options:["turn on","turn off","turn up"], answer:0, explanation:"开灯用 turn on" },
{ id:356, level:"PET", topic:"Phrasal Verbs", q:"I ___ my keys. Can you help me look?", options:["look for","look after","look at"], answer:0, explanation:"寻找用 look for" },
{ id:357, level:"PET", topic:"Phrasal Verbs", q:"She ___ her little brother.", options:["looks after","looks for","looks up"], answer:0, explanation:"照顾用 look after" },
{ id:358, level:"PET", topic:"Phrasal Verbs", q:"Wake ___ early tomorrow!", options:["up","on","out"], answer:0, explanation:"wake up 醒来" },
{ id:359, level:"PET", topic:"Phrasal Verbs", q:"The plane will ___ at 9.", options:["take off","take on","take up"], answer:0, explanation:"起飞用 take off" },
{ id:360, level:"PET", topic:"Phrasal Verbs", q:"Can you ___ this word in the dictionary?", options:["look up","look out","look for"], answer:0, explanation:"查阅用 look up" },
{ id:361, level:"KET", topic:"Nouns & Quantifiers", q:"There is ___ milk in the fridge.", options:["many","much","a lot"], answer:1, explanation:"milk 不可数用 much" },
{ id:362, level:"KET", topic:"Nouns & Quantifiers", q:"I have ___ friends at school.", options:["much","many","a few of"], answer:1, explanation:"friends 可数复数用 many" },
{ id:363, level:"KET", topic:"Nouns & Quantifiers", q:"Could I have ___ water, please?", options:["a few","a little","few"], answer:1, explanation:"water 不可数用 a little" },
{ id:364, level:"KET", topic:"Nouns & Quantifiers", q:"There are ___ apples in the basket.", options:["a little","a few","little"], answer:1, explanation:"apples 可数用 a few" },
{ id:365, level:"KET", topic:"Nouns & Quantifiers", q:"We need ___ information about the trip.", options:["many","a lot of","few"], answer:1, explanation:"information 不可数，用 a lot of" },
{ id:366, level:"KET", topic:"Nouns & Quantifiers", q:"He has ___ money left.", options:["few","a little","many"], answer:1, explanation:"money 不可数用 a little" },
{ id:367, level:"KET", topic:"Adverbs of Frequency", q:"I ___ eat breakfast at 7 a.m.", options:["always","never","tomorrow"], answer:0, explanation:"always 频率副词放动词前" },
{ id:368, level:"KET", topic:"Adverbs of Frequency", q:"She is ___ late for class.", options:["often","tomorrow","yesterday"], answer:0, explanation:"often 表经常，放 be 动词后" },
{ id:369, level:"KET", topic:"Adverbs of Frequency", q:"They ___ go to the cinema.", options:["sometimes","tomorrow","last week"], answer:0, explanation:"sometimes 有时，频率副词" },
{ id:370, level:"KET", topic:"Adverbs of Frequency", q:"He ___ drinks coffee; he prefers tea.", options:["rarely","now","soon"], answer:0, explanation:"rarely 很少，频率副词" },
{ id:371, level:"KET", topic:"Adverbs of Frequency", q:"We ___ visit our grandparents on Sundays.", options:["usually","yesterday","ago"], answer:0, explanation:"usually 通常，频率副词" },
{ id:372, level:"PET", topic:"Connecting Words", q:"I like tea ___ my brother likes coffee.", options:["but","and","because"], answer:1, explanation:"并列喜好用 and" },
{ id:373, level:"PET", topic:"Connecting Words", q:"He was tired ___ he kept working.", options:["so","but","because"], answer:1, explanation:"转折用 but" },
{ id:374, level:"PET", topic:"Connecting Words", q:"I stayed home ___ it was raining.", options:["because","but","so"], answer:0, explanation:"原因用 because" },
{ id:375, level:"PET", topic:"Connecting Words", q:"She studied hard, ___ she passed the exam.", options:["so","but","because"], answer:0, explanation:"结果用 so" },
{ id:376, level:"PET", topic:"Connecting Words", q:"We can walk, ___ we can take the bus.", options:["or","and","but"], answer:0, explanation:"选择用 or" },
{ id:377, level:"PET", topic:"Connecting Words", q:"Although it was cold, ___ went swimming.", options:["but they","they","so they"], answer:1, explanation:"although 已表转折，主句不重复 but，用 they" },
{ id:378, level:"KET", topic:"Questions & Imperatives", q:"___ is the time, please?", options:["What","Which","Who"], answer:0, explanation:"问时间用 What" },
{ id:379, level:"KET", topic:"Questions & Imperatives", q:"___ your name?", options:["What","What's","Which"], answer:1, explanation:"问名字用 What's your name" },
{ id:380, level:"KET", topic:"Questions & Imperatives", q:"Please ___ the door.", options:["open","to open","opening"], answer:0, explanation:"祈使句用动词原形 open" },
{ id:381, level:"KET", topic:"Questions & Imperatives", q:"___ quiet in the library!", options:["Be","To be","Being"], answer:0, explanation:"祈使句 Be + 形容词" },
{ id:382, level:"KET", topic:"Questions & Imperatives", q:"___ do you go to school?", options:["What","How","Which"], answer:1, explanation:"问方式用 How" },
{ id:383, level:"KET", topic:"Questions & Imperatives", q:"Don't ___ on the grass.", options:["walk","to walk","walking"], answer:0, explanation:"否定祈使 Don't + 原形" },
{ id:384, level:"KET", topic:"There Be / Have Got", q:"___ a cat on the sofa.", options:["There is","There are","It is"], answer:0, explanation:"单数 a cat 用 There is" },
{ id:385, level:"KET", topic:"There Be / Have Got", q:"___ some apples in the bowl.", options:["There is","There are","They are"], answer:1, explanation:"复数 apples 用 There are" },
{ id:386, level:"KET", topic:"There Be / Have Got", q:"I ___ a brother and a sister.", options:["have got","has got","there is"], answer:0, explanation:"拥有用 have got" },
{ id:387, level:"KET", topic:"There Be / Have Got", q:"___ any milk in the cup?", options:["Is there","Are there","Have"], answer:0, explanation:"不可数 any milk 用 Is there" },
{ id:388, level:"KET", topic:"There Be / Have Got", q:"She ___ a red bicycle.", options:["have got","has got","there is"], answer:1, explanation:"she 第三人称单数用 has got" },
{ id:389, level:"KET", topic:"There Be / Have Got", q:"How many students ___ in the class?", options:["there is","there are","have"], answer:1, explanation:"复数用 are there" },
{ id:390, level:"KET", topic:"Question Tags", q:"You like ice cream, ___ ?", options:["do you","don't you","are you"], answer:1, explanation:"肯定句用否定 tag：don't you" },
{ id:391, level:"KET", topic:"Question Tags", q:"She isn't here, ___ ?", options:["is she","isn't she","does she"], answer:0, explanation:"否定句用肯定 tag：is she" },
{ id:392, level:"KET", topic:"Question Tags", q:"They went home, ___ ?", options:["did they","didn't they","do they"], answer:1, explanation:"过去肯定用 didn't they" },
{ id:393, level:"KET", topic:"Question Tags", q:"He can swim, ___ ?", options:["can't he","can he","does he"], answer:0, explanation:"肯定 can 用 can't he" },
{ id:394, level:"KET", topic:"Question Tags", q:"We should go, ___ ?", options:["should we","shouldn't we","do we"], answer:1, explanation:"肯定 should 用 shouldn't we" },
{ id:395, level:"KET", topic:"Question Tags", q:"It's cold today, ___ ?", options:["isn't it","is it","doesn't it"], answer:0, explanation:"肯定 is 用 isn't it" },
{ id:396, level:"PET", topic:"Past Perfect", q:"I ___ finished before he arrived.", options:["have","had","has"], answer:1, explanation:"arrived 之前已完成用过去完成 had finished" },
{ id:397, level:"PET", topic:"Past Perfect", q:"She ___ the book by noon.", options:["read","had read","has read"], answer:1, explanation:"by noon 过去时间点前用 had read" },
{ id:398, level:"PET", topic:"Past Perfect", q:"They ___ already eaten when we came.", options:["have","had","has"], answer:1, explanation:"came 前已吃用 had eaten" },
{ id:399, level:"PET", topic:"Past Perfect", q:"He ___ never seen snow before 2020.", options:["has","had","have"], answer:1, explanation:"before 过去时间点用 had never seen" },
{ id:400, level:"PET", topic:"Past Perfect", q:"The train ___ when we got to the station.", options:["left","had left","has left"], answer:1, explanation:"got 之前已离开用 had left" },
{ id:401, level:"PET", topic:"Past Perfect", q:"I ___ lost my way, so I was late.", options:["have","had","has"], answer:1, explanation:"迟到之前已迷路用 had lost" },
{ id:402, level:"PET", topic:"Perfect vs Past Simple", q:"I ___ in London for 5 years.", options:["lived","have lived","live"], answer:1, explanation:"for + 时间段与现在完成连用 have lived" },
{ id:403, level:"PET", topic:"Perfect vs Past Simple", q:"He ___ the window yesterday.", options:["breaks","broke","has broken"], answer:1, explanation:"yesterday 用过去时 broke" },
{ id:404, level:"PET", topic:"Perfect vs Past Simple", q:"We ___ just ___ dinner.", options:["have/had","has/had","had/have"], answer:0, explanation:"just 用现在完成 have had" },
{ id:405, level:"PET", topic:"Perfect vs Past Simple", q:"She ___ three languages since 2010.", options:["speaks","has spoken","spoke"], answer:1, explanation:"since + 过去时间点用 has spoken" },
{ id:406, level:"PET", topic:"Perfect vs Past Simple", q:"I ___ my keys. I can't find them.", options:["lose","lost","have lost"], answer:2, explanation:"强调现在结果（找不到）用 have lost" },
{ id:407, level:"PET", topic:"Perfect vs Past Simple", q:"They ___ a new car last month.", options:["buy","bought","have bought"], answer:1, explanation:"last month 过去时 bought" },
{ id:408, level:"PET", topic:"Present Perfect Continuous", q:"I ___ English for two hours.", options:["study","have studied","have been studying"], answer:2, explanation:"强调持续动作（学了两小时还在学）用 have been studying" },
{ id:409, level:"PET", topic:"Present Perfect Continuous", q:"It ___ since morning.", options:["rains","has rained","has been raining"], answer:2, explanation:"since 一直下用 has been raining" },
{ id:410, level:"PET", topic:"Present Perfect Continuous", q:"She ___ to call him all day.", options:["tries","has tried","has been trying"], answer:2, explanation:"一整天持续尝试用 has been trying" },
{ id:411, level:"PET", topic:"Present Perfect Continuous", q:"We ___ waiting for an hour.", options:["are","have been","has been"], answer:1, explanation:"wait 持续了一小时用 have been waiting" },
{ id:412, level:"PET", topic:"Present Perfect Continuous", q:"He ___ in the garden all afternoon.", options:["works","has worked","has been working"], answer:2, explanation:"整个下午持续用 has been working" },
{ id:413, level:"PET", topic:"Present Perfect Continuous", q:"How long ___ you ___ ?", options:["have/been crying","has/cried","did/cry"], answer:0, explanation:"持续动作疑问用 have been crying" },
{ id:414, level:"PET", topic:"Modals of Deduction", q:"The lights are on; someone ___ be home.", options:["must","can't","might not"], answer:0, explanation:"有灯亮肯定有人在家用 must" },
{ id:415, level:"PET", topic:"Modals of Deduction", q:"He ___ be at school; it's Sunday.", options:["must","can't","might"], answer:1, explanation:"周日不可能在校用 can't" },
{ id:416, level:"PET", topic:"Modals of Deduction", q:"It ___ rain later; the sky is grey.", options:["must","might","can't"], answer:1, explanation:"可能下雨用 might" },
{ id:417, level:"PET", topic:"Modals of Deduction", q:"That ___ be Mary; she's in Paris.", options:["must","can't","might"], answer:1, explanation:"在巴黎不可能是 Mary 用 can't" },
{ id:418, level:"PET", topic:"Modals of Deduction", q:"You ___ be tired after the long trip.", options:["must","can't","won't"], answer:0, explanation:"长途后一定累用 must" },
{ id:419, level:"PET", topic:"Modals of Deduction", q:"He ___ be hungry; he just ate.", options:["must","can't","might"], answer:1, explanation:"刚吃过不可能饿用 can't" },
{ id:420, level:"PET", topic:"Embedded Questions", q:"Can you tell me ___ ?", options:["where is the station","where the station is","the station is where"], answer:1, explanation:"间接疑问用陈述语序 where the station is" },
{ id:421, level:"PET", topic:"Embedded Questions", q:"I don't know ___ .", options:["what time it is","what time is it","is it what time"], answer:0, explanation:"间接疑问陈述语序 what time it is" },
{ id:422, level:"PET", topic:"Embedded Questions", q:"Do you know ___ ?", options:["when the train leaves","when leaves the train","the train when leaves"], answer:0, explanation:"间接疑问 when the train leaves" },
{ id:423, level:"PET", topic:"Embedded Questions", q:"She asked ___ .", options:["why he left","why did he leave","he why left"], answer:0, explanation:"间接疑问 why he left（陈述语序）" },
{ id:424, level:"KET", topic:"Countable & Uncountable", q:"I need some ___ .", options:["advices","advice","advises"], answer:1, explanation:"advice 不可数，无复数，用 some advice" },
{ id:425, level:"KET", topic:"Countable & Uncountable", q:"There is a ___ on the desk.", options:["news","book","information"], answer:1, explanation:"book 可数单数用 a book（news/information 不可数）" },
{ id:426, level:"KET", topic:"Countable & Uncountable", q:"Can I have two ___ of bread?", options:["loaf","loaves","loafs"], answer:1, explanation:"loaf 复数 loaves" },
{ id:427, level:"KET", topic:"Countable & Uncountable", q:"We don't have much ___ .", options:["furnitures","furniture","furnitures"], answer:1, explanation:"furniture 不可数，无复数" },
{ id:428, level:"KET", topic:"Countable & Uncountable", q:"He gave me some useful ___ .", options:["informations","information","inform"], answer:1, explanation:"information 不可数" },
{ id:429, level:"KET", topic:"Countable & Uncountable", q:"How many ___ are there?", options:["child","children","childs"], answer:1, explanation:"child 复数 children" },
{ id:430, level:"KET", topic:"Countable & Uncountable", q:"I bought three ___ .", options:["tomato","tomatoes","tomatoe"], answer:1, explanation:"tomato 复数 tomatoes" },
{ id:431, level:"KET", topic:"Countable & Uncountable", q:"There is too much ___ in the soup.", options:["salts","salt","salty"], answer:1, explanation:"salt 不可数用 salt" },
{ id:432, level:"PET", topic:"Adjective Order", q:"She has a ___ dog.", options:["little brown","brown little","brownly"], answer:0, explanation:"限定词+大小+颜色：a little brown dog" },
{ id:433, level:"PET", topic:"Adjective Order", q:"I bought a ___ shirt.", options:["red new","new red","newly red"], answer:1, explanation:"新旧+颜色：a new red shirt" },
{ id:434, level:"PET", topic:"Adjective Order", q:"He lives in a ___ house.", options:["old big","big old","bigly old"], answer:1, explanation:"大小+新旧：a big old house" },
{ id:435, level:"PET", topic:"Adjective Order", q:"She wore a ___ dress.", options:["beautiful long","long beautiful","beautifully long"], answer:0, explanation:"观点+形状：a beautiful long dress" },
{ id:436, level:"PET", topic:"Adjective Order", q:"We saw a ___ car.", options:["small blue","blue small","smallly blue"], answer:0, explanation:"大小+颜色：a small blue car" },
{ id:437, level:"PET", topic:"Adjective Order", q:"He bought a ___ bag.", options:["leather black","black leather","blackly leather"], answer:1, explanation:"颜色+材质：a black leather bag" },
{ id:438, level:"PET", topic:"Used To", q:"I ___ live in London, but now I live in Paris.", options:["used to","use to","am used to"], answer:0, explanation:"过去习惯用 used to live" },
{ id:439, level:"PET", topic:"Used To", q:"She ___ play tennis when she was young.", options:["used to","use to","using to"], answer:0, explanation:"过去常做用 used to play" },
{ id:440, level:"PET", topic:"Used To", q:"He didn't ___ like spicy food.", options:["used to","use to","uses to"], answer:1, explanation:"否定 didn't use to（用原形 use）" },
{ id:441, level:"PET", topic:"Used To", q:"We ___ go to the beach every summer.", options:["used to","use to","are used to"], answer:0, explanation:"过去习惯 used to go" },
{ id:442, level:"PET", topic:"Used To", q:"Did she ___ play the piano?", options:["used to","use to","uses to"], answer:1, explanation:"疑问句 Did + use to" },
{ id:443, level:"PET", topic:"Used To", q:"They ___ live here, but they moved.", options:["used to","use to","using to"], answer:0, explanation:"过去住这里用 used to live" },
{ id:444, level:"KET", topic:"Subject-Verb Agreement", q:"The number of students ___ large.", options:["are","is","were"], answer:1, explanation:"the number of + 复数名词，谓语用单数 is" },
{ id:445, level:"KET", topic:"Subject-Verb Agreement", q:"A lot of people ___ here.", options:["is","are","was"], answer:1, explanation:"people 复数用 are" },
{ id:446, level:"KET", topic:"Subject-Verb Agreement", q:"Neither of them ___ right.", options:["are","is","were"], answer:1, explanation:"neither of 谓语用单数 is" },
{ id:447, level:"KET", topic:"Subject-Verb Agreement", q:"My family ___ big.", options:["are","is","were"], answer:1, explanation:"family 作为整体用单数 is" },
{ id:448, level:"KET", topic:"Subject-Verb Agreement", q:"The news ___ good.", options:["are","is","were"], answer:1, explanation:"news 不可数用单数 is" },
{ id:449, level:"KET", topic:"Subject-Verb Agreement", q:"Two plus two ___ four.", options:["are","is","were"], answer:1, explanation:"算式作单数用 is" },
{ id:450, level:"KET", topic:"Subject-Verb Agreement", q:"Each of the boys ___ a book.", options:["have","has","having"], answer:1, explanation:"each of 谓语用单数 has" },
{ id:451, level:"KET", topic:"Subject-Verb Agreement", q:"The police ___ looking for him.", options:["is","are","was"], answer:1, explanation:"police 集合名词用复数 are" },
{ id:452, level:"PET", topic:"Making Suggestions", q:"___ we go for a walk?", options:["Shall","Will","Do"], answer:0, explanation:"建议用 Shall we" },
{ id:453, level:"PET", topic:"Making Suggestions", q:"Why ___ visit the museum?", options:["don't we","we don't","do we"], answer:0, explanation:"Why don't we + 动词原形 提建议" },
{ id:454, level:"PET", topic:"Making Suggestions", q:"Let's ___ a film tonight.", options:["watch","to watch","watching"], answer:0, explanation:"Let's + 原形 watch" },
{ id:455, level:"PET", topic:"Making Suggestions", q:"How about ___ a coffee?", options:["have","having","to have"], answer:1, explanation:"How about + doing" },
{ id:456, level:"PET", topic:"Making Suggestions", q:"You should ___ a doctor.", options:["see","to see","seeing"], answer:0, explanation:"should + 原形 see" },
{ id:457, level:"PET", topic:"Making Suggestions", q:"I suggest ___ early.", options:["leave","leaving","to leave"], answer:1, explanation:"suggest + doing" },
];

// Export
if (typeof module !== 'undefined') { module.exports = GRAMMAR_BANK; }
