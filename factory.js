class Normal {
  constructor(props) {
    this.color = props.color;
  }
};

class TailFactory {
  constructor(props) {
    this.tailLength = props.tailLength;
  }
};

class TorsoFactory {
  constructor(props) {
    this.color = props.color;
  }
};

class HeadFactory {
  constructor(props) {
    this.snoutLenth = props.snoutLenth;
  }
};

class ReptilePartFactory {
  constructor(type, props) {
    if(type === "tail")
      return new TailFactory(props);
    if(type === "torso")
      return new TorsoFactory(props);
    if(type === "head")
      return new HeadFactory(props);
  }
};
