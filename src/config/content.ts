export const cardContent = {
  documentTitle: 'Happy Birthday for dot',
  documentDescription: '一封为谁封存的生日花信',
  cover: '早点休息 亲启',
  decorative: {
    innerMark: 'A LETTER FOR YOU',
    waxMonogram: 'Hi',
  },
  hints: {
    sealed: '轻触封印，开启这封信',
    revealing: '移动光芒，读完这封信',
    keyboard: '按 Enter 或空格键也可以开启',
  },
  letter: {
    salutation: '点老师：',
    birthday: '很高兴认识了你！',
    wishes: [
      '愿点在新的一年里，',
      '总有两包大薯好胃口，',
      '努力会有回报，期待可以实现',
      '另外也希望能有一天不再晕车！',
    ],
    signature: '—— 小栗',
    date: '2026.08.12',
  },
  finale: {
    title: '生日快乐',
    wishes: ['愿所遇皆温柔，', '所行皆顺意。'],
    footer: '小栗 · 2026.08.12',
  },
  controls: {
    continue: '翻至下一页',
    continueAria: '读完这封信，翻至下一页',
    replay: '再次阅读',
    soundOn: '声音：开',
    soundOff: '声音：关',
    soundOnAria: '关闭贺卡声音',
    soundOffAria: '开启贺卡声音',
    sealAria: '触摸火漆印，开启生日花信',
    revealAria: '在信纸上移动指针显影祝福；也可按回车键直接读完',
  },
  accessibility: {
    sceneLabel: '封存的花信生日贺卡',
    letterLabel: '生日祝福信',
    controlsLabel: '贺卡控制',
    openedStatus: '花信已经打开，可以移动光芒显影祝福。',
    completingStatus: '光芒已经唤醒祝福，文字正在完整显现。',
    readingReadyStatus: '祝福已经完整显现。请慢慢读完，准备好后翻至下一页。',
  },
} as const;

export const theme = {
  background: '#F3EEE6',
  cover: '#684B53',
  rose: '#CDAEAA',
  gold: '#C3A15D',
  paper: '#F7F1E7',
  ink: '#343D38',
} as const;

export const experience = {
  revealThreshold: 0.65,
  idleHintDelayMs: 3000,
  maxTiltDegrees: 4,
} as const;
