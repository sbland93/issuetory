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
      },
      {
        provider: 'local',
        name: 'Test User4',
        email: 'test4@example.com',
        password: 'test4'
      },
      {
        provider: 'local',
        name: 'Test User5',
        email: 'test5@example.com',
        password: 'test5'
      },
      {
        provider: 'local',
        name: 'Test User6',
        email: 'test6@example.com',
        password: 'test6'
      },
      {
        provider: 'local',
        name: 'Test User7',
        email: 'test7@example.com',
        password: 'test7'
      },
      {
        provider: 'local',
        name: 'Test User8',
        email: 'test8@example.com',
        password: 'test8'
      },
      {
        provider: 'local',
        name: 'Test User9',
        email: 'test9@example.com',
        password: 'test9'
      },
      {
        provider: 'local',
        name: 'Test User10',
        email: 'test10@example.com',
        password: 'test10'
      },
      {
        provider: 'local',
        name: 'Test User11',
        email: 'test11@example.com',
        password: 'test11'
      },
       {
	      provider: 'local',
	      role: 'admin',
	      name: 'Admin',
	      email: 'admin@example.com',
	      password: 'admin'
	    }];


	return seedUsers;

}

var time = new Date();
time.setDate(15);

function makeCards(_userArray){
 
  var seedCard = [
{
          creator: _userArray[0]._id,
          versions: [{contributor: _userArray[1]._id,
           title: 'Would we make Eutopia?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[2]._id,
           title: 'should we make Eutopia?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[3]._id,
           title: 'If we make Eutopia',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          }]
},
{

          creator: _userArray[0]._id,
          versions: [{contributor: _userArray[1]._id,
           title: 'Really?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Test', '한국말', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[2]._id,
           title: 'should we make Eutopia?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[3]._id,
           title: 'If we make Eutopia',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          }]
},
{

          creator: _userArray[0]._id,
          versions: [{contributor: _userArray[1]._id,
           title: '강남역 살인사건에 대해 어떻게 생각하세요?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Test', '한국말', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[2]._id,
           title: 'should we make Eutopia?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[3]._id,
           title: 'If we make Eutopia',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          }]
},
{

          creator: _userArray[0]._id,
          versions: [{contributor: _userArray[1]._id,
           title: '교과서 국정화, 이대로 괜찮은가.',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Test', '한국말', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[2]._id,
           title: 'should we make Eutopia?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[3]._id,
           title: 'If we make Eutopia',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          }]
},
{

          creator: _userArray[0]._id,
          created_at: time,
          versions: [{contributor: _userArray[1]._id,
           title: '지코, 설현 과연?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Test', '한국말', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[2]._id,
           title: 'should we make Eutopia?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[3]._id,
           title: 'If we make Eutopia',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          }]
},
{

          creator: _userArray[0]._id,
          created_at: time,
          versions: [{contributor: _userArray[1]._id,
           title: '티파니 욱일기 사태',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Test', '한국말', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[2]._id,
           title: 'should we make Eutopia?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[3]._id,
           title: 'If we make Eutopia',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          }]
},
{

          creator: _userArray[0]._id,
          versions: [{contributor: _userArray[1]._id,
           title: '한국 영화시장 어떻게 생각하세요',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Test', '한국말', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[2]._id,
           title: 'should we make Eutopia?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[3]._id,
           title: 'If we make Eutopia',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          }]
},
{

          creator: _userArray[0]._id,
          versions: [{contributor: _userArray[1]._id,
           title: '계속되는 기상청 오보 사태에 관하여.',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Test', '한국말', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[2]._id,
           title: 'should we make Eutopia?',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          },
          {contributor: _userArray[3]._id,
           title: 'If we make Eutopia',
           idea: 'I want to make world to discuss constructively. Really. It"s my pure insight and aspect. And you knwo, sharing constructive idea can help the world to make better. I believe our websites can help make world better than in the past. And this is the real and pure value of web ability.',
           link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}],
           keyword: ['Insta', 'Facebook', 'Google', 'Amazon', 'Apple', 'Samsung'],    
          }]
}

      ];

  return seedCard;
  
}



