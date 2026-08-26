import svgPaths from "./svg-cugjns10t5";
import imgSubtract from "figma:asset/eedd6777a342ee6980b7cbdff682ad44276edcc7.png";
import imgRectangle3468493 from "figma:asset/366bd7725fd9da7627d793892022b50b0fd3e15d.png";
import imgRectangle3468494 from "figma:asset/f772beddbdc5783c1f642b57642b9ba08be06631.png";
import imgRectangle3468495 from "figma:asset/f1f742d75d3bf286c5238ee77a378527d2ad5dee.png";
import imgRectangle3468496 from "figma:asset/2c6cab9107ca70f47fc46b4f676967672907e959.png";
import imgRectangle3468497 from "figma:asset/06c5416deb3718a7dd2f789327faed191e8342fb.png";
import imgRectangle3468498 from "figma:asset/a45a7eea5292302e1e21cbd28ea9487fcee97763.png";
import imgRectangle3468499 from "figma:asset/b140f36b2651ce28f3281e08f75e687ede180566.png";
import imgRectangle3468500 from "figma:asset/d66534bc42499fd07c27ac07d85952b0556aef43.png";
import imgRectangle3468501 from "figma:asset/84beda11bd80ee8797114fc1c89adaa9540b084f.png";
import imgRectangle3468502 from "figma:asset/a1f338194c12a4c5c66955b017a759cf2e630c27.png";
import imgRectangle3468503 from "figma:asset/f40ecdc25207dcb169b8bfa3f25d5d9b89a693f8.png";
import imgBannerImg from "figma:asset/7a9f925e7c13e4d82aa389b2b7c241f6d1b958d8.png";
import imgIllustration from "figma:asset/b8e73351bce1a48d0d6d4c970536ecfe243f8bc2.png";
import imgIllustration1 from "figma:asset/34087925000d97f4c2f757f61dd05e28a2e2be35.png";
import imgIllustration2 from "figma:asset/916c34ded2eb5d7d683acb702d7e90838e3e4e9a.png";
import imgVideoCardPlaceholder from "figma:asset/ddadbd9787689ebeb28f842c90ae1bc5b87607bc.png";
import imgGradients17 from "figma:asset/e4931fc525318728fb14c9dbe3a78eb541c6daec.png";

function Waffle() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-center relative shrink-0 w-[68px]" data-name="Waffle">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Grid Dots">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15.5px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
            <path d={svgPaths.p8171680} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Left">
      <Waffle />
    </div>
  );
}

function BrandName() {
  return (
    <div className="content-stretch flex h-[44px] items-center relative shrink-0" data-name="Brand name">
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[16px] whitespace-nowrap">
        <p className="leading-[22px]">Viva Engage</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Left">
      <Left1 />
      <BrandName />
    </div>
  );
}

function TextAndIndicator() {
  return (
    <div className="content-stretch flex items-center pb-px relative shrink-0" data-name="Text and indicator">
      <p className="font-['Segoe_UI:Regular',sans-serif] h-[20px] leading-[20px] not-italic relative shrink-0 text-[#616161] text-[14px] w-[169px]">Search Viva Engage</p>
    </div>
  );
}

function IconAndText() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-0 pl-[16px] top-1/2" data-name="Icon and text">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2e369600} fill="var(--fill-0, #616161)" id="Shape" />
          </svg>
        </div>
      </div>
      <TextAndIndicator />
    </div>
  );
}

function Search() {
  return (
    <div className="bg-white h-[32px] overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] shrink-0 w-[429px]" data-name="Search">
      <IconAndText />
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="span">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Globe">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p29741580} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[48px]" data-name="div">
      <Span />
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="span">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Emoji">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.pf2a3880} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[48px]" data-name="div">
      <Span1 />
    </div>
  );
}

function Span2() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="span">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Settings">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-1/2 top-1/2 w-[16.227px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2271 17">
            <path d={svgPaths.p238a5980} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[48px]" data-name="div">
      <Span2 />
    </div>
  );
}

function Span3() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="span">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Question">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[8px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p103bb0b0} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[48px]" data-name="div">
      <Span3 />
    </div>
  );
}

