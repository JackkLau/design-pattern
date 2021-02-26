// https://www.cnblogs.com/adamjwh/p/11018268.html

/**
 * 发起人角色
 *
 * 记录当前时刻的内部状态，并负责创建和恢复备忘录数据，允许访问返回到先前状态所需的所有数据。
 */
class Originator {
  private state: string;

  constructor() {
    this.state = '';
  }

  getState(): string {
    return this.state;
  }
  setState(state: string) {
    this.state = state;
  }

  createMemento(): Memento {
    return new Memento(this.state);
  }

  setMemento(memento: Memento) {
    this.state = memento.getState();
  }

  show(): void {
    console.log('this.state :>> ', this.state);
  }
}

/**
 * 备忘录角色
 *
 * 负责存储Originator发起人对象的内部状态，在需要的时候提供发起人需要的内部状态。
 */
class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}

/**
 * 备忘录管理员角色
 *
 * 对备忘录进行管理、保存和提供备忘录，只能将备忘录传递给其他角色。
 *
 */
class Caretaker {
  private memento!: Memento;

  getMemento(): Memento {
    return this.memento;
  }

  public setMemento(memento: Memento): void {
    this.memento = memento;
  }
}

export const originator: Originator = new Originator();
originator.setState('On'); //Originator初始状态
originator.show();

export const caretaker: Caretaker = new Caretaker();
caretaker.setMemento(originator.createMemento());

originator.setState('Off'); //Originator状态变为Off
originator.show();

originator.setMemento(caretaker.getMemento()); //回复初始状态
originator.show();
