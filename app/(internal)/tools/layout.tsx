import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ToolsLayout({ children }: Props) {
  return <>{children}</>;
}
