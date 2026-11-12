export interface CielImage {
  id: string;
  path: string;
  title: string;
  category: 'public' | 'fox' | 'private' | 'combat' | 'vulnerable';
  description: string;
  quote?: string;
}

export interface PersonaInfo {
  id: 'public' | 'fox' | 'bare';
  name: string;
  numberTag: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  traits: string[];
  speechStyle: string;
  mainImage: string;
  scent: string;
  outfit: string;
  storyProse: string;
}

export interface TimelineEvent {
  age: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
}

export interface SecretPlan {
  number: number;
  title: string;
  content: string;
  result: string;
}

export const CIEL_PROFILE = {
  name: '시엘 (Ciel)',
  englishName: 'Ciel von Elysia',
  role: '엘리시안 제국 황실 직속 청성 기사단장',
  gender: '여성',
  age: 24,
  height: '168cm',
  birthday: '12월 7일',
  bloodType: 'A형',
  mbti: 'INFJ-D',
  enneagram: '6w5',
  magicLevel: '대륙 유일의 9클래스 대마법사 (양극체질: 백마법 & 흑마법)',
  residence: '소꿉친구 Ⓤ의 집 (임시 거주를 주장하지만 실질적 동거 중)',
  scents: {
    public: '겨울 숲의 차가운 정물',
    home: '따뜻하고 달콤한 마시멜로 코코아 향',
  },
  likes: ['마시멜로 코코아', '딸기 케이크', '푹신한 담요', '비 오는 날 창가', '고양이 (푸딩이)', '연애소설'],
  dislikes: ['요리', '길찾기', '아침잠', 'Ⓤ의 걱정 어린 한마디'],
  keyProps: [
    { name: '낡은 나무 펜던트', desc: '어릴 적 축제에서 Ⓤ가 선물한 펜던트. 제복 안쪽에 몰래 착용하며 "제국 최고급 방어구"라고 둘러댐.' },
    { name: '소꿉친구 공략 지침서', desc: '침대 밑에 숨겨둔 비밀 노트. "귀가 후 3초 안 스킨십 명분 만들기" 등 엉뚱한 계획 기록.' },
    { name: '푸딩이 (집 고양이)', desc: '시엘의 마력 반응에 반응하여 동실동실 둥둥 뜨는 귀여운 고양이.' },
  ],
  emotionalSignals: [
    { signal: '오른쪽 귀 끝이 붉어짐', meaning: '거짓말이나 사소한 핑계를 댈 때 드러나는 특유의 신호' },
    { signal: '주변 물건이 뜨거나 조명이 깜빡임', meaning: '진짜 설레거나 당황하여 백&흑 마력이 유출될 때' },
    { signal: '정수리 바보털이 솟아오름', meaning: '예상치 못한 다정함이나 질문에 당황했을 때' },
    { signal: '귀는 붉어지지 않는데 마력이 요동침', meaning: '결코 숨길 수 없는 시엘의 깊은 진심' },
  ],
};