function Span4() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="span">
      <div className="relative shrink-0 size-[20px]" data-name="Avatar">
        <div className="absolute left-0 size-[20px] top-0" data-name="Subtract">
          <img alt="" className="absolute block max-w-none size-full" height="20" src={imgSubtract} width="20" />
        </div>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[48px]" data-name="div">
      <Span4 />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-end min-h-px min-w-px relative" data-name="Icons">
      <Div />
      <Div1 />
      <Div2 />
      <Div3 />
      <Div4 />
    </div>
  );
}

function Right() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Right">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative w-full">
          <Icons />
        </div>
      </div>
    </div>
  );
}

function SuiteHeader() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-[1_0_0] gap-[176px] h-[48px] items-center min-h-px min-w-px relative shadow-[0px_1.6px_3.6px_0px_rgba(0,0,0,0.13),0px_0.3px_0.9px_0px_rgba(0,0,0,0.11)]" data-name="Suite header">
      <Left />
      <Search />
      <Right />
    </div>
  );
}

function DivActive() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Icon() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[24px]" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Home">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14.996px] left-1/2 top-[calc(50%-0.5px)] w-[14px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14.9957">
            <path d={svgPaths.p3f337080} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
            <p className="leading-[20px]">Home</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextBadge() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label />
    </div>
  );
}

function Link() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Icon />
          </div>
          <TextBadge />
        </div>
      </div>
    </div>
  );
}

function TextOffset() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-center justify-end pb-[0.5px] px-[2px] relative shrink-0" data-name="Text offset">
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
        <p className="leading-[14px]">20+</p>
      </div>
    </div>
  );
}

function IconBadge() {
  return (
    <div className="content-stretch flex items-start pr-[18px] relative shrink-0" data-name="icon+badge">
      <div className="mr-[-18px] overflow-clip relative shrink-0 size-[32px]" data-name="Mail Inbox">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p1dc07700} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
      <div className="bg-[#c50f1f] content-stretch flex h-[16px] items-center justify-center min-w-[16px] mr-[-18px] overflow-clip px-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <TextOffset />
      </div>
    </div>
  );
}

function TextOffset1() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-center justify-end pb-[0.5px] px-[2px] relative shrink-0" data-name="Text offset">
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
        <p className="leading-[14px]">3</p>
      </div>
    </div>
  );
}

function IconBadge1() {
  return (
    <div className="content-stretch flex items-start pr-[18px] relative shrink-0" data-name="icon+badge">
      <div className="mr-[-18px] overflow-clip relative shrink-0 size-[32px]" data-name="Alert">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.5px] left-1/2 top-[calc(50%-0.25px)] w-[13.996px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9957 15.5">
            <path d={svgPaths.p50f8a00} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
      <div className="bg-[#c50f1f] content-stretch flex h-[16px] items-center justify-center min-w-[16px] mr-[-18px] overflow-clip px-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <TextOffset1 />
      </div>
    </div>
  );
}

function Icons1() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center pr-[4px] relative shrink-0" data-name="icons">
      <IconBadge />
      <IconBadge1 />
    </div>
  );
}

function DivActive1() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Avatar() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="avatar">
      <div className="relative shrink-0 size-[20px]" data-name="Avatar">
        <div className="absolute left-0 size-[20px] top-0" data-name="Subtract">
          <img alt="" className="absolute block max-w-none size-full" height="20" src={imgSubtract} width="20" />
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24px] items-center min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
        <p className="leading-[20px]">Mona Kane</p>
      </div>
    </div>
  );
}

function TextBadge1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[24px]" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="More Horizontal">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[2px] left-1/2 top-1/2 w-[10px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
            <path d={svgPaths.p22494620} fill="var(--fill-0, #424242)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <Avatar />
          <TextBadge1 />
          <div className="flex flex-row items-center self-stretch">
            <Icon1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336 16">
        <g id="Divider">
          <line id="Line 9013" stroke="var(--stroke-0, #E0E0E0)" x1="20" x2="328" y1="7.5" y2="7.5" />
        </g>
      </svg>
    </div>
  );
}

