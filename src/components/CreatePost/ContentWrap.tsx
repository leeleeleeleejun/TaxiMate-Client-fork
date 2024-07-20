import {
  ContentContainer,
  ContentTitle,
} from '@/components/CreatePost/createPost.style.ts';

const ContentWrap = ({
  theme,
  explain,
  SvgIcon,
  children,
}: {
  theme: string;
  explain?: string;
  SvgIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}) => {
  return (
    <ContentContainer>
      <ContentTitle>
        <div>
          {theme}
          <SvgIcon />
        </div>
        {explain && <p>{explain}</p>}
      </ContentTitle>
      {children}
    </ContentContainer>
  );
};

export default ContentWrap;
