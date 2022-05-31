/*
'페퍼 포츠(INTJ)',0 
'제인 포스터(INTP)',1 
'닉 퓨리(ENTJ)',2 
'토니 스타크(ENTP)',3 
'브루스 배너(INFJ)',4 
'스칼렛 위치(INFP)',5 
'로키(ENFJ)',6 
'피터 파커(ENFP)',7 
'네뷸라(ISTJ)',8 
'스티브 로저스(ISFJ)',9 
'토르(ESTJ)',10 
'필 콜슨(ESFJ)',11
'나타샤 로마노프(ISTP)',12
'버키(ISFP)',13
'호크 아이(ESTP)',14
'스타로드(ESFP)',15
*/


const qnaList = [
    {
      q: '1. 파티에서 나는',
      a: [
        { answer: 'a. 처음 본 사람들과 쉽게 친해지는 편이다.', type: [2, 3, 6, 7, 10, 11, 14, 15] }, //E 유형
        { answer: 'b. 친한 사람이나 친구가 없으면 불편하다.', type: [0, 1, 4, 5, 8, 9, 12, 13] }, //I 유형
      ]
    },
    {
      q: '2. 나는 친구들에게',
      a: [
        { answer: 'a. 내가 직접 보고 들은 것에 대해 이야기하는 것을 좋아한다.', type: [8, 9, 10, 11, 12, 13, 14, 15] }, //S 유형
        { answer: 'b. 내가 상상한 것을 이야기 하는 것을 좋아한다.', type: [0, 1, 2, 3, 4, 5, 6, 7] }, //N 유형
      ]
    },
    {
      q: '3. 내가 되고 싶은 사람은',
      a: [
        { answer: 'a. 공평한 사람이다.', type: [0, 1, 2, 3, 8, 10, 12, 14] }, //T 유형
        { answer: 'b. 친절한 사람이다.', type: [4, 5, 6, 7, 9, 11, 13, 15] }, //F 유형
      ]
    },
    {
      q: '4. 달리기에서 이기면',
      a: [
        { answer: 'a. 기분이 아주 좋다.', type: [0, 1, 2, 3, 8, 10, 12, 14] }, //T 유형
        { answer: 'b. 기분은 좋지만 진 사람의 기분이 어떨까 생각한다.', type: [4, 5, 6, 7, 9, 11, 13, 15] }, //F 유형
      ]
    },
    {
      q: '5. 나는 과제물을',
      a: [
        { answer: 'a. 잘 챙기는 편이다.', type: [0, 2, 4, 6, 8, 9, 10, 11] }, //J 유형
        { answer: 'b. 잘 잊어먹는 편이다.', type: [1, 3, 5, 7, 12, 13, 14, 15] }, // P 유형
      ]
    },
  
    {
      q: '6. 게임의 규칙은',
      a: [
        { answer: 'a. 절대로 바뀌면 안 된다.', type: [0, 2, 4, 6, 8, 9, 10, 11] }, //J 유형
        { answer: 'b. 경우에 따라 바뀔 수 있다.', type: [1, 3, 5, 7, 12, 13, 14, 15] }, // P 유형
      ]
    },
    {
      q: '7. 어려운 일에 부딪히면',
      a: [
        { answer: 'a. 하던 일을 잘 못한다.', type: [8, 9, 10, 11, 12, 13, 14, 15] }, //S 유형
        { answer: 'b. 도전하고 싶은 마음이 생긴다.', type: [0, 1, 2, 3, 4, 5, 6, 7] }, //N 유형
      ]
    },
    {
      q: '8. 나는 나의 생각과 느낌을',
      a: [
        { answer: 'a. 말로 표현하는 것이 편하다.', type: [2, 3, 6, 7, 10, 11, 14, 15] }, //E 유형
        { answer: 'b. 글로 표현하는 것이 편하다.', type: [0, 1, 4, 5, 8, 9, 12, 13] }, //I 유형
      ]
    },
    {
      q: '9. 나는 무엇을 할 때',
      a: [
        { answer: 'a. 전에 배웠던 대로 하는 것이 편하다.', type: [8, 9, 10, 11, 12, 13, 14, 15] }, //S 유형
        { answer: 'b. 새로운 방법을 생각해볼 때 더 재미있다.', type: [0, 1, 2, 3, 4, 5, 6, 7] }, //N 유형
      ]
    },
    {
      q: '10. 규칙과 제도는',
      a: [
        { answer: 'a. 조직이나 사회 질서를 위해 존중되어야 한다.', type: [0, 2, 4, 6, 8, 9, 10, 11] }, //J 유형
        { answer: 'b. 사람을 억압하고 불편하게 할 때가 많다.', type: [1, 3, 5, 7, 12, 13, 14, 15] }, // P 유형
      ]
    },
    {
      q: '11. 열심히 준비한 발표를 망쳤을 때',
      a: [
        { answer: 'a. 실질적인 향후 개선을 위해 객관적인 피드백을 듣고 싶다.', type: [0, 1, 2, 3, 8, 10, 12, 14] }, //T 유형
        { answer: 'b. 잘 되지 않은 발표에 대한 공감과 위로를 받고 싶다.', type: [4, 5, 6, 7, 9, 11, 13, 15] }, //F 유형
      ]
    },
    {
      q: '12. 처음 보는 친구들을 만나면',
      a: [
        { answer: 'a. 내가 먼저 말한다.', type: [2, 3, 6, 7, 10, 11, 14, 15] }, //E 유형
        { answer: 'b. 다른 친구가 나에게 먼저 말을 걸 때까지 기다리는 편이다.', type: [0, 1, 4, 5, 8, 9, 12, 13] }, //I 유형
      ]
    },
    {
      q: '13. 나는 책을 읽을 때',
      a: [
        { answer: 'a. 좋아하는 책은 읽은 것이라도 또 읽는다.', type: [8, 9, 10, 11, 12, 13, 14, 15] }, //S 유형
        { answer: 'b. 새로운 다른 책을 읽는 것이 좋다.', type: [0, 1, 2, 3, 4, 5, 6, 7] }, //N 유형
      ]
    },
    {
      q: '14. 우리 편이 지면',
      a: [
        { answer: 'a. 다음번에는 이기도록 계획을 짠다.', type: [0, 1, 2, 3, 8, 10, 12, 14] }, //T 유형
        { answer: 'b. "다음에 이기면 되지"라고 생각하며, 친구들의 기분을 좋게 해주려고 한다.', type: [4, 5, 6, 7, 9, 11, 13, 15] }, //F 유형
      ]
    },
    {
      q: '15. 나는 남들과 연극을 함께 만든다면',
      a: [
        { answer: 'a. 주인공이 되고 싶다.', type: [2, 3, 6, 7, 10, 11, 14, 15] }, //E 유형
        { answer: 'b. 연극을 위해 무대 장치나 대본을 다듬는 일을 하고 싶다.', type: [0, 1, 4, 5, 8, 9, 12, 13] }, //I 유형
      ]
    },
    {
      q: '16. 자전거를 탈 때',
      a: [
        { answer: 'a. 어디로 갈지 미리 생각하고 탄다.', type: [0, 2, 4, 6, 8, 9, 10, 11] }, //J 유형
        { answer: 'b. 그냥 달리고 나서 어디로 갈지 생각한다.', type: [1, 3, 5, 7, 12, 13, 14, 15] }, // P 유형
      ]
    },
    {
      q: '17. 친구의 잘못된 점을',
      a: [
        { answer: 'a. 지적해주는 편이다.', type: [0, 1, 2, 3, 8, 10, 12, 14] }, //T 유형
        { answer: 'b. 지적해 주면 친구가 어떻게 생각할까 걱정이 돼서 말하지 않는 편이다.', type: [4, 5, 6, 7, 9, 11, 13, 15] }, //F 유형
      ]
    },
    {
      q: '18. 나는 서로',
      a: [
        { answer: 'a. 선의의 경쟁을 하는 분위기에서 내 능력을 잘 발휘한다.', type: [0, 1, 2, 3, 8, 10, 12, 14] }, //T 유형
        { answer: 'b. 협력하여 무언가를 이루어내는 분위기에서 내 능력을 잘 발휘한다.', type: [4, 5, 6, 7, 9, 11, 13, 15] }, //F 유형
      ]
    },
    {
      q: '19. 약속을 정할 때',
      a: [
        { answer: 'a. 언제, 어디서, 몇 시에 만나며, 무엇을 하고 놀지 미리 정하는 편이다.', type: [0, 2, 4, 6, 8, 9, 10, 11] }, //J 유형
        { answer: 'b. 어떻게 될지 모르기 때문에 그때 가서 정하는 편이다.', type: [1, 3, 5, 7, 12, 13, 14, 15] }, // P 유형
      ]
    },
    {
      q: '20. 나는 스트레스를 받았을 때',
      a: [
        { answer: 'a. 친한 사람들과 만나 떠들며 놀고 싶어한다.', type: [2, 3, 6, 7, 10, 11, 14, 15] }, //E 유형
        { answer: 'b. 혼자서 좋아하는 것을 하며 몰입한다.', type: [0, 1, 4, 5, 8, 9, 12, 13] }, //I 유형
      ]
    }
  ]
  
  const infoList = [
    {
      name: '용의주도한 전략가(INTJ) <페퍼 포츠>',
      desc: '전체 인구의 2% 밖에 되지 않을 정도의 소수 인물, 용의주도하게 전략을 세우고 실행하는 사람. 원칙 주의자이며, 완벽함을 추구해요. 수를 두고 상대방의 허를 찌르는 기술로 상황을 유리하게 이끌어내기도 해요. '
    },
    {
      name: '논리적인 사색가(INTP) <제인 포스터>',
      desc: '전체 인구의 3% 정도로, 평범함은 질색이에요. 독창성과 왕성한 지적 호기심을 가진 사람. 주변 사람들의 언행 불일치를 집어내 트집 잡는 것을 즐기고, 한시 쉴 틈 없이 생각에 몰두해요. 주변 사람들의 불평이나 불만을 이해하지 못해요. '
    },
    {
      name: '대담한 통솔자(ENTJ) <닉 퓨리>',
      desc: '천성적으로 타고난 리더적 성향을 가지고 있어요. 굉장할 정도로 이성적 사고와 판단을 하기도 해요. 장기적인 안목과 판단력을 가지며, 성취 가능한 도전에 매력을 느끼기도 해요. 협상에서든 대립에서든 물러섬이 없고 필요 이상으로 자신을 과대 포장하는 경향이 있어요. '
    },
    {
      name: '논쟁을 즐기는 변론가(ENTP) <토니 스타크>',
      desc: '재치있는 입담은 물론 풍부한 지식을 가지고 논쟁을 즐기는 사람이에요. 논쟁은 때에 따라 좋게 작용하기도 하지만, 가끔 상대방의 기분을 나쁘게 하기도 해요. 솔직함이 매력이에요. 논쟁을 통해 상대방의 관점을 꿰뚫어 보는 능력을 소유하고 있어요. '
    },
    {
      name: '선의의 옹호자(INFJ) <브루스 배너>',
      desc: '전체 인구의 1% 밖에 되지 않는 희귀한 성격 유형이에요. 이상향을 꿈꾸는 데에 게으름이 없고 구체적으로 계획을 세워 이행해요. 나긋나긋한 목소리 뒤에 강인함이 있고, 옳다고 생각하는 일은 투쟁하기고 해요. 섬세한 면도 있어 대화를 할 때 따뜻한 언어를 사용하는 것이 특징이에요. '
    },
    {
      name: '열정적인 중재자(INFP) <스칼렛 위치>',
      desc: '최악의 상황, 최악의 사람에게서도 좋은 면만 바라보려고 노력하는 이상주의자에요. 내성적이고 수줍음이 많아 보이지만 내면에 열정이 숨어 있어요. 주변 사람들이 이해를 잘 못해서 자칫 외톨이가 될 수도 있지만, 대화할 때는 적절한 은유를 통해 깊이 있는 의사소통을 해요. '
    },
    {
      name: '정의로운 사회운동가(ENFJ) <로키>',
      desc: '사람들을 독려하는 카리스마와 열정을 지닌 리더형이에요. 진정으로 타인을 염려하고 옳은 일을 위해 쓴소리도 많이 해요. 타인을 믿으면 깊이 관여해서 문제가 생기기도 해요. 옳은 일이라고 생각하면 남을 대신하여 총대를 매기도 해요. '
    },
    {
      name: '재기발랄한 활동가(ENFP) <피터 파커>',
      desc: '자유로운 사고를 좋아해요. 분위기 메이커 역할을 하며 어느 집단에 가든 한 사람씩은 꼭 있어요. 창의적인 문제 해결을 좋아하기 때문에 반복적인 업무는 싫어해요. '
    },
    {
      name: '청렴결백한 논리주의자(ISTJ) <네뷸라>',
      desc: '인구의 13%가 이 유형이라고 해요. 책임을 다하려고 하며, 하는 일에 자부심을 갖기도 해요. 목표를 달성하기 위해 에너지를 허투루 쓰지 않고, 필요한 업무를 정확하고 신중하게 처리해요. 현실적인 계획을 세우고, 우유부단한 것을 싫어하며, 뜻하는대로 되지 않으면 불편한 심기가 얼굴에 드러나요. '
    },
    {
      name: '용감한 수호자(ISFJ) <스티브 로저스>',
      desc: '타인을 향한 동정심을 가지며 가족이나 친구를 보호하기 위해서는 가차없는 모습을 보이는 사람. 조용하고 내성적이지만 관계술이 뛰어나 인간관계를 잘 만들어요. 안정적이면서 변화를 잘 수용하고 이 유형은 한 마디로 정의하기 어려운 사람이에요. '
    },
    {
      name: '엄격한 관리자(ESTJ) <토르>',
      desc: '필요한 질서를 정립하는데 이바지하는 성격의 사람. 정직하고 헌신적이며 조언을 통해 타인을 올바른 길로 인도할줄 알아요. 주변 상황을 잘 파악하여 사실에 근거하여 사고하는 경향이 있어요. 업무를 하는데 있어서 엄격한 가치관을 가지고 다른 사람도 이러한 가치관을 갖길 원해요. '
    },
    {
      name: '사교적인 외교관(ESFJ) <필 콜슨>',
      desc: '분위기를 이끄는 인기쟁이에요. 다른 이들을 즐겁게 해주기 위해 노력하는 사람. 계급 체계를 선호하고, 어느 정도의 사회적 지위와 권력을 갖기를 희망해요. 수다 떨면서 분위기를 띄우기도 하지만, 다른 사람의 이야기를 세세히 기억하는 경향도 있어요. '
    },
    {
      name: '만능 재주꾼(ISTP) <나타샤 로마노프>',
      desc: '직접 손으로 만지고 눈으로 보면서 세상 탐색하는 것을 좋아해요. 자질구레한 것들을 만드는 것을 좋아하고, 새로운 것이 나오면 터득해야 하는 사람이에요. 직접 소매를 걷어 무언가를 조립하는 일을 좋아해요. 타인을 도우며 경험을 공유하는 것을 좋아해요. '
    },
    {
      name: '호기심 많은 예술가(ISFP) <버키>',
      desc: '다양한 아이디어나 주변 사람들로부터 영감을 받아 감각적인 삶을 사는 사람. 본인의 시각으로 재해석하며 새로운 것을 발견하기 좋아해요. 또한 실험 정신도 뛰어나요. 어디로 튈지 모르는 즉흥적인 성향도 있어요. 도박이나 익스트림 스포츠 등 위험성을 내재한 활동을 즐기기도 해요. '
    },
    {
      name: '모험을 즐기는 사업가(ESTP) <호크 아이>',
      desc: '직설적이며 친근한 농담으로 주변 사람들을 웃게 만들며 이목을 끄는 유형의 사람. 말로만 하는 것보단 몸으로 부딪히는 것을 선호해요. 예리하면서 타인의 변화를 바로 감지해요. 다만 상황에 몰두하는 경향이 있어 타인에게 상처를 입히기도 해요. '
    },
    {
      name: '자유로운 영혼(ESFP) <스타로드>',
      desc: '흥분되는 감정에 쉽게 빠져들고, 즉흥적으로 갑자기 춤을 추기도 하는 연예인 과에요. 천부적인 스타성으로 지니고 있어요. 미적 감각도 뛰어나 자신을 꾸미거나 인테리어를 하는 등의 활동에서 부각되기도 해요. 즐거움에 심취하긴 하지만, 책임이나 의무는 회피하는 경향이 있어요. '
    },
  ]