function DivActive2() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Icon2() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[24px]" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="People Community">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p19084b40} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24px] items-center min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
        <p className="leading-[20px]">Communities</p>
      </div>
    </div>
  );
}

function TextBadge2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Icon2 />
          </div>
          <TextBadge2 />
        </div>
      </div>
    </div>
  );
}

function DivActive3() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Icon3() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[24px]" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="People Star">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.5px] left-[calc(50%+0.25px)] top-[calc(50%+0.75px)] w-[17.5px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 16.5">
            <path d={svgPaths.p7dd3280} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24px] items-center min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
        <p className="leading-[20px]">Leaders</p>
      </div>
    </div>
  );
}

function TextBadge3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label3 />
    </div>
  );
}

function Link3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Icon3 />
          </div>
          <TextBadge3 />
        </div>
      </div>
    </div>
  );
}

function DivActive4() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Icon4() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[24px]" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chat Bubbles Question">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.113px] left-[calc(50%-0.02px)] top-[calc(50%+0.06px)] w-[16.039px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0391 16.1126">
            <path d={svgPaths.pae0ab80} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24px] items-center min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
        <p className="leading-[20px]">Answers</p>
      </div>
    </div>
  );
}

function TextBadge4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label4 />
    </div>
  );
}

function Link4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Icon4 />
          </div>
          <TextBadge4 />
        </div>
      </div>
    </div>
  );
}

function DivActive5() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Icon5() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[24px]" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Person Board">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.pa680c00} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24px] items-center min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
        <p className="leading-[20px]">Storylines</p>
      </div>
    </div>
  );
}

function TextBadge5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label5 />
    </div>
  );
}

function Link5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Icon5 />
          </div>
          <TextBadge5 />
        </div>
      </div>
    </div>
  );
}

function DivActive6() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Icon6() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[24px]" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Data Trending">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p309672c0} fill="var(--fill-0, #242424)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24px] items-center min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
        <p className="leading-[20px]">Analytics</p>
      </div>
    </div>
  );
}

function TextBadge6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label6 />
    </div>
  );
}

function Link6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Icon6 />
          </div>
          <TextBadge6 />
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336 16">
        <g id="Divider">
          <line id="Line 9013" stroke="var(--stroke-0, #E0E0E0)" x1="20" x2="328" y1="7.5" y2="7.5" />
        </g>
      </svg>
    </div>
  );
}

function MainPillars() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main pillars">
      <div className="content-stretch flex items-center py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive />
        <Link />
        <div className="flex flex-row items-center self-stretch">
          <Icons1 />
        </div>
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive1 />
        <Link1 />
      </div>
      <Divider />
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive2 />
        <Link2 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive3 />
        <Link3 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive4 />
        <Link4 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive5 />
        <Link5 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive6 />
        <Link6 />
      </div>
      <Divider1 />
    </div>
  );
}

function DivSpan() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.Span">
      <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] w-[176px]">Favorites</p>
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[8px] relative w-full">
          <DivSpan />
        </div>
      </div>
    </div>
  );
}

function DivActive7() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Checkmark Starburst">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[9.898px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.89819 9.89819">
            <path d={svgPaths.p2e5ee480} fill="var(--fill-0, #605E5C)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[24px] items-center min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">All company</p>
      </div>
      <Icon7 />
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="div">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bc2f32] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">20+</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="badge">
      <div className="bg-[#fdf6f6] content-stretch flex flex-col h-[20px] items-start px-[6px] relative rounded-[20px] shrink-0" data-name="CollapsibleLinkBadge">
        <Div5 />
      </div>
    </div>
  );
}

function TextBadge7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label7 />
      <Badge />
    </div>
  );
}

function Link7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="CollapsibleLinkAvatar">
            <div className="absolute inset-0 rounded-[4px] shadow-[0px_1.6px_3.6px_0px_rgba(0,0,0,0.13),0px_0.3px_0.9px_0px_rgba(0,0,0,0.11)]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle3468493} />
            </div>
          </div>
          <TextBadge7 />
        </div>
      </div>
    </div>
  );
}

