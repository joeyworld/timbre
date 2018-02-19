const Sequelize = require('sequelize');

module.exports = {
  userRole: Sequelize.ENUM('ROLE_USER', 'ROLE_ADMIN'),
  userType: Sequelize.ENUM('ACTOR', 'CLIENT'),
  bankType: Sequelize.ENUM('국민은행', '기업은행', '농협은행', '산업은행', '신한은행', '우리은행', '한국씨티은행', 'KEB하나은행', 'SC제일은행', '카카오뱅크', '케이뱅크', '경남은행', '광주은행', '대구은행', '부산은행', '전북은행', '제주은행', '산림조합중앙회', '상호저축은행', '새마을금고중앙회', '수협중앙회', '신협중앙회', '우체국', '지역농.축협', '도이치은행', '비엔피파리바은행', '제이피모간체이스은행', 'BOA은행', 'HSBC은행', '중국공상은행', '교보증권', '대신증권', '동부증권', '메리츠종합금융증권', '미래에셋대우', '부국증권', '삼성증권', '신영증권', '신한금융투자', '유안타증권', '유진투자증권', '이베스트투자증권', '키움증권', '펀드온라인코리아', '하나금융투자', '하이투자증권', '한국투자증권', '한화투자증권', 'HMC투자증권', 'IBK투자증권', 'KB투자증권', 'KTB투자증권', 'NH투자증권', 'SK증권'),
  recruitStateType: Sequelize.ENUM(
    'REGISTERED', 'WAIT_DEPOSIT', 'ON_BIDDINGS', 'WAIT_FEEDBACK',
    'ON_WITHDRAW', 'DONE', 'CANCELLED',
  ),
};
