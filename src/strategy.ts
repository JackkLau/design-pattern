abstract class Strategy {
  abstract algorithmInterface(): void;
}

export class ConcreteAStrategy extends Strategy {
  algorithmInterface(): void {
    console.log('ConCreteAStrategy working...');
  }
}

export class Context {
  strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  //上下文接口
  public contextInterface(): void {
    this.strategy.algorithmInterface();
  }
}

const concreteAStrategy = new ConcreteAStrategy();
export const ctx = new Context(concreteAStrategy);
