import Image from "next/image";
import Link from "next/link";
import * as runtime from "react/jsx-runtime";

function useMdxComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

const components = {
  Image,
  Link,
};

type MdxProps = { code: string };

export default function MdxComponent({ code }: MdxProps) {
  const Component = useMdxComponent(code);
  return <Component components={components} />;
}
