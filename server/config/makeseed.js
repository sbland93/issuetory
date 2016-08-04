exports.makeComments = makeComments;
exports.makeCards = makeCards;
exports.makeUsers = makeUsers;


function makeUsers(){

	var seedUsers = [{
	      provider: 'local',
	      name: 'Test User',
	      email: 'test@example.com',
	      password: 'test'
	    },{
        provider: 'local',
        name: 'Test User1',
        email: 'test1@example.com',
        password: 'test1'
      },{
        provider: 'local',
        name: 'Test User2',
        email: 'test2@example.com',
        password: 'test2'
      },
      {
        provider: 'local',
        name: 'Test User3',
        email: 'test3@example.com',
        password: 'test3'
      }, {
	      provider: 'local',
	      role: 'admin',
	      name: 'Admin',
	      email: 'admin@example.com',
	      password: 'admin'
	    }];
	return seedUsers;

}



function makeCards(_userArray){
 
  var seedCard = {
          creator: _userArray[0]._id,
          /*title: 'Can we make Euthopia?',
          hit: [_userArray[0]._id],
          idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
          link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
          keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],*/
          versions: [{contributor: _userArray[1]._id,
           title: 'Would we make Eutopia?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[2]._id,
           title: 'should we make Eutopia?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[3]._id,
           title: 'If we make Eutopia',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          }]
      };

  return seedCard;
  
}



function makeComments(_userArray, _cardId){

var seedComments = [{
                  card: _cardId,
                  creator: _userArray[1]._id,
                  hit: [_userArray[1]._id, _userArray[2]._id],
                  versions: [
                    { category: 1, contributor: _userArray[1]._id ,title: 'What is Lorem Ipsum?',idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]},
                    { category: 1, contributor: _userArray[0]._id, title: 'Version1', idea: 'idea1', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}] },
                    { category: 1, contributor: _userArray[0]._id, title: 'Version2', idea: 'idea2', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}] },          
                    { category: 1, contributor: _userArray[0]._id, title: 'Version3', idea: 'idea3', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}] }          
                    ]
                },
                {
                  card: _cardId,
                  creator: _userArray[2]._id,
                  hit: [_userArray[1]._id],
                  versions: [
                  {category: 2, title: 'Why do we use it?', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]},
                  {category: 2, title: 'Why do we use it?(version1)', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]},
                  {category: 2, title: 'Why do we use it?(version2)', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardId,
                  creator: _userArray[3]._id,
                  versions: [
                  {category: 3, title: 'Where does it come from?', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]},
                  {category: 3, title: 'Where does it come from?(version1)', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]},
                  {category: 3, title: 'Where does it come from?(version2)', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardId,
                  creator: _userArray[3]._id,
                  versions: [
                  {category: 4, title: 'Where can I get some?', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]},
                  {category: 4, title: 'Where can I get some?(version1)', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]},
                  {category: 4, title: 'Where can I get some?(version2)', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardId,
                  creator: _userArray[0]._id,
                  versions: [
                  {category: 5, title: 'The standard Lorem Ipsum passage, used since the 1500s', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]},
                  {category: 5, title: 'The standard Lorem Ipsum passage(version1), used since the 1500s', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]},
                  {category: 5, title: 'The standard Lorem Ipsum passage(version2), used since the 1500s', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardId,
                  creator: _userArray[0]._id,
                  versions: [
                  {category: 6, title: '1914 translation by H. Rackham', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]},
                  {category: 6, title: '1914 translation by H. Rackham(version1)', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]},
                  {category: 6, title: '1914 translation by H. Rackham(version2)', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}]}
                  ]

                }/*,
                {
                  category: 1,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 2,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Why do we use it?',
                  idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 3,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Where does it come from?',
                  idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 4,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Where can I get some?',
                  idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 5,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'The standard Lorem Ipsum passage, used since the 1500s',
                  idea: ' ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 6,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Section 1.10.32',
                  idea: 'o inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptat',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 1,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 2,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Why do we use it?',
                  idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 3,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Where does it come from?',
                  idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 4,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Where can I get some?',
                  idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 5,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'The standard Lorem Ipsum passage, used since the 1500s',
                  idea: ' ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 1,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 2,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Why do we use it?',
                  idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 3,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Where does it come from?',
                  idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 4,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Where can I get some?',
                  idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 1,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 2,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Why do we use it?',
                  idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 3,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Where does it come from?',
                  idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 1,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 2,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'Why do we use it?',
                  idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                },
                {
                  category: 1,
                  card: _cardId,
                  creator: _userArray[0]._id,
                  title: 'What is Lorem Ipsum?',
                  idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                  link: [{title: 'Naver', url:'http://www.naver.com'}, {title: 'Daum', url: 'http://www.daum.net'}],
                }*/
                ];
                

                return seedComments;

}