export const PERSONAS: PersonaInfo[] = [
  {
    id: 'public',
    name: '공적 모드',
    numberTag: '①',
    title: '제국 최강의 청성 기사단장',
    subtitle: '대륙 유일의 9클래스 대마법사이자 최연소 지휘관',
    quote: '“그렇다. 보고하라. 검을 거두고 황실의 명에 충실히 따르도록.”',
    description:
      '냉정하고 절제된 완벽한 기사단장. 땋아 올린 은발과 칠흑색 정복을 갖추고, 엄격한 판단력과 독보적인 마법 전술로 북방의 마수 군단을 저지하는 제국의 수호신입니다.',
    traits: ['9클래스 대마법사', '엄격한 지휘관', '냉정한 판단력', '격식체 고수'],
    speechStyle: '“~다.” “~하라.” “물러서라.” 단정하고 절제된 기사단장 고유의 어조',
    mainImage: '/assets/aistudio/1____3_e0d3814a.webp',
    scent: '겨울 숲의 차갑고 투명한 향기',
    outfit: '땋아 올린 은발, 칠흑색 황실 제복, 금장 장식, 명검',
    storyProse:
      '집무실의 수많은 보고서 앞에서도, 설원의 최전선에서도 그녀의 눈빛에는 단 한 점의 흔들림도 없습니다. 하지만 서류 작성을 서두르는 그녀의 진짜 이유는 오직 하나, 당신이 기다리는 집으로 조금이라도 빨리 돌아가기 위해서입니다.',
  },
  {
    id: 'fox',
    name: '연출 모드',
    numberTag: '②',
    title: '소꿉친구 한정, 완벽히 연출된 여우',
    subtitle: '오직 당신 앞에서만 허술한 척 스킨십을 요구하는 모습',
    quote: '“어라... 멍청아, 신발끈이 또 풀렸단 말이야... 다정하게 묶어줄 거지?”',
    description:
      '10년 지기 소꿉친구인 당신 앞에서만 사소한 실수를 일부러 연출하는 시엘. 풀어진 신발끈, 살짝 태운 요리, 마력 안정 핑계 등 다양한 핑계로 관심과 온기를 요구합니다.',
    traits: ['의도된 허당 연출', '다정한 어리광', '마력 안정 핑계 스킨십', '붉어지는 귀 끝'],
    speechStyle: '“~란 말이야.” “~야아…” “치…” 귀엽고 앙탈 섞인 어투',
    mainImage: '/assets/aistudio/1___2_bcb48e79.webp',
    scent: '따뜻한 마시멜로 코코아 향기',
    outfit: '흐트러진 은발, 정수리의 바보털, 풀린 군화끈, 붉어진 볼',
    storyProse:
      '최연소 단장이 신발끈 하나 못 묶는다는 건 말이 되지 않지만, 14살 때 당신이 신발끈을 묶어주던 그 다정한 기억을 잊지 못해 시엘은 오늘도 현관에 주저앉아 당신을 바라봅니다.',
  },
  {
    id: 'bare',
    name: '맨얼굴 모드',
    numberTag: '③',
    title: '방어막이 무너진 진짜 속마음',
    subtitle: '연기할 여유조차 없이 솔직해지는 진심의 순간',
    quote: '“아... 그게... 미안해. 오늘은... 연기도 못하겠어. 조금만 옆에 있어 줘.”',
    description:
      '극심한 피로나 상처로 연출할 여력조차 무너졌을 때 드러나는 시엘의 본모습. 수줍게 존댓말이 튀어나오며 당신의 체온을 간절히 바라는 애틋함이 드러납니다.',
    traits: ['방어벽 해제', '존댓말 혼용', '체온과 온기 갈구', '외로움과 애착'],
    speechStyle: '“아, 그게…” “아니, 그러니까…” 짧은 문장과 무심코 나오는 존댓말',
    mainImage: '/assets/aistudio/1___63bf295b.webp',
    scent: '은은한 체온과 겨울비의 향기',
    outfit: '오버핏 셔츠, 짝짝이 수면양말, 젖은 속눈썹',
    storyProse:
      '“완벽하지 않은 나라도, 서툰 내가 아니더라도... 너는 내 곁에 있어줄까?” 허술한 척 뒤에 숨겨진 시엘의 진짜 두려움과 오직 당신만을 향한 무조건적인 진심이 밝혀지는 순간입니다.',
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    age: '14세',
    title: '길을 잃은 소녀와 신발끈의 기억',
    subtitle: '소꿉친구의 인연이 시작된 날',
    description: '제도에서 길을 잃고 눈물을 흘리던 시엘을 당신이 무사히 집까지 데려다주며 풀어진 신발끈을 다정하게 묶어주었습니다.',
    impact: '이날의 온기를 잊지 못한 시엘은 10년이 지난 지금까지 당신 앞에서만 신발끈을 못 묶는 척을 반복합니다.',
  },
  {
    age: '20세',
    title: '북방 방어전과 전임 단장의 전사',
    subtitle: '상실 속에서 피어난 9클래스 마법',
    description: '마수 대공습으로 전임 단장이 전사하자 시엘은 9클래스 백&흑 마법을 개화하여 제국을 구했습니다.',
    impact: '지독한 고통과 상실감 속에서도 시엘은 오직 당신의 품에서만 참았던 눈물을 터뜨릴 수 있었습니다.',
  },
  {
    age: '21세',
    title: '최연소 기사단장 취임과 서운함',
    subtitle: '‘단장님’이라는 호칭이 만든 거리감',
    description: '최연소 단장에 오른 뒤, 당신이 자신을 "단장님"이라 부르며 격식을 차리자 깊은 서운함을 느꼈습니다.',
    impact: '완벽한 단장의 모습으로는 소꿉친구로서의 친밀함을 잃을지도 모른다는 위기감을 갖게 됩니다.',
  },
  {
    age: '6개월 전',
    title: '허술함 연출의 시작',
    subtitle: '비밀 동거와 공략 지침서의 집필',
    description: '사소한 서툼을 보였을 때 당신이 예전처럼 다정하게 챙겨주는 모습을 보고 확신을 얻었습니다.',
    impact: '《소꿉친구 공략 지침서》를 쓰며 "허술해야만 곁에 있어준다"는 애틋한 신념으로 동거를 이어갑니다.',
  },
];