function DivActive8() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Label8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24px] items-center min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
        <p className="leading-[20px]">Giving Campaign</p>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="div">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bc2f32] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">8</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="badge">
      <div className="bg-[#fdf6f6] content-stretch flex flex-col h-[20px] items-start px-[6px] relative rounded-[20px] shrink-0" data-name="CollapsibleLinkBadge">
        <Div6 />
      </div>
    </div>
  );
}

function TextBadge8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label8 />
      <Badge1 />
    </div>
  );
}

function Link8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="CollapsibleLinkAvatar">
            <div className="absolute inset-0 rounded-[4px] shadow-[0px_1.6px_3.6px_0px_rgba(0,0,0,0.13),0px_0.3px_0.9px_0px_rgba(0,0,0,0.11)]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                <img alt="" className="absolute h-[191.67%] left-[-93.73%] max-w-none top-[-16.94%] w-[287.46%]" src={imgRectangle3468494} />
              </div>
            </div>
          </div>
          <TextBadge8 />
        </div>
      </div>
    </div>
  );
}

function DivActive9() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Label9() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
            <p className="leading-[20px]">Copilot Early Adopters</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextBadge9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label9 />
    </div>
  );
}

function Link9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="CollapsibleLinkAvatar">
            <div className="absolute inset-0 rounded-[4px] shadow-[0px_1.6px_3.6px_0px_rgba(0,0,0,0.13),0px_0.3px_0.9px_0px_rgba(0,0,0,0.11)]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle3468495} />
            </div>
          </div>
          <TextBadge9 />
        </div>
      </div>
    </div>
  );
}

function DivActive10() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Checkmark Starburst">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[9.898px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.89819 9.89819">
            <path d={svgPaths.p2e5ee480} fill="var(--fill-0, #605E5C)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[24px] items-center min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Women ERG</p>
      </div>
      <Icon8 />
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="div">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bc2f32] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">17</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="badge">
      <div className="bg-[#fdf6f6] content-stretch flex flex-col h-[20px] items-start px-[6px] relative rounded-[20px] shrink-0" data-name="CollapsibleLinkBadge">
        <Div7 />
      </div>
    </div>
  );
}

function TextBadge10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label10 />
      <Badge2 />
    </div>
  );
}

function Link10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="CollapsibleLinkAvatar">
            <div className="absolute inset-0 rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.14)]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                <img alt="" className="absolute h-full left-[-41.67%] max-w-none top-0 w-[150%]" src={imgRectangle3468496} />
              </div>
            </div>
          </div>
          <TextBadge10 />
        </div>
      </div>
    </div>
  );
}

function Favourites() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Favourites">
      <Title />
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive7 />
        <Link7 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive8 />
        <Link8 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive9 />
        <Link9 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive10 />
        <Link10 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[14px] w-[176px]">Communities</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[8px] pt-[4px] px-[20px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function DivActive11() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Icon9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Checkmark Starburst">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[9.898px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.89819 9.89819">
            <path d={svgPaths.p2e5ee480} fill="var(--fill-0, #605E5C)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pr-[8px] relative size-full">
          <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Connections WFH</p>
          </div>
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="div">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">6</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="badge">
      <div className="bg-[#ebebeb] content-stretch flex flex-col h-[20px] items-center justify-center px-[6px] relative rounded-[20px] shrink-0" data-name="CollapsibleLinkBadge">
        <Div8 />
      </div>
    </div>
  );
}

function TextBadge11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label11 />
      <Badge3 />
    </div>
  );
}

function Link11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="CollapsibleLinkAvatar">
            <div className="absolute inset-0 rounded-[4px] shadow-[0px_1.6px_3.6px_0px_rgba(0,0,0,0.13),0px_0.3px_0.9px_0px_rgba(0,0,0,0.11)]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle3468497} />
            </div>
          </div>
          <TextBadge11 />
        </div>
      </div>
    </div>
  );
}

function DivActive12() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Icon10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Lock Closed">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[7.5px] left-1/2 top-1/2 w-[6px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
            <path d={svgPaths.p1d73ef00} fill="var(--fill-0, #605E5C)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pr-[8px] relative size-full">
          <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Help Desk Support</p>
          </div>
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="div">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">20+</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="badge">
      <div className="bg-[#ebebeb] content-stretch flex flex-col h-[20px] items-center justify-center px-[6px] relative rounded-[20px] shrink-0" data-name="CollapsibleLinkBadge">
        <Div9 />
      </div>
    </div>
  );
}

