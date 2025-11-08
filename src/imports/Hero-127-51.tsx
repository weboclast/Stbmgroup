import svgPaths from "./svg-t2fboeih7q";
import imgLogo1 from "figma:asset/877ef1f4cf9c211a2f19e70ab668bc51fb2dc37b.png";
import imgRectangle1532 from "figma:asset/3a3693052446f1fcc87c2d1727c2c120378f61ed.png";
import { imgLogo } from "./svg-edsur";

function Group() {
  return (
    <div className="absolute contents left-[7.04px] top-[15.77px]">
      <div className="absolute h-[52.389px] left-[0.02px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7.027px_5.76px] mask-size-[41.709px_45.765px] top-[10.01px] w-[50.105px]" data-name="Logo" style={{ maskImage: `url('${imgLogo}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[127.89%] left-0 max-w-none top-0 w-[299.37%]" src={imgLogo1} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-[10px]" data-name="Mask group">
      <div className="absolute bg-white h-[44px] left-[48.77px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-48.768px_-6.707px] mask-size-[150px_67px] top-[16.71px] w-[100px]" style={{ maskImage: `url('${imgRectangle1532}')` }} />
      <div className="absolute bg-white bottom-[2.44px] h-[10px] left-[48.77px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-48.768px_-54.561px] mask-size-[150px_67px] w-[100px]" style={{ maskImage: `url('${imgRectangle1532}')` }} />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[77px] relative shrink-0 w-[150px]">
      <Group />
      <MaskGroup />
    </div>
  );
}

function ShoppingBasket() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shopping-basket-02 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-basket-02 1">
          <path d={svgPaths.p30a89100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2399fd00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p23753670} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2aeed470} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pc1b0b00} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Cart() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[50px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Cart">
      <ShoppingBasket />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[24px] whitespace-pre">Enquiry Basket</p>
      </div>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#ff5757] box-border content-stretch flex gap-[8px] h-[50px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Button_Primary">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[24px] whitespace-pre">Request Quote</p>
      </div>
    </div>
  );
}

function RightButtons() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Right buttons">
      <Cart />
      <ButtonPrimary />
    </div>
  );
}

function Down() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="down-1 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="down-1 1">
          <path d={svgPaths.p2e49ee60} id="Vector" stroke="var(--stroke-0, #E7E8EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link 1">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[16px] whitespace-pre">Solutions</p>
      </div>
      <Down />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Link 2">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[16px] whitespace-pre">Resources</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Link 3">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[16px] whitespace-pre">About</p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Links">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1400px]" data-name="Header">
      <Frame />
      <RightButtons />
      <Links />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center not-italic relative shrink-0 text-center w-[720px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[64px] min-w-full relative shrink-0 text-[56px] text-white tracking-[-1px] w-[min-content]">Your Trusted Food Tech Solutions Partner</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] opacity-70 relative shrink-0 text-[18px] text-neutral-50 w-[680px]">Complete turnkey projects. Premium equipment supply. Expert installation. One partner for transforming your food processing vision into reality.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ff5757] box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[30px] not-italic relative shrink-0 text-[16px] text-center text-neutral-50 text-nowrap whitespace-pre">Explore Solutions</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[30px] not-italic relative shrink-0 text-[16px] text-center text-neutral-50 text-nowrap whitespace-pre">View Equipment Catalog</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <Button />
      <Button1 />
    </div>
  );
}

function TextButton() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-[856px]" data-name="Text_Button">
      <Text />
      <Buttons />
    </div>
  );
}

function HeroImage() {
  return <div className="basis-0 bg-white grow min-h-px min-w-px rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-[1091px]" data-name="Hero_Image" />;
}

export default function Hero() {
  return (
    <div className="bg-[#12141d] relative size-full" data-name="Hero">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-center pb-0 pt-[20px] px-[100px] relative size-full">
          <Header />
          <TextButton />
          <HeroImage />
        </div>
      </div>
    </div>
  );
}