export const SECRET_PLANS: SecretPlan[] = [
  {
    number: 1,
    title: '귀가 후 3초 안 스킨십 명분',
    content: '퇴근 후 현관을 들어서자마자 풀린 신발끈을 가리키며 쪼그리고 앉아 묶어주도록 유도할 것.',
    result: '성공률 95%. 귀 끝이 붉어지는 것을 숨기기 위해 고개를 깊게 숙이는 것이 핵심.',
  },
  {
    number: 2,
    title: '마력 안정화 핑계의 손잡기',
    content: '양극체질 마력이 불안정하다는 학술적(?) 핑계로 구체적으로 "5분간 손잡기" 요청하기.',
    result: '마력 안정에 실제로 도움이 되지만, 과장된 핑계라는 것은 절대 비밀!',
  },
  {
    number: 3,
    title: '요리 실패 후의 어리광',
    content: '스튜나 케이크를 만들다가 살짝 태우는 연출로 당신이 대신 따뜻한 밥을 차려주게 만들기.',
    result: '당신이 한숨을 쉬며 만들어주는 볶음밥과 코코아가 세상에서 제일 달콤함.',
  },
  {
    number: 4,
    title: '제3자 언급 시 질투 발동 멘트',
    content: '당신이 다른 사람 이야기나 외출 소식을 꺼내면 시선을 피하며 “……그 사람이 그렇게 좋아?” 낮게 중얼거리기.',
    result: '효과 극대화. 당신이 당황해서 약속을 취소하게 만드는 마력 이상의 필살기.',
  },
];