function TextBadge12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label12 />
      <Badge4 />
    </div>
  );
}

function Link12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="CollapsibleLinkAvatar">
            <div className="absolute inset-0 rounded-[4px] shadow-[0px_1.6px_3.6px_0px_rgba(0,0,0,0.13),0px_0.3px_0.9px_0px_rgba(0,0,0,0.11)]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                <img alt="" className="absolute h-[145.57%] left-[-43.54%] max-w-none top-[-21.22%] w-[194.12%]" src={imgRectangle3468498} />
              </div>
            </div>
          </div>
          <TextBadge12 />
        </div>
      </div>
    </div>
  );
}

function DivActive13() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Label13() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
            <p className="leading-[20px]">Plant Lovers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="div">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">1</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="badge">
      <div className="bg-[#ebebeb] content-stretch flex flex-col h-[20px] items-center justify-center px-[6px] relative rounded-[20px] shrink-0" data-name="CollapsibleLinkBadge">
        <Div10 />
      </div>
    </div>
  );
}

function TextBadge13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label13 />
      <Badge5 />
    </div>
  );
}

function Link13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="CollapsibleLinkAvatar">
            <div className="absolute inset-0 rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.14)]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                <img alt="" className="absolute h-full left-[-41.67%] max-w-none top-0 w-[150%]" src={imgRectangle3468499} />
              </div>
            </div>
          </div>
          <TextBadge13 />
        </div>
      </div>
    </div>
  );
}

function DivActive14() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Icon11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Checkmark Starburst">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[9.898px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.89819 9.89819">
            <path d={svgPaths.p2e5ee480} fill="var(--fill-0, #605E5C)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pr-[8px] relative size-full">
          <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Contoso Team UX (Desig...</p>
          </div>
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="div">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">20+</p>
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="badge">
      <div className="bg-[#ebebeb] content-stretch flex flex-col h-[20px] items-center justify-center px-[6px] relative rounded-[20px] shrink-0" data-name="CollapsibleLinkBadge">
        <Div11 />
      </div>
    </div>
  );
}

function TextBadge14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label14 />
      <Badge6 />
    </div>
  );
}

function Link14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="CollapsibleLinkAvatar">
            <div className="absolute inset-0 rounded-[4px] shadow-[0px_1.6px_3.6px_0px_rgba(0,0,0,0.13),0px_0.3px_0.9px_0px_rgba(0,0,0,0.11)]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle3468500} />
            </div>
          </div>
          <TextBadge14 />
        </div>
      </div>
    </div>
  );
}

function DivActive15() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Label15() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
            <p className="leading-[20px]">Women in Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="div">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">7</p>
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="badge">
      <div className="bg-[#ebebeb] content-stretch flex flex-col h-[20px] items-center justify-center px-[6px] relative rounded-[20px] shrink-0" data-name="CollapsibleLinkBadge">
        <Div12 />
      </div>
    </div>
  );
}

function TextBadge15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label15 />
      <Badge7 />
    </div>
  );
}

function Link15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="CollapsibleLinkAvatar">
            <div className="absolute inset-0 shadow-[0px_1.6px_3.6px_0px_rgba(0,0,0,0.13),0px_0.3px_0.9px_0px_rgba(0,0,0,0.11)]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3468501} />
            </div>
          </div>
          <TextBadge15 />
        </div>
      </div>
    </div>
  );
}

function DivActive16() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Label16() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
            <p className="leading-[20px]">Safety</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="div">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[14px]">12</p>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="badge">
      <div className="bg-[#ebebeb] content-stretch flex flex-col h-[20px] items-center justify-center px-[6px] relative rounded-[20px] shrink-0" data-name="CollapsibleLinkBadge">
        <Div13 />
      </div>
    </div>
  );
}

function TextBadge16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label16 />
      <Badge8 />
    </div>
  );
}

