import gsap from 'gsap';
import type { TransitionBeforePreparationEvent } from 'astro:transitions/client';

interface PageMotionOptions {
  /** ページ固有の main 要素のセレクタ。一致しないページでは何もしない */
  main: string;
  /** フェードイン順に並べた対象のセレクタ (複数一致するものは全件)。フェードアウトはこの逆順 */
  targets: string[];
  /** フェードインのタイミング (フェードアウトは全ページ共通) */
  enter: { duration: number; stagger: number; delay: number };
}

type WindowFlag = Window & { __menuNavigating?: boolean };

const isStacked = () => window.matchMedia('(max-width: 1199px)').matches;
const isMenuNavigating = () => Boolean((window as WindowFlag).__menuNavigating);

/**
 * PC レイアウトでのページ表示 (フェードイン) / 退場 (フェードアウト) アニメーションを登録する。
 * 各ページの <script> から1回だけ呼ぶ (module script はページ遷移をまたいでも1回しか評価されない)。
 */
export function setupPageMotion({ main, targets, enter }: PageMotionOptions) {
  const collect = (): HTMLElement[] => {
    const root = document.querySelector(main);
    if (!root) return [];
    return targets.flatMap((sel) => Array.from(root.querySelectorAll<HTMLElement>(sel)));
  };

  document.addEventListener('astro:page-load', () => {
    if (isStacked()) return;
    const elements = collect();
    if (elements.length === 0) return;

    // メニュー経由の遷移ではメニューのフェードアウトが視覚的な遷移なので
    // GSAP のフェードインはスキップ。ただし CSS pre-hide で opacity:0 のままだと
    // メニュー消失後に見えないので opacity:1 を直接当てて可視化する。
    if (isMenuNavigating()) {
      gsap.set(elements, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(elements, { opacity: 0, y: 16 });
    gsap.to(elements, { opacity: 1, y: 0, ease: 'power2.out', ...enter });
  });

  // 次ページの読み込みとフェードアウトを並行させ、両方終わってから swap させる
  document.addEventListener('astro:before-preparation', (e) => {
    if (isMenuNavigating() || isStacked()) return;
    const elements = collect().reverse();
    if (elements.length === 0) return;

    const event = e as TransitionBeforePreparationEvent;
    const originalLoader = event.loader;
    event.loader = async () => {
      await Promise.all([
        originalLoader(),
        new Promise<void>((resolve) => {
          gsap.to(elements, {
            opacity: 0,
            y: 10,
            duration: 0.2,
            stagger: 0.02,
            ease: 'power2.in',
            onComplete: resolve,
          });
        }),
      ]);
    };
  });
}
