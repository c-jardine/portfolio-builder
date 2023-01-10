import { NextPage } from 'next';
import { ResumeLayout } from '../src/layouts';
import { sanity } from '../src/studio/client';
import { getResumeQuery } from '../src/studio/queries';
import { ResumeType } from '../src/studio/types';

interface ResumePageProps {
  resume: ResumeType;
}

const ResumePage: NextPage = (props: ResumePageProps) => {
  return <ResumeLayout {...props.resume} />;
};

export async function getStaticProps() {
  const resume: ResumeType = await sanity.fetch(getResumeQuery);

  return { props: { resume } };
}

export default ResumePage;