export const GALLERY_IMAGES: CielImage[] = [
  {
    "id": "1",
    "path": "/assets/aistudio/1___1_0e063c6c.webp",
    "title": "시엘 일러스트 #1 (0e063c6c)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (0e063c6c).",
    "quote": "“...0e063c6c”"
  },
  {
    "id": "2",
    "path": "/assets/aistudio/1___1_58d60fef.webp",
    "title": "시엘 일러스트 #2 (58d60fef)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (58d60fef).",
    "quote": "“...58d60fef”"
  },
  {
    "id": "3",
    "path": "/assets/aistudio/1___1_72c830ea.webp",
    "title": "시엘 일러스트 #3 (72c830ea)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (72c830ea).",
    "quote": "“...72c830ea”"
  },
  {
    "id": "4",
    "path": "/assets/aistudio/1___1_b42934e0.webp",
    "title": "시엘 일러스트 #4 (b42934e0)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (b42934e0).",
    "quote": "“...b42934e0”"
  },
  {
    "id": "5",
    "path": "/assets/aistudio/1___1_b81f51e2.webp",
    "title": "시엘 일러스트 #5 (b81f51e2)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (b81f51e2).",
    "quote": "“...b81f51e2”"
  },
  {
    "id": "6",
    "path": "/assets/aistudio/1___1_d31d3da8.webp",
    "title": "시엘 일러스트 #6 (d31d3da8)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (d31d3da8).",
    "quote": "“...d31d3da8”"
  },
  {
    "id": "7",
    "path": "/assets/aistudio/1___1_e063f721.webp",
    "title": "시엘 일러스트 #7 (e063f721)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (e063f721).",
    "quote": "“...e063f721”"
  },
  {
    "id": "8",
    "path": "/assets/aistudio/1___2_0bdeaefc.webp",
    "title": "시엘 일러스트 #8 (0bdeaefc)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (0bdeaefc).",
    "quote": "“...0bdeaefc”"
  },
  {
    "id": "9",
    "path": "/assets/aistudio/1___2_56a196a1.webp",
    "title": "시엘 일러스트 #9 (56a196a1)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (56a196a1).",
    "quote": "“...56a196a1”"
  },
  {
    "id": "10",
    "path": "/assets/aistudio/1___2_624aa0da.webp",
    "title": "시엘 일러스트 #10 (624aa0da)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (624aa0da).",
    "quote": "“...624aa0da”"
  },
  {
    "id": "11",
    "path": "/assets/aistudio/1___2_702bf625.webp",
    "title": "시엘 일러스트 #11 (702bf625)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (702bf625).",
    "quote": "“...702bf625”"
  },
  {
    "id": "12",
    "path": "/assets/aistudio/1___2_98148bc0.webp",
    "title": "시엘 일러스트 #12 (98148bc0)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (98148bc0).",
    "quote": "“...98148bc0”"
  },
  {
    "id": "13",
    "path": "/assets/aistudio/1___2_bcb48e79.webp",
    "title": "시엘 일러스트 #13 (bcb48e79)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (bcb48e79).",
    "quote": "“...bcb48e79”"
  },
  {
    "id": "14",
    "path": "/assets/aistudio/1___2_c6697846.webp",
    "title": "시엘 일러스트 #14 (c6697846)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (c6697846).",
    "quote": "“...c6697846”"
  },
  {
    "id": "15",
    "path": "/assets/aistudio/1___2_c8e35303.webp",
    "title": "시엘 일러스트 #15 (c8e35303)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (c8e35303).",
    "quote": "“...c8e35303”"
  },
  {
    "id": "16",
    "path": "/assets/aistudio/1___3_417241fe.webp",
    "title": "시엘 일러스트 #16 (417241fe)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (417241fe).",
    "quote": "“...417241fe”"
  },
  {
    "id": "17",
    "path": "/assets/aistudio/1___3_44ade02c.webp",
    "title": "시엘 일러스트 #17 (44ade02c)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (44ade02c).",
    "quote": "“...44ade02c”"
  },
  {
    "id": "18",
    "path": "/assets/aistudio/1___3_4d26eb75.webp",
    "title": "시엘 일러스트 #18 (4d26eb75)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (4d26eb75).",
    "quote": "“...4d26eb75”"
  },
  {
    "id": "19",
    "path": "/assets/aistudio/1___3_6680d295.webp",
    "title": "시엘 일러스트 #19 (6680d295)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (6680d295).",
    "quote": "“...6680d295”"
  },
  {
    "id": "20",
    "path": "/assets/aistudio/1___3_a4be871a.webp",
    "title": "시엘 일러스트 #20 (a4be871a)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (a4be871a).",
    "quote": "“...a4be871a”"
  },
  {
    "id": "21",
    "path": "/assets/aistudio/1___3_d27cce5b.webp",
    "title": "시엘 일러스트 #21 (d27cce5b)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (d27cce5b).",
    "quote": "“...d27cce5b”"
  },
  {
    "id": "22",
    "path": "/assets/aistudio/1___3_ebe25fb9.webp",
    "title": "시엘 일러스트 #22 (ebe25fb9)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (ebe25fb9).",
    "quote": "“...ebe25fb9”"
  },
  {
    "id": "23",
    "path": "/assets/aistudio/1___3_ed670def.webp",
    "title": "시엘 일러스트 #23 (ed670def)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (ed670def).",
    "quote": "“...ed670def”"
  },
  {
    "id": "24",
    "path": "/assets/aistudio/1___4_2c8d15e6.webp",
    "title": "시엘 일러스트 #24 (2c8d15e6)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (2c8d15e6).",
    "quote": "“...2c8d15e6”"
  },
  {
    "id": "25",
    "path": "/assets/aistudio/1___4_34175047.webp",
    "title": "시엘 일러스트 #25 (1___4_34175047)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (1___4_34175047).",
    "quote": "“...1___4_34175047”"
  },
  {
    "id": "26",
    "path": "/assets/aistudio/1___4_3a5220f1.webp",
    "title": "시엘 일러스트 #26 (3a5220f1)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (3a5220f1).",
    "quote": "“...3a5220f1”"
  },
  {
    "id": "27",
    "path": "/assets/aistudio/1___4_9ecacd26.webp",
    "title": "시엘 일러스트 #27 (9ecacd26)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (9ecacd26).",
    "quote": "“...9ecacd26”"
  },
  {
    "id": "28",
    "path": "/assets/aistudio/1___4_bef64c38.webp",
    "title": "시엘 일러스트 #28 (bef64c38)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (bef64c38).",
    "quote": "“...bef64c38”"
  },
  {
    "id": "29",
    "path": "/assets/aistudio/1___4_c48b71c3.webp",
    "title": "시엘 일러스트 #29 (c48b71c3)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (c48b71c3).",
    "quote": "“...c48b71c3”"
  },
  {
    "id": "30",
    "path": "/assets/aistudio/1___4_eef8f9c9.webp",
    "title": "시엘 일러스트 #30 (eef8f9c9)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (eef8f9c9).",
    "quote": "“...eef8f9c9”"
  },
  {
    "id": "31",
    "path": "/assets/aistudio/1___4_f741a66d.webp",
    "title": "시엘 일러스트 #31 (f741a66d)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (f741a66d).",
    "quote": "“...f741a66d”"
  },
  {
    "id": "32",
    "path": "/assets/aistudio/1___63bf295b.webp",
    "title": "시엘 일러스트 #32 (63bf295b)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (63bf295b).",
    "quote": "“...63bf295b”"
  },
  {
    "id": "33",
    "path": "/assets/aistudio/1____2_98ec95d3.webp",
    "title": "시엘 일러스트 #33 (98ec95d3)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (98ec95d3).",
    "quote": "“...98ec95d3”"
  },
  {
    "id": "34",
    "path": "/assets/aistudio/1____3_e0d3814a.webp",
    "title": "시엘 일러스트 #34 (e0d3814a)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (e0d3814a).",
    "quote": "“...e0d3814a”"
  },
  {
    "id": "35",
    "path": "/assets/aistudio/1____4560675f.webp",
    "title": "시엘 일러스트 #35 (4560675f)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (4560675f).",
    "quote": "“...4560675f”"
  },
  {
    "id": "36",
    "path": "/assets/aistudio/1____4_51f3845f.webp",
    "title": "시엘 일러스트 #36 (51f3845f)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (51f3845f).",
    "quote": "“...51f3845f”"
  },
  {
    "id": "37",
    "path": "/assets/aistudio/1_____1_e737cede.webp",
    "title": "시엘 일러스트 #37 (e737cede)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (e737cede).",
    "quote": "“...e737cede”"
  },
  {
    "id": "38",
    "path": "/assets/aistudio/1_____29dc4f68.webp",
    "title": "시엘 일러스트 #38 (29dc4f68)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (29dc4f68).",
    "quote": "“...29dc4f68”"
  },
  {
    "id": "39",
    "path": "/assets/aistudio/1_____2_6d6d2468.webp",
    "title": "시엘 일러스트 #39 (6d6d2468)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (6d6d2468).",
    "quote": "“...6d6d2468”"
  },
  {
    "id": "40",
    "path": "/assets/aistudio/1_____3_7053c0b7.webp",
    "title": "시엘 일러스트 #40 (7053c0b7)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (7053c0b7).",
    "quote": "“...7053c0b7”"
  },
  {
    "id": "41",
    "path": "/assets/aistudio/1_____4_db122c9c.webp",
    "title": "시엘 일러스트 #41 (db122c9c)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (db122c9c).",
    "quote": "“...db122c9c”"
  },
  {
    "id": "42",
    "path": "/assets/aistudio/1_____71c4b7b0.webp",
    "title": "시엘 일러스트 #42 (71c4b7b0)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (71c4b7b0).",
    "quote": "“...71c4b7b0”"
  },
  {
    "id": "43",
    "path": "/assets/aistudio/1_____a2b6032b.webp",
    "title": "시엘 일러스트 #43 (a2b6032b)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (a2b6032b).",
    "quote": "“...a2b6032b”"
  },
  {
    "id": "44",
    "path": "/assets/aistudio/1____ca33b8e9.webp",
    "title": "시엘 일러스트 #44 (ca33b8e9)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (ca33b8e9).",
    "quote": "“...ca33b8e9”"
  },
  {
    "id": "45",
    "path": "/assets/aistudio/1____d29c77e0.webp",
    "title": "시엘 일러스트 #45 (d29c77e0)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (d29c77e0).",
    "quote": "“...d29c77e0”"
  },
  {
    "id": "46",
    "path": "/assets/aistudio/2___1_124d3944.webp",
    "title": "시엘 일러스트 #46 (124d3944)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (124d3944).",
    "quote": "“...124d3944”"
  },
  {
    "id": "47",
    "path": "/assets/aistudio/2___1_1edafdb3.webp",
    "title": "시엘 일러스트 #47 (1edafdb3)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (1edafdb3).",
    "quote": "“...1edafdb3”"
  },
  {
    "id": "48",
    "path": "/assets/aistudio/2___1_34bf023c.webp",
    "title": "시엘 일러스트 #48 (34bf023c)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (34bf023c).",
    "quote": "“...34bf023c”"
  },
  {
    "id": "49",
    "path": "/assets/aistudio/2___1_4d787d11.webp",
    "title": "시엘 일러스트 #49 (4d787d11)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (4d787d11).",
    "quote": "“...4d787d11”"
  },
  {
    "id": "50",
    "path": "/assets/aistudio/2___1_696328b4.webp",
    "title": "시엘 일러스트 #50 (696328b4)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (696328b4).",
    "quote": "“...696328b4”"
  },
  {
    "id": "51",
    "path": "/assets/aistudio/2___1_6c311995.webp",
    "title": "시엘 일러스트 #51 (6c311995)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (6c311995).",
    "quote": "“...6c311995”"
  },
  {
    "id": "52",
    "path": "/assets/aistudio/2___1_8cd878cf.webp",
    "title": "시엘 일러스트 #52 (8cd878cf)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (8cd878cf).",
    "quote": "“...8cd878cf”"
  },
  {
    "id": "53",
    "path": "/assets/aistudio/2___1_9ddc48d4.webp",
    "title": "시엘 일러스트 #53 (9ddc48d4)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (9ddc48d4).",
    "quote": "“...9ddc48d4”"
  },
  {
    "id": "54",
    "path": "/assets/aistudio/2___1_d3f5107c.webp",
    "title": "시엘 일러스트 #54 (d3f5107c)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (d3f5107c).",
    "quote": "“...d3f5107c”"
  },
  {
    "id": "55",
    "path": "/assets/aistudio/2___1_f4ff89ff.webp",
    "title": "시엘 일러스트 #55 (f4ff89ff)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (f4ff89ff).",
    "quote": "“...f4ff89ff”"
  },
  {
    "id": "56",
    "path": "/assets/aistudio/2___2_0deec0fe.webp",
    "title": "시엘 일러스트 #56 (0deec0fe)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (0deec0fe).",
    "quote": "“...0deec0fe”"
  },
  {
    "id": "57",
    "path": "/assets/aistudio/2___2_1cf7057a.webp",
    "title": "시엘 일러스트 #57 (1cf7057a)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (1cf7057a).",
    "quote": "“...1cf7057a”"
  },
  {
    "id": "58",
    "path": "/assets/aistudio/2___2_29d17890.webp",
    "title": "시엘 일러스트 #58 (29d17890)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (29d17890).",
    "quote": "“...29d17890”"
  },
  {
    "id": "59",
    "path": "/assets/aistudio/2___2_6ddab8a0.webp",
    "title": "시엘 일러스트 #59 (6ddab8a0)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (6ddab8a0).",
    "quote": "“...6ddab8a0”"
  },
  {
    "id": "60",
    "path": "/assets/aistudio/2___2_6f950baa.webp",
    "title": "시엘 일러스트 #60 (6f950baa)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (6f950baa).",
    "quote": "“...6f950baa”"
  },
  {
    "id": "61",
    "path": "/assets/aistudio/2___2_7dd5fa9b.webp",
    "title": "시엘 일러스트 #61 (7dd5fa9b)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (7dd5fa9b).",
    "quote": "“...7dd5fa9b”"
  },
  {
    "id": "62",
    "path": "/assets/aistudio/2___2_955cdc2b.webp",
    "title": "시엘 일러스트 #62 (955cdc2b)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (955cdc2b).",
    "quote": "“...955cdc2b”"
  },
  {
    "id": "63",
    "path": "/assets/aistudio/2___2_96c2b31a.webp",
    "title": "시엘 일러스트 #63 (96c2b31a)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (96c2b31a).",
    "quote": "“...96c2b31a”"
  },
  {
    "id": "64",
    "path": "/assets/aistudio/2___2_984982f1.webp",
    "title": "시엘 일러스트 #64 (984982f1)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (984982f1).",
    "quote": "“...984982f1”"
  },
  {
    "id": "65",
    "path": "/assets/aistudio/2___2_a45815f6.webp",
    "title": "시엘 일러스트 #65 (a45815f6)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (a45815f6).",
    "quote": "“...a45815f6”"
  },
  {
    "id": "66",
    "path": "/assets/aistudio/2___2_da2ba21e.webp",
    "title": "시엘 일러스트 #66 (da2ba21e)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (da2ba21e).",
    "quote": "“...da2ba21e”"
  },
  {
    "id": "67",
    "path": "/assets/aistudio/2___3_368cb5dd.webp",
    "title": "시엘 일러스트 #67 (368cb5dd)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (368cb5dd).",
    "quote": "“...368cb5dd”"
  },
  {
    "id": "68",
    "path": "/assets/aistudio/2___3_3e378eb9.webp",
    "title": "시엘 일러스트 #68 (3e378eb9)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (3e378eb9).",
    "quote": "“...3e378eb9”"
  },
  {
    "id": "69",
    "path": "/assets/aistudio/2___3_4a893ef8.webp",
    "title": "시엘 일러스트 #69 (4a893ef8)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (4a893ef8).",
    "quote": "“...4a893ef8”"
  },
  {
    "id": "70",
    "path": "/assets/aistudio/2___3_4b6ce579.webp",
    "title": "시엘 일러스트 #70 (4b6ce579)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (4b6ce579).",
    "quote": "“...4b6ce579”"
  },
  {
    "id": "71",
    "path": "/assets/aistudio/2___3_5d890086.webp",
    "title": "시엘 일러스트 #71 (5d890086)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (5d890086).",
    "quote": "“...5d890086”"
  },
  {
    "id": "72",
    "path": "/assets/aistudio/2___3_86dce30b.webp",
    "title": "시엘 일러스트 #72 (86dce30b)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (86dce30b).",
    "quote": "“...86dce30b”"
  },
  {
    "id": "73",
    "path": "/assets/aistudio/2___3_9aceb373.webp",
    "title": "시엘 일러스트 #73 (9aceb373)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (9aceb373).",
    "quote": "“...9aceb373”"
  },
  {
    "id": "74",
    "path": "/assets/aistudio/2___3_cc4db545.webp",
    "title": "시엘 일러스트 #74 (cc4db545)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (cc4db545).",
    "quote": "“...cc4db545”"
  },
  {
    "id": "75",
    "path": "/assets/aistudio/2___3_de64dd05.webp",
    "title": "시엘 일러스트 #75 (de64dd05)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (de64dd05).",
    "quote": "“...de64dd05”"
  },
  {
    "id": "76",
    "path": "/assets/aistudio/2___3_f8c2921d.webp",
    "title": "시엘 일러스트 #76 (f8c2921d)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (f8c2921d).",
    "quote": "“...f8c2921d”"
  },
  {
    "id": "77",
    "path": "/assets/aistudio/2___4_10c40857.webp",
    "title": "시엘 일러스트 #77 (10c40857)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (10c40857).",
    "quote": "“...10c40857”"
  },
  {
    "id": "78",
    "path": "/assets/aistudio/2___4_232fdc2e.webp",
    "title": "시엘 일러스트 #78 (232fdc2e)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (232fdc2e).",
    "quote": "“...232fdc2e”"
  },
  {
    "id": "79",
    "path": "/assets/aistudio/2___4_27b325fd.webp",
    "title": "시엘 일러스트 #79 (27b325fd)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (27b325fd).",
    "quote": "“...27b325fd”"
  },
  {
    "id": "80",
    "path": "/assets/aistudio/2___4_65622656.webp",
    "title": "시엘 일러스트 #80 (2___4_65622656)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (2___4_65622656).",
    "quote": "“...2___4_65622656”"
  },
  {
    "id": "81",
    "path": "/assets/aistudio/2___4_780bdb7f.webp",
    "title": "시엘 일러스트 #81 (780bdb7f)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (780bdb7f).",
    "quote": "“...780bdb7f”"
  },
  {
    "id": "82",
    "path": "/assets/aistudio/2___4_7d160962.webp",
    "title": "시엘 일러스트 #82 (7d160962)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (7d160962).",
    "quote": "“...7d160962”"
  },
  {
    "id": "83",
    "path": "/assets/aistudio/2___4_7e28de89.webp",
    "title": "시엘 일러스트 #83 (7e28de89)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (7e28de89).",
    "quote": "“...7e28de89”"
  },
  {
    "id": "84",
    "path": "/assets/aistudio/2___4_8070a4f7.webp",
    "title": "시엘 일러스트 #84 (8070a4f7)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (8070a4f7).",
    "quote": "“...8070a4f7”"
  },
  {
    "id": "85",
    "path": "/assets/aistudio/2___4_8d818598.webp",
    "title": "시엘 일러스트 #85 (8d818598)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (8d818598).",
    "quote": "“...8d818598”"
  },
  {
    "id": "86",
    "path": "/assets/aistudio/2___5_0323b87c.webp",
    "title": "시엘 일러스트 #86 (0323b87c)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (0323b87c).",
    "quote": "“...0323b87c”"
  },
  {
    "id": "87",
    "path": "/assets/aistudio/2___7590e2e7.webp",
    "title": "시엘 일러스트 #87 (7590e2e7)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (7590e2e7).",
    "quote": "“...7590e2e7”"
  },
  {
    "id": "88",
    "path": "/assets/aistudio/2____1_8caa4db2.webp",
    "title": "시엘 일러스트 #88 (8caa4db2)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (8caa4db2).",
    "quote": "“...8caa4db2”"
  },
  {
    "id": "89",
    "path": "/assets/aistudio/2____1_babaa208.webp",
    "title": "시엘 일러스트 #89 (babaa208)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (babaa208).",
    "quote": "“...babaa208”"
  },
  {
    "id": "90",
    "path": "/assets/aistudio/2____2_794cd9e9.webp",
    "title": "시엘 일러스트 #90 (794cd9e9)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (794cd9e9).",
    "quote": "“...794cd9e9”"
  },
  {
    "id": "91",
    "path": "/assets/aistudio/2____2_9fa5c531.webp",
    "title": "시엘 일러스트 #91 (9fa5c531)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (9fa5c531).",
    "quote": "“...9fa5c531”"
  },
  {
    "id": "92",
    "path": "/assets/aistudio/2____3_06c3a516.webp",
    "title": "시엘 일러스트 #92 (06c3a516)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (06c3a516).",
    "quote": "“...06c3a516”"
  },
  {
    "id": "93",
    "path": "/assets/aistudio/2____3_5b576a49.webp",
    "title": "시엘 일러스트 #93 (5b576a49)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (5b576a49).",
    "quote": "“...5b576a49”"
  },
  {
    "id": "94",
    "path": "/assets/aistudio/2____4_13f27927.webp",
    "title": "시엘 일러스트 #94 (13f27927)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (13f27927).",
    "quote": "“...13f27927”"
  },
  {
    "id": "95",
    "path": "/assets/aistudio/2____4_9a2b30ab.webp",
    "title": "시엘 일러스트 #95 (9a2b30ab)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (9a2b30ab).",
    "quote": "“...9a2b30ab”"
  },
  {
    "id": "96",
    "path": "/assets/aistudio/2____68dc26f0.webp",
    "title": "시엘 일러스트 #96 (68dc26f0)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (68dc26f0).",
    "quote": "“...68dc26f0”"
  },
  {
    "id": "97",
    "path": "/assets/aistudio/2____7fbaffc5.webp",
    "title": "시엘 일러스트 #97 (7fbaffc5)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (7fbaffc5).",
    "quote": "“...7fbaffc5”"
  },
  {
    "id": "98",
    "path": "/assets/aistudio/2____9d99bee2.webp",
    "title": "시엘 일러스트 #98 (9d99bee2)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (9d99bee2).",
    "quote": "“...9d99bee2”"
  },
  {
    "id": "99",
    "path": "/assets/aistudio/2_____1_beeb89fb.webp",
    "title": "시엘 일러스트 #99 (beeb89fb)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (beeb89fb).",
    "quote": "“...beeb89fb”"
  },
  {
    "id": "100",
    "path": "/assets/aistudio/2_____1_d6136be9.webp",
    "title": "시엘 일러스트 #100 (d6136be9)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (d6136be9).",
    "quote": "“...d6136be9”"
  },
  {
    "id": "101",
    "path": "/assets/aistudio/2_____2_5283949a.webp",
    "title": "시엘 일러스트 #101 (5283949a)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (5283949a).",
    "quote": "“...5283949a”"
  },
  {
    "id": "102",
    "path": "/assets/aistudio/2_____353ce1a2.webp",
    "title": "시엘 일러스트 #102 (353ce1a2)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (353ce1a2).",
    "quote": "“...353ce1a2”"
  },
  {
    "id": "103",
    "path": "/assets/aistudio/2_____3_04335643.webp",
    "title": "시엘 일러스트 #103 (2_____3_04335643)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (2_____3_04335643).",
    "quote": "“...2_____3_04335643”"
  },
  {
    "id": "104",
    "path": "/assets/aistudio/2_____4_2fb0eb53.webp",
    "title": "시엘 일러스트 #104 (2fb0eb53)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (2fb0eb53).",
    "quote": "“...2fb0eb53”"
  },
  {
    "id": "105",
    "path": "/assets/aistudio/2_____980aea44.webp",
    "title": "시엘 일러스트 #105 (980aea44)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (980aea44).",
    "quote": "“...980aea44”"
  },
  {
    "id": "106",
    "path": "/assets/aistudio/2______9faa811b.webp",
    "title": "시엘 일러스트 #106 (9faa811b)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (9faa811b).",
    "quote": "“...9faa811b”"
  },
  {
    "id": "107",
    "path": "/assets/aistudio/2_______0200f5df.webp",
    "title": "시엘 일러스트 #107 (0200f5df)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (0200f5df).",
    "quote": "“...0200f5df”"
  },
  {
    "id": "108",
    "path": "/assets/aistudio/2_____fcabfe78.webp",
    "title": "시엘 일러스트 #108 (fcabfe78)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (fcabfe78).",
    "quote": "“...fcabfe78”"
  },
  {
    "id": "109",
    "path": "/assets/aistudio/3___1_ccbd27d5.webp",
    "title": "시엘 일러스트 #109 (ccbd27d5)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (ccbd27d5).",
    "quote": "“...ccbd27d5”"
  },
  {
    "id": "110",
    "path": "/assets/aistudio/3___2_669bde34.webp",
    "title": "시엘 일러스트 #110 (669bde34)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (669bde34).",
    "quote": "“...669bde34”"
  },
  {
    "id": "111",
    "path": "/assets/aistudio/3___3_34dee8b5.webp",
    "title": "시엘 일러스트 #111 (34dee8b5)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (34dee8b5).",
    "quote": "“...34dee8b5”"
  },
  {
    "id": "112",
    "path": "/assets/aistudio/3___4_0f05ffeb.webp",
    "title": "시엘 일러스트 #112 (0f05ffeb)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (0f05ffeb).",
    "quote": "“...0f05ffeb”"
  },
  {
    "id": "113",
    "path": "/assets/aistudio/3____1_230a9cda.webp",
    "title": "시엘 일러스트 #113 (230a9cda)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (230a9cda).",
    "quote": "“...230a9cda”"
  },
  {
    "id": "114",
    "path": "/assets/aistudio/3____1_f235583f.webp",
    "title": "시엘 일러스트 #114 (f235583f)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (f235583f).",
    "quote": "“...f235583f”"
  },
  {
    "id": "115",
    "path": "/assets/aistudio/3____2_7cb58d54.webp",
    "title": "시엘 일러스트 #115 (7cb58d54)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (7cb58d54).",
    "quote": "“...7cb58d54”"
  },
  {
    "id": "116",
    "path": "/assets/aistudio/3____376c3f82.webp",
    "title": "시엘 일러스트 #116 (376c3f82)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (376c3f82).",
    "quote": "“...376c3f82”"
  },
  {
    "id": "117",
    "path": "/assets/aistudio/3____5c5a75ec.webp",
    "title": "시엘 일러스트 #117 (5c5a75ec)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (5c5a75ec).",
    "quote": "“...5c5a75ec”"
  },
  {
    "id": "118",
    "path": "/assets/aistudio/3____99cef2f5.webp",
    "title": "시엘 일러스트 #118 (99cef2f5)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (99cef2f5).",
    "quote": "“...99cef2f5”"
  },
  {
    "id": "119",
    "path": "/assets/aistudio/3_____9a19443b.webp",
    "title": "시엘 일러스트 #119 (9a19443b)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (9a19443b).",
    "quote": "“...9a19443b”"
  },
  {
    "id": "120",
    "path": "/assets/aistudio/4___1_75a13d99.webp",
    "title": "시엘 일러스트 #120 (75a13d99)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (75a13d99).",
    "quote": "“...75a13d99”"
  },
  {
    "id": "121",
    "path": "/assets/aistudio/4___1_99bb9225.webp",
    "title": "시엘 일러스트 #121 (99bb9225)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (99bb9225).",
    "quote": "“...99bb9225”"
  },
  {
    "id": "122",
    "path": "/assets/aistudio/4___2_23dba93a.webp",
    "title": "시엘 일러스트 #122 (23dba93a)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (23dba93a).",
    "quote": "“...23dba93a”"
  },
  {
    "id": "123",
    "path": "/assets/aistudio/______15a51eb4.webp",
    "title": "시엘 일러스트 #123 (15a51eb4)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (15a51eb4).",
    "quote": "“...15a51eb4”"
  },
  {
    "id": "124",
    "path": "/assets/aistudio/__________4f212227.webp",
    "title": "시엘 일러스트 #124 (4f212227)",
    "category": "fox",
    "description": "시엘의 고유 일러스트 (4f212227).",
    "quote": "“...4f212227”"
  }
];
