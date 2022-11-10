var _excluded = ["name"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable */
import React from 'react';
import Iconfenxi from './Iconfenxi';
import Icondianjianqingkuangtongjibeifen from './Icondianjianqingkuangtongjibeifen';
import Iconrunhuaqingkuangtongji1 from './Iconrunhuaqingkuangtongji1';
import Iconchakanxiangqing from './Iconchakanxiangqing';
import Iconzhengchang from './Iconzhengchang';
import Iconyichang from './Iconyichang';
import Iconliuhetecaishuzihuagongchang from './Iconliuhetecaishuzihuagongchang';
import Iconyidu from './Iconyidu';
import Iconshanchu1 from './Iconshanchu1';
import Iconbingzhuangtu from './Iconbingzhuangtu';
import Iconzhexiantu1 from './Iconzhexiantu1';
import Iconzhuzhuangtu1 from './Iconzhuzhuangtu1';
import Icontuichu from './Icontuichu';
import Iconjiaojieban1 from './Iconjiaojieban1';
import Iconchakan from './Iconchakan';
import IconxuanzhonganniuHui from './IconxuanzhonganniuHui';
import Iconduoxuan from './Iconduoxuan';
import Iconliebiao from './Iconliebiao';
import IconnengyuanShui from './IconnengyuanShui';
import IconnengyuanDian1 from './IconnengyuanDian1';
import IconnengyuanQi from './IconnengyuanQi';
import IconcaidanGongyibianzhi from './IconcaidanGongyibianzhi';
import IconcaidanBanciguanli from './IconcaidanBanciguanli';
import IconcaidanJichushuju from './IconcaidanJichushuju';
import IconcaidanShouye from './IconcaidanShouye';
import IconcaidanShebeiku from './IconcaidanShebeiku';
import IconcaidanShujutianbaotongji from './IconcaidanShujutianbaotongji';
import IconcaidanShebeiguanli from './IconcaidanShebeiguanli';
import IconcaidanTongjifenxi from './IconcaidanTongjifenxi';
import IconcaidanShujuguanli from './IconcaidanShujuguanli';
import IconcaidanGongyizhiliang from './IconcaidanGongyizhiliang';
import IconcaidanWangluozhuangtai from './IconcaidanWangluozhuangtai';
import IconcaidanZhinengcaiji from './IconcaidanZhinengcaiji';
import IconcaidanShengchanrenwu from './IconcaidanShengchanrenwu';
import IconcaidanXitongguanli from './IconcaidanXitongguanli';
import IconcaidanZidingyibiaodan from './IconcaidanZidingyibiaodan';
import IconcaidanShujuyingyong from './IconcaidanShujuyingyong';
import Iconbingtu from './Iconbingtu';
import Iconbianji3 from './Iconbianji3';
import Icondanqi from './Icondanqi';
import Icondaochubaogao from './Icondaochubaogao';
import Iconchakangongyiyaoqiu from './Iconchakangongyiyaoqiu';
import Icondian1 from './Icondian1';
import Icondaochubiaoge from './Icondaochubiaoge';
import Icongerenxinxi from './Icongerenxinxi';
import Iconmima from './Iconmima';
import Iconkaishianniu from './Iconkaishianniu';
import Iconjiaojieban from './Iconjiaojieban';
import IconmeiqiTianranqi from './IconmeiqiTianranqi';
import Iconshanchu from './Iconshanchu';
import Iconshanchuxiang from './Iconshanchuxiang';
import Iconhejinpeiliao from './Iconhejinpeiliao';
import IconshanchuHongse from './IconshanchuHongse';
import IcontianjiaQueding from './IcontianjiaQueding';
import IcontianjiaQing from './IcontianjiaQing';
import IconshezhiPeizhi from './IconshezhiPeizhi';
import Icontianjiaxiang from './Icontianjiaxiang';
import IcontianjiaZhong from './IcontianjiaZhong';
import Icontuichudenglu from './Icontuichudenglu';
import Icontianjiatuxing from './Icontianjiatuxing';
import Iconyaqi from './Iconyaqi';
import Iconxiazai1 from './Iconxiazai1';
import Iconyangqi from './Iconyangqi';
import Iconxuanze0 from './Iconxuanze0';
import Iconzhankaishouqi from './Iconzhankaishouqi';
import Iconzhexiantu from './Iconzhexiantu';
import Iconzhuzhuangtu from './Iconzhuzhuangtu';
import Icontongbu from './Icontongbu';
import Iconshubiao from './Iconshubiao';
import Iconchakanshujudianquxian from './Iconchakanshujudianquxian';
import Iconbeijianfenleibianma from './Iconbeijianfenleibianma';
import Iconkucundaoru from './Iconkucundaoru';
import Iconshuaxin from './Iconshuaxin';
import Iconpiliangchuli from './Iconpiliangchuli';
import Icontongbubaojingguize from './Icontongbubaojingguize';
import Iconzhidutaishiguizepeizhi from './Iconzhidutaishiguizepeizhi';
import Iconyuedushebeiqingkuangtianbao from './Iconyuedushebeiqingkuangtianbao';
import Iconjuxing from './Iconjuxing';
import Iconfenzhijiedian1 from './Iconfenzhijiedian1';
import Iconfenzhijiedian from './Iconfenzhijiedian';
import Iconhouyitian from './Iconhouyitian';
import Iconqianyitian from './Iconqianyitian';
import Iconwuzhuangtai from './Iconwuzhuangtai';
import Iconretingjiguzhang from './Iconretingjiguzhang';
import Iconlinshijianxiu from './Iconlinshijianxiu';
import Iconjihuajianxiu from './Iconjihuajianxiu';
import Icondailiao from './Icondailiao';
import Iconwurenwushebeiwanhao from './Iconwurenwushebeiwanhao';
import Iconshengchanrenwuzhengchangyunhang from './Iconshengchanrenwuzhengchangyunhang';
import Iconqiyonggaiziduan from './Iconqiyonggaiziduan';
import Iconjinyonggaiziduan from './Iconjinyonggaiziduan';
import Iconziduanpeizhi from './Iconziduanpeizhi';
import Iconxinzengyibiao from './Iconxinzengyibiao';
import Iconjianding from './Iconjianding';
import Icondaoruyibiao from './Icondaoruyibiao';
import Iconzhuangtaibiangeng from './Iconzhuangtaibiangeng';
import Iconshijijianding from './Iconshijijianding';
import Icondaochu from './Icondaochu';
import IconYZshanchuhong1 from './IconYZshanchuhong1';
import IconZYbianjilan1 from './IconZYbianjilan1';
import IconZYbianji from './IconZYbianji';
import IconZYshanchubai from './IconZYshanchubai';
import IconYZshanchuhong from './IconYZshanchuhong';
import IconZYbianjilan from './IconZYbianjilan';
import IconZYtianjia from './IconZYtianjia';
import IconZYshanchu from './IconZYshanchu';
import Icontianjiafenlei from './Icontianjiafenlei';
import IconZYshouqi from './IconZYshouqi';
import IconZYzhankai from './IconZYzhankai';
import Iconwushuju from './Iconwushuju';
import Icontips from './Icontips';
import Iconxiangqing1 from './Iconxiangqing1';
import Iconbaojingqushi1 from './Iconbaojingqushi1';
import Iconkeshihuakanban1 from './Iconkeshihuakanban1';
import Icondianjianqingkuangtongji1 from './Icondianjianqingkuangtongji1';
import Iconxinjian1 from './Iconxinjian1';
import Iconbianji2 from './Iconbianji2';
import Iconqiehuanguanlian1 from './Iconqiehuanguanlian1';
import Iconbaojingman1 from './Iconbaojingman1';
import Iconerweima1 from './Iconerweima1';
import Iconrili1 from './Iconrili1';
import Icontianjia1 from './Icontianjia1';
import Icondianjiguanzhu1 from './Icondianjiguanzhu1';
import Iconguanlianmoban1 from './Iconguanlianmoban1';
import Iconyiguanzhu1 from './Iconyiguanzhu1';
import Iconkong1 from './Iconkong1';
import Iconjiankangzhi from './Iconjiankangzhi';
import Iconweiguanzhu from './Iconweiguanzhu';
import Iconshijifankui from './Iconshijifankui';
import Iconxiangqing from './Iconxiangqing';
import Iconmubiaosheding from './Iconmubiaosheding';
import Icondaichulibaojing from './Icondaichulibaojing';
import Iconjiankangfengxianxiang from './Iconjiankangfengxianxiang';
import Iconguzhangqingkuangtongji from './Iconguzhangqingkuangtongji';
import Iconbaojingqushi from './Iconbaojingqushi';
import Iconkeshihuakanban from './Iconkeshihuakanban';
import Iconrunhuaqingkuangtongji from './Iconrunhuaqingkuangtongji';
import Iconbeipinbeijianxiaohao from './Iconbeipinbeijianxiaohao';
import Iconqiehuanguanlian from './Iconqiehuanguanlian';
import Icontianjiaguanlian from './Icontianjiaguanlian';
import Iconjiechuguanlian from './Iconjiechuguanlian';
import Iconchaxun from './Iconchaxun';
import Icondianjianqingkuangtongji from './Icondianjianqingkuangtongji';
import Iconsousuo from './Iconsousuo';
import Iconbaojingman from './Iconbaojingman';
import Iconxinjian from './Iconxinjian';
import Iconbaocun from './Iconbaocun';
import Iconbianji1 from './Iconbianji1';
import Iconerweima from './Iconerweima';
import Icondianjiyichushujudian from './Icondianjiyichushujudian';
import Iconbaojingkong from './Iconbaojingkong';
import Iconchakansuoyourenwu from './Iconchakansuoyourenwu';
import Iconshangchuan from './Iconshangchuan';
import Iconrili from './Iconrili';
import Icontianjia from './Icontianjia';
import Iconyiguanzhu from './Iconyiguanzhu';
import Icondianjiguanzhu from './Icondianjiguanzhu';
import Iconguanlianmoban from './Iconguanlianmoban';
import Iconkong from './Iconkong';
import Iconxiayibu from './Iconxiayibu';
import Iconyoujiantou from './Iconyoujiantou';
import Iconchakancaozuojilu from './Iconchakancaozuojilu';
import Iconchakanfanyingjieguo from './Iconchakanfanyingjieguo';
import Iconxinkaichuangkou from './Iconxinkaichuangkou';
import Icondian from './Icondian';
import Iconxitongguanli from './Iconxitongguanli';
import Icon1Ping from './Icon1Ping';
import Icon4Ping from './Icon4Ping';
import Icon9Ping from './Icon9Ping';
import Iconhuazhixuanze from './Iconhuazhixuanze';
import IconhuazhixuanzeHover from './IconhuazhixuanzeHover';
import IconjietuHover from './IconjietuHover';
import IcontongdaoHover from './IcontongdaoHover';
import IconxiazaiHover from './IconxiazaiHover';
import IcontuichuquanpingHover from './IcontuichuquanpingHover';
import IconquanpingxianshiHover from './IconquanpingxianshiHover';
import IconbianjiHover from './IconbianjiHover';
import IconshezhiHover from './IconshezhiHover';
import Iconbianji from './Iconbianji';
import Icontuichuquanping from './Icontuichuquanping';
import Icontongdao0 from './Icontongdao0';
import Iconxiazai from './Iconxiazai';
import Iconshipinjiankong from './Iconshipinjiankong';
import Iconquanpingxianshi from './Iconquanpingxianshi';
import Iconjietu from './Iconjietu';
import Iconshezhi from './Iconshezhi';
import IconquanpingxianshiCopy from './IconquanpingxianshiCopy';
import IcontuichuquanpingCopy from './IcontuichuquanpingCopy';

var IconFont = function IconFont(_ref) {
  var name = _ref.name,
      rest = _objectWithoutProperties(_ref, _excluded);

  switch (name) {
    case 'fenxi':
      return /*#__PURE__*/React.createElement(Iconfenxi, rest);

    case 'dianjianqingkuangtongjibeifen':
      return /*#__PURE__*/React.createElement(Icondianjianqingkuangtongjibeifen, rest);

    case 'runhuaqingkuangtongji1':
      return /*#__PURE__*/React.createElement(Iconrunhuaqingkuangtongji1, rest);

    case 'chakanxiangqing':
      return /*#__PURE__*/React.createElement(Iconchakanxiangqing, rest);

    case 'zhengchang':
      return /*#__PURE__*/React.createElement(Iconzhengchang, rest);

    case 'yichang':
      return /*#__PURE__*/React.createElement(Iconyichang, rest);

    case 'liuhetecaishuzihuagongchang':
      return /*#__PURE__*/React.createElement(Iconliuhetecaishuzihuagongchang, rest);

    case 'yidu':
      return /*#__PURE__*/React.createElement(Iconyidu, rest);

    case 'shanchu1':
      return /*#__PURE__*/React.createElement(Iconshanchu1, rest);

    case 'bingzhuangtu':
      return /*#__PURE__*/React.createElement(Iconbingzhuangtu, rest);

    case 'zhexiantu1':
      return /*#__PURE__*/React.createElement(Iconzhexiantu1, rest);

    case 'zhuzhuangtu1':
      return /*#__PURE__*/React.createElement(Iconzhuzhuangtu1, rest);

    case 'tuichu':
      return /*#__PURE__*/React.createElement(Icontuichu, rest);

    case 'jiaojieban1':
      return /*#__PURE__*/React.createElement(Iconjiaojieban1, rest);

    case 'chakan':
      return /*#__PURE__*/React.createElement(Iconchakan, rest);

    case 'xuanzhonganniu_hui':
      return /*#__PURE__*/React.createElement(IconxuanzhonganniuHui, rest);

    case 'duoxuan':
      return /*#__PURE__*/React.createElement(Iconduoxuan, rest);

    case 'liebiao':
      return /*#__PURE__*/React.createElement(Iconliebiao, rest);

    case 'nengyuan-shui':
      return /*#__PURE__*/React.createElement(IconnengyuanShui, rest);

    case 'nengyuan-dian1':
      return /*#__PURE__*/React.createElement(IconnengyuanDian1, rest);

    case 'nengyuan-qi':
      return /*#__PURE__*/React.createElement(IconnengyuanQi, rest);

    case 'caidan-gongyibianzhi':
      return /*#__PURE__*/React.createElement(IconcaidanGongyibianzhi, rest);

    case 'caidan-banciguanli':
      return /*#__PURE__*/React.createElement(IconcaidanBanciguanli, rest);

    case 'caidan-jichushuju':
      return /*#__PURE__*/React.createElement(IconcaidanJichushuju, rest);

    case 'caidan-shouye':
      return /*#__PURE__*/React.createElement(IconcaidanShouye, rest);

    case 'caidan-shebeiku':
      return /*#__PURE__*/React.createElement(IconcaidanShebeiku, rest);

    case 'caidan-shujutianbaotongji':
      return /*#__PURE__*/React.createElement(IconcaidanShujutianbaotongji, rest);

    case 'caidan-shebeiguanli':
      return /*#__PURE__*/React.createElement(IconcaidanShebeiguanli, rest);

    case 'caidan-tongjifenxi':
      return /*#__PURE__*/React.createElement(IconcaidanTongjifenxi, rest);

    case 'caidan-shujuguanli':
      return /*#__PURE__*/React.createElement(IconcaidanShujuguanli, rest);

    case 'caidan-gongyizhiliang':
      return /*#__PURE__*/React.createElement(IconcaidanGongyizhiliang, rest);

    case 'caidan-wangluozhuangtai':
      return /*#__PURE__*/React.createElement(IconcaidanWangluozhuangtai, rest);

    case 'caidan-zhinengcaiji':
      return /*#__PURE__*/React.createElement(IconcaidanZhinengcaiji, rest);

    case 'caidan-shengchanrenwu':
      return /*#__PURE__*/React.createElement(IconcaidanShengchanrenwu, rest);

    case 'caidan-xitongguanli':
      return /*#__PURE__*/React.createElement(IconcaidanXitongguanli, rest);

    case 'caidan-zidingyibiaodan':
      return /*#__PURE__*/React.createElement(IconcaidanZidingyibiaodan, rest);

    case 'caidan-shujuyingyong':
      return /*#__PURE__*/React.createElement(IconcaidanShujuyingyong, rest);

    case 'bingtu':
      return /*#__PURE__*/React.createElement(Iconbingtu, rest);

    case 'bianji3':
      return /*#__PURE__*/React.createElement(Iconbianji3, rest);

    case 'danqi':
      return /*#__PURE__*/React.createElement(Icondanqi, rest);

    case 'daochubaogao':
      return /*#__PURE__*/React.createElement(Icondaochubaogao, rest);

    case 'chakangongyiyaoqiu':
      return /*#__PURE__*/React.createElement(Iconchakangongyiyaoqiu, rest);

    case 'dian1':
      return /*#__PURE__*/React.createElement(Icondian1, rest);

    case 'daochubiaoge':
      return /*#__PURE__*/React.createElement(Icondaochubiaoge, rest);

    case 'gerenxinxi':
      return /*#__PURE__*/React.createElement(Icongerenxinxi, rest);

    case 'mima':
      return /*#__PURE__*/React.createElement(Iconmima, rest);

    case 'kaishianniu':
      return /*#__PURE__*/React.createElement(Iconkaishianniu, rest);

    case 'jiaojieban':
      return /*#__PURE__*/React.createElement(Iconjiaojieban, rest);

    case 'meiqi_tianranqi':
      return /*#__PURE__*/React.createElement(IconmeiqiTianranqi, rest);

    case 'shanchu':
      return /*#__PURE__*/React.createElement(Iconshanchu, rest);

    case 'shanchuxiang':
      return /*#__PURE__*/React.createElement(Iconshanchuxiang, rest);

    case 'hejinpeiliao':
      return /*#__PURE__*/React.createElement(Iconhejinpeiliao, rest);

    case 'shanchu-hongse':
      return /*#__PURE__*/React.createElement(IconshanchuHongse, rest);

    case 'tianjia-queding':
      return /*#__PURE__*/React.createElement(IcontianjiaQueding, rest);

    case 'tianjia-qing':
      return /*#__PURE__*/React.createElement(IcontianjiaQing, rest);

    case 'shezhi_peizhi':
      return /*#__PURE__*/React.createElement(IconshezhiPeizhi, rest);

    case 'tianjiaxiang':
      return /*#__PURE__*/React.createElement(Icontianjiaxiang, rest);

    case 'tianjia-zhong':
      return /*#__PURE__*/React.createElement(IcontianjiaZhong, rest);

    case 'tuichudenglu':
      return /*#__PURE__*/React.createElement(Icontuichudenglu, rest);

    case 'tianjiatuxing':
      return /*#__PURE__*/React.createElement(Icontianjiatuxing, rest);

    case 'yaqi':
      return /*#__PURE__*/React.createElement(Iconyaqi, rest);

    case 'xiazai1':
      return /*#__PURE__*/React.createElement(Iconxiazai1, rest);

    case 'yangqi':
      return /*#__PURE__*/React.createElement(Iconyangqi, rest);

    case 'xuanze-0':
      return /*#__PURE__*/React.createElement(Iconxuanze0, rest);

    case 'zhankaishouqi':
      return /*#__PURE__*/React.createElement(Iconzhankaishouqi, rest);

    case 'zhexiantu':
      return /*#__PURE__*/React.createElement(Iconzhexiantu, rest);

    case 'zhuzhuangtu':
      return /*#__PURE__*/React.createElement(Iconzhuzhuangtu, rest);

    case 'tongbu':
      return /*#__PURE__*/React.createElement(Icontongbu, rest);

    case 'shubiao':
      return /*#__PURE__*/React.createElement(Iconshubiao, rest);

    case 'chakanshujudianquxian':
      return /*#__PURE__*/React.createElement(Iconchakanshujudianquxian, rest);

    case 'beijianfenleibianma':
      return /*#__PURE__*/React.createElement(Iconbeijianfenleibianma, rest);

    case 'kucundaoru':
      return /*#__PURE__*/React.createElement(Iconkucundaoru, rest);

    case 'shuaxin':
      return /*#__PURE__*/React.createElement(Iconshuaxin, rest);

    case 'piliangchuli':
      return /*#__PURE__*/React.createElement(Iconpiliangchuli, rest);

    case 'tongbubaojingguize':
      return /*#__PURE__*/React.createElement(Icontongbubaojingguize, rest);

    case 'zhidutaishiguizepeizhi':
      return /*#__PURE__*/React.createElement(Iconzhidutaishiguizepeizhi, rest);

    case 'yuedushebeiqingkuangtianbao':
      return /*#__PURE__*/React.createElement(Iconyuedushebeiqingkuangtianbao, rest);

    case 'juxing':
      return /*#__PURE__*/React.createElement(Iconjuxing, rest);

    case 'fenzhijiedian1':
      return /*#__PURE__*/React.createElement(Iconfenzhijiedian1, rest);

    case 'fenzhijiedian':
      return /*#__PURE__*/React.createElement(Iconfenzhijiedian, rest);

    case 'houyitian':
      return /*#__PURE__*/React.createElement(Iconhouyitian, rest);

    case 'qianyitian':
      return /*#__PURE__*/React.createElement(Iconqianyitian, rest);

    case 'wuzhuangtai':
      return /*#__PURE__*/React.createElement(Iconwuzhuangtai, rest);

    case 'retingjiguzhang':
      return /*#__PURE__*/React.createElement(Iconretingjiguzhang, rest);

    case 'linshijianxiu':
      return /*#__PURE__*/React.createElement(Iconlinshijianxiu, rest);

    case 'jihuajianxiu':
      return /*#__PURE__*/React.createElement(Iconjihuajianxiu, rest);

    case 'dailiao':
      return /*#__PURE__*/React.createElement(Icondailiao, rest);

    case 'wurenwushebeiwanhao':
      return /*#__PURE__*/React.createElement(Iconwurenwushebeiwanhao, rest);

    case 'shengchanrenwuzhengchangyunhang':
      return /*#__PURE__*/React.createElement(Iconshengchanrenwuzhengchangyunhang, rest);

    case 'qiyonggaiziduan':
      return /*#__PURE__*/React.createElement(Iconqiyonggaiziduan, rest);

    case 'jinyonggaiziduan':
      return /*#__PURE__*/React.createElement(Iconjinyonggaiziduan, rest);

    case 'ziduanpeizhi':
      return /*#__PURE__*/React.createElement(Iconziduanpeizhi, rest);

    case 'xinzengyibiao':
      return /*#__PURE__*/React.createElement(Iconxinzengyibiao, rest);

    case 'jianding':
      return /*#__PURE__*/React.createElement(Iconjianding, rest);

    case 'daoruyibiao':
      return /*#__PURE__*/React.createElement(Icondaoruyibiao, rest);

    case 'zhuangtaibiangeng':
      return /*#__PURE__*/React.createElement(Iconzhuangtaibiangeng, rest);

    case 'shijijianding':
      return /*#__PURE__*/React.createElement(Iconshijijianding, rest);

    case 'daochu':
      return /*#__PURE__*/React.createElement(Icondaochu, rest);

    case 'YZshanchuhong1':
      return /*#__PURE__*/React.createElement(IconYZshanchuhong1, rest);

    case 'ZYbianjilan1':
      return /*#__PURE__*/React.createElement(IconZYbianjilan1, rest);

    case 'ZYbianji':
      return /*#__PURE__*/React.createElement(IconZYbianji, rest);

    case 'ZYshanchubai':
      return /*#__PURE__*/React.createElement(IconZYshanchubai, rest);

    case 'YZshanchuhong':
      return /*#__PURE__*/React.createElement(IconYZshanchuhong, rest);

    case 'ZYbianjilan':
      return /*#__PURE__*/React.createElement(IconZYbianjilan, rest);

    case 'ZYtianjia':
      return /*#__PURE__*/React.createElement(IconZYtianjia, rest);

    case 'ZYshanchu':
      return /*#__PURE__*/React.createElement(IconZYshanchu, rest);

    case 'tianjiafenlei':
      return /*#__PURE__*/React.createElement(Icontianjiafenlei, rest);

    case 'ZYshouqi':
      return /*#__PURE__*/React.createElement(IconZYshouqi, rest);

    case 'ZYzhankai':
      return /*#__PURE__*/React.createElement(IconZYzhankai, rest);

    case 'wushuju':
      return /*#__PURE__*/React.createElement(Iconwushuju, rest);

    case 'tips':
      return /*#__PURE__*/React.createElement(Icontips, rest);

    case 'xiangqing1':
      return /*#__PURE__*/React.createElement(Iconxiangqing1, rest);

    case 'baojingqushi1':
      return /*#__PURE__*/React.createElement(Iconbaojingqushi1, rest);

    case 'keshihuakanban1':
      return /*#__PURE__*/React.createElement(Iconkeshihuakanban1, rest);

    case 'dianjianqingkuangtongji1':
      return /*#__PURE__*/React.createElement(Icondianjianqingkuangtongji1, rest);

    case 'xinjian1':
      return /*#__PURE__*/React.createElement(Iconxinjian1, rest);

    case 'bianji2':
      return /*#__PURE__*/React.createElement(Iconbianji2, rest);

    case 'qiehuanguanlian1':
      return /*#__PURE__*/React.createElement(Iconqiehuanguanlian1, rest);

    case 'baojingman1':
      return /*#__PURE__*/React.createElement(Iconbaojingman1, rest);

    case 'erweima1':
      return /*#__PURE__*/React.createElement(Iconerweima1, rest);

    case 'rili1':
      return /*#__PURE__*/React.createElement(Iconrili1, rest);

    case 'tianjia1':
      return /*#__PURE__*/React.createElement(Icontianjia1, rest);

    case 'dianjiguanzhu1':
      return /*#__PURE__*/React.createElement(Icondianjiguanzhu1, rest);

    case 'guanlianmoban1':
      return /*#__PURE__*/React.createElement(Iconguanlianmoban1, rest);

    case 'yiguanzhu1':
      return /*#__PURE__*/React.createElement(Iconyiguanzhu1, rest);

    case 'kong1':
      return /*#__PURE__*/React.createElement(Iconkong1, rest);

    case 'jiankangzhi':
      return /*#__PURE__*/React.createElement(Iconjiankangzhi, rest);

    case 'weiguanzhu':
      return /*#__PURE__*/React.createElement(Iconweiguanzhu, rest);

    case 'shijifankui':
      return /*#__PURE__*/React.createElement(Iconshijifankui, rest);

    case 'xiangqing':
      return /*#__PURE__*/React.createElement(Iconxiangqing, rest);

    case 'mubiaosheding':
      return /*#__PURE__*/React.createElement(Iconmubiaosheding, rest);

    case 'daichulibaojing':
      return /*#__PURE__*/React.createElement(Icondaichulibaojing, rest);

    case 'jiankangfengxianxiang':
      return /*#__PURE__*/React.createElement(Iconjiankangfengxianxiang, rest);

    case 'guzhangqingkuangtongji':
      return /*#__PURE__*/React.createElement(Iconguzhangqingkuangtongji, rest);

    case 'baojingqushi':
      return /*#__PURE__*/React.createElement(Iconbaojingqushi, rest);

    case 'keshihuakanban':
      return /*#__PURE__*/React.createElement(Iconkeshihuakanban, rest);

    case 'runhuaqingkuangtongji':
      return /*#__PURE__*/React.createElement(Iconrunhuaqingkuangtongji, rest);

    case 'beipinbeijianxiaohao':
      return /*#__PURE__*/React.createElement(Iconbeipinbeijianxiaohao, rest);

    case 'qiehuanguanlian':
      return /*#__PURE__*/React.createElement(Iconqiehuanguanlian, rest);

    case 'tianjiaguanlian':
      return /*#__PURE__*/React.createElement(Icontianjiaguanlian, rest);

    case 'jiechuguanlian':
      return /*#__PURE__*/React.createElement(Iconjiechuguanlian, rest);

    case 'chaxun':
      return /*#__PURE__*/React.createElement(Iconchaxun, rest);

    case 'dianjianqingkuangtongji':
      return /*#__PURE__*/React.createElement(Icondianjianqingkuangtongji, rest);

    case 'sousuo':
      return /*#__PURE__*/React.createElement(Iconsousuo, rest);

    case 'baojingman':
      return /*#__PURE__*/React.createElement(Iconbaojingman, rest);

    case 'xinjian':
      return /*#__PURE__*/React.createElement(Iconxinjian, rest);

    case 'baocun':
      return /*#__PURE__*/React.createElement(Iconbaocun, rest);

    case 'bianji1':
      return /*#__PURE__*/React.createElement(Iconbianji1, rest);

    case 'erweima':
      return /*#__PURE__*/React.createElement(Iconerweima, rest);

    case 'dianjiyichushujudian':
      return /*#__PURE__*/React.createElement(Icondianjiyichushujudian, rest);

    case 'baojingkong':
      return /*#__PURE__*/React.createElement(Iconbaojingkong, rest);

    case 'chakansuoyourenwu':
      return /*#__PURE__*/React.createElement(Iconchakansuoyourenwu, rest);

    case 'shangchuan':
      return /*#__PURE__*/React.createElement(Iconshangchuan, rest);

    case 'rili':
      return /*#__PURE__*/React.createElement(Iconrili, rest);

    case 'tianjia':
      return /*#__PURE__*/React.createElement(Icontianjia, rest);

    case 'yiguanzhu':
      return /*#__PURE__*/React.createElement(Iconyiguanzhu, rest);

    case 'dianjiguanzhu':
      return /*#__PURE__*/React.createElement(Icondianjiguanzhu, rest);

    case 'guanlianmoban':
      return /*#__PURE__*/React.createElement(Iconguanlianmoban, rest);

    case 'kong':
      return /*#__PURE__*/React.createElement(Iconkong, rest);

    case 'xiayibu':
      return /*#__PURE__*/React.createElement(Iconxiayibu, rest);

    case 'youjiantou':
      return /*#__PURE__*/React.createElement(Iconyoujiantou, rest);

    case 'chakancaozuojilu':
      return /*#__PURE__*/React.createElement(Iconchakancaozuojilu, rest);

    case 'chakanfanyingjieguo':
      return /*#__PURE__*/React.createElement(Iconchakanfanyingjieguo, rest);

    case 'xinkaichuangkou':
      return /*#__PURE__*/React.createElement(Iconxinkaichuangkou, rest);

    case 'dian':
      return /*#__PURE__*/React.createElement(Icondian, rest);

    case 'xitongguanli':
      return /*#__PURE__*/React.createElement(Iconxitongguanli, rest);

    case '1ping':
      return /*#__PURE__*/React.createElement(Icon1Ping, rest);

    case '4ping':
      return /*#__PURE__*/React.createElement(Icon4Ping, rest);

    case '9ping':
      return /*#__PURE__*/React.createElement(Icon9Ping, rest);

    case 'huazhixuanze':
      return /*#__PURE__*/React.createElement(Iconhuazhixuanze, rest);

    case 'huazhixuanze-hover':
      return /*#__PURE__*/React.createElement(IconhuazhixuanzeHover, rest);

    case 'jietu-hover':
      return /*#__PURE__*/React.createElement(IconjietuHover, rest);

    case 'tongdao-hover':
      return /*#__PURE__*/React.createElement(IcontongdaoHover, rest);

    case 'xiazai-hover':
      return /*#__PURE__*/React.createElement(IconxiazaiHover, rest);

    case 'tuichuquanping-hover':
      return /*#__PURE__*/React.createElement(IcontuichuquanpingHover, rest);

    case 'quanpingxianshi-hover':
      return /*#__PURE__*/React.createElement(IconquanpingxianshiHover, rest);

    case 'bianji-hover':
      return /*#__PURE__*/React.createElement(IconbianjiHover, rest);

    case 'shezhi-hover':
      return /*#__PURE__*/React.createElement(IconshezhiHover, rest);

    case 'bianji':
      return /*#__PURE__*/React.createElement(Iconbianji, rest);

    case 'tuichuquanping':
      return /*#__PURE__*/React.createElement(Icontuichuquanping, rest);

    case 'tongdao-0':
      return /*#__PURE__*/React.createElement(Icontongdao0, rest);

    case 'xiazai':
      return /*#__PURE__*/React.createElement(Iconxiazai, rest);

    case 'shipinjiankong':
      return /*#__PURE__*/React.createElement(Iconshipinjiankong, rest);

    case 'quanpingxianshi':
      return /*#__PURE__*/React.createElement(Iconquanpingxianshi, rest);

    case 'jietu':
      return /*#__PURE__*/React.createElement(Iconjietu, rest);

    case 'shezhi':
      return /*#__PURE__*/React.createElement(Iconshezhi, rest);

    case 'quanpingxianshi-copy':
      return /*#__PURE__*/React.createElement(IconquanpingxianshiCopy, rest);

    case 'tuichuquanping-copy':
      return /*#__PURE__*/React.createElement(IcontuichuquanpingCopy, rest);
  }

  return null;
};

export default IconFont;