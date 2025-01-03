interface MenuLogoProps {
  className?: string;
}

export default function MenuLogo({ className }: MenuLogoProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      className={"quieter parent-hover-link-unquiet flex-none" + className}
      style={{ shapeRendering: "geometricPrecision" }}
    >
      <use
        fill="currentColor"
        href="/icons/icon_definitions.svg?v=68b23d569e0a0c2f5529fd9b824929e7#List"
      ></use>
    </svg>
  );
}
