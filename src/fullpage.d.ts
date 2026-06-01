declare const fullpage_api: {
  moveTo: (section: number, slide?: number) => void;
  moveSlideLeft: () => void;
  moveSlideRight: () => void;
  destroy: (type?: string) => void;
};

declare module "fullpage.js" {
  export default class fullpage {
    constructor(selector: string, options: any);
    destroy(type?: string): void;
  }
}
