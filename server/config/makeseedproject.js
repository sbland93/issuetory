exports.makeProjects = makeProjects


function makeProjects(userArray){
	
 var seedProject = [
	{
		creator: userArray[0]._id,
		name: 'Fuzzy 신호를 안정화 시키기 위한 방안',
		where: '연세대학교',
		who: '신용준-제어공학 수강생',
		keyword: ['신용준', '제어공학', '제어프로젝트'],
		reply: [
			{
				creator: userArray[1]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
			{
				creator: userArray[2]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
			{
				creator: userArray[3]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
			{
				creator: userArray[4]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
		],
		branch: [
			{
				name: '서론',
				contributor: userArray[0]._id,
				idea: '이것은 서론 글입니다. 테스트를 위하여 형성 하였습니다.',
			},
			{
				name: '본론1',
				contributor: userArray[1]._id,
				idea: '이것은 본론1 글입니다. 테스트를 위하여 형성 하였습니다 연결이 되어야 합니다.',
			},
			{
				name: '본론2',
				contributor: userArray[0]._id,
				idea: '이것은 본론2 글입니다. 테스트를 위하여 형성 하였습니다.',
			},
			{
				name: '본론3',
				contributor: userArray[2]._id,
				idea: '이것은 본론3 글입니다. 테스트를 위하여 형성 하였습니다.',
			},
			{
				name: '결론',
				contributor: userArray[3]._id,
				idea: '이것은 결론 글입니다. 테스트를 위하여 형성 하였습니다.',
			}
		]
	},
	{
		creator: userArray[0]._id,
		name: '1분기 회계자료 보고서',
		where: '한국전력공사',
		who: '교육-홍보부원',
		keyword: ['1분기 감사', '2분기 자료'],
		private: true,
		reply: [
			{
				creator: userArray[1]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
			{
				creator: userArray[2]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
			{
				creator: userArray[3]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
			{
				creator: userArray[4]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
		],		
		branch: [
			{
				name: '서론',
				contributor: userArray[0]._id,
				idea: '이것은 서론 글입니다. 테스트를 위하여 형성 하였습니다.',
			},
			{
				name: '본론1',
				contributor: userArray[1]._id,
				idea: '이것은 본론1 글입니다. 테스트를 위하여 형성 하였습니다 연결이 되어야 합니다.',
			},
			{
				name: '본론2',
				contributor: userArray[0]._id,
				idea: '이것은 본론2 글입니다. 테스트를 위하여 형성 하였습니다.',
			},
			{
				name: '본론3',
				contributor: userArray[2]._id,
				idea: '이것은 본론3 글입니다. 테스트를 위하여 형성 하였습니다.',
			},
			{
				name: '결론',
				contributor: userArray[3]._id,
				idea: '이것은 결론 글입니다. 테스트를 위하여 형성 하였습니다.',
			}
		]
	},
	{
		creator: userArray[0]._id,
		name: '브렉시트와 주식시장',
		where: '서울대학교',
		who: '경제학원론(오경주) 수강생',
		keyword: ['서울대학교', '경제학원론', '오경주'],
		reply: [
			{
				creator: userArray[1]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
			{
				creator: userArray[2]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
			{
				creator: userArray[3]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
			{
				creator: userArray[4]._id,
				idea: '감사히 잘 쓰겠습니다. 감사합니다~',
			},
		],		
		branch: [
			{
				name: '서론',
				contributor: userArray[0]._id,
				idea: '이것은 서론 글입니다. 테스트를 위하여 형성 하였습니다.',
			},
			{
				name: '본론1',
				contributor: userArray[1]._id,
				idea: '이것은 본론1 글입니다. 테스트를 위하여 형성 하였습니다 연결이 되어야 합니다.',
			},
			{
				name: '본론2',
				contributor: userArray[0]._id,
				idea: '이것은 본론2 글입니다. 테스트를 위하여 형성 하였습니다.',
			},
			{
				name: '본론3',
				contributor: userArray[2]._id,
				idea: '이것은 본론3 글입니다. 테스트를 위하여 형성 하였습니다.',
			},
			{
				name: '결론',
				contributor: userArray[3]._id,
				idea: '이것은 결론 글입니다. 테스트를 위하여 형성 하였습니다.',
			}
		]
	}
	

	]


	return seedProject;

}