import { ctx } from './strategy';
console.log('配个webpack 真不容易');
ctx.contextInterface();

console.log('=======================memento')
import { originator, caretaker } from './memento';
originator.setState('On'); //Originator初始状态
originator.show();

caretaker.setMemento(originator.createMemento());

originator.setState('Off'); //Originator状态变为Off
originator.show();

originator.setMemento(caretaker.getMemento()); //回复初始状态
originator.show();

console.log('=======================pub_sub');
import {hunterJin, hunterMing, hunterPeter, hunterZhang} from './publish_subscriber';

//小明，小金，小张分别订阅了狩猎tiger的任务
hunterMing.subscribe('tiger', function(money){
  console.log('小明表示：' + (money > 200 ? '' : '不') + '接取任务')
})
hunterJin.subscribe('tiger', function(money){
  console.log('小金表示：接取任务')
})
hunterZhang.subscribe('tiger', function(money){
  console.log('小张表示：接取任务')
})
//Peter订阅了狩猎sheep的任务
hunterPeter.subscribe('sheep', function(money){
  console.log('Peter表示：接取任务')
})
 
//Peter发布了狩猎tiger的任务
hunterPeter.publish('tiger', 198)