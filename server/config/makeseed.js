exports.makeComments = makeComments;
exports.makeCards = makeCards;
exports.seedUsers = seedUsers;



var seedUsers = [{
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    }];








function makeCards(_userId){
 
  var seedCard = {
          creator: _userId,
          title: 'Can we make Euthopia?',
          idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
          link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
          };
  return seedCard;

}




function makeComments(_userId, _cardId){

var seedComments = [{
                  category: 'A',
                  card: _cardId,
                  creator: _userId,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'B',
                  card: _cardId,
                  creator: _userId,
                  title: 'Why do we use it?',
                  idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'C',
                  card: _cardId,
                  creator: _userId,
                  title: 'Where does it come from?',
                  idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'D',
                  card: _cardId,
                  creator: _userId,
                  title: 'Where can I get some?',
                  idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'E',
                  card: _cardId,
                  creator: _userId,
                  title: 'The standard Lorem Ipsum passage, used since the 1500s',
                  idea: ' ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'F',
                  card: _cardId,
                  creator: _userId,
                  title: 'Section 1.10.32',
                  idea: 'o inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptat',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'A',
                  card: _cardId,
                  creator: _userId,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'B',
                  card: _cardId,
                  creator: _userId,
                  title: 'Why do we use it?',
                  idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'C',
                  card: _cardId,
                  creator: _userId,
                  title: 'Where does it come from?',
                  idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'D',
                  card: _cardId,
                  creator: _userId,
                  title: 'Where can I get some?',
                  idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'E',
                  card: _cardId,
                  creator: _userId,
                  title: 'The standard Lorem Ipsum passage, used since the 1500s',
                  idea: ' ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'F',
                  card: _cardId,
                  creator: _userId,
                  title: 'Section 1.10.32',
                  idea: 'o inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptat',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'A',
                  card: _cardId,
                  creator: _userId,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'B',
                  card: _cardId,
                  creator: _userId,
                  title: 'Why do we use it?',
                  idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'C',
                  card: _cardId,
                  creator: _userId,
                  title: 'Where does it come from?',
                  idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'D',
                  card: _cardId,
                  creator: _userId,
                  title: 'Where can I get some?',
                  idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'E',
                  card: _cardId,
                  creator: _userId,
                  title: 'The standard Lorem Ipsum passage, used since the 1500s',
                  idea: ' ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'A',
                  card: _cardId,
                  creator: _userId,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'B',
                  card: _cardId,
                  creator: _userId,
                  title: 'Why do we use it?',
                  idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'C',
                  card: _cardId,
                  creator: _userId,
                  title: 'Where does it come from?',
                  idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'D',
                  card: _cardId,
                  creator: _userId,
                  title: 'Where can I get some?',
                  idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'A',
                  card: _cardId,
                  creator: _userId,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'B',
                  card: _cardId,
                  creator: _userId,
                  title: 'Why do we use it?',
                  idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'C',
                  card: _cardId,
                  creator: _userId,
                  title: 'Where does it come from?',
                  idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'A',
                  card: _cardId,
                  creator: _userId,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'B',
                  card: _cardId,
                  creator: _userId,
                  title: 'Why do we use it?',
                  idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 'A',
                  card: _cardId,
                  creator: _userId,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                }
                ];
                

                return seedComments;

}