function Link16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="CollapsibleLinkAvatar">
            <div className="absolute inset-0 rounded-[4px] shadow-[0px_1.6px_3.6px_0px_rgba(0,0,0,0.13),0px_0.3px_0.9px_0px_rgba(0,0,0,0.11)]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                <img alt="" className="absolute h-[103.57%] left-[-31.55%] max-w-none top-0 w-[155.34%]" src={imgRectangle3468502} />
              </div>
            </div>
          </div>
          <TextBadge16 />
        </div>
      </div>
    </div>
  );
}

function DivActive17() {
  return <div className="content-stretch flex items-center justify-center rounded-[4px] shrink-0 w-[16px]" data-name="div.Active" />;
}

function Label17() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#242424] text-[14px]">
            <p className="leading-[20px]">New Employees</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextBadge17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="text + badge">
      <Label17 />
    </div>
  );
}

function Link17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="CollapsibleLinkAvatar">
            <div className="absolute inset-0 rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.14)]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle3468503} />
            </div>
          </div>
          <TextBadge17 />
        </div>
      </div>
    </div>
  );
}

function Communities() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Communities">
      <Title1 />
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive11 />
        <Link11 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive12 />
        <Link12 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive13 />
        <Link13 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive14 />
        <Link14 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive15 />
        <Link15 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive16 />
        <Link16 />
      </div>
      <div className="content-stretch flex items-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="CollapsiblelinkItem">
        <DivActive17 />
        <Link17 />
      </div>
    </div>
  );
}

function MyCommunities() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="My communities">
      <Favourites />
      <Communities />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex h-[1575px] items-start relative shrink-0" data-name="nav">
      <div className="bg-[#fafafa] h-full max-w-[360px] min-w-[260px] relative shrink-0 w-[360px]" data-name="LeftNav">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-l border-r border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] p-[12px] relative size-full">
          <MainPillars />
          <MyCommunities />
        </div>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
      <p className="flex-[1_0_0] font-['Segoe_UI:Semibold',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#242424] text-[24px]">Fuel AI transformation—create a verified Copilot community instantly</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame />
      <p className="font-['Segoe_UI:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#101010] text-[16px] w-[498px]">🔥 Organizations with an active Copilot community see a 30% higher adoption rate.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Content">
      <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{`Create a Copilot community `}</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <div className="bg-[#006cbf] content-stretch flex items-start px-[24px] py-[6px] relative rounded-[20px] shrink-0" data-name="RoundButton">
        <Content />
      </div>
      <div className="font-['Segoe_UI:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#101010] text-[0px] w-[498px]">
        <p className="leading-[22px] mb-[8px] text-[16px]">Already created a Copilot community?</p>
        <p className="leading-[20px] text-[#106ebe] text-[14px]">Apply adoption features to an existing community.</p>
      </div>
    </div>
  );
}

function AtomModalHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-center min-h-px min-w-px relative rounded-tl-[8px] rounded-tr-[8px]" data-name="Atom / Modal / Header">
      <Frame16 />
      <Frame15 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full">
      <AtomModalHeader />
      <div className="h-[284px] relative shrink-0 w-[454px]" data-name="Banner IMG">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.1%] max-w-none top-0 w-[163.95%]" src={imgBannerImg} />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center not-italic px-[160px] relative text-center w-full">
          <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[32px] relative shrink-0 text-[#242424] text-[24px] w-full">Zero setup, preloaded content, insights on demand</p>
          <p className="font-['Segoe_UI:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#101010] text-[16px] w-full">Empower your organization to innovate faster with a trusted Copilot community.</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[16px] w-full">
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-end leading-[0] relative shrink-0 text-[#242424] w-[203px]">
        <p className="leading-[22px]">Content that works</p>
      </div>
      <p className="font-['Segoe_UI:Regular',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#101010] w-[min-content]">Get Microsoft-curated content that’s ready to go. With Intelligent Importer, your existing knowledge fuels discovery and helps your community find answers faster through Related Questions.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative size-full">
        <div className="content-stretch flex h-[128px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="AI Cell">
          <div className="relative shrink-0 size-[128px]" data-name="Illustration">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIllustration} />
          </div>
        </div>
        <Frame9 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[16px] w-full">
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-end leading-[0] relative shrink-0 text-[#242424] w-full">
        <p className="leading-[22px]">The power of community</p>
      </div>
      <p className="font-['Segoe_UI:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#101010] w-full">Build a vibrant community where knowledge thrives. From authoritative answers to shared learnings and guidance — it’s where your organization connects, learns, and leads.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative size-full">
        <div className="content-stretch flex h-[128px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="People Heart">
          <div className="relative shrink-0 size-[128px]" data-name="Illustration">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIllustration1} />
          </div>
        </div>
        <Frame10 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[16px] w-full">
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-end leading-[0] relative shrink-0 text-[#242424] w-[212px]">
        <p className="leading-[22px]">Measure what matters</p>
      </div>
      <p className="font-['Segoe_UI:Regular',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#101010] w-[min-content]">Understand how your organization feels about AI. Use built-in analytics to track engagement — and see 1.4x higher Copilot usage with an active community.</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white flex-[1_0_0] h-[372px] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative size-full">
        <div className="content-stretch flex h-[128px] items-center justify-center overflow-clip relative shrink-0 w-[186px]" data-name="Data Trending">
          <div className="relative shrink-0 size-[128px]" data-name="Illustration">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIllustration2} />
          </div>
        </div>
        <Frame11 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start py-[32px] relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#242424] content-stretch flex items-start left-1/2 p-[12px] rounded-[4px] top-1/2" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Play">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.959px] left-[calc(50%+1.43px)] top-1/2 w-[16.862px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8616 17.9586">
            <path d={svgPaths.p151a6880} fill="var(--fill-0, white)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function VideoCardPlaceholder() {
  return (
    <div className="h-[404px] overflow-clip relative rounded-[8px] shrink-0 w-[774px]" data-name="VideoCardPlaceholder">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[107.92%] left-[-0.44%] max-w-none top-[-7.92%] w-[100.88%]" src={imgVideoCardPlaceholder} />
      </div>
      <Icon12 />
    </div>
  );
}

function SelectContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Select content">
      <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#242424] text-[24px] text-center w-[min-content]">Learn more about the Copilot community</p>
      <VideoCardPlaceholder />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 w-[984px]">
      <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[32px] relative shrink-0 text-[#242424] text-[24px] text-center w-[974px]">{`Ready to lead your organization's AI journey?`}</p>
      <p className="font-['Segoe_UI:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#101010] text-[16px] whitespace-nowrap">Your verified Copilot community is one click away.</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Content">
      <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Create a Copilot community today</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-center justify-center ml-0 mt-0 relative row-1 w-[984px]">
      <Frame3 />
      <div className="bg-[#006cbf] content-stretch flex items-start px-[24px] py-[6px] relative rounded-[20px] shrink-0" data-name="RoundButton">
        <Content1 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-[48px] top-[48px] w-[984px]">
      <Frame7 />
      <Frame6 />
      <SelectContent />
      <Group />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[1324px] left-0 right-0 top-[-546px]" data-name="02">
      <div className="absolute flex h-[481px] items-center justify-center left-0 top-[547px] w-[1080px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[1080px] relative w-[481px]" data-name="gradients-17">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[#c4c4c4] inset-0" />
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[1007724712738846500%] left-[-7012384840180494%] max-w-none top-[-1005634027724342100%] w-[2661890338217396000%]" src={imgGradients17} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gradients() {
  return (
    <div className="absolute contents inset-[0_0_-10.16%_0]" data-name="Gradients">
      <div className="absolute inset-[0_0_-10.16%_0] rounded-tl-[8px] rounded-tr-[8px]" data-name="full-vertical gradient" style={{ backgroundImage: "linear-gradient(rgba(245, 245, 245, 0) 0%, rgba(245, 245, 245, 0.016) 4.6963%, rgba(245, 245, 245, 0.03) 8.9037%, rgba(245, 245, 245, 0.055) 12.8%, rgba(245, 245, 245, 0.075) 16.563%, rgba(245, 245, 245, 0.1) 20.37%, rgba(245, 245, 245, 0.133) 24.4%, rgba(245, 245, 245, 0.173) 28.83%, rgba(245, 245, 245, 0.216) 33.837%, rgba(245, 245, 245, 0.267) 39.6%, rgba(245, 245, 245, 0.32) 46.296%, rgba(245, 245, 245, 0.39) 54.104%, rgba(245, 245, 245, 0.463) 63.2%, rgba(245, 245, 245, 0.55) 73.763%, rgba(245, 245, 245, 0.643) 85.97%, rgba(245, 245, 245, 0.75) 100%)" }} />
      <div className="absolute inset-[0_0_-10.16%_0]" data-name="half-vertical gradient" style={{ backgroundImage: "linear-gradient(rgba(245, 245, 245, 0) 0%, rgba(245, 245, 245, 0.02) 4.6963%, rgba(245, 245, 245, 0.043) 8.9037%, rgba(245, 245, 245, 0.07) 12.8%, rgba(245, 245, 245, 0.1) 16.563%, rgba(245, 245, 245, 0.137) 20.37%, rgba(245, 245, 245, 0.18) 24.4%, rgba(245, 245, 245, 0.227) 28.83%, rgba(245, 245, 245, 0.286) 33.837%, rgba(245, 245, 245, 0.353) 39.6%, rgba(245, 245, 245, 0.43) 46.296%, rgba(245, 245, 245, 0.518) 54.104%, rgba(245, 245, 245, 0.62) 63.2%, rgba(245, 245, 245, 0.73) 73.763%, rgba(245, 245, 245, 0.86) 85.97%, rgb(245, 245, 245) 100%)" }} />
      <div className="absolute inset-0" data-name="horizontal gradient" style={{ backgroundImage: "linear-gradient(90deg, rgba(245, 245, 245, 0.72) 0%, rgba(245, 245, 245, 0.718) 11.79%, rgba(245, 245, 245, 0.706) 21.384%, rgba(245, 245, 245, 0.686) 29.12%, rgba(245, 245, 245, 0.663) 35.336%, rgba(245, 245, 245, 0.635) 40.37%, rgba(245, 245, 245, 0.604) 44.56%, rgba(245, 245, 245, 0.565) 48.243%, rgba(245, 245, 245, 0.525) 51.757%, rgba(245, 245, 245, 0.486) 55.44%, rgba(245, 245, 245, 0.443) 59.63%, rgba(245, 245, 245, 0.404) 64.664%, rgba(245, 245, 245, 0.36) 70.88%, rgba(245, 245, 245, 0.32) 78.616%, rgba(245, 245, 245, 0.286) 88.21%, rgba(245, 245, 245, 0.25) 100%)" }} />
    </div>
  );
}

function HeroBg() {
  return (
    <div className="absolute h-[442.997px] left-0 opacity-70 overflow-clip top-0 w-[1077px]" data-name="Hero BG">
      <Component />
      <Gradients />
    </div>
  );
}

function LandingPage() {
  return (
    <div className="bg-[#f5f5f5] h-[1629px] relative shrink-0 w-[1080px]" data-name="Landing Page">
      <Frame2 />
      <HeroBg />
    </div>
  );
}

function NavContent() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full z-[1]" data-name="nav + content">
      <Nav />
      <LandingPage />
    </div>
  );
}

function MainFavbar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start min-h-px min-w-px overflow-clip relative rounded-[8px]" data-name="Main+Favbar">
      <div className="bg-white content-stretch flex items-start relative shadow-[0px_1.6px_3.6px_0px_rgba(0,0,0,0.13),0px_0.3px_0.9px_0px_rgba(0,0,0,0.11)] shrink-0 w-full z-[2]" data-name="Viva Engage - Suite Headers - Web">
        <SuiteHeader />
      </div>
      <NavContent />
    </div>
  );
}

function NavHeader() {
  return (
    <div className="absolute content-stretch flex h-[1677px] items-start left-0 rounded-[8px] top-0 w-[1440px]" data-name="Nav & Header">
      <MainFavbar />
    </div>
  );
}

export default function LandingPageEngage() {
  return (
    <div className="bg-[#faf9f8] relative rounded-[8px] size-full" data-name="Landing page_Engage">
      <NavHeader />
    </div>
  );
}