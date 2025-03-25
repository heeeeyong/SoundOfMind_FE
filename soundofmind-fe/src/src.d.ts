// svg.d.ts
// 리액트 컴포넌트 형태로 svg를 사용할때. 현재는 vite-plugin-svgr 를 설치했기 때문에 안써도됨.
//declare module '*.svg' {
//  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//  export default value;
//}

// 기존 js에서의 import 방식을 사용.
declare module '*.svg' {
  const content: string;
  export default content;
}
