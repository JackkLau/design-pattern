// 发布-订阅模式
class HunterUnion {
  private static topics = Object.create(null);

  static subscribe(topic: string, fn: (money: number) => void) {
    console.log('HunterUnion.topics :>> ', HunterUnion.topics);
    if (!HunterUnion.topics[topic]) {
      HunterUnion.topics[topic] = [];
    }

    HunterUnion.topics[topic].push(fn);
  }

  static publish(topic: string, money: number) {
    if (!HunterUnion.topics) {
      return;
    }

    for (const fn of HunterUnion.topics[topic]) {
      fn(money);
    }
  }
}

class Hunter {
  private name: string;
  private level: string;

  constructor(name: string, level: string) {
    this.name = name;
    this.level = level;
  }

  subscribe(topic: string, fn: (money: number) => void) {
    console.log(
      this.level + '猎人' + this.name + '订阅了狩猎' + topic + '的任务',
    );
    HunterUnion.subscribe(topic, fn);
  }

  publish(topic: string, money: number) {
    console.log(
      this.level + '猎人' + this.name + '发布了狩猎' + topic + '的任务',
    );
    HunterUnion.publish(topic, money);
  }
}

 
//猎人工会走来了几个猎人
export let hunterMing = new Hunter('小明', '黄金')
export let hunterJin = new Hunter('小金', '白银')
export let hunterZhang = new Hunter('小张', '黄金')
export let hunterPeter = new Hunter('Peter', '青铜')
 