function makeComments(_userArray, _cardArray){

var seedComments = [
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[1]._id,
                  hit: [_userArray[1]._id, _userArray[2]._id],
                  upvote: 2,
                  versions: [
                    { category: 1, contributor: _userArray[1]._id ,title: 'What is Lorem Ipsum?',idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                    { category: 1, contributor: _userArray[0]._id, title: 'Version1', idea: 'idea1', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}] },
                    { category: 1, contributor: _userArray[0]._id, title: 'Version2', idea: 'idea2', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}] },          
                    { category: 1, contributor: _userArray[0]._id, title: 'Version3', idea: 'idea3', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}] }          
                    ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[2]._id,
                  hit: [_userArray[1]._id],
                  upvote: 1,
                  versions: [
                  {category: 2, title: 'Why do we use it?', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 2, title: 'Why do we use it?(version1)', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 2, title: 'Why do we use it?(version2)', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[3]._id,
                  versions: [
                  {category: 3, title: 'Where does it come from?', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 3, title: 'Where does it come from?(version1)', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 3, title: 'Where does it come from?(version2)', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[3]._id,
                  versions: [
                  {category: 4, title: 'Where can I get some?', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 4, title: 'Where can I get some?(version1)', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 4, title: 'Where can I get some?(version2)', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[0]._id,
                  versions: [
                  {category: 5, title: 'The standard Lorem Ipsum passage, used since the 1500s', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 5, title: 'The standard Lorem Ipsum passage(version1), used since the 1500s', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 5, title: 'The standard Lorem Ipsum passage(version2), used since the 1500s', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[0]._id,
                  versions: [
                  {category: 6, title: '1914 translation by H. Rackham', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 6, title: '1914 translation by H. Rackham(version1)', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 6, title: '1914 translation by H. Rackham(version2)', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[1]._id,
                  hit: [_userArray[1]._id, _userArray[2]._id],
                  upvote: 2,
                  versions: [
                    { category: 1, contributor: _userArray[1]._id ,title: 'What is Lorem Ipsum?(simillar1)',idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                    { category: 1, contributor: _userArray[0]._id, title: 'Version1', idea: 'idea1', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}] },
                    { category: 1, contributor: _userArray[0]._id, title: 'Version2', idea: 'idea2', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}] },          
                    { category: 1, contributor: _userArray[0]._id, title: 'Version3', idea: 'idea3', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}] }          
                    ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[2]._id,
                  hit: [_userArray[1]._id],
                  upvote: 1,
                  versions: [
                  {category: 2, title: 'Why do we use it?(simillar1)', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 2, title: 'Why do we use it?(version1)', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 2, title: 'Why do we use it?(version2)', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[3]._id,
                  versions: [
                  {category: 3, title: 'Where does it come from?(simillar1)', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 3, title: 'Where does it come from?(version1)', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 3, title: 'Where does it come from?(version2)', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[3]._id,
                  versions: [
                  {category: 4, title: 'Where can I get some?(simillar1)', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 4, title: 'Where can I get some?(version1)', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 4, title: 'Where can I get some?(version2)', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[0]._id,
                  versions: [
                  {category: 5, title: 'The standard Lorem Ipsum passage, used since the 1500s(simillar1)', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 5, title: 'The standard Lorem Ipsum passage(version1), used since the 1500s', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 5, title: 'The standard Lorem Ipsum passage(version2), used since the 1500s', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[0]._id,
                  versions: [
                  {category: 6, title: '1914 translation by H. Rackham(simillar1)', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 6, title: '1914 translation by H. Rackham(version1)', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 6, title: '1914 translation by H. Rackham(version2)', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[1]._id,
                  hit: [_userArray[1]._id, _userArray[2]._id],
                  upvote: 2,
                  versions: [
                    { category: 1, contributor: _userArray[1]._id ,title: 'What is Lorem Ipsum?(simillar2)',idea: ' it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                    { category: 1, contributor: _userArray[0]._id, title: 'Version1', idea: 'idea1', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}] },
                    { category: 1, contributor: _userArray[0]._id, title: 'Version2', idea: 'idea2', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}] },          
                    { category: 1, contributor: _userArray[0]._id, title: 'Version3', idea: 'idea3', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}] }          
                    ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[2]._id,
                  hit: [_userArray[1]._id],
                  upvote: 1,
                  versions: [
                  {category: 2, title: 'Why do we use it?(simillar2)', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 2, title: 'Why do we use it?(version1)', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 2, title: 'Why do we use it?(version2)', idea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us',link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[3]._id,
                  versions: [
                  {category: 3, title: 'Where does it come from?(simillar2)', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 3, title: 'Where does it come from?(version1)', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 3, title: 'Where does it come from?(version2)', idea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[3]._id,
                  versions: [
                  {category: 4, title: 'Where can I get some?(simillar2)', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 4, title: 'Where can I get some?(version1)', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 4, title: 'Where can I get some?(version2)', idea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[0]._id,
                  versions: [
                  {category: 5, title: 'The standard Lorem Ipsum passage, used since the 1500s(simillar2)', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 5, title: 'The standard Lorem Ipsum passage(version1), used since the 1500s', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 5, title: 'The standard Lorem Ipsum passage(version2), used since the 1500s', idea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                },
                {
                  card: _cardArray[0]._id,
                  creator: _userArray[0]._id,
                  versions: [
                  {category: 6, title: '1914 translation by H. Rackham(simillar2)', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 6, title: '1914 translation by H. Rackham(version1)', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]},
                  {category: 6, title: '1914 translation by H. Rackham(version2)', idea: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself ', link: [{title: '해외사례, 통계', url:'http://www.naver.com'}, {title: '정부의 의견(2016.08.25 조선일보)', url: 'http://www.daum.net'}]}
                  ]
                }            

                ];
                

                return seedComments;

}